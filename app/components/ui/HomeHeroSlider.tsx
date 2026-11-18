'use client'

import Link from 'next/link'
import { getSliderImagePath } from '@/lib/sliderImages'
import Slider from './Slider'
import { useLocale } from '@/lib/LocaleContext'
import OptimizedImage from './OptimizedImage'
import { HeroSlideContent, type HeroSlideData } from './HeroSlideContent'

type Slide = HeroSlideData & { panelClass: string }
const homeSlideImageNumbers = [1, 2, 3, 7, 8, 9, 13, 14, 15]

export default function HomeHeroSlider() {
  const { t } = useLocale()
  const slides: Slide[] = t.home.heroSlider.map((slide, index) => {
    const imageNumber = homeSlideImageNumbers[index]
    if (imageNumber === undefined) {
      throw new Error(`Missing image mapping for home hero slide ${index + 1}`)
    }

    return { ...slide, image: getSliderImagePath(imageNumber) }
  })

  return (
    <Slider autoplay interval={5000} pauseOnHover ariaLabel={t.home.heroSliderAriaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className="relative h-[clamp(640px,56vw,760px)] w-full overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6]">
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.78)_32%,rgba(255,255,255,0.18)_68%,rgba(255,255,255,0.04)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[52%] bg-[radial-gradient(circle_at_12%_78%,rgba(32,164,74,0.16),transparent_34%),radial-gradient(circle_at_48%_18%,rgba(14,165,233,0.10),transparent_28%)]" />
          <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex" aria-hidden="true">
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_16px_rgba(245,158,11,0.8)]" />
            <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#137c63]/50 to-transparent" />
          </div>
          <div className="group relative flex h-[clamp(640px,56vw,760px)] w-full items-center justify-start p-4 sm:p-8 lg:pl-[9vw] lg:pr-[7vw]">
            <div className="relative w-full max-w-[1000px] overflow-hidden rounded-[28px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(244,250,246,0.82))] shadow-[0_28px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#20a44a_0%,#20a44a_48%,#0ea5e9_48%,#0ea5e9_76%,#f59e0b_76%,#f59e0b_100%)] before:content-[''] after:absolute after:-right-14 after:-top-16 after:h-36 after:w-36 after:rounded-full after:border after:border-[#137c63]/10 after:content-[''] lg:w-[88%] lg:max-w-[860px]">
              <div className="absolute right-5 top-6 h-14 w-14 rounded-full border border-[#20a44a]/15 sm:h-20 sm:w-20" aria-hidden="true" />
              <div className="absolute right-10 top-11 h-2.5 w-2.5 rounded-full bg-[#20a44a]/70 shadow-[0_0_18px_rgba(32,164,74,0.5)] sm:right-13 sm:top-15" aria-hidden="true" />
              <HeroSlideContent
                slide={slide}
                actions={
                  <>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="rounded-full bg-[#137c63] px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(19,124,99,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0f5f4b]"
                  >
                    {t.hero.buttons.quote}
                  </Link>
                  <Link
                    href="/solar-calculator"
                    className="rounded-full border border-[#137c63]/20 bg-white/70 px-5 py-3 text-md font-black uppercase tracking-[0.18em] text-[#102b28] transition hover:-translate-y-0.5 hover:border-[#137c63]/40 hover:bg-white"
                  >
                    {t.hero.buttons.estimateSavings}
                  </Link>
                  </>
                }
                variant="premium"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
