import { OptimizedImage, Slider } from '../components/ui'

export const metadata = {
  title: 'Solar Energy Systems | AeroSun Energy',
  description:
    'Solar photovoltaic systems, rooftop solar, off-grid solar, hybrid solar, solar water pumping, and commercial solar solutions for homes, farms, and businesses in India.',
  keywords: [
    'solar energy systems India',
    'rooftop solar solution',
    'off-grid solar system',
    'hybrid solar system',
    'commercial solar installation',
    'solar water pumping system',
    'solar PV system',
    'AeroSun Energy solar',
    'solar panel installation India',
    'solar power for homes',
    'solar for businesses',
    'solar energy for farms',
    'grid-connected solar',
    'solar battery backup',
    'solar EV charging',
    'solar street lighting',
    'renewable energy India',
  ],
  openGraph: {
    title: 'Solar Energy Systems | AeroSun Energy',
    description:
      'Explore rooftop solar, hybrid solar, off-grid solar, and commercial solar solutions designed for Indian homes, businesses, and agricultural applications.',
    url: 'https://aerosunenergy.in/solarenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
}

const systemTypes = [
  {
    title: 'On-grid solar systems',
    description:
      'Connected to the local electricity grid, allowing daytime solar generation to offset consumption and export surplus power where permitted.',
    benefits: ['Grid-tied operation', 'Lower electricity bills', 'Simple utility integration'],
  },
  {
    title: 'Off-grid solar systems',
    description:
      'Standalone power for remote homes, farms, telecom sites and facilities with unreliable grid access, typically with battery backup.',
    benefits: ['Independent supply', 'Battery storage', 'Reliable rural power'],
  },
  {
    title: 'Hybrid solar systems',
    description:
      'Solar plus battery storage and often grid connection or backup generation, giving greater resilience and better load management.',
    benefits: ['Backup during outages', 'Self-consumption', 'Energy flexibility'],
  },
]

const locationTypes = [
  'Rooftop solar systems',
  'Ground-mounted solar systems',
  'Floating solar systems',
  'Building-integrated PV systems',
]

const applicationTypes = [
  'Solar water pumping systems',
  'Solar street lighting',
  'Solar home lighting',
  'Solar EV charging',
  'Industrial and agricultural solar systems',
  'Solar thermal systems',
]

const comparisonRows = [
  { type: 'On-grid solar PV', battery: 'Usually no', grid: 'Yes', use: 'Homes, shops, offices' },
  { type: 'Off-grid solar PV', battery: 'Usually yes', grid: 'No', use: 'Remote homes, farms' },
  { type: 'Hybrid solar PV', battery: 'Usually included', grid: 'Often yes', use: 'Homes and businesses needing backup' },
  { type: 'Rooftop solar', battery: 'Depends', grid: 'Either', use: 'Residential and commercial buildings' },
  { type: 'Ground-mounted solar', battery: 'Depends', grid: 'Either', use: 'Farms, industries, solar farms' },
  { type: 'Floating solar', battery: 'Depends', grid: 'Either', use: 'Reservoirs, water bodies' },
]

export default function SolarEnergyPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-700">
          AeroSun Energy • Solar Systems
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Types of Solar Energy Systems
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Solar energy systems are designed around how they generate power, how they connect to the grid, where they are installed, and which loads they are meant to serve.
            </p>
          </div>
          <div className="grid w-full max-w-xl grid-cols-2 gap-3">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-sm">
              <div className="text-xl font-black text-blue-700">On-grid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Grid tied</div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
              <div className="text-xl font-black text-emerald-700">Off-grid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Standalone</div>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 shadow-sm">
              <div className="text-xl font-black text-violet-700">Hybrid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Solar + storage</div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
              <div className="text-xl font-black text-amber-700">Thermal</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Heat use</div>
            </div>
          </div>
        </div>
      </header>

      <Slider autoplay interval={5000} pauseOnHover>
        <div className="relative h-full flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider-1.png"
              alt="Rooftop solar panel installation"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-amber-900/80 via-orange-700/60 to-sky-900/35" />
          <div className="relative flex h-full min-h-90 items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl rounded-4xl border border-white/15 bg-slate-900/25 p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200">Rooftop systems</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Residential and commercial PV</h2>
              <p className="mt-4 text-base leading-7 text-slate-100">
                Smart solar installations that reduce power bills, improve energy independence, and help businesses meet sustainability targets.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider-2.png"
              alt="Ground-mounted solar installation"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-sky-950/70 via-violet-900/55 to-emerald-900/40" />
          <div className="relative flex h-full min-h-90 items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl rounded-4xl border border-white/15 bg-slate-900/30 p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">Large deployment</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ground mount & industrial scale</h2>
              <p className="mt-4 text-base leading-7 text-slate-100">
                Utility-ready arrays and project-grade systems for farms, factories, campuses, and larger commercial energy needs.
              </p>
            </div>
          </div>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-700">Core classification</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Solar photovoltaic systems</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {systemTypes.map((type) => (
            <article key={type.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.28)]">
              <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{type.description}</p>
              <ul className="mt-5 space-y-2 text-base text-slate-700">
                {type.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_32px_90px_-38px_rgba(15,23,42,1)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-300">Installations</p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Solar systems by location</h3>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-200 sm:block">
              Site-specific
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {locationTypes.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-amber-300">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-violet-700">Applications</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Solar systems based on application</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {applicationTypes.map((item, index) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_24px_-24px_rgba(15,23,42,0.5)]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                {index + 1}
              </div>
              <p className="text-lg font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700">Comparison</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Main solar system types</h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr]">
                <div className="px-4 py-3">System type</div>
                <div className="px-4 py-3">Battery</div>
                <div className="px-4 py-3">Grid</div>
                <div className="px-4 py-3">Typical use</div>
              </div>

              <div className="divide-y divide-slate-200">
                {comparisonRows.map((row) => (
                  <div key={row.type} className="grid gap-3 px-4 py-4 text-sm text-slate-700 md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr] md:gap-0">
                    <div className="font-bold text-slate-900">{row.type}</div>
                    <div>{row.battery}</div>
                    <div>{row.grid}</div>
                    <div>{row.use}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <OptimizedImage
                src="/images/slider-2.png"
                alt="Solar energy field and rooftop systems"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
            </div>
            <div className="mt-5 rounded-3xl border border-amber-400/20 bg-amber-500/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-200">Recommended focus</p>
              <h3 className="mt-2 text-xl font-bold text-white">Rooftop, hybrid, and solar pumping</h3>
              <p className="mt-2 text-base leading-7 text-slate-200">
                These categories offer clear customer groups and better opportunities to build installation and maintenance capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-slate-100 via-white to-amber-50 p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.3)] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-700">Strategic view</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Which solar systems should AeroSun Energy consider?</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700">
              Start by evaluating rooftop solar, hybrid systems, and agricultural solar water pumping. These categories give actionable customer segments and manageable project scopes.
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700">
              Solar EV charging, off-grid systems, and solar street lighting also have strong use cases, especially in public infrastructure and rural applications.
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-base leading-7 text-emerald-900">
            <strong className="font-bold">Recommendation:</strong> focus first on rooftop solar, hybrid systems, and irrigation-related solar pumping solutions.
          </div>
        </div>
      </section>
    </main>
  )
}
