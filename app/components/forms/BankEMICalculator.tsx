"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Landmark, ShieldCheck } from 'lucide-react'

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

  const principalShare = (loanAmount / calculation.totalAmountPayable) * 100

  return (
    <section className="relative isolate overflow-hidden border-y border-[#d9e3f3] bg-[#edf3ff] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full border border-blue-900/[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full border border-blue-900/[0.06]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-9 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-sm">
              <Landmark size={14} strokeWidth={2.2} aria-hidden="true" />
              Personal finance · EMI planner
            </div>
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#122b22] sm:text-5xl lg:text-6xl">
              Make your next move
              <span className="mt-1 block text-emerald-700">with clarity.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Shape your loan around your life. Adjust the numbers and see the full repayment picture instantly.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-2xl border border-[#dce8df] bg-white/70 px-4 py-3 sm:self-auto">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
              <ShieldCheck size={19} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <div className="text-xs font-bold text-[#18372a]">Plan with confidence</div>
              <div className="mt-0.5 text-xs text-slate-500">A clear estimate, at a glance</div>
            </div>
          </div>
        </header>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <div className="rounded-[28px] border border-[#dce8df] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(18,43,34,0.3)] sm:p-7 lg:p-9">
            <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-emerald-800">Your loan details</p>
                <p className="mt-1 text-sm text-slate-500">Fine-tune the estimate below</p>
              </div>
              <span className="rounded-lg bg-[#e6eefb] px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-wide text-slate-500">
                INR · ₹
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <label htmlFor="bank-emi-loan" className="text-sm font-semibold text-slate-700 sm:text-base">Loan amount</label>
                  <output htmlFor="bank-emi-loan" className="rounded-xl bg-[#e6eefb] px-3 py-2 text-right text-sm font-bold tabular-nums text-[#173c2b] sm:px-4 sm:text-base">
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
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                  aria-label="Loan amount"
                />
                <div className="mt-2 flex justify-between text-xs font-medium tabular-nums text-slate-400">
                  <span>₹25,000</span>
                  <span>₹20,00,000</span>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <label htmlFor="bank-emi-tenure" className="text-sm font-semibold text-slate-700 sm:text-base">Loan tenure</label>
                  <output htmlFor="bank-emi-tenure" className="rounded-xl bg-[#e6eefb] px-3 py-2 text-right text-sm font-bold tabular-nums text-[#173c2b] sm:px-4 sm:text-base">
                    {tenureYears} {tenureYears === 1 ? 'year' : 'years'}
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
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                  aria-label="Loan tenure"
                />
                <div className="mt-2 flex justify-between text-xs font-medium text-slate-400">
                  <span>1 year</span>
                  <span>7 years</span>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <label htmlFor="bank-emi-rate" className="text-sm font-semibold text-slate-700 sm:text-base">Interest rate</label>
                  <output htmlFor="bank-emi-rate" className="rounded-xl bg-[#e6eefb] px-3 py-2 text-right text-sm font-bold tabular-nums text-[#173c2b] sm:px-4 sm:text-base">
                    {interestRate.toFixed(2)}% <span className="text-xs font-medium text-slate-500">p.a.</span>
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
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                  aria-label="Interest rate"
                />
                <div className="mt-2 flex justify-between text-xs font-medium tabular-nums text-slate-400">
                  <span>12% p.a.</span>
                  <span>24% p.a.</span>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-400">
              Estimate only. Your lender may apply different rates, fees, and eligibility criteria.
            </p>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-[#26346f] p-5 text-white shadow-[0_28px_70px_-30px_rgba(38,52,111,0.55)] sm:p-7 lg:p-9">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/[0.07]" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-7 -top-11 h-44 w-44 rounded-full border border-white/[0.07]" aria-hidden="true" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-emerald-200/75">Repayment snapshot</p>
                <p className="mt-1 text-sm text-white/55">Based on your loan details</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65">
                Live estimate
              </span>
            </div>

            <div className="relative mt-7 rounded-2xl border border-white/[0.09] bg-white/[0.06] p-5 sm:p-6">
              <p className="text-sm font-medium text-white/60">Your monthly EMI</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
                  {formatCurrency(calculation.emi)}
                </span>
                <span className="text-sm text-white/50">/ month</span>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300" aria-hidden="true" />
                Fixed monthly instalment for {tenureYears} {tenureYears === 1 ? 'year' : 'years'}
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-[auto_1fr] items-center gap-5 border-b border-white/10 pb-6 sm:gap-7">
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full sm:h-32 sm:w-32"
                style={{
                  background: `conic-gradient(#bef264 0% ${principalShare}%, rgba(255,255,255,0.15) ${principalShare}% 100%)`,
                }}
                role="img"
                aria-label={`Repayment breakdown: ${principalShare.toFixed(0)} percent principal and ${(100 - principalShare).toFixed(0)} percent interest`}
              >
                <div className="flex h-[5.25rem] w-[5.25rem] flex-col items-center justify-center rounded-full bg-[#26346f] sm:h-24 sm:w-24">
                  <span className="text-xl font-bold tabular-nums text-white">{principalShare.toFixed(0)}%</span>
                  <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45">principal</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm bg-lime-300" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Principal</p>
                    <p className="mt-0.5 text-sm font-semibold tabular-nums text-white sm:text-base">{formatCurrency(loanAmount)}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm bg-white/25" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Total interest</p>
                    <p className="mt-0.5 text-sm font-semibold tabular-nums text-white sm:text-base">{formatCurrency(calculation.totalInterest)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-end justify-between gap-4 py-5">
              <div>
                <p className="text-xs text-white/50">Total repayment</p>
                <p className="mt-1 text-xl font-bold tracking-tight tabular-nums text-white sm:text-2xl">
                  {formatCurrency(calculation.totalAmountPayable)}
                </p>
              </div>
              <p className="pb-1 text-right text-[11px] leading-4 text-white/45">
                Principal +<br />interest
              </p>
            </div>

            <Link
              href="/contact"
              className="relative mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 text-sm font-bold text-[#17301f] shadow-[0_8px_24px_-12px_rgba(190,242,100,0.8)] hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
            >
              Talk to our team
              <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <p className="relative mt-3 text-center text-[10px] leading-4 text-white/40">
              Final terms are subject to lender approval and eligibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
