import { authJson } from '@/lib/auth/http'
import { withApiLogging } from '@/lib/apiLogging'
import { getSessionToken, getSessionUser } from '@/lib/auth/session'

export const runtime = 'nodejs'

async function getSession() {
  const token = await getSessionToken()
  if (!token) return authJson({ user: null })

  try {
    const user = await getSessionUser(token)
    return authJson({ user: user ? { id: user.id, name: user.name, email: user.email } : null })
  } catch (error) {
    console.error('Auth session lookup failed.', error)
    return authJson({ error: 'Session lookup is temporarily unavailable.' }, 503)
  }
}

export const GET = withApiLogging(getSession)
