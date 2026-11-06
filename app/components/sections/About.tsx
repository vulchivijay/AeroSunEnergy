'use client'

import { ArrowUpRight, Check, Sun, Wind, Zap } from 'lucide-react'
import { motion } from '@/lib/motion'
import { OptimizedImage } from '@/app/components/ui'
import { useLocale } from '@/lib/LocaleContext'

const systemIcons = [Sun, Wind, Zap]

export default function About() {
  const { t } = useLocale()
  const about = t.about
  const content = t.home.aboutSection

  const stats = content.stats

  const systems = content.systemCards.map((item, index) => ({
    ...item,
    tone: index === 0
      ? 'border-sky-200 bg-sky-50'
      : index === 1
        ? 'border-emerald-200 bg-emerald-50'
        : 'border-amber-200 bg-amber-50',
    Icon: systemIcons[index] ?? Zap,
  }))

  const renderCompanyName = (text: string) => {
    const [before, after] = text.split('{companyName}')

    return (
      <>
        {before}
        <strong className="font-semibold text-emerald-950">{content.companyName}</strong>
        {after}
      </>
    )
  }

  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#f3f7f1] px-4 py-14 text-slate-900 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-emerald-200/50 blur-[120px]" />
        <div className="absolute -right-36 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-100/70 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-800 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)]" aria-hidden="true" />
                {content.eyebrow}
              </span>
              <span className="text-sm font-semibold tracking-[0.04em] text-slate-600">
                {content.brandFirst} <span className="text-amber-700">{content.brandSecond}</span>
              </span>
            </div>

            <h2 className="mt-7 max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.045em] text-emerald-950 sm:text-5xl lg:text-7xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {about.paragraph1}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {content.tags.map((tag, index) => {
                const Icon = systemIcons[index] ?? Zap
                return (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                    {tag}
                  </span>
                )
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {content.audience.map((item) => (
                <span key={item} className="rounded-md border-l-2 border-emerald-600 bg-white/75 px-3 py-2 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-emerald-700/15 bg-emerald-200/25" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white bg-white p-2 shadow-[0_28px_70px_-35px_rgba(15,23,42,0.35)]">
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[1.25rem] bg-emerald-100">
                <OptimizedImage
                  src="/images/founder-aerosunenergy.webp"
                  alt={content.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 70vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-slate-950/10" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-950 shadow-sm backdrop-blur-md">
                  {content.founderBadge}
                </span>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">{content.leadershipLabel}</p>
                    <p className="mt-1 text-xl font-bold tracking-tight text-emerald-950 sm:text-2xl">{about.founder.name}</p>
                  </div>
                  <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-900/10 bg-white/85 text-emerald-800 shadow-sm backdrop-blur-md" aria-hidden="true">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
            <span className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-emerald-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800 shadow-xl sm:block">
              {content.sinceLabel}
            </span>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-3 border-y border-emerald-950/10 py-5 sm:mt-20 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-emerald-950/10 sm:py-7">
          {stats.map((item, index) => (
            <div key={item.title} className="flex items-center gap-4 px-2 py-2 sm:px-6 sm:first:pl-2">
              <span className={`font-mono text-sm font-bold ${index === 0 ? 'text-sky-800' : index === 1 ? 'text-emerald-800' : 'text-amber-800'}`}>
                0{index + 1}
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
                <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7">
          <article className="relative overflow-hidden rounded-[1.75rem] bg-[#f2f4e9] p-6 text-emerald-950 sm:p-9">
            <span className="absolute -right-6 -top-14 font-serif text-[15rem] leading-none text-emerald-900/[0.045]" aria-hidden="true">“</span>
            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">{content.visionHeading}</p>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                <p>{renderCompanyName(content.visionIntro)}</p>
                <p>{renderCompanyName(content.visionHistory)}</p>
              </div>
              <blockquote className="mt-7 border-l-2 border-emerald-600 pl-4 text-base font-semibold italic leading-7 text-emerald-900 sm:text-lg">
                “{about.quote}”
              </blockquote>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-sky-800">{content.solutionsEyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900">{content.solutionsTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{content.solutionsDescription}</p>
            </article>

            <article className="rounded-[1.75rem] border border-emerald-200 bg-[#e8f4e9] p-6 shadow-sm sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-800">{content.designEyebrow}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {content.designPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    <span>{point.replace(/^[•]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-[1.75rem] border border-emerald-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-800">{content.technologyEyebrow}</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900">{content.technologyTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{content.technologyDescription}</p>
          </article>

          <div className="grid gap-3 sm:grid-cols-3">
            {systems.map(({ label, value, tone, Icon }, index) => (
              <article key={label} className={`relative overflow-hidden rounded-[1.5rem] border p-5 ${tone}`}>
                <span className="absolute -right-3 -top-3 opacity-10" aria-hidden="true">
                  <Icon className="h-20 w-20" strokeWidth={1} />
                </span>
                <p className="relative text-[10px] font-bold uppercase tracking-[0.2em]">{label}</p>
                <p className="relative mt-8 text-sm font-semibold leading-6 text-slate-800">{value}</p>
                <span className="absolute bottom-4 right-4 font-mono text-[10px] opacity-40">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-[1.75rem] border border-amber-200 bg-[linear-gradient(110deg,#fff8e9,#ffffff_48%,#eaf6eb)] p-6 shadow-sm sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-800">{content.futureHeading}</p>
            <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{content.futureDescription}</p>
          </div>
          <p className="max-w-sm border-l-2 border-emerald-600 pl-4 text-sm font-bold leading-6 text-emerald-900 lg:text-right">
            {content.slogan}
          </p>
        </div>
      </div>
    </section>
  )
}
