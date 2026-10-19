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
import { Slider } from './components/ui'
import About from './components/sections/About'

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
  {
    badge: 'Horizontal-axis wind',
    title: 'Horizontal-Axis Wind Turbines (HAWT)',
    description:
      'Three-blade propeller turbines designed for efficient wind capture, common in commercial and utility-scale deployments where consistent wind resource is available.',
    tags: ['High efficiency', 'Utility-scale', 'Directional alignment'],
    image: '/images/slider/slider-7.png',
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Vertical-axis wind',
    title: 'Vertical-Axis Wind Turbines',
    description:
      'Rotor designs that accept wind from multiple directions, useful in compact sites and noise-sensitive areas where simplicity and adaptability matter.',
    tags: ['Multi-directional', 'Compact footprint', 'Flexible siting'],
    image: '/images/slider/slider-8.png',
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Grid-connected power',
    title: 'Grid-connected system wind energy',
    description:
      'Wind generation tied to the utility network allows energy offset, reduced demand charges, and smoother integration with local grid infrastructure.',
    tags: ['Net metering', 'Grid tied', 'On-site generation'],
    image: '/images/slider/slider-9.png',
    badgeClass: 'text-cyan-100',
    chipClass: 'text-cyan-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Independent power',
    title: 'Off-grid system',
    description:
      'Standalone wind systems with battery support provide independent electricity for remote homes, telecom stations, and sites without reliable utility access.',
    tags: ['Battery backup', 'Remote-ready', 'Autonomous supply'],
    image: '/images/slider/slider-10.png',
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Battery storage',
    title: 'Wind–battery',
    description:
      'Energy storage pairs with wind generation to smooth output, supply power during calm periods, and improve efficiency for critical or irregular loads.',
    tags: ['Load shifting', 'Backup reserve', 'Stability support'],
    image: '/images/slider/slider-11.png',
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Scalable power',
    title: 'Below 1 kW, 1–10 kW, 10–100 kW, 100 kW–1 MW, 1 MW',
    description:
      'Wind systems scale across micro, small, medium, commercial, and utility-size categories to match load demand, site conditions, and operating goals.',
    tags: ['Micro to utility', 'Right-sized system', 'Capacity planning'],
    image: '/images/slider/slider-12.png',
    badgeClass: 'text-orange-100',
    chipClass: 'text-orange-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Home hybrid',
    title: 'Residential solar-wind hybrid systems',
    description:
      'Hybrid systems combine solar PV with wind generation to improve energy resilience at homes and residential communities with seasonal or variable generation patterns.',
    tags: ['Home resilience', 'Solar + wind', 'Reduced dependence'],
    image: '/images/slider/slider-13.png',
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Farm hybrid',
    title: 'Agricultural solar-wind hybrid systems',
    description:
      'Farm-ready hybrid systems support irrigation, cold storage, pumps, and rural operations by combining solar generation with wind power and backup storage.',
    tags: ['Agriculture use', 'Water pumping', 'Rural reliability'],
    image: '/images/slider/slider-14.png',
    badgeClass: 'text-amber-100',
    chipClass: 'text-amber-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Commercial backup',
    title: 'Off-grid commercial hybrid systems',
    description:
      'Independent hybrid power plants for commercial operations provide continuity, reduce diesel dependence, and support critical loads in remote or unstable areas.',
    tags: ['Critical loads', 'Off-grid', 'Business continuity'],
    image: '/images/slider/slider-15.png',
    badgeClass: 'text-rose-100',
    chipClass: 'text-rose-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Business grid',
    title: 'Commercial grid-connected hybrid systems',
    description:
      'Grid-linked hybrid systems pair solar and wind with storage to manage peak demand, lower utility costs, and improve operational resilience for businesses.',
    tags: ['Demand reduction', 'Grid-linked', 'Business savings'],
    image: '/images/slider/slider-16.png',
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Microgrid network',
    title: 'Hybrid microgrids',
    description:
      'Localized energy networks connect multiple generation sources, storage, and loads to maintain power stability for communities, campuses, and industrial sites.',
    tags: ['Local resilience', 'Multiple sources', 'Smart control'],
    image: '/images/slider/slider-17.png',
    badgeClass: 'text-violet-100',
    chipClass: 'text-violet-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
]

export default function Home() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <main>
      <Slider autoplay interval={4500} pauseOnHover>
        {slides.map(
          ({ badge, title, description, tags, image, badgeClass, chipClass, panelClass }) => (
            <div
              key={title}
              className={`${slideClass} ${panelClass}`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.44), rgba(51,65,85,0.24)), url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className={slideOverlay} aria-hidden="true" />
              <div className="relative z-10 max-w-2xl rounded-lg bg-black/24 p-6 backdrop-blur-md">
                <span
                  className={`mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] ${badgeClass} backdrop-blur-sm`}
                >
                  {badge}
                </span>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
                <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg ${chipClass}/90`}>
                  {description}
                </p>
                <div className={`mt-7 flex flex-wrap gap-3 text-sm ${chipClass}`}>
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
      <About />
      {/* <Hero />
      <HowItWorks />
      <Features />
      <SavoniusRotor />
      <UseCases />
      <Benefits />
      <WindGenerators />
      <Services />
      <WhyChooseUs />
      <CTASection /> */}
    </main>
  )
}
