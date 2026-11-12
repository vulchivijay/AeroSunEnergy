export type WebsiteFormType =
  | 'contact'
  | 'newsletter'
  | 'solar_assessment'
  | 'customer_enquiry'
  | 'warranty_policy'
  | 'purchase_order'
  | 'invoice_receipt'
  | 'customer_agreement'
  | 'installation_checklist'

type SubmissionResponse = {
  referenceCode: string
}

function isSubmissionResponse(value: unknown): value is SubmissionResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    'referenceCode' in value &&
    typeof value.referenceCode === 'string'
  )
}

export async function submitWebsiteForm(
  formType: WebsiteFormType,
  data: Record<string, unknown>,
): Promise<string> {
  const response = await fetch('/api/form-submissions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, data }),
  })

  let result: unknown
  try {
    result = await response.json()
  } catch {
    throw new Error('The form submission response was invalid.')
  }

  if (!response.ok || !isSubmissionResponse(result)) {
    throw new Error('The form submission could not be saved.')
  }

  return result.referenceCode
}
