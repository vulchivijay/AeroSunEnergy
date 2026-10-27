const ZEROBOUNCE_API_URL = 'https://api.zerobounce.net/v2/validate'
const ZEROBOUNCE_API_KEY = process.env.NEXT_PUBLIC_ZEROBUNCE_API_KEY || process.env.ZEROBUNCE_API_KEY || ''
const ZEROBOUNCE_THROTTLE_MS = Number(process.env.NEXT_PUBLIC_ZEROBUNCE_THROTTLE_MS || process.env.ZEROBUNCE_THROTTLE_MS || 250)

const RISKY_EMAIL_STATUSES = new Set([
  'invalid',
  'do_not_mail',
  'spamtrap',
  'abuse',
  'greylisted',
  'mailbox_not_allowed',
  'unknown',
  'suspicious',
  'disposable',
])

const validationCache = new Map<string, { result: boolean; checkedAt: number }>()
const throttledRequests = new Map<string, number>()

export function isZeroBounceConfigured() {
  return Boolean(ZEROBOUNCE_API_KEY)
}

export async function validateZeroBounceEmail(
  email: string,
  options: { apiKey?: string; throttleMs?: number } = {},
): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase()

  if (!normalizedEmail) {
    return false
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return false
  }

  const apiKey = options.apiKey || ZEROBOUNCE_API_KEY
  const throttleMs = Number.isFinite(options.throttleMs) ? Number(options.throttleMs) : ZEROBOUNCE_THROTTLE_MS

  if (!apiKey) {
    return true
  }

  const cachedValue = validationCache.get(normalizedEmail)
  if (cachedValue && Date.now() - cachedValue.checkedAt < Math.max(250, throttleMs)) {
    return cachedValue.result
  }

  const lastRequestAt = throttledRequests.get(normalizedEmail) || 0
  if (Date.now() - lastRequestAt < Math.max(250, throttleMs)) {
    return cachedValue?.result ?? true
  }

  throttledRequests.set(normalizedEmail, Date.now())

  try {
    const url = new URL(ZEROBOUNCE_API_URL)
    url.searchParams.set('api_key', apiKey)
    url.searchParams.set('email', normalizedEmail)

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      return true
    }

    const payload = (await response.json()) as { status?: string }
    const status = String(payload?.status ?? '').trim().toLowerCase().replace(/[_\s]+/g, '_')

    const isRisky = RISKY_EMAIL_STATUSES.has(status)
    const isAllowed = status === 'valid' || status === 'catch_all' || status === 'catchall'
    const result = !isRisky && isAllowed

    validationCache.set(normalizedEmail, {
      result,
      checkedAt: Date.now(),
    })

    return result
  } catch {
    return true
  }
}
