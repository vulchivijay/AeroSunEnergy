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
]

export default function HomeHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full items-end justify-start overflow-hidden p-6 sm:p-8 lg:p-14 xl:p-18'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

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
