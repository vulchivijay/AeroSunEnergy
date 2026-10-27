export async function validateZeroBounceEmail(email: string): Promise<boolean> {
  const trimmed = email.trim()
  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return false
  }

  const domain = trimmed.split('@')[1]?.toLowerCase()
  if (!domain || domain === 'example.com') {
    return false
  }

  const suspicious = ['mailinator.com', '10minutemail.com', 'tempmail.com', 'guerrillamail.com']
  if (suspicious.includes(domain)) {
    return false
  }

  return true
}
