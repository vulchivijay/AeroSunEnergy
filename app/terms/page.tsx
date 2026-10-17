import type { Metadata } from 'next'
import Link from 'next/link'

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

const sections = [
  {
    heading: '1. Acceptance of terms',
    content:
      'By accessing or using the AeroSun Energy website, you agree to be bound by these Terms and Conditions and any policies referenced herein. If you do not agree, please do not use our website or request services from us.',
  },
  {
    heading: '2. Information and service scope',
    content:
      'AeroSun Energy provides information about renewable energy systems, including solar, wind, and hybrid solutions. Any proposal, design, estimate, or project execution remains subject to technical feasibility, site conditions, local regulations, utility approval, and commercial terms agreed in writing.',
  },
  {
    heading: '3. User responsibilities',
    content:
      'Users are responsible for ensuring that any information they submit is accurate, complete, and lawful. You must not use the website for any illegal, harmful, or abusive purpose, including attempts to interfere with the operation, security, or integrity of our systems.',
  },
  {
    heading: '4. Intellectual property',
    content:
      'All trademarks, logos, product names, text, imagery, and content displayed on this website are the property of AeroSun Energy or their respective owners and may not be used without prior written consent.',
  },
  {
    heading: '5. Limitation of liability',
    content:
      'AeroSun Energy strives to provide accurate and useful information, but the website is provided on an "as is" basis. We do not guarantee that the website will be uninterrupted, error-free, or completely free from security threats. To the fullest extent allowed by law, we disclaim liability for indirect, incidental, or consequential losses arising from website use or service discussions.',
  },
  {
    heading: '6. Changes to terms',
    content:
      'AeroSun Energy reserves the right to modify these Terms and Conditions at any time. Continued use of the website after such changes are posted means you accept the updated terms.',
  },
  {
    heading: '7. Governing law',
    content:
      'These Terms and Conditions are governed by the laws of India and the applicable jurisdiction for AeroSun Energy operations, without regard to conflict-of-law principles.',
  },
  {
    heading: '8. Contact information',
    content:
      'For questions or concerns regarding these Terms and Conditions, please contact us through the contact form on the website or via the official contact details listed on the site.',
  },
]

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-8 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
        Legal
      </div>

      <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Terms and Conditions</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        Welcome to the AeroSun Energy website. By using this site, you agree to comply with these terms and conditions.
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
        For questions about these terms, please use the{' '}
        <Link href="/contact" className="font-semibold text-emerald-700 hover:text-emerald-800">
          contact page
        </Link>
        .
      </div>
    </main>
  )
}