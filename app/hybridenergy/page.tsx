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

type HybridSlide = {
  badge: string
  title: string
  description: string
  image: string
  tags: string[]
  badgeClass: string
  chipClass: string
  panelClass: string
}

const hybridSlides: HybridSlide[] = [
  {
    badge: 'Multi-source resilience',
    title: 'Solar + wind for continuous generation',
    description:
      'Solar delivers daytime production, while wind helps fill gaps when weather and site conditions are favorable.',
    image: '/images/slider/slider-13.png',
    tags: ['Day + night', 'Load balancing'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Smart controls',
    title: 'Microgrid and demand management',
    description:
      'Coordinated generation, storage, and power electronics help deliver more reliable and efficient operation across multiple loads.',
    image: '/images/slider/slider-14.png',
    tags: ['Smart dispatch', 'Battery-first'],
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Rural resilience',
    title: 'Off-grid hybrid for remote projects',
    description:
      'Standalone solar-wind systems with storage provide dependable power for remote homes, farms, telecom stations, and industrial outposts.',
    image: '/images/slider/slider-15.png',
    tags: ['Off-grid', 'Remote-ready'],
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Commercial backup',
    title: 'Hybrid power for businesses',
    description:
      'Commercial sites can reduce outages and maximize self-generation by combining solar, wind, and storage in a single system.',
    image: '/images/slider/slider-16.png',
    tags: ['Business-ready', 'Resilient'],
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Agricultural power',
    title: 'Farm and irrigation hybrid systems',
    description:
      'Solar-wind hybrid systems help farms meet irrigation, pumping, and processing demands with cleaner and more stable energy.',
    image: '/images/slider/slider-17.png',
    tags: ['Agri-power', 'Irrigation'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Microgrid control',
    title: 'Campus and community hybrid networks',
    description:
      'Multi-source hybrid networks coordinate renewable generation, storage, and loads for resilient local energy independence.',
    image: '/images/slider/slider-18.png',
    tags: ['Microgrid', 'Community'],
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
]

function HybridHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <Slider autoplay interval={5000} pauseOnHover>
      {hybridSlides.map((slide) => (
        <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
              style={{ filter: 'saturate(1.05) brightness(0.72)' }}
            />
          </div>
          <div className={`${slideOverlay} absolute inset-0`} />
          <div className={slideClass}>
            <span
              className={`mb-4 inline-flex rounded-full border border-white/15 bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] ${slide.badgeClass}`}
            >
              {slide.badge}
            </span>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.2rem]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {slide.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border border-white/15 bg-black/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${slide.chipClass}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

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

      <HybridHeroSlider />

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
                  src="/images/slider/slider-2.png"
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
