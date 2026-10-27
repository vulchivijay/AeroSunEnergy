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
