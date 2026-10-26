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
    heading: '1. What information we collect',
    content:
      'We collect information that you choose to share with us, such as your name, phone number, email address, business or project details, and your questions about solar, wind, or hybrid energy systems. We may also collect technical information about how the website is used, such as browser type, device information, pages visited, and general location data when needed for analytics and security.',
  },
  {
    heading: '2. How we use your information',
    content:
      'We use your information to respond to your inquiries, prepare quotations, understand your energy requirements, contact you about potential solutions, improve customer service, and maintain the security and performance of our website. We may also use your information to comply with applicable legal, tax, and regulatory obligations.',
  },
  {
    heading: '3. Cookies and website analytics',
    content:
      'Our website uses cookies and similar technologies to remember user settings, improve website performance, support essential functionality, and understand how visitors use our site. Some cookies are necessary for the website to work properly. Optional cookies may be used for analytics and improvement purposes, and you can manage them through the cookie banner or browser settings.',
  },
  {
    heading: '4. Who we share information with',
    content:
      'We do not sell your personal information. We may share information with trusted service providers who help us operate the website, send emails, support customer communication, or manage technical services. These parties are expected to handle information responsibly and use it only for the services they provide to AeroSun Energy.',
  },
  {
    heading: '5. Data retention and deletion',
    content:
      'We keep personal information only for as long as needed to serve the purpose for which it was collected, meet legal obligations, resolve disputes, and maintain business records. If you ask us to delete your personal data, we will review the request and delete it where legally permitted and practically feasible.',
  },
  {
    heading: '6. How we protect your data',
    content:
      'We use reasonable technical, administrative, and organizational safeguards to protect personal information from unauthorized access, loss, misuse, or disclosure. However, no online system is completely risk-free, and we cannot guarantee absolute security of information transmitted over the internet.',
  },
  {
    heading: '7. Your rights',
    content:
      'Depending on the applicable law, you may have rights to access, correct, update, restrict, or delete your personal information. You may also object to some uses of your information and withdraw consent for optional cookies or other non-essential processing where consent is required. If you want to exercise any of these rights, please contact us using the details below.',
  },
  {
    heading: '8. Third-party links',
    content:
      'Our website may include links to external websites such as government portals, renewable energy resources, or partner platforms. We are not responsible for the privacy practices or content of these third-party websites. Please review their policies before sharing any information with them.',
  },
  {
    heading: '9. Changes to this policy',
    content:
      'We may update this Privacy Policy from time to time to reflect changes in our business, legal requirements, or how we operate the website. Any changes will be posted on this page with a revised effective date. Continued use of the website after changes are posted means that you accept the updated version.',
  },
  {
    heading: '10. Contact us',
    content:
      'If you have any questions about this Privacy Policy, your personal information, or how we handle cookies, please use the contact details available on our contact page or email us through the official contact information listed on the website.',
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
        information shared through our website, email communication, and service enquiries.
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
        for more information about the rules for using our website and requesting services.
      </div>
    </main>
  )
}
