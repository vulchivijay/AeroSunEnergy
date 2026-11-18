import type { ReactNode } from 'react'

export type HeroSlideData = {
  badge: string
  title: string
  description: string
  tags: string[]
  image: string
  badgeClass: string
  chipClass: string
}

export function HeroSlideContent({
  slide,
  actions,
  variant = 'dark',
}: {
  slide: HeroSlideData
  actions?: ReactNode
  variant?: 'dark' | 'light' | 'premium'
}) {
  const isLight = variant === 'light'
  const isPremium = variant === 'premium'

  return (
    <div className={`relative z-10 w-full min-w-0 rounded-2xl p-4 shadow-sm backdrop-blur-[3px] sm:p-6 ${isLight ? '' : isPremium ? 'grid grid-cols-1 gap-0 lg:p-12' : 'lg:p-8 shadow-slate-950/20'}`}>
      <div className={isPremium ? 'lg:pr-2' : ''}>
        <span className={`slider-reveal-badge mb-4 inline-flex max-w-full whitespace-normal break-words rounded-full border px-3 py-1 text-sm uppercase tracking-[0.16em] shadow-sm sm:text-[12px] sm:tracking-[0.28em] ${isLight ? 'border-transparent bg-transparent text-black' : isPremium ? 'border-[#137c63]/15 bg-[#137c63]/8 text-[#0f5f4b]' : `border-white/15 bg-white/10 text-white ${slide.badgeClass}`}`}>
          {slide.badge}
        </span>
        <h1 className={`slider-reveal-title text-3xl font-black leading-tight tracking-[0.01em] sm:text-4xl sm:leading-none sm:tracking-[0.06em] ${isLight ? 'text-black lg:text-[4.25rem]' : isPremium ? 'max-w-[660px] text-[#102b28] lg:text-[30px] lg:leading-tight lg:tracking-[-0.02em]' : 'text-white lg:text-[4.25rem]'}`}>
          {slide.title}
        </h1>
      </div>
      <div>
        <p className={`slider-reveal-description mt-4 max-w-xl break-words text-sm leading-6 sm:text-sm sm:leading-7 lg:text-lg ${isLight ? 'text-black' : isPremium ? 'text-slate-700 lg:leading-8' : 'text-slate-100'}`}>
          {slide.description}
        </p>
        <div className="slider-reveal-tags mt-6 flex flex-wrap gap-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className={`max-w-full whitespace-normal break-words rounded-full border px-3 py-1.5 text-sm uppercase tracking-[0.12em] shadow-sm sm:text-[12px] sm:tracking-[0.2em] ${isLight ? 'border-transparent bg-transparent text-black' : isPremium ? 'border-[#137c63]/12 bg-white/65 text-[#246052]' : `border-white/15 bg-slate-950/50 text-white ${slide.chipClass}`}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {actions && <div className="slider-reveal-actions mt-7 flex flex-wrap items-center gap-3 [&>*]:max-w-full [&>*]:whitespace-normal">{actions}</div>}
      </div>
    </div>
  )
}
