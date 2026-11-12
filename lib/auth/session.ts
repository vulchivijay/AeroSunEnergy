import { createHash, randomBytes } from 'node:crypto'
import { cookies } from 'next/headers'
import type { PoolConnection, RowDataPacket } from 'mysql2/promise'
import { getDatabasePool } from './database'

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30
const SESSION_COOKIE_NAME =
  process.env.NODE_ENV === 'production' ? '__Host-aerosun-session' : 'aerosun-session'

type AuthUser = RowDataPacket & {
  id: string
  name: string
  email: string
}

export function hashSessionToken(token: string): string {
  return createHash('sha256').update(token).digest('hex')
}

export async function createSession(connection: PoolConnection, userId: string): Promise<string> {
  const token = randomBytes(32).toString('hex')
  await connection.execute('DELETE FROM auth_sessions WHERE expires_at <= UTC_TIMESTAMP()')
  await connection.execute(
    'INSERT INTO auth_sessions (user_id, token_hash, expires_at) VALUES (?, ?, DATE_ADD(UTC_TIMESTAMP(), INTERVAL 30 DAY))',
    [userId, hashSessionToken(token)],
  )
  return token
}

export function setSessionCookie(response: Response, token: string): void {
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SECONDS}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
  )
}

export function clearSessionCookie(response: Response): void {
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
  )
}

export async function getSessionToken(): Promise<string | null> {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value
  return token && /^[a-f0-9]{64}$/.test(token) ? token : null
}

export async function getSessionUser(token: string): Promise<AuthUser | null> {
  const [users] = await getDatabasePool().execute<AuthUser[]>(
    `SELECT CAST(u.id AS CHAR) AS id, u.name, u.email
     FROM auth_sessions AS s
     JOIN auth_users AS u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > UTC_TIMESTAMP()
     LIMIT 1`,
    [hashSessionToken(token)],
  )
  return users[0] ?? null
}

export function sessionCookieName(): string {
  return SESSION_COOKIE_NAME
}
