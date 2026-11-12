import { randomBytes } from 'node:crypto'
import { z } from 'zod'
import type { ResultSetHeader } from 'mysql2/promise'
import { getDatabasePool } from '@/lib/auth/database'

export const runtime = 'nodejs'

const MAX_REQUEST_LENGTH = 8_192

const indianMobileSchema = z
  .string()
  .trim()
  .max(24)
  .refine((value) => /^(?:\+?91)?[6-9]\d{9}$/.test(value.replace(/[\s()-]/g, '')))
  .transform((value) => {
    const digits = value.replace(/[\s()-]/g, '').replace(/^\+/, '')
    return digits.length === 12 ? digits.slice(2) : digits
  })

const referralSchema = z
  .object({
    referrerName: z.string().trim().min(2).max(100),
    referrerPhone: indianMobileSchema,
    referredName: z.string().trim().min(2).max(100),
    referredPhone: indianMobileSchema,
    postalCode: z.string().regex(/^\d{6}$/),
    propertyType: z.enum(['house', 'apartment', 'commercial', 'other']),
    consent: z.literal(true),
  })
  .strict()
  .superRefine((referral, context) => {
    if (referral.referrerPhone === referral.referredPhone) {
      context.addIssue({
        code: 'custom',
        path: ['referredPhone'],
        message: 'Referral contact must be different from referrer contact.',
      })
    }
  })

type BodyResult =
  | { ok: true; data: unknown }
  | { ok: false; status: number; error: string }

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

async function readReferralBody(request: Request): Promise<BodyResult> {
  const contentType = request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase()
  if (contentType !== 'application/json') {
    return { ok: false, status: 415, error: 'invalid_content_type' }
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_REQUEST_LENGTH) {
    return { ok: false, status: 413, error: 'request_too_large' }
  }

  const reader = request.body?.getReader()
  if (!reader) {
    return { ok: false, status: 400, error: 'invalid_request' }
  }

  const chunks: Uint8Array[] = []
  let totalLength = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    totalLength += value.byteLength
    if (totalLength > MAX_REQUEST_LENGTH) {
      return { ok: false, status: 413, error: 'request_too_large' }
    }
    chunks.push(value)
  }

  const bodyBytes = new Uint8Array(totalLength)
  let offset = 0
  for (const chunk of chunks) {
    bodyBytes.set(chunk, offset)
    offset += chunk.byteLength
  }

  let bodyText: string
  try {
    bodyText = new TextDecoder('utf-8', { fatal: true }).decode(bodyBytes)
  } catch {
    return { ok: false, status: 400, error: 'invalid_json' }
  }

  try {
    return { ok: true, data: JSON.parse(bodyText) as unknown }
  } catch {
    return { ok: false, status: 400, error: 'invalid_json' }
  }
}

function getErrorCode(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'string') {
    return error.code
  }
  return 'UNKNOWN'
}

export async function POST(request: Request) {
  let body: BodyResult
  try {
    body = await readReferralBody(request)
  } catch (error) {
    console.error('Referral request body could not be read.', getErrorCode(error))
    return jsonResponse({ error: 'invalid_request' }, 400)
  }

  if (!body.ok) {
    return jsonResponse({ error: body.error }, body.status)
  }

  const parsed = referralSchema.safeParse(body.data)
  if (!parsed.success) {
    return jsonResponse({ error: 'invalid_input' }, 400)
  }

  const referral = parsed.data
  const referenceCode = `ASR-${randomBytes(8).toString('hex').toUpperCase()}`

  try {
    await getDatabasePool().execute<ResultSetHeader>(
      `INSERT INTO solar_referrals (
        reference_code,
        referrer_name,
        referrer_phone,
        referred_name,
        referred_phone,
        postal_code,
        property_type,
        referrer_permission_confirmed_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [
        referenceCode,
        referral.referrerName,
        referral.referrerPhone,
        referral.referredName,
        referral.referredPhone,
        referral.postalCode,
        referral.propertyType,
      ],
    )

    return jsonResponse({ referenceCode }, 201)
  } catch (error) {
    console.error('Referral submission failed.', getErrorCode(error))
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}
