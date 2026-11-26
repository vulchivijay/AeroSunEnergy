import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

export function AboutStoryAndGovernanceSections({ t }: { t: Translations }) {
  const a = t.about

  const content = a.pageContent

  const approvalRowsData = a.governanceRows

  const pageStrings = {
      badge: a.heroBadge,
      companyTitleA: a.heroTitleA,
      companyTitleB: a.heroTitleB,
      legalLabel: a.legalLabel,
      pitch: a.heroPitch,
      promiseLabel: a.promiseLabel,
      promiseText: a.promiseText,
      intro: a.heroDescription,
      explore: a.ctaExplore,
      leadership: a.ctaLeadership,
      companyProfile: a.ctaCompanyProfile,
      productCatalogue: a.ctaProductCatalogue,
      storyBadge: a.storyBadge,
      storyHeading: a.storyHeading,
      governanceBadge: a.governanceBadge,
      governanceHeading: a.governanceHeading,
      governanceDescription: a.governanceDescription,
      leadershipBadge: a.leadershipBadge,
      leadershipHeading: a.leadershipHeading,
      leadershipIntro: a.leadershipIntro,
    }
  return (
    <>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-5 border-b border-slate-200 pb-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-8 lg:gap-x-12 lg:pb-9">
            <h2 className="mt-0 max-w-4xl border-l-[3px] border-[#087a61] pl-5 text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {pageStrings.storyHeading}
            </h2>
            <p className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] text-xs font-semibold tracking-wide leading-5">{pageStrings.storyBadge}</p>
            <div className="h-px w-full bg-gradient-to-r from-[#137c63]/25 via-amber-500/25 to-transparent sm:col-span-2" />
          </div>
          <div className="grid gap-7 pt-8 text-sm leading-7 text-slate-600 sm:grid-cols-2 sm:text-base sm:leading-8 lg:grid-cols-3 lg:gap-10">
            <p className="border-l-2 border-slate-200 pl-5 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.founderBioParagraph1.map((segment, index) => {
                      const text = index === 0 || index === 2
                      return text ? (
                        <strong key={segment} className={index === 0 ? 'font-bold text-[#152b29] tracking-normal' : 'font-bold text-[#137c63] tracking-normal'}>
                          {segment}
                        </strong>
                      ) : segment
                    })}
            </p>
            <p className="border-l-2 border-slate-200 pl-5 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.founderBioParagraph2.map((segment, index) => index === 1 ? (
                <strong key={segment} className="font-bold text-[#137c63] tracking-normal">{segment}</strong>
                    ) : segment)}
            </p>
            <p className="border-l-2 border-slate-200 pl-5 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.founderBioParagraph3}
            </p>
          </div>
        </div>
      </section>
      <section id="compliance" className="bg-gradient-to-br from-white to-[#f1f2f6] border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="relative overflow-hidden bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] px-5 py-7 text-white sm:px-8 sm:py-9">
              <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-slate-700" aria-hidden="true" />
              <div className="absolute -right-2 -top-14 h-44 w-44 rounded-full border border-slate-700" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/[0.08] px-4 py-2 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    {pageStrings.governanceBadge}
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                    {pageStrings.governanceHeading}
                  </h2>
                  <p className="mt-2 text-indigo-50/90 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {pageStrings.governanceDescription}
                  </p>
                </div>
                <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-700 bg-white/[0.08] px-4 py-3">
                  <span className="text-3xl font-bold leading-none text-amber-200 tracking-normal tabular-nums"><DigitalNumber value={approvalRowsData.length} /></span>
                  <span className="max-w-20 text-xs uppercase text-indigo-50 text-xs font-semibold tracking-wide leading-5">{content.companyRecordsLabel}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:p-8">
              {approvalRowsData.map((row, index) => {
                      const label = row.label
                      const status = row.status
                      return (
                        <article key={label} className="group flex min-h-24 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-md sm:gap-4 sm:p-5">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf2e9] font-mono text-sm font-bold text-[#14785e] ring-1 ring-[#087a61]/10 transition-colors group-hover:bg-[#dce9df] tracking-normal tabular-nums">
                            <DigitalNumber value={String(index + 1).padStart(2, '0')} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{label}</h3>
                            <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200 bg-[#eaf2e9] px-2.5 py-1 text-xs uppercase text-[#14785e] text-xs font-semibold tracking-wide leading-5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#087a61]" />
                              {status}
                            </span>
                          </div>
                        </article>
                      )
                    })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
