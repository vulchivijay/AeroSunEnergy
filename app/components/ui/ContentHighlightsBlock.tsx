import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'

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
