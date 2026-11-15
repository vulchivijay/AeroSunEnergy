import { z } from 'zod'
import { authJson, readAuthJson } from '@/lib/auth/http'
import { getDatabase, type AuthUserDocument } from '@/lib/auth/database'
import { authErrorCodes, isAuthErrorCode } from '@/lib/auth/errorCodes'
import { hashPassword, verifyPassword } from '@/lib/auth/password'
import { createSession, setSessionCookie } from '@/lib/auth/session'

export const runtime = 'nodejs'

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email(authErrorCodes.emailInvalid)
    .max(254, authErrorCodes.emailInvalid)
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(1, authErrorCodes.passwordRequired)
    .max(128, authErrorCodes.passwordTooLong),
})

export async function POST(request: Request) {
  const body = await readAuthJson(request)
  if ('error' in body) return body.error

  const parsed = loginSchema.safeParse(body.data)
  if (!parsed.success) {
    const issueCode = parsed.error.issues[0]?.message
    return authJson({ error: isAuthErrorCode(issueCode) ? issueCode : authErrorCodes.invalidInput }, 400)
  }

  try {
    const user = await (await getDatabase())
      .collection<AuthUserDocument>('auth_users')
      .findOne({ email: parsed.data.email })

    if (!user) {
      await hashPassword(parsed.data.password)
      return authJson({ error: authErrorCodes.invalidCredentials }, 401)
    }

    if (!(await verifyPassword(parsed.data.password, user.password_hash))) {
      return authJson({ error: authErrorCodes.invalidCredentials }, 401)
    }

    const token = await createSession(user._id)

    const response = authJson({ user: { id: user._id.toHexString(), name: user.name, email: user.email } })
    setSessionCookie(response, token)
    return response
  } catch (error) {
    console.error('Auth login failed.', error)
    return authJson({ error: authErrorCodes.loginUnavailable }, 503)
  }
}
