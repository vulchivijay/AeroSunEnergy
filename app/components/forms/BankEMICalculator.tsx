"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Landmark } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

const MIN_LOAN = 25000
const MAX_LOAN = 2000000
const DEFAULT_LOAN = 25000
const MIN_TENURE = 1
const MAX_TENURE = 7
const DEFAULT_TENURE = 5
const MIN_RATE = 12
const MAX_RATE = 24
const DEFAULT_RATE = 12

const formatCurrency = (value: number) => {
  const absoluteValue = Math.abs(Math.round(value)).toString()
  const lastThreeDigits = absoluteValue.slice(-3)
  const remainingDigits = absoluteValue.slice(0, -3)

  const groupedRemaining =
    remainingDigits.length > 0
      ? remainingDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',')
      : ''

  const formattedAmount = groupedRemaining
    ? `${groupedRemaining},${lastThreeDigits}`
    : lastThreeDigits

  return `₹ ${formattedAmount}`
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export function BankEMICalculator() {
  const { t } = useLocale()
  const labels = t.bankEmi
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN)
  const [tenureYears, setTenureYears] = useState(DEFAULT_TENURE)
  const [interestRate, setInterestRate] = useState(DEFAULT_RATE)

  const calculation = useMemo(() => {
    const months = tenureYears * 12
    const monthlyRate = interestRate / 100 / 12

    const emi =
      monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
        : loanAmount / months

    const totalAmountPayable = emi * months
    const totalInterest = totalAmountPayable - loanAmount

    return {
      emi,
      totalAmountPayable,
      totalInterest,
    }
  }, [interestRate, loanAmount, tenureYears])

  return (
    <section className="relative isolate overflow-hidden border-y border-[#cfe4ee] bg-linear-to-br from-[#e1f3f7] via-[#e2eafb] to-[#e7e9ff] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full border border-cyan-900/[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full border border-cyan-900/[0.06]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-[1.35fr_1fr_1fr] xl:items-center xl:gap-5">
        <header className="flex min-w-0 flex-col justify-center py-4 md:col-span-2 xl:col-span-1 xl:pr-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
            <Landmark size={14} strokeWidth={2.2} aria-hidden="true" />
            {labels.badge}
          </div>
          <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[0.055em] text-[#122b22] sm:text-5xl lg:text-6xl">
            {labels.title}
            <span className="text-emerald-700"> {labels.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            {labels.description}
          </p>
        </header>

        <div className="min-w-0 rounded-[28px] border border-[#dce8df] bg-white p-4 shadow-[0_24px_70px_-48px_rgba(18,43,34,0.3)] sm:p-7 xl:p-8">
          <div className="mb-7">
            <p className="text-md font-bold uppercase tracking-[0.17em] text-emerald-800">
              {labels.loanDetails}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-loan" className="text-md font-semibold text-slate-700 sm:text-sm">{labels.loanAmount}</label>
                <output htmlFor="bank-emi-loan" className="ml-auto whitespace-nowrap rounded-lg bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm">
                  {formatCurrency(loanAmount)}
                </output>
              </div>
              <input
                id="bank-emi-loan"
                type="range"
                min={MIN_LOAN}
                max={MAX_LOAN}
                step={25000}
                value={loanAmount}
                onChange={(event) => setLoanAmount(clamp(Number(event.target.value), MIN_LOAN, MAX_LOAN))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                aria-label={labels.loanAmountAriaLabel}
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-tenure" className="text-md font-semibold text-slate-700 sm:text-sm">{labels.loanTenure}</label>
                <output htmlFor="bank-emi-tenure" className="ml-auto whitespace-nowrap rounded-lg bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm">
                  {tenureYears} {tenureYears === 1 ? labels.year : labels.years}
                </output>
              </div>
              <input
                id="bank-emi-tenure"
                type="range"
                min={MIN_TENURE}
                max={MAX_TENURE}
                step={1}
                value={tenureYears}
                onChange={(event) => setTenureYears(clamp(Number(event.target.value), MIN_TENURE, MAX_TENURE))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                aria-label={labels.loanTenureAriaLabel}
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-rate" className="text-md font-semibold text-slate-700 sm:text-sm">{labels.interestRate}</label>
                <output htmlFor="bank-emi-rate" className="ml-auto whitespace-nowrap rounded-lg bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm">
                  {interestRate.toFixed(2)}% <span className="text-md font-medium text-slate-700">{labels.perAnnum}</span>
                </output>
              </div>
              <input
                id="bank-emi-rate"
                type="range"
                min={MIN_RATE}
                max={MAX_RATE}
                step={0.01}
                value={interestRate}
                onChange={(event) => setInterestRate(clamp(Number(event.target.value), MIN_RATE, MAX_RATE))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                aria-label={labels.interestRateAriaLabel}
              />
            </div>
          </div>

          <p className="mt-6 border-t border-slate-100 pt-4 text-sm leading-5 text-slate-600 sm:mt-7 sm:pt-5 sm:text-md">
            {labels.estimateOnly}
          </p>
        </div>

        <aside className="relative flex min-w-0 flex-col overflow-hidden rounded-[28px] bg-[#26346f] p-4 text-white shadow-[0_28px_70px_-30px_rgba(38,52,111,0.55)] sm:p-7 xl:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/[0.07]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-7 -top-11 h-44 w-44 rounded-full border border-white/[0.07]" aria-hidden="true" />
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="min-w-0 text-xs font-bold uppercase tracking-[0.17em] text-emerald-200/75 sm:text-md">
                {labels.repaymentSnapshot}
              </p>
              <span className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/85">
                {labels.liveEstimate}
              </span>
            </div>

            <div className="mt-7 sm:mt-8">
              <p className="text-sm font-medium text-white/80 sm:text-md">{labels.monthlyEmi}</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="whitespace-nowrap text-3xl font-bold tracking-[0.045em] text-white sm:text-5xl">
                  {formatCurrency(calculation.emi)}
                </span>
                <span className="text-sm text-white/80 sm:text-md">{labels.month}</span>
              </div>
            </div>

            <dl className="mt-6 space-y-3 border-t border-white/15 pt-5 sm:mt-7 sm:pt-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                <dt className="min-w-0 text-white/80">{labels.principal}</dt>
                <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">{formatCurrency(loanAmount)}</dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                <dt className="min-w-0 text-white/80">{labels.totalInterest}</dt>
                <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">{formatCurrency(calculation.totalInterest)}</dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                <dt className="min-w-0 text-white/80">{labels.totalRepayment}</dt>
                <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">{formatCurrency(calculation.totalAmountPayable)}</dd>
              </div>
            </dl>

            <Link
              href="/contact"
              className="mt-7 inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full bg-lime-300 px-4 py-3.5 text-center text-sm font-bold text-[#17301f] shadow-[0_8px_24px_-12px_rgba(190,242,100,0.8)] transition hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200 sm:px-5 sm:text-md"
            >
              {labels.contactAction}
              <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-center text-[12px] leading-4 text-white/80">
              {labels.lenderTerms}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
