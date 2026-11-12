import { randomBytes } from 'node:crypto'
import { z } from 'zod'
import { getDatabasePool } from '@/lib/auth/database'

export const runtime = 'nodejs'

const MAX_REQUEST_LENGTH = 64 * 1024
const formTypes = [
  'contact',
  'newsletter',
  'solar_assessment',
  'customer_enquiry',
  'warranty_policy',
  'purchase_order',
  'invoice_receipt',
  'customer_agreement',
  'installation_checklist',
] as const

type FormType = (typeof formTypes)[number]

const customerEnquiryFields = new Set([
  'quotation_reference',
  'quotation_revision',
  'quotation_date',
  'quotation_valid_until',
  'customer_name',
  'company_organisation',
  'contact_person',
  'mobile_number',
  'customer_email',
  'customer_enquiry_reference',
  'installation_address',
  'district',
  'state',
  'pin_code',
  'customer_category',
  'site_survey_date',
  'project_name',
  'proposed_capacity_kwp',
  'system_configuration',
  'installation_type',
  'price_subtotal',
  'price_gst',
  'price_other_charges',
  'price_total',
  'total_amount_words',
  'gst_treatment',
  'installed_capacity',
  'daily_generation',
  'monthly_generation',
  'annual_generation',
  'self_consumption',
  'grid_export',
  'performance_ratio',
  'generation_site_location',
  'solar_resource_assessment',
  'panel_orientation',
  'panel_tilt',
  'shading_assessment',
  'system_losses',
  'average_monthly_bill',
  'estimated_monthly_generation',
  'estimated_monthly_savings',
  'estimated_annual_savings',
  'total_project_investment',
  'payback_period',
  'electricity_tariff',
  'financial_self_consumption',
  'export_compensation',
  'annual_degradation',
  'fixed_demand_charges',
  'additional_work',
  'bank_account_name',
  'bank_name',
  'bank_account_number',
  'bank_ifsc',
  'bank_branch',
  'acceptance_customer_name',
  'customer_signature',
  'customer_acceptance_date',
  'customer_acceptance_place',
  'authorised_representative',
  'authorised_designation',
  'authorised_signature',
  'authorisation_date',
  'company_seal',
  'accept_terms',
])

const allowedFields: Record<FormType, (field: string) => boolean> = {
  contact: (field) => ['fullName', 'email', 'phone', 'projectType', 'usage', 'message'].includes(field),
  newsletter: (field) => field === 'email',
  solar_assessment: (field) => [
    'name',
    'phone',
    'pinCode',
    'propertyType',
    'monthlyBill',
    'recommendedKw',
    'annualGeneration',
    'annualSavings',
    'twentyFiveYearSavings',
    'roofArea',
  ].includes(field),
  customer_enquiry: (field) =>
    customerEnquiryFields.has(field) ||
    /^(price_item|scope_activity|schedule_duration|warranty_provider|warranty_period|payment_percentage|payment_amount)_\d+$/.test(field),
  warranty_policy: (field) => ['customerName', 'companyName', 'email', 'phone', 'projectName', 'productLine', 'warrantyStart', 'servicePlan', 'acceptTerms'].includes(field),
  purchase_order: (field) => ['customerName', 'companyName', 'email', 'phone', 'poNumber', 'projectTitle', 'supplierName', 'productLine', 'quantity', 'unitPrice', 'totalValue', 'deliverySchedule', 'warranty', 'termsAccepted'].includes(field),
  invoice_receipt: (field) => ['customerName', 'companyName', 'email', 'phone', 'invoiceNumber', 'projectName', 'invoiceDate', 'amount', 'paymentMode', 'receiptNote', 'paymentReceived'].includes(field),
  customer_agreement: (field) => [
    'customerName',
    'companyName',
    'email',
    'phone',
    'agreementNumber',
    'agreementDate',
    'projectReference',
    'projectType',
    'systemCapacity',
    'projectLocation',
    'quotedAmount',
    'siteAccessDate',
    'scopeItems',
    'acceptanceCustomerName',
    'signature',
    'acceptanceDate',
    'acceptancePlace',
    'agreed',
  ].includes(field),
  installation_checklist: (field) => ['customerName', 'companyName', 'email', 'phone', 'projectName', 'siteLocation', 'installationDate', 'checklistStatus', 'safetyCheck', 'commissioningCheck', 'notes'].includes(field),
}

const requiredFields: Record<FormType, string[]> = {
  contact: ['fullName', 'email', 'projectType', 'message'],
  newsletter: ['email'],
  solar_assessment: ['name', 'phone', 'pinCode', 'propertyType', 'monthlyBill'],
  customer_enquiry: ['quotation_reference', 'customer_name', 'customer_email', 'mobile_number', 'project_name', 'pin_code', 'price_total', 'accept_terms'],
  warranty_policy: ['customerName', 'email', 'phone', 'projectName', 'productLine', 'warrantyStart', 'servicePlan', 'acceptTerms'],
  purchase_order: ['customerName', 'email', 'phone', 'poNumber', 'projectTitle', 'supplierName', 'productLine', 'quantity', 'unitPrice', 'totalValue', 'deliverySchedule', 'warranty', 'termsAccepted'],
  invoice_receipt: ['customerName', 'email', 'phone', 'invoiceNumber', 'projectName', 'invoiceDate', 'amount', 'paymentMode', 'receiptNote', 'paymentReceived'],
  customer_agreement: ['customerName', 'email', 'phone', 'agreed'],
  installation_checklist: ['customerName', 'email', 'phone', 'projectName', 'siteLocation', 'installationDate', 'checklistStatus', 'safetyCheck', 'commissioningCheck', 'notes'],
}

const submissionValueSchema = z.union([
  z.string().max(4_000),
  z.number().finite(),
  z.boolean(),
  z.array(z.string().max(200)).max(100),
])

const requestSchema = z.object({
  formType: z.enum(formTypes),
  data: z.record(z.string().regex(/^[A-Za-z][A-Za-z0-9_]{0,63}$/), submissionValueSchema),
}).strict()

type SubmissionValue = string | number | boolean | string[]

type BodyResult =
  | { ok: true; data: unknown }
  | { ok: false; status: number; error: string }

function jsonResponse(body: unknown, status: number): Response {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

async function readSubmissionBody(request: Request): Promise<BodyResult> {
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

function hasRequiredValues(formType: FormType, data: Record<string, SubmissionValue>): boolean {
  return requiredFields[formType].every((field) => {
    const value = data[field]
    return typeof value === 'string' ? value.trim().length > 0 : value === true || (typeof value === 'number' && Number.isFinite(value))
  })
}

function isValidEmail(value: unknown): boolean {
  return typeof value === 'string' && z.string().max(254).email().safeParse(value).success
}

function isValidPhone(value: unknown): boolean {
  if (typeof value !== 'string' || !/^[0-9+()\-\s]{10,24}$/.test(value)) return false
  const digitCount = value.replace(/\D/g, '').length
  return digitCount >= 10 && digitCount <= 13
}

function isValidSubmission(formType: FormType, data: Record<string, SubmissionValue>): boolean {
  const entries = Object.entries(data)
  if (entries.length === 0 || entries.length > 180) return false
  if (entries.some(([field]) => !allowedFields[formType](field))) return false
  if (!hasRequiredValues(formType, data)) return false

  const emailField = formType === 'customer_enquiry' ? 'customer_email' : 'email'
  if (['contact', 'newsletter', 'customer_enquiry', 'warranty_policy', 'purchase_order', 'invoice_receipt', 'customer_agreement', 'installation_checklist'].includes(formType)) {
    if (!isValidEmail(data[emailField])) return false
  }

  const phoneField = formType === 'customer_enquiry' ? 'mobile_number' : 'phone'
  if (data[phoneField] !== undefined && String(data[phoneField]).trim() && !isValidPhone(data[phoneField])) {
    return false
  }

  if (formType === 'solar_assessment' && (typeof data.monthlyBill !== 'number' || data.monthlyBill < 500 || data.monthlyBill > 50_000)) {
    return false
  }

  if (formType === 'solar_assessment' && (
    typeof data.name !== 'string' ||
    data.name.trim().length < 2 ||
    typeof data.pinCode !== 'string' ||
    !/^[1-9]\d{5}$/.test(data.pinCode)
  )) {
    return false
  }

  if (formType === 'contact' && (
    typeof data.fullName !== 'string' ||
    data.fullName.trim().length < 2 ||
    typeof data.message !== 'string' ||
    data.message.trim().length < 10
  )) {
    return false
  }

  if (formType === 'customer_enquiry' && (
    (typeof data.price_total !== 'string' && typeof data.price_total !== 'number') ||
    !/^\d+(?:\.\d{1,2})?$/.test(String(data.price_total)) ||
    typeof data.pin_code !== 'string' ||
    !/^[1-9]\d{5}$/.test(data.pin_code)
  )) {
    return false
  }

  return true
}

export async function POST(request: Request) {
  let body: BodyResult
  try {
    body = await readSubmissionBody(request)
  } catch (error) {
    console.error('Website form request body could not be read.', getErrorCode(error))
    return jsonResponse({ error: 'invalid_request' }, 400)
  }

  if (!body.ok) {
    return jsonResponse({ error: body.error }, body.status)
  }

  const parsed = requestSchema.safeParse(body.data)
  if (!parsed.success || !isValidSubmission(parsed.data.formType, parsed.data.data)) {
    return jsonResponse({ error: 'invalid_input' }, 400)
  }

  const { formType, data } = parsed.data
  const referenceCode = `ASF-${randomBytes(8).toString('hex').toUpperCase()}`

  try {
    await getDatabasePool().execute(
      `INSERT INTO website_form_submissions (
        reference_code,
        form_type,
        payload,
        status
      ) VALUES (?, ?, ?, 'new')`,
      [referenceCode, formType, JSON.stringify(data)],
    )

    return jsonResponse({ referenceCode }, 201)
  } catch (error) {
    console.error('Website form submission failed.', getErrorCode(error))
    return jsonResponse({ error: 'service_unavailable' }, 503)
  }
}
