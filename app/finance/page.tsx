import Link from 'next/link'
import { ArrowUpRight, BadgeIndianRupee, Landmark } from 'lucide-react'
import { getRequestTranslations } from '@/lib/serverLocale'
import { BankEMICalculator } from '@/app/components/forms/BankEMICalculator'

import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { BadgeCheck, Building2, ClipboardCheck, FileCheck2, FileText, Hammer, House, PanelsTopLeft, Send, Store, UserRound, Wrench, type LucideIcon } from 'lucide-react'

type LoanTermsValue = string | string[]

function renderTerms(value: LoanTermsValue) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc space-y-1.5 pl-5 ">
        {value.map((term) => <li key={term}><DigitalNumber value={term} /></li>)}
      </ul>
    )
  }

  return <p><DigitalNumber value={value} /></p>
}

export default async function FinancePage() {
  const t = await getRequestTranslations()
  const page = t.financePage

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 ">
      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-900 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 text-sm font-bold text-sky-100 tracking-normal">
            <Landmark className="h-4 w-4" aria-hidden="true" />
            {page.eyebrow}
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">{page.title}</h1>
          <p className="mt-4 max-w-4xl text-sky-100      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#loan-comparison" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-sky-900 transition hover:bg-sky-50 tracking-normal">
              {page.comparisonLink}
            </a>
            <a href="#loan-application" className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 tracking-normal">
              {page.applicationLink}
            </a>
          </div>
        </div>
      </section>

      <TrustRibbon />

      <BankEMICalculator />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 ">
        <div className="mb-6 grid gap-4 sm:grid-cols-2 ">
          {page.loanBands.map((band) => (
            <article key={band.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ">
              <p className="uppercase text-sky-800    text-xs font-semibold tracking-wide leading-5">{band.title}</p>
              <p className="mt-2 text-slate-950 text-lg font-semibold tracking-normal leading-snug tabular-nums"><DigitalNumber value={band.amount} /></p>
            </article>
          ))}
        </div>

        <section id="loan-comparison" aria-labelledby="loan-comparison-title" className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ">
          <div className="flex items-start gap-3 border-b border-slate-200 p-5 sm:p-6">
            <BadgeIndianRupee className="mt-1 h-6 w-6 shrink-0 text-sky-700" aria-hidden="true" />
            <div>
              <h2 id="loan-comparison-title" className=" text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{page.productTitle}</h2>
              <p className="mt-2 max-w-4xl text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.tableDescription}</p>
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 ">
              <thead className="bg-amber-700 font-bold text-white tracking-normal">
                <tr>
                  <th scope="col" className="w-16 border border-slate-300 px-4 py-3">{page.headers.number}</th>
                  <th scope="col" className="w-56 border border-slate-300 px-4 py-3">{page.headers.item}</th>
                  <th scope="col" className="border border-slate-300 px-4 py-3">{page.headers.upToTwoLakhs}</th>
                  <th scope="col" className="border border-slate-300 px-4 py-3">{page.headers.aboveTwoLakhs}</th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.number} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
                    <th scope="row" className="border border-slate-300 px-4 py-4 align-top font-bold tracking-normal tabular-nums"><DigitalNumber value={row.number} /></th>
                    <th scope="row" className="border border-slate-300 px-4 py-4 align-top font-semibold tracking-normal">{row.item}</th>
                    <td colSpan={row.shared ? 2 : 1} className="border border-slate-300 px-4 py-4 align-top leading-6 text-slate-700">
                      {renderTerms(row.upToTwoLakhs)}
                    </td>
                    {!row.shared && (
                      <td className="border border-slate-300 px-4 py-4 align-top leading-6 text-slate-700">
                        {renderTerms(row.aboveTwoLakhs)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <ConsumerApplicationJourney />

        <section id="loan-application" className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h2 className="text-amber-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{page.disclaimerTitle}</h2>
            <p className="mt-2 text-amber-950/85      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.disclaimer}</p>
          </div>
          <div className="rounded-xl bg-slate-950 p-5 text-white sm:p-6">
            <h2 className=" text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{page.applicationTitle}</h2>
            <p className="mt-2 text-slate-300      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.applicationDescription}</p>
            <Link
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300 tracking-normal"
            >
              {page.portalLink}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}


const stakeholderIcons: LucideIcon[] = [House, Wrench, Building2, Landmark]

const journeyIcons: LucideIcon[] = [
  UserRound,
  Send,
  BadgeCheck,
  Store,
  ClipboardCheck,
  PanelsTopLeft,
  Hammer,
  ClipboardCheck,
  FileCheck2,
  Landmark,
]

const markerColors = [
  'bg-violet-500',
  'bg-rose-500',
  'bg-emerald-500',
  'bg-sky-500',
  'bg-teal-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-teal-500',
  'bg-amber-500',
]

async function ConsumerApplicationJourney() {
  const t = await getRequestTranslations()
  const journey = t.financePage.applicationJourney

  return (
    <section
      id="consumer-application-journey"
      aria-labelledby="consumer-application-journey-title"
      className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-8 shadow-sm sm:px-7 sm:py-10"
    >
      <header className="text-center">
        <p className="uppercase text-sky-800    text-xs font-semibold tracking-wide leading-5">{journey.eyebrow}</p>
        <h2 id="consumer-application-journey-title" className="mt-2 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
          <span className="text-sky-700">{journey.titleAccent}</span>{' '}{journey.title}
        </h2>
      </header>

      <ul className="mx-auto mt-7 grid max-w-5xl grid-cols-2 overflow-hidden rounded-xl bg-slate-50 p-2 sm:grid-cols-4">
        {journey.stakeholders.map((stakeholder, index) => {
          const Icon = stakeholderIcons[index] ?? Building2
          return (
            <li
              key={stakeholder}
              className={`flex min-h-16 items-center justify-center gap-2 px-2 py-3 font-bold text-slate-900 sm:px-4 ${
                index > 0 ? 'border-l border-slate-200' : ''
              } tracking-normal`}
            >
              <Icon className="h-7 w-7 shrink-0 text-sky-800" aria-hidden="true" />
              <span>{stakeholder}</span>
            </li>
          )
        })}
      </ul>

      <div className="my-7 flex justify-center">
        <a
          href="https://pmsuryaghar.gov.in/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 tracking-normal"
        >
          {journey.applyLabel}
        </a>
      </div>

      <ol className="relative mx-auto grid max-w-7xl gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {journey.steps.map((step, index) => {
          const Icon = journeyIcons[index] ?? FileText
          const markerColor = markerColors[index] ?? 'bg-sky-500'
          return (
            <li key={step.title} className="relative rounded-xl border border-slate-200 bg-slate-50/70 p-4 pl-16">
              <span className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${markerColor} tracking-normal`}>
                {index + 1}
              </span>
              <Icon className="absolute right-4 top-4 h-6 w-6 text-sky-800" aria-hidden="true" />
              <h3 className="pr-8 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{step.title}</h3>
              <p className="mt-1 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{step.description}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
