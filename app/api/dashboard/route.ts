import { ObjectId, type Document } from 'mongodb'
import { withApiLogging } from '@/lib/apiLogging'
import { getDatabase, type AuthSessionDocument, type AuthUserDocument } from '@/lib/auth/database'
import { isDashboardAdmin } from '@/lib/auth/admin'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'

export const runtime = 'nodejs'

const PAGE_SIZE = 25
const tableNames = ['submissions', 'referrals', 'users', 'sessions'] as const
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

type DashboardTable = (typeof tableNames)[number]
type FormType = (typeof formTypes)[number]
type DashboardDocument = Document & { _id: ObjectId; created_at?: Date; updated_at?: Date }

function isDashboardTable(value: string): value is DashboardTable {
  return tableNames.some((table) => table === value)
}

function isFormType(value: string): value is FormType {
  return formTypes.some((formType) => formType === value)
}

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

function dashboardRow(document: DashboardDocument): Record<string, unknown> {
  const { _id, ...fields } = document
  return { id: _id.toHexString(), ...fields }
}

async function getDashboard(request: Request) {
  const token = await getSessionToken()
  if (!token) return jsonResponse({ error: 'unauthorized' }, 401)

  let user
  try {
    user = await getSessionUser(token)
  } catch (error) {
    console.error('Dashboard API authentication check failed.', getErrorCode(error))
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }

  if (!user) return jsonResponse({ error: 'unauthorized' }, 401)
  if (!isDashboardAdmin(user.email)) return jsonResponse({ error: 'forbidden' }, 403)

  const searchParams = new URL(request.url).searchParams
  const tableValue = searchParams.get('table') ?? 'submissions'
  if (!isDashboardTable(tableValue)) {
    return jsonResponse({ error: 'invalid_table' }, 400)
  }
  const table = tableValue

  const requestedPage = Number(searchParams.get('page') ?? '1')
  if (!Number.isSafeInteger(requestedPage) || requestedPage < 1) {
    return jsonResponse({ error: 'invalid_page' }, 400)
  }

  const formType = searchParams.get('formType')
  if (formType && (table !== 'submissions' || !isFormType(formType))) {
    return jsonResponse({ error: 'invalid_form_type' }, 400)
  }

  try {
    const database = await getDatabase()
    const filter = table === 'submissions' && formType ? { form_type: formType } : {}
    const collectionNames: Record<DashboardTable, string> = {
      submissions: 'website_form_submissions',
      referrals: 'solar_referrals',
      users: 'auth_users',
      sessions: 'auth_sessions',
    }
    const collection = database.collection<DashboardDocument>(collectionNames[table])
    const total = await collection.countDocuments(filter)
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
    const page = Math.min(requestedPage, pageCount)
    const documents = await collection
      .find(filter, {
        projection: table === 'users'
          ? { password_hash: 0 }
          : table === 'sessions'
            ? { token_hash: 0 }
            : undefined,
      })
      .sort({ created_at: -1, _id: -1 })
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .toArray()

    let rows: Record<string, unknown>[]
    if (table === 'sessions') {
      const sessions = documents as AuthSessionDocument[]
      const userIds = [...new Map(sessions.map((session) => [session.user_id.toHexString(), session.user_id])).values()]
      const accounts = userIds.length
        ? await database.collection<AuthUserDocument>('auth_users')
          .find({ _id: { $in: userIds } }, { projection: { name: 1, email: 1 } })
          .toArray()
        : []
      const accountsById = new Map(accounts.map((account) => [account._id.toHexString(), account]))
      const now = new Date()
      rows = sessions.flatMap((session) => {
        const account = accountsById.get(session.user_id.toHexString())
        if (!account) return []
        return [{
          id: session._id.toHexString(),
          user_id: session.user_id.toHexString(),
          name: account.name,
          email: account.email,
          created_at: session.created_at,
          expires_at: session.expires_at,
          status: session.expires_at > now ? 'active' : 'expired',
        }]
      })
    } else {
      rows = documents.map(dashboardRow)
    }

    return jsonResponse({ table, page, pageSize: PAGE_SIZE, total, rows }, 200)
  } catch (error) {
    console.error('Dashboard data query failed.', { table, code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

export const GET = withApiLogging(getDashboard)
