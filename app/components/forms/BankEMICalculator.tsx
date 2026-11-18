"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Landmark } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

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
const rangeTrackStyle = {
  background: '#ffffff',
}

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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff7ed] to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full border border-orange-900/[0.06]" />
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-orange-900/[0.06]" />
      </div>
      <header className="relative mx-auto mb-8 max-w-7xl">
        <div className="mb-4 inline-flex min-w-0 items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-900 shadow-sm sm:text-sm">
          <Landmark size={14} strokeWidth={2.2} className="text-orange-600" aria-hidden="true" />
          {labels.badge}
        </div>
        <h2 className="max-w-6xl text-left text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
          {labels.title}
          <span className="text-orange-600"> {labels.titleAccent}</span>
        </h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
          {labels.description}
        </p>
      </header>

      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-2xl shadow-sm lg:grid-cols-2 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="min-w-0 bg-linear-to-r from-amber-500 to-orange-500 p-5 text-white sm:p-7 lg:p-10">
          <div className="mb-7">
            <p className="text-md font-bold uppercase tracking-[0.17em] text-white">
              {labels.loanDetails}
            </p>
            <p className="mt-1 text-sm leading-5 text-white">{labels.loanDetailsSub}</p>
          </div>

          <div className="space-y-6 sm:space-y-7">
            <div>
              <p className="text-md font-semibold text-white sm:text-sm">{labels.loanCategory}</p>
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
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${
                    loanBand === 'upToTwoLakhs'
                      ? 'border-orange-700 bg-white text-orange-950'
                      : 'border-orange-100 bg-white/90 text-slate-700 hover:bg-amber-50'
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
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${
                    loanBand === 'aboveTwoLakhs'
                      ? 'border-orange-700 bg-white text-orange-950'
                      : 'border-orange-100 bg-white/90 text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {labels.loanAboveTwoLakhs}
                </button>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-loan" className="text-md font-semibold text-white sm:text-sm">{labels.loanAmount}</label>
                <output htmlFor="bank-emi-loan" className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                  <DigitalNumber value={formatCurrency(loanAmount)} />
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
                style={rangeTrackStyle}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-950"
                aria-label={labels.loanAmountAriaLabel}
              />
              <div className="mt-2 flex justify-between text-xs text-white">
                <span><DigitalNumber value={formatCurrency(minLoanAmount)} /></span>
                <span><DigitalNumber value={formatCurrency(maxLoanAmount)} /></span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-tenure" className="text-md font-semibold text-white sm:text-sm">{labels.loanTenure}</label>
                <output htmlFor="bank-emi-tenure" className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                  <DigitalNumber value={formatTenure(tenureMonths)} />
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
                style={rangeTrackStyle}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-950"
                aria-label={labels.loanTenureAriaLabel}
              />
              <div className="mt-2 flex justify-between text-xs text-white">
                <span><DigitalNumber value={formatTenure(MIN_TENURE_MONTHS)} /></span>
                <span><DigitalNumber value={formatTenure(MAX_TENURE_MONTHS)} /></span>
              </div>
            </div>

            <div>
              {loanBand === 'upToTwoLakhs' ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <label htmlFor="bank-emi-repo-rate" className="text-md font-semibold text-white sm:text-sm">
                      {labels.repoRate}
                    </label>
                    <output htmlFor="bank-emi-repo-rate" className="ml-auto whitespace-nowrap rounded-2xl bg-[#e6eefb] px-2 py-1.5 text-right text-xs font-bold tabular-nums text-[#173c2b] sm:px-4 sm:py-2 sm:text-sm">
                      <DigitalNumber value={repoRate.toFixed(2)} />% <span className="text-md font-medium text-slate-700">{labels.perAnnum}</span>
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
                    style={rangeTrackStyle}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-950"
                    aria-label={labels.repoRateAriaLabel}
                  />
                  <p className="mt-2 text-xs leading-5 text-white">{labels.repoRateNote}</p>
                  <p className="mt-2 text-sm font-bold text-white">
                    {labels.calculatedInterestRate}: <DigitalNumber value={(repoRate + 0.5).toFixed(2)} />% {labels.perAnnum}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-md font-semibold text-white sm:text-sm">{labels.customerType}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label={labels.customerType}>
                    <button
                      type="button"
                      aria-pressed={isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(true)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:text-sm ${
                        isHomeLoanCustomer
                          ? 'border-orange-700 bg-white text-orange-950'
                          : 'border-orange-100 bg-white/90 text-slate-700 hover:bg-amber-50'
                      }`}
                    >
                      {labels.homeLoanCustomer}
                    </button>
                    <button
                      type="button"
                      aria-pressed={!isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(false)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:text-sm ${
                        !isHomeLoanCustomer
                          ? 'border-orange-700 bg-white text-orange-950'
                          : 'border-orange-100 bg-white/90 text-slate-700 hover:bg-amber-50'
                      }`}
                    >
                      {labels.nonHomeLoanCustomer}
                    </button>
                  </div>
                  <label htmlFor="bank-emi-home-loan-rate" className="mt-4 block text-sm font-semibold text-white">
                    {labels.homeLoanRate}
                  </label>
                  <div className="mt-2 flex items-center rounded-xl border border-orange-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-orange-400">
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
                      className="min-w-0 flex-1 bg-transparent text-lg font-[family-name:var(--font-digital)] font-bold tabular-nums text-slate-900 outline-none"
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
                  <p className="mt-2 text-xs leading-5 text-white">{labels.homeLoanRateNote}</p>
                  {calculation ? (
                    <p className="mt-2 text-sm font-bold text-white">
                      {labels.calculatedInterestRate}: <DigitalNumber value={calculation.interestRate.toFixed(2)} />% {labels.perAnnum}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs font-semibold text-white" role="status">
                      {labels.enterHomeLoanRate}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/60 bg-white/85 p-4 sm:mt-7">
            <p className="text-sm font-bold text-[#071b2f]">{labels.guidelineSummary}</p>
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
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-orange-800 underline decoration-orange-500 underline-offset-2 hover:text-orange-950"
            >
              {labels.financePageLink}
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-4 text-xs leading-5 text-white">{labels.estimateOnly}</p>
        </div>

        <aside className="relative flex min-w-0 flex-col overflow-hidden bg-linear-to-br from-[#fffaf3] via-[#fff7ed] to-[#ffedd5] p-5 text-slate-900 sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-orange-900/[0.07]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-7 -top-11 h-44 w-44 rounded-full border border-orange-900/[0.07]" aria-hidden="true" />
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-emerald-300/15 blur-2xl" />
              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{labels.monthlyEmi}</p>
              <div className="relative mt-3 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                <span
                  className={`tabular-nums tracking-tight text-orange-700 ${
                    calculation ? 'text-3xl font-semibold sm:text-4xl' : 'text-sm font-medium'
                  }`}
                >
                  {calculation ? <DigitalNumber value={formatCurrency(calculation.emi)} /> : labels.enterHomeLoanRate}
                </span>
                {calculation && <span className="text-sm text-slate-500 sm:text-md">{labels.month}</span>}
              </div>
              {calculation && (
                <div className="relative mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-orange-900/10 bg-orange-50 px-3 py-1 text-xs text-orange-950">
                    {labels.calculatedInterestRate}:{' '}
                    <span className="font-bold text-orange-950">
                      <DigitalNumber value={calculation.interestRate.toFixed(2)} />%
                    </span>
                  </span>
                  <span className="rounded-full border border-orange-900/10 bg-orange-50 px-3 py-1 text-xs text-orange-950">
                    {formatTenure(tenureMonths)}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-7 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-950">
                  {labels.repaymentSnapshot}
                </p>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-800">
                  {labels.liveEstimate}
                </span>
              </div>

              <dl className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-slate-600">{labels.principal}</dt>
                  <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                    <DigitalNumber value={formatCurrency(loanAmount)} />
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-slate-600">{labels.projectCost}</dt>
                  <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                    <DigitalNumber value={formatCurrency(estimatedProjectCost)} />
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-slate-600">{labels.borrowerContribution}</dt>
                  <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                    <DigitalNumber value={formatCurrency(borrowerContribution)} />
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-slate-600">{labels.totalInterest}</dt>
                  <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                    <DigitalNumber value={calculation ? formatCurrency(calculation.totalInterest) : '—'} />
                  </dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                  <dt className="min-w-0 text-slate-600">{labels.totalRepayment}</dt>
                  <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                    <DigitalNumber value={calculation ? formatCurrency(calculation.totalAmountPayable) : '—'} />
                  </dd>
                </div>
                {calculation && (
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs sm:text-sm">
                    <dt className="min-w-0 text-slate-600">{labels.repaymentMonths}</dt>
                    <dd className="ml-auto shrink-0 text-right font-semibold tabular-nums text-slate-950">
                      <DigitalNumber value={calculation.repaymentMonths} /> {labels.tenureMonths}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-600">{labels.moratoriumCalculationNote}</p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-7 inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-full border border-amber-300/70 bg-linear-to-r from-amber-500 to-orange-500 px-4 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-emerald-500 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:px-5 sm:text-md"
            >
              {labels.contactAction}
              <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-center text-[12px] leading-4 text-slate-600">
              {labels.lenderTerms}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
