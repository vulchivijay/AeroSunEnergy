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
    <div className="relative z-10 w-full min-w-0 max-w-3xl rounded-[24px] border border-white/15 bg-slate-950/40 p-4 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.9)] backdrop-blur-[3px] sm:rounded-[28px] sm:p-6 lg:p-8">
      <span className={`mb-4 inline-flex max-w-full whitespace-normal break-words rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-[12px] sm:tracking-[0.28em] ${slide.badgeClass}`}>
        {slide.badge}
      </span>
      <h1 className="max-w-2xl break-words text-3xl font-black leading-tight tracking-[0.01em] text-white sm:text-4xl sm:leading-none sm:tracking-[0.06em] lg:text-[4rem]">
        {slide.title}
      </h1>
      <p className="mt-4 max-w-xl break-words text-sm leading-6 text-slate-100 sm:text-sm sm:leading-7 lg:text-lg">
        {slide.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className={`max-w-full whitespace-normal break-words rounded-full border border-white/15 bg-slate-950/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-[12px] sm:tracking-[0.2em] ${slide.chipClass}`}
          >
            {tag}
          </span>
        ))}
      </div>
      {actions && <div className="mt-7 flex flex-wrap items-center gap-3 [&>*]:max-w-full [&>*]:whitespace-normal">{actions}</div>}
    </div>
  )
}
