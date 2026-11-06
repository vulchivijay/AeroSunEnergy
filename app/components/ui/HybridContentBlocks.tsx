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
      className="border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f5f3ff_45%,#ffffff_100%)] shadow-[0_14px_26px_-20px_rgba(16,185,129,0.9)]"
      dotClassName="bg-linear-to-r from-emerald-500 to-violet-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
      labelClassName="text-emerald-700"
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
      cardClassName="group rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_22px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(16,185,129,0.3)]"
      featureClassName={componentData.featureClasses[accent]}
      titleClassName="tracking-tighter text-slate-900"
      pointIconClassName="bg-emerald-700 text-white"
    />
  )
}

export function HybridBenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName="rounded-[1.7rem] border border-emerald-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_32px_-26px_rgba(16,185,129,0.45)]"
      iconClassName="bg-linear-to-br from-emerald-700 to-teal-700 text-white shadow-lg shadow-emerald-500/20"
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
      themeClassName={componentData.infoThemes[accent]}
      checkBackgroundClassName={componentData.checkBackgrounds[accent]}
      titleClassName="tracking-tighter"
    />
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-[1.9rem] border border-emerald-200 bg-white shadow-[0_20px_34px_-24px_rgba(16,185,129,0.3)] scrollbar-thin [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <div className="min-w-190">
        <div className="grid border-b border-emerald-100 bg-linear-to-r from-emerald-50 via-white to-sky-50 text-[12px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-[1.2fr_2.2fr_1.8fr]">
          <div className="px-4 py-3">{ui.systemType}</div>
          <div className="px-4 py-3">{ui.typicalConfiguration}</div>
          <div className="px-4 py-3">{ui.customerFit}</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 px-4 py-4 text-sm text-slate-700 md:grid-cols-[1.2fr_2.2fr_1.8fr] md:gap-0">
            <div className="font-semibold text-slate-900">{row.label}</div>
            <div>{row.value}</div>
            <div>{row.use}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
