'use client'

import Link from 'next/link'
import Slider from './Slider'
import { useLocale } from '@/lib/LocaleContext'
import { HeroSlideContent, type HeroSlideData } from './HeroSlideContent'

type Slide = HeroSlideData & { panelClass: string }

const slideBackgrounds = [
  'bg-linear-to-br from-[#0b3d3a] via-[#0f766e] to-[#17324d]',
  'bg-linear-to-br from-[#102a43] via-[#1d4e6f] to-[#0b3c5d]',
  'bg-linear-to-br from-[#134e4a] via-[#2b766c] to-[#1b3d4f]',
  'bg-linear-to-br from-[#1e3a5f] via-[#345b7a] to-[#17324d]',
] as const

export default function HomeHeroSlider() {
  const { t } = useLocale()
  const slides = t.home.heroSlider as Slide[]

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.36)_0%,rgba(15,23,42,0.2)_45%,rgba(15,23,42,0.1)_100%)]'

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className={`${slideBackgrounds[index % slideBackgrounds.length]} relative h-[clamp(640px,56vw,760px)] w-full`}>
          <div className={`${slideOverlay} absolute inset-0`} />

          <div className="group relative flex h-[clamp(640px,56vw,760px)] w-full items-end justify-start p-4 sm:p-8 lg:p-14 xl:p-18">
            <HeroSlideContent
              slide={slide}
              actions={
                <>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="rounded-full bg-emerald-500 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-emerald-950 shadow-sm transition hover:bg-emerald-400"
                >
                  {t.hero.buttons.quote}
                </Link>
                <Link
                  href="/solar-calculator"
                  className="rounded-full border border-white/15 bg-white/8 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12"
                >
                  {t.hero.buttons.estimateSavings}
                </Link>
                </>
              }
            />
          </div>
        </div>
      ))}
    </Slider>
  )
}
