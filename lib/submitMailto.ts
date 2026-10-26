export function submitMailtoForm({
  to,
  subject,
  body,
}: {
  to: string
  subject: string
  body: string
}) {
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  if (typeof window === 'undefined') {
    return false
  }

  try {
    const link = document.createElement('a')
    link.href = mailtoUrl
    link.style.display = 'none'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return true
  } catch {
    window.location.href = mailtoUrl
    return true
  }
}
