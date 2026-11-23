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
      cardClassName="group h-full rounded-xl border border-sky-200 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ecfeff] p-6 shadow-sm transition-colors hover:border-sky-400"
      featureClassName={contentAccentText[accent]}
      titleClassName="text-slate-900"
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
      cardClassName={`rounded-xl border-l-4 ${contentBenefitBorders[accent]} bg-gradient-to-br from-[#e6f4fa] via-[#eff9f7] to-[#f0fdfa] p-5`}
      iconClassName="bg-sky-100 text-sky-700"
      titleClassName="text-slate-900"
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
      themeClassName="rounded-xl border border-slate-200 bg-gradient-to-br from-[#e0f7fa] via-[#f0f9ff] to-[#ecfeff] p-5 text-slate-900"
      checkBackgroundClassName={contentCheckBackgrounds[accent]}
      titleClassName="text-slate-900"
    />
  )
}

export function WindCapacityTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400 ">
      <table
        aria-label={`${ui.capacityBand}, ${ui.systemSize}, ${ui.typicalUse}`}
        className="w-full min-w-[680px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 "
      >
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th scope="col">{ui.capacityBand}</th>
            <th scope="col">{ui.systemSize}</th>
            <th scope="col">{ui.typicalUse}</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
            <th scope="row" className="font-semibold text-slate-900 tracking-normal tabular-nums"><DigitalNumber value={row.label} /></th>
            <td className="font-bold text-sky-700 tracking-normal tabular-nums"><DigitalNumber value={row.value} /></td>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.use} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
