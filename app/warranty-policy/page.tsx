'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'

const createWarrantyPolicySchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.warrantyPolicy.validation) => z.object({
  ...createBusinessContactSchema(validation).shape,
  projectName: z.string().trim().min(3, validation.projectName),
  productLine: z.string().min(1, validation.productLine),
  warrantyStart: z.string().min(1, validation.warrantyStart),
  servicePlan: z.string().min(1, validation.servicePlan),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: validation.acceptTerms,
  }),
})

type WarrantyPolicyFormValues = z.infer<ReturnType<typeof createWarrantyPolicySchema>>

export default function WarrantyPolicyPage() {
  const { t } = useLocale()
  const content = t.businessForms.warrantyPolicy
  const defaultValues = content.defaultValues
  const { labels } = content
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<WarrantyPolicyFormValues>({
    resolver: zodResolver(createWarrantyPolicySchema(content.validation)),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: WarrantyPolicyFormValues) => {
    let referenceCode: string
    try {
      referenceCode = await submitWebsiteForm('warranty_policy', data)
    } catch {
      setSubmitFeedback({ type: 'error', message: t.formSubmission.error })
      return
    }

    const emailText = content.email
    const subject = emailText.subject.replace('{projectName}', data.projectName)
    const body = [
      emailText.title,
      emailText.separator,
      '',
      `${emailText.customerName}: ${data.customerName}`,
      `${emailText.companyName}: ${data.companyName || emailText.notProvided}`,
      `${emailText.email}: ${data.email}`,
      `${emailText.phone}: ${data.phone}`,
      `${emailText.projectName}: ${data.projectName}`,
      `${emailText.productLine}: ${data.productLine}`,
      `${emailText.warrantyStart}: ${data.warrantyStart}`,
      `${emailText.servicePlan}: ${data.servicePlan}`,
      '',
      emailText.termsAccepted,
    ].join('\n')

    submitMailtoForm({ to: 'customercare@aerosunenergy.in', subject, body })
    reset(defaultValues)
    setSubmitFeedback({
      type: 'success',
      message: `${content.feedback.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`,
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_14%),linear-gradient(180deg,#f8fafc_0%,#edf6ff_34%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="overflow-hidden rounded-[28px] border border-sky-200 bg-white/90 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.45)] backdrop-blur-sm"
        >
          <header className="bg-linear-to-r from-[#0b1e46] via-[#123b72] to-[#0d6d8d] px-5 py-5 text-white sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl font-black shadow-[0_18px_40px_-18px_rgba(255,255,255,0.8)]">
                  W
                </div>
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.36em] text-sky-100/80">{labels.badge}</p>
                  <h1 className="mt-1 text-2xl font-black tracking-[0.06em] sm:text-3xl">{labels.title}</h1>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-sky-100">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                {labels.support}
              </div>
            </div>
          </header>

          <div className="space-y-5 p-4 sm:p-6 lg:p-7">
            <div className="grid gap-5 lg:grid-cols-2">
              <Field
                label={labels.fields.customerName.label}
                name="customerName"
                placeholder={labels.fields.customerName.placeholder}
                register={register}
                error={errors.customerName}
                accent="sky"
              />

              <Field
                label={labels.fields.companyName.label}
                name="companyName"
                placeholder={labels.fields.companyName.placeholder}
                register={register}
                error={errors.companyName}
                accent="emerald"
              />

              <Field
                label={labels.fields.email.label}
                name="email"
                type="email"
                placeholder={labels.fields.email.placeholder}
                register={register}
                error={errors.email}
                accent="cyan"
              />

              <Field
                label={labels.fields.phone.label}
                name="phone"
                type="tel"
                placeholder={labels.fields.phone.placeholder}
                register={register}
                error={errors.phone}
                accent="blue"
              />

              <Field
                label={labels.fields.projectName.label}
                name="projectName"
                placeholder={labels.fields.projectName.placeholder}
                register={register}
                error={errors.projectName}
                accent="indigo"
              />

              <div>
                <label htmlFor="productLine" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                  {labels.fields.productLine.label}
                </label>
                <select
                  id="productLine"
                  {...register('productLine')}
                  aria-invalid={Boolean(errors.productLine)}
                  aria-describedby={errors.productLine ? 'productLine-error' : undefined}
                  className="h-12 w-full rounded-2xl border border-sky-200 bg-sky-50/70 px-4 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">{labels.fields.productLine.placeholder}</option>
                  {labels.productOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                {errors.productLine && <p id="productLine-error" className="mt-2 text-md text-rose-600">{errors.productLine.message}</p>}
              </div>

              <Field
                label={labels.fields.warrantyStart.label}
                name="warrantyStart"
                type="date"
                register={register}
                error={errors.warrantyStart}
                accent="emerald"
              />

              <div>
                <label htmlFor="servicePlan" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                  {labels.fields.servicePlan.label}
                </label>
                <select
                  id="servicePlan"
                  {...register('servicePlan')}
                  aria-invalid={Boolean(errors.servicePlan)}
                  aria-describedby={errors.servicePlan ? 'servicePlan-error' : undefined}
                  className="h-12 w-full rounded-2xl border border-emerald-200 bg-emerald-50/70 px-4 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">{labels.fields.servicePlan.placeholder}</option>
                  {labels.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                {errors.servicePlan && <p id="servicePlan-error" className="mt-2 text-md text-rose-600">{errors.servicePlan.message}</p>}
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-sky-50 p-4">
              <label className="flex items-start gap-3 text-md leading-6 text-slate-700">
                <input
                  type="checkbox"
                  {...register('acceptTerms')}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span className="font-medium">
                  {labels.fields.acceptTerms}
                </span>
              </label>
              {errors.acceptTerms && <p className="mt-2 text-md text-rose-600">{errors.acceptTerms.message}</p>}
            </div>

            <FormDataNotice />
            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.24em] text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {labels.serviceConfirmation}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-md font-black uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? t.formSubmission.saving : labels.submit}
              </button>

              {submitFeedback ? (
                <p className={`text-md font-medium ${submitFeedback.type === 'success' ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {submitFeedback.message}
                </p>
              ) : isSubmitSuccessful && (
                <p className="text-md font-medium text-emerald-700">{content.feedback.success}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name: keyof WarrantyPolicyFormValues
  placeholder?: string
  type?: string
  register: ReturnType<typeof useForm<WarrantyPolicyFormValues>>['register']
  error?: { message?: string }
  accent?: 'sky' | 'emerald' | 'cyan' | 'blue' | 'indigo'
}

function Field({ label, name, placeholder, type = 'text', register, error, accent = 'sky' }: FieldProps) {
  const { t } = useLocale()
  const accentClasses = t.componentData.warrantyPolicy.fieldAccentClasses

  return (
    <SharedFormField
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      register={register}
      error={error}
      labelClassName="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700"
      inputClassName={`h-12 w-full rounded-2xl border px-4 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-4 ${accentClasses[accent]}`}
      errorClassName="mt-2 text-md text-rose-600"
    />
  )
}
