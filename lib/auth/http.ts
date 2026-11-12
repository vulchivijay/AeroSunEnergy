import { NextResponse } from 'next/server'

const MAX_REQUEST_LENGTH = 10_000

export function authJson(body: unknown, status = 200): NextResponse {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

export async function readAuthJson(
  request: Request,
): Promise<{ data: unknown } | { error: NextResponse }> {
  const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase()
  if (contentType !== 'application/json') {
    return { error: authJson({ error: 'Request must use JSON.' }, 415) }
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_REQUEST_LENGTH) {
    return { error: authJson({ error: 'Request is too large.' }, 413) }
  }

  try {
    const text = await request.text()
    if (text.length > MAX_REQUEST_LENGTH) {
      return { error: authJson({ error: 'Request is too large.' }, 413) }
    }
    return { data: JSON.parse(text) as unknown }
  } catch {
    return { error: authJson({ error: 'Request body must be valid JSON.' }, 400) }
  }
}
