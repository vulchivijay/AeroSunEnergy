import Image from 'next/image'
import Slider from './Slider'

type Slide = {
  badge: string
  title: string
  description: string
  tags: string[]
  image: string
  badgeClass: string
  chipClass: string
  panelClass: string
}

const slides: Slide[] = [
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
    badge: 'Wind turbine Grid-tied',
    title: 'Wind Turbine Grid-tied',
    description:
      'Utility-connected wind generation for locations with consistent wind resource. Pros: lower grid dependence, reduced power cost, and potential net-metering benefits. Cons: generation varies with wind speed and requires site assessment.',
    tags: ['Net Metering', 'Wind-rich sites'],
    image: '/images/slider/slider-7.png',
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Wind turbine Off-grid autonomy',
    title: 'Wind Turbine Off-grid (Standalone)',
    description:
      'Standalone wind systems with battery storage for remote homes, farms, telecom towers, and water pumping. Pros: off-grid power independence and reliable generation where grid access is limited. Cons: storage sizing and wind variability must be planned carefully.',
    tags: ['Battery Storage', 'Remote Power'],
    image: '/images/slider/slider-8.png',
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Hybrid Wind Turbine resilience',
    title: 'Hybrid Wind Turbine (Grid + Battery)',
    description:
      'Wind energy paired with batteries and grid connection for resilient, flexible power supply. Pros: backup during outages, better energy management, and reduced dependence on utility supply. Cons: more complex controls and higher capital outlay than a grid-only design.',
    tags: ['Backup Ready', 'Smart Control'],
    image: '/images/slider/slider-9.png',
    badgeClass: 'text-pink-100',
    chipClass: 'text-pink-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Solar + Wind Grid-tied',
    title: 'Solar + Wind Grid-tied',
    description:
      'Combined solar and wind generation connected to the utility for diversified renewable output. Pros: stronger annual production, reduced grid reliance, and better performance across changing weather conditions. Cons: balanced design and site evaluation are essential for optimal results.',
    tags: ['Diversified Output', 'Net Metering'],
    image: '/images/slider/slider-13.png',
    badgeClass: 'text-sky-100',
    chipClass: 'text-sky-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Solar + Wind Off-grid autonomy',
    title: 'Off-grid (Standalone)',
    description:
      'Standalone solar-wind hybrid systems with storage for sites without grid access. Pros: full energy independence, strong resilience, and reliable supply for remote operations. Cons: requires careful load planning, storage sizing, and generation balance.',
    tags: ['Energy Independence', 'Hybrid Storage'],
    image: '/images/slider/slider-14.png',
    badgeClass: 'text-emerald-100',
    chipClass: 'text-emerald-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
  {
    badge: 'Solar + Wind Hybrid resilience',
    title: 'Solar + Wind Hybrid (Grid + Battery)',
    description:
      'Integrated hybrid generation with solar, wind, batteries, and optional grid support. Pros: resilient power, improved demand management, and greater backup capability. Cons: advanced controls and a higher upfront investment than single-source systems.',
    tags: ['Hybrid Resilience', 'Battery Backup'],
    image: '/images/slider/slider-15.png',
    badgeClass: 'text-pink-100',
    chipClass: 'text-pink-50',
    panelClass: 'bg-linear-to-br from-slate-700 via-slate-800 to-slate-950',
  },
]

export default function HomeHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <Slider autoplay interval={5000} pauseOnHover>
      {slides.map((slide, index) => (
        <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1400px"
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
