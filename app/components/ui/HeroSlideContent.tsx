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
}: {
  slide: HeroSlideData
  actions?: ReactNode
}) {
  return (
    <div className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/15 bg-slate-950/30 p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-[3px] sm:p-6 lg:p-8">
      <span className={`mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] uppercase tracking-[0.28em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ${slide.badgeClass}`}>
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
      {actions && <div className="mt-7 flex flex-wrap items-center gap-3">{actions}</div>}
    </div>
  )
}
