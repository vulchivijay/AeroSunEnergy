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
}: {
  title: string
  description: string
  points: string[]
  accent?: AccentTone
  label: string
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
      titleClassName="tracking-[0.05em] text-slate-900"
      pointIconClassName="bg-emerald-50 text-emerald-700"
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
      cardClassName={`rounded-2xl border-l-4 ${contentBenefitBorders[accent]} bg-[#edf3e9] p-5`}
      iconClassName="bg-emerald-50 text-emerald-700"
      titleClassName="tracking-[0.04em] text-slate-900"
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
      titleClassName="tracking-[0.04em]"
    />
  )
}
