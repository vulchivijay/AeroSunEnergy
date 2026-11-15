type ApiHandler = (request: Request) => Response | Promise<Response>

function getErrorDetails(error: unknown): { name?: string; code?: string | number } {
  if (typeof error !== 'object' || error === null) return {}

  const name = 'name' in error && typeof error.name === 'string' ? error.name : undefined
  const code =
    'code' in error && (typeof error.code === 'string' || typeof error.code === 'number')
      ? error.code
      : undefined

  return { name, code }
}

export function withApiLogging(handler: ApiHandler): ApiHandler {
  return async (request) => {
    const startedAt = Date.now()
    const context = { method: request.method, path: new URL(request.url).pathname }
    let completed = false
    const durationMs = () => Date.now() - startedAt

    console.info('API request started.', context)

    const logAbort = () => {
      if (completed) return
      completed = true
      console.warn('API request aborted.', { ...context, durationMs: durationMs() })
    }

    request.signal.addEventListener('abort', logAbort, { once: true })
    if (request.signal.aborted) logAbort()

    try {
      const response = await handler(request)
      if (!completed) {
        completed = true
        const result = { ...context, status: response.status, durationMs: durationMs() }
        if (response.ok) {
          console.info('API request succeeded.', result)
        } else {
          console.error('API request failed.', result)
        }
      }
      return response
    } catch (error) {
      if (!completed) {
        completed = true
        console.error('API request failed.', {
          ...context,
          ...getErrorDetails(error),
          durationMs: durationMs(),
        })
      }
      throw error
    } finally {
      request.signal.removeEventListener('abort', logAbort)
    }
  }
}
