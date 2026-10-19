import {
  CapacityTable,
  FeatureCard,
  BenefitCard,
  InfoPanel,
  OptimizedImage,
  SectionEyebrow,
  Slider,
  SubsidyCard,
} from '../components/ui'

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

const offerings = [
  {
    title: 'Solar Rooftop Systems',
    description:
      'On-grid power plants for homes and businesses, designed for performance, net metering, and long-term savings.',
    points: ['On-grid, off-grid and hybrid configurations', 'Net metering with state DISCOM', 'PM Surya Ghar subsidy assistance', 'TATA Power Solar premium panels'],
  },
  {
    title: 'Solar Thermal — Water Heating Solutions',
    description:
      'Efficient hot water systems for homes, hotels, hospitals, hostels, commercial spaces, and industries.',
    points: ['Available in capacities from 100 LPD', 'Pressurised and non-pressurised options', 'BIS-certified collectors', 'Low-maintenance hot water year-round'],
  },
  {
    title: 'Solar Street Lights',
    description:
      'All-in-one solar lighting for roads, compounds, campuses, and public spaces with zero grid dependence.',
    points: ['Integrated all-in-one luminaires from 12W', 'Auto dusk-to-dawn operation', 'Lithium-ion storage with 5+ year life', 'Zero electricity bills'],
  },
  {
    title: 'Solar Fencing',
    description:
      'Energy-efficient perimeter protection for farms, estates, and rural properties.',
    points: ['Solar-charged energiser', 'Up to 10 km perimeter on a single charger', 'Audible alarm and battery backup', 'Crop and livestock protection'],
  },
  {
    title: 'Solar Pumpsets',
    description:
      'Diesel-free pumping systems for agriculture and irrigation from clean solar power.',
    points: ['AC and DC pump configurations', 'MNRE-approved controllers', 'PM-KUSUM scheme assistance', '5-year manufacturer warranty'],
  },
  {
    title: 'Operation & Maintenance (AMC)',
    description:
      'Annual support plans that keep your plant performing at peak generation and reliability.',
    points: ['Quarterly preventive maintenance', 'Performance ratio monitoring', '24x7 priority support', 'Spare parts and inverter service'],
  },
]

const rooftopBenefits = [
  'Reduce electricity bills by up to 80–90%',
  '25+ years of solar panel life',
  'Low maintenance and high reliability',
  'Environment-friendly renewable energy',
  'Increase property value',
  'Net Metering facility to export excess power to the grid',
  'Eligible for government subsidies (as applicable)',
]

const suitableFor = ['Individual Houses', 'Apartments & Residential Communities', 'Commercial Buildings', 'Industries & Factories', 'Educational Institutions', 'Hospitals & Government Buildings']

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

const whySolar = [
  { title: 'Reduce Carbon Emissions', description: 'Every kW of solar offsets ~1.2 tonnes of CO₂ a year — shrinking your carbon footprint.' },
  { title: 'Eco-Friendly', description: 'Clean, renewable energy that protects nature for generations to come.' },
  { title: 'Cost Saving', description: 'Slash electricity bills by 70–90% from day one and recover your investment in 4–6 years.' },
  { title: 'Energy Independence', description: 'Generate your own power and cut reliance on the grid and rising tariffs.' },
  { title: 'Unlimited Energy', description: 'Sunlight is infinite — Tirupati enjoys 300+ sunny days every year.' },
  { title: 'Continuous Supply', description: 'Hybrid systems with battery backup keep critical loads running through outages.' },
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
              src="/images/slider/slider-5.png"
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
              src="/images/slider/slider-15.png"
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
          <SectionEyebrow>What We Offer</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Expertise End-to-End Solar Solutions</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            We have rich experience in solar rooftop 1 kW to megawatt solar power plants — including solar hybrid systems, solar hot water, solar street lights, solar fencing, solar agriculture pump sets & any solar power services.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {offerings.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
              accent={service.title.includes('Street') ? 'amber' : service.title.includes('Thermal') ? 'sky' : service.title.includes('Fencing') ? 'violet' : 'emerald'}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Rooftop Solar</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Solar Rooftop Systems</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Solar rooftop systems generate electricity using solar panels installed on your rooftop. Sized to your power needs and usage, they cut your dependence on grid power and significantly lower your monthly electricity bills.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {rooftopBenefits.map((benefit) => (
              <BenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
            ))}
          </div>

          <div className="space-y-5">
            <InfoPanel title="Suitable For" content={suitableFor} accent="emerald" />
            <InfoPanel title="Key Benefits" content={rooftopBenefits} accent="sky" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>System Types</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">There are three main types of solar rooftop systems</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {systemTypes.map((type) => (
            <FeatureCard key={type.title} title={type.title} description={type.description} points={type.benefits} accent={type.title.includes('Off-grid') ? 'amber' : type.title.includes('Hybrid') ? 'violet' : 'emerald'} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Why Solar</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Why you have to switch to solar today?</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whySolar.map((item) => (
            <BenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Government of India Scheme</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">PM Surya Ghar: Muft Bijli Yojana Subsidy</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Central-government subsidy you can claim on your rooftop solar — AeroSun Energy files the entire application for you.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <SubsidyCard label="For Residential Households" value="₹30,000" note="per kW up to 2 kW" />
          <SubsidyCard label="Additional Capacity" value="₹18,000" note="per kW for additional capacity up to 3 kW" />
          <SubsidyCard label="Maximum Subsidy" value="₹78,000" note="Total subsidy for systems larger than 3 kW" />
          <SubsidyCard label="For GHS / RWA" value="₹18,000" note="Common facility subsidy up to 500 kW" />
        </div>

        <div className="mt-8">
          <CapacityTable />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-slate-100 via-white to-amber-50 p-6 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.3)] sm:p-8">
          <SectionEyebrow>Strategic view</SectionEyebrow>
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

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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
    </main>
  )
}
