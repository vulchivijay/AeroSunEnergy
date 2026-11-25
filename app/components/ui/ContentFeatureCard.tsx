import type { ReactNode } from 'react'
import Image from 'next/image'

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
