import { NextResponse } from 'next/server'
import { sendTransactionalEmail } from '@/lib/sendMail'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const customerName = String(body?.customerName ?? '').trim()
    const email = String(body?.email ?? '').trim()
    const phone = String(body?.phone ?? '').trim()
    const details = JSON.stringify(body, null, 2)

    if (!customerName || !email || !phone) {
      return NextResponse.json({ error: 'Please fill in the required fields.' }, { status: 400 })
    }

    await sendTransactionalEmail({
      to: process.env.CONTACT_EMAIL || process.env.TO_EMAIL || 'customercare@aerosunenergy.in',
      replyTo: email,
      subject: `Installation & Commissioning Checklist - ${customerName}`,
      text: details,
    })

    return NextResponse.json({ success: true, message: 'Your checklist has been sent successfully.' })
  } catch (error) {
    console.error('Checklist submission failed:', error)
    return NextResponse.json(
      { error: 'We could not send your checklist right now. Please try again later or email us directly.' },
      { status: 500 },
    )
  }
}
