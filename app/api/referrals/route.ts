import { randomBytes } from 'node:crypto'
import { z } from 'zod'
import { ObjectId } from 'mongodb'
import { withApiLogging } from '@/lib/apiLogging'
import { getDatabase } from '@/lib/auth/database'

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
  if (typeof error === 'object' && error !== null) {
    const name = 'name' in error && typeof error.name === 'string' ? error.name : undefined
    const code = 'code' in error && (typeof error.code === 'string' || typeof error.code === 'number')
      ? String(error.code)
      : undefined
    if (name && code) return `${name} (${code})`
    if (name) return name
    if (code) return code
  }
  return 'UNKNOWN'
}

async function postReferral(request: Request) {
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
    const now = new Date()
    await (await getDatabase()).collection('solar_referrals').insertOne({
      _id: new ObjectId(),
      reference_code: referenceCode,
      referrer_name: referral.referrerName,
      referrer_phone: referral.referrerPhone,
      referred_name: referral.referredName,
      referred_phone: referral.referredPhone,
      postal_code: referral.postalCode,
      property_type: referral.propertyType,
      status: 'new',
      referrer_permission_confirmed_at: now,
      created_at: now,
      updated_at: now,
    })

    return jsonResponse({ referenceCode }, 201)
  } catch (error) {
    console.error('Referral submission failed.', getErrorCode(error))
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}

export const POST = withApiLogging(postReferral)
