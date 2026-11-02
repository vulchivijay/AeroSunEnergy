import Link from 'next/link'

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
    <main className="min-h-screen bg-[#f4f6ef] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#10251f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(16,185,129,0.22),transparent_38%),linear-gradient(115deg,transparent_45%,rgba(190,242,100,0.06)_45%,transparent_72%)]" />
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                Legal · Website use
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
                Terms <span className="text-lime-300">&</span> Conditions
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base sm:leading-8">
                The guidelines for using our website, exploring renewable energy solutions, and engaging with AeroSun Energy.
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-emerald-100/20 pl-4 text-sm text-emerald-50/80">
              <span className="text-2xl font-light text-lime-300">§</span>
              <span>
                Effective date
                <strong className="mt-1 block font-semibold text-white">30 October 2026</strong>
              </span>
            </div>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-100/60 sm:text-xs">
            <span>Website access</span>
            <span>Project information</span>
            <span>Service terms</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-10">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Terms and conditions sections" className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">In this document</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Contents</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {termsSections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#terms-${index + 1}`}
                    className="flex gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900"
                  >
                    <span className="font-mono font-bold text-emerald-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="rounded-2xl border border-emerald-900/10 bg-[#e8eee4] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">A useful reminder</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Project-specific scope, pricing, warranties, and performance expectations are confirmed in writing.
            </p>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mb-8 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">Please read</p>
            <p className="mt-3 max-w-4xl text-base leading-8 text-slate-700">
              These Terms and Conditions explain how you may use our website and how we handle general information,
              customer enquiries, quotations, project discussions, and renewable-energy service interactions.
            </p>
          </div>

          <div className="space-y-5">
            {termsSections.map((section, index) => (
              <section
                key={section.heading}
                id={`terms-${index + 1}`}
                className="scroll-mt-28 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.45)] transition-shadow hover:shadow-[0_24px_60px_-42px_rgba(5,150,105,0.35)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-xs font-black text-lime-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">{section.heading}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{section.content}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-xl bg-[#f5f7f2] px-3 py-3 text-sm leading-6 text-slate-700">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-[9px] font-black text-emerald-900">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <section className="rounded-3xl bg-[#10251f] p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-lime-300">Key points</p>
              <h2 className="mt-2 text-xl font-black">Use responsibly</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-50/80">
                <li>Use the website lawfully and for valid business or information purposes.</li>
                <li>Provide accurate project details when contacting AeroSun Energy.</li>
                <li>Recognize that final technical recommendations depend on site conditions and engineering review.</li>
                <li>Check formal quotations and agreements for final commercial and technical scope.</li>
              </ul>
            </section>
            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-800">Important</p>
              <h2 className="mt-2 text-xl font-black text-slate-900">Project information</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Website information is intended for general awareness and planning purposes.</li>
                <li>Preliminary estimates do not replace technical assessment or formal project approval.</li>
                <li>Final terms, pricing, warranty, and scope are confirmed in writing.</li>
              </ul>
            </section>
          </div>

          <p className="mt-7 rounded-2xl border border-emerald-900/10 bg-white p-5 text-sm leading-7 text-slate-600">
            For questions about these terms, please use the{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950">
              contact page
            </Link>{' '}
            or the official contact details published on the website.
          </p>
        </article>
      </div>
    </main>
  )
}