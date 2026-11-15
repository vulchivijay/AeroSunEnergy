import { z } from 'zod'
import { MongoServerError, ObjectId } from 'mongodb'
import { authJson, readAuthJson } from '@/lib/auth/http'
import { getDatabase, type AuthUserDocument } from '@/lib/auth/database'
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
    error instanceof MongoServerError &&
    error.code === 11000 &&
    error.keyPattern?.email === 1
  )
}

export async function POST(request: Request) {
  const body = await readAuthJson(request)
  if ('error' in body) return body.error

  const parsed = signupSchema.safeParse(body.data)
  if (!parsed.success) {
    const issueCode = parsed.error.issues[0]?.message
    return authJson({ error: isAuthErrorCode(issueCode) ? issueCode : authErrorCodes.invalidInput }, 400)
  }

  try {
    const passwordHash = await hashPassword(parsed.data.password)
    const userId = new ObjectId()
    const now = new Date()
    const users = (await getDatabase()).collection<AuthUserDocument>('auth_users')
    await users.insertOne({
      _id: userId,
      name: parsed.data.name,
      email: parsed.data.email,
      password_hash: passwordHash,
      created_at: now,
    })
    let token: string
    try {
      token = await createSession(userId)
    } catch (error) {
      try {
        await users.deleteOne({ _id: userId })
      } catch (cleanupError) {
        console.error('Auth signup account cleanup failed.', cleanupError)
      }
      throw error
    }

    const response = authJson({ user: { name: parsed.data.name, email: parsed.data.email } }, 201)
    setSessionCookie(response, token)
    return response
  } catch (error) {
    if (isDuplicateEmailError(error)) {
      return authJson({ error: authErrorCodes.duplicateAccount }, 409)
    }

    console.error('Auth signup failed.', error)
    return authJson({ error: authErrorCodes.signupUnavailable }, 503)
  }
}
