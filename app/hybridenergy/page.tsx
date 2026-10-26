import {
  HybridBenefitCard,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  OptimizedImage,
  Slider,
} from '../components/ui'

export const metadata = {
  title: 'Hybrid Solar & Wind Energy | AeroSun Energy',
  description:
    'Hybrid solar and wind energy systems combining PV, wind turbines, storage, and intelligent controls for reliable power generation for homes, businesses, farms, and microgrids.',
  keywords: [
    'hybrid solar and wind energy',
    'solar wind hybrid system',
    'hybrid renewable energy',
    'microgrid solar wind',
    'battery storage hybrid system',
    'commercial hybrid energy',
    'off-grid hybrid system',
    'renewable hybrid power',
    'AeroSun Energy hybrid',
    'wind solar hybrid system',
    'grid-connected hybrid solar',
    'farm hybrid power system',
    'resilient clean energy system',
    'renewable energy India',
  ],
  alternates: {
    canonical: '/hybridenergy',
  },
  openGraph: {
    title: 'Hybrid Solar & Wind Energy | AeroSun Energy',
    description:
      'Integrated solar and wind energy systems with storage for reliable power generation, smart controls, and energy resilience across India.',
    url: 'https://aerosunenergy.in/hybridenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const hybridTypes = [
  {
    title: 'Off-grid solar-wind hybrid',
    description:
      'A standalone power system using solar PV, wind generation, battery storage, and inverter controls to serve remote loads without utility supply.',
    highlights: ['Rural homes', 'Remote telecom', 'Agricultural facilities'],
    accent: 'emerald' as const,
  },
  {
    title: 'Grid-connected hybrid without battery',
    description:
      'Combines solar and wind with grid-connected power-conversion equipment, with the grid acting as a backup source when generation is not sufficient.',
    highlights: ['Commercial buildings', 'Factories', 'Large agricultural sites'],
    accent: 'sky' as const,
  },
  {
    title: 'Grid-connected hybrid with battery storage',
    description:
      'Adds storage for backup power, reduced outages, and better utilization of self-generated renewable electricity.',
    highlights: ['Critical loads', 'Hospitals', 'Commercial resilience'],
    accent: 'violet' as const,
  },
  {
    title: 'Hybrid microgrid',
    description:
      'A local network that coordinates multiple energy sources and loads, capable of operating connected or independently from the utility grid.',
    highlights: ['Villages', 'Campuses', 'Industrial sites'],
    accent: 'amber' as const,
  },
]

const integrationTypes = [
  'AC-coupled hybrid system',
  'DC-coupled hybrid system',
  'Solar + wind + battery architecture',
  'Solar + wind + diesel backup',
]

const productPriorities = [
  'Residential solar-wind hybrid systems',
  'Agricultural solar-wind hybrid systems',
  'Off-grid commercial hybrid systems',
  'Commercial grid-connected hybrid systems',
  'Hybrid microgrids',
]

const projectRows = [
  { label: 'Small residential hybrid', value: 'Solar PV + small wind turbine + battery', use: 'Homes in suitable wind locations' },
  { label: 'Agricultural hybrid', value: 'Solar PV + wind turbine + battery or pump controller', use: 'Farms and irrigation facilities' },
  { label: 'Remote off-grid hybrid', value: 'Solar PV + wind + battery', use: 'Remote homes, telecom and monitoring stations' },
  { label: 'Commercial hybrid', value: 'Solar PV + wind + optional battery', use: 'Shops, offices and commercial facilities' },
]

const keyBenefits = [
  'Improves renewable energy availability across variable weather',
  'Better resilience for operations and critical loads',
  'Supports energy independence and reduced utility dependence',
  'Helps optimize generation mixes across day and season',
]

export default function HybridEnergyPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
          AeroSun Energy • Hybrid Systems
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Types of Hybrid Solar + Wind Systems
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Hybrid solar-wind systems combine photovoltaic generation with wind turbines to create a more resilient renewable energy source for homes, farms, commercial facilities, and remote operations.
            </p>
          </div>
          <div className="grid w-full max-w-xl grid-cols-2 gap-3">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
              <div className="text-xl font-black text-sky-700">Grid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Connected</div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
              <div className="text-xl font-black text-emerald-700">Off-grid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Independent</div>
            </div>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 shadow-sm">
              <div className="text-xl font-black text-violet-700">Battery</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Storage</div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
              <div className="text-xl font-black text-amber-700">Microgrid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Local network</div>
            </div>
          </div>
        </div>
      </header>

      <Slider autoplay interval={5000} pauseOnHover>
        <div className="relative h-full flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider/slider-15.png"
              alt="Hybrid solar and wind energy system"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-emerald-900/80 via-sky-900/60 to-teal-900/45" />
          <div className="relative flex h-full min-h-90 items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl rounded-4xl border border-white/15 bg-slate-900/25 p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">Multi-source resilience</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Solar + wind for continuous generation</h2>
              <p className="mt-4 text-base leading-7 text-slate-100">
                Solar delivers daytime production, while wind helps fill gaps when weather and site conditions are favorable.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <OptimizedImage
              src="/images/slider/slider-17.png"
              alt="Microgrid and hybrid renewable power deployment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-violet-900/80 via-indigo-900/60 to-sky-900/40" />
          <div className="relative flex h-full min-h-90 items-end p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl rounded-4xl border border-white/15 bg-slate-900/30 p-6 shadow-2xl backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-violet-200">Smart controls</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Microgrid and demand management</h2>
              <p className="mt-4 text-base leading-7 text-slate-100">
                Coordinated generation, storage, and power electronics help deliver more reliable and efficient operation across multiple loads.
              </p>
            </div>
          </div>
        </div>
      </Slider>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>Hybrid categories</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Hybrid systems by grid connection and storage</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {hybridTypes.map((type) => (
            <HybridFeatureCard
              key={type.title}
              title={type.title}
              description={type.description}
              points={type.highlights}
              accent={type.accent}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-[0_32px_90px_-38px_rgba(15,23,42,1)] sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <HybridSectionEyebrow>Electrical integration</HybridSectionEyebrow>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">AC-coupled vs DC-coupled architectures</h3>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-200 sm:block">
              Design-driven
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {integrationTypes.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-emerald-300">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {keyBenefits.map((benefit) => (
              <HybridBenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <HybridInfoPanel title="Why hybrid works" content={keyBenefits} accent="emerald" />
            <HybridInfoPanel title="Feasibility checklist" content={['Wind resource assessment', 'Storage sizing', 'Load profile analysis', 'Grid approval and safety review']} accent="sky" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <HybridSectionEyebrow>Recommended launch</HybridSectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">AeroSun product priorities</h2>
              <div className="mt-6 space-y-3">
                {productPriorities.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {index + 1}
                    </div>
                    <div className="text-base font-medium text-slate-800">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.9)]">
              <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
                <OptimizedImage
                  src="/images/slider-2.png"
                  alt="Hybrid renewable energy deployment"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              </div>
              <div className="mt-5 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">Key insight</p>
                <h3 className="mt-2 text-xl font-bold text-white">Start with the simplest, most credible hybrid offers</h3>
                <p className="mt-2 text-base leading-7 text-slate-200">
                  Evaluate solar + battery hybrid, solar + wind + battery off-grid systems, and commercial grid-connected hybrid designs before entering larger projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
