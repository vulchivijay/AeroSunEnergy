import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body?.name ?? '').trim()
    const email = String(body?.email ?? '').trim()
    const phone = String(body?.phone ?? '').trim()
    const projectType = String(body?.projectType ?? '').trim()
    const usage = String(body?.usage ?? '').trim()
    const message = String(body?.message ?? '').trim()

    if (!name || !email || !phone || !projectType || !usage || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.CONTACT_EMAIL || process.env.TO_EMAIL || 'customercare@aerosunenergy.in'
    const fromEmail = process.env.FROM_EMAIL || smtpUser || 'noreply@aerosunenergy.in'

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'Email server is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL in environment variables.',
        },
        { status: 500 },
      )
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
      to: toEmail,
      replyTo: email,
      subject: `AeroSun Energy project brief from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Project type: ${projectType}`,
        `Estimated usage: ${usage}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully.' })
  } catch (error) {
    console.error('Contact email send failed:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or use the direct email link.' },
      { status: 500 },
    )
  }
}
