import type { Dispatch, FormEventHandler, SetStateAction } from 'react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { SolarLeadSummary } from './SolarEstimationCards'
import type { useLocale } from '@/lib/LocaleContext'
import type { Calculation } from './SolarCalculatorControls'

type EstimationCopy = ReturnType<typeof useLocale>['t']['estimation']

export function SolarAssessmentLeadForm({
  e,
  calculatorText,
  calculation,
  currentPropertyType,
  monthlyBill,
  formatCurrency,
  formatSystemCapacity,
  leadFormId,
  leadNameInputId,
  leadPhoneInputId,
  leadPinInputId,
  leadPropertyTypeInputId,
  leadPropertyIndex,
  setLeadPropertyIndex,
  leadNameValue,
  setLeadNameValue,
  leadPhoneValue,
  setLeadPhoneValue,
  leadFormPending,
  whatsAppFallbackUrl,
  savingsEstimateYears,
  savingLabel,
  onSubmit,
  onCancel,
}: {
  e: EstimationCopy
  calculatorText: EstimationCopy['calculator']
  calculation: Calculation
  currentPropertyType: string
  monthlyBill: number
  formatCurrency: (amount: number) => string
  formatSystemCapacity: (capacityKw: number, capacityUnit: string) => string
  leadFormId: string
  leadNameInputId: string
  leadPhoneInputId: string
  leadPinInputId: string
  leadPropertyTypeInputId: string
  leadPropertyIndex: number | ''
  setLeadPropertyIndex: Dispatch<SetStateAction<number | ''>>
  leadNameValue: string
  setLeadNameValue: Dispatch<SetStateAction<string>>
  leadPhoneValue: string
  setLeadPhoneValue: Dispatch<SetStateAction<string>>
  leadFormPending: boolean
  whatsAppFallbackUrl: string | null
  savingsEstimateYears: number
  savingLabel: string
  onSubmit: FormEventHandler<HTMLFormElement>
  onCancel: () => void
}) {
  return (
<section
          id={leadFormId}
          className="mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]"
          aria-labelledby={`${leadFormId}-title`}
        >
          <div className="bg-linear-to-r from-[#137c63] to-[#20A44A] p-6 text-white sm:p-8">
            <p className="uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
              {e.freeAssessmentLabel}
            </p>
            <h2 id={`${leadFormId}-title`} className="mt-3 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {e.freeAssessmentCta}
            </h2>
            <div className="mt-6 space-y-3">
              <SolarLeadSummary label={e.leadPropertyType} value={currentPropertyType} />
              <SolarLeadSummary label={e.monthlyBill} value={formatCurrency(monthlyBill)} />
              <SolarLeadSummary
                label={e.recommendedCapacity}
                value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)}
              />
              <SolarLeadSummary label={e.annualGeneration} value={`${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`} />
              <SolarLeadSummary label={e.annualSavings} value={`${formatCurrency(calculation.annualSavings)}/${e.yearSuffix}`} />
              <SolarLeadSummary label={e.twentyFiveYearSavings} value={formatCurrency(calculation.annualSavings * savingsEstimateYears)} />
              <SolarLeadSummary label={e.roofRequired} value={`${calculation.roofArea} ${e.squareFootUnit}`} />
              <SolarLeadSummary label={calculatorText.effectiveCost} value={formatCurrency(calculation.effectiveCost)} />
              <SolarLeadSummary label={calculatorText.gstEstimate} value={formatCurrency(calculation.gstEstimate)} />
              <SolarLeadSummary
                label={calculatorText.netMeteringFee}
                value={formatCurrency(calculation.netMeteringCharge)}
              />
              <SolarLeadSummary
                label={calculation.netMeteringWaived
                  ? calculatorText.finalEffectiveCost
                  : calculatorText.finalEffectiveCostBeforeMetering}
                value={formatCurrency(calculation.finalEffectiveCost)}
              />
            </div>
            <p className="mt-6 text-emerald-100/80 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{e.whatsAppDisclosure}</p>
          </div>

          <form onSubmit={onSubmit} className="p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs sm:text-sm font-semibold tracking-normal leading-5">
                <span className="mb-1.5 block text-sm font-bold text-slate-700 tracking-normal">{e.leadName}</span>
                <input
                  id={leadNameInputId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  value={leadNameValue}
                  onChange={(event) => setLeadNameValue(event.target.value)}
                  placeholder={e.leadNamePlaceholder}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block text-xs sm:text-sm font-semibold tracking-normal leading-5">
                <span className="mb-1.5 block text-sm font-bold text-slate-700 tracking-normal">{e.leadMobile}</span>
                <input
                  id={leadPhoneInputId}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="(?:\+?91)?[6-9][0-9]{9}"
                  maxLength={13}
                  required
                  value={leadPhoneValue}
                  onChange={(event) => setLeadPhoneValue(event.target.value)}
                  placeholder={e.leadMobilePlaceholder}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block text-xs sm:text-sm font-semibold tracking-normal leading-5">
                <span className="mb-1.5 block text-sm font-bold text-slate-700 tracking-normal">{e.leadPinCode}</span>
                <input
                  id={leadPinInputId}
                  name="pinCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  pattern="[1-9][0-9]{5}"
                  maxLength={6}
                  required
                  placeholder={e.leadPinCodePlaceholder}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block text-xs sm:text-sm font-semibold tracking-normal leading-5">
                <span className="mb-1.5 block text-sm font-bold text-slate-700 tracking-normal">{e.leadPropertyType}</span>
                <select
                  id={leadPropertyTypeInputId}
                  name="propertyType"
                  required
                  value={leadPropertyIndex}
                  onChange={(event) => setLeadPropertyIndex(event.target.value === '' ? '' : Number(event.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="" disabled>{e.propertyTypePlaceholder}</option>
                  {e.propertyTypeOptions.map((propertyType, index) => (
                    <option key={propertyType} value={index}>{propertyType}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={leadFormPending}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-70 tracking-normal"
              >
                {leadFormPending ? savingLabel : e.whatsAppMyReport}
                <span className="ml-2" aria-hidden="true">↗</span>
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 tracking-normal"
              >
                {e.cancelAssessment}
              </button>
            </div>
            {whatsAppFallbackUrl && (
              <p className="mt-4 text-emerald-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7" aria-live="polite">
                <a href={whatsAppFallbackUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  {e.openWhatsAppFallback}
                </a>
              </p>
            )}
            <div className="mt-4">
              <FormDataNotice />
            </div>
          </form>
        </section>
  )
}
