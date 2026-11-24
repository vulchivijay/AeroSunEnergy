import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowLeftRight, BadgeCheck, CalendarDays, Coins, House, Leaf, Sun } from 'lucide-react'

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

export type AccentTone = ContentAccent

export const solarOfferingImages = [
  '/images/slider/slider-1.webp',
  '/images/slider/slider-2.webp',
  '/images/slider/slider-5.webp',
  '/images/slider/slider-4.webp',
  '/images/slider/slider-6.webp',
  '/images/slider/slider-3.webp',
] as const

export const solarSystemImages = [
  '/images/slider/slider-1.webp',
  '/images/slider/slider-2.webp',
  '/images/slider/slider-3.webp',
] as const

export const solarOfferingAccents: AccentTone[] = [
  'emerald',
  'amber',
  'sky',
  'violet',
  'amber',
  'emerald',
]

export const solarSystemAccents: AccentTone[] = ['emerald', 'amber', 'violet']

const rooftopBenefitIcons = [Coins, CalendarDays, BadgeCheck, Leaf, House, ArrowLeftRight] as const
const rooftopBenefitAccents = [
  { border: 'border-l-[#3472ff]', number: 'bg-blue-100 text-blue-900', icon: 'text-[#10235a]' },
  { border: 'border-l-[#b69aff]', number: 'bg-violet-100 text-violet-900', icon: 'text-[#10235a]' },
  { border: 'border-l-[#b69aff]', number: 'bg-violet-100 text-violet-900', icon: 'text-[#10235a]' },
  { border: 'border-l-[#3472ff]', number: 'bg-blue-100 text-blue-900', icon: 'text-[#10235a]' },
  { border: 'border-l-[#3472ff]', number: 'bg-blue-100 text-blue-900', icon: 'text-[#10235a]' },
  { border: 'border-l-[#b69aff]', number: 'bg-violet-100 text-violet-900', icon: 'text-[#10235a]' },
] as const

type RooftopSolarBenefit = {
  title: string
  description: string
}

export function RooftopSolarContentBlock({
  eyebrow,
  title,
  description,
  benefits,
}: {
  eyebrow: string
  title: string
  description: string
  benefits: RooftopSolarBenefit[]
}) {
  return (
    <div className="grid gap-6 bg-[#fffdfa] lg:grid-cols-[minmax(17rem,0.44fr)_minmax(0,1fr)] lg:gap-8">
      <figure className="relative min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-[#dbe6ff] sm:min-h-[32rem] lg:min-h-[39rem]">
        <Image
          src={solarSystemImages[0]}
          alt=""
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12224e]/25 via-transparent to-white/10" aria-hidden="true" />
        <div className="absolute left-4 right-4 top-5 flex items-center justify-center gap-3 rounded-full border border-white/80 bg-white/90 px-3 py-3 text-[#10235a] shadow-lg shadow-slate-900/10 backdrop-blur-sm sm:left-6 sm:right-6 sm:gap-4 sm:px-5">
          <div className="flex shrink-0 items-center gap-2">
            <Sun className="h-7 w-7 text-amber-500" strokeWidth={1.7} aria-hidden="true" />
            <svg viewBox="0 0 36 28" fill="none" className="h-7 w-9 text-[#10235a]" aria-hidden="true">
              <path d="M3 11h30l-3 13H6L3 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M10 12 9 23m9-11v11m9-11 1 11M5 17h26" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="h-8 w-px shrink-0 bg-slate-300" aria-hidden="true" />
          <span className="min-w-0 text-center text-xs font-bold uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.2em]">
            {eyebrow}
          </span>
        </div>
      </figure>

      <div className="flex flex-col justify-center py-2 sm:py-4 lg:py-6">
        <h3 className="text-2xl font-semibold leading-tight !tracking-tight text-[#0b1c50] sm:text-3xl leading-snug">
          {title}
        </h3>
        <div className="mt-3 h-1.5 w-24 rounded-full bg-amber-400" aria-hidden="true" />
        <p className="mt-4 max-w-4xl text-sm leading-6 text-[#1d2b50] sm:text-base sm:leading-7">
          {description}
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = rooftopBenefitIcons[index % rooftopBenefitIcons.length]
            const accent = rooftopBenefitAccents[index % rooftopBenefitAccents.length]

            return (
              <article
                key={benefit.title}
                className={`flex min-h-[8.25rem] items-center gap-3 rounded-2xl border border-slate-200 ${accent.border} border-l-4 bg-white/80 px-3 py-4 shadow-sm sm:gap-4 sm:px-4`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${accent.number}`} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-11 w-px shrink-0 bg-slate-300" aria-hidden="true" />
                <Icon className={`h-9 w-9 shrink-0 ${accent.icon}`} strokeWidth={1.7} aria-hidden="true" />
                <div className="min-w-0">
                  <h4 className="text-base font-bold leading-tight text-[#0b1c50] sm:text-lg">
                    {benefit.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-5 text-[#293654]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
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
      className="py-2"
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
  accent = 'emerald',
  label,
  descriptionClassName,
  imageSrc,
}: {
  title: string
  description: string
  points: string[]
  accent?: AccentTone
  label: string
  descriptionClassName?: string
  imageSrc?: string
}) {
  return (
    <ContentFeatureCard
      title={title}
      description={description}
      descriptionClassName={descriptionClassName}
      points={points}
      label={label}
      icon={renderSolarIcon(contentAccentText[accent])}
      cardClassName="group h-full border-t border-slate-300 py-6 transition-colors hover:border-emerald-600"
      featureClassName={contentAccentText[accent]}
      titleClassName="text-slate-900"
      pointIconClassName="bg-emerald-50 text-emerald-700"
      imageSrc={imageSrc}
      accent={accent}
    />
  )
}

export function BenefitCard({
  title,
  description,
  accent = 'emerald',
}: {
  title: string
  description: string
  accent?: AccentTone
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

export function InfoPanel({
  title,
  content,
  accent,
}: {
  title: string
  content: string[]
  accent?: Exclude<ContentAccent, 'violet'>
}) {

  return (
    <ContentInfoPanel
      title={title}
      content={content}
      themeClassName="bg-transparent text-slate-900"
      checkBackgroundClassName={contentCheckBackgrounds[accent ?? 'emerald']}
      titleClassName="text-slate-900"
    />
  )
}
