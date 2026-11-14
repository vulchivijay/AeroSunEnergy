'use client'

import type { ReactNode } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import {
  ContentBenefitCard,
  ContentFeatureCard,
  ContentInfoPanel,
  ContentSectionEyebrow,
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
      className="py-1"
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
  accent?: 'emerald' | 'sky' | 'violet' | 'amber'
}) {
  const { t } = useLocale()
  const ui = t.ui
  const componentData = t.componentData.hybridContentBlocks

  return (
    <ContentFeatureCard
      title={title}
      description={description}
      points={points}
      label={ui.hybridSystem}
      icon={renderHybridIcon(componentData.iconColors[accent])}
      cardClassName="group h-full border-t border-slate-300 py-6 transition-colors hover:border-violet-600"
      featureClassName={componentData.iconColors[accent]}
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
  accent?: 'emerald' | 'sky' | 'violet' | 'amber'
}) {
  const borderColors = {
    emerald: 'border-l-[#b6d9c6]',
    sky: 'border-l-[#b8d8ec]',
    violet: 'border-l-[#d0c3e6]',
    amber: 'border-l-[#efd9ad]',
  }

  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName={`rounded-2xl border-l-4 ${borderColors[accent]} bg-[#f0edfa] p-5`}
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
  accent?: 'emerald' | 'sky' | 'violet'
}) {
  const { t } = useLocale()
  const componentData = t.componentData.hybridContentBlocks

  return (
    <ContentInfoPanel
      title={title}
      content={content}
      themeClassName="bg-transparent text-slate-900"
      checkBackgroundClassName={componentData.checkBackgrounds[accent]}
      titleClassName="tracking-tighter"
    />
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto border-y border-slate-300 bg-transparent scrollbar-thin [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-violet-300 [&::-webkit-scrollbar-thumb:hover]:bg-violet-400">
      <div className="min-w-190">
        <div className="grid border-b border-slate-200 bg-[#f7f7f1] text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 md:grid-cols-[1.2fr_2.2fr_1.8fr]">
          <div className="px-4 py-3">{ui.systemType}</div>
          <div className="px-4 py-3">{ui.typicalConfiguration}</div>
          <div className="px-4 py-3">{ui.customerFit}</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 border-b border-slate-200 px-4 py-4 text-sm text-slate-600 last:border-b-0 md:grid-cols-[1.2fr_2.2fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.label}</div>
            <div>{row.value}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
