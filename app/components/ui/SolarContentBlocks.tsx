import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import {
  ContentBenefitCard,
  ContentFeatureCard,
  ContentInfoPanel,
  ContentSectionEyebrow,
} from './SharedContentComponents'

export type AccentTone = 'emerald' | 'amber' | 'sky' | 'violet'

const benefitBorderClasses: Record<AccentTone, string> = {
  emerald: 'border-l-[#b6d9c6]',
  amber: 'border-l-[#efd9ad]',
  sky: 'border-l-[#b8d8ec]',
  violet: 'border-l-[#d0c3e6]',
}

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
      className="py-1"
      dotClassName="bg-emerald-600"
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
      label={t.ui.solarSolution}
      icon={renderSolarIcon(componentData.iconColors[featureAccent])}
      cardClassName="group h-full border-t border-slate-300 py-6 transition-colors hover:border-emerald-600"
      featureClassName={componentData.iconColors[featureAccent]}
      titleClassName="tracking-[0.05em] text-slate-900"
      pointIconClassName="bg-emerald-50 text-emerald-700"
    />
  )
}

export function BenefitCard({
  title,
  description,
  accent = 'emerald',
}: {
  title?: string
  description?: string
  accent?: AccentTone
}) {
  const { t } = useLocale()
  const defaults = t.componentData.solarContentBlocks.defaultBenefit

  return (
    <ContentBenefitCard
      title={title ?? defaults.title}
      description={description ?? defaults.description}
      cardClassName={`rounded-2xl border-l-4 ${benefitBorderClasses[accent]} bg-[#edf3e9] p-5`}
      iconClassName="bg-emerald-50 text-emerald-700"
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
    <div className="border-t border-emerald-200 py-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">{label}</p>
      <div className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
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
      themeClassName="bg-transparent text-slate-900"
      checkBackgroundClassName={componentData.checkBackgrounds[infoAccent]}
      titleClassName="tracking-[0.04em]"
    />
  )
}

export function CapacityTable() {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto border-y border-slate-300 bg-transparent [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <div className="min-w-[620px]">
        <div className="grid border-b border-slate-200 bg-[#f7f7f1] text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-3">
          <div className="px-4 py-3">{ui.averageMonthlyUsage}</div>
          <div className="px-4 py-3">{ui.suitableRooftopCapacity}</div>
          <div className="px-4 py-3">{ui.bestFit}</div>
        </div>
        {t.solarPage.capacityTable.rows.map((row) => (
          <div key={row.usage} className="grid gap-3 border-b border-slate-200 px-4 py-4 text-sm text-slate-600 last:border-b-0 md:grid-cols-3 md:gap-0">
            <div className="font-semibold text-slate-900">{row.usage}</div>
            <div className="font-black text-emerald-700">{row.capacity}</div>
            <div>{row.tag}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
