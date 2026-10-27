import nodemailer from 'nodemailer'

export function getMailConfig() {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const toEmail = process.env.CONTACT_EMAIL || process.env.TO_EMAIL || 'customercare@aerosunenergy.in'
  const fromEmail = process.env.FROM_EMAIL || smtpUser || 'noreply@aerosunenergy.in'

  return { smtpHost, smtpPort, smtpUser, smtpPass, toEmail, fromEmail }
}

export async function sendTransactionalEmail({
  to,
  subject,
  text,
  replyTo,
}: {
  to?: string
  subject: string
  text: string
  replyTo?: string
}) {
  const { smtpHost, smtpPort, smtpUser, smtpPass, toEmail, fromEmail } = getMailConfig()

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('Email server is not configured.')
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  await transporter.sendMail({
    from: fromEmail,
    to: to || toEmail,
    replyTo,
    subject,
    text,
  })

  return true
}
