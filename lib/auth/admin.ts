function getDashboardAdminEmails(): Set<string> {
  return new Set(
    (process.env.DASHBOARD_ADMIN_EMAILS ?? '')
      .split(',')
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  )
}

export function isDashboardAdminConfigured(): boolean {
  return getDashboardAdminEmails().size > 0
}

export function isDashboardAdmin(email: string): boolean {
  return getDashboardAdminEmails().has(email.trim().toLowerCase())
}
