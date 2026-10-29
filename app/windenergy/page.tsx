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
    badge: 'Urban rooftop',
    title: 'Vertical Axis Turbine for Rooftops',
    description:
      'Compact rooftop wind systems are ideal for urban and semi-urban spaces where low-noise output, compact footprint, and adaptive installation matter most.',
    image: '/images/slider/slider-7.png',
    tags: ['Low-noise', 'Rooftop'],
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Commercial wind',
    title: 'Large Wind Systems for Industry',
    description:
      'High-capacity turbines support factories, warehouses, and business campuses by reducing dependency on grid supply and improving renewable generation at scale.',
    image: '/images/slider/slider-8.png',
    tags: ['Industrial', 'High output'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Farm power',
    title: 'Wind for Agriculture & Irrigation',
    description:
      'Farm-based wind systems help power pumping, processing, and site loads while lowering energy costs in rural and peri-urban locations.',
    image: '/images/slider/slider-9.png',
    tags: ['Agri-ready', 'Load support'],
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Feasibility study',
    title: 'Wind Resource Assessment & Planning',
    description:
      'Accurate site analysis covers wind speed, turbulence, mast height, and obstruction zones before choosing the optimal turbine configuration.',
    image: '/images/slider/slider-10.png',
    tags: ['Site study', 'Feasibility'],
    badgeClass: 'text-cyan-100',
    chipClass: 'text-cyan-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Remote power',
    title: 'Off-grid Wind for Remote Sites',
    description:
      'Standalone wind systems deliver dependable clean electricity to telecom towers, rural homes, and remote infrastructure without relying on the utility grid.',
    image: '/images/slider/slider-11.png',
    tags: ['Off-grid', 'Storage-ready'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Utility scale',
    title: 'Wind Farms & Grid Integration',
    description:
      'Large-scale wind installations deliver resilient renewable generation for utilities, industrial parks, and grid-connected energy networks.',
    image: '/images/slider/slider-12.png',
    tags: ['Grid support', 'Utility'],
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

const serviceSections = [
  {
    title: 'Vertical Axis Turbine for Rooftops',
    heading: 'Compact wind energy for suitable rooftops and urban pilot projects',
    overview:
      'Urban buildings, commercial properties, institutional facilities, and industrial rooftops may offer opportunities to explore small-scale wind energy generation. Vertical-axis wind turbines are one technology that can be considered where the design, structure, and operating characteristics suit the site. AeroSun Energy evaluates rooftop feasibility based on wind resource, structural capacity, building layout, electrical requirements, and intended application.',
    applications: [
      { title: 'Residential buildings', description: 'Supplementary renewable electricity for homes with suitable rooftop wind exposure and structurally appropriate installations.' },
      { title: 'Commercial buildings', description: 'Pilot renewable systems for offices, business parks, and commercial properties that want monitored energy generation.' },
      { title: 'Educational institutions', description: 'Demonstration and research projects for engineering labs and renewable-energy learning environments.' },
    ],
    benefits: [
      'Compact design options for suitable rooftops',
      'Wind-direction flexibility without active yaw for many VAWT applications',
      'Technology diversity for demonstration and pilot projects',
      'Potential supplementary generation where the wind resource is adequate',
    ],
    calculation: {
      label: 'Illustrative rooftop example',
      formula: '3 kW × 8,760 hr × 0.20 = 5,256 kWh/year',
      result: 'Estimated annual generation: 5,256 kWh',
      note: 'This is an illustrative estimate and not a guaranteed output. Actual generation depends on measured wind profiles, turbulence, structural conditions, and electrical losses.',
    },
    faqs: [
      { question: 'Is rooftop wind suitable for every building?', answer: 'No. Rooftop installations require suitable wind exposure, a stable structure, and realistic expectations for annual generation.' },
      { question: 'What is the main risk?', answer: 'Turbulence from nearby buildings, parapets, and equipment can reduce output and increase vibration or fatigue.' },
    ],
  },
  {
    title: 'Large Wind Systems for Industry',
    heading: 'Wind power solutions for industrial and commercial electricity demand',
    overview:
      'Industrial facilities can consume significant electricity for manufacturing, refrigeration, pumping, ventilation, and processing. For suitable sites, larger wind energy systems can contribute to an industrial facility’s electricity supply and help diversify its energy sources. An industrial wind project may include one larger turbine or multiple turbines, depending on the available land, wind resource, grid capacity, and operational objectives.',
    applications: [
      { title: 'Manufacturing plants', description: 'Wind energy can offset electricity used by machinery, production lines, ventilation systems, and process operations.' },
      { title: 'Warehouses and logistics', description: 'Large commercial sites can reduce dependence on grid supply and improve renewable generation at scale.' },
      { title: 'Food processing and cold storage', description: 'Wind may support refrigeration and processing loads when carefully coordinated with demand profiles.' },
    ],
    benefits: [
      'Diversifies the energy mix for large electricity users',
      'Potential reduction in purchased electricity',
      'Supports emissions-reduction goals',
      'Can align with solar, battery, and demand management strategies',
    ],
    calculation: {
      label: 'Illustrative industrial turbine',
      formula: '500 kW × 8,760 hr × 0.30 = 1,314,000 kWh/year',
      result: 'Estimated annual generation: 1,314 MWh',
      note: 'This is a gross generation estimate before losses, capital costs, maintenance, financing, and site-specific performance factors.',
    },
    faqs: [
      { question: 'Does a larger turbine always mean better economics?', answer: 'Not necessarily. Wind resource, demand profile, grid interface, and operational constraints play a more decisive role than the nameplate rating alone.' },
      { question: 'Can industrial wind integrate with solar?', answer: 'Yes. A wind-solar-battery combination can increase annual energy availability and improve resilience for many sites.' },
    ],
  },
  {
    title: 'Wind for Agriculture & Irrigation',
    heading: 'Renewable wind energy for farming, irrigation, and rural operations',
    overview:
      'Agricultural operations depend on electricity for irrigation, pumping, farm processing, cold storage, and general site loads. Wind energy can potentially support these requirements at farms with adequate wind resources and suitable locations for turbine installation. A farm wind system may supply compatible electrical loads, contribute to an agricultural microgrid, or work alongside solar PV and battery systems.',
    applications: [
      { title: 'Irrigation pumping', description: 'Wind-generated electricity may help supply water pumping loads during suitable periods of operation.' },
      { title: 'Water transfer and storage', description: 'Wind generation can support reservoir and tank pumping where water demand and renewable generation are coordinated.' },
      { title: 'Livestock and crop processing', description: 'Wind can offset pumping, ventilation, refrigeration, and processing loads depending on the site profile.' },
    ],
    benefits: [
      'Potential reduction in purchased power for farm loads',
      'Wind adds source diversity alongside solar generation',
      'Can support water management and irrigation planning',
      'Useful for rural and remote agricultural operations',
    ],
    calculation: {
      label: 'Illustrative farm irrigation calculation',
      formula: '10 kW × 8,760 hr × 0.25 = 21,900 kWh/year',
      result: 'Estimated annual generation: 21,900 kWh',
      note: 'This estimate assumes a 25% capacity factor and does not account for pump scheduling, storage, or low-wind periods.',
    },
    faqs: [
      { question: 'Can wind power an irrigation pump directly?', answer: 'Potentially, but the system must consider pump starting current, water demand, operating schedule, and low-wind periods.' },
      { question: 'Is wind better than solar for farms?', answer: 'Not always. For many farms, a hybrid solar-wind setup provides the best overall match to seasonal energy demand and site conditions.' },
    ],
  },
  {
    title: 'Wind Resource Assessment & Planning',
    heading: 'The first step before investing in any wind project',
    overview:
      'A wind turbine’s rated capacity does not determine actual generation at a location. Annual energy output depends on wind speed, terrain, hub height, turbulence, obstacle shading, and operating conditions. Wind resource assessment is therefore a critical stage before selecting equipment or committing capital. AeroSun Energy begins with the intended application, the site conditions, and the relationship between expected energy generation and electricity demand.',
    applications: [
      { title: 'Project screening', description: 'Review terrain, obstacles, exposure, and feasibility before making a purchase decision.' },
      { title: 'Measurement planning', description: 'Determine whether the site needs local measurement or whether existing wind data is adequate.' },
      { title: 'Feasibility and economics', description: 'Estimate annual energy yield and compare turbine options before investment or development.' },
    ],
    benefits: [
      'Avoids poor turbine selection based on nameplate capacity alone',
      'Improves annual energy estimates and project confidence',
      'Helps identify installation and regulatory constraints early',
      'Supports better planning and financial decisions',
    ],
    calculation: {
      label: 'Illustrative assessment calculation',
      formula: '100 kW × 8,760 hr × 0.30 = 262,800 kWh/year',
      result: 'Estimated annual generation: 262.8 MWh',
      note: 'The capacity factor is an example assumption for screening and should be replaced with site-specific measured or modelled data in real projects.',
    },
    faqs: [
      { question: 'Why is assessment so important?', answer: 'Because available wind power rises roughly with the cube of wind speed, making small changes in local wind conditions highly significant.' },
      { question: 'Can I rely on online maps alone?', answer: 'Maps help with preliminary screening, but site-level measurements or more detailed analysis are often required before an investment decision.' },
    ],
  },
  {
    title: 'Off-grid Wind for Remote Sites',
    heading: 'Standalone wind power for locations beyond reliable grid access',
    overview:
      'Remote facilities may need electricity where grid access is unavailable, unreliable, or expensive to extend. Examples include telecom sites, isolated agricultural facilities, environmental research stations, and other remote infrastructure. A wind system can contribute where the resource is sufficient, but because supply varies with weather, an off-grid design must be coordinated with storage, backup sources, and load expectations.',
    applications: [
      { title: 'Telecom infrastructure', description: 'Wind may support the energy needs of remote communications infrastructure where grid extension is not feasible.' },
      { title: 'Environmental monitoring', description: 'Small renewable systems can power sensors, data loggers, and communications in isolated locations.' },
      { title: 'Rural and research installations', description: 'Wind can support remote buildings, sites, and infrastructure when paired with batteries or a hybrid arrangement.' },
    ],
    benefits: [
      'Reduces dependence on grid expansion or diesel generation',
      'Useful in remote and critical infrastructure settings',
      'Can be paired with batteries and solar PV for reliability',
      'Improves resilience when the site has a consistent wind resource',
    ],
    calculation: {
      label: 'Illustrative remote site demand',
      formula: '1 kW × 24 hr × 365 = 8,760 kWh/year',
      result: 'Annual demand: 8,760 kWh',
      note: 'Annual generation alone is not enough to guarantee reliability. Battery sizing, low-wind periods, and autonomy requirements must still be designed into the project.',
    },
    faqs: [
      { question: 'Do off-grid wind systems need batteries?', answer: 'Often yes. Batteries or a hybrid backup source are usually required to cover low-wind periods and maintain continuity of supply.' },
      { question: 'Is wind alone enough?', answer: 'Not always. Many remote applications perform better with a solar-wind-battery hybrid system tailored to the site profile.' },
    ],
  },
  {
    title: 'Wind Farms & Grid Integration',
    heading: 'Grid-connected wind generation for large energy portfolios',
    overview:
      'Wind farms generate electricity from multiple turbines and deliver it through a collection network, electrical substations, and a grid interconnection. Successful integration requires more than installing turbines: it involves wind-resource assessment, turbine selection, electrical studies, protection, forecasting, network compliance, and coordination with the utility or system operator. AeroSun Energy can discuss wind project concepts and the planning required to connect renewable generation with electrical infrastructure.',
    applications: [
      { title: 'Utility-scale generation', description: 'Wind farms can contribute to the broader power network and support renewable-energy supply targets.' },
      { title: 'Industrial and commercial procurement', description: 'Wind may form part of a larger renewable-energy portfolio for large electricity users.' },
      { title: 'Hybrid renewable projects', description: 'Wind can be combined with solar PV and storage for diversified generation and improved operational flexibility.' },
    ],
    benefits: [
      'Large-scale renewable generation where resource conditions are suitable',
      'Diversifies energy supply and reduces dependence on a single source',
      'Supports emissions-reduction and sustainability goals',
      'Can integrate with storage and broader renewable strategies',
    ],
    calculation: {
      label: 'Illustrative 20 MW wind farm',
      formula: '20 MW × 8,760 hr × 0.35 = 61,320 MWh/year',
      result: 'Estimated annual generation: 61.32 GWh',
      note: 'This is a simplified gross energy estimate and excludes curtailment, transmission losses, financing, and operating expenses.',
    },
    faqs: [
      { question: 'What is the biggest challenge?', answer: 'Grid integration, electrical studies, and coordination with utility requirements are often the most important factors after resource assessment.' },
      { question: 'Can wind farms combine with solar?', answer: 'Yes. Hybrid wind-solar-storage systems can improve energy management, but they still require proper system design and grid study.' },
    ],
  },
]

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

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <WindSectionEyebrow>Service Sections</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Exploring wind energy applications</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {serviceSections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">{section.title}</h3>
              <p className="mt-2 text-base leading-7 text-slate-700">{section.heading}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{section.overview}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Typical applications</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {section.applications.map((app) => (
                      <li key={app.title} className="flex gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">{app.title}</div>
                          <div className="text-sm leading-6 text-slate-600">{app.description}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Key benefits</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {section.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-sm leading-6 text-slate-600">{benefit}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Illustrative calculation</div>
                  <div className="text-xs text-slate-500">{section.calculation.label}</div>
                </div>
                <div className="mt-2 flex gap-2 text-lg font-bold">
                  <div className="text-emerald-600">{section.calculation.result}</div>
                  <div className="text-slate-500">{section.calculation.formula}</div>
                </div>
                <div className="mt-2 text-xs text-slate-500">{section.calculation.note}</div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4">
                <h4 className="text-sm font-semibold text-slate-800">FAQs</h4>
                <div className="mt-2 space-y-3 text-sm leading-6 text-slate-600">
                  {section.faqs.map((faq) => (
                    <div key={faq.question} className="flex flex-col gap-1">
                      <div className="font-medium text-slate-800">{faq.question}</div>
                      <div className="text-sm">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
