import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

export function AboutRoadmapSections({ t }: { t: Translations }) {
  const a = t.about

  const content = a.pageContent
  return (
    <>
      <section id="roadmap" className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{content.roadmapBadge}</p>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.roadmapHeading}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.immediatePrioritiesHeading}</h3>
                <span className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 rounded-full bg-[#fff1dc] px-3 py-1 text-xs uppercase text-[#a95600] text-xs font-semibold tracking-wide leading-5">{content.currentStatusLabel}</span>
              </div>
              <ol className="mt-6 space-y-3">
                {content.currentGoals.map((goal, index) => (
                  <li key={goal} className="flex gap-3 border-b border-slate-200 pb-3 last:border-0">
                    <span className="font-mono text-sm font-bold text-[#a95600] tracking-normal tabular-nums"><DigitalNumber value={String(index + 1).padStart(2, '0')} /></span>
                    <span className="text-sm leading-7 text-slate-700">{goal}</span>
                  </li>
                      ))}
              </ol>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.growthRoadmapHeading}</h3>
              <div className="mt-6 space-y-5">
                {content.futureGoals.map((group, index) => (
                  <div key={group.title} className="relative border-l border-slate-200 pl-5">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#087a61] ring-4 ring-white" />
                    <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{content.phaseLabel} 0{index + 1}</p>
                    <h4 className="mt-1 text-slate-950 text-lg font-semibold tracking-normal leading-snug">{group.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-7 text-slate-700"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#087a61]" />{item}</li>
                            ))}
                    </ul>
                  </div>
                      ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="capabilities" className="bg-gradient-to-br from-white to-[#f1f2f6] border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-teal-800 before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{content.servicesBadge}</p>
              <h2 className="mt-3 max-w-3xl text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.servicesHeading}</h2>
            </div>
            <span className="text-sm font-semibold text-slate-600 tracking-normal">{content.servicesAudience}</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.serviceGroups.map((group, index) => (
              <article key={group.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-md sm:p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.serviceAccents[index]}`} />
                <p className="font-mono text-[#137c63] tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">0{index + 1} / {content.solutionsLabel.toUpperCase()}</p>
                <h3 className="mt-4 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087a61]" />{item}</li>
                        ))}
                </ul>
              </article>
                  ))}
          </div>
        </div>
      </section>
    </>
  )
}
