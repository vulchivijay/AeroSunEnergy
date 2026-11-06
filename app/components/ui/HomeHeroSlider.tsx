'use client'

import Link from 'next/link'
import Slider from './Slider'
import { useLocale } from '@/lib/LocaleContext'
import { HeroSlideContent, type HeroSlideData } from './HeroSlideContent'
import OptimizedImage from './OptimizedImage'

type Slide = HeroSlideData & { panelClass: string }

export default function HomeHeroSlider() {
  const { t } = useLocale()
  const slides = t.home.heroSlider as Slide[]

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className={`${slide.panelClass} relative min-h-[clamp(480px,56vw,760px)] w-full`}>
          <div className="absolute inset-0">
            <OptimizedImage
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

          <div className="group relative flex min-h-[clamp(480px,56vw,760px)] w-full items-end justify-start p-4 sm:p-8 lg:p-14 xl:p-18">
            <HeroSlideContent
              slide={slide}
              actions={
                <>
                <Link
                  href="/contact"
                  className="rounded-full bg-emerald-500 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-emerald-950 shadow-[0_18px_30px_-18px_rgba(16,185,129,0.9)] transition hover:bg-emerald-400"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/estimation-calculator"
                  className="rounded-full border border-white/15 bg-white/8 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12"
                >
                  Estimate Savings
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
