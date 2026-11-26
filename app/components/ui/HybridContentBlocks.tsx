'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { BatteryCharging, CircleDollarSign, RefreshCw, ShieldCheck, Sun, Zap } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from './DigitalNumber'
import {
  ContentIllustratedBenefitCard,
  contentAccentText,
  contentFeatureCardAccents,
  ContentHighlightsBlock,
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
  descriptionClassName = 'line-clamp-3',
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
        <>
          <span className={`uppercase ${contentAccentText[accent]} text-xs font-bold tracking-widest leading-5`}>{ui.hybridSystem}</span>
          <div className={`mt-2 h-1 w-12 rounded-full ${contentFeatureCardAccents[accent]}`} aria-hidden="true" />
        </>
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
  index = 0,
}: {
  title: string
  description: string
  accent?: ContentAccent
  index?: number
}) {
  return (
    <ContentIllustratedBenefitCard
      title={title}
      description={description}
      index={index}
      illustration={
        <div className="pointer-events-none absolute right-1 top-4 h-24 w-24" aria-hidden="true">
          <Sun className="absolute right-1 top-0 h-12 w-12 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
          <BatteryCharging className={`absolute bottom-0 left-0 h-14 w-14 ${contentAccentText[accent]}`} strokeWidth={1.8} />
          <Zap className="absolute bottom-1 right-0 h-9 w-9 text-[#d9ad2a]" strokeWidth={2} />
        </div>
      }
    />
  )
}

export function HybridInfoPanel({
  title,
  content,
  accent = 'emerald',
  index = 0,
}: {
  title: string
  content: string[]
  accent?: Exclude<ContentAccent, 'amber'>
  index?: number
}) {
  const Illustration = index % 2 === 0 ? RefreshCw : BatteryCharging

  return (
    <article className="group relative min-h-[17rem] overflow-hidden rounded-[1.6rem] border border-[#d9dac4] bg-[linear-gradient(145deg,#fffefa_0%,#fffdf7_58%,#f5f4e8_100%)] p-6 shadow-[0_10px_18px_-13px_rgba(28,38,19,0.55)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_22px_-13px_rgba(28,38,19,0.5)] sm:p-7">
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full"
        viewBox="0 0 360 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 50c66-26 104 8 168 1s117-38 192-8v27H0z" fill="#e4e8cd" />
        <path d="M0 61c70-21 122 1 190-5s116-23 170-11v25H0z" fill="#dce3c1" fillOpacity=".76" />
      </svg>
      <div className="relative z-10">
        <span className="inline-flex min-w-12 items-center justify-center rounded-xl bg-[#e5e7cc] px-3 py-1 text-lg font-bold leading-7 text-[#173622]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="pointer-events-none absolute right-1 top-4 h-24 w-24" aria-hidden="true">
          <Sun className="absolute right-1 top-0 h-12 w-12 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
          <Illustration className={`absolute bottom-1 left-0 h-14 w-14 ${contentAccentText[accent]}`} strokeWidth={1.8} />
          <Zap className="absolute bottom-0 right-0 h-9 w-9 text-[#d9ad2a]" strokeWidth={2} />
        </div>
        <h3 className="mt-4 max-w-[66%] font-serif text-[1.45rem] font-bold leading-[1.08] tracking-tight text-[#102b1c] sm:text-[1.7rem]">
          {title}
        </h3>
        <ul className="mt-5 max-w-[82%] space-y-2 text-sm leading-6 text-[#29332c] sm:text-base">
          {content.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#71884e]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function HybridTable({ rows }: { rows: { label: string; value: string; use: string }[] }) {
  const { t } = useLocale()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <table
        aria-label={`${ui.systemType}, ${ui.typicalConfiguration}, ${ui.customerFit}`}
        className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3"
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
          <tr key={row.label} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
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
