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
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`inline-flex h-2 w-2 items-center justify-center rounded-full ${dotClassName}`} aria-hidden="true" />
      <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${labelClassName}`}>{children}</p>
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
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <span className={`text-[11px] font-bold uppercase tracking-[0.2em] ${featureClassName}`}>{label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80">{icon}</span>
      </div>
      <h3 className={`text-2xl font-black ${titleClassName}`}>{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {points.length > 0 && (
        <ul className="mt-5 divide-y divide-slate-200 text-sm text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${pointIconClassName}`}>✓</span>
              <span className="leading-6">{point}</span>
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
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${iconClassName}`}>✓</div>
        <div>
          <h3 className={`text-lg font-bold ${titleClassName}`}>{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
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
    <div className={`border-t border-slate-200 pt-5 ${themeClassName}`}>
      <div className="mb-3 flex items-center gap-3">
        <ContentCheckIcon backgroundClassName={checkBackgroundClassName} />
        <h3 className={`text-lg font-bold ${titleClassName}`}>{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
