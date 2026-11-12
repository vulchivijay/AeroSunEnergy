'use client'

import { useEffect, useId, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm, useWatch, type UseFormRegisterReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'

type FormData = {
  monthlyBill: number
  installationCostPerKw: number
  sellingPricePerKw: number
}

type Calculation = {
  recommendedKw: number
  annualGeneration: number
  subsidy: number
  totalInstallationCost: number
  totalSellingPrice: number
  customerPayable: number
  profit: number
  commission: number
  profitMargin: number
  profitStatus: 'Low' | 'Average' | 'Excellent'
  profitTone: string
  badgeTone: string
}

function LeadSummary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2 text-sm last:border-b-0 last:pb-0">
      <span className="text-emerald-100/75">{label}</span>
      <span className="text-right font-bold text-white">{value}</span>
    </div>
  )
}

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  currencyDisplay: 'narrowSymbol',
})

const AVERAGE_TARIFF_PER_UNIT = 8.5
const MONTHLY_GENERATION_PER_KW = 120
const ROOF_AREA_PER_KW = 60
const SAVINGS_ESTIMATE_YEARS = 25

const formatCurrency = (amount: number) =>
  currencyFormatter.format(amount).replace('₹', '₹ ')

export function SolarEstimation() {
  const { t } = useLocale()
  const monthlyBillInputId = useId()
  const leadFormId = useId()
  const leadNameInputId = useId()
  const leadPhoneInputId = useId()
  const leadPinInputId = useId()
  const leadPropertyTypeInputId = useId()
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [whatsAppFallbackUrl, setWhatsAppFallbackUrl] = useState<string | null>(null)
  const [leadFormError, setLeadFormError] = useState('')
  const e = t.estimation
  const defaultValues: FormData = t.componentData.solarEstimation.defaultValues
  const validation = e.validation
  const solarCalculatorSchema = z
    .object({
      monthlyBill: z
        .number({ error: validation.monthlyBillRequired })
        .min(500, validation.monthlyBillMin)
        .max(50000, validation.monthlyBillMax),
      installationCostPerKw: z
        .number()
        .min(10000, validation.installationMin)
        .max(100000, validation.installationMax),
      sellingPricePerKw: z
        .number()
        .min(10000, validation.sellingMin)
        .max(200000, validation.sellingMax),
    })
    .refine((data) => data.sellingPricePerKw >= data.installationCostPerKw, {
      path: ['sellingPricePerKw'],
      message: validation.sellingGreaterThanCost,
    })
  const isProduction = process.env.NODE_ENV === 'production'

  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(solarCalculatorSchema),
    mode: 'onChange',
    defaultValues,
  })

  const values = useWatch({ control, defaultValue: defaultValues })
  const monthlyBill = Number(values.monthlyBill ?? defaultValues.monthlyBill)
  const monthlyUnits = Math.round(monthlyBill / AVERAGE_TARIFF_PER_UNIT)
  const installationCostPerKw = Number(values.installationCostPerKw ?? defaultValues.installationCostPerKw)
  const sellingPricePerKw = Number(values.sellingPricePerKw ?? defaultValues.sellingPricePerKw)

  const recommendedKw = Math.max(1, Math.round(monthlyUnits / MONTHLY_GENERATION_PER_KW))
  const expectedInstallationCostPerKw = Math.round(54300 + Math.max(0, recommendedKw - 1) * 1800)
  const expectedSellingPricePerKw = Math.round(65000 + Math.max(0, recommendedKw - 1) * 2200)

  useEffect(() => {
    const installationNeedsSync = Math.abs(installationCostPerKw - expectedInstallationCostPerKw) > 0
    const sellingNeedsSync = Math.abs(sellingPricePerKw - expectedSellingPricePerKw) > 0

    if (installationNeedsSync) {
      setValue('installationCostPerKw', expectedInstallationCostPerKw, { shouldValidate: true, shouldDirty: true })
    }

    if (sellingNeedsSync) {
      setValue('sellingPricePerKw', expectedSellingPricePerKw, { shouldValidate: true, shouldDirty: true })
    }
  }, [monthlyUnits, installationCostPerKw, sellingPricePerKw, expectedInstallationCostPerKw, expectedSellingPricePerKw, setValue])

  const calculation: Calculation = (() => {
    let subsidy = 0
    if (recommendedKw === 1) {
      subsidy = 30000
    } else if (recommendedKw === 2) {
      subsidy = 60000
    } else {
      subsidy = 78000
    }

    const totalInstallationCost = recommendedKw * installationCostPerKw
    const totalSellingPrice = recommendedKw * sellingPricePerKw
    const customerPayable = Math.max(0, totalSellingPrice - subsidy)

    const annualGeneration = recommendedKw * MONTHLY_GENERATION_PER_KW * 12
    const annualSavings = Math.min(monthlyBill * 12, annualGeneration * AVERAGE_TARIFF_PER_UNIT)
    const profit = annualSavings
    const commission = totalInstallationCost * 0.1
    const profitMargin = (annualSavings / Math.max(1, customerPayable)) * 100

    let profitStatus: Calculation['profitStatus'] = 'Low'
    let profitTone = 'text-rose-700 '
    let badgeTone = 'bg-rose-500/10 text-rose-700 ring-rose-500/20 '

    if (profitMargin >= 20) {
      profitStatus = 'Excellent'
      profitTone = 'text-emerald-700 '
      badgeTone = 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 '
    } else if (profitMargin >= 10) {
      profitStatus = 'Average'
      profitTone = 'text-amber-700 '
      badgeTone = 'bg-amber-500/10 text-amber-700 ring-amber-500/20 '
    }

    return {
      recommendedKw,
      annualGeneration,
      subsidy,
      totalInstallationCost,
      totalSellingPrice,
      customerPayable,
      profit,
      commission,
      profitMargin,
      profitStatus,
      profitTone,
      badgeTone,
    }
  })()

  const summaryStats = [
    {
      label: e.recommendedCapacity,
      value: `${calculation.recommendedKw} kW`,
    },
    {
      label: e.profitMargin,
      value: `${calculation.profitMargin.toFixed(1)}%`,
    },
    {
      label: e.subsidyBand,
      value: calculation.subsidy >= 78000 ? '3 kW +' : `${calculation.recommendedKw} kW`,
    },
  ].map((stat, index) => ({
    ...stat,
    accent: t.componentData.solarEstimation.summaryStatAccents[index],
  }))

  function handleLeadFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const pinCode = String(formData.get('pinCode') ?? '').trim()
    const propertyType = String(formData.get('propertyType') ?? '')
    const whatsAppNumber = t.footer.phoneHref.replace(/\D/g, '')
    const roofArea = Math.max(60, calculation.recommendedKw * ROOF_AREA_PER_KW)

    if (!whatsAppNumber) {
      setLeadFormError(e.whatsAppUnavailable)
      return
    }

    setLeadFormError('')

    const message = [
      e.whatsAppGreeting,
      `${e.leadName}: ${name}`,
      `${e.leadMobile}: ${phone}`,
      `${e.leadPinCode}: ${pinCode}`,
      `${e.leadPropertyType}: ${propertyType}`,
      `${e.monthlyBill}: ${formatCurrency(monthlyBill)}`,
      `${e.recommendedCapacity}: ${calculation.recommendedKw} ${e.capacityUnit}`,
      `${e.annualGeneration}: ${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`,
      `${e.annualSavings}: ${formatCurrency(calculation.profit)}`,
      `${e.twentyFiveYearSavings}: ${formatCurrency(calculation.profit * SAVINGS_ESTIMATE_YEARS)}`,
      `${e.roofRequired}: ${roofArea} ${e.squareFootUnit}`,
    ].join('\n')
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`
    const whatsAppWindow = window.open(url, '_blank')

    if (whatsAppWindow) {
      whatsAppWindow.opener = null
      setWhatsAppFallbackUrl(null)
    } else {
      setWhatsAppFallbackUrl(url)
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#fff4e8] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {e.badge}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-[0.065em] text-slate-900 sm:text-5xl lg:text-[5rem]">
            {e.savingsTitle}
            <span className="mt-2 block text-emerald-600">{e.savingsTitleAccent}</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {e.savingsDescription}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white/85 p-5 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-[2rem] font-black tracking-tighter text-slate-900">
                  {e.estimateSavings}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{e.adjustUsage}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <label htmlFor={monthlyBillInputId} className="text-[12px] font-bold uppercase tracking-[0.26em] text-slate-500">{e.monthlyBill}</label>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[2.4rem] font-black tracking-[0.06em] text-emerald-600">{formatCurrency(monthlyBill)}</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-md font-semibold text-emerald-700">
                    {calculation ? `${calculation.recommendedKw} ${e.recommendedSystemSuffix}` : e.systemSizing}
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    id={monthlyBillInputId}
                    type="range"
                    aria-label={e.monthlyBillAriaLabel}
                    min={500}
                    max={50000}
                    step={10}
                    value={Math.min(50000, Math.max(500, monthlyBill))}
                    onChange={(event) => {
                      const nextValue = Number(event.target.value)
                      setValue('monthlyBill', nextValue, { shouldValidate: true, shouldDirty: true })
                    }}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                  />
                  <div className="flex items-center justify-between text-md font-semibold text-slate-500">
                    <span>{e.monthlyBillMinimum}</span>
                    <span>{e.monthlyBillMaximum}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500">
                    {e.estimatedMonthlyUsage}: {monthlyUnits.toLocaleString('en-IN')} {e.unitsSuffix}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-slate-200 bg-slate-50/80 p-4 shadow-inner">
                  <div className="text-md font-bold uppercase tracking-[0.2em] text-slate-500">{e.plantSize}</div>
                  <div className="mt-2 text-3xl font-black tracking-[0.06em] text-emerald-600">
                    {calculation ? `${calculation.recommendedKw} ${e.capacityUnit}` : '—'}
                  </div>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50/80 p-4 shadow-inner">
                  <div className="text-md font-bold uppercase tracking-[0.2em] text-slate-500">{e.roofRequired}</div>
                  <div className="mt-2 text-3xl font-black tracking-[0.06em] text-emerald-600">
                    {calculation ? `${Math.max(60, calculation.recommendedKw * ROOF_AREA_PER_KW)} ${e.squareFootUnit}` : '—'}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <InputField
                    name="monthlyBill"
                    label={e.monthlyBill}
                    helperText={e.monthlyBillHelper}
                    suffix={e.billSuffix}
                    error={errors.monthlyBill?.message}
                    register={register('monthlyBill', { valueAsNumber: true })}
                    accentClass="from-emerald-500 via-emerald-500 to-emerald-600"
                    placeholder="3060"
                    min={500}
                    max={50000}
                  />

                  <InputField
                    name="sellingPricePerKw"
                    label={e.sellingPrice}
                    helperText={e.sellingPriceHelper}
                    suffix={e.perKwSuffix}
                    error={errors.sellingPricePerKw?.message}
                    register={register('sellingPricePerKw', { valueAsNumber: true })}
                    accentClass="from-emerald-500 via-teal-500 to-cyan-600"
                    placeholder="65000"
                  />

                  {!isProduction && (
                    <div className="mb-4">
                      <InputField
                        name="installationCostPerKw"
                        label={e.installationCost}
                        helperText={e.installationCostHelper}
                        suffix={e.perKwSuffix}
                        error={errors.installationCostPerKw?.message}
                        register={register('installationCostPerKw', { valueAsNumber: true })}
                        accentClass="from-sky-500 via-blue-500 to-emerald-600"
                        placeholder="54300"
                      />
                    </div>
                  )}

                  {isProduction && (
                    <input
                      type="hidden"
                      {...register('installationCostPerKw', { valueAsNumber: true })}
                      value={defaultValues.installationCostPerKw}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-linear-to-br from-[#0b3b2e] via-[#1f7a5a] to-[#48b69a] p-5 text-white shadow-[0_30px_80px_-35px_rgba(11,59,46,0.8)] sm:p-6 lg:p-8">
            <div className="space-y-5">
              <div>
                <h2 className="text-[2rem] font-black tracking-tighter text-white">{e.returnsTitle}</h2>
                <p className="mt-2 text-sm text-emerald-50/90">{e.irradianceTariffAssumption}</p>
              </div>

              <div className="rounded-[22px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="text-[12px] font-bold uppercase tracking-[0.3em] text-emerald-50">{e.annualSavings}</div>
                <div className="mt-3 text-4xl font-black tracking-[0.08em] text-white">
                  {calculation ? formatCurrency(calculation.profit) : '—'}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.annualGeneration}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.02em] text-white">
                    {calculation ? `${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}` : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.twentyFiveYearSavings}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.02em] text-white">
                    {calculation ? formatCurrency(calculation.profit * SAVINGS_ESTIMATE_YEARS) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.originalCost}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.totalInstallationCost) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.subsidy}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.subsidy) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.netCost}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.customerPayable) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.payback}</div>
                  <div className="mt-3 text-2xl font-black tracking-[0.06em] text-white">
                    {calculation ? `${(calculation.customerPayable / Math.max(1, calculation.profit)).toFixed(1)} ${e.yearsShort}` : '—'}
                  </div>
                </div>
              </div>

              <p className="rounded-xl border border-emerald-100/20 bg-white/10 px-4 py-3 text-sm leading-6 text-emerald-50">
                {t.subsidyNotice}
              </p>

              <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  aria-expanded={showLeadForm}
                  aria-controls={leadFormId}
                  onClick={() => {
                    setShowLeadForm(true)
                    setWhatsAppFallbackUrl(null)
                    setLeadFormError('')
                  }}
                  className="flex-1 rounded-full bg-[#F5C76A] px-5 py-4 text-center text-lg font-bold text-[#10251F] shadow-[0_20px_30px_-18px_rgba(15,23,42,0.5)] transition hover:bg-[#ffda8b]"
                >
                  {e.freeAssessmentCta} <span aria-hidden="true">→</span>
                </button>
                <Link
                  href="/contact"
                  className="flex-1 rounded-full bg-white px-5 py-4 text-center text-xl font-bold text-slate-900 shadow-[0_20px_30px_-18px_rgba(15,23,42,0.5)] transition hover:bg-emerald-50"
                >
                  {e.contactUs} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="text-center text-md leading-6 text-emerald-50/90">
                {e.estimatesDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {showLeadForm && (
          <section
            id={leadFormId}
            className="mt-8 grid overflow-hidden rounded-[30px] border border-emerald-900/10 bg-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] lg:grid-cols-[0.85fr_1.15fr]"
            aria-labelledby={`${leadFormId}-title`}
          >
            <div className="bg-[#0B3B2E] p-6 text-white sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">{e.freeAssessmentLabel}</p>
              <h2 id={`${leadFormId}-title`} className="mt-3 text-3xl font-black tracking-tight">{e.freeAssessmentCta}</h2>
              <div className="mt-6 space-y-3">
                <LeadSummary label={e.monthlyBill} value={formatCurrency(monthlyBill)} />
                <LeadSummary label={e.recommendedCapacity} value={`${calculation.recommendedKw} ${e.capacityUnit}`} />
                <LeadSummary label={e.annualGeneration} value={`${calculation.annualGeneration.toLocaleString('en-IN')} ${e.generationUnit}`} />
                <LeadSummary label={e.annualSavings} value={`${formatCurrency(calculation.profit)}/${e.yearSuffix}`} />
                <LeadSummary label={e.twentyFiveYearSavings} value={formatCurrency(calculation.profit * SAVINGS_ESTIMATE_YEARS)} />
                <LeadSummary label={e.roofRequired} value={`${Math.max(60, calculation.recommendedKw * ROOF_AREA_PER_KW)} ${e.squareFootUnit}`} />
              </div>
              <p className="mt-6 text-xs leading-5 text-emerald-50/80">{e.whatsAppDisclosure}</p>
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold text-slate-700">{e.leadPropertyType}</span>
                  <select
                    id={leadPropertyTypeInputId}
                    name="propertyType"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  >
                    <option value="" disabled>{e.propertyTypePlaceholder}</option>
                    {e.propertyTypeOptions.map((propertyType) => (
                      <option key={propertyType} value={propertyType}>{propertyType}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  {e.whatsAppMyReport} <span className="ml-2" aria-hidden="true">↗</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowLeadForm(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
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
            </form>
          </section>
        )}
      </div>
    </section>
  )
}

type InputFieldProps = {
  name: keyof FormData
  label: string
  helperText: string
  suffix: string
  error?: string
  register: UseFormRegisterReturn
  accentClass: string
  placeholder: string
  min?: number
  max?: number
}

function InputField({
  name,
  label,
  helperText,
  suffix,
  error,
  register,
  accentClass,
  placeholder,
  min,
  max,
}: InputFieldProps) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-linear-to-b from-white via-slate-50 to-slate-100 p-4 shadow-[0_18px_35px_-30px_rgba(15,23,42,0.45)] transition-transform duration-200 hover:-translate-y-0.5    ">
      <div className={`h-1.5 rounded-full bg-linear-to-r ${accentClass}`} aria-hidden="true" />

      <div className="mt-4 flex items-center justify-between gap-3">
        <label htmlFor={name} className="text-[12px] font-bold uppercase tracking-[0.24em] text-slate-600 ">
          {label}
        </label>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-700  ">
          {suffix}
        </span>
      </div>

      <input
        id={name}
        type="number"
        inputMode="numeric"
        placeholder={placeholder}
        min={min}
        max={max}
        {...register}
        aria-invalid={Boolean(error)}
        aria-describedby={`${name}-help${error ? ` ${name}-error` : ''}`}
        className={`mt-3 w-full rounded-2xl border px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100   ${error ? 'border-rose-400 bg-rose-50/80  ' : 'border-slate-200 bg-white/90  '}`}
      />

      <p id={`${name}-help`} className="mt-2 text-md leading-5 text-slate-500 ">
        {helperText}
      </p>

      {error && (
        <p id={`${name}-error`} className="mt-2 text-md font-medium text-rose-600 ">
          {error}
        </p>
      )}
    </div>
  )
}

type ResultCardProps = {
  title: string
  value: string
  detail: string
  accentClass: string
  valueTone?: string
}

function ResultCard({
  title,
  value,
  detail,
  accentClass,
  valueTone = 'text-custom-deep-blue ',
}: ResultCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/82 p-4 shadow-sm  ">
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accentClass}`} aria-hidden="true" />
      <p className="text-md font-semibold uppercase tracking-[0.28em] text-slate-500 ">
        {title}
      </p>
      <p className={`mt-3 text-2xl font-semibold tracking-tight ${valueTone}`}>
        {value}
      </p>
      <p className="mt-2 text-md leading-6 text-slate-500 ">
        {detail}
      </p>
    </div>
  )
}
