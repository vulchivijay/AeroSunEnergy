// import {
//   Hero,
//   HowItWorks,
//   Features,
//   SavoniusRotor,
//   UseCases,
//   Benefits,
//   WindGenerators,
//   Services,
//   WhyChooseUs,
//   CTASection,
// } from '@/app/components/sections'
import About from './components/sections/About'
import {
  BenefitCard,
  CapacityTable,
  FeatureCard,
  HybridBenefitCard,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  InfoPanel,
  SchemeBanner,
  SectionEyebrow,
  Slider,
  WindBenefitCard,
  WindCapacityTable,
  WindFeatureCard,
  WindInfoPanel,
  WindSectionEyebrow,
} from './components/ui'
import SolarCalculator from './services/estimation/page'

const slides = [
  {
    badge: 'Grid-tied rooftop',
    title: 'Grid-tied Rooftop',
    description:
      'On-grid PV connected to the utility. Pros: lower cost (no batteries), net-metering, simple setup. Cons: no backup power during outages unless paired with storage.',
    tags: ['Lower Capex', 'Net Metering'],
    image: '/images/slider/slider-1.png',
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Off-grid autonomy',
    title: 'Off-grid (Standalone)',
    description:
      'Fully independent systems with PV + batteries + charge controller. Pros: complete autonomy for remote sites. Cons: higher upfront cost and careful energy management required.',
    tags: ['Battery-backed', 'Remote-ready'],
    image: '/images/slider/slider-2.png',
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Hybrid resilience',
    title: 'Hybrid (Grid + Battery)',
    description:
      'PV plus battery storage with ability to work with the grid. Pros: backup power, time-shifting, demand management. Cons: more complex controls and higher cost than grid-only.',
    tags: ['Backup power', 'Smart control'],
    image: '/images/slider/slider-3.png',
    badgeClass: 'text-pink-100',
    chipClass: 'text-pink-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Storage strategy',
    title: 'Solar + Storage',
    description:
      'Architectures pairing batteries with PV. DC-coupled suits new installs; AC-coupled is great for retrofits. Choose based on efficiency and retrofit needs.',
    tags: ['DC-coupled', 'Retrofit-ready'],
    image: '/images/slider/slider-4.png',
    badgeClass: 'text-amber-50',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Utility scale',
    title: 'Commercial / Utility-scale',
    description:
      'Large ground-mounted arrays with trackers and centralized inverters. Pros: high output and economies of scale; often paired with large storage for grid services.',
    tags: ['High yield', 'Grid support'],
    image: '/images/slider/slider-5.png',
    badgeClass: 'text-slate-100',
    chipClass: 'text-slate-100',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Shared energy',
    title: 'Community / Microgrid',
    description:
      'Shared systems serving multiple customers or a local microgrid. Pros: pooled financing, resilience, and islanding capability; usually paired with storage and smart controls.',
    tags: ['Resilient', 'Shared value'],
    image: '/images/slider/slider-6.png',
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  // {
  //   badge: 'Horizontal-axis wind',
  //   title: 'Horizontal-Axis Wind Turbines (HAWT)',
  //   description:
  //     'Three-blade propeller turbines designed for efficient wind capture, common in commercial and utility-scale deployments where consistent wind resource is available.',
  //   tags: ['High efficiency', 'Utility-scale', 'Directional alignment'],
  //   image: '/images/slider/slider-7.png',
  //   badgeClass: 'text-sky-100',
  //   chipClass: 'text-sky-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Vertical-axis wind',
  //   title: 'Vertical-Axis Wind Turbines',
  //   description:
  //     'Rotor designs that accept wind from multiple directions, useful in compact sites and noise-sensitive areas where simplicity and adaptability matter.',
  //   tags: ['Multi-directional', 'Compact footprint', 'Flexible siting'],
  //   image: '/images/slider/slider-8.png',
  //   badgeClass: 'text-emerald-100',
  //   chipClass: 'text-emerald-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Grid-connected power',
  //   title: 'Grid-connected system wind energy',
  //   description:
  //     'Wind generation tied to the utility network allows energy offset, reduced demand charges, and smoother integration with local grid infrastructure.',
  //   tags: ['Net metering', 'Grid tied', 'On-site generation'],
  //   image: '/images/slider/slider-9.png',
  //   badgeClass: 'text-cyan-100',
  //   chipClass: 'text-cyan-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Independent power',
  //   title: 'Off-grid system',
  //   description:
  //     'Standalone wind systems with battery support provide independent electricity for remote homes, telecom stations, and sites without reliable utility access.',
  //   tags: ['Battery backup', 'Remote-ready', 'Autonomous supply'],
  //   image: '/images/slider/slider-10.png',
  //   badgeClass: 'text-amber-100',
  //   chipClass: 'text-amber-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Battery storage',
  //   title: 'Wind–battery',
  //   description:
  //     'Energy storage pairs with wind generation to smooth output, supply power during calm periods, and improve efficiency for critical or irregular loads.',
  //   tags: ['Load shifting', 'Backup reserve', 'Stability support'],
  //   image: '/images/slider/slider-11.png',
  //   badgeClass: 'text-violet-100',
  //   chipClass: 'text-violet-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Scalable power',
  //   title: 'Below 1 kW, 1–10 kW, 10–100 kW, 100 kW–1 MW, 1 MW',
  //   description:
  //     'Wind systems scale across micro, small, medium, commercial, and utility-size categories to match load demand, site conditions, and operating goals.',
  //   tags: ['Micro to utility', 'Right-sized system', 'Capacity planning'],
  //   image: '/images/slider/slider-12.png',
  //   badgeClass: 'text-orange-100',
  //   chipClass: 'text-orange-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Home hybrid',
  //   title: 'Residential solar-wind hybrid systems',
  //   description:
  //     'Hybrid systems combine solar PV with wind generation to improve energy resilience at homes and residential communities with seasonal or variable generation patterns.',
  //   tags: ['Home resilience', 'Solar + wind', 'Reduced dependence'],
  //   image: '/images/slider/slider-13.png',
  //   badgeClass: 'text-emerald-100',
  //   chipClass: 'text-emerald-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Farm hybrid',
  //   title: 'Agricultural solar-wind hybrid systems',
  //   description:
  //     'Farm-ready hybrid systems support irrigation, cold storage, pumps, and rural operations by combining solar generation with wind power and backup storage.',
  //   tags: ['Agriculture use', 'Water pumping', 'Rural reliability'],
  //   image: '/images/slider/slider-14.png',
  //   badgeClass: 'text-amber-100',
  //   chipClass: 'text-amber-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Commercial backup',
  //   title: 'Off-grid commercial hybrid systems',
  //   description:
  //     'Independent hybrid power plants for commercial operations provide continuity, reduce diesel dependence, and support critical loads in remote or unstable areas.',
  //   tags: ['Critical loads', 'Off-grid', 'Business continuity'],
  //   image: '/images/slider/slider-15.png',
  //   badgeClass: 'text-rose-100',
  //   chipClass: 'text-rose-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Business grid',
  //   title: 'Commercial grid-connected hybrid systems',
  //   description:
  //     'Grid-linked hybrid systems pair solar and wind with storage to manage peak demand, lower utility costs, and improve operational resilience for businesses.',
  //   tags: ['Demand reduction', 'Grid-linked', 'Business savings'],
  //   image: '/images/slider/slider-16.png',
  //   badgeClass: 'text-sky-100',
  //   chipClass: 'text-sky-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
  // {
  //   badge: 'Microgrid network',
  //   title: 'Hybrid microgrids',
  //   description:
  //     'Localized energy networks connect multiple generation sources, storage, and loads to maintain power stability for communities, campuses, and industrial sites.',
  //   tags: ['Local resilience', 'Multiple sources', 'Smart control'],
  //   image: '/images/slider/slider-17.png',
  //   badgeClass: 'text-violet-100',
  //   chipClass: 'text-violet-50',
  //   panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  // },
]

export default function Home() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <main>
      <Slider autoplay interval={5000} pauseOnHover>
        {slides.map((slide) => (
          <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
            <div className="absolute inset-0">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})`, filter: 'saturate(1.05) brightness(0.72)' }}
              />
            </div>
            <div className={`${slideOverlay} absolute inset-0`} />
            <div className={slideClass}>
              <span className={`mb-4 inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] ${slide.badgeClass}`}>
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
                  <span key={tag} className={`rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${slide.chipClass}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <SchemeBanner />

      <About />
      {/* Solar Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <SectionEyebrow>What We Offer</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Expertise End-to-End Solar Solutions
          </h2>
        </div>

        <div className="mb-10 text-lg leading-8 text-slate-700">
          We have rich experience in solar rooftop 1 KW to megawatt solar power plants — including solar hybrid systems, solar hot water, solar street lights, solar fencing, solar agriculture pump sets & any solar power services.
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Solar Rooftop Systems"
            description="On-grid power plants for homes and businesses."
            points={[
              'On-grid, off-grid and hybrid configurations',
              'Net metering with state DISCOM',
              'PM Surya Ghar subsidy assistance',
              'TATA Power Solar premium panels',
            ]}
            accent="emerald"
          />
          <FeatureCard
            title="Solar Thermal — Water Heating Solutions"
            description="Solar Hot Water & Heat Pump — efficient, eco-friendly hot water for homes, hotels, hospitals, hostels, commercial establishments and industries."
            points={[
              'Available in capacities from 100 litres per day (LPD)',
              'Choice of pressurised and non-pressurised models',
              'High-performance BIS-certified solar collectors',
              'Cuts electricity use by minimising geyser usage',
            ]}
            accent="amber"
          />
          <FeatureCard
            title="Solar Street Lights"
            description="All-in-one lighting powered entirely by sunlight."
            points={[
              'Integrated all-in-one luminaires starting from 12W',
              'Auto dusk-to-dawn operation',
              'Lithium-ion storage, 5+ year life',
              'Zero electricity bills',
            ]}
            accent="sky"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Solar Fencing"
            description="Solar-powered electric fences for farms and estates."
            points={[
              'Solar-charged energiser',
              'Up to 10 km perimeter on a single charger',
              'Audible alarm and battery backup',
              'Crop and livestock protection',
            ]}
            accent="violet"
          />
          <FeatureCard
            title="Solar Pumpsets"
            description="Diesel-free water pumping for agriculture."
            points={[
              'AC and DC pump configurations',
              'MNRE-approved controllers',
              'PM-KUSUM scheme assistance',
              '5-year manufacturer warranty',
            ]}
            accent="amber"
          />
          <FeatureCard
            title="Operation & Maintenance (AMC)"
            description="Annual care to keep your plant generating at peak."
            points={[
              'Quarterly preventive maintenance',
              'Performance ratio monitoring',
              '24x7 priority support',
              'Spare parts and inverter service',
            ]}
            accent="emerald"
          />
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Rooftop Solar</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">
              Solar Rooftop Systems
            </h3>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            Solar rooftop systems generate electricity using solar panels installed on your rooftop. Sized to your power needs and usage, they cut your dependence on grid power and significantly lower your monthly electricity bills.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <BenefitCard title="Reduce electricity bills by up to 80–90%" description="Lower your monthly spend while improving energy certainty." />
            <BenefitCard title="25+ years of solar panel life" description="Long operational life with minimal replacement cycles." />
            <BenefitCard title="Low maintenance and high reliability" description="Designed for stable long-term generation with simple upkeep." />
            <BenefitCard title="Environment-friendly renewable energy" description="Reduce your environmental impact with clean power generation." />
            <BenefitCard title="Increase property value" description="Improve the value and appeal of your property with solar-ready infrastructure." />
            <BenefitCard title="Net Metering facility" description="Export excess power to the grid and earn credits where applicable." />
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <InfoPanel
              title="Key Benefits"
              accent="emerald"
              content={[
                'Reduce electricity bills by up to 80–90%',
                '25+ years of solar panel life',
                'Low maintenance and high reliability',
                'Environment-friendly renewable energy',
                'Increase property value',
                'Net Metering facility to export excess power to the grid',
              ]}
            />
            <InfoPanel
              title="Suitable For"
              accent="sky"
              content={[
                'Individual Houses',
                'Apartments & Residential Communities',
                'Commercial Buildings',
                'Industries & Factories',
                'Educational Institutions',
                'Hospitals & Government Buildings',
              ]}
            />
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>System Types</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">
              There are three main types of solar rooftop systems
            </h3>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <InfoPanel
              title="On-Grid Solar System"
              accent="emerald"
              content={[
                'Grid-connected with net metering — export surplus power to the grid and earn credits.',
                'The most economical option, with no batteries required.',
              ]}
            />
            <InfoPanel
              title="Off-Grid Solar System"
              accent="amber"
              content={[
                'Battery-backed and fully independent of the grid.',
                'Ideal for remote sites or areas with frequent, long power cuts.',
              ]}
            />
            <InfoPanel
              title="Hybrid System"
              accent="sky"
              content={[
                'Combines a grid connection with battery backup.',
                'Cut your bills while keeping essential loads running through outages.',
              ]}
            />
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Why Solar</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">
              Why you have to switch to solar today?
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <BenefitCard title="Reduce Carbon Emissions" description="Every kW of solar offsets ~1.2 tonnes of CO₂ a year — shrinking your carbon footprint." />
            <BenefitCard title="Eco-Friendly" description="Clean, renewable energy that protects nature for generations to come." />
            <BenefitCard title="Cost Saving" description="Slash electricity bills by 70–90% from day one and recover your investment in 4–6 years." />
            <BenefitCard title="Energy Independence" description="Generate your own power and cut reliance on the grid and rising tariffs." />
            <BenefitCard title="Unlimited Energy" description="Sunlight is infinite — Tirupati enjoys 300+ sunny days every year." />
            <BenefitCard title="Continuous Supply" description="Hybrid systems with battery backup keep critical loads running through outages." />
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Government of India Scheme</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">
              PM Surya Ghar: Muft Bijli Yojana Subsidy
            </h3>
          </div>

          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            Central-government subsidy you can claim on your rooftop solar — AeroSun Energy files the entire application for you.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <BenefitCard title="For Residential Households" description="₹ 30,000 per kW up to 2 kW" />
            <BenefitCard title="Additional Capacity" description="₹ 18,000 per kW for additional capacity up to 3 kW" />
            <BenefitCard title="Maximum Total Subsidy" description="₹ 78,000 for systems larger than 3 kW" />
            <BenefitCard title="For GHS / RWA" description="₹ 18,000 per kW for common facilities incl. EV charging, up to 500 kW" />
          </div>

          <div className="mt-8">
            <CapacityTable />
          </div>
        </div>
      </section>
      {/* Wind Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <WindSectionEyebrow>Wind Energy</WindSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Wind power solutions for a greener grid
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <WindFeatureCard
            title="Horizontal-Axis Wind Turbines"
            description="Three-blade turbine systems designed for efficient wind capture in higher-resource sites."
            points={[
              'High efficiency and strong output',
              'Utility-scale deployment ready',
              'Directional alignment for optimized generation',
            ]}
            accent="sky"
          />
          <WindFeatureCard
            title="Vertical-Axis Wind Turbines"
            description="Multi-directional solutions for compact or noise-sensitive settings."
            points={[
              'Accepts wind from multiple directions',
              'Compact footprint for constrained sites',
              'Flexible siting and installation',
            ]}
            accent="emerald"
          />
          <WindFeatureCard
            title="Grid-Connected & Off-Grid Systems"
            description="Wind generation tied to the utility network or battery-backed for remote sites."
            points={[
              'Grid-tied net metering support',
              'Battery backup for independent supply',
              'Suitable for homes, telecom, and farms',
            ]}
            accent="amber"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <WindBenefitCard title="Clean Power" description="Generates renewable electricity with a smaller carbon footprint than fossil alternatives." />
          <WindBenefitCard title="Energy Security" description="Improves resilience by diversifying generation resources beyond solar alone." />
          <WindBenefitCard title="Lower Cost Of Energy" description="Optimizes operational expenses in suitable wind-rich areas and commercial sites." />
          <WindBenefitCard title="Site Flexibility" description="Supports both standalone and integrated deployments across varied geographies." />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <WindInfoPanel
            title="Ideal for"
            accent="sky"
            content={[
              'Rural and semi-urban infrastructure',
              'Commercial facilities with high energy demands',
              'Remote telecom and monitoring stations',
              'Hybrid renewable campuses and microgrids',
            ]}
          />
          <WindInfoPanel
            title="Typical use cases"
            accent="emerald"
            content={[
              'On-grid wind support for energy offset',
              'Off-grid power for remote operations',
              'Hybrid systems with solar and battery',
              'Agricultural and industrial motive loads',
            ]}
          />
        </div>

        <div className="mt-8">
          <WindCapacityTable
            rows={[
              { label: 'Micro', value: 'Below 1 kW', use: 'Small remote and auxiliary loads' },
              { label: 'Small', value: '1–10 kW', use: 'Homes, retail, and small commercial sites' },
              { label: 'Medium', value: '10–100 kW', use: 'Industrial and campus-level generation' },
              { label: 'Large', value: '100 kW–1 MW', use: 'Commercial and utility-oriented installations' },
            ]}
          />
        </div>
      </section>
      {/* Hybrid Energy Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <HybridSectionEyebrow>Hybrid Energy</HybridSectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Solar + Wind hybrid systems for dependable power
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <HybridFeatureCard
            title="Residential Solar-Wind Hybrid"
            description="Combines solar and wind generation to improve energy reliability for homes and residential communities."
            points={[
              'Home resilience in changing weather',
              'Reduced dependence on grid power',
              'Better balance across seasons',
            ]}
            accent="emerald"
          />
          <HybridFeatureCard
            title="Agricultural Hybrid Systems"
            description="Supports irrigation, cold storage, and farm power while reducing diesel dependence."
            points={[
              'Water pumping and field support',
              'Rural reliability during outages',
              'Lower operating costs for agriculture',
            ]}
            accent="sky"
          />
          <HybridFeatureCard
            title="Commercial & Microgrid Hybrid"
            description="Ideal for facilities needing continuity, grid support, and efficient peak-demand management."
            points={[
              'Critical loads covered during outages',
              'Demand reduction and operational savings',
              'Smart integration with storage and controls',
            ]}
            accent="violet"
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <HybridBenefitCard title="Load Balancing" description="Combines the strengths of both solar and wind for more stable output across conditions." />
          <HybridBenefitCard title="Battery Backup" description="Stores energy for critical loads and maintains continuity during outages." />
          <HybridBenefitCard title="Lower Diesel Use" description="Cuts dependence on fossil-fuel backup systems for remote and commercial operations." />
          <HybridBenefitCard title="Smart Integration" description="Pairs efficiently with controls, inverters, and monitoring for better energy management." />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <HybridInfoPanel
            title="Why hybrid works"
            accent="emerald"
            content={[
              'Solar performs best in daylight while wind can supplement during evenings and overcast periods.',
              'Hybrid generation improves continuity and reduces seasonal mismatch.',
              'Store and dispatch power intelligently for higher reliability and savings.',
            ]}
          />
          <HybridInfoPanel
            title="Best fit for"
            accent="sky"
            content={[
              'Homes with variable seasonal loads',
              'Remote farms and rural facilities',
              'Commercial buildings with rising tariffs',
              'Microgrids, campuses, and community sites',
            ]}
          />
        </div>

        <div className="mt-8">
          <HybridTable
            rows={[
              { label: 'Residential', value: 'Solar + small wind + battery', use: 'Homes and gated communities' },
              { label: 'Agriculture', value: 'Solar + wind + pump controls', use: 'Irrigation and rural water support' },
              { label: 'Commercial', value: 'Solar + wind + storage + grid sync', use: 'Factories, campuses, and business parks' },
            ]}
          />
        </div>
      </section>
      <SolarCalculator />
    </main>
  )
}
