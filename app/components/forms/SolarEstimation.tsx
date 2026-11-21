'use client'

import { useId, useState, type FormEvent } from 'react'
import { Calculator, Landmark, Tag, type LucideIcon } from 'lucide-react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { ReadMoreToggle } from '@/app/components/ui/ReadMoreToggle'
import { useLocale } from '@/lib/LocaleContext'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useToast } from '@/app/components/ui/ToastContext'

type InputMode = 'bill' | 'systemSize'

type Calculation = {
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

const AVERAGE_TARIFF_PER_UNIT = 8.5
const MONTHLY_GENERATION_PER_KW = 120
const ROOF_AREA_PER_KW = 60
const ESTIMATED_PRICE_PER_KW = 70000
const EPC_GST_ESTIMATE_RATE = 0.7 * 0.05 + 0.3 * 0.18
const AP_NET_METERING_WAIVER_MAX_KW = 10
const SAVINGS_ESTIMATE_YEARS = 25
const KW_PER_MW = 1000
const MAX_SYSTEM_SIZE_KW = 100 * KW_PER_MW

const getNetMeteringCharge = (capacityKw: number) => {
  if (capacityKw <= 5) return 0
  if (capacityKw <= 100) return 1000
  if (capacityKw <= 1000) return 10000
  return Math.round((capacityKw / KW_PER_MW) * 25000)
}

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  currencyDisplay: 'narrowSymbol',
})

const formatCurrency = (amount: number) =>
  currencyFormatter.format(amount).replace('₹', '₹ ')

const formatSystemCapacity = (capacityKw: number, capacityUnit: string) =>
  capacityKw >= KW_PER_MW
    ? `${(capacityKw / KW_PER_MW).toLocaleString('en-IN', { maximumFractionDigits: 3 })} MW`
    : `${capacityKw.toLocaleString('en-IN')} ${capacityUnit}`

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

function LeadSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2 text-sm last:border-b-0 last:pb-0">
      <span className="text-emerald-100/75">{label}</span>
      <span className="text-right font-bold text-white">
        <DigitalNumber value={value} />
      </span>
    </div>
  )
}

function PriceItem({
  icon: Icon,
  label,
  value,
  valueClassName,
}: {
  icon: LucideIcon
  label: string
  value: string
  valueClassName: string
}) {
  return (
    <div className="min-w-0 text-center">
      <Icon className="mx-auto h-5 w-5 text-slate-400" aria-hidden="true" />
      <p className="mt-2 text-xs leading-5 text-slate-500">{label}</p>
      <p className={`mt-1 whitespace-nowrap text-lg font-extrabold tracking-tight sm:text-xl ${valueClassName}`}>
        <DigitalNumber value={value} />
      </p>
    </div>
  )
}

export function SolarEstimation() {
  const { t } = useLocale()
  const toast = useToast()
  const e = t.estimation
  const calculatorText = e.calculator
  const solarGstGuide = e.solarGstGuide
  const defaultValues = t.componentData.solarEstimation.defaultValues
  const initialSystemSize = Math.max(
    1,
    Math.ceil(defaultValues.monthlyBill / AVERAGE_TARIFF_PER_UNIT / MONTHLY_GENERATION_PER_KW),
  )
  const monthlyBillInputId = useId()
  const systemSizeInputId = useId()
  const leadFormId = useId()
  const leadNameInputId = useId()
  const leadPhoneInputId = useId()
  const leadPinInputId = useId()
  const leadPropertyTypeInputId = useId()
  const [inputMode, setInputMode] = useState<InputMode>('bill')
  const [monthlyBillInput, setMonthlyBillInput] = useState(String(defaultValues.monthlyBill))
  const [systemSizeInput, setSystemSizeInput] = useState(String(initialSystemSize))
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(0)
  const [assumeNetMeteringWaiver, setAssumeNetMeteringWaiver] = useState(false)
  const [leadPropertyIndex, setLeadPropertyIndex] = useState<number | ''>('')
  const [leadNameValue, setLeadNameValue] = useState('')
  const [leadPhoneValue, setLeadPhoneValue] = useState('')
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [gstGuideExpanded, setGstGuideExpanded] = useState(false)
  const [whatsAppFallbackUrl, setWhatsAppFallbackUrl] = useState<string | null>(null)
  const [leadFormPending, setLeadFormPending] = useState(false)

  const billAmount = clamp(Number(monthlyBillInput) || 500, 500, 50000)
  const monthlyUnitsFromBill = Math.round(billAmount / AVERAGE_TARIFF_PER_UNIT)
  const selectedSystemSize = clamp(Math.round(Number(systemSizeInput) || 1), 1, MAX_SYSTEM_SIZE_KW)
  const recommendedKw =
    inputMode === 'bill'
      ? Math.max(1, Math.ceil(monthlyUnitsFromBill / MONTHLY_GENERATION_PER_KW))
      : selectedSystemSize
  const monthlyUnits =
    inputMode === 'bill'
      ? monthlyUnitsFromBill
      : recommendedKw * MONTHLY_GENERATION_PER_KW
  const monthlyBill =
    inputMode === 'bill'
      ? billAmount
      : Math.round(monthlyUnits * AVERAGE_TARIFF_PER_UNIT)
  const annualGeneration = recommendedKw * MONTHLY_GENERATION_PER_KW * 12
  const annualSavings = Math.min(
    monthlyBill * 12,
    annualGeneration * AVERAGE_TARIFF_PER_UNIT,
  )
  const subsidy =
    selectedPropertyIndex === 0
      ? recommendedKw >= 3
        ? 78000
        : recommendedKw * 30000
      : 0
  const totalPrice = recommendedKw * ESTIMATED_PRICE_PER_KW
  const gstEstimate = Math.round(totalPrice * EPC_GST_ESTIMATE_RATE)
  const netMeteringWaiverAvailable =
    selectedPropertyIndex === 0 && recommendedKw <= AP_NET_METERING_WAIVER_MAX_KW
  const netMeteringWaived = netMeteringWaiverAvailable && assumeNetMeteringWaiver
  const netMeteringCharge = netMeteringWaived
    ? 0
    : getNetMeteringCharge(recommendedKw)
  const calculation: Calculation = {
    recommendedKw,
    monthlyUnits,
    annualGeneration,
    dailyGeneration: Math.round(annualGeneration / 365),
    annualSavings,
    roofArea: recommendedKw * ROOF_AREA_PER_KW,
    totalPrice,
    subsidy,
    effectiveCost: Math.max(0, totalPrice - subsidy),
    gstEstimate,
    netMeteringCharge,
    netMeteringWaiverAvailable,
    netMeteringWaived,
    finalEffectiveCost: Math.max(
      0,
      totalPrice + gstEstimate + (netMeteringCharge ?? 0) - subsidy,
    ),
  }

  async function handleLeadFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const pinCode = String(formData.get('pinCode') ?? '').trim()
    const submittedPropertyIndex = Number(formData.get('propertyType'))
    const propertyType =
      e.propertyTypeOptions[submittedPropertyIndex] ??
      e.propertyTypeOptions[selectedPropertyIndex] ??
      calculatorText.homeOption
    const whatsAppNumber = t.footer.phoneHref.replace(/\D/g, '')
    const twentyFiveYearSavings = calculation.annualSavings * SAVINGS_ESTIMATE_YEARS

    if (!whatsAppNumber) {
      toast.error(e.whatsAppUnavailable)
      return
    }

    setLeadFormPending(true)

    const message = [
      e.whatsAppGreeting,
      `${e.leadName}: ${name}`,
      `${e.leadMobile}: ${phone}`,
      `${e.leadPinCode}: ${pinCode}`,
      `${e.leadPropertyType}: ${propertyType}`,
      `${e.monthlyBill}: ${formatCurrency(monthlyBill)}`,
      `${e.recommendedCapacity}: ${formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)}`,
      `${e.annualGeneration}: ${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`,
      `${e.annualSavings}: ${formatCurrency(calculation.annualSavings)}`,
      `${e.twentyFiveYearSavings}: ${formatCurrency(twentyFiveYearSavings)}`,
      `${e.roofRequired}: ${calculation.roofArea} ${e.squareFootUnit}`,
      `${calculatorText.effectiveCost}: ${formatCurrency(calculation.effectiveCost)}`,
      `${calculatorText.gstEstimate}: ${formatCurrency(calculation.gstEstimate)}`,
      `${calculatorText.netMeteringFee}: ${formatCurrency(calculation.netMeteringCharge)}`,
      `${calculation.netMeteringWaived ? calculatorText.finalEffectiveCost : calculatorText.finalEffectiveCostBeforeMetering}: ${formatCurrency(calculation.finalEffectiveCost)}`,
    ].join('\n')
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`
    const whatsAppWindow = window.open('about:blank', '_blank')

    try {
      const referenceCode = await submitWebsiteForm('solar_assessment', {
        name,
        phone,
        pinCode,
        propertyType,
        monthlyBill,
        recommendedKw: calculation.recommendedKw,
        annualGeneration: calculation.annualGeneration,
        annualSavings: calculation.annualSavings,
        twentyFiveYearSavings,
        roofArea: calculation.roofArea,
      })
      toast.success(`${t.formSubmission.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`)
      if (whatsAppWindow) {
        whatsAppWindow.opener = null
        whatsAppWindow.location.href = url
        setWhatsAppFallbackUrl(null)
      } else {
        setWhatsAppFallbackUrl(url)
      }
    } catch {
      whatsAppWindow?.close()
      toast.error(t.formSubmission.error)
      setWhatsAppFallbackUrl(null)
    } finally {
      setLeadFormPending(false)
    }
  }

  function normalizeMonthlyBill() {
    setMonthlyBillInput(String(clamp(Math.round(Number(monthlyBillInput) || 500), 500, 50000)))
  }

  function normalizeSystemSize() {
    setSystemSizeInput(
      String(clamp(Math.round(Number(systemSizeInput) || 1), 1, MAX_SYSTEM_SIZE_KW)),
    )
  }

  const currentPropertyType =
    e.propertyTypeOptions[selectedPropertyIndex] ?? calculatorText.homeOption

  return (
    <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 lg:py-16 sm:py-14">
      <div className="mx-auto mb-8 max-w-7xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-900 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
          {e.solarCalculatorEyebrow}
        </p>
        <h1 className="max-w-6xl text-left text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
          {e.solarCalculatorTitle}{' '}
          <span className="text-indigo-700">{e.solarCalculatorTitleAccent}</span>
        </h1>
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-sm">
        <div className="grid lg:grid-cols-[minmax(300px,0.75fr)_1.45fr]">
          <div className="bg-linear-to-r from-[#137c63] to-[#20A44A] p-6 text-white sm:p-8 lg:p-10">
            <h2 className="max-w-sm text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {e.savingsTitle} <span className="text-emerald-400">{e.savingsTitleAccent}</span>
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-100/80">
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
                }`}
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
                }`}
              >
                {calculatorText.commercialOption}
              </button>
            </div>

            <div className="mt-8">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-emerald-100/80">
                {inputMode === 'bill' ? calculatorText.billAmount : calculatorText.systemSize}
              </div>
              <div className="inline-flex rounded-full bg-white/10 p-1" role="group" aria-label={e.adjustUsage}>
                <button
                  type="button"
                  aria-pressed={inputMode === 'bill'}
                  onClick={() => setInputMode('bill')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'bill' ? 'bg-white text-emerald-950' : 'text-emerald-100/75 hover:text-white'
                  }`}
                >
                  {calculatorText.billAmount}
                </button>
                <button
                  type="button"
                  aria-pressed={inputMode === 'systemSize'}
                  onClick={() => setInputMode('systemSize')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'systemSize' ? 'bg-white text-emerald-950' : 'text-emerald-100/75 hover:text-white'
                  }`}
                >
                  {calculatorText.systemSize}
                </button>
              </div>

              {inputMode === 'bill' ? (
                <div className="mt-4">
                  <label htmlFor={monthlyBillInputId} className="sr-only">
                    {e.monthlyBillAriaLabel}
                  </label>
                  <div className="flex items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 focus-within:ring-2 focus-within:ring-emerald-400">
                    <span className="text-xl font-bold text-emerald-100" aria-hidden="true">₹</span>
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
                      className="min-w-0 flex-1 bg-transparent px-3 text-2xl font-[family-name:var(--font-digital)] font-extrabold tabular-nums text-white outline-none placeholder:text-emerald-100/50 rounded-xl"
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
                  <label htmlFor={systemSizeInputId} className="sr-only">
                    {calculatorText.systemSize}
                  </label>
                  <div className="flex items-center rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 focus-within:ring-2 focus-within:ring-emerald-400">
                    <input
                      id={systemSizeInputId}
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={MAX_SYSTEM_SIZE_KW}
                      step={1}
                      value={systemSizeInput}
                      onChange={(event) => setSystemSizeInput(event.target.value)}
                      onBlur={normalizeSystemSize}
                      className="min-w-0 flex-1 bg-transparent px-1 text-2xl font-[family-name:var(--font-digital)] font-extrabold tabular-nums text-white outline-none rounded-xl"
                    />
                    <span className="text-sm font-bold text-emerald-100">{e.capacityUnit}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-emerald-100/60">
                    <span><DigitalNumber value={`1 ${e.capacityUnit}`} /></span>
                    <span><DigitalNumber value="100 MW" /></span>
                  </div>
                </div>
              )}

              <p className="mt-4 text-sm text-emerald-100/75">
                {e.estimatedMonthlyUsage}: <DigitalNumber value={calculation.monthlyUnits.toLocaleString('en-IN')} /> {e.unitsSuffix}
              </p>

              <div
                className={`mt-6 rounded-2xl border p-4 ${
                  selectedPropertyIndex === 0
                    ? 'border-emerald-300/15 bg-emerald-400/50'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <p
                  className={`text-sm ${
                    selectedPropertyIndex === 0 ? 'text-emerald-80' : 'text-emerald-100/90'
                  }`}
                >
                  {selectedPropertyIndex === 0
                    ? calculatorText.residentialSubsidyNote
                    : calculatorText.commercialSubsidyNote}
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {e.roofRequired}
                </p>
                <p className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                    <DigitalNumber value={calculation.roofArea.toLocaleString('en-IN')} /> <span className="text-sm font-semibold">{e.squareFootUnit}</span>
                </p>
              </article><article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {calculatorText.idealSystemSize}
                </p>
                <p className="mt-3 text-2xl font-black tracking-tight text-sky-700 sm:text-3xl">
                    <DigitalNumber value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)} />
                </p>
                <p className="mt-2 text-sm text-slate-500">
                    <DigitalNumber value={calculation.dailyGeneration} /> {calculatorText.averageDailyGeneration}
                </p>
              </article>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#f7faff] via-[#f2f4ff] to-[#eef9fb] p-5 sm:p-7 lg:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              
              <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {e.annualGeneration}
                </p>
                <p className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                    <DigitalNumber value={calculation.annualGeneration.toLocaleString('en-IN')} /> <span className="text-sm font-semibold">{e.generationUnit}</span>
                </p>
              </article>
              <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {e.annualSavings}
                </p>
                <p className="mt-3 text-2xl font-black tracking-tight text-emerald-600 sm:text-3xl">
                    ~<DigitalNumber value={formatCurrency(calculation.annualSavings)} />
                </p>
              </article>
            </div>
            <div className="mt-5 rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {calculatorText.pricingBreakdown}
                </h2>
                <p className="text-xs font-semibold text-slate-600">
                  <DigitalNumber value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)} /> · {currentPropertyType}
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <PriceItem
                  icon={Tag}
                  label={calculatorText.priceBeforeSubsidy}
                  value={formatCurrency(calculation.totalPrice)}
                  valueClassName="text-slate-950"
                />
                <PriceItem
                  icon={Landmark}
                  label={calculatorText.governmentSubsidy}
                  value={formatCurrency(calculation.subsidy)}
                  valueClassName="text-emerald-600"
                />
                <PriceItem
                  icon={Calculator}
                  label={calculatorText.effectiveCost}
                  value={formatCurrency(calculation.effectiveCost)}
                  valueClassName="text-emerald-700"
                />
              </div>
              <p className="mt-4 text-right text-xs text-slate-500">{calculatorText.taxesExtra}</p>
            </div>

            <div className="mt-4 rounded-2xl border border-emerald-200/80 bg-linear-to-br from-emerald-50 via-green-50 to-emerald-100 p-5 shadow-sm sm:p-6">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-indigo-900">
                {calculation.netMeteringWaived
                  ? calculatorText.finalEffectiveCost
                  : calculatorText.finalEffectiveCostBeforeMetering}
              </span>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-600">{calculatorText.gstEstimate}</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(calculation.gstEstimate)}</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-600">{calculatorText.netMeteringFee}</span>
                  <span className="text-right font-semibold text-slate-900">
                    {formatCurrency(calculation.netMeteringCharge)}
                  </span>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white/75">
                <table className="w-full text-left text-xs text-slate-700">
                  <caption className="border-b border-slate-200 px-3 py-2 text-left font-bold text-slate-800">
                    Metering charge schedule
                  </caption>
                  <tbody>
                    {[
                      ['Up to 5 kW', 'Nil'],
                      ['Above 5 kW to 100 kW', '₹ 1,000'],
                      ['Above 100 kW to 1,000 kW', '₹ 10,000'],
                      ['Above 1,000 kW', '₹ 25,000 per MW'],
                    ].map(([capacity, charge]) => (
                      <tr key={capacity} className="border-b border-slate-100 last:border-b-0">
                        <th scope="row" className="px-3 py-2 font-medium">{capacity}</th>
                        <td className="px-3 py-2 text-right font-bold text-slate-900">{charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {calculation.netMeteringWaiverAvailable && (
                <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-5 text-slate-700">
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
                <span className="text-sm font-bold text-slate-700">
                  {calculation.netMeteringWaived
                    ? calculatorText.finalEffectiveCost
                    : calculatorText.finalEffectiveCostBeforeMetering}
                </span>
                <span className="text-2xl font-black tracking-tight text-emerald-700">
                  <DigitalNumber value={formatCurrency(calculation.finalEffectiveCost)} />
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                {calculatorText.epcGstAssumption}
              </p>
              {calculation.netMeteringWaived ? (
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {calculatorText.netMeteringWaiverNote}{' '}
                  <a
                    href="https://aperc.gov.in/admin/upload/ProceedingsonwaiverofApplicationfeeandMeterCosttoSRTSupto10kW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-700 underline underline-offset-2"
                  >
                    {calculatorText.apercOrderLabel}
                  </a>
                </p>
              ) : (
                <p className="mt-2 text-xs leading-5 text-amber-800">
                  {calculation.netMeteringWaiverAvailable
                    ? calculatorText.netMeteringPotentialWaiverNote
                    : calculatorText.netMeteringVariesNote}{' '}
                  {calculation.netMeteringWaiverAvailable && (
                    <a
                      href="https://aperc.gov.in/admin/upload/ProceedingsonwaiverofApplicationfeeandMeterCosttoSRTSupto10kW.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sky-700 underline underline-offset-2"
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
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-5 py-4 text-base font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              {calculatorText.quoteCta}
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              {calculatorText.assumptions}
            </p>
          </div>
        </div>
      </div>

      {showLeadForm && (
        <section
          id={leadFormId}
          className="mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]"
          aria-labelledby={`${leadFormId}-title`}
        >
          <div className="bg-linear-to-r from-[#137c63] to-[#20A44A] p-6 text-white sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-100">
              {e.freeAssessmentLabel}
            </p>
            <h2 id={`${leadFormId}-title`} className="mt-3 text-3xl font-black tracking-tight">
              {e.freeAssessmentCta}
            </h2>
            <div className="mt-6 space-y-3">
              <LeadSummary label={e.leadPropertyType} value={currentPropertyType} />
              <LeadSummary label={e.monthlyBill} value={formatCurrency(monthlyBill)} />
              <LeadSummary
                label={e.recommendedCapacity}
                value={formatSystemCapacity(calculation.recommendedKw, e.capacityUnit)}
              />
              <LeadSummary label={e.annualGeneration} value={`${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`} />
              <LeadSummary label={e.annualSavings} value={`${formatCurrency(calculation.annualSavings)}/${e.yearSuffix}`} />
              <LeadSummary label={e.twentyFiveYearSavings} value={formatCurrency(calculation.annualSavings * SAVINGS_ESTIMATE_YEARS)} />
              <LeadSummary label={e.roofRequired} value={`${calculation.roofArea} ${e.squareFootUnit}`} />
              <LeadSummary label={calculatorText.effectiveCost} value={formatCurrency(calculation.effectiveCost)} />
              <LeadSummary label={calculatorText.gstEstimate} value={formatCurrency(calculation.gstEstimate)} />
              <LeadSummary
                label={calculatorText.netMeteringFee}
                value={formatCurrency(calculation.netMeteringCharge)}
              />
              <LeadSummary
                label={calculation.netMeteringWaived
                  ? calculatorText.finalEffectiveCost
                  : calculatorText.finalEffectiveCostBeforeMetering}
                value={formatCurrency(calculation.finalEffectiveCost)}
              />
            </div>
            <p className="mt-6 text-sm leading-5 text-emerald-100/80">{e.whatsAppDisclosure}</p>
          </div>

          <form onSubmit={handleLeadFormSubmit} className="p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-slate-700">{e.leadName}</span>
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-slate-700">{e.leadMobile}</span>
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-slate-700">{e.leadPinCode}</span>
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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold text-slate-700">{e.leadPropertyType}</span>
                <select
                  id={leadPropertyTypeInputId}
                  name="propertyType"
                  required
                  value={leadPropertyIndex}
                  onChange={(event) => setLeadPropertyIndex(event.target.value === '' ? '' : Number(event.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
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
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-70"
              >
                {leadFormPending ? t.formSubmission.saving : e.whatsAppMyReport}
                <span className="ml-2" aria-hidden="true">↗</span>
              </button>
              <button
                type="button"
                onClick={() => setShowLeadForm(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                {e.cancelAssessment}
              </button>
            </div>
            {whatsAppFallbackUrl && (
              <p className="mt-4 text-sm font-semibold text-emerald-800" aria-live="polite">
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
      )}

      <section
        className="mx-auto mt-10 max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        aria-labelledby={`${leadFormId}-gst-title`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              {solarGstGuide.eyebrow}
            </p>
            <h2
              id={`${leadFormId}-gst-title`}
              className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
            >
              {solarGstGuide.title}
            </h2>
          </div>
          <ReadMoreToggle
            expanded={gstGuideExpanded}
            onToggle={() => setGstGuideExpanded((expanded) => !expanded)}
            controlsId={`${leadFormId}-gst-content`}
            labelClassName="text-emerald-700 underline decoration-emerald-300 hover:text-emerald-950"
          />
        </div>

        <div id={`${leadFormId}-gst-content`} hidden={!gstGuideExpanded}>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          {solarGstGuide.intro}
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">{solarGstGuide.componentsTitle}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              {solarGstGuide.components.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">{solarGstGuide.billingTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{solarGstGuide.billing}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">{solarGstGuide.itcTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{solarGstGuide.itc}</p>
          </article>
        </div>

        <p className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
          {solarGstGuide.quoteTip}
        </p>
        <p className="mt-4 text-xs leading-5 text-slate-500">{solarGstGuide.disclaimer}</p>
        <div className="mt-5 border-t border-slate-200 pt-4">
          <h3 className="text-sm font-bold text-slate-800">{solarGstGuide.sourcesTitle}</h3>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {solarGstGuide.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>
    </section>
  )
}
