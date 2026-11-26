import { Check, Sun, Wind, Zap } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

const systemIcons = [Sun, Wind, Zap]

export function AboutWorkAndImpactSections({ t }: { t: Translations }) {
  const a = t.about

  const aboutSection = a.aboutSection

  const stats = aboutSection.stats

  const systems = aboutSection.systemCards.map((item, index) => ({
      ...item,
      tone: [
        'border-slate-200 bg-[#eaf2e9] shadow-sm',
        'border-slate-200 bg-[#fff8ed] shadow-sm',
        'border-slate-200 bg-slate-50 shadow-sm',
      ][index] ?? 'border-slate-200 bg-slate-100 shadow-sm',
      Icon: systemIcons[index] ?? Zap,
    }))
  return (
    <>
      <section id="about" className="relative isolate overflow-hidden bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 text-[#152b29] sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full border border-teal-800/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-8 h-[25rem] w-[25rem] rounded-full border border-amber-700/[0.08]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className="grid items-center gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-20"
          >
            <div className="min-w-0">
              <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2.5 uppercase text-teal-800 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">
                {aboutSection.eyebrow} {aboutSection.brandFirst} {aboutSection.brandSecond}
              </p>

              <h2 className="mt-6 max-w-3xl text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {aboutSection.title}
              </h2>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {aboutSection.tags.map((tag, index) => {
                        const Icon = systemIcons[index] ?? Zap
                        return (
                          <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#112c2a] tracking-normal">
                            <Icon className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                            {tag}
                          </span>
                        )
                      })}
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-slate-600 tracking-normal">
                {aboutSection.audience.map((item) => (
                  <span key={item} className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 rounded-full border border-slate-300 bg-white/65 px-3 py-2">
                    {item}
                  </span>
                      ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-xl bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] p-7 text-white shadow-sm sm:p-10 lg:p-12">
              <span className="block font-serif text-5xl font-bold leading-none text-amber-400 tracking-normal" aria-hidden="true">“</span>
              <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {a.quote}
              </blockquote>
              <div className="mt-8 border-t border-slate-700 pt-5">
                <p className="uppercase text-amber-300 text-xs font-semibold tracking-wide leading-5">
                  {aboutSection.visionHeading}
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 grid gap-4 border-y border-slate-200 py-6 sm:mt-16 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-teal-900/15 sm:py-7">
            {stats.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 px-2 py-2 sm:px-6 sm:first:pl-2">
                <span className="font-mono uppercase text-teal-700 text-xs font-semibold tracking-wide leading-5 tabular-nums">
                  0{index + 1} ·
                </span>
                <>
                  <p className="uppercase text-teal-800 text-xs font-semibold tracking-wide leading-5">{item.title}</p>
                  <p className="mt-2 text-[#112c2a] text-lg font-semibold tracking-normal leading-snug">{item.value}</p>
                </>
              </div>
                  ))}
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-2 xl:gap-6">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{aboutSection.solutionsEyebrow}</p>
              <h3 className="mt-3 text-[#152b29] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{aboutSection.solutionsTitle}</h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{aboutSection.solutionsDescription}</p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{aboutSection.designEyebrow}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {aboutSection.designPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-slate-700 tracking-normal">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" strokeWidth={2.5} aria-hidden="true" />
                    <span>{point.replace(/^[•]\s*/, '')}</span>
                  </li>
                      ))}
              </ul>
            </article>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">{aboutSection.technologyEyebrow}</p>
              <h3 className="mt-3 text-[#112c2a] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{aboutSection.technologyTitle}</h3>
              <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{aboutSection.technologyDescription}</p>
            </article>

            <div className="grid gap-3 sm:grid-cols-3">
              {systems.map(({ label, value, tone, Icon }, index) => (
                <article key={label} className={`relative overflow-hidden rounded-xl border p-5 ${tone}`}>
                  <span className="absolute -right-3 -top-3 opacity-10" aria-hidden="true">
                    <Icon className="h-20 w-20" strokeWidth={1} />
                  </span>
                  <p className="relative uppercase text-teal-800 text-xs font-semibold tracking-wide leading-5">{label}</p>
                  <p className="relative mt-8 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{value}</p>
                  <span className="absolute bottom-4 right-4 font-mono text-sm font-semibold text-slate-500 tracking-normal tabular-nums">0{index + 1}</span>
                </article>
                    ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 rounded-xl border border-slate-700 bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] p-6 text-white shadow-sm sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="uppercase text-amber-300 text-xs font-semibold tracking-wide leading-5">{aboutSection.futureHeading}</p>
              <p className="mt-3 text-teal-50/90 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{aboutSection.futureDescription}</p>
            </div>
            <p className="max-w-sm border-l-2 border-amber-400 pl-4 text-white lg:text-right text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {aboutSection.slogan}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
