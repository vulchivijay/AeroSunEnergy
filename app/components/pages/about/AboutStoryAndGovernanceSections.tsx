import { BadgeCheck, Building2, Calculator, ClipboardCheck, FileCheck2, FileText, Receipt, Rocket, ShieldCheck, Store, UserRound, Users, type LucideIcon } from "lucide-react";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

const governanceIcons: LucideIcon[] = [
  FileCheck2,
  Users,
  Receipt,
  ClipboardCheck,
  Calculator,
  ShieldCheck,
  UserRound,
  Store,
  Rocket,
  FileText,
]

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
            <p className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{pageStrings.storyBadge}</p>
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
      <section id="compliance" aria-labelledby="governance-title" className="border-y border-[#d6e8e3] bg-[#f5faf8]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-3xl">
            <header className="relative isolate overflow-hidden rounded-3xl bg-[linear-gradient(110deg,#063c3b_0%,#075e58_58%,#092c3c_100%)] px-6 py-7 text-white shadow-sm sm:px-9 sm:py-9 lg:px-10">
              <div className="pointer-events-none absolute -right-14 -top-28 -z-10 h-80 w-80 rounded-full border border-teal-100/20" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-2 -top-20 -z-10 h-64 w-64 rounded-full border border-teal-100/15" aria-hidden="true" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
                <div className="max-w-3xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-black/10 px-4 py-2 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">
                    <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden="true" />
                    {pageStrings.governanceBadge}
                  </p>
                  <h2 id="governance-title" className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold !tracking-tight leading-tight">
                    {pageStrings.governanceHeading}
                  </h2>
                  <p className="mt-2 text-teal-50/90 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {pageStrings.governanceDescription}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative hidden h-24 w-28 items-center justify-center sm:flex" aria-hidden="true">
                    <div className="absolute h-20 w-16 rotate-6 rounded-xl border-2 border-teal-100/50 bg-teal-50/10" />
                    <div className="relative flex h-20 w-16 -rotate-6 items-center justify-center rounded-xl border-2 border-teal-100 bg-white text-[#087a61] shadow-sm">
                      <FileCheck2 className="h-11 w-11" strokeWidth={1.6} />
                    </div>
                    <BadgeCheck className="absolute bottom-0 right-1 h-9 w-9 rounded-full bg-amber-300 text-[#075e4b]" strokeWidth={2} />
                  </div>
                  <div className="flex w-fit items-center gap-3 rounded-2xl border-2 border-amber-300/80 bg-black/10 px-4 py-3">
                    <span className="text-3xl font-bold leading-none text-amber-300 tracking-normal tabular-nums">
                      <DigitalNumber value={approvalRowsData.length} />
                    </span>
                    <span className="max-w-24 border-l border-amber-300/60 pl-3 uppercase text-white text-xs font-semibold tracking-wide leading-5">
                      {content.companyRecordsLabel}
                    </span>
                  </div>
                </div>
              </div>
            </header>
            <div className="grid gap-3 pt-5 sm:grid-cols-2 sm:gap-4 sm:pt-6">
              {approvalRowsData.map((row, index) => {
                const Icon = governanceIcons[index] ?? FileCheck2
                return (
                  <article
                    key={row.label}
                    className="relative flex min-h-24 items-center gap-3 overflow-hidden rounded-2xl border border-[#b8dcd5] bg-[linear-gradient(135deg,#ffffff_0%,#f8fcfb_70%,#e9f7f3_100%)] p-4 shadow-[0_6px_18px_rgba(7,94,88,0.07)] sm:gap-4 sm:p-5"
                  >
                    <div className="flex h-11 w-12 shrink-0 items-center justify-center rounded-lg bg-[#087a61] text-white [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]">
                      <span className="pr-1 font-mono text-sm font-bold tracking-normal tabular-nums">
                        <DigitalNumber value={String(index + 1).padStart(2, '0')} />
                      </span>
                    </div>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e1f3ee] text-[#075e58]" aria-hidden="true">
                      <Icon className="h-8 w-8" strokeWidth={1.7} />
                    </span>
                    <span className="h-14 w-px shrink-0 bg-amber-400" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[#102b33] text-lg sm:text-xl font-bold !tracking-tight leading-snug">
                        {row.label}
                      </h3>
                      <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#b9e8d8] bg-[#e5f7ef] px-2.5 py-1 uppercase text-[#075e4b] text-xs font-semibold tracking-wide leading-5">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#16a34a]" aria-hidden="true" />
                        {row.status}
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
