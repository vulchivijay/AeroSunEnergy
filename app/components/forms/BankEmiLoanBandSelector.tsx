import type { useLocale } from '@/lib/LocaleContext'

type BankEmiLabels = ReturnType<typeof useLocale>['t']['bankEmi']

export function BankEmiLoanBandSelector({
  labels,
  isHomeLoanCustomer,
  updateHomeLoanCustomer,
}: {
  labels: BankEmiLabels
  isHomeLoanCustomer: boolean
  updateHomeLoanCustomer: (isCustomer: boolean) => void
}) {
  return (
<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label={labels.customerType}>
                    <button
                      type="button"
                      aria-pressed={isHomeLoanCustomer}
                      onClick={() => updateHomeLoanCustomer(true)}
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
                      onClick={() => updateHomeLoanCustomer(false)}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-sm ${
                        !isHomeLoanCustomer
                          ? 'border-blue-700 bg-blue-700 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                      } tracking-normal`}
                    >
                      {labels.nonHomeLoanCustomer}
                    </button>
                  </div>
  )
}
