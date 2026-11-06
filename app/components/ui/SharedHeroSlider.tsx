'use client'

import Slider from './Slider'
import OptimizedImage from './OptimizedImage'
import { HeroSlideContent, type HeroSlideData } from './HeroSlideContent'

export type HeroSliderSlide = HeroSlideData & {
  panelClass: string
}

export function SharedHeroSlider({
  slides,
  ariaLabel,
  interval = 5000,
}: {
  slides: HeroSliderSlide[]
  ariaLabel: string
  interval?: number
}) {
  const slideOverlay =
    'absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.32),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.78)_0%,rgba(15,23,42,0.6)_40%,rgba(15,23,42,0.28)_100%)]'

  return (
    <Slider autoplay interval={interval} pauseOnHover ariaLabel={ariaLabel}>
      {slides.map((slide, index) => (
        <div key={slide.title} className={`${slide.panelClass} relative min-h-[clamp(480px,56vw,760px)] w-full`}>
          <div className="absolute inset-0">
            <OptimizedImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              className="object-cover object-center"
              style={{ filter: 'saturate(1.12) brightness(0.68)' }}
            />
          </div>
          <div className={`${slideOverlay} absolute inset-0`} />
          <div className="group relative flex min-h-[clamp(480px,56vw,760px)] w-full items-end justify-start p-4 sm:p-8 lg:p-14 xl:p-18">
            <HeroSlideContent slide={slide} />
          </div>
        </div>
      ))}
    </Slider>
  )
}
