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
    tone: [
      'border-[#d4dcef] bg-gradient-to-br from-[#f1f3fc] to-[#e0e8f6] shadow-[0_16px_38px_-24px_rgba(48,57,95,0.3)]',
      'border-[#eadbb7] bg-gradient-to-br from-[#fff8e9] to-[#f3e6c6] shadow-[0_16px_38px_-24px_rgba(91,70,30,0.28)]',
      'border-[#c7e0dc] bg-gradient-to-br from-[#edf8f7] to-[#d6ebe7] shadow-[0_16px_38px_-24px_rgba(16,68,61,0.3)]',
    ][index] ?? 'border-[#d4d7e3] bg-gradient-to-br from-[#f4f3f8] to-[#e6e5ed] shadow-sm',
    Icon: systemIcons[index] ?? Zap,
  }))

  const renderCompanyName = (text: string) => {
    const [before, after] = text.split('{companyName}')

    return (
      <>
        {before}
        <strong className="font-bold text-[#087a45]">{content.companyName}</strong>
        {after}
      </>
    )
  }

  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#eaf1eb] px-4 py-14 text-[#102b28] sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full border border-emerald-800/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-8 h-[25rem] w-[25rem] rounded-full border border-emerald-800/[0.06]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087a61]">
              {content.eyebrow} {content.brandFirst} {content.brandSecond}
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#102b28] sm:text-5xl lg:text-7xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {about.paragraph1}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {content.tags.map((tag, index) => {
                const Icon = systemIcons[index] ?? Zap
                return (
                  <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-[#d3dfd5] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#173b34]">
                    <Icon className="h-3.5 w-3.5 text-[#087a61]" aria-hidden="true" />
                    {tag}
                  </span>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {content.audience.map((item) => (
                <span key={item} className="rounded-full border border-[#d3dfd5] bg-white/60 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] bg-[#102d2a] p-7 text-white shadow-[0_30px_75px_-35px_rgba(16,45,42,0.4)] sm:p-10 lg:p-12">
            <span className="block font-serif text-5xl font-bold leading-none text-[#f5a640]" aria-hidden="true">“</span>
            <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {about.quote}
            </blockquote>
            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5a640]">
                {content.visionHeading}
              </p>
            </div>
          </article>
        </motion.div>

        <div className="mt-12 grid gap-4 border-y border-[#cbd8ce] py-6 sm:mt-16 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#cbd8ce] sm:py-7">
          {stats.map((item, index) => (
            <div key={item.title} className="flex items-start gap-4 px-2 py-2 sm:px-6 sm:first:pl-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#087a61]">
                0{index + 1} ·
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087a61]">{item.title}</p>
                <p className="mt-2 text-base font-semibold leading-6 text-[#102b28] sm:text-lg">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-y border-[#cbd8ce] py-5 sm:mt-12 sm:py-6">
          <div className="grid items-center gap-5 sm:grid-cols-[auto_1fr_auto] sm:gap-7">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-[#d3dfd5] bg-white sm:h-32 sm:w-32">
              <OptimizedImage
                src="/images/founder-aerosunenergy.webp"
                alt={content.imageAlt}
                fill
                sizes="(min-width: 640px) 128px, 112px"
                className="object-cover object-center"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#087a61]">
                {content.leadershipLabel} · {content.founderBadge}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#102b28] sm:text-3xl">
                {about.founder.name}
              </h3>
            </div>
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                {content.sinceLabel}
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cbd8ce] bg-white text-[#087a61]" aria-hidden="true">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:gap-7">
          <article className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(135deg,#FF9933_0%,#FFFFFF_35%,#FFFFFF_70%,#138808_100%)] p-3 text-[#102b28] shadow-[0_28px_70px_-34px_rgba(16,45,42,0.35)] sm:p-4">
            <span className="absolute -right-6 -top-14 font-serif text-[15rem] leading-none text-[#e77924]/[0.10]" aria-hidden="true">“</span>
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center">
              <svg
                viewBox="0 0 100 100"
                className="h-16 w-16 text-[#000080] drop-shadow-[0_2px_3px_rgba(0,0,128,0.3)] sm:h-20 sm:w-20"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="36" fill="none" stroke="#000080" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="7" fill="#000080" />
                <g stroke="#000080" strokeWidth="1.8">
                  {Array.from({ length: 12 }, (_, index) => (
                    <line key={index} x1="50" y1="15" x2="50" y2="85" transform={`rotate(${index * 15} 50 50)`} />
                  ))}
                </g>
              </svg>
              <p className="mt-2 bg-white/95 px-4 py-1 text-center text-xs font-black uppercase tracking-[0.2em] text-[#087a45] sm:text-sm">
                Make in India
              </p>
            </div>
            <div className="relative p-3 sm:p-5">
              <div className="space-y-4 text-sm leading-7 text-[#374b44] sm:text-lg sm:leading-8">
                <p>{renderCompanyName(content.visionIntro)}</p>
                <p>{renderCompanyName(content.visionHistory)}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            <article className="rounded-[1.75rem] border border-[#eadfc7] bg-gradient-to-br from-[#fffaf0] to-[#f3e8d5] p-6 shadow-[0_20px_50px_-32px_rgba(92,68,31,0.3)] sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087a61]">{content.solutionsEyebrow}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#102b28]">{content.solutionsTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{content.solutionsDescription}</p>
            </article>

            <article className="rounded-[1.75rem] border border-[#c9e0e4] bg-gradient-to-br from-[#edf7f8] to-[#d7eaed] p-6 shadow-[0_20px_50px_-32px_rgba(32,77,85,0.32)] sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087a61]">{content.designEyebrow}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {content.designPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-[#29443c]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#087a61]" strokeWidth={2.5} aria-hidden="true" />
                    <span>{point.replace(/^[•]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-[1.75rem] border border-[#d6dced] bg-gradient-to-br from-[#f1f3fc] to-[#e0e7f3] p-6 shadow-[0_20px_50px_-32px_rgba(48,57,95,0.32)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087a61]">{content.technologyEyebrow}</p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#102b28]">{content.technologyTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{content.technologyDescription}</p>
          </article>

          <div className="grid gap-3 sm:grid-cols-3">
            {systems.map(({ label, value, tone, Icon }, index) => (
              <article key={label} className={`relative overflow-hidden rounded-[1.5rem] border p-5 ${tone}`}>
                <span className="absolute -right-3 -top-3 opacity-10" aria-hidden="true">
                  <Icon className="h-20 w-20" strokeWidth={1} />
                </span>
                <p className="relative text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#087a61]">{label}</p>
                <p className="relative mt-8 text-sm font-semibold leading-6 text-[#243c35]">{value}</p>
                <span className="absolute bottom-4 right-4 font-mono text-[10px] font-semibold text-slate-500">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-[#263753] to-[#45345f] p-6 text-white shadow-[0_28px_70px_-34px_rgba(38,42,75,0.62)] sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#f6bd67]">{content.futureHeading}</p>
            <p className="mt-3 text-sm leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">{content.futureDescription}</p>
          </div>
          <p className="max-w-sm border-l-2 border-[#f6bd67] pl-4 text-sm font-bold leading-6 text-white lg:text-right">
            {content.slogan}
          </p>
        </div>
      </div>
    </section>
  )
}
