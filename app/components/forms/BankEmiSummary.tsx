import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { useLocale } from '@/lib/LocaleContext'
import { Landmark } from 'lucide-react'
import type { EmiCalculation } from './BankEmiCalculatorControls'

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']
export function BankEmiSummary({
  labels,
  calculation,
  formattedEmi,
  emiTextSize,
  formattedTenure,
}: {
  labels: BankEmiLabels
  calculation: EmiCalculation | null
  formattedEmi: string
  emiTextSize: string
  formattedTenure: string
}) {
  return (
    <aside className="relative order-first flex min-w-0 flex-col overflow-hidden bg-[#071a49] p-5 text-white sm:p-7 lg:col-start-1 lg:row-start-1 lg:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-blue-300/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-amber-300/20" aria-hidden="true" />
      <div className="relative z-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="inline-flex w-fit max-w-full min-w-0 items-center gap-2 rounded-full border border-amber-400/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
            <Landmark size={14} strokeWidth={2.2} className="text-amber-300" aria-hidden="true" />
            {labels.badge}
          </div>
        </div>
        <h2 className="mt-5 max-w-xl text-left text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {labels.title}
          <span className="text-amber-400"> {labels.titleAccent}</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
          {labels.description}
        </p>
      </div>
      <div className="relative mx-auto mt-8 w-full max-w-[19rem]">
        <div className="relative aspect-square">
          <div className="absolute inset-1 rounded-full border border-amber-300/35" aria-hidden="true" />
          <div className="absolute inset-[5%] rounded-full border-[0.55rem] border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)]" aria-hidden="true" />
          <div className="absolute inset-[12%] rounded-full border border-blue-200/20" aria-hidden="true" />
          <div className="absolute inset-[16%] z-10 flex min-w-0 flex-col items-center justify-center px-2 text-center">
            <p className="max-w-full text-[0.65rem] uppercase tracking-widest text-blue-100 sm:text-xs">
              {labels.monthlyEmi}
            </p>
            {calculation ? (
              <>
                <span className={`mt-2 block max-w-full whitespace-nowrap ${emiTextSize} font-bold leading-none tracking-tight text-amber-400`}>
                  <DigitalNumber value={formattedEmi} />
                </span>
                <span className="mt-2 text-sm text-blue-100 sm:text-base">{labels.month}</span>
              </>
            ) : (
              <span className="mt-2 max-w-full break-words text-sm font-medium leading-5 text-amber-400">
                {labels.enterHomeLoanRate}
              </span>
            )}
          </div>
        </div>
        {calculation && (
          <div className="mt-4 flex min-w-0 flex-wrap justify-center gap-2">
            <span className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 max-w-full rounded-full border border-amber-300/60 bg-blue-950/60 px-3 py-1.5 text-center text-xs leading-5 text-white">
              <DigitalNumber value={formattedTenure} />
            </span>
            <span className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 max-w-full break-words rounded-full border border-amber-300/60 bg-blue-950/60 px-3 py-1.5 text-center text-xs leading-5 text-white">
              {labels.calculatedInterestRate}:{' '}
              <DigitalNumber value={calculation.interestRate.toFixed(2)} />%
            </span>
          </div>
        )}
      </div>
    </aside>
  )
}
