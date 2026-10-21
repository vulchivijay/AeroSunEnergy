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
]

export default function HomeHeroSlider() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <Slider autoplay interval={5000} pauseOnHover>
      {slides.map((slide) => (
        <div key={slide.title} className={`${slide.panelClass} relative h-full w-full overflow-hidden`}>
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
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
