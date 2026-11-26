import type { Dispatch, SetStateAction } from 'react'
import { Calculator, Landmark, Tag } from 'lucide-react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { useLocale } from '@/lib/LocaleContext'
import { SolarPriceItem } from './SolarEstimationCards'
import type { Calculation } from './SolarCalculatorControls'

type EstimationCopy = ReturnType<typeof useLocale>['t']['estimation']
type SolarCalculatorCopy = EstimationCopy['calculator']

export function SolarCalculationResults({
  e,
  calculatorText,
  calculation,
  currentPropertyType,
  formatCurrency,
  formatSystemCapacity,
  assumeNetMeteringWaiver,
  setAssumeNetMeteringWaiver,
  showLeadForm,
  setShowLeadForm,
  leadFormId,
  setWhatsAppFallbackUrl,
}: {
  e: EstimationCopy
  calculatorText: SolarCalculatorCopy
  calculation: Calculation
  currentPropertyType: string
  formatCurrency: (amount: number) => string
  formatSystemCapacity: (capacityKw: number, capacityUnit: string) => string
  assumeNetMeteringWaiver: boolean
  setAssumeNetMeteringWaiver: Dispatch<SetStateAction<boolean>>
  showLeadForm: boolean
  setShowLeadForm: Dispatch<SetStateAction<boolean>>
  leadFormId: string
  setWhatsAppFallbackUrl: Dispatch<SetStateAction<string | null>>
}) {
  return (
<div className="bg-linear-to-br from-[#f7faff] via-[#f2f4ff] to-[#eef9fb] p-5 sm:p-7 lg:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              
              <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">
                    {e.roofRequired}
                </p>
                <p className="mt-2 text-lg sm:text-xl text-slate-950 font-semibold tracking-normal leading-snug tabular-nums">
                    <DigitalNumber value={calculation.roofArea.toLocaleString('en-IN')} /> <span className="text-sm font-semibold tracking-normal">{e.squareFootUnit}</span>
                </p>
              </article>
              
              <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">
                    {calculatorText.idealSystemSize}
                </p>
                <p className="mt-3 text-sky-700 text-lg font-semibold tracking-normal leading-snug tabular-nums">
                    <DigitalNumber value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)} />
                </p>
                <p className="mt-2 text-slate-500 tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    <DigitalNumber value={calculation.dailyGeneration} /> {calculatorText.averageDailyGeneration}
                </p>
              </article>

              <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">
                    {e.annualGeneration}
                </p>
                <p className="mt-2 text-lg sm:text-xl text-slate-950 font-semibold tracking-normal leading-snug tabular-nums">
                    <DigitalNumber value={calculation.annualGeneration.toLocaleString('en-IN')} /> <span className="text-sm font-semibold tracking-normal">{e.generationUnit}</span>
                </p>
              </article>

              <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">
                    {e.annualSavings}
                </p>
                <p className="mt-3 text-emerald-600 text-lg sm:text-xl font-semibold tracking-normal leading-snug tabular-nums">
                    ~<DigitalNumber value={formatCurrency(calculation.annualSavings)} />
                </p>
              </article>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-xl border border-slate-700 bg-linear-to-br from-[#0b1536] via-[#13244b] to-[#0d3a3b] p-4 text-white shadow-md sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-28 left-1/3 h-48 w-48 rounded-full bg-sky-300/10 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-linear-to-b from-emerald-300 to-sky-300" aria-hidden="true" />
                    <h2 className="uppercase text-white text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                      {calculatorText.pricingBreakdown}
                    </h2>
                  </div>
                  <p className="rounded-full border border-slate-700 bg-white/[0.06] px-3 py-1.5 text-slate-200 tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    <DigitalNumber value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)} /> · {currentPropertyType}
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <SolarPriceItem
                    icon={Tag}
                    label={calculatorText.priceBeforeSubsidy}
                    value={formatCurrency(calculation.totalPrice)}
                    valueClassName="text-white"
                  />
                  <SolarPriceItem
                    icon={Landmark}
                    label={calculatorText.governmentSubsidy}
                    value={formatCurrency(calculation.subsidy)}
                    valueClassName="text-emerald-300"
                  />
                  <SolarPriceItem
                    icon={Calculator}
                    label={calculatorText.effectiveCost}
                    value={formatCurrency(calculation.effectiveCost)}
                    valueClassName="text-slate-950"
                    featured
                  />
                </div>

                <p className="mt-4 border-t border-slate-700 pt-3 text-right text-slate-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {calculatorText.taxesExtra}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-linear-to-br from-emerald-50 via-green-50 to-emerald-100 p-5 shadow-sm sm:p-6 hidden">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 uppercase text-indigo-900 text-xs font-semibold tracking-wide leading-5">
                {calculation.netMeteringWaived
                  ? calculatorText.finalEffectiveCost
                  : calculatorText.finalEffectiveCostBeforeMetering}
              </span>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-600">{calculatorText.gstEstimate}</span>
                  <span className="font-semibold text-slate-900 tracking-normal">{formatCurrency(calculation.gstEstimate)}</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-600">{calculatorText.netMeteringFee}</span>
                  <span className="text-right font-semibold text-slate-900 tracking-normal">
                    {formatCurrency(calculation.netMeteringCharge)}
                  </span>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white/75">
                <table className="w-full text-left text-xs text-slate-700">
                  <caption className="border-b border-slate-200 px-3 py-2 text-left font-bold text-slate-800 tracking-normal">
                    Metering charge schedule
                  </caption>
                  <tbody>
                    {[
                      ['Up to 5 kW', 'Nil'],
                      ['Above 5 kW to 100 kW', '₹ 1,000'],
                      ['Above 100 kW to 1,000 kW', '₹ 10,000'],
                      ['Above 1,000 kW', '₹ 25,000 per MW'],
                    ].map(([capacity, charge]) => (
                      <tr key={capacity} className="border-b border-slate-200 last:border-b-0">
                        <th scope="row" className="px-3 py-2 font-medium tracking-normal">{capacity}</th>
                        <td className="px-3 py-2 text-right font-bold text-slate-900 tracking-normal">{charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {calculation.netMeteringWaiverAvailable && (
                <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                  <input
                    type="checkbox"
                    checked={assumeNetMeteringWaiver}
                    onChange={(event) => setAssumeNetMeteringWaiver(event.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-emerald-700"
                  />
                  <span>{calculatorText.netMeteringEligibilityCheck}</span>
                </label>
              )}

              <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-slate-200 pt-4">
                <span className="text-sm font-bold text-slate-700 tracking-normal">
                  {calculation.netMeteringWaived
                    ? calculatorText.finalEffectiveCost
                    : calculatorText.finalEffectiveCostBeforeMetering}
                </span>
                <span className="text-2xl font-bold tracking-tight text-emerald-700 tabular-nums">
                  <DigitalNumber value={formatCurrency(calculation.finalEffectiveCost)} />
                </span>
              </div>

              <p className="mt-3 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {calculatorText.epcGstAssumption}
              </p>
              {calculation.netMeteringWaived ? (
                <p className="mt-2 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {calculatorText.netMeteringWaiverNote}{' '}
                  <a
                    href="https://aperc.gov.in/admin/upload/ProceedingsonwaiverofApplicationfeeandMeterCosttoSRTSupto10kW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-700 underline underline-offset-2 tracking-normal"
                  >
                    {calculatorText.apercOrderLabel}
                  </a>
                </p>
              ) : (
                <p className="mt-2 text-amber-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {calculation.netMeteringWaiverAvailable
                    ? calculatorText.netMeteringPotentialWaiverNote
                    : calculatorText.netMeteringVariesNote}{' '}
                  {calculation.netMeteringWaiverAvailable && (
                    <a
                      href="https://aperc.gov.in/admin/upload/ProceedingsonwaiverofApplicationfeeandMeterCosttoSRTSupto10kW.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sky-700 underline underline-offset-2 tracking-normal"
                    >
                      {calculatorText.apercOrderLabel}
                    </a>
                  )}
                </p>
              )}
            </div>

            <button
              type="button"
              aria-expanded={showLeadForm}
              aria-controls={leadFormId}
              onClick={() => {
                setShowLeadForm(true)
                setWhatsAppFallbackUrl(null)
              }}
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-5 py-4 text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 tracking-normal"
            >
              {calculatorText.quoteCta}
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-4 text-center text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {calculatorText.assumptions}
            </p>
          </div>
  )
}
