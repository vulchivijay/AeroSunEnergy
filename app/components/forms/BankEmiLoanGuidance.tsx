import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import type { useLocale } from '@/lib/LocaleContext'
import type { LoanBand } from './BankEmiCalculatorControls'

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']

export function BankEmiLoanGuidance({ labels, loanBand }: { labels: BankEmiLabels; loanBand: LoanBand }) {
  return (
    <div className="mt-5 grid gap-4 border-t border-orange-200 pt-5 sm:grid-cols-2">
      <section className="rounded-2xl border border-orange-100 bg-white/80 p-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-orange-700" aria-hidden="true" />
          <p className="text-sm font-bold text-[#10234f]">{labels.guidelineSummary}</p>
        </div>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600">{labels.borrowerMargin}</dt>
            <dd className="shrink-0 rounded-full bg-orange-100 px-2.5 py-0.5 font-bold text-orange-900">
              {loanBand === 'upToTwoLakhs' ? '10%' : '20%'}
            </dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-slate-600">{labels.panRequirement}</dt>
            <dd className="shrink-0 rounded-full bg-orange-100 px-2.5 py-0.5 font-bold text-orange-900">
              {loanBand === 'upToTwoLakhs' ? labels.panNotRequired : labels.panMandatory}
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-sm leading-6 text-slate-600">{labels.eligibilitySummary}</p>
        <Link
          href="/finance"
          className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-orange-800 underline decoration-orange-500 underline-offset-2 hover:text-orange-950"
        >
          {labels.financePageLink}
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </section>
      <div className="flex flex-col gap-3">
        <p className="text-sm leading-6 text-slate-700">{labels.moratoriumCalculationNote}</p>
        <p className="text-sm leading-6 text-slate-600">{labels.estimateOnly}</p>
        <Link
          href="/contact"
          prefetch={false}
          className="mt-auto inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md transition hover:from-orange-600 hover:to-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:text-base"
        >
          {labels.contactAction}
          <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
        </Link>
        <p className="text-center text-xs leading-5 text-slate-500">{labels.lenderTerms}</p>
      </div>
    </div>
  )
}
