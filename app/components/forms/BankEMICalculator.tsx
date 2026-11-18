"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Landmark } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

type LoanBand = 'upToTwoLakhs' | 'aboveTwoLakhs'

const MIN_LOAN_UP_TO_TWO_LAKHS = 25000
const MAX_LOAN_UP_TO_TWO_LAKHS = 200000
const MIN_LOAN_ABOVE_TWO_LAKHS = 201000
const MAX_LOAN_ABOVE_TWO_LAKHS = 600000
const DEFAULT_LOAN = 25000
const MIN_TENURE_MONTHS = 7
const MAX_TENURE_MONTHS = 120
const DEFAULT_TENURE_MONTHS = 60
const MORATORIUM_MONTHS = 6
const DEFAULT_REPO_RATE = 5.5
const MIN_REPO_RATE = 0
const MAX_REPO_RATE = 15
const MAX_HOME_LOAN_RATE = 30

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
  const digitalFontStyle = t.componentData.companyAge.digitalFontStyle
  const [loanBand, setLoanBand] = useState<LoanBand>('upToTwoLakhs')
  const [loanAmount, setLoanAmount] = useState(DEFAULT_LOAN)
  const [tenureMonths, setTenureMonths] = useState(DEFAULT_TENURE_MONTHS)
  const [repoRate, setRepoRate] = useState(DEFAULT_REPO_RATE)
  const [isHomeLoanCustomer, setIsHomeLoanCustomer] = useState(true)
  const [homeLoanRateInput, setHomeLoanRateInput] = useState('')
  const borrowerMargin = loanBand === 'upToTwoLakhs' ? 0.1 : 0.2
  const estimatedProjectCost = Math.ceil(loanAmount / (1 - borrowerMargin))
  const borrowerContribution = estimatedProjectCost - loanAmount

  const calculation = useMemo(() => {
    const homeLoanRate = Number(homeLoanRateInput)
    const hasValidHomeLoanRate =
      homeLoanRateInput.trim() !== '' &&
      Number.isFinite(homeLoanRate) &&
      homeLoanRate >= 0 &&
      homeLoanRate <= MAX_HOME_LOAN_RATE
    const interestRate =
      loanBand === 'upToTwoLakhs'
        ? repoRate + 0.5
        : hasValidHomeLoanRate
          ? homeLoanRate + (isHomeLoanCustomer ? 0 : 1)
          : null

    if (interestRate === null) return null

    const months = tenureMonths - MORATORIUM_MONTHS
    const monthlyRate = interestRate / 100 / 12

    const emi =
      monthlyRate > 0
        ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
        : loanAmount / months

    const totalAmountPayable = emi * months
    const totalInterest = Math.max(0, totalAmountPayable - loanAmount)

    return {
      emi,
      totalAmountPayable,
      totalInterest,
        interestRate,
        repaymentMonths: months,
    }
  }, [homeLoanRateInput, isHomeLoanCustomer, loanAmount, loanBand, repoRate, tenureMonths])

  const minLoanAmount =
    loanBand === 'upToTwoLakhs' ? MIN_LOAN_UP_TO_TWO_LAKHS : MIN_LOAN_ABOVE_TWO_LAKHS
  const maxLoanAmount =
    loanBand === 'upToTwoLakhs' ? MAX_LOAN_UP_TO_TWO_LAKHS : MAX_LOAN_ABOVE_TWO_LAKHS

  function formatTenure(months: number) {
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    const parts: string[] = []

    if (years > 0) parts.push(`${years} ${years === 1 ? labels.year : labels.years}`)
    if (remainingMonths > 0) {
        parts.push(
          `${remainingMonths} ${remainingMonths === 1 ? labels.tenureMonth : labels.tenureMonths}`,
        )
    }

    return parts.join(' ')
  }

  return (
    <section className="relative isolate border-y border-[#cfe4ee] bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full border border-cyan-900/[0.06]" />
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-cyan-900/[0.06]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 sm:gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.08fr)_minmax(0,0.94fr)] xl:gap-6">
        <header className="flex min-w-0 flex-col justify-center py-4 md:col-span-2 xl:sticky xl:top-28 xl:col-span-1 xl:self-start xl:pr-8">
          <div className="mb-5 inline-flex min-w-0 items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
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

        <div className="min-w-0 rounded-3xl border border-[#dce8df] bg-white p-4 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.55)] sm:p-6 xl:p-7">
          <div className="mb-7">
            <p className="text-md font-bold uppercase tracking-[0.17em] text-emerald-800">
              {labels.loanDetails}
            </p>
            <p className="mt-1 text-sm leading-5 text-slate-600">{labels.loanDetailsSub}</p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            <div>
              <p className="text-md font-semibold text-slate-700 sm:text-sm">{labels.loanCategory}</p>
              <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label={labels.loanCategory}>
                <button
                  type="button"
                  aria-pressed={loanBand === 'upToTwoLakhs'}
                  onClick={() => {
                    setLoanBand('upToTwoLakhs')
                    setLoanAmount((value) =>
                      clamp(value, MIN_LOAN_UP_TO_TWO_LAKHS, MAX_LOAN_UP_TO_TWO_LAKHS),
                    )
                  }}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                    loanBand === 'upToTwoLakhs'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {labels.loanUpToTwoLakhs}
                </button>
                <button
                  type="button"
                  aria-pressed={loanBand === 'aboveTwoLakhs'}
                  onClick={() => {
                    setLoanBand('aboveTwoLakhs')
                    setLoanAmount((value) =>
                      clamp(value, MIN_LOAN_ABOVE_TWO_LAKHS, MAX_LOAN_ABOVE_TWO_LAKHS),
                    )
                  }}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                    loanBand === 'aboveTwoLakhs'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {labels.loanAboveTwoLakhs}
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-loan" className="text-md font-semibold text-slate-700 sm:text-sm">{labels.loanAmount}</label>
                <output htmlFor="bank-emi-loan" style={digitalFontStyle} className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                  {formatCurrency(loanAmount)}
                </output>
              </div>
              <input
                id="bank-emi-loan"
                type="range"
                min={minLoanAmount}
                max={maxLoanAmount}
                step={1000}
                value={loanAmount}
                onChange={(event) =>
                  setLoanAmount(clamp(Number(event.target.value), minLoanAmount, maxLoanAmount))
                }
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                aria-label={labels.loanAmountAriaLabel}
              />
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{formatCurrency(minLoanAmount)}</span>
                <span>{formatCurrency(maxLoanAmount)}</span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-tenure" className="text-md font-semibold text-slate-700 sm:text-sm">{labels.loanTenure}</label>
                <output htmlFor="bank-emi-tenure" style={digitalFontStyle} className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                  {formatTenure(tenureMonths)}
                </output>
              </div>
              <input
                id="bank-emi-tenure"
                type="range"
                min={MIN_TENURE_MONTHS}
                max={MAX_TENURE_MONTHS}
                step={1}
                value={tenureMonths}
                onChange={(event) =>
                  setTenureMonths(
                    clamp(Number(event.target.value), MIN_TENURE_MONTHS, MAX_TENURE_MONTHS),
                  )
                }
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                aria-label={labels.loanTenureAriaLabel}
              />
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{formatTenure(MIN_TENURE_MONTHS)}</span>
                <span>{formatTenure(MAX_TENURE_MONTHS)}</span>
              </div>
            </div>

            <div>
              {loanBand === 'upToTwoLakhs' ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <label htmlFor="bank-emi-repo-rate" className="text-md font-semibold text-slate-700 sm:text-sm">
                      {labels.repoRate}
                    </label>
                    <output htmlFor="bank-emi-repo-rate" style={digitalFontStyle} className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                      {repoRate.toFixed(2)}% <span className="text-md font-medium text-slate-700">{labels.perAnnum}</span>
                    </output>
                  </div>
                  <input
                    id="bank-emi-repo-rate"
                    type="range"
                    min={MIN_REPO_RATE}
                    max={MAX_REPO_RATE}
                    step={0.01}
                    value={repoRate}
                    onChange={(event) =>
                      setRepoRate(clamp(Number(event.target.value), MIN_REPO_RATE, MAX_REPO_RATE))
                    }
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                    aria-label={labels.repoRateAriaLabel}
                  />
                  <p className="mt-2 text-xs leading-5 text-slate-600">{labels.repoRateNote}</p>
                  <p className="mt-2 text-sm font-bold text-emerald-800">
                    {labels.calculatedInterestRate}: {(repoRate + 0.5).toFixed(2)}% {labels.perAnnum}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-md font-semibold text-slate-700 sm:text-sm">{labels.customerType}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label={labels.customerType}>
                    <button
                      type="button"
                      aria-pressed={isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(true)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:text-sm ${
                        isHomeLoanCustomer
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {labels.homeLoanCustomer}
                    </button>
                    <button
                      type="button"
                      aria-pressed={!isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(false)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:text-sm ${
                        !isHomeLoanCustomer
                          ? 'border-emerald-700 bg-emerald-50 text-emerald-950'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {labels.nonHomeLoanCustomer}
                    </button>
                  </div>
                  <label htmlFor="bank-emi-home-loan-rate" className="mt-4 block text-sm font-semibold text-slate-700">
                    {labels.homeLoanRate}
                  </label>
                  <div className="mt-2 flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-500">
                    <input
                      id="bank-emi-home-loan-rate"
                      type="number"
                      min={0}
                      max={MAX_HOME_LOAN_RATE}
                      step={0.01}
                      inputMode="decimal"
                      value={homeLoanRateInput}
                      onChange={(event) => setHomeLoanRateInput(event.target.value)}
                      style={digitalFontStyle}
                      className="min-w-0 flex-1 bg-transparent text-lg font-bold tabular-nums text-slate-900 outline-none"
                      aria-label={labels.homeLoanRateAriaLabel}
                      aria-invalid={
                        homeLoanRateInput !== '' &&
                        (!Number.isFinite(Number(homeLoanRateInput)) ||
                          Number(homeLoanRateInput) < 0 ||
                          Number(homeLoanRateInput) > MAX_HOME_LOAN_RATE)
                      }
                    />
                    <span className="text-sm font-bold text-slate-600">%</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{labels.homeLoanRateNote}</p>
                  {calculation ? (
                    <p className="mt-2 text-sm font-bold text-emerald-800">
                      {labels.calculatedInterestRate}: {calculation.interestRate.toFixed(2)}% {labels.perAnnum}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-semibold text-amber-800" role="status">
                      {labels.enterHomeLoanRate}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:mt-7">
            <p className="text-sm font-bold text-emerald-950">{labels.guidelineSummary}</p>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-slate-600">{labels.borrowerMargin}</dt>
                <dd className="shrink-0 font-bold text-slate-900">
                  {loanBand === 'upToTwoLakhs' ? '10%' : '20%'}
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-600">{labels.panRequirement}</dt>
                <dd className="shrink-0 font-bold text-slate-900">
                  {loanBand === 'upToTwoLakhs' ? labels.panNotRequired : labels.panMandatory}
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs leading-5 text-slate-600">{labels.eligibilitySummary}</p>
            <Link
              href="/finance"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-800 underline decoration-emerald-500 underline-offset-2 hover:text-emerald-950"
            >
              {labels.financePageLink}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-600">{labels.estimateOnly}</p>
        </div>

        <aside className="relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-indigo-900/20 bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#312e81] p-4 text-white shadow-[0_28px_70px_-42px_rgba(30,58,138,0.8)] sm:p-6 xl:p-7">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/[0.07]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-7 -top-11 h-44 w-44 rounded-full border border-white/[0.07]" aria-hidden="true" />
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-4 sm:p-5">
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-cyan-300/10 blur-2xl" />
              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80">{labels.monthlyEmi}</p>
              <div className="relative mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span
                  style={digitalFontStyle}
                  className={`tabular-nums tracking-tight text-cyan-100 ${
                    calculation ? 'text-3xl font-semibold sm:text-4xl' : 'text-sm font-medium'
                  }`}
                >
                  {calculation ? formatCurrency(calculation.emi) : labels.enterHomeLoanRate}
                </span>
                {calculation && <span className="text-sm text-white/75 sm:text-md">{labels.month}</span>}
              </div>
              {calculation && (
                <div className="relative mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs text-white/85">
                    {labels.calculatedInterestRate}:{' '}
                    <span style={digitalFontStyle} className="font-bold text-white">
                      {calculation.interestRate.toFixed(2)}%
                    </span>
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs text-white/85">
                    {formatTenure(tenureMonths)}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4 sm:mt-7 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-100/75">
                  {labels.repaymentSnapshot}
                </p>
                <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-100">
                  {labels.liveEstimate}
                </span>
              </div>

              <dl className="mt-4 space-y-3 border-t border-white/15 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-white/80">{labels.principal}</dt>
                  <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                    {formatCurrency(loanAmount)}
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-white/80">{labels.projectCost}</dt>
                  <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                    {formatCurrency(estimatedProjectCost)}
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-white/80">{labels.borrowerContribution}</dt>
                  <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                    {formatCurrency(borrowerContribution)}
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-white/80">{labels.totalInterest}</dt>
                  <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                    {calculation ? formatCurrency(calculation.totalInterest) : '—'}
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-white/80">{labels.totalRepayment}</dt>
                  <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                    {calculation ? formatCurrency(calculation.totalAmountPayable) : '—'}
                  </dd>
                </div>
                {calculation && (
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                    <dt className="min-w-0 text-white/80">{labels.repaymentMonths}</dt>
                    <dd style={digitalFontStyle} className="ml-auto shrink-0 text-right font-semibold tabular-nums text-white">
                      {calculation.repaymentMonths} {labels.tenureMonths}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <p className="mt-4 text-xs leading-5 text-white/75">{labels.moratoriumCalculationNote}</p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-7 inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full bg-lime-300 px-4 py-3.5 text-center text-sm font-bold text-[#17301f] shadow-sm transition hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200 sm:px-5 sm:text-md"
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
