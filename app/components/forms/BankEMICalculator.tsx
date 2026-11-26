"use client"

import { useMemo, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { BankEmiCalculatorControls, formatCurrency } from './BankEmiCalculatorControls'
import { BankEmiRepaymentSnapshot } from './BankEmiRepaymentSnapshot'
import { BankEmiSummary } from './BankEmiSummary'
import type { LoanBand } from './BankEmiCalculatorControls'

const MIN_LOAN_UP_TO_TWO_LAKHS = 50000
const MAX_LOAN_UP_TO_TWO_LAKHS = 200000
const MIN_LOAN_ABOVE_TWO_LAKHS = 200000
const MAX_LOAN_ABOVE_TWO_LAKHS = 600000
const DEFAULT_LOAN = 50000
const MIN_TENURE_MONTHS = 7
const MAX_TENURE_MONTHS = 120
const DEFAULT_TENURE_MONTHS = 60
const MORATORIUM_MONTHS = 6
const DEFAULT_REPO_RATE = 5.5
const REPO_RATE_MARKUP = 0.5
const NON_HOME_LOAN_RATE_MARKUP = 1
const MIN_LOAN_INTEREST_RATE_UP_TO_TWO_LAKHS = 6
const MIN_LOAN_INTEREST_RATE_ABOVE_TWO_LAKHS = 7
const MAX_LOAN_INTEREST_RATE = 9
const MIN_REPO_RATE = MIN_LOAN_INTEREST_RATE_UP_TO_TWO_LAKHS - REPO_RATE_MARKUP
const MAX_REPO_RATE = MAX_LOAN_INTEREST_RATE - REPO_RATE_MARKUP

const getMinimumLoanInterestRate = (band: LoanBand) =>
  band === 'upToTwoLakhs'
    ? MIN_LOAN_INTEREST_RATE_UP_TO_TWO_LAKHS
    : MIN_LOAN_INTEREST_RATE_ABOVE_TWO_LAKHS

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
  const homeLoanRateMarkup = isHomeLoanCustomer ? 0 : NON_HOME_LOAN_RATE_MARKUP
  const minHomeLoanRate = getMinimumLoanInterestRate(loanBand) - homeLoanRateMarkup
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
  }, [homeLoanRateInput, homeLoanRateMarkup, loanAmount, loanBand, maxHomeLoanRate, minHomeLoanRate, repoRate, tenureMonths])

  const formattedEmi = calculation ? formatCurrency(calculation.emi) : ''
  const emiTextSize = formattedEmi.length > 8 ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
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
      const rateMarkup = isCustomer ? 0 : NON_HOME_LOAN_RATE_MARKUP
      const minimumRate = getMinimumLoanInterestRate(loanBand) - rateMarkup
      if (!current.trim()) return String(minimumRate)

      const currentRate = Number(current)
      if (!Number.isFinite(currentRate)) return current

      const clampedRate = clamp(
        currentRate,
        minimumRate,
        MAX_LOAN_INTEREST_RATE - rateMarkup,
      )

      return clampedRate === currentRate ? current : String(clampedRate)
    })
  }

  function updateLoanBand(band: LoanBand) {
    setLoanBand(band)
    setLoanAmount((value) =>
      clamp(
        value,
        band === 'upToTwoLakhs' ? MIN_LOAN_UP_TO_TWO_LAKHS : MIN_LOAN_ABOVE_TWO_LAKHS,
        band === 'upToTwoLakhs' ? MAX_LOAN_UP_TO_TWO_LAKHS : MAX_LOAN_ABOVE_TWO_LAKHS,
      ),
    )
    setHomeLoanRateInput((current) => {
      const rateMarkup = isHomeLoanCustomer ? 0 : NON_HOME_LOAN_RATE_MARKUP
      const minimumRate = getMinimumLoanInterestRate(band) - rateMarkup
      if (!current.trim()) return String(minimumRate)

      const currentRate = Number(current)
      if (!Number.isFinite(currentRate)) return current

      return String(
        clamp(
          currentRate,
          minimumRate,
          MAX_LOAN_INTEREST_RATE - rateMarkup,
        ),
      )
    })
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#fff8ed] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-orange-100 bg-[#fffaf2] shadow-xl shadow-slate-900/10 lg:grid-cols-[minmax(19rem,0.82fr)_minmax(0,1.18fr)]"
      >
        <BankEmiSummary
          labels={labels}
          calculation={calculation}
          formattedEmi={formattedEmi}
          emiTextSize={emiTextSize}
          formattedTenure={formatTenure(tenureMonths)}
        />

        <BankEmiCalculatorControls
          labels={labels}
          digitalFontStyle={digitalFontStyle}
          loanBand={loanBand}
          updateLoanBand={updateLoanBand}
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          minLoanAmount={minLoanAmount}
          maxLoanAmount={maxLoanAmount}
          tenureMonths={tenureMonths}
          setTenureMonths={setTenureMonths}
          minTenureMonths={MIN_TENURE_MONTHS}
          maxTenureMonths={MAX_TENURE_MONTHS}
          formatTenure={formatTenure}
          repoRate={repoRate}
          setRepoRate={setRepoRate}
          minRepoRate={MIN_REPO_RATE}
          maxRepoRate={MAX_REPO_RATE}
          isHomeLoanCustomer={isHomeLoanCustomer}
          updateHomeLoanCustomer={updateHomeLoanCustomer}
          homeLoanRateInput={homeLoanRateInput}
          setHomeLoanRateInput={setHomeLoanRateInput}
          minHomeLoanRate={minHomeLoanRate}
          maxHomeLoanRate={maxHomeLoanRate}
          calculation={calculation}
          clampValue={clamp}
        />

        <BankEmiRepaymentSnapshot
          labels={labels}
          loanAmount={loanAmount}
          estimatedProjectCost={estimatedProjectCost}
          borrowerContribution={borrowerContribution}
          calculation={calculation}
        />
      </div>
    </section>
  )
}
