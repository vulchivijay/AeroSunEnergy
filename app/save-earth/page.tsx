import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Save Earth | AeroSun Energy',
  description:
    'Learn how rooftop solar, wind, and hybrid renewable energy solutions help reduce emissions, protect the environment, and build a cleaner future with AeroSun Energy.',
  keywords: [
    'Save Earth initiative',
    'renewable energy and climate action',
    'solar for environment',
    'reduce carbon emissions',
    'clean energy India',
    'AeroSun Energy sustainability',
  ],
  alternates: {
    canonical: '/save-earth',
  },
  openGraph: {
    title: 'Save Earth | AeroSun Energy',
    description:
      'Discover how switching to clean solar, wind, and hybrid energy can help reduce emissions, save resources, and protect the planet.',
    url: 'https://aerosunenergy.in/save-earth',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const impactStats = [
  { value: '1 kW', label: 'solar can offset significant monthly power demand' },
  { value: '100%', label: 'cleaner energy generation than fossil power at the point of use' },
  { value: '24/7', label: 'with hybrid systems, energy can be stored and used smarter' },
  { value: 'Lower', label: 'grid dependency and reduced pollution burden' },
]

const whyItMatters = [
  {
    title: 'Cut carbon emissions',
    text: 'Every unit of solar and wind energy replaces fossil-based electricity and helps reduce greenhouse gas emissions that contribute to climate change.',
    accent: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Cleaner air and water',
    text: 'Renewable power reduces harmful smoke, sulfur, and particulate pollution while avoiding large amounts of water use tied to conventional thermal power plants.',
    accent: 'from-sky-500 to-cyan-600',
  },
  {
    title: 'Energy independence',
    text: 'Generating power closer to where it is consumed helps build more resilient homes, farms, businesses, and communities that are less vulnerable to outages and rising fuel costs.',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Long term savings',
    text: 'A well-designed solar or hybrid system can reduce electricity bills over the long run, while delivering more predictable power for future needs.',
    accent: 'from-amber-500 to-orange-600',
  },
]

const actionSteps = [
  {
    step: '01',
    title: 'Assess your load and roof potential',
    text: 'The right renewable system begins with understanding your daily electricity use, roof/water-space availability, and expected seasonal demand.',
  },
  {
    step: '02',
    title: 'Design for maximum efficiency',
    text: 'Our engineers balance panel capacity, inverter selection, storage needs, and climate conditions to create the best system for each site.',
  },
  {
    step: '03',
    title: 'Install with quality and safety',
    text: 'Professional installation ensures safety, efficiency, and long-term performance while reducing avoidable maintenance issues.',
  },
  {
    step: '04',
    title: 'Monitor and improve',
    text: 'Smart monitoring helps track generation, catch underperformance early, and keep the system effective for years.',
  },
]

const focusAreas = [
  'Residential rooftop solar systems for households and apartments',
  'Commercial and industrial solar solutions for lowered operating costs',
  'Wind energy for suitable locations and complementary generation',
  'Hybrid systems that combine solar, storage, and backup reliability',
  'Smart energy planning for homes, farms, and institutions',
  'Support for cleaner, more resilient energy access in growing communities',
]

const principles = [
  'Protect the environment through responsible power generation',
  'Reduce dependence on fossil fuels and imported energy',
  'Improve resilience with local generation and storage',
  'Support energy affordability and long-term cost stability',
  'Build a greener future for our families, cities, and villages',
]

export default function SaveEarthPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(135deg,#f0fdf4_0%,#ecfeff_24%,#f8fafc_100%)]">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute right-10 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-lime-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-[0_12px_30px_-20px_rgba(16,185,129,0.9)] backdrop-blur-sm">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-emerald-700">
                  Save Earth Initiative
                </span>
              </div>

              <h1 className="mt-7 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
                Clean energy is the future.
                <span className="mt-3 block text-emerald-600">Protecting our planet starts at home.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                At AeroSun Energy, we believe every rooftop, every business, and every community can contribute to a greener tomorrow through solar, wind, and hybrid energy solutions designed for real-world impact.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_28px_-18px_rgba(5,150,105,0.8)] transition hover:bg-emerald-500"
                >
                  Start your green journey
                </Link>
                <Link
                  href="/know-eligibility"
                  className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Check eligibility
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-emerald-200/80 bg-white/80 p-5 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.8)] backdrop-blur-sm sm:p-6">
                <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_38%,#14532d_100%)] p-6 text-white shadow-[0_25px_50px_-20px_rgba(15,23,42,0.9)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200">
                        Climate impact
                      </div>
                      <div className="mt-2 text-4xl font-black tracking-[-0.06em]">- 0</div>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-right">
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-200">
                        Carbon goal
                      </div>
                      <div className="text-sm font-semibold">Cleaner future</div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {impactStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                        <div className="text-2xl font-black tracking-tight text-white">{stat.value}</div>
                        <div className="mt-2 text-xs leading-5 text-emerald-100">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Why it matters</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            The planet cannot wait for the perfect moment.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyItMatters.map((item) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_25px_60px_-28px_rgba(16,185,129,0.4)]"
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-lg font-black text-white shadow-lg`}>
                {item.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">What clean energy changes</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
                A greener system means a healthier life for everyone.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      ✓
                    </span>
                    <p className="text-sm leading-7 text-slate-200">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">How we help</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            A cleaner future is built in four practical steps.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {actionSteps.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)]">
              <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-emerald-200 bg-white/75 p-7 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.5)] backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Our principles</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">How Save Earth guides our work</h2>
              <ul className="mt-6 space-y-4">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm text-white">
                      ✓
                    </span>
                    <span className="text-slate-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-cyan-200 bg-slate-900 p-7 text-white shadow-[0_30px_80px_-40px_rgba(14,116,144,0.8)]">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Real impact</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">Why renewable energy is essential</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">Lower emissions</div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">Clean energy reduces pollution at the source and limits the damage caused by carbon-heavy generation.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">Resource efficiency</div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">Solar and wind depend on naturally available energy, helping preserve finite fossil resources and reduce waste.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">Community resilience</div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">Distributed generation makes homes and businesses more self-reliant and less dependent on unstable infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">AeroSun approach</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Smart renewable energy for homes and businesses
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: 'Solar rooftops',
              text: 'Turn unused roof space into a productive clean-energy asset for homes, shops, factories, and institutions.',
            },
            {
              title: 'Wind systems',
              text: 'Leverage suitable wind conditions to complement solar and increase renewable generation potential.',
            },
            {
              title: 'Hybrid solutions',
              text: 'Combine generation, storage, and energy planning to maximize reliability, savings, and sustainability.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.4)]">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600" />
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-emerald-600/20 via-slate-900 to-cyan-600/20 p-8 text-center shadow-[0_30px_80px_-40px_rgba(16,185,129,0.8)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Take action today</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              The cleanest energy is the energy you choose to generate.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Whether you are planning a rooftop solar project, exploring hybrid energy, or simply want to understand your options, AeroSun Energy is ready to help you move toward a cleaner, more resilient future.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-emerald-400"
              >
                Talk to our team
              </Link>
              <Link
                href="/solarenergy"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
              >
                Explore solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
