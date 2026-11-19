'use client'

import Link from 'next/link'
import { ArrowUpRight, BadgeIndianRupee, Landmark } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { BankEMICalculator } from '@/app/components/forms/BankEMICalculator'
import ConsumerApplicationJourney from '@/app/components/sections/ConsumerApplicationJourney'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

type LoanTermsValue = string | string[]

function renderTerms(value: LoanTermsValue) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc space-y-1.5 pl-5">
        {value.map((term) => <li key={term}><DigitalNumber value={term} /></li>)}
      </ul>
    )
  }

  return <p><DigitalNumber value={value} /></p>
}

export default function FinancePage() {
  const { t } = useLocale()
  const page = t.financePage

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-900 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-sky-100">
            <Landmark className="h-4 w-4" aria-hidden="true" />
            {page.eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-sky-100 sm:text-lg">{page.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#loan-comparison" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-sky-900 transition hover:bg-sky-50">
              {page.comparisonLink}
            </a>
            <a href="#loan-application" className="rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              {page.applicationLink}
            </a>
          </div>
        </div>
      </section>

      <BankEMICalculator />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {page.loanBands.map((band) => (
            <article key={band.title} className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-800">{band.title}</p>
              <p className="mt-2 text-2xl font-black text-slate-950"><DigitalNumber value={band.amount} /></p>
            </article>
          ))}
        </div>

        <section id="loan-comparison" aria-labelledby="loan-comparison-title" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start gap-3 border-b border-slate-200 p-5 sm:p-6">
            <BadgeIndianRupee className="mt-1 h-6 w-6 shrink-0 text-sky-700" aria-hidden="true" />
            <div>
              <h2 id="loan-comparison-title" className="text-xl font-black tracking-tight sm:text-2xl">{page.productTitle}</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{page.tableDescription}</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-emerald-100 [&_td]:border-b [&_td]:border-emerald-100 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
              <thead className="bg-amber-700 font-bold text-white">
                <tr>
                  <th scope="col" className="w-16 border border-slate-300 px-4 py-3">{page.headers.number}</th>
                  <th scope="col" className="w-56 border border-slate-300 px-4 py-3">{page.headers.item}</th>
                  <th scope="col" className="border border-slate-300 px-4 py-3">{page.headers.upToTwoLakhs}</th>
                  <th scope="col" className="border border-slate-300 px-4 py-3">{page.headers.aboveTwoLakhs}</th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.number} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                    <th scope="row" className="border border-slate-300 px-4 py-4 align-top font-bold"><DigitalNumber value={row.number} /></th>
                    <th scope="row" className="border border-slate-300 px-4 py-4 align-top font-semibold">{row.item}</th>
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
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h2 className="text-lg font-black text-amber-950">{page.disclaimerTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-amber-950/85">{page.disclaimer}</p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-6">
            <h2 className="text-lg font-black">{page.applicationTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{page.applicationDescription}</p>
            <Link
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
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
