import { createHash, randomBytes } from 'node:crypto'
import { cookies } from 'next/headers'
import { ObjectId } from 'mongodb'
import { getDatabase, type AuthSessionDocument, type AuthUserDocument } from './database'

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30
const SESSION_COOKIE_NAME =
  process.env.NODE_ENV === 'production' ? '__Host-aerosun-session' : 'aerosun-session'

type AuthUser = {
  id: string
  name: string
  email: string
  role: 'admin' | 'operator' | 'monitor'
}

export function hashSessionToken(token: string): string {
  return createHash('sha256').update(token).digest('hex')
}

export async function createSession(userId: ObjectId): Promise<string> {
  const token = randomBytes(32).toString('hex')
  const database = await getDatabase()
  const sessions = database.collection<AuthSessionDocument>('auth_sessions')
  const now = new Date()
  await sessions.deleteMany({ expires_at: { $lte: now } })
  await sessions.insertOne({
    _id: new ObjectId(),
    user_id: userId,
    token_hash: hashSessionToken(token),
    created_at: now,
    expires_at: new Date(now.getTime() + SESSION_MAX_AGE_SECONDS * 1000),
  })
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
  const database = await getDatabase()
  const session = await database.collection<AuthSessionDocument>('auth_sessions').findOne({
    token_hash: hashSessionToken(token),
    expires_at: { $gt: new Date() },
  })
  if (!session) return null

  const user = await database.collection<AuthUserDocument>('auth_users').findOne({ _id: session.user_id })
  if (!user || user.approved !== true) return null

  return {
    id: user._id.toHexString(),
    name: user.name,
    email: user.email,
    role: user.role === 'admin' || user.role === 'operator' ? user.role : 'monitor',
  }
}

export function sessionCookieName(): string {
  return SESSION_COOKIE_NAME
}
