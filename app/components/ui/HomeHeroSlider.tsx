'use client'

import Link from 'next/link'
import Slider from './Slider'
import { useLocale } from '@/lib/LocaleContext'
import { HeroSlideContent, type HeroSlideData } from './HeroSlideContent'

type Slide = HeroSlideData & { panelClass: string }

export default function HomeHeroSlider() {
  const { t } = useLocale()
  const slides = t.home.heroSlider as Slide[]

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide) => (
        <div key={slide.title} className="relative h-[clamp(640px,56vw,760px)] w-full bg-gradient-to-br from-white to-[#f1f2f6]">
          <div className="group relative flex h-[clamp(640px,56vw,760px)] w-full items-end justify-start p-4 sm:p-8 lg:p-14 xl:p-18">
            <HeroSlideContent
              slide={slide}
              actions={
                <>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="rounded-full bg-indigo-700 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-indigo-800"
                >
                  {t.hero.buttons.quote}
                </Link>
                <Link
                  href="/solar-calculator"
                  className="rounded-full border border-indigo-900/20 bg-white/50 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-indigo-950 transition hover:bg-white/80"
                >
                  {t.hero.buttons.estimateSavings}
                </Link>
                </>
              }
              variant="light"
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}
