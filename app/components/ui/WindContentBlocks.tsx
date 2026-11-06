'use client'

import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import {
  ContentBenefitCard,
  ContentFeatureCard,
  ContentInfoPanel,
  ContentSectionEyebrow,
} from './SharedContentComponents'

const renderWindIcon = (colorClass: string) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`h-4 w-4 ${colorClass}`} aria-hidden="true">
      <path d="M3 8.5h12.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0-2.2 3.8" />
      <path d="M4 12.5h17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1-2.2-3.8" />
      <path d="M6 16.5h9" />
    </svg>
  )
}

export function WindSectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <ContentSectionEyebrow
      className="border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ecfeff_45%,#ffffff_100%)] shadow-[0_14px_26px_-20px_rgba(59,130,246,0.9)]"
      dotClassName="bg-linear-to-r from-sky-500 to-cyan-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
      labelClassName="text-sky-700"
    >
      {children}
    </ContentSectionEyebrow>
  )
}

export function WindFeatureCard({
  title,
  description,
  points = [],
  accent = 'sky',
}: {
  title: string
  description: string
  points?: string[]
  accent?: 'sky' | 'emerald' | 'amber' | 'violet'
}) {
  const { t } = useLocale()
  const ui = t.ui
  const componentData = t.componentData.windContentBlocks

  return (
    <ContentFeatureCard
      title={title}
      description={description}
      points={points}
      label={ui.windSolution}
      icon={renderWindIcon(componentData.iconColors[accent])}
      cardClassName="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(59,130,246,0.25)]"
      featureClassName={componentData.featureClasses[accent]}
      titleClassName="tracking-[0.05em] text-slate-900"
      pointIconClassName="bg-sky-100 text-sky-700"
    />
  )
}

export function WindBenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName="rounded-[1.7rem] border border-sky-200 bg-[linear-gradient(135deg,#ffffff_0%,#eff6ff_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(59,130,246,0.4)]"
      iconClassName="bg-linear-to-br from-sky-700 to-cyan-700 text-white shadow-lg shadow-sky-500/20"
      titleClassName="tracking-[0.04em] text-slate-900"
    />
  )
}

export function WindInfoPanel({
  title,
  content,
  accent = 'sky',
}: {
  title: string
  content: string[]
  accent?: 'sky' | 'emerald' | 'amber'
}) {
  const { t } = useLocale()
  const componentData = t.componentData.windContentBlocks

  return (
    <ContentInfoPanel
      title={title}
      content={content}
      themeClassName={componentData.infoThemes[accent]}
      checkBackgroundClassName={componentData.checkBackgrounds[accent]}
      titleClassName="tracking-[0.04em]"
    />
  )
}

export function WindCapacityTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-[1.9rem] border border-sky-200 bg-white shadow-[0_20px_34px_-24px_rgba(59,130,246,0.3)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[680px]">
        <div className="grid border-b border-sky-100 bg-[linear-gradient(90deg,#eff6ff_0%,#ffffff_50%,#ecfeff_100%)] text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1fr_1.1fr_2fr]">
          <div className="px-4 py-3">{ui.capacityBand}</div>
          <div className="px-4 py-3">{ui.systemSize}</div>
          <div className="px-4 py-3">{ui.typicalUse}</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 px-4 py-4 text-sm text-slate-700 md:grid-cols-[1fr_1.1fr_2fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.label}</div>
            <div className="font-black text-sky-700">{row.value}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function WindComparisonTable({ rows }: { rows: { system: string; detail: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-[1.9rem] border border-sky-200 bg-white shadow-[0_20px_34px_-24px_rgba(59,130,246,0.3)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[780px]">
        <div className="grid border-b border-sky-100 bg-[linear-gradient(90deg,#ecfeff_0%,#ffffff_50%,#f0fdf4_100%)] text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1.2fr_2.3fr_1.8fr]">
          <div className="px-4 py-3">{ui.systemType}</div>
          <div className="px-4 py-3">{ui.howItWorks}</div>
          <div className="px-4 py-3">{ui.typicalUse}</div>
        </div>
        {rows.map((row) => (
          <div key={row.system} className="grid gap-3 px-4 py-4 text-sm text-slate-700 md:grid-cols-[1.2fr_2.3fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.system}</div>
            <div>{row.detail}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
