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
    'Hybrid solar and wind energy systems combining PV, wind turbines, storage, and intelligent controls for reliable power generation for homes, businesses, farms, and microgrids in India.',
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
    'hybrid power generation',
    'solar and wind combination system',
    'hybrid rooftop solar system',
    'industrial hybrid power',
    'residential hybrid energy system',
    'energy storage hybrid solution',
    'solar wind battery system',
    'smart hybrid energy system',
    'microgrid hybrid power solution',
    'renewable backup power system',
    'clean hybrid power system',
    'hybrid energy company India',
    'solar and wind off-grid system',
  ],
  alternates: {
    canonical: '/hybridenergy',
  },
  openGraph: {
    title: 'Hybrid Solar & Wind Energy | Smart Renewable Power Systems',
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

const serviceSections = [
  {
    title: 'Continuous Renewable Generation',
    heading: 'Harness solar and wind for more consistent power availability',
    overview:
      'Renewable power changes throughout the day and across seasons. Solar generation is strongest during sunlight hours while wind generation may peak when conditions are favourable at other times. A hybrid system combines solar PV and wind generation to create a more balanced renewable supply that can support electricity demand in varying weather conditions.',
    applications: [
      { title: 'Residential and rural power', description: 'Homes and rural systems benefit from a more stable energy mix when solar and wind complement each other.' },
      { title: 'Industrial facilities', description: 'Process and operations loads can be supported with a broader renewable generation mix and battery backup.' },
      { title: 'Agricultural operations', description: 'Farms can align solar and wind generation with irrigation, pumping, and processing demands.' },
    ],
    benefits: [
      'Better utilization of renewable resources',
      'Improved power availability with storage support',
      'Reduced grid dependence',
      'Flexible system design for future expansion',
    ],
    calculation: {
      label: 'Illustrative solar + wind + battery example',
      formula: '20 kW solar × 8,760 × 0.18 + 10 kW wind × 8,760 × 0.25 = 53,436 kWh/year',
      result: 'Combined annual generation: 53,436 kWh',
      note: 'This is an annual average estimate and not a guarantee of daily production. Actual generation depends on resource availability, losses, and system operation.',
    },
    faqs: [
      { question: 'Can solar and wind work well together?', answer: 'Yes, because they often generate at different times and under different weather conditions, helping balance resource availability.' },
      { question: 'Does annual generation guarantee 24/7 supply?', answer: 'No. Storage, demand profile, and backup arrangements are still required to support continuity during low-generation periods.' },
    ],
  },
  {
    title: 'Hybrid Microgrid Energy Management',
    heading: 'Intelligent control for efficient renewable power distribution',
    overview:
      'A hybrid microgrid is a localized energy system that combines generation, storage, loads, and control equipment to balance supply and demand. It may operate with the utility grid or independently when designed for islanded operation. Effective energy management is essential to get the most practical value from solar, wind, and battery assets.',
    applications: [
      { title: 'Industrial facilities', description: 'Multi-load sites benefit from coordinated dispatch across generation, storage, and priority loads.' },
      { title: 'Commercial campuses', description: 'Energy use across multiple buildings can be optimized through central demand and generation control.' },
      { title: 'Remote infrastructure', description: 'Monitoring and control systems help remote sites manage generation and battery operation more effectively.' },
    ],
    benefits: [
      'Improved energy coordination across sources and loads',
      'Better use of stored energy',
      'Reduced unnecessary grid purchases',
      'Operational visibility for faults and maintenance',
    ],
    calculation: {
      label: 'Commercial microgrid example',
      formula: '50 kW solar × 8,760 × 0.18 + 30 kW wind × 8,760 × 0.25 = 144,540 kWh/year',
      result: 'Estimated annual generation: 144,540 kWh',
      note: 'The facility consumption must still be compared against actual hourly demand, battery availability, and operating priorities.',
    },
    faqs: [
      { question: 'Why does a microgrid need controls?', answer: 'Without coordinated control, solar, wind, and batteries can overlap poorly or charge/discharge at the wrong times.' },
      { question: 'Can microgrid control improve resilience?', answer: 'Yes, especially when loads are prioritized and battery dispatch is aligned with critical operations.' },
    ],
  },
  {
    title: 'Off-grid Hybrid for Isolated Locations',
    heading: 'Renewable electricity for places beyond reliable grid access',
    overview:
      'Many remote locations face limited grid access, expensive grid extensions, or dependence on diesel generation. An off-grid hybrid system can combine solar panels, wind turbines, battery storage, and backup generation to supply electricity without a continuous utility connection. Proper planning is critical because maintenance access and fuel logistics may be difficult.',
    applications: [
      { title: 'Remote villages', description: 'Hybrid systems can support homes, lighting, communications, and essential services away from the grid.' },
      { title: 'Telecom towers', description: 'Reliable renewable power can lower fuel dependence and improve operational continuity.' },
      { title: 'Research stations', description: 'Remote monitoring and field facilities benefit from renewable generation paired with storage and backup logic.' },
    ],
    benefits: [
      'Reduced dependence on fuel deliveries',
      'Improved energy access in remote locations',
      'Better operational resilience',
      'Flexible system sizing for essential loads',
    ],
    calculation: {
      label: 'Remote site hybrid power example',
      formula: '10 kW solar × 8,760 × 0.18 + 5 kW wind × 8,760 × 0.25 = 26,718 kWh/year',
      result: 'Estimated annual generation: 26,718 kWh',
      note: 'This first-pass estimate is useful for site screening, but off-grid reliability must also consider low-generation periods and battery autonomy.',
    },
    faqs: [
      { question: 'Is off-grid renewable power always reliable?', answer: 'Not by itself. Reliability depends on load, resource variation, battery sizing, backup supply, and system design.' },
      { question: 'Do remote systems need a backup generator?', answer: 'Sometimes. For critical loads, a backup source may be justified to protect availability during prolonged low-generation periods.' },
    ],
  },
  {
    title: 'Hybrid Power for Commercial Facilities',
    heading: 'Reduce grid dependence with coordinated solar, wind, and storage',
    overview:
      'Commercial facilities need electricity for lighting, air conditioning, computers, refrigeration, pumps, and process equipment. A hybrid renewable energy system can combine solar PV, wind generation where site conditions allow, and battery storage to support these needs while reducing grid dependence and improving operational resilience.',
    applications: [
      { title: 'Offices and IT facilities', description: 'Daytime and peak-load reduction can be improved through smart solar, wind, and battery coordination.' },
      { title: 'Shopping centres and hotels', description: 'Businesses can lower operating overhead and maintain service continuity during outages or tariff peaks.' },
      { title: 'Cold storage and manufacturing', description: 'Industry can use hybrid generation to reduce cost pressure while supporting selected critical loads.' },
    ],
    benefits: [
      'Potential reduction in electricity expenditure',
      'Greater energy flexibility with storage',
      'Support for business resilience',
      'Scalable installation for future expansion',
    ],
    calculation: {
      label: 'Commercial building example',
      formula: '100 kW solar × 8,760 × 0.18 + 20 kW wind × 8,760 × 0.25 = 201,480 kWh/year',
      result: 'Combined annual generation: 201,480 kWh',
      note: 'Only 70% of this generation is assumed to be consumed on site, with value based on the applicable electricity tariff and facility profile.',
    },
    faqs: [
      { question: 'Can commercial hybrid systems cut bills?', answer: 'Yes, when self-consumption, tariff structures, and load timing line up with generation. The actual savings depend on the business profile.' },
      { question: 'Do I need a battery?', answer: 'Not always. Some grid-connected systems work without batteries, while others need storage for resilience or peak shifting.' },
    ],
  },
  {
    title: 'Hybrid Energy for Farms & Irrigation',
    heading: 'Support agricultural operations with solar, wind, and storage',
    overview:
      'Agriculture requires energy for irrigation pumps, water transfer, livestock facilities, cold storage, and general farm operations. Hybrid renewable systems combine solar PV, wind generation when suitable, and storage to support agricultural operations more reliably and reduce dependency on grid or diesel supply.',
    applications: [
      { title: 'Irrigation systems', description: 'Hybrid systems can support pumping loads while water storage helps match renewable generation to irrigation timing.' },
      { title: 'Dairy and livestock farms', description: 'Energy can support lighting, ventilation, refrigeration, and essential equipment for daily operations.' },
      { title: 'Cold storage and processing', description: 'Hybrid power can support cooling, processing, and site loads when matched to the right system design.' },
    ],
    benefits: [
      'Potential reduction in grid power use',
      'Reduced exposure to fuel costs',
      'Flexible pumping schedules',
      'Improved water management and farm resilience',
    ],
    calculation: {
      label: 'Farm irrigation example',
      formula: '10 kW solar × 8,760 × 0.18 + 3 kW wind × 8,760 × 0.25 = 22,338 kWh/year',
      result: 'Estimated annual generation: 22,338 kWh',
      note: 'The generation is greater than the pump demand on paper, but schedules still need to match or storage must be included for reliable supply.',
    },
    faqs: [
      { question: 'Can a hybrid system run irrigation pumps?', answer: 'Yes, if the system is designed around pump rating, daily schedule, starting current, and water storage needs.' },
      { question: 'Should water storage replace battery storage?', answer: 'Sometimes. In irrigation systems, storing water can be more economical than storing electricity in batteries when pumping schedules are flexible.' },
    ],
  },
  {
    title: 'Campus & Community Hybrid Microgrids',
    heading: 'Coordinated renewable energy for shared facilities and communities',
    overview:
      'Campuses and communities often have multiple buildings with varied electricity demands across the day. A hybrid microgrid can combine solar PV, suitable wind generation, battery energy storage, and central controls to improve the use of locally generated renewable electricity and support shared infrastructure.',
    applications: [
      { title: 'Educational campuses', description: 'Shared generation and metering can align with classroom, residential, and essential-service loads.' },
      { title: 'Residential communities', description: 'Communities can coordinate renewable supply and improve local resilience and efficiency.' },
      { title: 'Healthcare and public facilities', description: 'Critical services can be prioritized while the system manages backup and demand across the site.' },
    ],
    benefits: [
      'Better coordination across buildings',
      'Greater use of locally generated renewable electricity',
      'Improved visibility through metering and dashboards',
      'Expandable architecture for future community growth',
    ],
    calculation: {
      label: 'Campus microgrid example',
      formula: '250 kW solar × 8,760 × 0.18 + 50 kW wind × 8,760 × 0.25 = 503,700 kWh/year',
      result: 'Estimated annual generation: 503,700 kWh',
      note: 'This exceeds the campus annual demand under the example assumptions, but real performance still depends on timing, storage, and operational strategy.',
    },
    faqs: [
      { question: 'Can a campus operate without the grid?', answer: 'Only if the microgrid is designed for islanded operation, with sufficient generation, storage, and controls to maintain power quality and reliability.' },
      { question: 'How is the system managed?', answer: 'Using a central controller that tracks generation, storage, demand, critical loads, and grid interaction while applying predefined operating rules.' },
    ],
  },
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
    badge: 'Solar + wind',
    title: 'Continuous Renewable Generation',
    description:
      'Combined solar and wind generation creates a more reliable energy mix, covering daytime production and filling gaps during low-sun or high-wind periods.',
    image: '/images/slider/slider-13.png',
    tags: ['24/7 supply', 'Balanced output'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Smart control',
    title: 'Hybrid Microgrid Energy Management',
    description:
      'Integrated controls coordinate solar, wind, storage, and load demand for better efficiency, backup readiness, and digital monitoring.',
    image: '/images/slider/slider-14.png',
    tags: ['Smart dispatch', 'Battery sync'],
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Remote resilience',
    title: 'Off-grid Hybrid for Isolated Locations',
    description:
      'Solar-wind hybrid systems with battery storage support remote homes, telecom towers, and rural sites where grid access is limited or unavailable.',
    image: '/images/slider/slider-15.png',
    tags: ['Off-grid', 'Remote-ready'],
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Business backup',
    title: 'Hybrid Power for Commercial Facilities',
    description:
      'Commercial buildings and industrial facilities benefit from reduced outages, lower energy cost, and stronger renewable self-sufficiency.',
    image: '/images/slider/slider-16.png',
    tags: ['Business-ready', 'Backup'],
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Agricultural power',
    title: 'Hybrid Energy for Farms & Irrigation',
    description:
      'Farm operations use hybrid generation to support pumps, processing units, lighting, and essential loads with cleaner and more stable power.',
    image: '/images/slider/slider-17.png',
    tags: ['Agri-power', 'Irrigation'],
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Community network',
    title: 'Campus & Community Hybrid Microgrids',
    description:
      'Multi-source hybrid systems create resilient local networks for campuses, villages, and community facilities with distributed renewable generation.',
    image: '/images/slider/slider-18.png',
    tags: ['Microgrid', 'Community'],
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
]

function HybridHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full items-end justify-start overflow-hidden p-6 sm:p-8 lg:p-14 xl:p-18'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={5000} pauseOnHover>
      {hybridSlides.map((slide, index) => (
        <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
              style={{ filter: 'saturate(1.12) brightness(0.68)' }}
            />
          </div>
          <div className={`${slideOverlay} absolute inset-0`} />

          <div className={slideClass}>
            <div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/15 bg-slate-950/30 p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-[3px] sm:p-6 lg:p-8">
              <span
                className={`mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${slide.badgeClass}`}
              >
                {slide.badge}
              </span>

              <h1 className="max-w-2xl text-3xl font-black leading-none tracking-[-0.06em] text-white sm:text-4xl lg:text-[4rem]">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/95 sm:text-base lg:text-lg">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-white/15 bg-slate-950/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${slide.chipClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
              Hybrid Solar + Wind Energy Systems
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 sm:text-xl">
              Combine solar generation, wind power, storage, and intelligent controls to create more resilient, flexible, and efficient renewable energy systems for homes, businesses, farms, and communities.
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

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>Our solutions</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Six hybrid renewable energy service lines</h2>
        </div>

        <div className="space-y-8">
          {serviceSections.map((service, index) => (
            <article key={service.title} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.32)] sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700">Service {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl">{service.title}</h3>
                </div>
                <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 sm:block">
                  Hybrid system
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{service.heading}</h4>
                  <p className="mt-4 text-base leading-8 text-slate-700">{service.overview}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {service.applications.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-600">Application</p>
                        <h5 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-emerald-700">Benefits</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/70 p-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-black text-emerald-700">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.75rem] border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-sky-700">Example calculation</p>
                  <h4 className="mt-3 text-xl font-black tracking-[-0.03em] text-slate-900">{service.calculation.label}</h4>
                  <p className="mt-3 font-mono text-sm leading-7 text-slate-800">{service.calculation.formula}</p>
                  <div className="mt-4 rounded-2xl bg-slate-900 p-3 text-sm font-semibold text-white">{service.calculation.result}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{service.calculation.note}</p>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-600">Frequently asked questions</p>
                  <div className="mt-4 space-y-4">
                    {service.faqs.map((item) => (
                      <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-3.5">
                        <p className="text-sm font-black text-slate-900">{item.question}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                  Request energy assessment
                </a>
                <a
                  href="/customer-enquiry"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
                >
                  Enquire now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <HybridSectionEyebrow>Application fit</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Typical system combinations</h2>
        </div>

        <HybridTable rows={projectRows} />
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
                  src="/images/slider/slider-13.png"
                  alt="Hybrid renewable energy deployment"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
              </div>
              <div className="mt-5 rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-200">Key insight</p>
                <h3 className="mt-2 text-xl font-bold text-white">Start with credible and practical hybrid offers</h3>
                <p className="mt-2 text-base leading-7 text-slate-200">
                  Evaluate solar + battery hybrid, solar + wind + battery off-grid systems, and commercial grid-connected hybrid designs before moving into larger multi-source microsgrids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
