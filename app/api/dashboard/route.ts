import { ObjectId, type Document } from 'mongodb'
import { withApiLogging } from '@/lib/apiLogging'
import { getDatabase } from '@/lib/auth/database'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'

export const runtime = 'nodejs'

const PAGE_SIZE = 25
const MAX_BODY_BYTES = 128 * 1024
const formTypes = [
  'contact',
  'newsletter',
  'solar_assessment',
  'customer_enquiry',
  'warranty_policy',
  'purchase_order',
  'invoice_receipt',
  'customer_agreement',
  'installation_checklist',
] as const
const sensitiveField = /password|token|secret|credential|private.?key|api.?key/i
const accountCollections = new Set(['auth_users', 'auth_sessions'])

type DashboardRole = 'admin' | 'operator' | 'monitor'
type DashboardAccess = { role: DashboardRole } | { response: Response }
type ParsedBody = { value: Record<string, unknown> } | { response: Response }

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

function getErrorCode(error: unknown): string {
  if (typeof error === 'object' && error !== null) {
    const name = 'name' in error && typeof error.name === 'string' ? error.name : undefined
    const code = 'code' in error && (typeof error.code === 'string' || typeof error.code === 'number')
      ? String(error.code)
      : undefined
    if (name && code) return `${name} (${code})`
    if (name) return name
    if (code) return code
  }
  return 'UNKNOWN'
}

async function getDashboardAccess(): Promise<DashboardAccess> {
  const token = await getSessionToken()
  if (!token) return { response: jsonResponse({ error: 'unauthorized' }, 401) }

  try {
    const user = await getSessionUser(token)
    if (!user) return { response: jsonResponse({ error: 'unauthorized' }, 401) }
    return { role: user.role }
  } catch (error) {
    console.error('Dashboard API authentication check failed.', getErrorCode(error))
    return { response: jsonResponse({ error: 'service_unavailable' }, 503) }
  }
}

function isResponse(value: DashboardAccess): value is { response: Response } {
  return 'response' in value
}

function sanitizeValue(value: unknown): unknown {
  if (value instanceof ObjectId) return value.toHexString()
  if (value instanceof Date) return value.toISOString()
  if (Buffer.isBuffer(value)) return '[redacted]'
  if (Array.isArray(value)) return value.map(sanitizeValue)
  if (typeof value !== 'object' || value === null) return value

  const result: Record<string, unknown> = {}
  for (const [key, nestedValue] of Object.entries(value)) {
    if (sensitiveField.test(key) || key === '_id') continue
    result[key] = sanitizeValue(nestedValue)
  }
  return result
}

function dashboardRow(document: Document & { _id?: unknown }): Record<string, unknown> {
  const row = sanitizeValue(document) as Record<string, unknown>
  if (document._id instanceof ObjectId) row.id = document._id.toHexString()
  return row
}

function collectionIsWritable(role: DashboardRole, collection: string): boolean {
  return role === 'admin' || (role === 'operator' && !accountCollections.has(collection))
}

function collectionNameIsValid(name: string): boolean {
  return name.length > 0 && !name.startsWith('system.') && name !== 'local'
}

function hasProtectedFields(value: unknown): boolean {
  if (Array.isArray(value)) return value.some(hasProtectedFields)
  if (typeof value !== 'object' || value === null) return false
  return Object.entries(value).some(([key, nestedValue]) =>
    key === '_id' || sensitiveField.test(key) || hasProtectedFields(nestedValue),
  )
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function mergeEditableValue(
  existing: unknown,
  updated: unknown,
  preservedKeys: ReadonlySet<string> = new Set(),
): unknown {
  if (existing instanceof Date && typeof updated === 'string') {
    const parsedDate = new Date(updated)
    if (!Number.isNaN(parsedDate.getTime())) return parsedDate
  }
  if (existing instanceof ObjectId && typeof updated === 'string' && /^[a-f\d]{24}$/i.test(updated)) {
    return new ObjectId(updated)
  }
  if (Array.isArray(existing) && Array.isArray(updated)) {
    return updated.map((value, index) => mergeEditableValue(existing[index], value, preservedKeys))
  }
  if (isRecord(existing) && isRecord(updated)) {
    const merged: Record<string, unknown> = {}
    for (const [key, existingValue] of Object.entries(existing)) {
      if (key === '_id' || sensitiveField.test(key) || preservedKeys.has(key)) {
        merged[key] = existingValue
      } else if (Object.hasOwn(updated, key)) {
        merged[key] = mergeEditableValue(existingValue, updated[key], preservedKeys)
      }
    }
    for (const [key, updatedValue] of Object.entries(updated)) {
      if (!Object.hasOwn(existing, key) && !preservedKeys.has(key)) merged[key] = updatedValue
    }
    return merged
  }
  return updated
}

async function readJsonBody(request: Request): Promise<ParsedBody> {
  const contentLength = Number(request.headers.get('content-length') ?? '0')
  if (contentLength > MAX_BODY_BYTES) {
    return { response: jsonResponse({ error: 'request_too_large' }, 413) }
  }

  let text: string
  try {
    text = await request.text()
  } catch {
    return { response: jsonResponse({ error: 'invalid_request_body' }, 400) }
  }
  if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) {
    return { response: jsonResponse({ error: 'request_too_large' }, 413) }
  }

  let value: unknown
  try {
    value = JSON.parse(text) as unknown
  } catch {
    return { response: jsonResponse({ error: 'invalid_json' }, 400) }
  }
  return isRecord(value)
    ? { value }
    : { response: jsonResponse({ error: 'invalid_request_body' }, 400) }
}

async function getExistingCollectionNames(database: Awaited<ReturnType<typeof getDatabase>>): Promise<string[]> {
  const collections = await database.listCollections({}, { nameOnly: true }).toArray()
  return collections
    .map((collection) => collection.name)
    .filter(collectionNameIsValid)
    .sort((left, right) => left.localeCompare(right))
}

async function getDashboard(request: Request): Promise<Response> {
  const access = await getDashboardAccess()
  if (isResponse(access)) return access.response

  try {
    const database = await getDatabase()
    const collectionNames = await getExistingCollectionNames(database)
    const searchParams = new URL(request.url).searchParams
    if (searchParams.get('list') === 'collections') {
      return jsonResponse({ collections: collectionNames, role: access.role }, 200)
    }

    const collectionName = searchParams.get('collection')
    if (!collectionName || !collectionNameIsValid(collectionName)) {
      return jsonResponse({ error: 'invalid_collection' }, 400)
    }
    if (!collectionNames.includes(collectionName)) {
      return jsonResponse({ error: 'collection_not_found' }, 404)
    }

    const requestedPage = Number(searchParams.get('page') ?? '1')
    if (!Number.isSafeInteger(requestedPage) || requestedPage < 1) {
      return jsonResponse({ error: 'invalid_page' }, 400)
    }

    const formType = searchParams.get('formType')
    if (formType && (collectionName !== 'website_form_submissions' || !formTypes.some((type) => type === formType))) {
      return jsonResponse({ error: 'invalid_form_type' }, 400)
    }

    const filter = collectionName === 'website_form_submissions' && formType ? { form_type: formType } : {}
    const collection = database.collection<Document>(collectionName)
    const total = await collection.countDocuments(filter)
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
    const page = Math.min(requestedPage, pageCount)
    const documents = await collection
      .find(filter)
      .sort({ created_at: -1, _id: -1 })
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .toArray()

    return jsonResponse({
      collection: collectionName,
      page,
      pageSize: PAGE_SIZE,
      total,
      role: access.role,
      rows: documents.map(dashboardRow),
    }, 200)
  } catch (error) {
    console.error('Dashboard data query failed.', { code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

async function createDashboardRecord(request: Request): Promise<Response> {
  const access = await getDashboardAccess()
  if (isResponse(access)) return access.response

  const parsed = await readJsonBody(request)
  if ('response' in parsed) return parsed.response
  const { collection: collectionName, document } = parsed.value
  if (typeof collectionName !== 'string' || !collectionNameIsValid(collectionName) || !isRecord(document)) {
    return jsonResponse({ error: 'invalid_request_body' }, 400)
  }
  if (accountCollections.has(collectionName)) {
    return jsonResponse({ error: 'managed_collection' }, 403)
  }
  if (!collectionIsWritable(access.role, collectionName)) {
    return jsonResponse({ error: 'forbidden' }, 403)
  }
  if (hasProtectedFields(document)) {
    return jsonResponse({ error: 'protected_fields_not_allowed' }, 400)
  }

  try {
    const database = await getDatabase()
    const collections = await getExistingCollectionNames(database)
    if (!collections.includes(collectionName)) return jsonResponse({ error: 'collection_not_found' }, 404)
    const result = await database.collection(collectionName).insertOne(document)
    return jsonResponse({ id: result.insertedId.toString() }, 201)
  } catch (error) {
    console.error('Dashboard record creation failed.', { collection: collectionName, code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

async function updateDashboardRecord(request: Request): Promise<Response> {
  const access = await getDashboardAccess()
  if (isResponse(access)) return access.response

  const parsed = await readJsonBody(request)
  if ('response' in parsed) return parsed.response
  const { action, collection: collectionName, id, role, approved } = parsed.value
  let document = parsed.value.document

  if (action === 'manage_user') {
    if (access.role === 'monitor') return jsonResponse({ error: 'forbidden' }, 403)
    if (
      typeof id !== 'string' ||
      !/^[a-f\d]{24}$/i.test(id) ||
      (role !== 'admin' && role !== 'operator' && role !== 'monitor') ||
      typeof approved !== 'boolean'
    ) {
      return jsonResponse({ error: 'invalid_request_body' }, 400)
    }

    try {
      const database = await getDatabase()
      const users = database.collection('auth_users')
      const userId = new ObjectId(id)
      const target = await users.findOne({ _id: userId }, { projection: { role: 1 } })
      if (!target) return jsonResponse({ error: 'user_not_found' }, 404)
      if (access.role === 'operator' && (role === 'admin' || target.role === 'admin')) {
        return jsonResponse({ error: 'forbidden' }, 403)
      }
      await users.updateOne({ _id: userId }, { $set: { role, approved } })
      return jsonResponse({ success: true }, 200)
    } catch (error) {
      console.error('Dashboard account access update failed.', { code: getErrorCode(error) })
      return jsonResponse({ error: 'service_unavailable' }, 503)
    }
  }

  if (
    typeof collectionName !== 'string' ||
    !collectionNameIsValid(collectionName) ||
    typeof id !== 'string' ||
    !/^[a-f\d]{24}$/i.test(id) ||
    !isRecord(document)
  ) {
    return jsonResponse({ error: 'invalid_request_body' }, 400)
  }
  if (
    collectionName === 'auth_sessions' ||
    (collectionName === 'auth_users' && access.role !== 'admin')
  ) {
    return jsonResponse({ error: 'managed_collection' }, 403)
  }
  const preservedUserFields = collectionName === 'auth_users' ? new Set(['role', 'approved']) : new Set<string>()
  if (collectionName === 'auth_users') {
    const userFields = { ...document }
    delete userFields.role
    delete userFields.approved
    document = userFields
    if (Object.keys(userFields).length === 0) {
      return jsonResponse({ error: 'no_editable_fields' }, 400)
    }
  }
  if (!collectionIsWritable(access.role, collectionName)) {
    return jsonResponse({ error: 'forbidden' }, 403)
  }
  if (hasProtectedFields(document)) {
    return jsonResponse({ error: 'protected_fields_not_allowed' }, 400)
  }

  try {
    const database = await getDatabase()
    const collections = await getExistingCollectionNames(database)
    if (!collections.includes(collectionName)) return jsonResponse({ error: 'collection_not_found' }, 404)
    const collection = database.collection<Document>(collectionName)
    const recordId = new ObjectId(id)
    const existing = await collection.findOne({ _id: recordId })
    if (!existing) return jsonResponse({ error: 'record_not_found' }, 404)
    const updated = mergeEditableValue(existing, document, preservedUserFields)
    if (!isRecord(updated)) return jsonResponse({ error: 'invalid_request_body' }, 400)
    updated._id = recordId
    await collection.replaceOne({ _id: recordId }, updated)
    return jsonResponse({ success: true }, 200)
  } catch (error) {
    console.error('Dashboard record update failed.', { collection: collectionName, code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

async function deleteDashboardRecord(request: Request): Promise<Response> {
  const access = await getDashboardAccess()
  if (isResponse(access)) return access.response

  const searchParams = new URL(request.url).searchParams
  const collectionName = searchParams.get('collection')
  const id = searchParams.get('id')
  if (
    !collectionName ||
    !collectionNameIsValid(collectionName) ||
    !id ||
    !/^[a-f\d]{24}$/i.test(id)
  ) {
    return jsonResponse({ error: 'invalid_request_parameters' }, 400)
  }
  if (access.role !== 'admin' && accountCollections.has(collectionName)) {
    return jsonResponse({ error: 'forbidden' }, 403)
  }
  if (!collectionIsWritable(access.role, collectionName)) {
    return jsonResponse({ error: 'forbidden' }, 403)
  }

  try {
    const database = await getDatabase()
    const collections = await getExistingCollectionNames(database)
    if (!collections.includes(collectionName)) return jsonResponse({ error: 'collection_not_found' }, 404)
    const objectId = new ObjectId(id)
    const result = await database.collection(collectionName).deleteOne({ _id: objectId })
    if (!result.deletedCount) return jsonResponse({ error: 'record_not_found' }, 404)
    if (collectionName === 'auth_users') {
      await database.collection('auth_sessions').deleteMany({ user_id: objectId })
    }
    return jsonResponse({ success: true }, 200)
  } catch (error) {
    console.error('Dashboard record deletion failed.', { collection: collectionName, code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

export const GET = withApiLogging(getDashboard)
export const POST = withApiLogging(createDashboardRecord)
export const PATCH = withApiLogging(updateDashboardRecord)
export const DELETE = withApiLogging(deleteDashboardRecord)
