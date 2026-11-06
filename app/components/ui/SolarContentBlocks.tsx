import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import {
  ContentBenefitCard,
  ContentFeatureCard,
  ContentInfoPanel,
  ContentSectionEyebrow,
} from './SharedContentComponents'

export type AccentTone = 'emerald' | 'amber' | 'sky' | 'violet'

const renderSolarIcon = (colorClass: string) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`h-4 w-4 ${colorClass}`} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.5v2.3M12 20.2v2.3M4.93 4.93l1.63 1.63M17.44 17.44l1.63 1.63M1.5 12h2.3M20.2 12h2.3M4.93 19.07l1.63-1.63M17.44 6.56l1.63-1.63" />
    </svg>
  )
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <ContentSectionEyebrow
      className="border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f0fdfa_45%,#ffffff_100%)] shadow-[0_14px_26px_-20px_rgba(16,185,129,0.9)]"
      dotClassName="bg-linear-to-r from-emerald-500 to-lime-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
      labelClassName="text-emerald-700"
    >
      {children}
    </ContentSectionEyebrow>
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
    <ContentFeatureCard
      title={featureTitle}
      description={featureDescription}
      points={featurePoints}
      label="Solar solution"
      icon={renderSolarIcon(componentData.iconColors[featureAccent])}
      cardClassName="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(16,185,129,0.3)]"
      featureClassName={componentData.featureClasses[featureAccent]}
      titleClassName="tracking-[0.05em] text-slate-900"
      pointIconClassName="bg-emerald-100 text-emerald-700"
    />
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
    <ContentBenefitCard
      title={title ?? defaults.title}
      description={description ?? defaults.description}
      cardClassName="rounded-[1.7rem] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(16,185,129,0.45)]"
      iconClassName="bg-linear-to-br from-emerald-500 to-lime-500 text-slate-950 shadow-lg shadow-emerald-500/20"
      titleClassName="tracking-[0.04em] text-slate-900"
    />
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
    <ContentInfoPanel
      title={infoTitle}
      content={infoContent}
      themeClassName={componentData.infoThemes[infoAccent]}
      checkBackgroundClassName={componentData.checkBackgrounds[infoAccent]}
      titleClassName="tracking-[0.04em]"
    />
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
