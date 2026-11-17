'use client'

import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import {
  ContentBenefitCard,
  contentAccentText,
  contentBenefitBorders,
  contentCheckBackgrounds,
  ContentFeatureCard,
  ContentInfoPanel,
  ContentSectionEyebrow,
  type ContentAccent,
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
      className="py-2"
      dotClassName="bg-sky-600"
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
  accent?: ContentAccent
}) {
  const { t } = useLocale()
  const ui = t.ui
  return (
    <ContentFeatureCard
      title={title}
      description={description}
      points={points}
      label={ui.windSolution}
      icon={renderWindIcon(contentAccentText[accent])}
      cardClassName="group h-full rounded-2xl border border-sky-200 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ecfeff] p-6 shadow-sm transition-colors hover:border-sky-400"
      featureClassName={contentAccentText[accent]}
      titleClassName="tracking-[0.05em] text-slate-900"
      pointIconClassName="bg-sky-50 text-sky-700"
    />
  )
}

export function WindBenefitCard({
  title,
  description,
  accent = 'sky',
}: {
  title: string
  description: string
  accent?: ContentAccent
}) {
  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName={`rounded-2xl border-l-4 ${contentBenefitBorders[accent]} bg-gradient-to-br from-[#e6f4fa] via-[#eff9f7] to-[#f0fdfa] p-5`}
      iconClassName="bg-sky-100 text-sky-700"
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
  accent?: Exclude<ContentAccent, 'violet'>
}) {
  return (
    <ContentInfoPanel
      title={title}
      content={content}
      themeClassName="rounded-2xl border border-cyan-200 bg-gradient-to-br from-[#e0f7fa] via-[#f0f9ff] to-[#ecfeff] p-5 text-slate-900"
      checkBackgroundClassName={contentCheckBackgrounds[accent]}
      titleClassName="tracking-[0.04em]"
    />
  )
}

export function WindCapacityTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-2xl border border-sky-200 bg-gradient-to-br from-[#f0f9ff] via-[#e6f7fb] to-[#f0fdfa] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[680px]">
        <div className="grid border-b border-slate-200 bg-[#f7f7f1] text-sm font-bold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-[1fr_1.1fr_2fr]">
          <div className="px-4 py-3">{ui.capacityBand}</div>
          <div className="px-4 py-3">{ui.systemSize}</div>
          <div className="px-4 py-3">{ui.typicalUse}</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 border-b border-slate-200 px-4 py-4 text-sm text-slate-600 last:border-b-0 md:grid-cols-[1fr_1.1fr_2fr] md:gap-0">
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
    <div className="overflow-x-auto rounded-2xl border border-cyan-200 bg-gradient-to-br from-[#ecfeff] via-[#f0f9ff] to-[#e6f4fa] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sky-300 [&::-webkit-scrollbar-thumb:hover]:bg-sky-400">
      <div className="min-w-[780px]">
        <div className="grid border-b border-slate-200 bg-[#f7f7f1] text-sm font-bold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-[1.2fr_2.3fr_1.8fr]">
          <div className="px-4 py-3">{ui.systemType}</div>
          <div className="px-4 py-3">{ui.howItWorks}</div>
          <div className="px-4 py-3">{ui.typicalUse}</div>
        </div>
        {rows.map((row) => (
          <div key={row.system} className="grid gap-3 border-b border-slate-200 px-4 py-4 text-sm text-slate-600 last:border-b-0 md:grid-cols-[1.2fr_2.3fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.system}</div>
            <div>{row.detail}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
