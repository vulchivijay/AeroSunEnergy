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
      'By using this website, you agree to follow these Terms and Conditions and any related policies posted on the site. If you do not agree with these terms, please do not use the website or contact us through it.',
  },
  {
    heading: '2. About the information on this website',
    content:
      'AeroSun Energy provides information about renewable energy solutions, including solar, wind, and hybrid systems. This information is intended for general awareness and planning purposes. It does not replace professional engineering judgment, site assessment, local regulations, or formal quotations prepared after review of project requirements.',
  },
  {
    heading: '3. Service enquiries and project discussions',
    content:
      'Any enquiry, consultation request, design discussion, quotation, or project execution remains subject to technical feasibility, site conditions, utility approvals, product availability, commercial terms, and applicable laws. We may request additional information before preparing a project proposal or proceeding with any service engagement.',
  },
  {
    heading: '4. User responsibilities',
    content:
      'Users must ensure that any information submitted through the website is accurate, lawful, and relevant to the enquiry. You agree not to misuse the site, upload harmful content, attempt unauthorized access, or interfere with the website or other users’ experiences.',
  },
  {
    heading: '5. Intellectual property',
    content:
      'All content, branding, text, graphics, layouts, logos, product names, and visual materials used on this website remain the property of AeroSun Energy or their respective owners unless stated otherwise. You may not copy, reproduce, distribute, or use this content without prior written approval.',
  },
  {
    heading: '6. Website availability and accuracy',
    content:
      'We aim to keep the website accessible and up to date, but we do not guarantee that it will always be uninterrupted, error-free, or free from technical issues. Information may change without notice. We encourage users to verify critical details before making decisions based on website content.',
  },
  {
    heading: '7. Limitation of liability',
    content:
      'To the maximum extent permitted by law, AeroSun Energy shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to website use, service enquiries, or reliance on information provided on the site. We do not guarantee project outcomes, energy production values, or commercial results without a formal agreement and technical review.',
  },
  {
    heading: '8. Links to external websites',
    content:
      'This website may contain links to third-party platforms, government portals, resource websites, or partner websites. We do not control or assume responsibility for these external resources. Accessing them is at your own risk, and you should review their own terms and privacy policies before sharing any information.',
  },
  {
    heading: '9. Changes to these terms',
    content:
      'AeroSun Energy may update these Terms and Conditions from time to time. Any updated version will be posted on this page and will become effective as soon as it is published. Continued use of the website after changes are made means you accept the updated terms.',
  },
  {
    heading: '10. Governing law and contact',
    content:
      'These Terms and Conditions are governed by the laws of India, without regard to conflict-of-law principles. If you have a question about these terms or need clarification, please use the contact details provided on the website so we can assist you directly.',
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
        These Terms and Conditions explain how you may use our website and how we handle general information,
        enquiries, and service discussions related to renewable energy solutions.
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