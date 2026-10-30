import { OptimizedImage } from '@/app/components/ui'

export const metadata = {
  title: 'Renewable Energy Services | AeroSun Energy',
  description:
    'AeroSun Energy offers renewable energy services including solar consultation, wind energy support, hybrid system design, installation, maintenance, and technical support for homes, businesses, farms, and industrial projects in India.',
  keywords: [
    'renewable energy services',
    'solar energy services India',
    'wind energy services',
    'hybrid energy systems',
    'solar installation company',
    'solar maintenance services',
    'solar system design',
    'AeroSun Energy services',
    'energy consultation',
    'solar and wind project services',
    'battery backup systems',
    'commercial solar service',
    'industrial solar service',
    'solar water pumping installation',
    'rooftop solar service',
    'solar EPC services',
    'renewable energy consulting',
    'solar monitoring services',
    'solar cleaning services',
    'solar maintenance contract',
    'energy system engineering',
    'AeroSun Energy support services',
    'hybrid power services',
    'solar panel installation service',
    'renewable power project support',
    'off-grid solar service',
    'solar rooftop engineering',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Renewable Energy Services | Solar, Wind & Hybrid Solutions',
    description:
      'Solar, wind, and hybrid energy services covering consultation, design, engineering, installation, maintenance, and monitoring.',
    url: 'https://aerosunenergy.in/services',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const servicePackages = [
  {
    title: 'Solar Energy Solutions',
    accent: 'from-amber-400 via-orange-500 to-yellow-500',
    description:
      'Rooftop solar, solar thermal, street lighting, solar fencing, solar pumpsets, off-grid systems, hybrid solar, and complete maintenance support for homes, businesses, farms, and institutions.',
    points: ['Site assessment & feasibility', 'System design & engineering', 'Installation & commissioning', 'Operations, monitoring & maintenance'],
  },
  {
    title: 'Wind Energy Solutions',
    accent: 'from-sky-500 via-blue-500 to-indigo-600',
    description:
      'Wind resource analysis, turbine selection, feasibility studies, rooftop and industrial wind applications, agricultural wind support, and remote/off-grid wind energy planning.',
    points: ['Wind resource assessment', 'VAWT and HAWT evaluation', 'System planning & installation support', 'Monitoring & life-cycle service plans'],
  },
  {
    title: 'Hybrid Energy & Storage',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    description:
      'Integrated solar-wind-battery systems, hybrid microgrids, and resilient energy solutions for homes, businesses, farms, and remote sites requiring reliable power.',
    points: ['Hybrid feasibility studies', 'Battery & storage integration', 'Microgrid planning', 'Performance monitoring & optimization'],
  },
  {
    title: 'Operations & AMC',
    accent: 'from-emerald-400 via-emerald-500 to-teal-500',
    description:
      'Managed operations, preventive maintenance, drone cleaning, remote monitoring, and customer support designed to maximize annual generation and system lifetime.',
    points: ['Tiered AMC plans', 'Remote monitoring & alerts', 'Drone cleaning & soiling mitigation', 'Priority spare parts & support'],
  },
]

const serviceGrid = [
  {
    title: 'Energy Consultation',
    text: 'Load analysis, solar and wind feasibility, ROI estimates, battery backup planning, and practical recommendations for homes, farms, and commercial sites.',
  },
  {
    title: 'System Design',
    text: 'Single-line diagrams, power calculations, inverter and battery selection, protection planning, and generation modelling for solar, wind, and hybrid systems.',
  },
  {
    title: 'Procurement',
    text: 'Supply of panels, inverters, batteries, mounting structures, wind equipment, controllers, and monitoring hardware from suitable technology partners.',
  },
  {
    title: 'Installation',
    text: 'Project coordination, structural fitting, wiring, testing, commissioning, safety checks, and customer handover for renewable energy systems.',
  },
  {
    title: 'Maintenance',
    text: 'Preventive care, fault diagnosis, panel and turbine checks, inverter service, battery monitoring, and scheduled performance reviews.',
  },
  {
    title: 'Monitoring & Upgrades',
    text: 'Remote system monitoring, optimization, energy audits, battery retrofits, and expansion planning to improve long-term reliability and output.',
  },
  {
    title: 'AMC Plans',
    text: 'Tiered Annual Maintenance Contracts covering recurring inspections, preventive care, performance audits, troubleshooting, and priority technical support.',
  },
  {
    title: 'Solar Cleaning (Drones)',
    text: 'Safe and efficient drone-based cleaning to remove dust and soiling, improve generation, and reduce water usage for large rooftops and utility-scale plants.',
  },
]

const packages = [
  {
    name: 'Home Energy Solutions',
    customers: 'Homeowners, residential societies and small commercial rooftops',
    services: ['Rooftop solar', 'Hybrid battery backup', 'Solar water heating', 'Annual maintenance'],
  },
  {
    name: 'Business Energy Solutions',
    customers: 'Shops, schools, offices, hotels and commercial establishments',
    services: ['Commercial solar', 'Energy cost audits', 'Wind and hybrid feasibility', 'Monitoring & maintenance'],
  },
  {
    name: 'Industrial Renewable Solutions',
    customers: 'Factories, warehouses and industrial users',
    services: ['Rooftop & ground-mount solar', 'Hybrid feasibility', 'Battery & energy management', 'Commercial wind integration'],
  },
  {
    name: 'Agriculture & Rural Energy',
    customers: 'Farmers, rural facilities and remote sites',
    services: ['Solar pumping', 'Off-grid solar', 'Small wind and hybrids', 'Microgrid and storage planning'],
  },
]

const solarPillars = [
  {
    title: 'Solar Rooftop Systems',
    description: 'On-grid power plants for homes and businesses. Designed for performance, net metering, and long-term energy savings.',
    bullets: ['On-grid, off-grid and hybrid configurations', 'Net metering with state DISCOM', 'PM Surya Ghar subsidy assistance', 'TATA Power Solar premium panels'],
    accent: 'from-emerald-500 via-green-500 to-lime-400',
  },
  {
    title: 'Solar Thermal — Water Heating Solutions',
    description: 'Efficient, eco-friendly hot water systems for homes, hotels, hospitals, hostels, commercial establishments and industries.',
    bullets: ['Available in capacities from 100 litres per day (LPD)', 'Pressurised and non-pressurised models', 'High-performance BIS-certified collectors', 'Cut electricity use and reduce geyser dependency'],
    accent: 'from-orange-400 via-amber-500 to-yellow-400',
  },
  {
    title: 'Solar Street Lights',
    description: 'All-in-one lighting powered entirely by sunlight for roads, campuses and public spaces.',
    bullets: ['Integrated all-in-one luminaires from 12W', 'Auto dusk-to-dawn operation', 'Lithium-ion storage with 5+ year life', 'Zero electricity bills'],
    accent: 'from-cyan-500 via-sky-500 to-blue-500',
  },
  {
    title: 'Solar Fencing',
    description: 'Solar-powered electrical protection for farms, estates, and rural properties.',
    bullets: ['Solar-charged energiser', 'Up to 10 km perimeter on a single charger', 'Audible alarm and battery backup', 'Crop and livestock protection'],
    accent: 'from-violet-500 via-purple-500 to-fuchsia-500',
  },
  {
    title: 'Solar Pumpsets',
    description: 'Diesel-free water pumping for agriculture, irrigation, and rural water access.',
    bullets: ['AC and DC pump configurations', 'MNRE-approved controllers', 'PM-KUSUM scheme assistance', '5-year manufacturer warranty'],
    accent: 'from-sky-500 via-teal-500 to-emerald-500',
  },
  {
    title: 'Operation & Maintenance (AMC)',
    description: 'Annual care to keep your plant generating at peak efficiency and reliability.',
    bullets: ['Quarterly preventive maintenance', 'Performance ratio monitoring', '24x7 priority support', 'Spare parts and inverter service'],
    accent: 'from-rose-500 via-red-500 to-orange-500',
  },
]

const systemTypes = [
  {
    type: 'On-Grid Solar',
    badge: 'Most Popular',
    description: 'Connected to the utility grid via net metering. Excess generation flows back to DISCOM and credits your bill.',
    benefits: ['Lowest upfront cost', 'Eligible for PM Surya Ghar subsidy', 'Net metering with state DISCOM', 'Fastest payback (4-6 years)'],
    bestFor: 'Homes & businesses with stable grid',
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  {
    type: 'Off-Grid Solar',
    badge: 'Independent',
    description: 'Standalone system with battery storage. No DISCOM connection — you produce, store and consume your own power.',
    benefits: ['Complete grid independence', 'Battery backup included', 'Ideal for remote sites', 'Diesel-genset replacement'],
    bestFor: 'Farms, telecom towers, remote homes',
    accent: 'border-sky-200 bg-sky-50 text-sky-800',
  },
  {
    type: 'Hybrid Solar',
    badge: 'Best of Both',
    description: 'Combines net metering with battery storage. You stay grid-connected and ride through outages seamlessly.',
    benefits: ['Power-cut protection', 'Net metering benefits', 'Critical loads always on', 'Smart energy management'],
    bestFor: 'Hotels, hospitals, premium homes',
    accent: 'border-violet-200 bg-violet-50 text-violet-800',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
          AeroSun Energy • Services
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Renewable Energy Services
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
              We provide end-to-end renewable energy services across solar, wind, and hybrid systems — from feasibility studies and engineering to installation, maintenance, monitoring, and long-term support.
            </p>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Core model</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">Assess • Design • Supply • Install • Support</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 shadow-[0_34px_100px_-40px_rgba(15,23,42,0.9)]">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider/slider-1.png"
              alt="Renewable energy systems and technical services"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/60 to-emerald-900/35" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">Service portfolio</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Clean energy solutions tailored to real site conditions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                AeroSun helps customers move from energy assessment to full project execution with tailored renewable solutions for residential, commercial, agricultural, and industrial needs.
              </p>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-200">Why it matters</p>
                <ul className="mt-4 space-y-3 text-base text-slate-100">
                  <li>• Reduced energy costs</li>
                  <li>• Cleaner power generation</li>
                  <li>• Better system reliability</li>
                  <li>• Improved energy resilience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">Service structure</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Three core renewable energy service divisions</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {servicePackages.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
              <div className={`h-2 bg-linear-to-r ${service.accent}`} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
                <ul className="mt-5 space-y-3 text-base text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Common capabilities</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Services applicable across solar, wind, and hybrid projects</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGrid.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_28px_-24px_rgba(15,23,42,0.4)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                {item.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] sm:p-8">
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-300">Recommended delivery model</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Recommended service packages</h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {packages.map((pkg) => (
              <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">{pkg.customers}</p>
                <ul className="mt-4 space-y-2 text-base text-slate-200">
                  {pkg.services.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">Implementation roadmap</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">How AeroSun should begin</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Phase 1</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Solar consultation, rooftop systems, equipment supply, and maintenance</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Phase 2</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Agricultural solar pumps, commercial systems, off-grid systems, and small wind applications</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">Phase 3</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Industrial hybrid systems, larger storage projects, microgrids, and next-stage deployment</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <div className="relative h-72 overflow-hidden">
              <OptimizedImage
                src="/images/slider/slider-2.png"
                alt="Energy service planning and renewable technology integration"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">Final recommendation</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Build three core divisions</h3>
              <ul className="mt-4 space-y-2 text-base text-slate-700">
                <li>• Solar Energy Solutions</li>
                <li>• Wind Energy Solutions</li>
                <li>• Hybrid Energy & Storage Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">Complete solar solutions</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Complete renewable energy solutions, one trusted partner.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Whether you need a 1 kW home rooftop or a 100 kW industrial plant — we design, supply, install and maintain end-to-end energy systems for solar, wind, and hybrid applications.
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-[0_24px_60px_-36px_rgba(16,185,129,0.35)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">Our Services</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Six pillars of clean energy</h3>
            </div>
            <div className="hidden rounded-full border border-emerald-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:block">
              End-to-end support
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {solarPillars.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_14px_32px_-24px_rgba(15,23,42,0.22)]">
                <div className={`h-2 bg-linear-to-r ${item.accent}`} />
                <div className="p-5">
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-5 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                    Learn more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">System Types</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">On-grid, Off-grid or Hybrid?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The right configuration depends on your power-cut frequency, budget and self-consumption goals.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {systemTypes.map((system) => (
            <div key={system.type} className={`rounded-[1.8rem] border p-5 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.35)] ${system.accent}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold">{system.type}</h3>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700">{system.badge}</span>
              </div>

              <p className="mt-4 text-sm leading-7">{system.description}</p>

              <ul className="mt-4 space-y-2 text-sm leading-6">
                {system.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl bg-white/75 p-3 text-sm font-semibold text-slate-700">
                <span className="font-bold">Best for:</span> {system.bestFor}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}