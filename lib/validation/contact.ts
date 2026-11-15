import { z } from 'zod'

export const MAX_EMAIL_LENGTH = 254
export const INDIAN_MOBILE_HTML_PATTERN = String.raw`(?:\+?91)?[6-9][0-9]{9}`

export function normalizeIndianMobileNumber(value: string): string | null {
  const trimmed = value.trim()
  if (trimmed.length > 24 || !/^[0-9+()\s-]+$/.test(trimmed)) return null
  const compact = trimmed.replace(/[\s()-]/g, '')
  const normalized = compact.replace(/^\+?91(?=[6-9][0-9]{9}$)/, '')
  return /^[6-9][0-9]{9}$/.test(normalized) ? normalized : null
}

export function isValidIndianMobileNumber(value: unknown): value is string {
  return typeof value === 'string' && normalizeIndianMobileNumber(value) !== null
}

export function createIndianMobileSchema(invalidMessage: string, minimumMessage = invalidMessage) {
  return z
    .string()
    .trim()
    .min(10, minimumMessage)
    .max(24, invalidMessage)
    .refine(isValidIndianMobileNumber, invalidMessage)
    .transform((value) => normalizeIndianMobileNumber(value) ?? value)
}

export function isValidEmailAddress(value: unknown): value is string {
  if (typeof value !== 'string') return false

  const email = value.trim()
  if (email.length > MAX_EMAIL_LENGTH || email.includes('..')) return false
  const atIndex = email.lastIndexOf('@')
  if (atIndex < 1) return false

  const localPart = email.slice(0, atIndex)
  const domain = email.slice(atIndex + 1)
  if (localPart.length > 64 || localPart.startsWith('.') || localPart.endsWith('.')) return false

  const labels = domain.split('.')
  if (labels.length < 2 || labels.some((label) =>
    label.length < 1 ||
    label.length > 63 ||
    !/^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(label),
  )) {
    return false
  }

  const topLevelDomain = labels[labels.length - 1]
  if (!/^(?:[a-z]{2,63}|xn--[a-z\d-]{2,59})$/i.test(topLevelDomain)) return false

  return z.string().email().safeParse(email).success
}

export function createEmailAddressSchema(invalidMessage: string) {
  return z
    .string()
    .trim()
    .max(MAX_EMAIL_LENGTH, invalidMessage)
    .email(invalidMessage)
    .refine(isValidEmailAddress, invalidMessage)
}
