"use client"

import { useMemo, useState } from 'react'

const MIN_LOAN = 25000
const MAX_LOAN = 10000000
const DEFAULT_LOAN = 2500000
const MIN_TENURE = 1
const MAX_TENURE = 7
const DEFAULT_TENURE = 5
const MIN_RATE = 9.99
const MAX_RATE = 24
const DEFAULT_RATE = 9.99

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace('₹', '₹ ')

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

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f5f0] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 border-t-4 border-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-700 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            Banking
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.065em] text-slate-900 sm:text-5xl lg:text-[5rem]">
            Personal Loan
            <span className="mt-2 block text-sky-600">EMI Calculator</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Take Out the Guess Work from Financial Planning. Calculate your EMIs now!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white/85 p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-[20px] font-bold text-slate-900">Loan Amount</label>
                  <span className="inline-flex min-w-[150px] items-center justify-center rounded-md border border-sky-100 bg-sky-50/80 px-4 py-2 text-lg font-bold text-slate-900 shadow-inner ring-1 ring-white/60">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>

                <input
                  type="range"
                  min={MIN_LOAN}
                  max={MAX_LOAN}
                  step={25000}
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(clamp(Number(event.target.value), MIN_LOAN, MAX_LOAN))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-sky-600 shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)]"
                  aria-label="Loan amount"
                />

                <div className="flex items-center justify-between text-base font-medium text-slate-600">
                  <span>₹ 25,000</span>
                  <span>₹ 1,00,00,000</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-[20px] font-bold text-slate-900">Loan Tenure</label>
                  <span className="inline-flex min-w-[90px] items-center justify-center rounded-md border border-sky-100 bg-sky-50/80 px-4 py-2 text-lg font-bold text-slate-900 shadow-inner ring-1 ring-white/60">
                    {tenureYears} {tenureYears === 1 ? 'year' : 'years'}
                  </span>
                </div>

                <input
                  type="range"
                  min={MIN_TENURE}
                  max={MAX_TENURE}
                  step={1}
                  value={tenureYears}
                  onChange={(event) => setTenureYears(clamp(Number(event.target.value), MIN_TENURE, MAX_TENURE))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-sky-600 shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)]"
                  aria-label="Loan tenure"
                />

                <div className="flex items-center justify-between text-base font-medium text-slate-600">
                  <span>1 year</span>
                  <span>7 years</span>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-[20px] font-bold text-slate-900">Interest Rate</label>
                  <span className="inline-flex min-w-[120px] items-center justify-center rounded-md border border-sky-100 bg-sky-50/80 px-4 py-2 text-lg font-bold text-slate-900 shadow-inner ring-1 ring-white/60">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>

                <input
                  type="range"
                  min={MIN_RATE}
                  max={MAX_RATE}
                  step={0.01}
                  value={interestRate}
                  onChange={(event) => setInterestRate(clamp(Number(event.target.value), MIN_RATE, MAX_RATE))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-sky-600 shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)]"
                  aria-label="Interest rate"
                />

                <div className="flex items-center justify-between text-base font-medium text-slate-600">
                  <span>9.99% PA</span>
                  <span>24% PA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-linear-to-br from-[#f59e0b] via-[#f8b84d] to-[#f59e0b] p-5 text-white shadow-[0_30px_80px_-35px_rgba(245,158,11,0.8)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="space-y-5">
              <div>
                <h2 className="text-[2rem] font-black tracking-tighter text-white">Your Monthly EMI will be</h2>
                <p className="mt-2 text-base text-orange-50/90">Based on your loan rate and tenure.</p>
              </div>

              <div className="rounded-[22px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-50">Monthly EMI</div>
                <div className="mt-3 text-5xl font-black tracking-[-0.08em] text-white">
                  {formatCurrency(calculation.emi)}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)]">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-50">Amount Payable</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[-0.06em] text-white">
                    {formatCurrency(calculation.totalAmountPayable)}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)]">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-50">Interest Amount</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[-0.06em] text-white">
                    {formatCurrency(calculation.totalInterest)}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)] sm:col-span-2">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-50">Principal Amount</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[-0.06em] text-white">
                    {formatCurrency(loanAmount)}
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full rounded-full bg-white px-5 py-4 text-xl font-bold text-slate-900 shadow-[0_20px_30px_-18px_rgba(15,23,42,0.5)] transition hover:bg-orange-50">
                Apply Now <span aria-hidden="true">→</span>
              </button>

              <p className="text-center text-sm leading-6 text-orange-50/90">
                Note: Get 9.99%* p.a. on ₹15 lakh+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
