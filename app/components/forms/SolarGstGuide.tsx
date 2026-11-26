import type { useLocale } from '@/lib/LocaleContext'

type SolarGstGuideContent = ReturnType<typeof useLocale>['t']['estimation']['solarGstGuide']

export function SolarGstGuide({
  guide,
  titleId,
}: {
  guide: SolarGstGuideContent
  titleId: string
}) {
  return (
    <section
      className="mx-auto mt-10 max-w-7xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby={titleId}
    >
      <div className="flex items-start justify-between gap-4">
        <>
          <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-emerald-700 text-xs font-semibold tracking-wide leading-5">
            {guide.eyebrow}
          </p>
          <h2
            id={titleId}
            className="mt-2 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug"
          >
            {guide.title}
          </h2>
        </>
      </div>

      <div id={`${titleId.replace(/-title$/, '')}-content`}>
        <p className="mt-3 max-w-4xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {guide.intro}
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{guide.componentsTitle}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              {guide.components.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{guide.billingTitle}</h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{guide.billing}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{guide.itcTitle}</h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{guide.itc}</p>
          </article>
        </div>

        <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-emerald-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {guide.quoteTip}
        </p>
        <p className="mt-4 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{guide.disclaimer}</p>
        <div className="mt-5 border-t border-slate-200 pt-4">
          <h3 className="text-slate-800 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{guide.sourcesTitle}</h3>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {guide.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
