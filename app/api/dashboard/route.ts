import type { QueryResultRow } from 'pg'
import { getDatabasePool } from '@/lib/auth/database'
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

const tableQueries: Record<DashboardTable, { from: string; select: string; orderBy: string }> = {
  submissions: {
    from: 'website_form_submissions',
    select: 'id, reference_code, form_type, payload, status, created_at, updated_at',
    orderBy: 'created_at DESC, id DESC',
  },
  referrals: {
    from: 'solar_referrals',
    select: 'id, reference_code, referrer_name, referrer_phone, referred_name, referred_phone, postal_code, property_type, status, referrer_permission_confirmed_at, created_at, updated_at',
    orderBy: 'created_at DESC, id DESC',
  },
  users: {
    from: 'auth_users',
    select: 'id::text AS id, name, email, created_at',
    orderBy: 'created_at DESC, id DESC',
  },
  sessions: {
    from: 'auth_sessions AS s JOIN auth_users AS u ON u.id = s.user_id',
    select: "s.id::text AS id, s.user_id::text AS user_id, u.name, u.email, s.created_at, s.expires_at, CASE WHEN s.expires_at > CURRENT_TIMESTAMP THEN 'active' ELSE 'expired' END AS status",
    orderBy: 's.created_at DESC, s.id DESC',
  },
}

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
  if (typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'string') {
    return error.code
  }
  return 'UNKNOWN'
}

export async function GET(request: Request) {
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

  const query = tableQueries[table]
  const whereClause = formType ? ' WHERE form_type = $1' : ''
  const queryValues: (string | number)[] = formType ? [formType] : []

  try {
    const pool = getDatabasePool()
    const { rows: countRows } = await pool.query<QueryResultRow & { total: string }>(
      `SELECT COUNT(*)::text AS total FROM ${query.from}${whereClause}`,
      queryValues,
    )
    const total = Number(countRows[0]?.total ?? 0)
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE))
    const page = Math.min(requestedPage, pageCount)
    const offset = (page - 1) * PAGE_SIZE
    const limitPlaceholder = `$${queryValues.length + 1}`
    const offsetPlaceholder = `$${queryValues.length + 2}`
    const { rows } = await pool.query<QueryResultRow>(
      `SELECT ${query.select} FROM ${query.from}${whereClause} ORDER BY ${query.orderBy} LIMIT ${limitPlaceholder} OFFSET ${offsetPlaceholder}`,
      [...queryValues, PAGE_SIZE, offset],
    )

    return jsonResponse({ table, page, pageSize: PAGE_SIZE, total, rows }, 200)
  } catch (error) {
    console.error('Dashboard data query failed.', { table, code: getErrorCode(error) })
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}
