import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

export function AboutLeadershipAndStrengthsSections({ t }: { t: Translations }) {
  const a = t.about

  const content = a.pageContent

  const coreValuesData = content.leadershipValues

  const founderProfilesData = a.leadershipProfiles

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
      <section id="leadership" className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-8 lg:gap-x-12">
            <p className="order-1 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] sm:order-2 sm:mb-1 sm:justify-self-end text-xs font-semibold tracking-wide leading-5">{pageStrings.leadershipBadge}</p>
            <h2 className="order-2 mt-0 max-w-4xl border-l-[3px] border-[#087a61] pl-5 text-[#152b29] sm:order-1 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{pageStrings.leadershipHeading}</h2>
            <p className="mt-0 border-b border-slate-200 pb-6 text-slate-600 sm:col-span-2 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {pageStrings.leadershipIntro}
            </p>
            <div className="mt-0 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              {founderProfilesData.map((profile) => (
                <article key={profile.name} className="flex flex-col items-start gap-5 bg-white px-6 py-7 first:bg-[#eaf2e9] sm:px-8 sm:py-9 lg:px-7 xl:px-9">
                  <div className="flex flex-col items-start gap-4">
                    <span className="text-3xl font-bold text-[#152b29] tracking-normal">{profile.initials}</span>
                    <>
                      <h3 className="text-[#152b29] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{profile.name}</h3>
                      <p className="mt-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{profile.role}</p>
                    </>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{profile.description}</p>
                </article>
                    ))}
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {coreValuesData.map((value, index) => (
                <article key={value.title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{value.title}</h3>
                    <span className="font-mono text-xs font-bold text-[#137c63] tracking-normal tabular-nums">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{value.description}</p>
                </article>
                    ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2 uppercase text-amber-900 before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] text-xs font-semibold tracking-wide leading-5">{content.whySectionBadge}</p>
              <h2 className="mt-3 max-w-2xl text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.whyHeading}</h2>
            </>
            <p className="max-w-lg text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.whyDescription}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.companyStrengthsStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-700 bg-white/[0.05] p-5">
                <p className="text-amber-800 text-lg font-semibold tracking-normal leading-snug tabular-nums"><DigitalNumber value={stat.value} /></p>
                <p className="mt-2 uppercase text-slate-700 text-xs font-semibold tracking-wide leading-5">{stat.label}</p>
              </div>
                  ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-700 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.strengthsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.companyStrengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{item}</li>
                      ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.customerReasonsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{item}</li>
                      ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.reasons.map((reason) => (
              <article key={reason.title} className="border-l border-amber-300/70 pl-4">
                <p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{reason.title}</p>
                <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{reason.text}</p>
              </article>
                  ))}
          </div>
        </div>
      </section>
    </>
  )
}
