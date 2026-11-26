import { getSliderImagePath } from '@/lib/sliderImages';
import type { HeroSliderSlide } from '@/app/components/ui/SharedHeroSlider';
import { OptimizedImage } from '@/app/components/ui';
import { TrustRibbon } from '@/app/components/ui/TrustRibbon';
import type { Translations } from '@/lib/LocaleContext';

export function SolarHeroSections({ t }: { t: Translations }) {
  const solarPage = t.solarPage

  const solarSlidesLocalized: HeroSliderSlide[] = solarPage.hero.slides.map((slide, index) => ({
      ...slide,
      image: getSliderImagePath(index + 1),
    }))
  return (
    <>
      <header className="relative isolate min-h-[620px] overflow-hidden bg-[#102a43] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 -z-10">
          {solarSlidesLocalized[0] && (
          <OptimizedImage
            src={solarSlidesLocalized[0].image}
            alt={solarSlidesLocalized[0].title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
                )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,25,47,0.94)_0%,rgba(22,48,82,0.78)_52%,rgba(22,48,82,0.28)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/80 via-transparent to-[#102a43]/25" />
        </div>

        <div className="mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 uppercase text-white/90 backdrop-blur-md text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
              {solarPage.hero.eyebrow}
            </span>
          </div>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {solarPage.hero.title}
                <span className="block text-amber-200">{solarPage.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {solarPage.hero.subtitle}
              </p>
            </div>

            <div className="relative max-w-md rounded-xl border border-slate-700 bg-[#102a43]/65 p-5 backdrop-blur-lg sm:p-6 lg:ml-auto">
              <p className="inline-flex w-fit rounded-full border border-amber-300/25 bg-white/10 px-3 py-1.5 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{solarPage.hero.lead}</p>
              <p className="mt-3 text-white text-lg font-semibold tracking-normal leading-snug">{solarPage.hero.pathway}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/20">
            {solarPage.hero.options.map(({ name, detail }, index) => (
              <div key={name} className="flex flex-col justify-center px-2 py-2 sm:px-5 sm:first:pl-0">
                <span className="font-mono text-sm text-amber-200 tabular-nums">0{index + 1}</span>
                <p className="mt-1 text-white text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{name}</p>
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
