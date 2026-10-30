import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | AeroSun Energy',
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
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | AeroSun Energy',
    description:
      'Understand how AeroSun Energy handles personal information, cookies, and user data protection on this website.',
    url: 'https://aerosunenergy.in/privacy-policy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const privacySections = [
  {
    heading: '1. Introduction',
    content:
      'At AeroSun Energy, we are committed to promoting clean, sustainable, and renewable energy solutions through solar power, wind energy, hybrid renewable energy systems, and related technologies. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you visit our website, contact us, request information, submit an enquiry, seek a quotation, or interact with our products and services.',
    bullets: [
      'Solar rooftop systems for homes, businesses, and institutions',
      'Off-grid solar, battery, and backup systems',
      'Solar pumpsets, hybrid systems, and project planning',
      'Wind, hybrid microgrid, and industrial renewable energy solutions',
    ],
  },
  {
    heading: '2. Information we collect',
    content:
      'We may collect personal identification details such as your name, phone number, email address, business details, and project location. We may also collect technical and business information about your renewable-energy requirements, energy consumption, site conditions, roof or land availability, and the nature of the project you are evaluating.',
    bullets: [
      'Customer contact details, address, and company information',
      'Project information, load profile, and energy requirements',
      'Site data such as rooftop availability, land area, and location',
      'Website and device information used for security and analytics',
    ],
  },
  {
    heading: '3. How we use your information',
    content:
      'We use your information to respond to enquiries, prepare quotations, understand project requirements, contact you about suitable renewable energy solutions, improve customer service, and maintain the security and performance of our website. We may also use the information to comply with legal, tax, and regulatory obligations.',
    bullets: [
      'Respond to enquiries and project discussions',
      'Prepare system recommendations and quotations',
      'Support installation, commissioning, and service coordination',
      'Improve website performance, security, and customer support',
    ],
  },
  {
    heading: '4. Cookies and website analytics',
    content:
      'Our website may use cookies and similar technologies to support website functionality, remember user settings, understand website usage, and improve performance. Some cookies are essential; others may be used for analytics or marketing measurement when consent or disclosure is required.',
    bullets: [
      'Essential cookies for website operation and security',
      'Analytics cookies to improve user experience',
      'Optional cookies managed through the website banner or browser settings',
    ],
  },
  {
    heading: '5. Who we share information with',
    content:
      'We do not sell personal information for independent marketing purposes. We may share information with trusted service providers, project partners, engineering consultants, suppliers, and technical support providers where this is necessary to deliver services, operate the website, or comply with legal obligations.',
    bullets: [
      'Website, email, and IT service providers',
      'Technical partners, project consultants, and suppliers',
      'Government authorities when required by law',
      'Business partners involved in project execution or support',
    ],
  },
  {
    heading: '6. Data retention and deletion',
    content:
      'We keep personal information only for as long as needed to serve the purpose for which it was collected, meet legal obligations, resolve disputes, and maintain business records. If you ask us to delete your personal data, we will review the request and delete it where legally permitted and practically feasible.',
    bullets: [
      'Retention aligned to customer, project, and legal needs',
      'Deletion requests reviewed on a case-by-case basis',
      'Business records retained where required by law',
    ],
  },
  {
    heading: '7. Data protection and security',
    content:
      'We use reasonable technical, administrative, and organizational safeguards to protect personal information from unauthorized access, loss, misuse, or disclosure. However, no online system is completely risk-free, and we cannot guarantee absolute security of information transmitted over the internet.',
    bullets: [
      'Reasonable safeguards for storage, access, and transmission',
      'Monitoring and security practices for the website',
      'Responsibility to protect personal information from misuse',
    ],
  },
  {
    heading: '8. Your rights',
    content:
      'Depending on the applicable law, you may have rights to access, correct, update, restrict, or delete your personal information. You may also object to some uses of your information and withdraw consent for optional cookies or other non-essential processing where consent is required.',
    bullets: [
      'Access and review your personal information',
      'Correct inaccurate or outdated details',
      'Request deletion where permissible',
      'Manage cookie preferences and consent choices',
    ],
  },
  {
    heading: '9. Third-party links and external sites',
    content:
      'Our website may include links to external websites such as government portals, renewable-energy resources, or partner platforms. We are not responsible for the privacy practices or content of those third-party websites. Please review their policies before sharing any information with them.',
    bullets: [
      'External links are not controlled by AeroSun Energy',
      'Please review third-party privacy policies separately',
      'Use caution before sharing personal data on external websites',
    ],
  },
  {
    heading: '10. Changes to this policy',
    content:
      'We may update this Privacy Policy from time to time to reflect changes in our business, legal requirements, or how we operate the website. Any changes will be posted on this page with a revised effective date. Continued use of the website after changes are posted means that you accept the updated version.',
    bullets: [
      'Policy updates posted on this page',
      'Effective date revised whenever the policy changes',
      'Continued use indicates acceptance of updates',
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_18%),linear-gradient(180deg,#f8fbff_0%,#eef7ff_28%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-4xl border border-sky-200 bg-white/90 shadow-[0_28px_90px_-35px_rgba(14,116,144,0.45)] backdrop-blur-sm">
          <div className="bg-linear-to-r from-[#0f172a] via-[#0f3d66] to-[#0ea5e9] p-6 text-white sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-sky-100/80">Privacy</p>
                <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl lg:text-6xl">Privacy Policy</h1>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-sky-50 backdrop-blur-sm">
                Effective Date: 30 October 2026
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-sky-200 bg-linear-to-br from-sky-50 to-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                <p className="text-sm leading-7 text-slate-700">
                  This Privacy Policy explains how AeroSun Energy collects, uses, protects, and manages information shared through our website, customer enquiries, project discussions, and renewable-energy service interactions.
                </p>
              </div>

              {privacySections.map((section) => (
                <section key={section.heading} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-6">
                  <h2 className="text-xl font-black tracking-[-0.04em] text-slate-900">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{section.content}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-black text-sky-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <aside className="space-y-5">
              <div className="rounded-[26px] border border-sky-200 bg-slate-900 p-5 text-white shadow-[0_30px_60px_-35px_rgba(15,23,42,0.9)]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-200">Summary</p>
                <h2 className="mt-3 text-2xl font-black tracking-tighter">What we protect</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                  <li>Customer contact details and business information</li>
                  <li>Project enquiries and energy requirements</li>
                  <li>Technical site and feasibility information</li>
                  <li>Website usage, diagnostics, and security logs</li>
                </ul>
              </div>

              <div className="rounded-[26px] border border-emerald-200 bg-emerald-50 p-5 shadow-[0_20px_40px_-35px_rgba(16,185,129,0.6)]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700">Principles</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>We collect only what is necessary for our services and business operations.</li>
                  <li>We use data responsibly for enquiries, project support, and service delivery.</li>
                  <li>We protect personal and project information with reasonable safeguards.</li>
                  <li>We respect your right to review, correct, and manage your information.</li>
                </ul>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                Need clarification? Please use the{' '}
                <Link href="/contact" className="font-semibold text-sky-700 underline decoration-sky-400 underline-offset-4 hover:text-sky-800">
                  Contact page
                </Link>{' '}
                or the official contact details listed on the website.
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}
