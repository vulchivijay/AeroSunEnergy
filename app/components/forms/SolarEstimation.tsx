'use client'

import { useId, useState, type FormEvent } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useToast } from '@/app/components/ui/ToastContext'
import { SolarGstGuide } from './SolarGstGuide'
import { SolarCalculatorControls } from './SolarCalculatorControls'
import { SolarCalculationResults } from './SolarCalculationResults'
import { SolarAssessmentLeadForm } from './SolarAssessmentLeadForm'
import type { Calculation, InputMode } from './SolarCalculatorControls'

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
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 uppercase text-indigo-900 text-xs font-semibold tracking-wide leading-5">
          <span className="shrink-0 h-2 w-2 rounded-full bg-current" aria-hidden="true" />
          {e.solarCalculatorEyebrow}
        </p>
        <h1 className="max-w-6xl text-left text-black text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
          {e.solarCalculatorTitle}{' '}
          <span className="text-indigo-700">{e.solarCalculatorTitleAccent}</span>
        </h1>
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden rounded-xl shadow-sm border border-slate-200">
        <div className="grid lg:grid-cols-[minmax(300px,0.75fr)_1.45fr]">
          <SolarCalculatorControls
            e={e}
            calculatorText={calculatorText}
            calculation={calculation}
            inputMode={inputMode}
            setInputMode={setInputMode}
            monthlyBillInput={monthlyBillInput}
            setMonthlyBillInput={setMonthlyBillInput}
            systemSizeInput={systemSizeInput}
            setSystemSizeInput={setSystemSizeInput}
            monthlyBillInputId={monthlyBillInputId}
            systemSizeInputId={systemSizeInputId}
            normalizeMonthlyBill={normalizeMonthlyBill}
            normalizeSystemSize={normalizeSystemSize}
            selectedPropertyIndex={selectedPropertyIndex}
            setSelectedPropertyIndex={setSelectedPropertyIndex}
            maxSystemSizeKw={MAX_SYSTEM_SIZE_KW}
          />
          <SolarCalculationResults
            e={e}
            calculatorText={calculatorText}
            calculation={calculation}
            currentPropertyType={currentPropertyType}
            formatCurrency={formatCurrency}
            formatSystemCapacity={formatSystemCapacity}
            assumeNetMeteringWaiver={assumeNetMeteringWaiver}
            setAssumeNetMeteringWaiver={setAssumeNetMeteringWaiver}
            showLeadForm={showLeadForm}
            setShowLeadForm={setShowLeadForm}
            leadFormId={leadFormId}
            setWhatsAppFallbackUrl={setWhatsAppFallbackUrl}
          />
        </div>
      </div>
      {showLeadForm && (
        <SolarAssessmentLeadForm
          e={e}
          calculatorText={calculatorText}
          calculation={calculation}
          currentPropertyType={currentPropertyType}
          monthlyBill={monthlyBill}
          formatCurrency={formatCurrency}
          formatSystemCapacity={formatSystemCapacity}
          leadFormId={leadFormId}
          leadNameInputId={leadNameInputId}
          leadPhoneInputId={leadPhoneInputId}
          leadPinInputId={leadPinInputId}
          leadPropertyTypeInputId={leadPropertyTypeInputId}
          leadPropertyIndex={leadPropertyIndex}
          setLeadPropertyIndex={setLeadPropertyIndex}
          leadNameValue={leadNameValue}
          setLeadNameValue={setLeadNameValue}
          leadPhoneValue={leadPhoneValue}
          setLeadPhoneValue={setLeadPhoneValue}
          leadFormPending={leadFormPending}
          whatsAppFallbackUrl={whatsAppFallbackUrl}
          savingsEstimateYears={SAVINGS_ESTIMATE_YEARS}
          savingLabel={t.formSubmission.saving}
          onSubmit={handleLeadFormSubmit}
          onCancel={() => setShowLeadForm(false)}
        />
      )}
      <SolarGstGuide
        guide={solarGstGuide}
        titleId={`${leadFormId}-gst-title`}
      />
    </section>
  )
}
