import type { ReactNode } from 'react'

export function ContentSectionEyebrow({
  children,
  className,
  dotClassName,
  labelClassName,
}: {
  children: ReactNode
  className: string
  dotClassName: string
  labelClassName: string
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 ${className}`}>
      <span className={`inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ${dotClassName}`} aria-hidden="true" />
      <p className={`text-[12px] font-black uppercase tracking-[0.24em] ${labelClassName}`}>{children}</p>
    </div>
  )
}

export function ContentCheckIcon({ backgroundClassName }: { backgroundClassName: string }) {
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-inner ${backgroundClassName}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
        <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function ContentFeatureCard({
  title,
  description,
  points,
  label,
  icon,
  cardClassName,
  featureClassName,
  titleClassName,
  pointIconClassName,
}: {
  title: string
  description: string
  points: string[]
  label: string
  icon: ReactNode
  cardClassName: string
  featureClassName: string
  titleClassName: string
  pointIconClassName: string
}) {
  return (
    <article className={cardClassName}>
      <div className={`mb-5 flex items-center justify-between gap-4 rounded-2xl border px-3 py-2 ${featureClassName}`}>
        <span className="text-[12px] font-black uppercase tracking-[0.24em]">{label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5">{icon}</span>
      </div>
      <h3 className={`text-2xl font-black ${titleClassName}`}>{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-700">{description}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-3 text-sm text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl bg-slate-50/80 p-2.5">
              <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[12px] font-black ${pointIconClassName}`}>✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function ContentBenefitCard({
  title,
  description,
  cardClassName,
  iconClassName,
  titleClassName,
}: {
  title: string
  description: string
  cardClassName: string
  iconClassName: string
  titleClassName: string
}) {
  return (
    <div className={cardClassName}>
      <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black ${iconClassName}`}>✓</div>
      <h3 className={`text-xl font-black ${titleClassName}`}>{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{description}</p>
    </div>
  )
}

export function ContentInfoPanel({
  title,
  content,
  themeClassName,
  checkBackgroundClassName,
  titleClassName,
}: {
  title: string
  content: string[]
  themeClassName: string
  checkBackgroundClassName: string
  titleClassName: string
}) {
  return (
    <div className={`rounded-[1.8rem] border p-5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] ${themeClassName}`}>
      <div className="mb-3 flex items-center gap-3">
        <ContentCheckIcon backgroundClassName={checkBackgroundClassName} />
        <h3 className={`text-xl font-black ${titleClassName}`}>{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-7">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
