import { getSliderImagePath } from "@/lib/sliderImages";
import type { HeroSliderSlide } from "@/app/components/ui/SharedHeroSlider";
import { OptimizedImage } from "@/app/components/ui";
import { TrustRibbon } from "@/app/components/ui/TrustRibbon";
import type { Translations } from '@/lib/LocaleContext';

export function WindEnergyHeroSections({ t }: { t: Translations }) {
  const windPage = t.windPage

  const windSlidesLocalized: HeroSliderSlide[] = windPage.hero.slides.map((slide, index) => ({
      ...slide,
      image: getSliderImagePath(index + 7),
    }))
  return (
    <>
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {windSlidesLocalized[0] && (
          <OptimizedImage
            src={windSlidesLocalized[0].image}
            alt={windSlidesLocalized[0].title}
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
              {windPage.hero.eyebrow}
            </span>
          </div>
          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {windPage.hero.title}
                <span className="block text-amber-200">{windPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {windPage.hero.subtitle}
              </p>
            </div>
            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <div className="flex items-center justify-between gap-5">
                <>
                  <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{windPage.hero.resourceFirst}</p>
                  <p className="mt-3 text-white text-lg font-semibold tracking-normal leading-snug">{windPage.hero.siteDesigned}</p>
                </>
                <svg viewBox="0 0 180 190" fill="none" className="h-32 w-28 shrink-0 text-sky-300 sm:h-40 sm:w-36" aria-hidden="true">
                  <path d="M92 80v101M80 181h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="92" cy="79" r="6" fill="currentColor" />
                  <path d="M92 73 83 16q-2-12 8-7l9 54M98 80l51-26q11-6 10 5l-4 9-51 17M89 84 47 124q-9 9-13-1l-2-10 48-36" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                  <path d="M18 45c20-12 35-12 51 0M10 61c18-10 31-10 46 0M126 136c14-8 25-8 38 0M130 151c12-7 21-7 32 0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" opacity=".8" />
                  <circle cx="92" cy="79" r="54" stroke="currentColor" strokeDasharray="3 7" opacity=".28" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/20">
            {windPage.hero.variants.map((variant, index) => (
              <div key={variant.label} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{variant.label}</p>
                <p className="mt-1 text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{variant.detail}</p>
              </div>
                  ))}
          </div>
        </div>
      </header>
      <TrustRibbon />
    </>
  )
}
