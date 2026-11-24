'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { BatteryCharging, CircleDollarSign, RefreshCw, ShieldCheck, Zap } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from './DigitalNumber'
import {
  ContentBenefitCard,
  contentAccentText,
  contentBenefitBorders,
  contentCheckBackgrounds,
  contentFeatureCardAccents,
  ContentHighlightsBlock,
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
      dotClassName="bg-emerald-600"
      labelClassName="text-emerald-700"
    >
      {children}
    </ContentSectionEyebrow>
  )
}

export function HybridFeatureCard({
  title,
  description,
  points,
  accent = 'emerald',
  descriptionClassName = '',
  imageSrc,
}: {
  title: string
  description: string
  points: string[]
  accent?: ContentAccent
  descriptionClassName?: string
  imageSrc: string
}) {
  const { t } = useLocale()
  const ui = t.ui
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[2.25/1] overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" aria-hidden="true" />
        <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-sm backdrop-blur-sm [&_svg]:h-6 [&_svg]:w-6">
          {renderHybridIcon(contentAccentText[accent])}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <span className={`uppercase ${contentAccentText[accent]} text-xs font-bold tracking-widest leading-5`}>{ui.hybridSystem}</span>
          <div className={`mt-2 h-1 w-12 rounded-full ${contentFeatureCardAccents[accent]}`} aria-hidden="true" />
        </div>
        <h3 className="mt-2 text-slate-900 text-lg font-semibold leading-snug">{title}</h3>
        <p className={`mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7 ${descriptionClassName}`}>{description}</p>
        {points.length > 0 && (
          <ul className="mt-4 divide-y divide-slate-200 text-xs leading-5 font-normal text-slate-700 sm:text-sm">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 py-2.5 first:pt-0 last:pb-0">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700 tracking-normal">✓</span>
                <span className="leading-5">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className={`absolute inset-x-0 bottom-0 h-1 ${contentFeatureCardAccents[accent]}`} aria-hidden="true" />
    </article>
  )
}

export function HybridContentBlock({
  eyebrow,
  title,
  description,
  benefits,
  imageSrc,
}: {
  eyebrow: string
  title: string
  description: string
  benefits: { title: string; description: string }[]
  imageSrc: string
}) {
  return (
    <ContentHighlightsBlock
      eyebrow={eyebrow}
      title={title}
      description={description}
      imageSrc={imageSrc}
      badgeIcon={Zap}
      badgeIconClassName="text-amber-500"
      benefits={benefits}
      benefitIcons={[RefreshCw, BatteryCharging, CircleDollarSign, ShieldCheck, Zap]}
    />
  )
}

export function HybridBenefitCard({
  title,
  description,
  accent = 'emerald',
}: {
  title: string
  description: string
  accent?: ContentAccent
}) {
  return (
    <ContentBenefitCard
      title={title}
      description={description}
      cardClassName={`rounded-xl border-l-4 ${contentBenefitBorders[accent]} bg-[#edf3e9] p-5`}
      iconClassName="bg-emerald-50 text-emerald-700"
      titleClassName="text-slate-900"
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
      titleClassName="text-slate-900"
    />
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400 ">
      <table
        aria-label={`${ui.systemType}, ${ui.typicalConfiguration}, ${ui.customerFit}`}
        className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 "
      >
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th scope="col">{ui.systemType}</th>
            <th scope="col">{ui.typicalConfiguration}</th>
            <th scope="col">{ui.customerFit}</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
            <th scope="row" className="font-semibold text-slate-900 tracking-normal tabular-nums"><DigitalNumber value={row.label} /></th>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.value} /></td>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.use} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
