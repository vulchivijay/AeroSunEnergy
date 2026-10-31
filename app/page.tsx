import { BankEMICalculator } from './components/forms/BankEMICalculator'
import { SolarEstimation } from './components/forms/SolarEstimation'
import About from './components/sections/About'
import {
  BenefitCard,
  CapacityTable,
  FeatureCard,
  HomeHeroSlider,
  HybridBenefitCard,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
  InfoPanel,
  SchemeBanner,
  SectionEyebrow,
  WindBenefitCard,
  WindCapacityTable,
  WindFeatureCard,
  WindInfoPanel,
  WindSectionEyebrow,
} from './components/ui'

function RecognitionHighlight() {
  const recognitions = [
    {
      title: 'Udyam / MSME',
      subtitle: 'Recognized enterprise',
      badge: 'Certified',
      icon: '🏛️',
      accent: 'bg-[#20A44A]/38',
      glow: 'shadow-[0_0_30px_rgba(32,164,74,0.38)]',
      ring: 'border-[#90d2a2]',
      text: 'Micro, Small & Medium Enterprise recognition supporting growth-ready clean energy operations.',
    },
    {
      title: 'DPIIT Startup India',
      subtitle: 'Startup recognition',
      badge: 'Approved',
      icon: '🚀',
      accent: 'bg-[#f59e0b]/38',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.38)]',
      ring: 'border-[#e6b35d]',
      text: 'Official startup recognition for innovation-led renewable energy entrepreneurship and expansion.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#f7f9f5] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className='mx-auto max-w-7xl '>
        <div className="relative overflow-hidden rounded-[38px] border border-[#cfe8d2] bg-[radial-gradient(circle_at_top_left,rgba(13,122,53,0.2),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(183,95,0,0.2),transparent_22%),linear-gradient(135deg,#eaf6ee_0%,#d7ecdf_35%,#fdf1d8_100%)] shadow-[0_32px_90px_-40px_rgba(13,122,53,0.45)]">
          <div className="absolute -left-16 top-7 h-52 w-52 rounded-full bg-[#20A44A]/50 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-[#F59E0B]/50 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,37,31,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,37,31,0.06)_1px,transparent_1px)] bg-size-[34px_34px]" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between lg:p-8">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-amber-500 text-[10px] font-black uppercase tracking-[0.38em] text-[#ffffff] py-1 px-2">Recognition</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.07em] text-[#18251F] sm:text-4xl">
                Government-backed credibility for a fast-moving clean energy brand
              </h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d9f0df] bg-white/80 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.28em] text-[#1d5f3f] backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#20A44A] shadow-[0_0_18px_rgba(32,164,74,0.9)]" />
              Verified credentials
            </div>
          </div>
          <div className="relative z-10 grid gap-5 p-5 pb-7 sm:p-6 lg:grid-cols-[1.1fr_1.1fr] lg:p-8 lg:pb-10">
            {recognitions.map((item) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[30px] border bg-white/80 p-5 shadow-[0_20px_45px_-30px_rgba(24,37,31,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-30px_rgba(24,37,31,0.45)] ${item.ring}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${item.accent}`} />
                <div className="flex items-center justify-between gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${item.accent} text-2xl text-white ${item.glow}`}>
                    {item.icon}
                  </div>
                  <span className={`rounded-full border border-[#e7f4ea] ${item.accent} px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#18251F]`}>
                    {item.badge}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="text-2xl font-black tracking-tighter text-[#18251F]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#335247]">{item.subtitle}</p>
                </div>
                <div className="mt-5 rounded-2xl border border-[#e9efe9] bg-[#f8faf8] p-3 text-sm leading-6 text-[#234136]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HomeHeroSlider />
      <SchemeBanner />
      <RecognitionHighlight />
      <About />
      {/* Solar Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="mb-8">
          <SectionEyebrow>What We Offer</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
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

        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Rooftop Solar</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
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

        <div className="mt-12 rounded-4xl border border-slate-200 bg-white p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>System Types</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
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

        <div className="mt-12 rounded-4xl border border-slate-200 bg-slate-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Why Solar</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
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

        <div className="mt-12 rounded-4xl border border-emerald-200 bg-emerald-50 p-6 lg:p-8">
          <div className="mb-6">
            <SectionEyebrow>Government of India Scheme</SectionEyebrow>
            <h3 className="mt-3 text-3xl font-black tracking-tighter text-slate-900">
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
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
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
          <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-900 sm:text-4xl">
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
      <SolarEstimation />
      <BankEMICalculator />
    </main>
  )
}
