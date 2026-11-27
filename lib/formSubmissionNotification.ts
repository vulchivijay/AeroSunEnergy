import type { Db } from 'mongodb'
import type { WebsiteFormType } from './websiteFormSubmission'
import { isValidEmailAddress } from './validation/contact'

type NotificationFormType = WebsiteFormType | 'referral'

const DEFAULT_NOTIFICATION_EMAIL = 'customercare@aerosunenergy.in'
const EMAIL_QUEUE_COLLECTION = 'mail'

export function getFormNotificationRecipient(): string | null {
  const recipient =
    process.env.FORM_SUBMISSION_NOTIFICATION_EMAIL?.trim() || DEFAULT_NOTIFICATION_EMAIL

  return isValidEmailAddress(recipient) ? recipient : null
}

export async function queueFormNotification(
  database: Db,
  recipient: string,
  formType: NotificationFormType,
  referenceCode: string,
  receivedAt: Date,
): Promise<void> {
  const formLabel = formType.replace(/_/g, ' ')

  await database.collection(EMAIL_QUEUE_COLLECTION).insertOne({
    to: recipient,
    message: {
      subject: `New website form submission: ${formLabel}`,
      text: [
        `A new ${formLabel} form submission was received.`,
        `Reference: ${referenceCode}`,
        `Received: ${receivedAt.toISOString()}`,
        'The submitted details are available in the AeroSun Energy dashboard.',
        'https://aerosunenergy.in/auth/dashboard',
      ].join('\n'),
    },
  })
}
