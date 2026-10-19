import { OptimizedImage } from '@/app/components/ui'

export const metadata = {
  title: 'Renewable Energy Services | AeroSun Energy',
  description:
    'AeroSun Energy offers solar consultation, design, installation, wind energy services, hybrid renewable energy systems, maintenance, and technical support across India.',
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
  ],
  openGraph: {
    title: 'Renewable Energy Services | AeroSun Energy',
    description:
      'Solar, wind, and hybrid energy services covering consultation, design, engineering, installation, maintenance, and monitoring.',
    url: 'https://aerosunenergy.in/services',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
}

const servicePackages = [
  {
    title: 'Solar Energy Solutions',
    accent: 'from-amber-400 via-orange-500 to-yellow-500',
    description:
      'Rooftop solar, off-grid systems, hybrid solar with battery storage, solar water pumping, EV charging, and commercial/industrial installations.',
    points: ['Consultation & site assessment', 'System design & engineering', 'Installation & commissioning', 'Maintenance & performance support'],
  },
  {
    title: 'Wind Energy Solutions',
    accent: 'from-sky-500 via-blue-500 to-indigo-600',
    description:
      'Wind resource analysis, turbine selection, site engineering, supply support, installation coordination, and long-term technical maintenance.',
    points: ['Resource assessment', 'KAWT/VAWT evaluation', 'Installation support', 'Monitoring & service plans'],
  },
  {
    title: 'Hybrid Energy & Storage',
    accent: 'from-emerald-500 via-teal-500 to-cyan-500',
    description:
      'Integrated solar-wind-battery systems for homes, businesses, farms, and remote facilities requiring resilient power and backup capacity.',
    points: ['Hybrid feasibility', 'Battery integration', 'Microgrid planning', 'Performance monitoring'],
  },
  {
    title: 'Operations & AMC',
    accent: 'from-emerald-400 via-emerald-500 to-teal-500',
    description:
      'Managed operations, tiered Annual Maintenance Contracts (AMC), remote monitoring, and specialized services such as drone-based panel cleaning and preventive care.',
    points: ['Tiered AMC plans', 'Remote monitoring & alerts', 'Drone cleaning & soiling mitigation', 'Priority spare parts & support'],
  },
]

const serviceGrid = [
  {
    title: 'Energy Consultation',
    text: 'Load analysis, feasibility studies, solar and wind feasibility, ROI estimates, and practical customer recommendations.',
  },
  {
    title: 'System Design',
    text: 'Single-line diagrams, electrical layouts, inverter and battery selection, protection planning, and generation modeling.',
  },
  {
    title: 'Procurement',
    text: 'Supply of panels, inverters, batteries, mounting systems, controllers, cables, and monitoring equipment from suitable suppliers.',
  },
  {
    title: 'Installation',
    text: 'Project coordination, site preparation, mounting, wiring, testing, commissioning, and customer handover.',
  },
  {
    title: 'Maintenance',
    text: 'Preventive care, fault diagnosis, panel cleaning, inverter checks, battery health management, and periodic reports.',
  },
  {
    title: 'Monitoring & Upgrades',
    text: 'Remote monitoring, system upgrades, performance optimization, battery retrofits, and expansion planning.',
  },
  {
    title: 'AMC Plans',
    text: 'Tiered Annual Maintenance Contracts covering preventive maintenance, scheduled inspections, performance audits, and priority technical support.',
  },
  {
    title: 'Solar Cleaning (Drones)',
    text: 'Automated drone cleaning services to remove soiling at scale, reduce water usage, and recover generation losses safely and efficiently.',
  },
]

const packages = [
  {
    name: 'Home Energy Solutions',
    customers: 'Homeowners and residential communities',
    services: ['Rooftop solar', 'Hybrid battery backup', 'Annual maintenance'],
  },
  {
    name: 'Business Energy Solutions',
    customers: 'Shops, schools, offices, hotels and commercial units',
    services: ['Commercial solar', 'Energy cost audits', 'Monitoring & maintenance'],
  },
  {
    name: 'Industrial Renewable Solutions',
    customers: 'Factories, warehouses and industrial users',
    services: ['Rooftop & ground mount', 'Hybrid feasibility', 'Battery and energy management'],
  },
  {
    name: 'Agriculture & Rural Energy',
    customers: 'Farmers, rural facilities and remote sites',
    services: ['Solar pumping', 'Off-grid solar', 'Small wind and hybrids'],
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
              We provide end-to-end renewable energy services across solar, wind, and hybrid systems — from energy consultation and engineering to installation, maintenance, and ongoing technical support.
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
              src="/images/slider-1.png"
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
                Clean energy services built around performance and trust
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
                  <li>• Cleaner energy adoption</li>
                  <li>• Long-term system reliability</li>
                  <li>• Better operational continuity</li>
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
                <p className="mt-2 text-lg font-semibold text-slate-900">Solar consultation, rooftop installations, equipment supply, and maintenance</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Phase 2</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Agricultural solar pumps, commercial systems, off-grid systems, and small wind applications</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">Phase 3</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Industrial hybrid systems, large storage projects, microgrids, and next-stage product development</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <div className="relative h-72 overflow-hidden">
              <OptimizedImage
                src="/images/slider-2.png"
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
    </main>
  )
}