import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | AeroSun Energy',
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
    canonical: '/terms-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | AeroSun Energy',
    description:
      'Review the legal terms for using the AeroSun Energy website and engaging with our renewable energy services.',
    url: 'https://aerosunenergy.in/terms-conditions',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const termsSections = [
  {
    heading: '1. Introduction',
    content:
      'Welcome to the official website of AeroSun Energy Private Limited. These Terms & Conditions govern access to our website, products, services, quotations, and business transactions involving solar, wind, and hybrid renewable energy solutions.',
    bullets: [
      'Residential and commercial rooftop solar systems',
      'Off-grid solar, battery, and backup systems',
      'Solar pumpsets and agricultural power solutions',
      'Commercial and industrial renewable energy projects',
      'Wind, hybrid, and microgrid energy systems',
    ],
  },
  {
    heading: '2. Purpose of AeroSun Energy',
    content:
      'Our purpose is to support the adoption of clean, sustainable, and renewable energy through practical solar, wind, and hybrid energy solutions for homes, farms, institutions, businesses, and communities.',
    bullets: [
      'Reduce dependence on conventional electricity sources',
      'Improve energy efficiency and energy management',
      'Support off-grid and remote applications',
      'Promote sustainable business and community energy models',
    ],
  },
  {
    heading: '3. Scope of products and services',
    content:
      'AeroSun Energy may offer solar energy solutions, wind energy systems, hybrid renewable energy systems, battery storage, energy management solutions, and related green-energy services depending on availability and project requirements.',
    bullets: [
      'Solar rooftop, commercial, and industrial systems',
      'Wind turbine and generator-based solutions',
      'Hybrid solar-wind power systems with storage',
      'Renewable energy project planning and maintenance support',
    ],
  },
  {
    heading: '4. Website usage',
    content:
      'Visitors may use the website to learn about renewable energy solutions, review product and service information, submit enquiries, request quotations, and contact our team. Users must not misuse the site or interfere with its security or performance.',
    bullets: [
      'Do not use the website for unlawful purposes',
      'Do not submit false, misleading, or harmful information',
      'Do not attempt unauthorized access or disrupt website operations',
      'Do not copy or misuse content without prior written authorization',
    ],
  },
  {
    heading: '5. Product information and specifications',
    content:
      'We make reasonable efforts to provide accurate information about our products and services. However, website descriptions, photos, diagrams, technical specifications, and product representations are indicative and may change depending on manufacturing, model, customization, and site requirements.',
    bullets: [
      'Final specifications are confirmed in quotations and written agreements',
      'Customers should verify technical details before ordering',
      'Availability and configuration may vary by project',
    ],
  },
  {
    heading: '6. Customer enquiries and project requirements',
    content:
      'Customers may contact AeroSun Energy for technical discussions, project evaluations, and commercial quotations. To understand requirements accurately, we may request project location, electrical data, rooftop or land details, site photos, and expected usage patterns.',
    bullets: [
      'Customer information and contact details',
      'Project location and site conditions',
      'Load profile, consumption, and backup needs',
      'Budget, timing, and technical requirements',
    ],
  },
  {
    heading: '7. Technical assessment and feasibility',
    content:
      'Renewable energy projects require technical evaluation. Depending on the project, assessment may include electricity consumption analysis, solar or wind resource evaluation, load calculations, battery sizing, structural suitability, and regulatory review.',
    bullets: [
      'Site assessment and feasibility review',
      'Resource and load analysis',
      'Engineering and safety review',
      'System sizing and design validation',
    ],
  },
  {
    heading: '8. Solar energy performance',
    content:
      'Solar generation depends on sunlight, weather, shading, panel orientation, temperature, equipment efficiency, and maintenance. Any generation figures displayed on the website or preliminary examples are estimates unless stated otherwise in writing.',
    bullets: [
      'Actual generation varies by site and season',
      'Performance may differ from estimates',
      'Technical factors affect energy yield',
    ],
  },
  {
    heading: '9. Wind energy performance',
    content:
      'Wind energy generation depends on local wind conditions, terrain, turbulence, installation height, turbine design, and maintenance. AeroSun Energy does not guarantee that every location is suitable for wind turbine installation.',
    bullets: [
      'Site suitability is project-specific',
      'Rooftop wind applications require special review',
      'Performance depends on wind quality and design parameters',
    ],
  },
  {
    heading: '10. Hybrid energy system performance',
    content:
      'Hybrid energy systems may combine solar, wind, battery storage, inverters, controllers, and backup supplies. They can improve renewable-electricity availability, but performance still depends on resource availability, load demands, equipment capacity, and system configuration.',
    bullets: [
      'System performance is design-specific',
      'Availability depends on storage and backup arrangements',
      'Reliability commitments must be defined in a written agreement',
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f8fff9_0%,#ecfdf5_22%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-4xl border border-emerald-200 bg-white/90 shadow-[0_28px_90px_-35px_rgba(5,150,105,0.45)] backdrop-blur-sm">
          <div className="bg-linear-to-r from-[#052e2b] via-[#0f766e] to-[#34d399] p-6 text-white sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-emerald-100/80">Legal</p>
                <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl lg:text-6xl">
                  Terms & Conditions
                </h1>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-emerald-50 backdrop-blur-sm">
                Effective Date: 30 October 2026
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                <p className="text-sm leading-7 text-slate-700">
                  These Terms and Conditions explain how you may use our website and how we handle general information,
                  customer enquiries, quotations, project discussions, and renewable-energy service interactions.
                </p>
              </div>

              {termsSections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-6"
                >
                  <h2 className="text-xl font-black tracking-[-0.04em] text-slate-900">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{section.content}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-700">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <aside className="space-y-5">
              <div className="rounded-[26px] border border-emerald-200 bg-slate-900 p-5 text-white shadow-[0_30px_60px_-35px_rgba(15,23,42,0.9)]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-200">Key points</p>
                <h2 className="mt-3 text-2xl font-black tracking-tighter">Use responsibly</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                  <li>Use the website lawfully and for valid business or information purposes.</li>
                  <li>Provide accurate project details when contacting AeroSun Energy.</li>
                  <li>Recognize that final technical recommendations depend on site conditions and engineering review.</li>
                  <li>Check formal quotations and agreements for final commercial and technical scope.</li>
                </ul>
              </div>

              <div className="rounded-[26px] border border-amber-200 bg-amber-50 p-5 shadow-[0_20px_40px_-35px_rgba(245,158,11,0.6)]">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700">Important</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>Website information is intended for general awareness and planning purposes.</li>
                  <li>Preliminary estimates do not replace technical assessment or formal project approval.</li>
                  <li>Final terms, pricing, warranty, and scope are confirmed in writing.</li>
                </ul>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                For questions about these terms, please use the{' '}
                <Link
                  href="/contact"
                  className="font-semibold text-emerald-700 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-800"
                >
                  contact page
                </Link>{' '}
                or the official contact details published on the website.
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}