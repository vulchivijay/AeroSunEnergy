import type { Dispatch, SetStateAction } from 'react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import type { useLocale } from '@/lib/LocaleContext'

export type InputMode = 'bill' | 'systemSize'

export type Calculation = {
  recommendedKw: number
  monthlyUnits: number
  annualGeneration: number
  dailyGeneration: number
  annualSavings: number
  roofArea: number
  totalPrice: number
  subsidy: number
  effectiveCost: number
  gstEstimate: number
  netMeteringCharge: number
  netMeteringWaiverAvailable: boolean
  netMeteringWaived: boolean
  finalEffectiveCost: number
}

type EstimationCopy = ReturnType<typeof useLocale>['t']['estimation']

export function SolarCalculatorControls({
  e,
  calculatorText,
  calculation,
  inputMode,
  setInputMode,
  monthlyBillInput,
  setMonthlyBillInput,
  systemSizeInput,
  setSystemSizeInput,
  monthlyBillInputId,
  systemSizeInputId,
  normalizeMonthlyBill,
  normalizeSystemSize,
  selectedPropertyIndex,
  setSelectedPropertyIndex,
  maxSystemSizeKw,
}: {
  e: EstimationCopy
  calculatorText: EstimationCopy['calculator']
  calculation: Calculation
  inputMode: InputMode
  setInputMode: Dispatch<SetStateAction<InputMode>>
  monthlyBillInput: string
  setMonthlyBillInput: Dispatch<SetStateAction<string>>
  systemSizeInput: string
  setSystemSizeInput: Dispatch<SetStateAction<string>>
  monthlyBillInputId: string
  systemSizeInputId: string
  normalizeMonthlyBill: () => void
  normalizeSystemSize: () => void
  selectedPropertyIndex: number
  setSelectedPropertyIndex: Dispatch<SetStateAction<number>>
  maxSystemSizeKw: number
}) {
  return (
    <div className="bg-linear-to-r from-[#137c63] to-[#20A44A] p-6 text-white sm:p-8 lg:p-10">
      <h2 className="max-w-sm text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
        {e.savingsTitle} <span className="text-emerald-400">{e.savingsTitleAccent}</span>
      </h2>
      <p className="mt-3 max-w-sm text-emerald-100/80 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
        {e.savingsDescription}
      </p>

      <div className="mt-7 inline-flex rounded-full bg-white/10 p-1" role="group" aria-label={e.leadPropertyType}>
        <button
          type="button"
          aria-pressed={selectedPropertyIndex === 0}
          onClick={() => setSelectedPropertyIndex(0)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                  selectedPropertyIndex === 0
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-emerald-100/75 hover:text-white'
                } tracking-normal`}
        >
          {calculatorText.homeOption}
        </button>
        <button
          type="button"
          aria-pressed={selectedPropertyIndex !== 0}
          onClick={() => setSelectedPropertyIndex(1)}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                  selectedPropertyIndex !== 0
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-emerald-100/75 hover:text-white'
                } tracking-normal`}
        >
          {calculatorText.commercialOption}
        </button>
      </div>

      <div className="mt-8">
        <div className="mb-3 uppercase text-emerald-100/80 text-xs font-semibold tracking-wide leading-5">
          {inputMode === 'bill' ? calculatorText.billAmount : calculatorText.systemSize}
        </div>
        <div className="inline-flex rounded-full bg-white/10 p-1" role="group" aria-label={e.adjustUsage}>
          <button
            type="button"
            aria-pressed={inputMode === 'bill'}
            onClick={() => setInputMode('bill')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'bill' ? 'bg-white text-emerald-950' : 'text-emerald-100/75 hover:text-white'
                  } tracking-normal`}
          >
            {calculatorText.billAmount}
          </button>
          <button
            type="button"
            aria-pressed={inputMode === 'systemSize'}
            onClick={() => setInputMode('systemSize')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'systemSize' ? 'bg-white text-emerald-950' : 'text-emerald-100/75 hover:text-white'
                  } tracking-normal`}
          >
            {calculatorText.systemSize}
          </button>
        </div>

        {inputMode === 'bill' ? (
          <div className="mt-4">
            <label htmlFor={monthlyBillInputId} className="sr-only text-xs sm:text-sm font-semibold tracking-normal leading-5">
              {e.monthlyBillAriaLabel}
            </label>
            <div className="flex items-center rounded-lg border border-slate-700 bg-white/10 px-4 py-3.5 focus-within:ring-2 focus-within:ring-emerald-400">
              <span className="text-xl font-bold text-emerald-100 tracking-normal" aria-hidden="true">₹</span>
              <input
                id={monthlyBillInputId}
                type="number"
                inputMode="numeric"
                min={500}
                max={50000}
                step={100}
                value={monthlyBillInput}
                onChange={(event) => setMonthlyBillInput(event.target.value)}
                onBlur={normalizeMonthlyBill}
                className="min-w-0 flex-1 bg-transparent px-3 text-2xl font-[family-name:var(--font-digital)] font-bold text-white outline-none placeholder:text-emerald-100/50 rounded-lg tracking-normal"
              />
              <span className="whitespace-nowrap text-sm text-emerald-100/70">{calculatorText.monthSuffix}</span>
            </div>
            <div className="mt-2 flex justify-between text-xs text-emerald-100/60">
              <span><DigitalNumber value={e.monthlyBillMinimum} /></span>
              <span><DigitalNumber value={e.monthlyBillMaximum} /></span>
            </div>
          </div>
              ) : (
                <div className="mt-4">
                  <label htmlFor={systemSizeInputId} className="sr-only text-xs sm:text-sm font-semibold tracking-normal leading-5">
                    {calculatorText.systemSize}
                  </label>
                  <div className="flex items-center rounded-lg border border-slate-700 bg-white/10 px-4 py-3.5 focus-within:ring-2 focus-within:ring-emerald-400">
                    <input
                      id={systemSizeInputId}
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={maxSystemSizeKw}
                      step={1}
                      value={systemSizeInput}
                      onChange={(event) => setSystemSizeInput(event.target.value)}
                      onBlur={normalizeSystemSize}
                      className="min-w-0 flex-1 bg-transparent px-1 text-2xl font-[family-name:var(--font-digital)] font-bold text-white outline-none rounded-lg tracking-normal"
                    />
                    <span className="text-sm font-bold text-emerald-100 tracking-normal">{e.capacityUnit}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-emerald-100/60">
                    <span><DigitalNumber value={`1 ${e.capacityUnit}`} /></span>
                    <span><DigitalNumber value="100 MW" /></span>
                  </div>
                </div>
              )}

        <p className="mt-4 text-emerald-100/75 tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {e.estimatedMonthlyUsage}: <DigitalNumber value={calculation.monthlyUnits.toLocaleString('en-IN')} /> {e.unitsSuffix}
        </p>

        <div
          className={`mt-6 rounded-xl border p-4 ${
                  selectedPropertyIndex === 0
                    ? 'border-emerald-300/15 bg-emerald-400/50'
                    : 'border-slate-700 bg-white/5'
                }`}
        >
          <p
            className={` ${
                    selectedPropertyIndex === 0 ? 'text-emerald-80' : ' text-emerald-100/90 '
                  } text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}
          >
            {selectedPropertyIndex === 0
                    ? calculatorText.residentialSubsidyNote
                    : calculatorText.commercialSubsidyNote}
          </p>
        </div>
      </div>
    </div>
  )
}
