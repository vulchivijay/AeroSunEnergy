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
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${checkBackgroundClassName}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
            <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={` ${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
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

import {
  Building2,
  Factory,
  HeartPulse,
  House,
  Laptop,
  Store,
  type LucideIcon,
} from 'lucide-react'

const suitableForIcons: LucideIcon[] = [House, Building2, Store, Factory, Laptop, HeartPulse]

const suitableForStyles = [
  { icon: 'bg-sky-50 text-sky-600', number: 'text-sky-500' },
  { icon: 'bg-violet-50 text-violet-600', number: 'text-violet-500' },
  { icon: 'bg-orange-50 text-orange-600', number: 'text-orange-500' },
  { icon: 'bg-violet-50 text-violet-600', number: 'text-violet-500' },
  { icon: 'bg-sky-50 text-sky-600', number: 'text-sky-500' },
  { icon: 'bg-rose-50 text-rose-600', number: 'text-rose-500' },
] as const

export function SuitableForPanel({
  title,
  content,
  titleClassName,
}: {
  title: string
  content: string[]
  titleClassName: string
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5" aria-hidden="true">
            <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={`${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {content.map((item, index) => {
          const Icon = suitableForIcons[index % suitableForIcons.length]
          const style = suitableForStyles[index % suitableForStyles.length]

          return (
            <article
              key={item}
              className="relative min-h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_32px_-20px_rgba(15,23,42,0.5)]"
            >
              <div className="flex h-full items-center gap-3 pr-1">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.icon}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="min-w-0 text-sm font-bold leading-5 text-slate-900 sm:text-base">
                  {item}
                </p>
              </div>
              <span className={`absolute bottom-2 left-3 text-[0.65rem] font-bold tabular-nums ${style.number}`} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          )
        })}
      </div>
    </div>
  )
}
