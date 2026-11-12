import { z } from 'zod'
import type { RowDataPacket } from 'mysql2/promise'
import { authJson, readAuthJson } from '@/lib/auth/http'
import { getDatabasePool } from '@/lib/auth/database'
import { hashPassword, verifyPassword } from '@/lib/auth/password'
import { createSession, setSessionCookie } from '@/lib/auth/session'

export const runtime = 'nodejs'

const loginSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.').max(254).transform((email) => email.toLowerCase()),
  password: z.string().min(1, 'Enter your password.').max(128),
})

type StoredUser = RowDataPacket & {
  id: string
  name: string
  email: string
  password_hash: string
}

export async function POST(request: Request) {
  const body = await readAuthJson(request)
  if ('error' in body) return body.error

  const parsed = loginSchema.safeParse(body.data)
  if (!parsed.success) {
    return authJson({ error: parsed.error.issues[0]?.message ?? 'Check the information and try again.' }, 400)
  }

  try {
    const pool = getDatabasePool()
    const [users] = await pool.execute<StoredUser[]>(
      'SELECT CAST(id AS CHAR) AS id, name, email, password_hash FROM auth_users WHERE email = ? LIMIT 1',
      [parsed.data.email],
    )
    const user = users[0]

    if (!user) {
      await hashPassword(parsed.data.password)
      return authJson({ error: 'Invalid email or password.' }, 401)
    }

    if (!(await verifyPassword(parsed.data.password, user.password_hash))) {
      return authJson({ error: 'Invalid email or password.' }, 401)
    }

    const connection = await pool.getConnection()
    let token: string
    try {
      token = await createSession(connection, user.id)
    } finally {
      connection.release()
    }

    const response = authJson({ user: { id: user.id, name: user.name, email: user.email } })
    setSessionCookie(response, token)
    return response
  } catch (error) {
    console.error('Auth login failed.', error)
    return authJson({ error: 'Login is temporarily unavailable. Please try again later.' }, 503)
  }
}
