import type { Metadata } from 'next'
import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

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

export default function PrivacyPage() {
  const { t } = useLocale()
  const privacyText = ((t as any).privacyPolicy ?? (en as any).privacyPolicy) as any

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-700">
        {privacyText.badge}
      </div>

      <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
        {privacyText.pageTitle}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        {privacyText.intro}
      </p>

      <div className="mt-10 space-y-8">
        {privacyText.sections.map((section: { heading: string; content: string }) => (
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
          {privacyText.termsLink}
        </Link>{' '}
        for more information about the rules for using our website and requesting services.
      </div>
    </main>
  )
}
