import { Calculator } from 'lucide-react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { useLocale } from '@/lib/LocaleContext'
import { formatCurrency } from './BankEmiCalculatorControls'

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']
type EmiCalculation = {
  totalInterest: number
  totalAmountPayable: number
  repaymentMonths: number
}

export function BankEmiRepaymentSnapshot({
  labels,
  loanAmount,
  estimatedProjectCost,
  borrowerContribution,
  calculation,
}: {
  labels: BankEmiLabels
  loanAmount: number
  estimatedProjectCost: number
  borrowerContribution: number
  calculation: EmiCalculation | null
}) {
  return (
    <footer className="relative bg-[#071a49] text-white lg:col-span-2">
      <div className="grid lg:grid-cols-[minmax(12rem,1.1fr)_minmax(0,6fr)]">
        <div className="flex items-center gap-3 border-b border-amber-400/70 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <Calculator size={30} className="shrink-0 text-amber-400" aria-hidden="true" />
          <>
            <p className="text-sm uppercase tracking-wide">{labels.repaymentSnapshot}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-amber-300">{labels.liveEstimate}</p>
          </>
        </div>
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          <div className="border-b border-white/15 px-3 pb-3 pt-5 text-center sm:border-r">
            <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.principal}</dt>
            <dd className="mt-1 text-sm tabular-nums sm:text-base">
              <DigitalNumber value={formatCurrency(loanAmount)} />
            </dd>
          </div>
          <div className="border-b border-white/15 px-3 pb-3 pt-5 text-center sm:border-r">
            <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.projectCost}</dt>
            <dd className="mt-1 text-sm tabular-nums sm:text-base">
              <DigitalNumber value={formatCurrency(estimatedProjectCost)} />
            </dd>
          </div>
          <div className="border-b border-white/15 px-3 pb-3 pt-5 text-center sm:border-r">
            <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.borrowerContribution}</dt>
            <dd className="mt-1 text-sm tabular-nums sm:text-base">
              <DigitalNumber value={formatCurrency(borrowerContribution)} />
            </dd>
          </div>
          <div className="border-b border-white/15 px-3 pb-3 pt-5 text-center sm:border-r">
            <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.totalInterest}</dt>
            <dd className="mt-1 text-sm tabular-nums sm:text-base">
              <DigitalNumber value={calculation ? formatCurrency(calculation.totalInterest) : '—'} />
            </dd>
          </div>
          <div className="border-b border-white/15 px-3 pb-3 pt-5 text-center sm:border-r">
            <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.totalRepayment}</dt>
            <dd className="mt-1 text-sm tabular-nums sm:text-base">
              <DigitalNumber value={calculation ? formatCurrency(calculation.totalAmountPayable) : '—'} />
            </dd>
          </div>
          {calculation && (
            <div className="px-3 pb-3 pt-5 text-center">
              <dt className="text-[0.65rem] uppercase tracking-wide text-blue-100">{labels.repaymentMonths}</dt>
              <dd className="mt-1 text-sm tabular-nums sm:text-base">
                <DigitalNumber value={calculation.repaymentMonths} /> {labels.tenureMonths}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </footer>
  )
}
