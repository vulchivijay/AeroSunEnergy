import {
  Hero,
  HowItWorks,
  Features,
  SavoniusRotor,
  UseCases,
  Benefits,
  WindGenerators,
  Services,
  WhyChooseUs,
  CTASection,
} from '@/app/components/sections'
import { Slider } from './components/ui'

export default function Home() {
  const slideClass =
    'group relative flex h-full w-full flex-col items-start justify-center overflow-hidden p-8 text-left text-white sm:p-10 lg:p-26 xl:p-36'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_24%),linear-gradient(135deg,rgba(15,23,42,0.18),rgba(15,23,42,0.58))]'

  return (
    <main>
      <Slider autoplay interval={4500} pauseOnHover>
        <div
          className={`${slideClass} bg-linear-to-br from-sky-600 via-blue-700 to-indigo-900`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(14,116,144,0.72), rgba(37,99,235,0.65)), url('/images/slider/slider-1.png')",
            backgroundSize: 'center, cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-100 backdrop-blur-sm">
              Grid-tied rooftop
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Grid - tied Rooftop</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-sky-50/90 sm:text-lg">
              On-grid PV connected to the utility. Pros: lower cost (no batteries), net-metering, simple setup. Cons: no backup power during outages unless paired with storage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-sky-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Lower Capex</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Net Metering</span>
            </div>
          </div>
        </div>

        <div
          className={`${slideClass} bg-linear-to-br from-emerald-500 via-teal-600 to-cyan-800`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(6,95,70,0.72), rgba(8,145,178,0.62)), url('/images/slider/slider-2.png')",
            backgroundSize: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-100 backdrop-blur-sm">
              Off-grid autonomy
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Off - grid (Standalone)</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/90 sm:text-lg">
              Fully independent systems with PV + batteries + charge controller. Pros: complete autonomy for remote sites. Cons: higher upfront cost and careful energy management required.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-emerald-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Battery-backed</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Remote-ready</span>
            </div>
          </div>
        </div>

        <div
          className={`${slideClass} bg-linear-to-br from-pink-500 via-rose-600 to-red-700`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(190,24,93,0.7), rgba(220,38,38,0.62)), url('/images/slider/slider-3.png')",
            backgroundSize: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-pink-100 backdrop-blur-sm">
              Hybrid resilience
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Hybrid (Grid + Battery)</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-pink-50/90 sm:text-lg">
              PV plus battery storage with ability to work with the grid. Pros: backup power, time-shifting, demand management. Cons: more complex controls and higher cost than grid-only.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-pink-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Backup power</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Smart control</span>
            </div>
          </div>
        </div>

        <div
          className={`${slideClass} bg-linear-to-br from-amber-400 via-orange-500 to-red-600`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(180,83,9,0.72), rgba(220,38,38,0.66)), url('/images/slider/slider-4.png')",
            backgroundSize: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-50 backdrop-blur-sm">
              Storage strategy
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Solar + Storage</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-amber-50/90 sm:text-lg">
              Architectures pairing batteries with PV. DC-coupled suits new installs; AC-coupled is great for retrofits. Choose based on efficiency and retrofit needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-amber-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">DC-coupled</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Retrofit-ready</span>
            </div>
          </div>
        </div>

        <div
          className={`${slideClass} bg-linear-to-br from-slate-700 via-slate-800 to-slate-950`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(15,23,42,0.82), rgba(51,65,85,0.66)), url('/images/slider/slider-5.png')",
            backgroundSize: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-100 backdrop-blur-sm">
              Utility scale
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Commercial / Utility-scale</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100/90 sm:text-lg">
              Large ground-mounted arrays with trackers and centralized inverters. Pros: high output and economies of scale; often paired with large storage for grid services.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-100">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">High yield</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Grid support</span>
            </div>
          </div>
        </div>

        <div
          className={`${slideClass} bg-linear-to-br from-violet-700 via-indigo-800 to-slate-950`}
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(76,29,149,0.74), rgba(30,41,59,0.72)), url('/images/slider/slider-6.png')",
            backgroundSize: 'center',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={slideOverlay} aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-violet-100 backdrop-blur-sm">
              Shared energy
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Community / Microgrid</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-violet-50/90 sm:text-lg">
              Shared systems serving multiple customers or a local microgrid. Pros: pooled financing, resilience, and islanding capability; usually paired with storage and smart controls.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-violet-50">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Resilient</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">Shared value</span>
            </div>
          </div>
        </div>
      </Slider>
      <Hero />
      <HowItWorks />
      <Features />
      <SavoniusRotor />
      <UseCases />
      <Benefits />
      <WindGenerators />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}
