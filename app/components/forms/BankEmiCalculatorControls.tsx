import type { CSSProperties, Dispatch, SetStateAction } from 'react'
import { CalendarDays, Percent } from 'lucide-react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { BankEmiLoanGuidance } from './BankEmiLoanGuidance'
import { BankEmiLoanBandSelector } from './BankEmiLoanBandSelector'
import { BankEmiLoanAmountControl } from './BankEmiLoanAmountControl'
import type { useLocale } from '@/lib/LocaleContext'

export type LoanBand = 'upToTwoLakhs' | 'aboveTwoLakhs'

export type EmiCalculation = {
  emi: number
  totalAmountPayable: number
  totalInterest: number
  interestRate: number
  repaymentMonths: number
}

export const formatCurrency = (value: number) => {
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

export const getRangePoints = (min: number, max: number, step: number) =>
  Array.from({ length: 7 }, (_, index) => {
    const value = min + ((max - min) * index) / 6
    return Number((min + Math.round((value - min) / step) * step).toFixed(6))
  })

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']
type ClampValue = (value: number, min: number, max: number) => number

const rangeInputClassName =
  'mt-4 h-2 w-full cursor-pointer accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2'

export function BankEmiCalculatorControls({
  labels,
  digitalFontStyle,
  loanBand,
  updateLoanBand,
  loanAmount,
  setLoanAmount,
  minLoanAmount,
  maxLoanAmount,
  tenureMonths,
  setTenureMonths,
  minTenureMonths,
  maxTenureMonths,
  formatTenure,
  repoRate,
  setRepoRate,
  minRepoRate,
  maxRepoRate,
  isHomeLoanCustomer,
  updateHomeLoanCustomer,
  homeLoanRateInput,
  setHomeLoanRateInput,
  minHomeLoanRate,
  maxHomeLoanRate,
  calculation,
  clampValue,
}: {
  labels: BankEmiLabels
  digitalFontStyle: CSSProperties
  loanBand: LoanBand
  updateLoanBand: (band: LoanBand) => void
  loanAmount: number
  setLoanAmount: Dispatch<SetStateAction<number>>
  minLoanAmount: number
  maxLoanAmount: number
  tenureMonths: number
  setTenureMonths: Dispatch<SetStateAction<number>>
  minTenureMonths: number
  maxTenureMonths: number
  formatTenure: (months: number) => string
  repoRate: number
  setRepoRate: Dispatch<SetStateAction<number>>
  minRepoRate: number
  maxRepoRate: number
  isHomeLoanCustomer: boolean
  updateHomeLoanCustomer: (isCustomer: boolean) => void
  homeLoanRateInput: string
  setHomeLoanRateInput: Dispatch<SetStateAction<string>>
  minHomeLoanRate: number
  maxHomeLoanRate: number
  calculation: EmiCalculation | null
  clampValue: ClampValue
}) {
  const clamp = clampValue

  return (
          <main id="bank-emi-calculator-controls" className="relative min-w-0 bg-[#fffaf2] px-5 pb-5 pt-10 text-[#10234f] sm:px-7 sm:pb-7 sm:pt-12 lg:col-start-2 lg:row-start-1 lg:px-8 lg:pb-8 lg:pt-14">
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
                  onClick={() => updateLoanBand('upToTwoLakhs')}
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
                  onClick={() => updateLoanBand('aboveTwoLakhs')}
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
            <BankEmiLoanAmountControl
              labels={labels}
              digitalFontStyle={digitalFontStyle}
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              minLoanAmount={minLoanAmount}
              maxLoanAmount={maxLoanAmount}
              formatCurrency={formatCurrency}
              getRangePoints={getRangePoints}
              clampValue={clamp}
              rangeInputClassName={rangeInputClassName}
            />

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
                min={minTenureMonths}
                max={maxTenureMonths}
                step={1}
                list="bank-emi-tenure-points"
                value={tenureMonths}
                onChange={(event) =>
                  setTenureMonths(
                    clamp(Number(event.target.value), minTenureMonths, maxTenureMonths),
                  )
                }
                className={rangeInputClassName}
                aria-label={labels.loanTenureAriaLabel}
              />
              <datalist id="bank-emi-tenure-points">
                {getRangePoints(minTenureMonths, maxTenureMonths, 1).map((point) => (
                  <option key={point} value={point} />
                ))}
              </datalist>
              <div className="mt-2 flex justify-between text-xs text-slate-500">
                <span>{formatTenure(minTenureMonths)}</span>
                <span>{formatTenure(maxTenureMonths)}</span>
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
                    min={minRepoRate}
                    max={maxRepoRate}
                    step={0.01}
                    list="bank-emi-repo-rate-points"
                    value={repoRate}
                    onChange={(event) =>
                      setRepoRate(clamp(Number(event.target.value), minRepoRate, maxRepoRate))
                    }
                    className={rangeInputClassName}
                    aria-label={labels.repoRateAriaLabel}
                  />
                  <datalist id="bank-emi-repo-rate-points">
                    {getRangePoints(minRepoRate, maxRepoRate, 0.01).map((point) => (
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
                  <BankEmiLoanBandSelector
                    labels={labels}
                    isHomeLoanCustomer={isHomeLoanCustomer}
                    updateHomeLoanCustomer={updateHomeLoanCustomer}
                  />
                  <label htmlFor="bank-emi-home-loan-rate" className="mt-4 block text-slate-700 text-xs sm:text-sm tracking-normal leading-5">
                    {labels.homeLoanRate}
                  </label>
                  <div className="mt-2">
                    <output
                      htmlFor="bank-emi-home-loan-rate"
                      style={digitalFontStyle}
                      className="ml-auto block w-fit whitespace-nowrap rounded-full bg-orange-200/80 px-3 py-1.5 text-right text-sm font-bold text-[#10234f] sm:px-4"
                    >
                      {Number(homeLoanRateInput || minHomeLoanRate).toFixed(2)}%
                    </output>
                    <input
                      id="bank-emi-home-loan-rate"
                      type="range"
                      min={minHomeLoanRate}
                      max={maxHomeLoanRate}
                      step={0.01}
                      list="bank-emi-home-loan-rate-points"
                      value={homeLoanRateInput || String(minHomeLoanRate)}
                      onChange={(event) => setHomeLoanRateInput(event.target.value)}
                      className={rangeInputClassName}
                      aria-label={labels.homeLoanRateAriaLabel}
                    />
                    <datalist id="bank-emi-home-loan-rate-points">
                      {getRangePoints(minHomeLoanRate, maxHomeLoanRate, 0.01).map((point) => (
                        <option key={point} value={point} />
                      ))}
                    </datalist>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>{minHomeLoanRate.toFixed(2)}%</span>
                      <span>{maxHomeLoanRate.toFixed(2)}%</span>
                    </div>
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
          <BankEmiLoanGuidance labels={labels} loanBand={loanBand} />
            </div>
          </main>
  )
}
