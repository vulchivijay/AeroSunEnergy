'use client'

import Link from 'next/link'
import { motion } from '@/lib/motion'
import { ArrowRight, BarChart3, Download, Sheet, WalletCards } from 'lucide-react'

const sheetRows = [
  ['Dashboard', 'Overall business performance and financial summary'],
  ['Expenses', 'Track spending, GST, payments and receipts'],
  ['Leads', 'Manage customer enquiries and follow-ups'],
  ['Orders', 'Track confirmed projects, payments and outstanding balances'],
  ['Activities', 'Manage daily tasks and 90-day milestones'],
  ['Setup', 'Edit capital, reserve and business targets'],
] as const

const assumptionItems = [
  'Starting capital: ₹1,00,000',
  'Emergency reserve target: ₹35,000',
  'Customer conversation target: 50',
  'Initial paid project target: 1',
  'Tracking period: 4 November 2026 – 1 February 2027',
] as const

const actionPlan = [
  {
    title: 'Stage 1: Generate revenue',
    points: [
      'Start solar rooftop consultations and coordination services.',
      'Convert enquiries into paid site surveys and design support.',
      'Collect customer advances under written agreements before procurement.',
    ],
  },
  {
    title: 'Stage 2: Build the support network',
    points: [
      'Develop supplier and contractor relationships for installation and procurement.',
      'Maintain low-overhead operations without renting office, factory or warehouse space.',
      'Keep focus on revenue-generating activities and customer follow-up.',
    ],
  },
  {
    title: 'Stage 3: Secure funding and incubation support',
    points: [
      'Apply for Startup India, MSME and innovation programme support.',
      'Prepare technology and business plan documents for incubators and lenders.',
      'Use external technical support instead of spending on unnecessary infrastructure.',
    ],
  },
  {
    title: 'Stage 4: Develop the wind prototype',
    points: [
      'Validate the 3 kW wind generator through design, BOM and testing.',
      'Use outsourced fabrication and contract work before full manufacturing.',
      'Do not invest heavily in a complete prototype before funding is confirmed.',
    ],
  },
  {
    title: 'Stage 5: Scale with control',
    points: [
      'Start small-scale manufacturing through contract manufacturing only when demand is proven.',
      'Review dashboard weekly and update the tracker every day.',
      'Protect the ₹1 lakh capital and avoid unnecessary spending.',
    ],
  },
] as const

const ninetyDayPhases = [
  {
    period: 'Days 1–15',
    title: 'Business preparation',
    actions: [
      'Finalise the company profile.',
      'Finalise the solar product catalogue.',
      'Prepare quotation and customer enquiry formats.',
      'Create a supplier database.',
      'Identify local solar installation contractors.',
      'Prepare a basic customer site-survey checklist.',
      'Set up a customer enquiry tracking sheet.',
    ],
    outcome: 'AeroSun is ready to approach customers professionally.',
  },
  {
    period: 'Days 16–30',
    title: 'Customer acquisition',
    actions: [
      'Approach homeowners.',
      'Approach farmers.',
      'Approach small industries.',
      'Approach shops and commercial buildings.',
      'Approach schools and institutions.',
      'Approach farmhouses and remote properties.',
    ],
    target: 'Set a target of 50 genuine customer conversations.',
    note: 'This is a target, not a guaranteed conversion figure.',
  },
  {
    period: 'Days 31–60',
    title: 'First commercial projects',
    actions: [
      'Conduct site surveys.',
      'Prepare quotations.',
      'Compare supplier prices.',
      'Close your first customer order.',
      'Coordinate installation through qualified contractors.',
      'Collect customer feedback and project documentation.',
    ],
    outcome: 'First paid project or project coordination assignment.',
  },
  {
    period: 'Days 61–90',
    title: 'Technology and funding',
    actions: [
      'Finalise the preliminary AS-WG-3000 design.',
      'Obtain component quotations.',
      'Prepare a prototype budget.',
      'Approach incubators.',
      'Prepare a technical pitch deck.',
      'Explore government-supported prototype funding.',
      'Identify a suitable testing facility.',
    ],
    outcome: 'A credible wind-generator development and funding proposal.',
  },
] as const

export default function NinetyDayTrackerPage() {
  return (
    <main className="overflow-hidden bg-[#f5f0e7] text-[#202b43] dark:bg-[#111827] dark:text-slate-100">
      <section id="tracker" className="relative isolate overflow-hidden bg-[#19243d] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(242,184,75,0.22),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(237,115,87,0.18),transparent_35%)]" />
        <div className="absolute -right-36 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[0.1] sm:right-[-8rem]">
          <div className="absolute inset-10 rounded-full border border-white/[0.1]" />
          <div className="absolute inset-20 rounded-full border border-white/[0.1]" />
          <div className="absolute inset-32 rounded-full border border-white/[0.1]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-100/25 bg-white/[0.06] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-amber-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2b84b]" />
              Business tracker
            </div>

            <h1 className="mt-7 text-5xl font-black uppercase leading-[0.92] tracking-[0.075em] text-white sm:text-7xl lg:text-8xl">
              AeroSun Energy
              <span className="mt-2 block text-[#f2b84b]">90-Day Tracker</span>
            </h1>

            <p className="mt-5 text-md font-bold uppercase tracking-[0.3em] text-[#f4c77c]">
              BUSINESS EXECUTION PLAN
            </p>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#e2e7f1] sm:text-lg sm:leading-8">
              I&apos;ve created the AeroSun Energy 90-Day Business Execution Tracker in Excel.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="sandbox:/mnt/data/AeroSun_90_Day_Business_Execution_Tracker.xlsx"
                className="inline-flex items-center gap-2 rounded-full bg-[#f2b84b] px-5 py-3 text-md font-bold text-[#30243a] transition hover:bg-[#ffd47a]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download AeroSun 90-Day Business Execution Tracker (.xlsx)
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-md font-bold text-white transition hover:bg-white/10"
              >
                Connect with AeroSun Energy
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
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#ed7357]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(155deg,#37466b_0%,#202c49_55%,#3b3557_100%)] p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d7deee]">Execution overview</p>
                  <BarChart3 className="h-6 w-6 text-[#f2b84b]" aria-hidden="true" />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d7deee]">Capital</p>
                      <p className="mt-2 text-3xl font-black text-white">₹1,00,000</p>
                    </div>
                    <WalletCards className="h-10 w-10 text-[#f2b84b]" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    'Expense tracking and GST visibility',
                    'Lead conversion and follow-up control',
                    'Order and receivables monitoring',
                    'Daily action and milestone review',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#edf0f7]"
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

      <section className="bg-[#e7e9f1] px-5 py-14 dark:bg-[#1b2437] sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#9b4b42] dark:text-[#ffac91]">
              Clear 90-day plan
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[0.055em] text-[#202b43] dark:text-white sm:text-4xl">
              The execution plan is simple: generate revenue, secure funding, validate product, and scale only after demand is proven.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {actionPlan.map((stage, index) => (
              <div
                key={stage.title}
                className="rounded-[1.5rem] border border-[#c9cde0] bg-[#fbfaf7] p-5 shadow-[0_20px_45px_-35px_rgba(25,36,61,0.25)] dark:border-[#3d4863] dark:bg-[#222d43]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#f2b84b] to-[#ed7357] text-md font-black text-[#30243a]">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-[#202b43] dark:text-white">{stage.title}</h3>
                </div>
                <ul className="space-y-3 text-base leading-7 text-[#4c566d] dark:text-[#d4d9e5]">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ed7357]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#9b4b42] dark:text-[#ffac91]">
              What&apos;s included?
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[0.055em] text-[#202b43] dark:text-white sm:text-4xl">
              Business execution workbook
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#ed7357]" />
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-[#d8cdbb] bg-[#fffdf8] shadow-[0_24px_60px_-40px_rgba(25,36,61,0.3)] dark:border-[#3d4863] dark:bg-[#222d43]">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-base text-[#4c566d] dark:text-[#d4d9e5]">
                <thead className="bg-[#f0e6d8] text-[#202b43] dark:bg-[#303a52] dark:text-white">
                  <tr>
                    <th className="px-5 py-4 font-black uppercase tracking-[0.16em] text-[#9b4b42] dark:text-[#ffac91]">Sheet</th>
                    <th className="px-5 py-4 font-black uppercase tracking-[0.16em] text-[#9b4b42] dark:text-[#ffac91]">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {sheetRows.map(([sheet, purpose]) => (
                    <tr key={sheet} className="border-t border-[#e5ded2] dark:border-[#3d4863]">
                      <td className="px-5 py-4 font-bold text-[#202b43] dark:text-white">{sheet}</td>
                      <td className="px-5 py-4">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0e7] px-5 py-14 dark:bg-[#111827] sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e5b997] bg-[#f7e3d3] p-7 shadow-[0_24px_60px_-40px_rgba(237,115,87,0.35)] dark:border-[#754a4c] dark:bg-[#332b38]">
          <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#9b4b42] dark:text-[#ffac91]">
            Preconfigured assumptions
          </p>
          <ul className="mt-6 space-y-3 text-lg leading-8 text-[#3d3442] dark:text-[#f1e7e5]">
            {assumptionItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ed7357]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#e5efed] px-5 py-14 dark:bg-[#172b32] sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#a34f41] dark:text-[#ffac91]">
            90-day action plan
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[0.055em] text-[#202b43] dark:text-white sm:text-4xl">
            A practical timeline from business preparation to technology and funding
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {ninetyDayPhases.map((phase, index) => (
            <article
              key={phase.period}
              className="overflow-hidden rounded-[1.75rem] border border-[#bdcfcd] bg-[#fbfaf7] shadow-[0_20px_45px_-35px_rgba(25,36,61,0.25)] dark:border-[#3d5a62] dark:bg-[#222d43]"
            >
              <div className="flex flex-wrap items-center gap-3 bg-[#273854] px-5 py-4 text-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f2b84b] text-md font-black text-[#30243a]">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#cbd6e5]">{phase.period}</p>
                  <h3 className="text-xl font-black">{phase.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-3 text-base leading-7 text-[#4c566d] dark:text-[#d4d9e5]">
                  {phase.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ed7357]" aria-hidden="true" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
                {'target' in phase && (
                  <div className="mt-5 rounded-2xl border border-[#e5b997] bg-[#f7e3d3] p-4 dark:border-[#754a4c] dark:bg-[#332b38]">
                    <p className="font-bold text-[#723f3d] dark:text-[#ffd0b6]">{phase.target}</p>
                    <p className="mt-1 text-sm text-[#784f4a] dark:text-[#e8c2b9]">{phase.note}</p>
                  </div>
                )}
                {'outcome' in phase && (
                  <div className="mt-5 rounded-2xl border border-[#bdcfcd] bg-[#e5efed] p-4 dark:border-[#3d5a62] dark:bg-[#172b32]">
                    <p className="text-[12px] font-black uppercase tracking-[0.18em] text-[#356c68] dark:text-[#8bd1c4]">
                      Expected result
                    </p>
                    <p className="mt-1 font-semibold text-[#293e4b] dark:text-[#e2f0ed]">{phase.outcome}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#19243d] px-5 py-14 text-white dark:bg-[#0d1424] sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#263451] p-7 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] dark:bg-[#182238]">
          <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#f2b84b]">
            Recommendation
          </p>
          <p className="mt-5 text-xl leading-9 text-[#edf0f7]">
            The workbook includes automatic calculations, dropdown selections, overdue follow-up highlighting and a dashboard.
          </p>
          <div className="mt-6 rounded-[1.4rem] border border-[#ed7357]/40 bg-[#ed7357]/10 p-5">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#ffac91]">
              My recommendation:
            </p>
            <p className="mt-3 text-lg leading-8 text-[#edf0f7]">
              Update the Expenses, Leads and Activities sheets at least once every day. Review the Dashboard every week. This will help you control your ₹1 lakh investment and avoid unnecessary spending.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
