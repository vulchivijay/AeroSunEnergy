import Link from "next/link";
import { OptimizedImage } from "@/app/components/ui";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import { TrustRibbon } from "@/app/components/ui/TrustRibbon";
import type { Translations } from '@/lib/LocaleContext';

export function AboutHeroSections({ t }: { t: Translations }) {
  const a = t.about

  const content = a.pageContent

  const companyStatsData = a.companyStats

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
      <section id="story" className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div className="pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-teal-900/[0.08] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-teal-900/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-teal-900/[0.08]" />
          <div className="absolute inset-32 rounded-full border border-teal-900/[0.08]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {pageStrings.badge}
            </div>
            <h1 className="mt-6 text-[#152b29] text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {pageStrings.companyTitleA}
              <span className="mt-2 block text-[#137c63]">{pageStrings.companyTitleB}</span>
            </h1>
            <p className="mt-5 uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">
              {pageStrings.legalLabel}
            </p>
            <p className="mt-6 max-w-xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {pageStrings.pitch.split(' • ').map((part, index) => (
                <span key={part}>
                  {index > 0 && <span className="text-[#137c63]"> &middot; </span>}
                  {part}
                </span>
                    ))}
            </p>
            <div className="mt-8 border-l-2 border-[#087a61] pl-5">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{pageStrings.promiseLabel}</p>
              <p className="mt-2 italic text-[#112c2a] text-lg font-semibold tracking-normal leading-snug">&ldquo;{pageStrings.promiseText}&rdquo;</p>
            </div>
            <p className="mt-8 max-w-2xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {pageStrings.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#capabilities" className="rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal">
                {pageStrings.explore}
              </a>
              <a href="#leadership" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80 tracking-normal">
                {pageStrings.leadership}
              </a>
              <Link href="/about/company-profile" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80 tracking-normal">
                {pageStrings.companyProfile}
              </Link>
              <Link href="/about/product-catalogue" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80 tracking-normal">
                {pageStrings.productCatalogue}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-full bg-teal-700/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <div className="relative h-[26rem] overflow-hidden rounded-xl bg-[#172554] sm:h-[32rem]">
                <OptimizedImage
                  src="/images/founder-aerosunenergy.webp"
                  alt={content.founderImageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="uppercase text-amber-300 text-xs font-semibold tracking-wide leading-5">{content.founderRole}</p>
                  <h2 className="mt-2 text-white text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.founderName}</h2>
                  <p className="mt-2 max-w-sm text-white/85 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {content.founderImageBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-10">
            {companyStatsData.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-4 sm:justify-start sm:gap-5">
                <span className="text-xs uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{stat.label}</span>
                <span className="text-sm font-semibold text-[#152b29] tracking-normal tabular-nums"><DigitalNumber value={stat.value} /></span>
              </div>
                  ))}
          </div>
        </div>
      </section>
      <TrustRibbon />
    </>
  )
}
