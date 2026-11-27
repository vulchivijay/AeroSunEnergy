import type { Db } from 'mongodb'
import type { WebsiteFormType } from './websiteFormSubmission'
import type { WebsiteFormSubmissionValue } from './auth/database'

type NotificationFormType = WebsiteFormType | 'referral'

const NOTIFICATION_EMAIL = 'customercare@aerosunenergy.in'
const EMAIL_QUEUE_DATABASE = 'aerosunenergy-db'
const EMAIL_QUEUE_COLLECTION = 'mail'

function formatFieldName(field: string): string {
  return field
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatFieldValue(value: WebsiteFormSubmissionValue): string {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  return String(value)
}

export async function queueFormNotification(
  database: Db,
  formType: NotificationFormType,
  referenceCode: string,
  details: Record<string, WebsiteFormSubmissionValue>,
  receivedAt: Date,
): Promise<void> {
  const formLabel = formType.replace(/_/g, ' ')
  const submittedDetails = Object.entries(details)
    .filter(([field]) => !/(bank|account|ifsc|signature|seal)/i.test(field))
    .map(([field, value]) => `${formatFieldName(field)}: ${formatFieldValue(value)}`)

  if (database.databaseName !== EMAIL_QUEUE_DATABASE) {
    const error = new Error(
      `Email notifications require the ${EMAIL_QUEUE_DATABASE} Firestore database.`,
    )
    error.name = 'EmailQueueDatabaseMismatchError'
    throw error
  }

  await database.collection(EMAIL_QUEUE_COLLECTION).insertOne({
    to: NOTIFICATION_EMAIL,
    message: {
      subject: `New website form submission: ${formLabel} (${referenceCode})`,
      text: [
        `A new ${formLabel} form submission was received.`,
        `Reference: ${referenceCode}`,
        `Received: ${receivedAt.toISOString()}`,
        'Submitted details (banking and signature fields are omitted):',
        ...(submittedDetails.length > 0 ? submittedDetails : ['No email-safe details were submitted.']),
        '',
        'The complete submission is available in the AeroSun Energy dashboard.',
        'https://aerosunenergy.in/auth/dashboard',
      ].join('\n'),
    },
  })
}
