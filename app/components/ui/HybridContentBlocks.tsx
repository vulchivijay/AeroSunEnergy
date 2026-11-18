'use client'

import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from './DigitalNumber'
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

const renderHybridIcon = (colorClass: string) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={`h-4 w-4 ${colorClass}`} aria-hidden="true">
      <path d="M7 7h10v10H7z" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
    </svg>
  )
}

export function HybridSectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <ContentSectionEyebrow
      className="py-2"
      dotClassName="bg-violet-600"
      labelClassName="text-violet-700"
    >
      {children}
    </ContentSectionEyebrow>
  )
}

export function HybridFeatureCard({
  title,
  description,
  points = [],
  accent = 'emerald',
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
      label={ui.hybridSystem}
      icon={renderHybridIcon(contentAccentText[accent])}
      cardClassName="group h-full border-t border-slate-300 py-6 transition-colors hover:border-violet-600"
      featureClassName={contentAccentText[accent]}
      titleClassName="tracking-tighter text-slate-900"
      pointIconClassName="bg-violet-50 text-violet-700"
    />
  )
}

export function HybridBenefitCard({
  title,
  description,
  accent = 'violet',
}: {
  title: string
  description: string
  accent?: ContentAccent
}) {
  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName={`rounded-2xl border-l-4 ${contentBenefitBorders[accent]} bg-[#f0edfa] p-5`}
      iconClassName="bg-violet-100 text-violet-700"
      titleClassName="tracking-tighter text-slate-900"
    />
  )
}

export function HybridInfoPanel({
  title,
  content,
  accent = 'emerald',
}: {
  title: string
  content: string[]
  accent?: Exclude<ContentAccent, 'amber'>
}) {
  return (
    <ContentInfoPanel
      title={title}
      content={content}
      themeClassName="bg-transparent text-slate-900"
      checkBackgroundClassName={contentCheckBackgrounds[accent]}
      titleClassName="tracking-tighter"
    />
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-2xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <table
        aria-label={`${ui.systemType}, ${ui.typicalConfiguration}, ${ui.customerFit}`}
        className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-emerald-100 [&_td]:border-b [&_td]:border-emerald-100 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3"
      >
        <thead className="bg-amber-700 text-sm font-bold uppercase tracking-[0.18em] text-white">
          <tr>
            <th scope="col">{ui.systemType}</th>
            <th scope="col">{ui.typicalConfiguration}</th>
            <th scope="col">{ui.customerFit}</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
            <th scope="row" className="font-semibold text-slate-900"><DigitalNumber value={row.label} /></th>
            <td className="text-slate-700"><DigitalNumber value={row.value} /></td>
            <td className="text-slate-700"><DigitalNumber value={row.use} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
