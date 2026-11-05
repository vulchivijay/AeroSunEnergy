'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { trackGoogleAdsConversion } from '@/lib/googleAdsConversion'
import { useId, useState, type FocusEventHandler } from 'react'
import { validateZeroBounceEmail } from '@/lib/emailValidation'
import FormWarningRibbon from '@/app/components/ui/FormWarningRibbon'
import { useLocale } from '@/lib/LocaleContext'

const createQuotationSchema = (validation: {
  customerNameRequired: string
  emailInvalid: string
  riskyEmail: string
  phoneMinLength: string
  phoneInvalid: string
  projectTypeRequired: string
  siteLocationRequired: string
  systemCapacityRequired: string
  estimatedBudgetRequired: string
  scopeRequired: string
  termsRequired: string
}) => z.object({
  customerName: z.string().trim().min(2, validation.customerNameRequired),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email(validation.emailInvalid),
  phone: z
    .string()
    .trim()
    .min(10, validation.phoneMinLength)
    .regex(/^[0-9+()\-\s]+$/, validation.phoneInvalid),
  projectType: z.string().min(1, validation.projectTypeRequired),
  siteLocation: z.string().trim().min(3, validation.siteLocationRequired),
  systemCapacity: z.string().trim().min(1, validation.systemCapacityRequired),
  estimatedBudget: z.string().trim().min(1, validation.estimatedBudgetRequired),
  scope: z.string().trim().min(20, validation.scopeRequired),
  terms: z.string().min(1, validation.termsRequired),
})

export type StandardQuotationValues = z.infer<ReturnType<typeof createQuotationSchema>>

export const defaultQuotationValues: StandardQuotationValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  projectType: '',
  siteLocation: '',
  systemCapacity: '',
  estimatedBudget: '',
  scope: '',
  terms: '',
}

export function StandardQuotationTemplate() {
  const { t } = useLocale()
  const text = t.quotationTemplate
  const quotationSchema = createQuotationSchema(text.validation)
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<StandardQuotationValues>({
    resolver: zodResolver(quotationSchema),
    defaultValues: defaultQuotationValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const handleEmailBlur: FocusEventHandler<HTMLInputElement> = async (event) => {
    const email = event.currentTarget.value.trim()
    if (!email) {
      clearErrors('email')
      return
    }

    const isAllowed = await validateZeroBounceEmail(email)
    if (!isAllowed) {
      setError('email', {
        type: 'manual',
        message: text.validation.riskyEmail,
      })
      return
    }

    clearErrors('email')
  }

  const onSubmit = async (data: StandardQuotationValues) => {
    const isAllowed = await validateZeroBounceEmail(data.email)
    if (!isAllowed) {
      setError('email', {
        type: 'manual',
        message: text.validation.riskyEmail,
      })
      return
    }

    const subject = `${text.email.subject} - ${data.customerName}`
    const body = [
      text.email.title,
      text.email.divider,
      '',
      `${text.email.customerName}: ${data.customerName}`,
      `${text.email.companyName}: ${data.companyName || text.email.notProvided}`,
      `${text.email.email}: ${data.email}`,
      `${text.email.phone}: ${data.phone}`,
      `${text.email.projectType}: ${data.projectType}`,
      `${text.email.siteLocation}: ${data.siteLocation}`,
      `${text.email.systemCapacity}: ${data.systemCapacity}`,
      `${text.email.estimatedBudget}: ${data.estimatedBudget}`,
      '',
      text.email.scope,
      data.scope,
      '',
      `${text.email.termsAccepted}: ${data.terms}`,
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    if (opened) {
      trackGoogleAdsConversion()
    }

    reset(defaultQuotationValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? text.feedback.success : text.feedback.error,
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfeff_24%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FormWarningRibbon />
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 shadow-[0_26px_90px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-[#123c72] bg-linear-to-r from-[#0b1d4d] via-[#143d72] to-[#0d5a80] p-4 text-white shadow-[0_25px_60px_-32px_rgba(15,68,120,0.9)] sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl font-black">
                    {text.header.mark}
                  </div>
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.38em] text-cyan-200/85">{text.header.eyebrow}</p>
                    <h1 className="mt-1 text-2xl font-black tracking-[0.06em] sm:text-3xl">{text.header.title}</h1>
                  </div>
                </div>

                <div className="grid gap-2 text-right text-md sm:grid-cols-3 lg:min-w-[420px]">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-cyan-100/80">{text.header.numberLabel}</p>
                    <p className="mt-1 font-semibold">{text.header.numberValue}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-cyan-100/80">{text.header.dateLabel}</p>
                    <p className="mt-1 font-semibold">{text.header.datePlaceholder}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-cyan-100/80">{text.header.validTillLabel}</p>
                    <p className="mt-1 font-semibold">{text.header.datePlaceholder}</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-3">
              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f2f8ff] via-white to-[#effaf4] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.companyDetails}</h2>
                </div>

                <div className="space-y-4 text-md text-slate-700">
                  <div className="space-y-2">
                    <Field
                      label={text.fields.companyName}
                      name="companyName"
                      placeholder={text.placeholders.companyName}
                      register={register}
                      error={errors.companyName}
                      compact
                    />
                    <Field
                      label={text.fields.customerName}
                      name="customerName"
                      placeholder={text.placeholders.customerName}
                      register={register}
                      error={errors.customerName}
                      compact
                    />
                    <Field
                      label={text.fields.email}
                      name="email"
                      type="email"
                      placeholder={text.placeholders.email}
                      register={register}
                      error={errors.email}
                      compact
                      onBlur={handleEmailBlur}
                    />
                    <Field
                      label={text.fields.phone}
                      name="phone"
                      type="tel"
                      placeholder={text.placeholders.phone}
                      register={register}
                      error={errors.phone}
                      compact
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f6f9ff] via-white to-[#f5fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.customerDetails}</h2>
                </div>

                <div className="space-y-4">
                  <Field
                    label={text.fields.name}
                    name="customerName"
                    placeholder={text.placeholders.fullName}
                    register={register}
                    error={errors.customerName}
                    compact
                  />
                  <Field
                    label={text.fields.address}
                    placeholder={text.placeholders.address}
                    register={register}
                    compact
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={text.fields.city}
                      placeholder={text.placeholders.city}
                      register={register}
                      compact
                    />
                    <Field
                      label={text.fields.pinCode}
                      placeholder={text.placeholders.pinCode}
                      register={register}
                      compact
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={text.fields.phone}
                      name="phone"
                      type="tel"
                      placeholder={text.placeholders.phone}
                      register={register}
                      error={errors.phone}
                      compact
                    />
                    <Field
                      label={text.fields.email}
                      name="email"
                      type="email"
                      placeholder={text.placeholders.emailShort}
                      register={register}
                      error={errors.email}
                      compact
                      onBlur={handleEmailBlur}
                    />
                  </div>
                  <Field
                    label={text.fields.gstin}
                    placeholder={text.placeholders.gstin}
                    register={register}
                    compact
                  />
                </div>
              </section>

              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f4fff9] via-white to-[#f5f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.projectDetails}</h2>
                </div>

                <div className="space-y-4">
                  <fieldset>
                    <legend className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">{text.fields.projectType}</legend>
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/80 p-3">
                      {text.projectTypes.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-md font-medium text-slate-700">
                          <input type="radio" value={option.value} {...register('projectType')} aria-describedby={errors.projectType ? 'projectType-error' : undefined} className="h-4 w-4 accent-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700" />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <p id="projectType-error" className="mt-2 text-md text-rose-600">{errors.projectType.message}</p>}
                  </fieldset>

                  <Field
                    label={text.fields.siteAddress}
                    name="siteLocation"
                    placeholder={text.placeholders.siteAddress}
                    register={register}
                    error={errors.siteLocation}
                    compact
                  />
                  <Field
                    label={text.fields.city}
                    placeholder={text.placeholders.city}
                    register={register}
                    compact
                  />
                  <Field
                    label={text.fields.systemCapacity}
                    name="systemCapacity"
                    placeholder={text.placeholders.systemCapacity}
                    register={register}
                    error={errors.systemCapacity}
                    compact
                  />
                  <Field
                    label={text.fields.specialRequirements}
                    placeholder={text.placeholders.specialRequirements}
                    register={register}
                    compact
                  />
                </div>
              </section>
            </div>

            <section className="overflow-hidden rounded-[24px] border border-blue-200 bg-linear-to-br from-[#edf9ff] via-[#f4fbff] to-[#eefdf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="border-b border-blue-200 bg-linear-to-r from-[#0d2f65] via-[#103d77] to-[#0c5f87] px-4 py-3 text-left text-lg font-black tracking-[0.04em] text-white sm:px-5">
                {text.sections.scopeOfSupply}
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 text-left text-md">
                  <thead className="bg-blue-50 text-[12px] font-black uppercase tracking-[0.18em] text-slate-700">
                    <tr>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.serialNumber}</th>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.description}</th>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.specification}</th>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.quantity}</th>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.unit}</th>
                      <th className="border-r border-blue-200 px-3 py-3">{text.scopeTable.unitPrice}</th>
                      <th className="px-3 py-3">{text.scopeTable.amount}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/80 text-slate-700">
                    {text.scopeTable.items.map((item, index) => (
                      <tr key={item} className="border-b border-blue-100 last:border-b-0">
                        <td className="border-r border-blue-100 px-3 py-3 text-center font-semibold">{index + 1}</td>
                        <td className="border-r border-blue-100 px-3 py-3">{item}</td>
                        <td className="border-r border-blue-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></td>
                        <td className="border-r border-blue-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></td>
                        <td className="border-r border-blue-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></td>
                        <td className="border-r border-blue-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></td>
                        <td className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-5 lg:grid-cols-2">
              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#ecfff5] via-white to-[#f5fff8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-emerald-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.commercialSummary}</h2>
                </div>

                <div className="space-y-3 text-md">
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.exWorkPrice}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.symbol}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.supplyInstallationCharges}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.symbol}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.subTotal}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.symbol}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.gst}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.symbol}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.projectCost}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.symbol}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.governmentSubsidy}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.deduction}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">{text.commercialSummary.specialDiscount}</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">{text.currency.deduction}</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 px-2 py-2 font-black text-emerald-900">
                    <span>{text.commercialSummary.grandTotal}</span>
                    <div className="rounded-xl border border-emerald-300 bg-white px-3 py-2 text-right">{text.currency.symbol}</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffdf8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-amber-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.paymentTerms}</h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                  <div className="grid grid-cols-[60px_1.5fr_1fr_1fr] border-b border-amber-200 bg-amber-50 text-[12px] font-black uppercase tracking-[0.18em] text-slate-700">
                    <div className="px-3 py-3">{text.paymentTable.serialNumber}</div>
                    <div className="px-3 py-3">{text.paymentTable.milestone}</div>
                    <div className="px-3 py-3">{text.paymentTable.percentage}</div>
                    <div className="px-3 py-3">{text.paymentTable.amount}</div>
                  </div>
                  {text.paymentTable.milestones.map((milestone, index) => (
                    <div key={milestone} className="grid grid-cols-[60px_1.5fr_1fr_1fr] border-b border-amber-100 last:border-b-0 text-md text-slate-700">
                      <div className="border-r border-amber-100 px-3 py-3 font-semibold">{index + 1}</div>
                      <div className="border-r border-amber-100 px-3 py-3">{milestone}</div>
                      <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></div>
                      <div className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></div>
                    </div>
                  ))}
                  <div className="grid grid-cols-[60px_1.5fr_1fr_1fr] bg-amber-50 text-md font-black text-slate-800">
                    <div className="px-3 py-3">{text.paymentTable.total}</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">{text.paymentTable.totalPercentage}</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">{text.paymentTable.emptyValue}</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">{text.paymentTable.emptyValue}</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
              <section className="rounded-[24px] border border-yellow-200 bg-linear-to-br from-[#fffdea] via-white to-[#fffef8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-yellow-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.termsAndConditions}</h2>
                </div>

                <ol className="space-y-2 text-md leading-6 text-slate-700">
                  {text.terms.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-[12px] font-black text-slate-900">{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#edfdf5] via-white to-[#f8fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-emerald-200 pb-3">
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{text.sections.acceptance}</h2>
                </div>

                <div className="space-y-4 text-md text-slate-700">
                  <p>{text.acceptance.statement}</p>
                  <div className="space-y-3">
                    <Field
                      label={text.fields.customerName}
                      placeholder={text.placeholders.customerNameShort}
                      register={register}
                      compact
                    />
                    <Field
                      label={text.fields.signature}
                      placeholder={text.placeholders.signature}
                      register={register}
                      compact
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label={text.fields.date}
                        placeholder={text.placeholders.date}
                        register={register}
                        compact
                      />
                      <Field
                        label={text.fields.place}
                        placeholder={text.placeholders.place}
                        register={register}
                        compact
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-start gap-3 text-md font-medium text-slate-700">
                <input
                  type="checkbox"
                  {...register('terms')}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span>{text.termsAgreement}</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#0d5a80] via-[#123f74] to-[#0a2d5a] px-6 py-3 text-md font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_30px_-18px_rgba(15,63,116,0.9)] transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? text.buttons.sending : text.buttons.submit}
              </button>
            </div>

            {submitFeedback ? (
              <p className={`rounded-2xl border px-4 py-3 text-md font-medium ${submitFeedback.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                {submitFeedback.message}
              </p>
            ) : isSubmitSuccessful && (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-md font-medium text-emerald-700">
                {text.feedback.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name?: keyof StandardQuotationValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<StandardQuotationValues>>['register']
  error?: { message?: string }
  compact?: boolean
  onBlur?: FocusEventHandler<HTMLInputElement>
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false, onBlur }: FieldProps) {
  const generatedId = useId()
  const fieldId = name ?? generatedId

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={fieldId} className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        {...(name ? register(name, { onBlur }) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      />
      {error && <p id={`${fieldId}-error`} className="mt-2 text-md text-rose-600">{error.message}</p>}
    </div>
  )
}
