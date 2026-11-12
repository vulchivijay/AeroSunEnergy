import { z } from 'zod'
import type { PoolConnection, ResultSetHeader } from 'mysql2/promise'
import { authJson, readAuthJson } from '@/lib/auth/http'
import { getDatabasePool } from '@/lib/auth/database'
import { hashPassword } from '@/lib/auth/password'
import { createSession, setSessionCookie } from '@/lib/auth/session'

export const runtime = 'nodejs'

const signupSchema = z
  .object({
    name: z.string().trim().min(2, 'Enter your name.').max(100, 'Name is too long.'),
    email: z.string().trim().email('Enter a valid email address.').max(254).transform((email) => email.toLowerCase()),
    password: z.string().min(12, 'Use at least 12 characters for your password.').max(128),
    confirmPassword: z.string().min(1, 'Confirm your password.'),
  })
  .refine((details) => details.password === details.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  })

function isDuplicateEmailError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === 'ER_DUP_ENTRY'
}

export async function POST(request: Request) {
  const body = await readAuthJson(request)
  if ('error' in body) return body.error

  const parsed = signupSchema.safeParse(body.data)
  if (!parsed.success) {
    return authJson({ error: parsed.error.issues[0]?.message ?? 'Check the information and try again.' }, 400)
  }

  let connection: PoolConnection | undefined
  let transactionStarted = false
  try {
    const passwordHash = await hashPassword(parsed.data.password)
    connection = await getDatabasePool().getConnection()
    await connection.beginTransaction()
    transactionStarted = true
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO auth_users (name, email, password_hash) VALUES (?, ?, ?)',
      [parsed.data.name, parsed.data.email, passwordHash],
    )
    const token = await createSession(connection, String(result.insertId))
    await connection.commit()

    const response = authJson({ user: { name: parsed.data.name, email: parsed.data.email } }, 201)
    setSessionCookie(response, token)
    return response
  } catch (error) {
    if (connection && transactionStarted) {
      try {
        await connection.rollback()
      } catch (rollbackError) {
        console.error('Auth signup transaction rollback failed.', rollbackError)
      }
    }

    if (isDuplicateEmailError(error)) {
      return authJson({ error: 'Unable to create an account with those details.' }, 409)
    }

    console.error('Auth signup failed.', error)
    return authJson({ error: 'Signup is temporarily unavailable. Please try again later.' }, 503)
  } finally {
    connection?.release()
  }
}
