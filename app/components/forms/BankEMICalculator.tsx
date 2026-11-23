"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  Calculator,
  CalendarDays,
  Coins,
  Landmark,
  Percent,
  ShieldCheck,
} from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { ReadMoreToggle } from '@/app/components/ui/ReadMoreToggle'

type LoanBand = 'upToTwoLakhs' | 'aboveTwoLakhs'

const MIN_LOAN_UP_TO_TWO_LAKHS = 50000
const MAX_LOAN_UP_TO_TWO_LAKHS = 200000
const MIN_LOAN_ABOVE_TWO_LAKHS = 201000
const MAX_LOAN_ABOVE_TWO_LAKHS = 600000
const DEFAULT_LOAN = 50000
const MIN_TENURE_MONTHS = 7
const MAX_TENURE_MONTHS = 120
const DEFAULT_TENURE_MONTHS = 60
const MORATORIUM_MONTHS = 6
const DEFAULT_REPO_RATE = 5.5
const REPO_RATE_MARKUP = 0.5
const NON_HOME_LOAN_RATE_MARKUP = 1
const MIN_LOAN_INTEREST_RATE = 6
const MAX_LOAN_INTEREST_RATE = 9
const MIN_REPO_RATE = MIN_LOAN_INTEREST_RATE - REPO_RATE_MARKUP
const MAX_REPO_RATE = MAX_LOAN_INTEREST_RATE - REPO_RATE_MARKUP

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
const getRangePoints = (min: number, max: number, step: number) =>
  Array.from({ length: 7 }, (_, index) => {
    const value = min + ((max - min) * index) / 6
    return Number((min + Math.round((value - min) / step) * step).toFixed(6))
  })
const rangeInputClassName =
  'mt-4 h-2 w-full cursor-pointer accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2'

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
  const [isExpanded, setIsExpanded] = useState(true)
  const borrowerMargin = loanBand === 'upToTwoLakhs' ? 0.1 : 0.2
  const estimatedProjectCost = Math.ceil(loanAmount / (1 - borrowerMargin))
  const borrowerContribution = estimatedProjectCost - loanAmount
  const homeLoanRateMarkup = isHomeLoanCustomer ? 0 : NON_HOME_LOAN_RATE_MARKUP
  const minHomeLoanRate = MIN_LOAN_INTEREST_RATE - homeLoanRateMarkup
  const maxHomeLoanRate = MAX_LOAN_INTEREST_RATE - homeLoanRateMarkup

  const calculation = useMemo(() => {
    const homeLoanRate = Number(homeLoanRateInput)
    const hasValidHomeLoanRate =
      homeLoanRateInput.trim() !== '' &&
      Number.isFinite(homeLoanRate) &&
      homeLoanRate >= minHomeLoanRate &&
      homeLoanRate <= maxHomeLoanRate
    const interestRate =
      loanBand === 'upToTwoLakhs'
        ? repoRate + REPO_RATE_MARKUP
        : hasValidHomeLoanRate
          ? homeLoanRate + homeLoanRateMarkup
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
  }, [homeLoanRateInput, homeLoanRateMarkup, isHomeLoanCustomer, loanAmount, loanBand, maxHomeLoanRate, minHomeLoanRate, repoRate, tenureMonths])

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

  function updateHomeLoanCustomer(isCustomer: boolean) {
    setIsHomeLoanCustomer(isCustomer)
    setHomeLoanRateInput((current) => {
      if (!current.trim()) return current

      const currentRate = Number(current)
      if (!Number.isFinite(currentRate)) return current

      const rateMarkup = isCustomer ? 0 : NON_HOME_LOAN_RATE_MARKUP
      const clampedRate = clamp(
        currentRate,
        MIN_LOAN_INTEREST_RATE - rateMarkup,
        MAX_LOAN_INTEREST_RATE - rateMarkup,
      )

      return clampedRate === currentRate ? current : String(clampedRate)
    })
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#fff8ed] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className={`relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fffaf2] shadow-xl shadow-slate-900/10 ${
          isExpanded ? 'lg:grid-cols-[minmax(19rem,0.82fr)_minmax(0,1.18fr)]' : ''
        }`}
      >
          <aside className="relative order-first flex min-w-0 flex-col overflow-hidden bg-[#071a49] p-5 text-white sm:p-7 lg:col-start-1 lg:row-start-1 lg:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-blue-300/20" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-amber-300/20" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="inline-flex w-fit max-w-full min-w-0 items-center gap-2 rounded-full border border-amber-400/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                  <Landmark size={14} strokeWidth={2.2} className="text-amber-300" aria-hidden="true" />
                  {labels.badge}
                </div>
                <ReadMoreToggle
                  expanded={isExpanded}
                  onToggle={() => setIsExpanded((expanded) => !expanded)}
                  controlsId="bank-emi-calculator-controls"
                  labelClassName="shrink-0 text-amber-200 underline decoration-amber-400/60 hover:text-white"
                />
              </div>
              <h2 className="mt-5 max-w-xl text-left text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {labels.title}
                <span className="text-amber-400"> {labels.titleAccent}</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                {labels.description}
              </p>
            </div>
            <div hidden={!isExpanded} className="relative mx-auto mt-8 aspect-square w-full max-w-[19rem]">
              <div className="absolute inset-1 rounded-full border border-amber-300/35" aria-hidden="true" />
              <div className="absolute inset-[5%] rounded-full border-[0.55rem] border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)]" aria-hidden="true" />
              <div className="absolute inset-[12%] rounded-full border border-blue-200/20" aria-hidden="true" />
              <div className="relative z-10 grid h-full place-items-center p-7 text-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                    {labels.monthlyEmi}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                    <span
                      className={`tracking-tight text-amber-400 ${
                        calculation ? 'text-5xl font-bold sm:text-6xl' : 'text-sm font-medium'
                      }`}
                    >
                      {calculation ? <DigitalNumber value={formatCurrency(calculation.emi)} /> : labels.enterHomeLoanRate}
                    </span>
                    {calculation && <span className="text-sm text-blue-100 sm:text-base">{labels.month}</span>}
                  </div>
                  {calculation && (
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      <span className="rounded-full border border-amber-300/60 bg-blue-950/60 px-3 py-1.5 text-xs text-white">
                        <DigitalNumber value={formatTenure(tenureMonths)} />
                      </span>
                      <span className="rounded-full border border-amber-300/60 bg-blue-950/60 px-3 py-1.5 text-xs text-white">
                        {labels.calculatedInterestRate}:{' '}
                        <DigitalNumber value={calculation.interestRate.toFixed(2)} />%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          <main id="bank-emi-calculator-controls" hidden={!isExpanded} className="relative min-w-0 bg-[#fffaf2] p-5 text-[#10234f] sm:p-7 lg:col-start-2 lg:row-start-1 lg:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" aria-hidden="true" />
            <div className="relative z-10">
          <div className="mb-5 border-b border-orange-200 pb-4">
            <p className="uppercase text-[#10234f] text-xs font-bold tracking-widest leading-5">
              {labels.loanDetails}
            </p>
              <p className="mt-1 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.loanDetailsSub}</p>
          </div>

          <div>
            <div>
              <p className="text-sm font-bold text-[#10234f]">{labels.loanCategory}</p>
              <div className="mt-2 grid grid-cols-1 overflow-hidden rounded-full border border-blue-900/20 bg-white/70 sm:grid-cols-2" role="group" aria-label={labels.loanCategory}>
                <button
                  type="button"
                  aria-pressed={loanBand === 'upToTwoLakhs'}
                  onClick={() => {
                    setLoanBand('upToTwoLakhs')
                    setLoanAmount((value) =>
                      clamp(value, MIN_LOAN_UP_TO_TWO_LAKHS, MAX_LOAN_UP_TO_TWO_LAKHS),
                    )
                  }}
                  className={`min-h-11 rounded-full px-3 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    loanBand === 'upToTwoLakhs'
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'text-[#10234f] hover:bg-orange-100'
                  } tracking-normal`}
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
                  className={`min-h-11 rounded-full px-3 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    loanBand === 'aboveTwoLakhs'
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'text-[#10234f] hover:bg-orange-100'
                  } tracking-normal`}
                >
                  {labels.loanAboveTwoLakhs}
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-5">
            <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 border-b border-orange-100 pb-4">
              <span className="mt-1 grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-800">
                <Coins size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-loan" className="text-sm font-bold text-[#10234f]">{labels.loanAmount}</label>
                <output htmlFor="bank-emi-loan" style={digitalFontStyle} className="ml-auto whitespace-nowrap rounded-full bg-orange-200/80 px-3 py-1.5 text-right text-sm font-bold text-[#10234f] sm:px-4">
                  {formatCurrency(loanAmount)}
                </output>
              </div>
              <input
                id="bank-emi-loan"
                type="range"
                min={minLoanAmount}
                max={maxLoanAmount}
                step={1000}
                list="bank-emi-loan-points"
                value={loanAmount}
                onChange={(event) =>
                  setLoanAmount(clamp(Number(event.target.value), minLoanAmount, maxLoanAmount))
                }
                className={rangeInputClassName}
                aria-label={labels.loanAmountAriaLabel}
              />
              <datalist id="bank-emi-loan-points">
                {getRangePoints(minLoanAmount, maxLoanAmount, 1000).map((point) => (
                  <option key={point} value={point} />
                ))}
              </datalist>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{formatCurrency(minLoanAmount)}</span>
                <span>{formatCurrency(maxLoanAmount)}</span>
              </div>
              </div>
            </div>

            <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 border-b border-orange-100 pb-4">
              <span className="mt-1 grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-800">
                <CalendarDays size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                <label htmlFor="bank-emi-tenure" className="text-sm font-bold text-[#10234f]">{labels.loanTenure}</label>
                <output htmlFor="bank-emi-tenure" style={digitalFontStyle} className="ml-auto whitespace-nowrap rounded-full bg-orange-200/80 px-3 py-1.5 text-right text-sm font-bold text-[#10234f] sm:px-4">
                  {formatTenure(tenureMonths)}
                </output>
              </div>
              <input
                id="bank-emi-tenure"
                type="range"
                min={MIN_TENURE_MONTHS}
                max={MAX_TENURE_MONTHS}
                step={1}
                list="bank-emi-tenure-points"
                value={tenureMonths}
                onChange={(event) =>
                  setTenureMonths(
                    clamp(Number(event.target.value), MIN_TENURE_MONTHS, MAX_TENURE_MONTHS),
                  )
                }
                className={rangeInputClassName}
                aria-label={labels.loanTenureAriaLabel}
              />
              <datalist id="bank-emi-tenure-points">
                {getRangePoints(MIN_TENURE_MONTHS, MAX_TENURE_MONTHS, 1).map((point) => (
                  <option key={point} value={point} />
                ))}
              </datalist>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{formatTenure(MIN_TENURE_MONTHS)}</span>
                <span>{formatTenure(MAX_TENURE_MONTHS)}</span>
              </div>
              </div>
            </div>

            <div className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 border-b border-orange-100 pb-4">
              <span className="mt-1 grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-800">
                <Percent size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="min-w-0">
              {loanBand === 'upToTwoLakhs' ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 ">
                    <label htmlFor="bank-emi-repo-rate" className="text-sm font-bold text-[#10234f]">
                      {labels.repoRate}
                    </label>
                    <output htmlFor="bank-emi-repo-rate" className="ml-auto whitespace-nowrap rounded-full bg-orange-200/80 px-3 py-1.5 text-right text-sm font-bold tabular-nums text-[#10234f] sm:px-4">
                      <DigitalNumber value={repoRate.toFixed(2)} />% <span className="text-base font-medium text-slate-700 tracking-normal">{labels.perAnnum}</span>
                    </output>
                  </div>
                  <input
                    id="bank-emi-repo-rate"
                    type="range"
                    min={MIN_REPO_RATE}
                    max={MAX_REPO_RATE}
                    step={0.01}
                    list="bank-emi-repo-rate-points"
                    value={repoRate}
                    onChange={(event) =>
                      setRepoRate(clamp(Number(event.target.value), MIN_REPO_RATE, MAX_REPO_RATE))
                    }
                    className={rangeInputClassName}
                    aria-label={labels.repoRateAriaLabel}
                  />
                  <datalist id="bank-emi-repo-rate-points">
                    {getRangePoints(MIN_REPO_RATE, MAX_REPO_RATE, 0.01).map((point) => (
                      <option key={point} value={point} />
                    ))}
                  </datalist>
                  <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.repoRateNote}</p>
                  <p className="mt-2 text-emerald-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.calculatedInterestRate}: {(repoRate + 0.5).toFixed(2)}% {labels.perAnnum}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.customerType}</p>
                  <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label={labels.customerType}>
                    <button
                      type="button"
                      aria-pressed={isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(true)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-sm ${
                        isHomeLoanCustomer
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                      } tracking-normal`}
                    >
                      {labels.homeLoanCustomer}
                    </button>
                    <button
                      type="button"
                      aria-pressed={!isHomeLoanCustomer}
                      onClick={() => setIsHomeLoanCustomer(false)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-sm ${
                        !isHomeLoanCustomer
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                      } tracking-normal`}
                    >
                      {labels.nonHomeLoanCustomer}
                    </button>
                  </div>
                  <label htmlFor="bank-emi-home-loan-rate" className="mt-4 block text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                    {labels.homeLoanRate}
                  </label>
                  <div className="mt-2 flex items-center rounded-xl border border-blue-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-400">
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
                      className="min-w-0 flex-1 bg-transparent text-lg font-[family-name:var(--font-digital)] font-bold text-slate-900 outline-none tracking-normal"
                      aria-label={labels.homeLoanRateAriaLabel}
                      aria-invalid={
                        homeLoanRateInput !== '' &&
                        (!Number.isFinite(Number(homeLoanRateInput)) ||
                          Number(homeLoanRateInput) < 0 ||
                          Number(homeLoanRateInput) > MAX_HOME_LOAN_RATE)
                      }
                    />
                    <span className="text-sm font-bold text-slate-600 tracking-normal">%</span>
                  </div>
                  <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.homeLoanRateNote}</p>
                  {calculation ? (
                    <p className="mt-2 text-emerald-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {labels.calculatedInterestRate}: {calculation.interestRate.toFixed(2)}% {labels.perAnnum}
                    </p>
                  ) : (
                    <p className="mt-2 text-amber-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7" role="status">
                      {labels.enterHomeLoanRate}
                    </p>
                  )}
                </>
              )}
              </div>
            </div>
          </div>

          </div>
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
            </div>
          </main>

          <footer hidden={!isExpanded} className="relative bg-[#071a49] text-white lg:col-span-2">
            <div className="grid lg:grid-cols-[minmax(12rem,1.1fr)_minmax(0,6fr)]">
              <div className="flex items-center gap-3 border-b border-amber-400/70 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                <Calculator size={30} className="shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide">{labels.repaymentSnapshot}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-300">{labels.liveEstimate}</p>
                </div>
              </div>
              <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                <div className="border-b border-white/15 p-3 text-center sm:border-r">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.principal}</dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                    <DigitalNumber value={formatCurrency(loanAmount)} />
                  </dd>
                </div>
                <div className="border-b border-white/15 p-3 text-center sm:border-r">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.projectCost}</dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                    <DigitalNumber value={formatCurrency(estimatedProjectCost)} />
                  </dd>
                </div>
                <div className="border-b border-white/15 p-3 text-center sm:border-r">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.borrowerContribution}</dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                    <DigitalNumber value={formatCurrency(borrowerContribution)} />
                  </dd>
                </div>
                <div className="border-b border-white/15 p-3 text-center sm:border-r">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.totalInterest}</dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                    <DigitalNumber value={calculation ? formatCurrency(calculation.totalInterest) : '—'} />
                  </dd>
                </div>
                <div className="border-b border-white/15 p-3 text-center sm:border-r">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.totalRepayment}</dt>
                  <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                    <DigitalNumber value={calculation ? formatCurrency(calculation.totalAmountPayable) : '—'} />
                  </dd>
                </div>
                {calculation && (
                  <div className="p-3 text-center">
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-wide text-blue-100">{labels.repaymentMonths}</dt>
                    <dd className="mt-1 text-sm font-bold tabular-nums sm:text-base">
                      <DigitalNumber value={calculation.repaymentMonths} /> {labels.tenureMonths}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </footer>
      </div>
    </section>
  )
}
