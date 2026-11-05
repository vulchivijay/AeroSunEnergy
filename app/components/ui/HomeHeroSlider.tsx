'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from './Slider'
import { useLocale } from '@/lib/LocaleContext'

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

export default function HomeHeroSlider() {
  const { t } = useLocale()
  const slides = t.home.heroSlider as Slide[]

  const slideClass =
    'group relative flex h-full w-full items-end justify-start overflow-hidden p-6 sm:p-8 lg:p-14 xl:p-18'

  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
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
                className={`mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${slide.badgeClass}`}
              >
                {slide.badge}
              </span>

              <h1 className="max-w-2xl text-3xl font-black leading-none tracking-[0.06em] text-white sm:text-4xl lg:text-[4rem]">
                {slide.title}
              </h1>

              <p className="mt-4 max-w-xl text-md leading-7 text-slate-100/95 sm:text-base lg:text-lg">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {slide.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-white/15 bg-slate-950/50 px-3 py-1.5 text-[12px] uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${slide.chipClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
