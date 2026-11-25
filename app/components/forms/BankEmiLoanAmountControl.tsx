import type { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Coins } from 'lucide-react'
import type { useLocale } from '@/lib/LocaleContext'

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']
type ClampValue = (value: number, min: number, max: number) => number
type RangePoints = (min: number, max: number, step: number) => number[]

export function BankEmiLoanAmountControl({
  labels,
  digitalFontStyle,
  loanAmount,
  setLoanAmount,
  minLoanAmount,
  maxLoanAmount,
  formatCurrency,
  getRangePoints,
  clampValue,
  rangeInputClassName,
}: {
  labels: BankEmiLabels
  digitalFontStyle: CSSProperties
  loanAmount: number
  setLoanAmount: Dispatch<SetStateAction<number>>
  minLoanAmount: number
  maxLoanAmount: number
  formatCurrency: (value: number) => string
  getRangePoints: RangePoints
  clampValue: ClampValue
  rangeInputClassName: string
}) {
  const clamp = clampValue

  return (
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
  )
}
