'use client'

import Link from 'next/link'
import { ArrowUpRight, Check, Sun, Wind, Zap } from 'lucide-react'
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
        <strong className="font-bold text-[#087a45]">{aboutSection.companyName}</strong>
        {after}
      </>
    )
  }

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900  ">
      <section id="story" className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.08] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.08]" />
          <div className="absolute inset-32 rounded-full border border-white/[0.08]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
              {pageStrings.badge}
            </div>
            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-[0.075em] text-white sm:text-7xl lg:text-8xl">
              {pageStrings.companyTitleA}
              <span className="mt-2 block text-emerald-300">{pageStrings.companyTitleB}</span>
            </h1>
            <p className="mt-5 text-md font-bold uppercase tracking-[0.3em] text-emerald-100/65">
              {pageStrings.legalLabel}
            </p>
            <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-white/85 sm:text-2xl">
              {pageStrings.pitch.split(' • ').map((part, index) => (
                <span key={part}>
                  {index > 0 && <span className="text-lime-300"> &middot; </span>}
                  {part}
                </span>
              ))}
            </p>
            <div className="mt-8 border-l-2 border-lime-300 pl-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-lime-200">{pageStrings.promiseLabel}</p>
              <p className="mt-2 text-xl font-semibold italic text-white sm:text-2xl">&ldquo;{pageStrings.promiseText}&rdquo;</p>
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
              {pageStrings.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#capabilities" className="rounded-full bg-lime-300 px-5 py-3 text-md font-bold text-emerald-950 transition hover:bg-lime-200">
                {pageStrings.explore}
              </a>
              <a href="#leadership" className="rounded-full border border-white/20 px-5 py-3 text-md font-bold text-white transition hover:bg-white/10">
                {pageStrings.leadership}
              </a>
              <Link href="/about/company-profile" className="rounded-full border border-white/20 px-5 py-3 text-md font-bold text-white transition hover:bg-white/10">
                {pageStrings.companyProfile}
              </Link>
              <Link href="/about/product-catalogue" className="rounded-full border border-white/20 px-5 py-3 text-md font-bold text-white transition hover:bg-white/10">
                {pageStrings.productCatalogue}
              </Link>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative h-[26rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(155deg,#31594b_0%,#14372f_55%,#24463a_100%)] sm:h-[32rem]">
                <OptimizedImage
                  src="/images/founder-aerosunenergy.webp"
                  alt={content.founderImageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c17]/95 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-lime-200">{content.founderRole}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">{content.founderName}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-7 text-white/85">
                    {content.founderImageBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:px-10">
            {companyStatsData.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between gap-4 sm:justify-start sm:gap-5">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-100/55">{stat.label}</span>
                <span className="text-md font-semibold text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 ">{pageStrings.storyBadge}</p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[0.055em] text-slate-950  sm:text-4xl">
              {pageStrings.storyHeading}
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-lime-500" />
          </div>
          <div className="space-y-5 text-sm leading-8 text-slate-700  sm:text-lg">
            <p>
              {content.founderBioParagraph1.map((segment, index) => {
                const text = index === 0 || index === 2
                return text ? (
                  <strong key={segment} className={index === 0 ? 'font-bold text-slate-950 ' : 'font-bold text-emerald-800 '}>
                    {segment}
                  </strong>
                ) : segment
              })}
            </p>
            <p>
              {content.founderBioParagraph2.map((segment, index) => index === 1 ? (
                <strong key={segment} className="font-bold text-emerald-800 ">{segment}</strong>
              ) : segment)}
            </p>
            <p>
              {content.founderBioParagraph3}
            </p>
          </div>
        </div>
      </section>

      <section id="compliance" className="border-y border-slate-200 bg-white  ">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#f7faf6] shadow-[0_28px_70px_-46px_rgba(20,55,47,0.45)]  ">
            <div className="relative overflow-hidden bg-[linear-gradient(115deg,#14372f_0%,#1d5140_58%,#285d43_100%)] px-5 py-7 text-white sm:px-8 sm:py-9">
              <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute -right-2 -top-14 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-lime-200/25 bg-white/[0.08] px-3 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] text-lime-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    {pageStrings.governanceBadge}
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-[0.055em] sm:text-4xl">
                    {pageStrings.governanceHeading}
                  </h2>
                  <p className="mt-2 text-md leading-6 text-emerald-50/85">
                    {pageStrings.governanceDescription}
                  </p>
                </div>
                <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/20 px-4 py-3 backdrop-blur-sm">
                  <span className="text-3xl font-black leading-none text-lime-200">{approvalRowsData.length}</span>
                  <span className="max-w-20 text-[12px] font-bold uppercase leading-4 tracking-[0.16em] text-emerald-50">{content.companyRecordsLabel}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:p-8">
              {approvalRowsData.map((row, index) => {
                const label = row.label
                const status = row.status
                return (
                  <article key={label} className="group flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_16px_30px_-22px_rgba(16,87,58,0.45)]    sm:gap-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-mono text-md font-black text-emerald-800 ring-1 ring-emerald-700/10 transition-colors group-hover:bg-emerald-100    ">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-md font-bold leading-6 text-slate-900 ">{label}</h3>
                      <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-emerald-900   ">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 " />
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

      <section id="leadership" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 ">{pageStrings.leadershipBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950  sm:text-4xl">{pageStrings.leadershipHeading}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 ">
              {pageStrings.leadershipIntro}
            </p>
            <div className="mt-8 space-y-3">
              {founderProfilesData.map((profile) => (
                <article key={profile.name} className="rounded-2xl border border-slate-200 bg-white p-4  ">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-lg font-black text-lime-300">{profile.initials}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 ">{profile.name}</h3>
                      <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-700 ">{profile.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 ">{profile.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {coreValuesData.map((value, index) => (
                <article key={value.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5   ">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-md font-extrabold text-slate-950 ">{value.title}</h3>
                    <span className="font-mono text-[12px] font-bold text-emerald-700/50 ">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 ">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d3d43] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.24em] text-lime-300">{content.whySectionBadge}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[0.055em] text-white sm:text-4xl">{content.whyHeading}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-emerald-50/85">{content.whyDescription}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {content.companyStrengthsStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-3xl font-black tracking-tight text-lime-300">{stat.value}</p>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.17em] text-emerald-50/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">{content.strengthsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.companyStrengths.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-emerald-50/90"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="text-lg font-extrabold text-white">{content.customerReasonsHeading}</h3>
              <ul className="mt-4 space-y-3">
                {content.whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-emerald-50/90"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {content.reasons.map((reason) => (
              <article key={reason.title} className="border-l border-lime-300/70 pl-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-lime-200">{reason.title}</p>
                <p className="mt-2 text-sm leading-7 text-emerald-50/85">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-amber-700 ">{content.roadmapBadge}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950  sm:text-4xl">{content.roadmapHeading}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-amber-200 bg-[#fffdf6] p-5   sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-extrabold text-slate-950 ">{content.immediatePrioritiesHeading}</h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-amber-900  ">{content.currentStatusLabel}</span>
            </div>
            <ol className="mt-6 space-y-3">
              {content.currentGoals.map((goal, index) => (
                <li key={goal} className="flex gap-3 border-b border-amber-100 pb-3 last:border-0 ">
                  <span className="font-mono text-md font-bold text-amber-700 ">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-7 text-slate-700 ">{goal}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-3xl border border-indigo-200 bg-[#f8f8ff] p-5   sm:p-7">
            <h3 className="text-lg font-extrabold text-slate-950 ">{content.growthRoadmapHeading}</h3>
            <div className="mt-6 space-y-5">
              {content.futureGoals.map((group, index) => (
                <div key={group.title} className="relative border-l border-indigo-200 pl-5 ">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-[#f8f8ff] " />
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-700 ">{content.phaseLabel} 0{index + 1}</p>
                  <h4 className="mt-1 text-md font-extrabold text-slate-950 ">{group.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-7 text-slate-700 "><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-white  ">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 ">{content.servicesBadge}</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[0.055em] text-slate-950  sm:text-4xl">{content.servicesHeading}</h2>
            </div>
            <span className="text-md font-semibold text-slate-600 ">{content.servicesAudience}</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.serviceGroups.map((group, index) => (
              <article key={group.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f9f5] p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5    sm:p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.serviceAccents[index]}`} />
                <p className="font-mono text-md font-bold text-emerald-700/60 ">0{index + 1} / {content.solutionsLabel.toUpperCase()}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950 ">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 "><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 " />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#303b29] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-lime-300">{content.commitmentsBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-white sm:text-4xl">{content.commitmentsHeading}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              { title: content.promiseGroupTitle, points: content.promisePoints, accent: 'text-lime-300' },
              { title: content.missionGroupTitle, points: content.missionPoints, accent: 'text-sky-300' },
            ].map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-7">
                <h3 className={`text-md font-black uppercase tracking-[0.2em] ${group.accent}`}>{group.title}</h3>
                <ul className="mt-5 space-y-4">
                  {group.points.map((point, index) => (
                    <li key={point} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className={`font-mono text-md font-bold ${group.accent}`}>0{index + 1}</span>
                      <span className="text-sm leading-7 text-emerald-50/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-lime-200/20 bg-lime-200/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-lime-200">{content.contactCalloutTitle}</p>
              <p className="mt-2 text-lg font-bold text-white">{content.contactCalloutDescription}</p>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-lime-300 px-5 py-3 text-md font-bold text-emerald-950 transition hover:bg-lime-200">
              {content.contactAction} <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-sky-700 ">{content.workBadge}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950  sm:text-4xl">{content.workHeading}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#eaf4ef] p-5  sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800 ">{content.qualityHeading}</p>
            <div className="mt-5 divide-y divide-emerald-900/10 ">
              {content.qualityPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-emerald-800/60 ">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-700 ">{point}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-[#f1f0e9] p-5  sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800 ">{content.ethicsHeading}</p>
            <div className="mt-5 divide-y divide-slate-900/10 ">
              {content.ethicsPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-amber-800/60 ">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-700 ">{point}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087a61]">
                {aboutSection.eyebrow} {aboutSection.brandFirst} {aboutSection.brandSecond}
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#102b28] sm:text-5xl lg:text-7xl">
                {aboutSection.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {a.paragraph1}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {aboutSection.tags.map((tag, index) => {
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
                {aboutSection.audience.map((item) => (
                  <span key={item} className="rounded-full border border-[#d3dfd5] bg-white/60 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[2rem] bg-[#102d2a] p-7 text-white shadow-[0_30px_75px_-35px_rgba(16,45,42,0.4)] sm:p-10 lg:p-12">
              <span className="block font-serif text-5xl font-bold leading-none text-[#f5a640]" aria-hidden="true">“</span>
              <blockquote className="mt-5 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {a.quote}
              </blockquote>
              <div className="mt-8 border-t border-white/20 pt-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f5a640]">
                  {aboutSection.visionHeading}
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
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087a61]">{item.title}</p>
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
                  alt={aboutSection.imageAlt}
                  fill
                  sizes="(min-width: 640px) 128px, 112px"
                  className="object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#087a61]">
                  {aboutSection.leadershipLabel} · {aboutSection.founderBadge}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#102b28] sm:text-3xl">
                  {a.founder.name}
                </h3>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {aboutSection.sinceLabel}
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
                  <p>{renderCompanyName(aboutSection.visionIntro)}</p>
                  <p>{renderCompanyName(aboutSection.visionHistory)}</p>
                </div>
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              <article className="rounded-[1.75rem] border border-[#eadfc7] bg-gradient-to-br from-[#fffaf0] to-[#f3e8d5] p-6 shadow-[0_20px_50px_-32px_rgba(92,68,31,0.3)] sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087a61]">{aboutSection.solutionsEyebrow}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#102b28]">{aboutSection.solutionsTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{aboutSection.solutionsDescription}</p>
              </article>

              <article className="rounded-[1.75rem] border border-[#c9e0e4] bg-gradient-to-br from-[#edf7f8] to-[#d7eaed] p-6 shadow-[0_20px_50px_-32px_rgba(32,77,85,0.32)] sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087a61]">{aboutSection.designEyebrow}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {aboutSection.designPoints.map((point) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#087a61]">{aboutSection.technologyEyebrow}</p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#102b28]">{aboutSection.technologyTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{aboutSection.technologyDescription}</p>
            </article>

            <div className="grid gap-3 sm:grid-cols-3">
              {systems.map(({ label, value, tone, Icon }, index) => (
                <article key={label} className={`relative overflow-hidden rounded-[1.5rem] border p-5 ${tone}`}>
                  <span className="absolute -right-3 -top-3 opacity-10" aria-hidden="true">
                    <Icon className="h-20 w-20" strokeWidth={1} />
                  </span>
                  <p className="relative text-sm font-extrabold uppercase tracking-[0.2em] text-[#087a61]">{label}</p>
                  <p className="relative mt-8 text-sm font-semibold leading-6 text-[#243c35]">{value}</p>
                  <span className="absolute bottom-4 right-4 font-mono text-sm font-semibold text-slate-500">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-gradient-to-r from-[#263753] to-[#45345f] p-6 text-white shadow-[0_28px_70px_-34px_rgba(38,42,75,0.62)] sm:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#f6bd67]">{aboutSection.futureHeading}</p>
              <p className="mt-3 text-sm leading-7 text-emerald-50/90 sm:text-lg sm:leading-8">{aboutSection.futureDescription}</p>
            </div>
            <p className="max-w-sm border-l-2 border-[#f6bd67] pl-4 text-sm font-bold leading-6 text-white lg:text-right">
              {aboutSection.slogan}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
