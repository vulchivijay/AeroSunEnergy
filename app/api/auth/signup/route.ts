import { z } from 'zod'
import type { PoolClient, QueryResultRow } from 'pg'
import { authJson, readAuthJson } from '@/lib/auth/http'
import { getDatabasePool } from '@/lib/auth/database'
import { authErrorCodes, isAuthErrorCode } from '@/lib/auth/errorCodes'
import { hashPassword } from '@/lib/auth/password'
import { createSession, setSessionCookie } from '@/lib/auth/session'

export const runtime = 'nodejs'

const signupSchema = z
  .object({
    name: z.string().trim().min(2, authErrorCodes.nameRequired).max(100, authErrorCodes.nameTooLong),
    email: z
      .string()
      .trim()
      .email(authErrorCodes.emailInvalid)
      .max(254, authErrorCodes.emailInvalid)
      .transform((email) => email.toLowerCase()),
    password: z
      .string()
      .min(12, authErrorCodes.passwordTooShort)
      .max(128, authErrorCodes.passwordTooLong),
    confirmPassword: z.string().min(1, authErrorCodes.confirmPasswordRequired),
  })
  .refine((details) => details.password === details.confirmPassword, {
    path: ['confirmPassword'],
    message: authErrorCodes.passwordMismatch,
  })

function isDuplicateEmailError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === '23505' &&
    'constraint' in error &&
    error.constraint === 'uq_auth_users_email'
  )
}

type InsertedUser = QueryResultRow & { id: string }

export async function POST(request: Request) {
  const body = await readAuthJson(request)
  if ('error' in body) return body.error

  const parsed = signupSchema.safeParse(body.data)
  if (!parsed.success) {
    const issueCode = parsed.error.issues[0]?.message
    return authJson({ error: isAuthErrorCode(issueCode) ? issueCode : authErrorCodes.invalidInput }, 400)
  }

  let connection: PoolClient | undefined
  let transactionStarted = false
  try {
    const passwordHash = await hashPassword(parsed.data.password)
    connection = await getDatabasePool().connect()
    await connection.query('BEGIN')
    transactionStarted = true
    const { rows } = await connection.query<InsertedUser>(
      'INSERT INTO auth_users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id::text AS id',
      [parsed.data.name, parsed.data.email, passwordHash],
    )
    const insertedUser = rows[0]
    if (!insertedUser) throw new Error('User insert did not return an ID.')
    const token = await createSession(connection, insertedUser.id)
    await connection.query('COMMIT')
    transactionStarted = false

    const response = authJson({ user: { name: parsed.data.name, email: parsed.data.email } }, 201)
    setSessionCookie(response, token)
    return response
  } catch (error) {
    if (connection && transactionStarted) {
      try {
        await connection.query('ROLLBACK')
      } catch (rollbackError) {
        console.error('Auth signup transaction rollback failed.', rollbackError)
      }
    }

    if (isDuplicateEmailError(error)) {
      return authJson({ error: authErrorCodes.duplicateAccount }, 409)
    }

    console.error('Auth signup failed.', error)
    return authJson({ error: authErrorCodes.signupUnavailable }, 503)
  } finally {
    connection?.release()
  }
}
