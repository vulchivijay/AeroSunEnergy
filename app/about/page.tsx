'use client'

import Link from 'next/link'
import { Check, Sun, Wind, Zap } from 'lucide-react'
import { motion } from '@/lib/motion'
import { OptimizedImage } from '@/app/components/ui'
import { useLocale } from '@/lib/LocaleContext'

const systemIcons = [Sun, Wind, Zap]

export default function AboutPage() {
  const { t } = useLocale()
  const a = t.about
  const content = a.pageContent
  const aboutSection = a.aboutSection

  const companyStatsData = a.companyStats
  const coreValuesData = content.leadershipValues
  const founderProfilesData = a.leadershipProfiles
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
  const stats = aboutSection.stats
  const systems = aboutSection.systemCards.map((item, index) => ({
    ...item,
    tone: [
      'border-[#dce9df] bg-[#eaf2e9] shadow-sm',
      'border-amber-100 bg-[#fff8ed] shadow-sm',
      'border-slate-200 bg-slate-50 shadow-sm',
    ][index] ?? 'border-slate-200 bg-slate-100 shadow-sm',
    Icon: systemIcons[index] ?? Zap,
  }))
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section id="story" className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_82%_15%,rgba(99,102,241,0.13),transparent_35%),linear-gradient(125deg,#f8fafc_0%,#e0e7ff_58%,#f5f3ff_100%)] text-[#152b29]">
        <div className="pointer-events-none absolute inset-0 -z-10" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-teal-900/[0.08] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-teal-900/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-teal-900/[0.08]" />
          <div className="absolute inset-32 rounded-full border border-teal-900/[0.08]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              {pageStrings.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tighter text-[#152b29] sm:text-6xl lg:text-7xl">
              {pageStrings.companyTitleA}
              <span className="mt-2 block text-[#137c63]">{pageStrings.companyTitleB}</span>
            </h1>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
              {pageStrings.legalLabel}
            </p>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">
              {pageStrings.pitch.split(' • ').map((part, index) => (
                <span key={part}>
                  {index > 0 && <span className="text-[#137c63]"> &middot; </span>}
                  {part}
                </span>
              ))}
            </p>
            <div className="mt-8 border-l-2 border-[#087a61] pl-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#137c63]">{pageStrings.promiseLabel}</p>
              <p className="mt-2 text-xl font-semibold italic text-[#112c2a] sm:text-2xl">&ldquo;{pageStrings.promiseText}&rdquo;</p>
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {pageStrings.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#capabilities" className="rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]">
                {pageStrings.explore}
              </a>
              <a href="#leadership" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80">
                {pageStrings.leadership}
              </a>
              <Link href="/about/company-profile" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80">
                {pageStrings.companyProfile}
              </Link>
              <Link href="/about/product-catalogue" className="rounded-full border border-[#137c63]/30 bg-white/50 px-5 py-3 text-sm font-bold text-[#075e4b] transition hover:bg-white/80">
                {pageStrings.productCatalogue}
              </Link>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-teal-700/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-[#e2e8e2] bg-white p-2 shadow-[0_20px_55px_-40px_rgba(23,37,84,0.25)]">
              <div className="relative h-[26rem] overflow-hidden rounded-[22px] bg-[#172554] sm:h-[32rem]">
                <OptimizedImage
                  src="/images/founder-aerosunenergy.webp"
                  alt={content.founderImageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-amber-300">{content.founderRole}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{content.founderName}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-white/85">
                    {content.founderImageBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#cbd6cc]">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-10">
            {companyStatsData.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-4 sm:justify-start sm:gap-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#137c63]">{stat.label}</span>
                <span className="text-sm font-semibold text-[#152b29]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-5 border-b border-[#cbd6cc] pb-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-8 lg:gap-x-12 lg:pb-9">
            <h2 className="mt-0 max-w-4xl border-l-[3px] border-[#087a61] pl-5 text-3xl font-black leading-[1.05] tracking-tighter text-[#152b29] sm:text-4xl lg:text-5xl">
              {pageStrings.storyHeading}
            </h2>
            <p className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-['']">{pageStrings.storyBadge}</p>
            <div className="h-px w-full bg-gradient-to-r from-[#137c63]/25 via-amber-500/25 to-transparent sm:col-span-2" />
          </div>
          <div className="grid gap-7 pt-8 text-sm leading-7 text-slate-600 sm:grid-cols-2 sm:text-base sm:leading-8 lg:grid-cols-3 lg:gap-10">
            <p className="border-l-2 border-[#dce9df] pl-5">
              {content.founderBioParagraph1.map((segment, index) => {
                const text = index === 0 || index === 2
                return text ? (
                  <strong key={segment} className={index === 0 ? 'font-bold text-[#152b29]' : 'font-bold text-[#137c63]'}>
                    {segment}
                  </strong>
                ) : segment
              })}
            </p>
            <p className="border-l-2 border-[#dce9df] pl-5">
              {content.founderBioParagraph2.map((segment, index) => index === 1 ? (
                <strong key={segment} className="font-bold text-[#137c63]">{segment}</strong>
              ) : segment)}
            </p>
            <p className="border-l-2 border-[#dce9df] pl-5">
              {content.founderBioParagraph3}
            </p>
          </div>
        </div>
      </section>

      <section id="compliance" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-[30px] border border-[#e2e8e2] bg-white shadow-[0_20px_55px_-40px_rgba(23,37,84,0.25)]">
            <div className="relative overflow-hidden bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] px-5 py-7 text-white sm:px-8 sm:py-9">
              <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -right-2 -top-14 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/[0.08] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    {pageStrings.governanceBadge}
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tighter sm:text-4xl">
                    {pageStrings.governanceHeading}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-indigo-50/90">
                    {pageStrings.governanceDescription}
                  </p>
                </div>
                <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3">
                  <span className="text-3xl font-black leading-none text-amber-200">{approvalRowsData.length}</span>
                  <span className="max-w-20 text-[12px] font-bold uppercase leading-4 tracking-[0.16em] text-indigo-50">{content.companyRecordsLabel}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:p-8">
              {approvalRowsData.map((row, index) => {
                const label = row.label
                const status = row.status
                return (
                  <article key={label} className="group flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-lg sm:gap-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf2e9] font-mono text-sm font-black text-[#14785e] ring-1 ring-[#087a61]/10 transition-colors group-hover:bg-[#dce9df]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold leading-6 text-slate-900">{label}</h3>
                      <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#cfe3d3] bg-[#eaf2e9] px-2.5 py-1 text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-[#14785e]">
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

      <section id="leadership" className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-8 lg:gap-x-12">
            <p className="order-1 inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] sm:order-2 sm:mb-1 sm:justify-self-end">{pageStrings.leadershipBadge}</p>
            <h2 className="order-2 mt-0 max-w-4xl border-l-[3px] border-[#087a61] pl-5 text-3xl font-black leading-[1.05] tracking-tighter text-[#152b29] sm:order-1 sm:text-4xl lg:text-5xl">{pageStrings.leadershipHeading}</h2>
            <p className="mt-0 border-b border-[#cbd6cc] pb-6 text-sm leading-7 text-slate-600 sm:col-span-2 sm:text-base sm:leading-8">
              {pageStrings.leadershipIntro}
            </p>
            <div className="mt-0 grid gap-px overflow-hidden rounded-[30px] border border-slate-200 bg-slate-200 sm:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              {founderProfilesData.map((profile) => (
                <article key={profile.name} className="flex flex-col items-start gap-5 bg-white px-6 py-7 first:bg-[#eaf2e9] sm:px-8 sm:py-9 lg:px-7 xl:px-9">
                  <div className="flex flex-col items-start gap-4">
                    <span className="text-3xl font-black text-[#152b29]">{profile.initials}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#152b29] sm:text-2xl">{profile.name}</h3>
                      <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#137c63]">{profile.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{profile.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-[#cbd6cc] pt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {coreValuesData.map((value, index) => (
                <article key={value.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-extrabold text-slate-950">{value.title}</h3>
                    <span className="font-mono text-[12px] font-bold text-[#137c63]">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-200 before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-300 before:content-['']">{content.whySectionBadge}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tighter text-white sm:text-4xl">{content.whyHeading}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-200">{content.whyDescription}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.companyStrengthsStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-3xl font-black tracking-tight text-amber-300">{stat.value}</p>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.17em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">{content.strengthsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.companyStrengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-100"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">{content.customerReasonsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-100"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.reasons.map((reason) => (
              <article key={reason.title} className="border-l border-amber-300/70 pl-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-amber-200">{reason.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-[#f7f7f2]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-['']">{content.roadmapBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-4xl">{content.roadmapHeading}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-extrabold text-slate-950">{content.immediatePrioritiesHeading}</h3>
                <span className="rounded-full bg-[#fff1dc] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-[#a95600]">{content.currentStatusLabel}</span>
              </div>
              <ol className="mt-6 space-y-3">
                {content.currentGoals.map((goal, index) => (
                  <li key={goal} className="flex gap-3 border-b border-slate-200 pb-3 last:border-0">
                    <span className="font-mono text-sm font-bold text-[#a95600]">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm leading-7 text-slate-700">{goal}</span>
                  </li>
                ))}
              </ol>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-extrabold text-slate-950">{content.growthRoadmapHeading}</h3>
              <div className="mt-6 space-y-5">
                {content.futureGoals.map((group, index) => (
                  <div key={group.title} className="relative border-l border-[#cbd6cc] pl-5">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#087a61] ring-4 ring-white" />
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#137c63]">{content.phaseLabel} 0{index + 1}</p>
                    <h4 className="mt-1 text-sm font-extrabold text-slate-950">{group.title}</h4>
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

      <section id="capabilities" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-900/10 bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-teal-800 before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal-600 before:content-['']">{content.servicesBadge}</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tighter text-slate-950 sm:text-4xl">{content.servicesHeading}</h2>
            </div>
            <span className="text-sm font-semibold text-slate-600">{content.servicesAudience}</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.serviceGroups.map((group, index) => (
              <article key={group.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9fcbb5] hover:shadow-lg sm:p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.serviceAccents[index]}`} />
                <p className="font-mono text-sm font-bold text-[#137c63]">0{index + 1} / {content.solutionsLabel.toUpperCase()}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950">{group.title}</h3>
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

      <section className="bg-[#f7f7f2] text-[#152b29]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-['']">{content.commitmentsBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-[#152b29] sm:text-4xl">{content.commitmentsHeading}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { title: content.promiseGroupTitle, points: content.promisePoints, accent: 'text-amber-700' },
              { title: content.missionGroupTitle, points: content.missionPoints, accent: 'text-teal-700' },
            ].map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <h3 className={`text-md font-black uppercase tracking-[0.2em] ${group.accent}`}>{group.title}</h3>
                <ul className="mt-5 space-y-4">
                  {group.points.map((point, index) => (
                    <li key={point} className="flex gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                      <span className={`font-mono text-md font-bold ${group.accent}`}>0{index + 1}</span>
                      <span className="text-sm leading-7 text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#a95600]">{content.contactCalloutTitle}</p>
              <p className="mt-2 text-lg font-bold text-[#152b29]">{content.contactCalloutDescription}</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b]">
              {content.contactAction} <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#137c63]/15 bg-[#eaf2e9] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-['']">{content.workBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tighter text-slate-950 sm:text-4xl">{content.workHeading}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-4xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#137c63]">{content.qualityHeading}</p>
              <div className="mt-5 divide-y divide-slate-200">
                {content.qualityPoints.map((point, index) => (
                  <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-mono text-sm font-bold text-[#137c63]">0{index + 1}</span>
                    <p className="text-sm leading-7 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#a95600]">{content.ethicsHeading}</p>
              <div className="mt-5 divide-y divide-slate-200">
                {content.ethicsPoints.map((point, index) => (
                  <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                    <span className="font-mono text-sm font-bold text-[#a95600]">0{index + 1}</span>
                    <p className="text-sm leading-7 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="about" className="relative isolate overflow-hidden bg-[#e1ece3] px-4 py-12 text-[#152b29] sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full border border-teal-800/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-8 h-[25rem] w-[25rem] rounded-full border border-amber-700/[0.08]" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="grid items-center gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="min-w-0">
              <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-teal-900/10 bg-white/75 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-800 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-amber-500 before:content-['']">
                {aboutSection.eyebrow} {aboutSection.brandFirst} {aboutSection.brandSecond}
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-tighter text-[#152b29] sm:text-5xl lg:text-6xl">
                {aboutSection.title}
              </h2>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {aboutSection.tags.map((tag, index) => {
                  const Icon = systemIcons[index] ?? Zap
                  return (
                    <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-teal-900/15 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#112c2a]">
                    <Icon className="h-3.5 w-3.5 text-teal-700" aria-hidden="true" />
                      {tag}
                    </span>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                {aboutSection.audience.map((item) => (
                  <span key={item} className="rounded-full border border-slate-300 bg-white/65 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] p-7 text-white shadow-[0_20px_55px_-40px_rgba(23,37,84,0.35)] sm:p-10 lg:p-12">
              <span className="block font-serif text-5xl font-bold leading-none text-amber-400" aria-hidden="true">“</span>
              <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {a.quote}
              </blockquote>
              <div className="mt-8 border-t border-white/20 pt-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                  {aboutSection.visionHeading}
                </p>
              </div>
            </article>
          </motion.div>

          <div className="mt-12 grid gap-4 border-y border-teal-900/15 py-6 sm:mt-16 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-teal-900/15 sm:py-7">
            {stats.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 px-2 py-2 sm:px-6 sm:first:pl-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
                  0{index + 1} ·
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-800">{item.title}</p>
                  <p className="mt-2 text-base font-semibold leading-6 text-[#112c2a] sm:text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-2 xl:gap-6">
            <article className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#137c63]">{aboutSection.solutionsEyebrow}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#152b29]">{aboutSection.solutionsTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{aboutSection.solutionsDescription}</p>
            </article>

            <article className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#137c63]">{aboutSection.designEyebrow}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {aboutSection.designPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-medium leading-6 text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal-700" strokeWidth={2.5} aria-hidden="true" />
                    <span>{point.replace(/^[•]\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">{aboutSection.technologyEyebrow}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#112c2a]">{aboutSection.technologyTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{aboutSection.technologyDescription}</p>
            </article>

            <div className="grid gap-3 sm:grid-cols-3">
              {systems.map(({ label, value, tone, Icon }, index) => (
                <article key={label} className={`relative overflow-hidden rounded-[22px] border p-5 ${tone}`}>
                  <span className="absolute -right-3 -top-3 opacity-10" aria-hidden="true">
                    <Icon className="h-20 w-20" strokeWidth={1} />
                  </span>
                  <p className="relative text-sm font-extrabold uppercase tracking-[0.2em] text-teal-800">{label}</p>
                  <p className="relative mt-8 text-sm font-semibold leading-6 text-slate-700">{value}</p>
                  <span className="absolute bottom-4 right-4 font-mono text-sm font-semibold text-slate-500">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,#172554_0%,#1e3a8a_55%,#312e81_100%)] p-6 text-white shadow-[0_20px_55px_-40px_rgba(23,37,84,0.35)] sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-amber-300">{aboutSection.futureHeading}</p>
              <p className="mt-3 text-sm leading-7 text-teal-50/90 sm:text-lg sm:leading-8">{aboutSection.futureDescription}</p>
            </div>
            <p className="max-w-sm border-l-2 border-amber-400 pl-4 text-sm font-bold leading-6 text-white lg:text-right">
              {aboutSection.slogan}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
