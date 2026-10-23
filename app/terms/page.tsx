import type { Metadata } from 'next'
import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the AeroSun Energy website terms and conditions covering service scope, usage rules, intellectual property, liability, and governing law.',
  keywords: [
    'AeroSun Energy terms and conditions',
    'website terms and conditions',
    'renewable energy company terms',
    'website legal policy',
    'solar energy service terms',
    'AeroSun Energy legal policy',
  ],
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms and Conditions | AeroSun Energy',
    description:
      'Review the legal terms for using the AeroSun Energy website and engaging with our renewable energy services.',
    url: 'https://aerosunenergy.in/terms',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const { t } = useLocale()
  const legalText = ((t as any).legalTerms ?? (en as any).legalTerms) as any

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
        {legalText.badge}
      </div>

      <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{legalText.pageTitle}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{legalText.intro}</p>

      <div className="mt-10 space-y-8">
        {legalText.sections.map((section: { heading: string; content: string }) => (
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
        {legalText.contactPrompt.split('contact page').length > 1 ? (
          <>
            {legalText.contactPrompt.split('contact page')[0]}
            <Link href="/contact" className="font-semibold text-emerald-700 hover:text-emerald-800">
              contact page
            </Link>
            {legalText.contactPrompt.split('contact page')[1]}
          </>
        ) : (
          legalText.contactPrompt
        )}
      </div>
    </main>
  )
}