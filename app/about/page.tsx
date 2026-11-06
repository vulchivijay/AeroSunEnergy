'use client'

import Link from 'next/link'
import { motion } from '@/lib/motion'
import { OptimizedImage } from '@/app/components/ui'
import { useLocale } from '@/lib/LocaleContext'

export default function AboutPage() {
  const { t } = useLocale()
  const a = t.about
  const content = a.pageContent

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

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900 dark:bg-[#101b17] dark:text-slate-100">
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
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">{pageStrings.storyBadge}</p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">
              {pageStrings.storyHeading}
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-lime-500" />
          </div>
          <div className="space-y-5 text-sm leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">
            <p>
              {content.founderBioParagraph1.map((segment, index) => {
                const text = index === 0 || index === 2
                return text ? (
                  <strong key={segment} className={index === 0 ? 'font-bold text-slate-950 dark:text-white' : 'font-bold text-emerald-800 dark:text-emerald-300'}>
                    {segment}
                  </strong>
                ) : segment
              })}
            </p>
            <p>
              {content.founderBioParagraph2.map((segment, index) => index === 1 ? (
                <strong key={segment} className="font-bold text-emerald-800 dark:text-emerald-300">{segment}</strong>
              ) : segment)}
            </p>
            <p>
              {content.founderBioParagraph3}
            </p>
          </div>
        </div>
      </section>

      <section id="compliance" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#f7faf6] shadow-[0_28px_70px_-46px_rgba(20,55,47,0.45)] dark:border-emerald-100/10 dark:bg-slate-950/60">
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
                  <article key={label} className="group flex min-h-24 items-center gap-3 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_16px_30px_-22px_rgba(16,87,58,0.45)] dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-700 sm:gap-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-mono text-md font-black text-emerald-800 ring-1 ring-emerald-700/10 transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-200 dark:ring-emerald-300/10 dark:group-hover:bg-emerald-900/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-md font-bold leading-6 text-slate-900 dark:text-white">{label}</h3>
                      <span className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[12px] font-bold uppercase leading-4 tracking-[0.1em] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />
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
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">{pageStrings.leadershipBadge}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">{pageStrings.leadershipHeading}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
              {pageStrings.leadershipIntro}
            </p>
            <div className="mt-8 space-y-3">
              {founderProfilesData.map((profile) => (
                <article key={profile.name} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-lg font-black text-lime-300">{profile.initials}</span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">{profile.name}</h3>
                      <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-300">{profile.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{profile.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {coreValuesData.map((value, index) => (
                <article key={value.title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-emerald-800">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-md font-extrabold text-slate-950 dark:text-white">{value.title}</h3>
                    <span className="font-mono text-[12px] font-bold text-emerald-700/50 dark:text-emerald-300/50">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{value.description}</p>
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
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">{content.roadmapBadge}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">{content.roadmapHeading}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-amber-200 bg-[#fffdf6] p-5 dark:border-amber-900/50 dark:bg-amber-950/10 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{content.immediatePrioritiesHeading}</h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.16em] text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">{content.currentStatusLabel}</span>
            </div>
            <ol className="mt-6 space-y-3">
              {content.currentGoals.map((goal, index) => (
                <li key={goal} className="flex gap-3 border-b border-amber-100 pb-3 last:border-0 dark:border-amber-900/40">
                  <span className="font-mono text-md font-bold text-amber-700 dark:text-amber-300">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-sm leading-7 text-slate-700 dark:text-slate-200">{goal}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-3xl border border-indigo-200 bg-[#f8f8ff] p-5 dark:border-indigo-900/50 dark:bg-indigo-950/10 sm:p-7">
            <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">{content.growthRoadmapHeading}</h3>
            <div className="mt-6 space-y-5">
              {content.futureGoals.map((group, index) => (
                <div key={group.title} className="relative border-l border-indigo-200 pl-5 dark:border-indigo-800">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-[#f8f8ff] dark:ring-[#12112a]" />
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{content.phaseLabel} 0{index + 1}</p>
                  <h4 className="mt-1 text-md font-extrabold text-slate-950 dark:text-white">{group.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-7 text-slate-700 dark:text-slate-300"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">{content.servicesBadge}</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">{content.servicesHeading}</h2>
            </div>
            <span className="text-md font-semibold text-slate-600 dark:text-slate-300">{content.servicesAudience}</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.serviceGroups.map((group, index) => (
              <article key={group.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f9f5] p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-emerald-800 sm:p-6">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.serviceAccents[index]}`} />
                <p className="font-mono text-md font-bold text-emerald-700/60 dark:text-emerald-300/60">0{index + 1} / {content.solutionsLabel.toUpperCase()}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950 dark:text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400" />{item}</li>
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
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">{content.workBadge}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[0.055em] text-slate-950 dark:text-white sm:text-4xl">{content.workHeading}</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#eaf4ef] p-5 dark:bg-emerald-950/25 sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">{content.qualityHeading}</p>
            <div className="mt-5 divide-y divide-emerald-900/10 dark:divide-emerald-100/10">
              {content.qualityPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-emerald-800/60 dark:text-emerald-200/60">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-[#f1f0e9] p-5 dark:bg-slate-900 sm:p-7">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800 dark:text-amber-300">{content.ethicsHeading}</p>
            <div className="mt-5 divide-y divide-slate-900/10 dark:divide-white/10">
              {content.ethicsPoints.map((point, index) => (
                <div key={point} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-mono text-md font-bold text-amber-800/60 dark:text-amber-200/60">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
