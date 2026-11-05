import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'

export type AccentTone = 'emerald' | 'amber' | 'sky' | 'violet'

const renderSolarIcon = (colorClass: string) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`h-4 w-4 ${colorClass}`} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.5v2.3M12 20.2v2.3M4.93 4.93l1.63 1.63M17.44 17.44l1.63 1.63M1.5 12h2.3M20.2 12h2.3M4.93 19.07l1.63-1.63M17.44 6.56l1.63-1.63" />
    </svg>
  )
}

const renderCheckIcon = (bgClass: string) => {
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-2xl shadow-inner ${bgClass}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
        <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f0fdfa_45%,#ffffff_100%)] px-3.5 py-2 shadow-[0_14px_26px_-20px_rgba(16,185,129,0.9)]">
      <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-lime-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" aria-hidden="true" />
      <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700">{children}</p>
    </div>
  )
}

export function FeatureCard({
  title,
  description,
  points,
  accent,
}: {
  title?: string
  description?: string
  points?: string[]
  accent?: AccentTone
}) {
  const { t } = useLocale()
  const componentData = t.componentData.solarContentBlocks
  const defaultFeature = componentData.defaultFeature
  const accentIds: Record<string, AccentTone> = {
    emerald: 'emerald',
    amber: 'amber',
    sky: 'sky',
    violet: 'violet',
  }
  const featureAccent = accent ?? accentIds[defaultFeature.accent]
  const featureTitle = title ?? defaultFeature.title
  const featureDescription = description ?? defaultFeature.description
  const featurePoints = points ?? defaultFeature.points

  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(16,185,129,0.3)]">
      <div className={`mb-5 flex items-center justify-between gap-4 rounded-2xl border px-3 py-2 ${componentData.featureClasses[featureAccent]}`}>
        <span className="text-[12px] font-black uppercase tracking-[0.24em]">Solar solution</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 shadow-sm ring-1 ring-black/5">
          {renderSolarIcon(componentData.iconColors[featureAccent])}
        </span>
      </div>
      <h3 className="text-2xl font-black tracking-[0.05em] text-slate-900">{featureTitle}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{featureDescription}</p>
      {featurePoints.length > 0 && (
        <ul className="mt-5 space-y-3 text-base text-slate-700">
          {featurePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-xl bg-slate-50/80 p-2.5">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[12px] font-black text-emerald-700">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function BenefitCard({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  const { t } = useLocale()
  const defaults = t.componentData.solarContentBlocks.defaultBenefit

  return (
    <div className="rounded-[1.7rem] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(16,185,129,0.45)]">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/20">
        ✓
      </div>
      <h3 className="text-xl font-black tracking-[0.04em] text-slate-900">{title ?? defaults.title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-700">{description ?? defaults.description}</p>
    </div>
  )
}

export function SubsidyCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="rounded-[1.8rem] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(16,185,129,0.45)]">
      <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <div className="mt-4 text-3xl font-black tracking-[0.05em] text-slate-900">{value}</div>
      <p className="mt-3 text-md leading-6 text-slate-600">{note}</p>
    </div>
  )
}

export function InfoPanel({
  title,
  content,
  accent,
}: {
  title?: string
  content?: string[]
  accent?: 'emerald' | 'amber' | 'sky'
}) {
  const { t } = useLocale()
  const componentData = t.componentData.solarContentBlocks
  const defaultInfo = componentData.defaultInfo
  const accentIds: Record<string, 'emerald' | 'amber' | 'sky'> = {
    emerald: 'emerald',
    amber: 'amber',
    sky: 'sky',
  }
  const infoAccent = accent ?? accentIds[defaultInfo.accent]
  const infoTitle = title ?? defaultInfo.title
  const infoContent = content ?? defaultInfo.content

  return (
    <div className={`rounded-[1.8rem] border p-5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] ${componentData.infoThemes[infoAccent]}`}>
      <div className="mb-3 flex items-center gap-3">
        {renderCheckIcon(componentData.checkBackgrounds[infoAccent])}
        <h3 className="text-xl font-black tracking-[0.04em]">{infoTitle}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-base leading-7">
        {infoContent.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CapacityTable() {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-[1.9rem] border border-emerald-200 bg-white shadow-[0_20px_34px_-24px_rgba(16,185,129,0.3)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <div className="min-w-[620px]">
        <div className="grid border-b border-emerald-100 bg-[linear-gradient(90deg,#ecfdf5_0%,#ffffff_50%,#eff6ff_100%)] text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-3">
          <div className="px-4 py-3">{ui.averageMonthlyUsage}</div>
          <div className="px-4 py-3">{ui.suitableRooftopCapacity}</div>
          <div className="px-4 py-3">{ui.bestFit}</div>
        </div>
        {t.solarPage.capacityTable.rows.map((row) => (
          <div key={row.usage} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-3 md:gap-0">
            <div className="font-semibold text-slate-900">{row.usage}</div>
            <div className="font-black text-emerald-700">{row.capacity}</div>
            <div>{row.tag}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
