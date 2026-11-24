import type { ReactNode } from 'react'
import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'

export type ContentAccent = 'emerald' | 'amber' | 'sky' | 'violet'

export const contentAccentText: Record<ContentAccent, string> = {
  emerald: 'text-emerald-700',
  amber: 'text-amber-700',
  sky: 'text-sky-700',
  violet: 'text-violet-700',
}

export const contentCheckBackgrounds: Record<ContentAccent, string> = {
  emerald: 'bg-emerald-700 text-white',
  amber: 'bg-amber-100 text-amber-700',
  sky: 'bg-sky-100 text-sky-700',
  violet: 'bg-violet-100 text-violet-700',
}

export const contentBenefitBorders: Record<ContentAccent, string> = {
  emerald: 'border-l-[#b6d9c6]',
  amber: 'border-l-[#efd9ad]',
  sky: 'border-l-[#b8d8ec]',
  violet: 'border-l-[#d0c3e6]',
}

export const contentFeatureCardAccents: Record<ContentAccent, string> = {
  emerald: 'bg-sky-400',
  amber: 'bg-amber-400',
  sky: 'bg-violet-500',
  violet: 'bg-emerald-500',
}

const contentHighlightAccents = [
  { border: 'border-l-[#3472ff]', number: 'bg-blue-100 text-blue-900' },
  { border: 'border-l-[#b69aff]', number: 'bg-violet-100 text-violet-900' },
  { border: 'border-l-[#b69aff]', number: 'bg-violet-100 text-violet-900' },
  { border: 'border-l-[#3472ff]', number: 'bg-blue-100 text-blue-900' },
] as const

export function ContentHighlightsBlock({
  eyebrow,
  title,
  description,
  imageSrc,
  badgeIcon: BadgeIcon,
  badgeIconClassName,
  benefits,
  benefitIcons,
}: {
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  badgeIcon: LucideIcon
  badgeIconClassName: string
  benefits: { title: string; description: string }[]
  benefitIcons: LucideIcon[]
}) {
  return (
    <div className="grid gap-6 bg-[#fffdfa] lg:grid-cols-[minmax(17rem,0.44fr)_minmax(0,1fr)] lg:gap-8">
      <figure className="relative min-h-[26rem] overflow-hidden rounded-[1.5rem] bg-[#dbe6ff] sm:min-h-[32rem] lg:min-h-[39rem]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12224e]/25 via-transparent to-white/10" aria-hidden="true" />
        <div className="absolute left-4 right-4 top-5 flex items-center justify-center gap-3 rounded-full border border-white/80 bg-white/90 px-3 py-3 text-[#10235a] shadow-lg shadow-slate-900/10 backdrop-blur-sm sm:left-6 sm:right-6 sm:gap-4 sm:px-5">
          <BadgeIcon className={`h-7 w-7 shrink-0 ${badgeIconClassName}`} strokeWidth={1.7} aria-hidden="true" />
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
            const BenefitIcon = benefitIcons[index % benefitIcons.length]
            const accent = contentHighlightAccents[index % contentHighlightAccents.length]

            return (
              <article
                key={benefit.title}
                className={`flex min-h-[8.25rem] items-center gap-3 rounded-2xl border border-slate-200 ${accent.border} border-l-4 bg-white/80 px-3 py-4 shadow-sm sm:gap-4 sm:px-4`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${accent.number}`} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-11 w-px shrink-0 bg-slate-300" aria-hidden="true" />
                <BenefitIcon className="h-9 w-9 shrink-0 text-[#10235a]" strokeWidth={1.7} aria-hidden="true" />
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

export function ContentSectionEyebrow({
  children,
  className,
  dotClassName,
  labelClassName,
}: {
  children: ReactNode
  className: string
  dotClassName: string
  labelClassName: string
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm ${className}`}>
      <span className={`inline-flex h-2 w-2 items-center justify-center rounded-full ${dotClassName}`} aria-hidden="true" />
      <p className={` uppercase ${labelClassName}       text-xs font-semibold tracking-wide leading-5`}>{children}</p>
    </div>
  )
}

export function ContentFeatureCard({
  title,
  description,
  points,
  label,
  icon,
  cardClassName,
  featureClassName,
  titleClassName,
  pointIconClassName,
  descriptionClassName = '',
  imageSrc,
  accent = 'emerald',
}: {
  title: string
  description: string
  points: string[]
  label: string
  icon: ReactNode
  cardClassName: string
  featureClassName: string
  titleClassName: string
  pointIconClassName: string
  descriptionClassName?: string
  imageSrc?: string
  accent?: ContentAccent
}) {
  const hasImage = Boolean(imageSrc)

  return (
    <article className={hasImage
      ? 'group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg'
      : cardClassName}>
      {imageSrc && (
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
            {icon}
          </span>
        </div>
      )}
      <div className={hasImage ? 'flex flex-1 flex-col p-5 sm:p-6' : ''}>
        {hasImage ? (
          <div>
            <span className={`uppercase ${featureClassName} text-xs font-bold tracking-widest leading-5`}>{label}</span>
            <div className={`mt-2 h-1 w-12 rounded-full ${contentFeatureCardAccents[accent]}`} aria-hidden="true" />
          </div>
        ) : (
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <span className={`uppercase ${featureClassName} text-xs font-semibold tracking-wide leading-5`}>{label}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80">{icon}</span>
          </div>
        )}
        <h3 className={`${hasImage ? 'mt-2 ' : ''}${titleClassName} ${hasImage ? 'text-lg font-semibold leading-snug' : 'text-xl sm:text-2xl font-semibold !tracking-tight leading-snug'}`}>
          {title}
        </h3>
        <p className={`mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7 ${descriptionClassName}`}>{description}</p>
        {points.length > 0 && (
          <ul className={`${hasImage ? 'mt-4 ' : 'mt-5 '}${hasImage ? 'text-xs sm:text-sm leading-5' : 'text-sm sm:text-base leading-6 sm:leading-7'} divide-y divide-slate-200 font-normal text-slate-700`}>
            {points.map((point) => (
              <li key={point} className={`flex items-start gap-2.5 ${hasImage ? 'py-2.5' : 'py-3'} first:pt-0 last:pb-0`}>
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-sm font-bold ${pointIconClassName} tracking-normal`}>✓</span>
                <span className={hasImage ? 'leading-5' : 'leading-6'}>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {hasImage && <span className={`absolute inset-x-0 bottom-0 h-1 ${contentFeatureCardAccents[accent]}`} aria-hidden="true" />}
    </article>
  )
}

export function ContentBenefitCard({
  title,
  description,
  cardClassName,
  iconClassName,
  titleClassName,
}: {
  title: string
  description: string
  cardClassName: string
  iconClassName: string
  titleClassName: string
}) {
  return (
    <div className={cardClassName}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${iconClassName} tracking-normal`}>✓</div>
        <div>
          <h3 className={` ${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
          <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function ContentIllustratedBenefitCard({
  title,
  description,
  index,
  illustration,
}: {
  title: string
  description: string
  index: number
  illustration: ReactNode
}) {
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
        {illustration}
        <h4 className="mt-4 max-w-[60%] font-serif text-[1.45rem] font-bold leading-[1.08] tracking-tight text-[#102b1c] sm:text-[1.7rem]">
          {title}
        </h4>
        <p className="mt-4 max-w-[62%] text-[1rem] leading-[1.45] text-[#171d19]">
          {description}
        </p>
      </div>
    </article>
  )
}

export function ContentInfoPanel({
  title,
  content,
  themeClassName,
  checkBackgroundClassName,
  titleClassName,
}: {
  title: string
  content: string[]
  themeClassName: string
  checkBackgroundClassName: string
  titleClassName: string
}) {
  return (
    <div className={`border-t border-slate-200 pt-5 ${themeClassName}`}>
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${checkBackgroundClassName}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
            <path d="M5 13.5 9 17l10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className={` ${titleClassName} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
