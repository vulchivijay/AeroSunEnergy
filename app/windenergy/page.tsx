import {
  OptimizedImage,
  Slider,
  WindBenefitCard,
  WindCapacityTable,
  WindComparisonTable,
  WindFeatureCard,
  WindInfoPanel,
  WindSectionEyebrow,
} from '../components/ui'

export const metadata = {
  title: 'Wind Energy Systems | AeroSun Energy',
  description:
    'Wind energy systems including horizontal-axis turbines, vertical-axis turbines, distributed wind, off-grid wind, and solar-wind hybrid systems for farms, commercial sites, and rural applications.',
  keywords: [
    'wind energy systems',
    'horizontal axis wind turbine',
    'vertical axis wind turbine',
    'small wind turbine India',
    'wind turbine for farm',
    'solar wind hybrid system',
    'distributed wind energy',
    'commercial wind turbine',
    'offshore wind energy',
    'onshore wind energy',
    'renewable wind power',
    'AeroSun Energy wind',
    'wind power solutions',
    'micro wind turbine',
    'wind battery storage',
    'wind energy for businesses',
    'wind turbines for agriculture',
    'renewable energy India',
  ],
  alternates: {
    canonical: '/windenergy',
  },
  openGraph: {
    title: 'Wind Energy Systems | AeroSun Energy',
    description:
      'Explore small wind turbines, large commercial systems, distributed wind, and hybrid solar-wind solutions for sustainable power generation.',
    url: 'https://aerosunenergy.in/windenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const turbineTypes = [
  {
    title: 'Horizontal-Axis Wind Turbines',
    badge: 'HAWT',
    description:
      'The most common design, with blades rotating like a propeller on a horizontal shaft. Ideal for utility-scale and larger commercial installations.',
    highlights: ['Three-blade design', 'Directional alignment', 'High efficiency'],
    accent: 'sky' as const,
  },
  {
    title: 'Vertical-Axis Wind Turbines',
    badge: 'VAWT',
    description:
      'Rotors are vertical, allowing wind capture from multiple directions. Common designs include Darrieus and Savonius turbines.',
    highlights: ['Low yaw requirement', 'Suitable for niche sites', 'Needs careful feasibility review'],
    accent: 'emerald' as const,
  },
]

const deploymentTypes = [
  'Onshore wind farms',
  'Offshore fixed-bottom and floating systems',
  'Distributed wind for homes, farms, and local microgrids',
]

const systemConfigs = [
  { system: 'Grid-connected system', detail: 'Supplies electricity to a building or network through appropriate conversion equipment.', use: 'Commercial buildings, factories and wind farms' },
  { system: 'Off-grid system', detail: 'Operates independently of the utility grid, usually with batteries or another backup source.', use: 'Remote homes, farms, telecom sites and isolated facilities' },
  { system: 'Wind–solar hybrid', detail: 'Combines wind turbines and solar PV panels, often with shared storage and power electronics.', use: 'Homes, farms, businesses and microgrids' },
  { system: 'Wind–battery', detail: 'Stores excess wind-generated electricity for later use.', use: 'Sites needing energy outside periods of wind generation' },
]

const capacityBands = [
  { label: 'Micro', value: 'Below 1 kW', use: 'Sensors, charging, niche low-power loads' },
  { label: 'Small', value: '1–10 kW', use: 'Homes, farms, off-grid applications' },
  { label: 'Medium', value: '10–100 kW', use: 'Agricultural and commercial facilities' },
  { label: 'Large commercial', value: '100 kW–1 MW', use: 'Industrial and distributed generation projects' },
  { label: 'Utility-scale', value: '1 MW and above', use: 'Wind farms and grid-scale generation' },
]

const keyBenefits = [
  'Generates clean electricity from a renewable natural resource',
  'Helps reduce dependence on grid power and rising tariffs',
  'Works especially well when paired with solar and batteries',
  'Can support agricultural, commercial, and rural projects',
]

const strategicPoints = [
  'Wind resource evaluation is essential before installation',
  'Hybrid configurations increase system resilience',
  'Project design depends on site height, obstacles, and load profile',
]

type WindSlide = {
  badge: string
  title: string
  description: string
  image: string
  tags: string[]
  badgeClass: string
  chipClass: string
  panelClass: string
}

const windSlides: WindSlide[] = [
  {
    badge: 'Rooftop concept',
    title: 'Rooftop VAWTs',
    description:
      'Vertical-axis turbines designed for noise-sensitive and space-constrained urban rooftops where site conditions demand a more adaptive approach.',
    image: '/images/slider/slider-7.png',
    tags: ['Low-noise', 'Adaptive'],
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Commercial generation',
    title: 'Open land & commercial systems',
    description:
      'Higher-capacity wind facilities and hybrid-ready solutions for farms, warehouses, factories, and industrial campuses.',
    image: '/images/slider/slider-8.png',
    tags: ['High capacity', 'Hybrid-ready'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Distributed power',
    title: 'Wind for farms & local loads',
    description:
      'Small and medium wind systems that support irrigation, farm buildings, and rural sites where a steady renewable energy source adds direct value.',
    image: '/images/slider/slider-9.png',
    tags: ['Rural-ready', 'Load support'],
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Site feasibility',
    title: 'Resource assessment & planning',
    description:
      'We analyse wind availability, turbulence, site height, and surrounding obstructions before recommending the right turbine strategy.',
    image: '/images/slider/slider-10.png',
    tags: ['Feasibility', 'Site study'],
    badgeClass: 'text-cyan-100',
    chipClass: 'text-cyan-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Off-grid reliability',
    title: 'Remote homes & telecom towers',
    description:
      'Wind systems paired with storage bring dependable clean energy to isolated communities, telecom networks, and remote infrastructure.',
    image: '/images/slider/slider-11.png',
    tags: ['Remote power', 'Storage-ready'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Industrial scale',
    title: 'Utility & industrial wind projects',
    description:
      'Large-capacity wind systems help factories, campuses, and industrial parks reduce grid dependence through resilient generation.',
    image: '/images/slider/slider-12.png',
    tags: ['Industrial', 'Grid support'],
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
]

function WindHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <Slider autoplay interval={5200} pauseOnHover>
      {windSlides.map((slide) => (
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

export default function WindEnergyPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="mx-auto max-w-7xl px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
          AeroSun Energy • Wind Systems
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Wind Energy Systems
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Wind energy converts the kinetic energy of moving air into electricity or mechanical power. For AeroSun Energy, this includes small turbines, distributed generation, commercial systems, and hybrid renewable solutions.
            </p>
          </div>
          <div className="grid w-full max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
              <div className="text-xl font-black text-sky-700">HAWT</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Horizontal</div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
              <div className="text-xl font-black text-emerald-700">VAWT</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Vertical</div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
              <div className="text-xl font-black text-amber-700">Hybrid</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Solar + Wind</div>
            </div>
          </div>
        </div>
      </header>

      <WindHeroSlider />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>Overview</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Types of wind energy systems</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {turbineTypes.map((type) => (
            <WindFeatureCard
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
              <WindSectionEyebrow>Classification</WindSectionEyebrow>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Design and installation choices</h3>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-200 sm:block">
              Site-sensitive
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {deploymentTypes.map((item, index) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
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
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>Electrical configuration</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Matching the system to the application</h2>
        </div>

        <WindComparisonTable rows={systemConfigs} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {keyBenefits.map((benefit) => (
              <WindBenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <WindInfoPanel title="Key benefits" content={keyBenefits} accent="sky" />
            <WindInfoPanel title="Feasibility checks" content={strategicPoints} accent="emerald" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>Capacity ranges</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Power capacity categories</h2>
        </div>

        <WindCapacityTable rows={capacityBands} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <WindSectionEyebrow>Strategic recommendation</WindSectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Which wind systems should AeroSun Energy focus on?</h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-slate-700">
                <p>
                  For AeroSun Energy Private Limited, the most promising early opportunities are small wind turbines, solar–wind hybrid systems, and medium-scale commercial wind applications for agricultural and industrial sites.
                </p>
                <p>
                  A hybrid design is especially attractive because it can combine wind generation with solar PV, battery storage, and smart controls. This provides more resilient supply and helps customers diversify their renewable energy mix.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">AeroSun view</p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl bg-white p-3">1. Small wind turbines, 1–10 kW</div>
                <div className="rounded-2xl bg-white p-3">2. Solar–wind hybrid systems</div>
                <div className="rounded-2xl bg-white p-3">3. Commercial systems, 10–100 kW</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
