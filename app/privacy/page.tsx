import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Review the AeroSun Energy Privacy Policy covering personal data collection, cookies, website analytics, user rights, and data protection practices.',
  keywords: [
    'AeroSun Energy privacy policy',
    'renewable energy privacy policy',
    'website cookies policy',
    'data protection policy India',
    'personal information handling',
    'AeroSun Energy legal privacy',
  ],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | AeroSun Energy',
    description:
      'Understand how AeroSun Energy handles personal information, cookies, and user data protection on this website.',
    url: 'https://aerosunenergy.in/privacy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const sections = [
  {
    heading: '1. Information we collect',
    content:
      'We may collect personal information you provide directly, such as your name, email address, phone number, company information, and project requirements when you contact us, request a consultation, or submit an inquiry.',
  },
  {
    heading: '2. How we use your information',
    content:
      'We use your information to respond to your queries, provide quotations, discuss renewable energy solutions, improve customer service, and maintain website security. We may also use information to comply with legal and regulatory obligations.',
  },
  {
    heading: '3. Cookies and website analytics',
    content:
      'Our website uses cookies and similar technologies to remember preferences, support essential website functionality, and understand user interactions with our services. You can manage or decline optional cookies through the cookie banner displayed on the site.',
  },
  {
    heading: '4. Data sharing',
    content:
      'We do not sell personal data. We may share information with trusted service providers who support hosting, communications, analytics, or operational needs, subject to confidentiality obligations.',
  },
  {
    heading: '5. Data security',
    content:
      'We use commercially reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, misuse, or disclosure. No method of transmission or storage is completely secure, however.',
  },
  {
    heading: '6. Your rights',
    content:
      'Depending on applicable data protection laws, you may have the right to request access, correction, deletion, or restriction of your personal information, as well as the right to object to certain processing activities. You may also withdraw consent for non-essential cookies at any time.',
  },
  {
    heading: '7. Retention',
    content:
      'We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements.',
  },
  {
    heading: '8. Contact us',
    content:
      'If you have questions about this Privacy Policy or your personal information, please contact us through the contact form or the contact details listed on our website.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-700">
        Privacy
      </div>

      <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        This Privacy Policy explains how AeroSun Energy collects, uses, protects, and manages
        information shared through our website and communications.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section
            key={section.heading}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]"
          >
            <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
            <p className="mt-3 text-base leading-7 text-slate-700">{section.content}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-700">
        You can review our{' '}
        <Link href="/terms" className="font-semibold text-sky-700 hover:text-sky-800">
          Terms and Conditions
        </Link>{' '}
        for more information about the rules governing website usage.
      </div>
    </main>
  )
}
