export function submitMailtoForm({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  const mailtoUrl = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`

  if (typeof window !== 'undefined') {
    window.location.href = mailtoUrl
    return true
  }

  return false
}

export function submitMailtoFormAndReset<TValues>({
  to,
  subject,
  body,
  defaultValues,
  reset,
  setFeedback,
  successMessage,
  errorMessage,
}: {
  to: string
  subject: string
  body: string
  defaultValues: TValues
  reset: (values: TValues) => void
  setFeedback: (feedback: { type: 'success' | 'error'; message: string }) => void
  successMessage: string
  errorMessage: string
}) {
  const opened = submitMailtoForm({ to, subject, body })
  reset(defaultValues)
  setFeedback({
    type: opened ? 'success' : 'error',
    message: opened ? successMessage : errorMessage,
  })

  return opened
}
