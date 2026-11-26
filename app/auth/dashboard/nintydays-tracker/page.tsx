"use client";

import Link from "next/link";
import { motion } from "@/lib/motion";
import {
  ArrowRight,
  BarChart3,
  Download,
  Sheet,
  WalletCards,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";
import { DashboardCollapsibleSection } from "@/app/components/ui/DashboardCollapsibleSection";
import {
  TrackerActionPlanCards,
  TrackerPhaseCards,
  TrackerWorkbookRows,
} from "./TrackerActionPlanCards";

export default function NinetyDayTrackerPage() {
  const { t } = useLocale();
  const trackerPage = t.ninetyDayTrackerPage;

  return (
    <main className="overflow-hidden bg-[#f5f0e7] text-[#202b43]">
      <section
        id="tracker"
        className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-slate-900"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(242,184,75,0.22),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(237,115,87,0.18),transparent_35%)]" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-slate-700 sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-slate-700" />
          <div className="absolute inset-20 rounded-full border border-slate-700" />
          <div className="absolute inset-32 rounded-full border border-slate-700" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">
              <span className="shrink-0 h-2 w-2 rounded-full bg-current" />
              {trackerPage.hero.badge}
            </div>

            <h1 className="mt-7 uppercase text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              AeroSun Energy
              <span className="mt-2 block text-amber-800">{trackerPage.hero.title}</span>
            </h1>

            <p className="mt-5 uppercase text-amber-900 text-xs font-semibold tracking-wide leading-5">
              {trackerPage.hero.planTitle}
            </p>

            <p className="mt-8 max-w-2xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {trackerPage.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/pillers/AeroSun_90_Day_Business_Execution_Tracker.xlsx"
                className="inline-flex items-center gap-2 rounded-full bg-[#f2b84b] px-5 py-3 text-base font-bold text-[#30243a] transition hover:bg-[#ffd47a] tracking-normal"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {trackerPage.hero.downloadLabel}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-3 text-base font-bold text-slate-900 transition hover:bg-white/70 tracking-normal"
              >
                {trackerPage.hero.contactLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="absolute -inset-5 rounded-full bg-[#ed7357]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-white/[0.07] p-4 shadow-sm backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(155deg,#37466b_0%,#202c49_55%,#3b3557_100%)] p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="uppercase text-[#d7deee] text-xs font-semibold tracking-wide leading-5">
                    {trackerPage.overview.title}
                  </p>
                  <BarChart3
                    className="h-6 w-6 text-[#f2b84b]"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-6 rounded-xl border border-slate-700 bg-white/5 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="uppercase text-[#d7deee] text-xs font-semibold tracking-wide leading-5">
                        {trackerPage.overview.capitalLabel}
                      </p>
                      <p className="mt-2 text-white text-lg font-semibold tracking-normal leading-snug">
                        ₹1,00,000
                      </p>
                    </div>
                    <WalletCards
                      className="h-10 w-10 text-[#f2b84b]"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {trackerPage.overview.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-700 bg-white/5 px-3 py-2 text-base text-[#edf0f7]"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#ed7357] text-white">
                        <Sheet className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DashboardCollapsibleSection
        title={trackerPage.plan.summary}
        eyebrow={<p className="uppercase text-[#9b4b42] text-xs font-semibold tracking-wide leading-5">{trackerPage.plan.eyebrow}</p>}
        titleClassName="max-w-3xl text-[#202b43]"
        contentClassName="mt-10"
        className="bg-gradient-to-br from-[#f1f2f6] to-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <TrackerActionPlanCards stages={trackerPage.actionPlan} />
        </div>
      </DashboardCollapsibleSection>

      <section className="mx-auto max-w-7xl bg-gradient-to-br from-white to-[#f1f2f6] px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="uppercase text-[#9b4b42] text-xs font-semibold tracking-wide leading-5">
              {trackerPage.workbook.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md text-[#202b43] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {trackerPage.workbook.title}
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#ed7357]" />
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#fffdf8] shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
                <thead className="bg-amber-700 font-bold text-white tracking-normal">
                  <tr>
                    <th className="uppercase text-xs font-semibold tracking-wide leading-5">
                      {trackerPage.workbook.sheetColumn}
                    </th>
                    <th className="uppercase text-xs font-semibold tracking-wide leading-5">
                      {trackerPage.workbook.purposeColumn}
                    </th>
                  </tr>
                </thead>
                <TrackerWorkbookRows rows={trackerPage.sheetRows} />
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-5 py-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-xl border border-[#e5b997] bg-[#f7e3d3] p-7 shadow-sm">
          <p className="uppercase text-[#9b4b42] text-xs font-semibold tracking-wide leading-5">
            {trackerPage.assumptionsTitle}
          </p>
          <ul className="mt-6 space-y-3 text-lg leading-8 text-[#3d3442]">
            {trackerPage.assumptionItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ed7357]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-5 py-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="uppercase text-[#a34f41] text-xs font-semibold tracking-wide leading-5">
              {trackerPage.plan.phasesEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-[#202b43] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {trackerPage.plan.phasesTitle}
            </h2>
          </div>

          <TrackerPhaseCards
            phases={trackerPage.phases}
            expectedResultLabel={trackerPage.plan.expectedResult}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-5 py-14 text-slate-900 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-xl border border-slate-700 bg-[#263451] p-7 shadow-sm">
          <p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">
            {trackerPage.recommendation.eyebrow}
          </p>
          <p className="mt-5 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {trackerPage.recommendation.description}
          </p>
          <div className="mt-6 rounded-xl border border-[#ed7357]/40 bg-[#ed7357]/10 p-5">
            <p className="uppercase text-rose-800 text-xs font-semibold tracking-wide leading-5">
              {trackerPage.recommendation.personalEyebrow}
            </p>
            <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {trackerPage.recommendation.personalDescription}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
