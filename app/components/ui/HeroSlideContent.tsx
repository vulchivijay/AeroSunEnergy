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
  variant?: 'dark' | 'light'
}) {
  const isLight = variant === 'light'

  return (
    <div className={`relative z-10 w-full min-w-0 max-w-auto rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm backdrop-blur-[3px] ${isLight ? '' : ' shadow-slate-950/20'}`}>
      <span className={`mb-4 inline-flex max-w-full whitespace-normal break-words rounded-full border px-3 py-1 text-sm uppercase tracking-[0.16em] shadow-sm sm:text-[12px] sm:tracking-[0.28em] ${isLight ? 'border-transparent bg-transparent text-black' : `border-white/15 bg-white/10 text-white ${slide.badgeClass}`}`}>
        {slide.badge}
      </span>
      <h1 className={`text-3xl font-black leading-tight tracking-[0.01em] sm:text-4xl sm:leading-none sm:tracking-[0.06em] lg:text-[4rem] ${isLight ? 'text-black' : 'text-white'}`}>
        {slide.title}
      </h1>
      <p className={`mt-4 max-w-xl break-words text-sm leading-6 sm:text-sm sm:leading-7 lg:text-lg ${isLight ? 'text-black' : 'text-slate-100'}`}>
        {slide.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className={`max-w-full whitespace-normal break-words rounded-full border px-3 py-1.5 text-sm uppercase tracking-[0.12em] shadow-sm sm:text-[12px] sm:tracking-[0.2em] ${isLight ? 'border-transparent bg-transparent text-black' : `border-white/15 bg-slate-950/50 text-white ${slide.chipClass}`}`}
          >
            {tag}
          </span>
        ))}
      </div>
      {actions && <div className="mt-7 flex flex-wrap items-center gap-3 [&>*]:max-w-full [&>*]:whitespace-normal">{actions}</div>}
    </div>
  )
}
