import Link from 'next/link'

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
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(14,165,233,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(99,102,241,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-sky-100/10">
          <div className="absolute inset-10 rounded-full border border-sky-100/10" />
          <div className="absolute inset-20 rounded-full border border-sky-100/10" />
          <div className="absolute inset-32 rounded-full border border-sky-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100/20 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-sky-100">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.8)]" />
              Trust · Privacy · Transparency
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
              Your information.
              <span className="mt-1 block text-sky-300">Handled with care.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Our privacy policy explains what information we collect, why we use it, and the choices available to you.
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300/10 text-xl text-sky-200">◎</span>
            <span className="text-xs leading-5 text-slate-300">
              Last updated
              <strong className="block text-sm font-bold text-white">30 October 2026</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-100/60 sm:px-8 lg:px-10">
            <span>Information we collect</span>
            <span>How we use it</span>
            <span>Your choices</span>
            <span>How we protect it</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <div className="mb-8 rounded-3xl border border-sky-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-800">i</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-800">Privacy at a glance</p>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  This Privacy Policy explains how AeroSun Energy collects, uses, protects, and manages information shared through our website, customer enquiries, project discussions, and renewable-energy service interactions.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {[
                { label: 'Collect', text: 'Relevant enquiry and project details' },
                { label: 'Use', text: 'Respond, plan, and support services' },
                { label: 'Respect', text: 'Your information and privacy choices' },
              ].map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-xs font-bold text-sky-700">0{index + 1}</span>
                  <span className="text-xs leading-5 text-slate-600">
                    <strong className="block text-sm text-slate-900">{item.label}</strong>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {privacySections.map((section, index) => (
              <section
                key={section.heading}
                id={`privacy-${index + 1}`}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]"
              >
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 font-mono text-xs font-bold text-sky-800">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.heading}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{section.content}</p>
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-linear-to-r from-sky-100 via-indigo-100 to-transparent" />
              </section>
            ))}
          </div>

          <p className="mt-7 rounded-2xl border border-sky-200/80 bg-white p-5 text-sm leading-7 text-slate-600">
            Need clarification? Please use the{' '}
            <Link href="/contact" className="font-bold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-indigo-800">
              Contact page
            </Link>{' '}
            or the official contact details listed on the website.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Privacy policy sections" className="overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-800">Find a topic</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Policy contents</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {privacySections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#privacy-${index + 1}`}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-sky-900"
                  >
                    <span className="font-mono font-bold text-sky-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">Information we protect</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
              <li>Customer contact details and business information</li>
              <li>Project enquiries and energy requirements</li>
              <li>Technical site and feasibility information</li>
              <li>Website usage, diagnostics, and security logs</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Our principles</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>We collect only what is necessary for our services and business operations.</li>
              <li>We use data responsibly for enquiries, project support, and service delivery.</li>
              <li>We protect personal and project information with reasonable safeguards.</li>
              <li>We respect your right to review, correct, and manage your information.</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  )
}
