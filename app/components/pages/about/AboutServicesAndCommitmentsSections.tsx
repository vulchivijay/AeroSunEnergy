import type { Translations } from '@/lib/LocaleContext';

export function AboutServicesAndCommitmentsSections({ t }: { t: Translations }) {
  const a = t.about

  const content = a.pageContent
  return (
    <>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white text-[#152b29]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{content.commitmentsBadge}</p>
            <h2 className="mt-3 text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.commitmentsHeading}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
                    { title: content.promiseGroupTitle, points: content.promisePoints, accent: 'text-amber-700' },
                    { title: content.missionGroupTitle, points: content.missionPoints, accent: 'text-teal-700' },
                  ].map((group) => (
                    <article key={group.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <h3 className={` uppercase ${group.accent} text-xl sm:text-2xl font-semibold !tracking-tight leading-snug`}>{group.title}</h3>
                      <ul className="mt-5 space-y-4">
                        {group.points.map((point, index) => (
                          <li key={point} className="flex gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                            <span className={`font-mono text-base font-bold ${group.accent} tracking-normal tabular-nums`}>0{index + 1}</span>
                            <span className="text-sm leading-7 text-slate-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <>
              <p className="uppercase text-[#a95600] text-xs font-semibold tracking-wide leading-5">{content.contactCalloutTitle}</p>
              <p className="mt-2 text-[#152b29] text-lg font-semibold tracking-normal leading-snug">{content.contactCalloutDescription}</p>
            </>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] tracking-normal">
              {content.contactAction} <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-[#eaf2e9] px-4 py-2 uppercase text-[#137c63] before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{content.workBadge}</p>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.workHeading}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{content.qualityHeading}</p>
              <div className="mt-5 divide-y divide-slate-200">
                {content.qualityPoints.map((point, index) => (
                  <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-mono text-sm font-bold text-[#137c63] tracking-normal tabular-nums">0{index + 1}</span>
                    <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{point}</p>
                  </div>
                      ))}
              </div>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="uppercase text-[#a95600] text-xs font-semibold tracking-wide leading-5">{content.ethicsHeading}</p>
              <div className="mt-5 divide-y divide-slate-200">
                {content.ethicsPoints.map((point, index) => (
                  <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-mono text-sm font-bold text-[#a95600] tracking-normal tabular-nums">0{index + 1}</span>
                    <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{point}</p>
                  </div>
                      ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
