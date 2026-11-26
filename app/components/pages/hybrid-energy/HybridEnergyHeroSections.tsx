import { getSliderImagePath } from "@/lib/sliderImages";
import type { HeroSliderSlide } from "@/app/components/ui/SharedHeroSlider";
import { OptimizedImage } from "@/app/components/ui";
import { TrustRibbon } from "@/app/components/ui/TrustRibbon";
import type { Translations } from '@/lib/LocaleContext';

export function HybridEnergyHeroSections({ t }: { t: Translations }) {
  const hybridPage = t.hybridPage

  const hybridSlidesLocalized: HeroSliderSlide[] = hybridPage.hero.slides.map((slide, index) => ({
      ...slide,
      image: getSliderImagePath(index + 13),
    }))
  return (
    <>
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {hybridSlidesLocalized[0] && (
          <OptimizedImage
            src={hybridSlidesLocalized[0].image}
            alt={hybridSlidesLocalized[0].title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
                )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,47,0.94)_0%,rgba(22,48,82,0.78)_52%,rgba(22,48,82,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/80 via-transparent to-[#102a43]/25" />
        </div>
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 uppercase text-white/90 backdrop-blur-md text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {hybridPage.hero.eyebrow}
            </span>
          </div>
          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {hybridPage.hero.title}
                <span className="block text-amber-200">{hybridPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {hybridPage.hero.subtitle}
              </p>
            </div>
            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <div className="flex items-center justify-between gap-3">
                <>
                  <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{hybridPage.hero.tagline}</p>
                  <p className="mt-3 text-white text-lg font-semibold tracking-normal leading-snug">{hybridPage.hero.supporting}</p>
                </>
                <span className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-3 py-2 text-xs uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.statusBalanced}</span>
              </div>
              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <svg viewBox="0 0 300 130" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 top-7 z-0 h-24 w-full text-emerald-200/50" aria-hidden="true">
                  <path d="M75 5v38q0 12 12 12h126q12 0 12 12v38M225 5v38q0 12-12 12H87q-12 0-12 12v38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" />
                </svg>
                {hybridPage.labels.sources.map(({ label, detail }, index) => (
                  <div key={label} className="relative z-10 rounded-xl border border-slate-700 bg-slate-950/25 p-3 text-center">
                    <span className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-base font-bold ${index === 0 ? 'bg-amber-300 text-slate-950' : 'bg-sky-300 text-slate-950'} tracking-normal`}>
                      {index === 0 ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42" /></svg>
                            ) : (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path d="M3 8h13a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h8" strokeLinecap="round" /></svg>
                            )}
                    </span>
                    <p className="mt-2 text-white text-sm font-normal tracking-normal leading-5">{label}</p>
                    <p className="text-slate-300 text-xs font-normal tracking-normal leading-5">{detail}</p>
                  </div>
                      ))}
                <div className="relative z-10 col-span-2 mx-auto w-full max-w-56 rounded-xl border border-emerald-200/25 bg-emerald-300/10 p-3 text-center">
                  <p className="text-emerald-100 text-sm font-normal tracking-normal leading-5">{hybridPage.labels.storageTagline}</p>
                  <p className="mt-1 text-slate-200 text-xs font-normal tracking-normal leading-5">{hybridPage.labels.storageSupporting}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
            {hybridPage.labels.deploymentModes.map(({ label, detail }, index) => (
              <div key={label} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{label}</p>
                <p className="mt-1 text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{detail}</p>
              </div>
                  ))}
          </div>
        </div>
      </header>
      <TrustRibbon />
    </>
  )
}
