'use client'

import { useId, useState, type FormEvent } from 'react'
import { Calculator, Landmark, Tag, type LucideIcon } from 'lucide-react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { useLocale } from '@/lib/LocaleContext'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'

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
}

const AVERAGE_TARIFF_PER_UNIT = 8.5
const MONTHLY_GENERATION_PER_KW = 120
const ROOF_AREA_PER_KW = 60
const ESTIMATED_PRICE_PER_KW = 70000
const SAVINGS_ESTIMATE_YEARS = 25

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  currencyDisplay: 'narrowSymbol',
})

const formatCurrency = (amount: number) =>
  currencyFormatter.format(amount).replace('₹', '₹ ')

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

function LeadSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2 text-sm last:border-b-0 last:pb-0">
      <span className="text-blue-100/75">{label}</span>
      <span className="text-right font-bold text-white">{value}</span>
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
        {value}
      </p>
    </div>
  )
}

export function SolarEstimation() {
  const { t } = useLocale()
  const e = t.estimation
  const calculatorText = e.calculator
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
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [whatsAppFallbackUrl, setWhatsAppFallbackUrl] = useState<string | null>(null)
  const [leadFormError, setLeadFormError] = useState('')
  const [leadFormReference, setLeadFormReference] = useState('')
  const [leadFormPending, setLeadFormPending] = useState(false)

  const billAmount = clamp(Number(monthlyBillInput) || 500, 500, 50000)
  const monthlyUnitsFromBill = Math.round(billAmount / AVERAGE_TARIFF_PER_UNIT)
  const selectedSystemSize = clamp(Math.round(Number(systemSizeInput) || 1), 1, 50)
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
  const calculation: Calculation = {
    recommendedKw,
    monthlyUnits,
    annualGeneration,
    dailyGeneration: Math.round(annualGeneration / 365),
    annualSavings,
    roofArea: recommendedKw * ROOF_AREA_PER_KW,
    totalPrice: recommendedKw * ESTIMATED_PRICE_PER_KW,
    subsidy,
    effectiveCost: Math.max(0, recommendedKw * ESTIMATED_PRICE_PER_KW - subsidy),
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
      setLeadFormError(e.whatsAppUnavailable)
      return
    }

    setLeadFormError('')
    setLeadFormReference('')
    setLeadFormPending(true)

    const message = [
      e.whatsAppGreeting,
      `${e.leadName}: ${name}`,
      `${e.leadMobile}: ${phone}`,
      `${e.leadPinCode}: ${pinCode}`,
      `${e.leadPropertyType}: ${propertyType}`,
      `${e.monthlyBill}: ${formatCurrency(monthlyBill)}`,
      `${e.recommendedCapacity}: ${calculation.recommendedKw} ${e.capacityUnit}`,
      `${e.annualGeneration}: ${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`,
      `${e.annualSavings}: ${formatCurrency(calculation.annualSavings)}`,
      `${e.twentyFiveYearSavings}: ${formatCurrency(twentyFiveYearSavings)}`,
      `${e.roofRequired}: ${calculation.roofArea} ${e.squareFootUnit}`,
      `${calculatorText.effectiveCost}: ${formatCurrency(calculation.effectiveCost)}`,
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
      setLeadFormReference(referenceCode)
      if (whatsAppWindow) {
        whatsAppWindow.opener = null
        whatsAppWindow.location.href = url
        setWhatsAppFallbackUrl(null)
      } else {
        setWhatsAppFallbackUrl(url)
      }
    } catch {
      whatsAppWindow?.close()
      setLeadFormError(t.formSubmission.error)
      setWhatsAppFallbackUrl(null)
    } finally {
      setLeadFormPending(false)
    }
  }

  function normalizeMonthlyBill() {
    setMonthlyBillInput(String(clamp(Math.round(Number(monthlyBillInput) || 500), 500, 50000)))
  }

  function normalizeSystemSize() {
    setSystemSizeInput(String(clamp(Math.round(Number(systemSizeInput) || 1), 1, 50)))
  }

  const currentPropertyType =
    e.propertyTypeOptions[selectedPropertyIndex] ?? calculatorText.homeOption

  return (
    <section className="bg-linear-to-br from-[#dcecff] via-[#ede8ff] to-[#d8f4f3] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_30px_90px_-40px_rgba(2,12,27,0.65)]">
        <div className="grid lg:grid-cols-[minmax(300px,0.75fr)_1.45fr]">
          <div className="bg-linear-to-br from-[#4568b6] via-[#5c55ae] to-[#3f7798] p-6 text-white sm:p-8 lg:p-10">
            <h1 className="max-w-sm text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {e.savingsTitle} <span className="text-emerald-400">{e.savingsTitleAccent}</span>
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100/80">
              {e.savingsDescription}
            </p>

            <div className="mt-7 inline-flex rounded-full bg-white/10 p-1" role="group" aria-label={e.leadPropertyType}>
              <button
                type="button"
                aria-pressed={selectedPropertyIndex === 0}
                onClick={() => setSelectedPropertyIndex(0)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                  selectedPropertyIndex === 0
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-blue-100/75 hover:text-white'
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
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-blue-100/75 hover:text-white'
                }`}
              >
                {calculatorText.commercialOption}
              </button>
            </div>

            <div className="mt-8">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-100/80">
                {inputMode === 'bill' ? calculatorText.billAmount : calculatorText.systemSize}
              </div>
              <div className="inline-flex rounded-full bg-white/10 p-1" role="group" aria-label={e.adjustUsage}>
                <button
                  type="button"
                  aria-pressed={inputMode === 'bill'}
                  onClick={() => setInputMode('bill')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'bill' ? 'bg-white text-[#203f63]' : 'text-blue-100/75 hover:text-white'
                  }`}
                >
                  {calculatorText.billAmount}
                </button>
                <button
                  type="button"
                  aria-pressed={inputMode === 'systemSize'}
                  onClick={() => setInputMode('systemSize')}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    inputMode === 'systemSize' ? 'bg-white text-[#203f63]' : 'text-blue-100/75 hover:text-white'
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
                    <span className="text-xl font-bold text-blue-100" aria-hidden="true">₹</span>
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
                      className="min-w-0 flex-1 bg-transparent px-3 text-2xl font-extrabold tabular-nums text-white outline-none placeholder:text-blue-100/50"
                    />
                    <span className="whitespace-nowrap text-sm text-blue-100/70">{calculatorText.monthSuffix}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-blue-100/60">
                    <span>{e.monthlyBillMinimum}</span>
                    <span>{e.monthlyBillMaximum}</span>
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
                      max={50}
                      step={1}
                      value={systemSizeInput}
                      onChange={(event) => setSystemSizeInput(event.target.value)}
                      onBlur={normalizeSystemSize}
                      className="min-w-0 flex-1 bg-transparent px-1 text-2xl font-extrabold tabular-nums text-white outline-none"
                    />
                    <span className="text-sm font-bold text-blue-100">{e.capacityUnit}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-blue-100/60">
                    <span>1 {e.capacityUnit}</span>
                    <span>50 {e.capacityUnit}</span>
                  </div>
                </div>
              )}

              <p className="mt-4 text-sm text-blue-100/75">
                {e.estimatedMonthlyUsage}: {calculation.monthlyUnits.toLocaleString('en-IN')} {e.unitsSuffix}
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
                    selectedPropertyIndex === 0 ? 'text-green-100/60' : 'text-blue-100/80'
                  }`}
                >
                  {selectedPropertyIndex === 0
                    ? calculatorText.residentialSubsidyNote
                    : calculatorText.commercialSubsidyNote}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#f7faff] via-[#f2f4ff] to-[#eef9fb] p-5 sm:p-7 lg:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(15,48,80,0.5)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {calculatorText.idealSystemSize}
                </p>
                <p className="mt-3 text-4xl font-black tracking-tight text-sky-700">
                  {calculation.recommendedKw}<span className="ml-1 text-xl">kW</span>
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {calculation.dailyGeneration} {calculatorText.averageDailyGeneration}
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(15,48,80,0.5)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {e.annualSavings}
                </p>
                <p className="mt-3 text-3xl font-black tracking-tight text-emerald-600 sm:text-4xl">
                  ~{formatCurrency(calculation.annualSavings)}
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(15,48,80,0.5)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {e.annualGeneration}
                </p>
                <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {calculation.annualGeneration.toLocaleString('en-IN')} <span className="text-sm font-semibold">{e.generationUnit}</span>
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(15,48,80,0.5)] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {e.roofRequired}
                </p>
                <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {calculation.roofArea.toLocaleString('en-IN')} <span className="text-sm font-semibold">{e.squareFootUnit}</span>
                </p>
              </article>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  {calculatorText.pricingBreakdown}
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  {calculation.recommendedKw} {e.capacityUnit} · {currentPropertyType}
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
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold text-slate-600">
                <span className="whitespace-nowrap">{formatCurrency(calculation.totalPrice)}</span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 font-mono text-base font-black text-violet-700">-</span>
                <span className="whitespace-nowrap">{formatCurrency(calculation.subsidy)}</span>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 font-mono text-base font-black text-violet-700">=</span>
                <span className="whitespace-nowrap">{formatCurrency(calculation.effectiveCost)}</span>
              </div>
              <p className="mt-4 text-right text-xs text-slate-500">{calculatorText.taxesExtra}</p>
            </div>

            <button
              type="button"
              aria-expanded={showLeadForm}
              aria-controls={leadFormId}
              onClick={() => {
                setShowLeadForm(true)
                setWhatsAppFallbackUrl(null)
                setLeadFormError('')
              }}
              className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 text-base font-extrabold text-white shadow-[0_12px_24px_-14px_rgba(16,185,129,0.75)] transition hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
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
          className="mx-auto mt-8 grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_30px_90px_-40px_rgba(2,12,27,0.65)] lg:grid-cols-[0.85fr_1.15fr]"
          aria-labelledby={`${leadFormId}-title`}
        >
          <div className="bg-linear-to-br from-[#4568b6] via-[#5c55ae] to-[#3f7798] p-6 text-white sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
              {e.freeAssessmentLabel}
            </p>
            <h2 id={`${leadFormId}-title`} className="mt-3 text-3xl font-black tracking-tight">
              {e.freeAssessmentCta}
            </h2>
            <div className="mt-6 space-y-3">
              <LeadSummary label={e.leadPropertyType} value={currentPropertyType} />
              <LeadSummary label={e.monthlyBill} value={formatCurrency(monthlyBill)} />
              <LeadSummary label={e.recommendedCapacity} value={`${calculation.recommendedKw} ${e.capacityUnit}`} />
              <LeadSummary label={e.annualGeneration} value={`${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`} />
              <LeadSummary label={e.annualSavings} value={`${formatCurrency(calculation.annualSavings)}/${e.yearSuffix}`} />
              <LeadSummary label={e.twentyFiveYearSavings} value={formatCurrency(calculation.annualSavings * SAVINGS_ESTIMATE_YEARS)} />
              <LeadSummary label={e.roofRequired} value={`${calculation.roofArea} ${e.squareFootUnit}`} />
              <LeadSummary label={calculatorText.effectiveCost} value={formatCurrency(calculation.effectiveCost)} />
            </div>
            <p className="mt-6 text-sm leading-5 text-blue-100/80">{e.whatsAppDisclosure}</p>
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
                  pattern="([+]91[ -]?)?[6-9][0-9]{4}[ -]?[0-9]{5}"
                  maxLength={15}
                  required
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
                  value={selectedPropertyIndex}
                  onChange={(event) => setSelectedPropertyIndex(Number(event.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
                >
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
            {leadFormError && (
              <p className="mt-4 text-sm font-semibold text-rose-700" role="alert">
                {leadFormError}
              </p>
            )}
            {leadFormReference && (
              <p className="mt-4 text-sm font-semibold text-emerald-800" role="status" aria-live="polite">
                {t.formSubmission.success} {t.formSubmission.referenceLabel}:{' '}
                <span className="font-mono">{leadFormReference}</span>
              </p>
            )}
            <div className="mt-4">
              <FormDataNotice />
            </div>
          </form>
        </section>
      )}
    </section>
  )
}
