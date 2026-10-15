'use client'

import Link from 'next/link'
import { z } from 'zod'
import { useForm, useWatch, type UseFormRegisterReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/app/lib/LocaleContext'

const solarCalculatorSchema = z
  .object({
    monthlyUnits: z
      .number()
      .min(1, 'Monthly electricity consumption is required')
      .max(100000, 'Maximum allowed value is 100000 units'),
    installationCostPerKw: z
      .number()
      .min(10000, 'Installation cost must be at least ₹10,000')
      .max(100000, 'Installation cost cannot exceed ₹1,00,000'),
    sellingPricePerKw: z
      .number()
      .min(10000, 'Selling price must be at least ₹10,000')
      .max(200000, 'Selling price cannot exceed ₹2,00,000'),
  })
  .refine((data) => data.sellingPricePerKw >= data.installationCostPerKw, {
    path: ['sellingPricePerKw'],
    message: 'Selling price should be greater than or equal to installation cost',
  })

type FormData = z.infer<typeof solarCalculatorSchema>

type Calculation = {
  recommendedKw: number
  subsidy: number
  totalInstallationCost: number
  totalSellingPrice: number
  customerPayable: number
  profit: number
  profitMargin: number
  profitStatus: 'Low' | 'Average' | 'Excellent'
  profitTone: string
  badgeTone: string
}

const defaultValues: FormData = {
  monthlyUnits: 360,
  installationCostPerKw: 54300,
  sellingPricePerKw: 65000,
}

export default function SolarCalculator() {
  const { t } = useLocale()
  const e = t.estimation

  const subsidyTiers = e.tiers.map((tier) => ({
    ...tier,
    label: tier.label,
    subsidy: tier.subsidy,
    note: tier.note,
  }))

  const {
    register,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(solarCalculatorSchema),
    mode: 'onChange',
    defaultValues,
  })

  const values = useWatch({ control, defaultValue: defaultValues })
  const monthlyUnits = values.monthlyUnits ?? defaultValues.monthlyUnits
  const installationCostPerKw = values.installationCostPerKw ?? defaultValues.installationCostPerKw
  const sellingPricePerKw = values.sellingPricePerKw ?? defaultValues.sellingPricePerKw

  const calculation: Calculation | null = isValid
    ? (() => {
        const recommendedKw = Math.max(1, Math.round(monthlyUnits / 120))

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
        const customerPayable = totalSellingPrice - subsidy
        const profit = totalSellingPrice - totalInstallationCost
        const profitMargin = (profit / totalSellingPrice) * 100

        let profitStatus: Calculation['profitStatus'] = 'Low'
        let profitTone = 'text-rose-700 dark:text-rose-300'
        let badgeTone = 'bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:text-rose-300'

        if (profitMargin >= 20) {
          profitStatus = 'Excellent'
          profitTone = 'text-emerald-700 dark:text-emerald-300'
          badgeTone = 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300'
        } else if (profitMargin >= 10) {
          profitStatus = 'Average'
          profitTone = 'text-amber-700 dark:text-amber-300'
          badgeTone = 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-300'
        }

        return {
          recommendedKw,
          subsidy,
          totalInstallationCost,
          totalSellingPrice,
          customerPayable,
          profit,
          profitMargin,
          profitStatus,
          profitTone,
          badgeTone,
        }
      })()
    : null

  const currency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)

  const summaryStats = calculation
    ? [
        {
          label: e.recommendedCapacity,
          value: `${calculation.recommendedKw} kW`,
          accent: 'from-primary/90 to-custom-orange/90',
        },
        {
          label: e.profitMargin,
          value: `${calculation.profitMargin.toFixed(1)}%`,
          accent: 'from-custom-blue/90 to-primary/90',
        },
        {
          label: e.subsidyBand,
          value: calculation.subsidy >= 78000 ? '3 kW +' : `${calculation.recommendedKw} kW`,
          accent: 'from-custom-red/90 to-custom-violet/90',
        },
      ]
    : []

  return (
    <section className="relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[#f7f6f0] dark:bg-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(50,84,146,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(250,89,82,0.12),transparent_22%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(50,84,146,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(250,89,82,0.14),transparent_22%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-size-[44px_44px] opacity-30 dark:opacity-10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.38em] text-custom-deep-blue shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100">
            {e.badge}
          </span>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-custom-deep-blue sm:text-5xl lg:text-6xl dark:text-white">
              {e.heading.split('sharper branded dashboard')[0]}
              <span className="bg-linear-to-r from-primary via-custom-blue to-custom-red bg-clip-text text-transparent">
                {e.headingAccent}
              </span>
              {e.heading.includes('sharper branded dashboard') ? e.heading.replace('sharper branded dashboard', '') : ''}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {e.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Card className="overflow-hidden border-white/70 bg-white/82 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
            <CardContent className="space-y-8 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-custom-deep-blue dark:bg-primary/15 dark:text-primary-200">
                  {e.liveCalculation}
                </span>
                <span className="rounded-full bg-custom-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-custom-blue dark:bg-custom-blue/15 dark:text-blue-200">
                  {e.subsidyAware}
                </span>
                <span className="rounded-full bg-custom-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-custom-red dark:bg-custom-red/15 dark:text-red-200">
                  {e.responsiveLayout}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {summaryStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-slate-100 p-4 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
                  >
                    <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${stat.accent}`} aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-custom-deep-blue dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <InputField
                  name="monthlyUnits"
                  label={e.monthlyUsage}
                  helperText={e.monthlyUsageHelper}
                  suffix="units"
                  error={errors.monthlyUnits?.message}
                  register={register('monthlyUnits', { valueAsNumber: true })}
                  accentClass="from-primary via-custom-orange to-custom-red"
                  placeholder="360"
                />

                <InputField
                  name="installationCostPerKw"
                  label={e.installationCost}
                  helperText={e.installationCostHelper}
                  suffix="per kW"
                  error={errors.installationCostPerKw?.message}
                  register={register('installationCostPerKw', { valueAsNumber: true })}
                  accentClass="from-custom-blue via-primary to-custom-violet"
                  placeholder="54300"
                />

                <InputField
                  name="sellingPricePerKw"
                  label={e.sellingPrice}
                  helperText={e.sellingPriceHelper}
                  suffix="per kW"
                  error={errors.sellingPricePerKw?.message}
                  register={register('sellingPricePerKw', { valueAsNumber: true })}
                  accentClass="from-custom-red via-custom-orange to-primary"
                  placeholder="65000"
                />
              </div>

              {!isValid && (
                <div className="rounded-3xl border border-rose-200/80 bg-rose-50/80 px-4 py-4 text-rose-700 dark:border-rose-500/20 dark:bg-rose-950/40 dark:text-rose-200">
                  {e.pleaseFix}
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <ResultCard
                  title={e.recommendedCapacityLabel}
                  value={calculation ? `${calculation.recommendedKw} kW` : '—'}
                  detail="Rounded from monthly usage"
                  accentClass="from-primary/15 to-custom-orange/10"
                />
                <ResultCard
                  title={e.subsidyBand}
                  value={calculation ? currency(calculation.subsidy) : '—'}
                  detail="Based on the system band"
                  accentClass="from-custom-blue/15 to-primary/10"
                />
                <ResultCard
                  title={e.profitMargin}
                  value={calculation ? `${calculation.profitMargin.toFixed(1)}%` : '—'}
                  detail={calculation ? `${calculation.profitMargin.toFixed(1)}% margin` : 'Ready after validation'}
                  accentClass="from-custom-red/15 to-custom-violet/10"
                />
                <ResultCard
                  title={e.recommendedCapacity}
                  value={calculation ? `${calculation.recommendedKw} kW` : '—'}
                  detail={calculation ? `${calculation.profitMargin.toFixed(1)}% margin` : 'Ready after validation'}
                  accentClass="from-emerald-500/15 to-amber-500/10"
                  valueTone={calculation?.profitTone}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 lg:sticky lg:top-28 self-start">
            <Card className="overflow-hidden border-white/70 bg-white/82 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
              <CardContent className="space-y-6 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                      {e.liveOutput}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-custom-deep-blue dark:text-white">
                      {e.projectedSolarProfile}
                    </h2>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ring-1 ${calculation?.badgeTone ?? 'bg-slate-500/10 text-slate-600 ring-slate-500/20 dark:text-slate-300'}`}
                  >
                    {calculation?.profitStatus ?? e.pending}
                  </div>
                </div>

                {calculation ? (
                  <>
                    <div className="rounded-[1.75rem] bg-linear-to-br from-primary/15 via-white to-custom-blue/10 p-5 dark:from-primary/10 dark:via-slate-950 dark:to-custom-blue/10">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {e.recommendedCapacityLabel}
                      </p>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-5xl font-semibold tracking-tight text-custom-deep-blue dark:text-white">
                          {calculation.recommendedKw}
                        </span>
                        <span className="mb-1 text-lg font-medium text-slate-500 dark:text-slate-300">
                          kW
                        </span>
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {e.basedOnUsage}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <ResultCard
                        title={e.totalSystemSellingPrice}
                        value={currency(calculation.totalSellingPrice)}
                        detail={e.beforeSubsidy}
                        accentClass="from-primary/10 to-custom-orange/10"
                      />
                      <ResultCard
                        title={e.totalInstallationCost}
                        value={currency(calculation.totalInstallationCost)}
                        detail={e.projectSideCost}
                        accentClass="from-custom-blue/10 to-custom-violet/10"
                      />
                      <ResultCard
                        title={e.profitMargin}
                        value={`${calculation.profitMargin.toFixed(1)}%`}
                        detail="Higher is healthier"
                        accentClass="from-emerald-500/10 to-primary/10"
                        valueTone={calculation.profitTone}
                      />
                      <ResultCard
                        title={e.netSubsidyBand}
                        value={calculation.subsidy >= 78000 ? '3 kW +' : `${calculation.recommendedKw} kW`}
                        detail={e.matchedEstimate}
                        accentClass="from-custom-red/10 to-primary/10"
                      />
                    </div>
                  </>
                ) : (
                  <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50/80 p-6 text-slate-500 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300">
                    {e.updateInputs}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/70 bg-linear-to-br from-white via-slate-50 to-primary/10 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-primary/10">
              <CardContent className="space-y-5 p-6 sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                    {e.subsidyLadder}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-custom-deep-blue dark:text-white">
                    {e.quickPricingBands}
                  </h3>
                </div>

                <div className="space-y-3">
                  {subsidyTiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-start justify-between gap-4 rounded-[1.25rem] border border-white/70 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/55"
                    >
                      <div>
                        <p className="text-lg font-semibold text-custom-deep-blue dark:text-white">
                          {tier.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-300">
                          {tier.note}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-custom-deep-blue dark:bg-primary/15 dark:text-primary-200">
                        {tier.subsidy}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Card className="overflow-hidden border-white/70 bg-white/82 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                {e.calculationLogic}
              </p>
              <h3 className="text-2xl font-semibold text-custom-deep-blue dark:text-white">
                {e.whatEstimateIncludes}
              </h3>
              <div className="space-y-3">
                {e.formulaNotes.map((note, index) => (
                  <div
                    key={note}
                    className="flex gap-4 rounded-[1.25rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-custom-deep-blue dark:bg-primary/15 dark:text-primary-200">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white/70 bg-linear-to-br from-custom-deep-blue via-slate-900 to-custom-blue shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10">
            <CardContent className="space-y-5 p-6 sm:p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">
                {e.nextStep}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {e.turnEstimateIntoQuote}
              </h3>
              <p className="text-sm leading-7 text-white/75">
                {e.nextStepCopy}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-custom-deep-blue transition-transform duration-200 hover:scale-[1.02] hover:bg-primary hover:text-white"
                >
                  {e.contactTeam}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/15"
                >
                  {e.exploreServices}
                </Link>
              </div>
            </CardContent>
          </Card>
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
    <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-950/40">
      <div className={`h-1.5 rounded-full bg-linear-to-r ${accentClass}`} aria-hidden="true" />
      <div className="mt-4 flex items-center justify-between gap-3">
        <label htmlFor={name} className="text-sm font-semibold text-custom-deep-blue dark:text-white">
          {label}
        </label>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:bg-white/5 dark:text-slate-300">
          {suffix}
        </span>
      </div>
      <input
        id={name}
        type="number"
        inputMode="numeric"
        placeholder={placeholder}
        {...register}
        className={`mt-3 w-full rounded-2xl border px-4 py-3 text-base text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 dark:text-white ${error ? 'border-rose-400 bg-rose-50/70 dark:border-rose-500/40 dark:bg-rose-950/25' : 'border-slate-200 bg-slate-50/80 dark:border-white/10 dark:bg-slate-950/50'}`}
      />
      <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {helperText}
      </p>
      {error && (
        <p className="mt-2 text-sm font-medium text-rose-600 dark:text-rose-300">
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
  valueTone = 'text-custom-deep-blue dark:text-white',
}: ResultCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/82 p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/45">
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accentClass}`} aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <p className={`mt-3 text-2xl font-semibold tracking-tight ${valueTone}`}>
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {detail}
      </p>
    </div>
  )
}