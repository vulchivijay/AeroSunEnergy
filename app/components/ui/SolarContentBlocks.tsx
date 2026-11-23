import type { ReactNode } from 'react'

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
  imageSrc,
}: {
  title: string
  description: string
  points: string[]
  accent?: AccentTone
  label: string
  imageSrc?: string
}) {
  return (
    <ContentFeatureCard
      title={title}
      description={description}
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
