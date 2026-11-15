import { authJson } from '@/lib/auth/http'
import { getDatabase } from '@/lib/auth/database'
import { clearSessionCookie, getSessionToken, hashSessionToken } from '@/lib/auth/session'

export const runtime = 'nodejs'

export async function POST() {
  const token = await getSessionToken()
  if (!token) return authJson({ success: true })

  try {
    await (await getDatabase()).collection('auth_sessions').deleteOne({ token_hash: hashSessionToken(token) })
    const response = authJson({ success: true })
    clearSessionCookie(response)
    return response
  } catch (error) {
    console.error('Auth logout failed.', error)
    const response = authJson({ error: 'Logout is temporarily unavailable. Please try again later.' }, 503)
    clearSessionCookie(response)
    return response
  }
}
