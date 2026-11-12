'use client'

import { useEffect, useId } from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm, useWatch, type UseFormRegisterReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'

type FormData = {
  monthlyUnits: number
  installationCostPerKw: number
  sellingPricePerKw: number
}

type Calculation = {
  recommendedKw: number
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

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
  currencyDisplay: 'narrowSymbol',
})

const formatCurrency = (amount: number) =>
  currencyFormatter.format(amount).replace('₹', '₹ ')

export function SolarEstimation() {
  const { t } = useLocale()
  const monthlyUnitsInputId = useId()
  const e = t.estimation
  const defaultValues: FormData = t.componentData.solarEstimation.defaultValues
  const validation = e.validation
  const solarCalculatorSchema = z
    .object({
      monthlyUnits: z
        .number()
        .min(1, validation.monthlyRequired)
        .max(100000, validation.monthlyMax),
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
  const monthlyUnits = Number(values.monthlyUnits ?? defaultValues.monthlyUnits)
  const installationCostPerKw = Number(values.installationCostPerKw ?? defaultValues.installationCostPerKw)
  const sellingPricePerKw = Number(values.sellingPricePerKw ?? defaultValues.sellingPricePerKw)

  const recommendedKw = Math.max(1, Math.round(monthlyUnits / 120))
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

    const annualSavings = monthlyUnits * 8.5 * 12
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
                    <label htmlFor={monthlyUnitsInputId} className="text-[12px] font-bold uppercase tracking-[0.26em] text-slate-500">{e.monthlyUnits}</label>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[2.4rem] font-black tracking-[0.06em] text-emerald-600">{(values.monthlyUnits ?? defaultValues.monthlyUnits).toLocaleString('en-IN')} {e.unitsSuffix}</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-md font-semibold text-emerald-700">
                    {calculation ? `${calculation.recommendedKw} ${e.recommendedSystemSuffix}` : e.systemSizing}
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    id={monthlyUnitsInputId}
                    type="range"
                    aria-label={e.monthlyUnitsAriaLabel}
                    min={50}
                    max={4000}
                    step={10}
                    value={Math.min(4000, Math.max(50, monthlyUnits))}
                    onChange={(event) => {
                      const nextValue = Number(event.target.value)
                      setValue('monthlyUnits', nextValue, { shouldValidate: true, shouldDirty: true })
                    }}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-linear-to-r from-emerald-400 via-amber-400 to-slate-200 accent-emerald-600"
                  />
                  <div className="flex items-center justify-between text-md font-semibold text-slate-500">
                    <span>{e.monthlyUnitsMinimum}</span>
                    <span>{e.monthlyUnitsMaximum}</span>
                  </div>
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
                    {calculation ? `${Math.max(60, calculation.recommendedKw * 60)} ${e.squareFootUnit}` : '—'}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <InputField
                    name="monthlyUnits"
                    label={e.monthlyUsage}
                    helperText={e.monthlyUsageHelper}
                    suffix={e.unitsSuffix}
                    error={errors.monthlyUnits?.message}
                    register={register('monthlyUnits', { valueAsNumber: true })}
                    accentClass="from-emerald-500 via-emerald-500 to-emerald-600"
                    placeholder="360"
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
                <div className="mt-3 text-5xl font-black tracking-[0.08em] text-white">
                  {calculation ? formatCurrency(calculation.profit) : '—'}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.originalCost}</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.totalInstallationCost) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.subsidy}</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.subsidy) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.netCost}</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[0.06em] text-white">
                    {calculation ? formatCurrency(calculation.customerPayable) : '—'}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-50">{e.payback}</div>
                  <div className="mt-3 text-[2rem] font-black tracking-[0.06em] text-white">
                    {calculation ? `${(calculation.customerPayable / Math.max(1, calculation.profit)).toFixed(1)} ${e.yearsShort}` : '—'}
                  </div>
                </div>
              </div>

              <p className="rounded-xl border border-emerald-100/20 bg-white/10 px-4 py-3 text-sm leading-6 text-emerald-50">
                {t.subsidyNotice}
              </p>

              <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex-1 rounded-full bg-white px-5 py-4 text-center text-xl font-bold text-slate-900 shadow-[0_20px_30px_-18px_rgba(15,23,42,0.5)] transition hover:bg-emerald-50"
                >
                  {e.enquireNow} <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/"
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
