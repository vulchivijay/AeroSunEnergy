export function getFirstFormErrorMessage(errors: unknown): string | undefined {
  if (typeof errors !== 'object' || errors === null) return undefined

  if ('message' in errors && typeof errors.message === 'string') {
    return errors.message
  }

  for (const value of Object.values(errors)) {
    const message = getFirstFormErrorMessage(value)
    if (message) return message
  }

  return undefined
}
