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
    <div className={`relative z-10 w-full min-w-0 rounded-xl p-4 shadow-sm backdrop-blur-[3px] sm:p-6 ${isLight ? '' : isPremium ? 'grid grid-cols-1 gap-0 lg:p-12' : 'lg:p-8'}`}>
      <div className={isPremium ? 'lg:pr-2' : ''}>
        <span className={`before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 slider-reveal-badge mb-4 inline-flex max-w-full whitespace-normal break-words rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide leading-5 shadow-sm ${isLight ? 'border-transparent bg-transparent text-black' : isPremium ? 'border-slate-200 bg-[#137c63]/8 text-[#0f5f4b]' : `border-slate-700 bg-white/10 text-white ${slide.badgeClass}`}`}>
          {slide.badge}
        </span>
        <h1 className={`slider-reveal-title text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight ${isLight ? 'text-black' : isPremium ? 'max-w-[660px] text-[#102b28]' : 'text-white'}`}>
          {slide.title}
        </h1>
      </div>
      <>
        <p className={`slider-reveal-description mt-4 max-w-xl break-words ${isLight ? 'text-black' : isPremium ? 'text-slate-700' : 'text-slate-100'}text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}>
          {slide.description}
        </p>
        <div className="slider-reveal-tags mt-6 flex flex-wrap gap-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className={`before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 max-w-full whitespace-normal break-words rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide leading-5 shadow-sm ${isLight ? 'border-transparent bg-transparent text-black' : isPremium ? 'border-[#137c63]/12 bg-white/65 text-[#246052]' : `border-slate-700 bg-slate-950/50 text-white ${slide.chipClass}`}`}
            >
              {tag}
            </span>
          ))}
        </div>
        {actions && <div className="slider-reveal-actions mt-7 flex flex-wrap items-center gap-3 [&>*]:max-w-full [&>*]:whitespace-normal">{actions}</div>}
      </>
    </div>
  )
}
