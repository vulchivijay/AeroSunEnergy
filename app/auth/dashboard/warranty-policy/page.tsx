'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'
import { getFirstFormErrorMessage } from '@/lib/formValidation'
import { useToast } from '@/app/components/ui/ToastContext'

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
  const toast = useToast()
  const content = t.businessForms.warrantyPolicy
  const defaultValues = content.defaultValues
  const { labels } = content
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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
      toast.error(t.formSubmission.error)
      return
    }

    reset(defaultValues)
    toast.success(`${content.feedback.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_14%),linear-gradient(180deg,#f8fafc_0%,#edf6ff_34%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <form
          onSubmit={handleSubmit(onSubmit, (formErrors) => toast.error(getFirstFormErrorMessage(formErrors) ?? t.formSubmission.error))}
          noValidate
          className="overflow-hidden rounded-xl border border-sky-200 bg-white/90 shadow-sm backdrop-blur-sm"
        >
          <header className="bg-linear-to-r from-[#0b1e46] via-[#123b72] to-[#0d6d8d] px-5 py-5 text-white sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700 bg-white/10 text-xl font-bold shadow-sm tracking-normal">
                  W
                </div>
                <div>
                  <p className="uppercase text-sky-100/80 text-xs font-semibold tracking-wide leading-5">{labels.badge}</p>
                  <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">{labels.title}</h1>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-xs uppercase text-sky-100 text-xs font-semibold tracking-wide leading-5">
                <span className="shrink-0 h-2 w-2 rounded-full bg-current shadow-sm" />
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
                <label htmlFor="productLine" className="mb-2 block text-xs uppercase text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                  {labels.fields.productLine.label}
                </label>
                <select
                  id="productLine"
                  {...register('productLine')}
                  aria-invalid={Boolean(errors.productLine)}
                  aria-describedby={errors.productLine ? 'productLine-error' : undefined}
                  className="h-12 w-full rounded-lg border border-sky-200 bg-sky-50/70 px-4 text-base text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">{labels.fields.productLine.placeholder}</option>
                  {labels.productOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                {errors.productLine && <p id="productLine-error" className="mt-2 text-rose-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.productLine.message}</p>}
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
                <label htmlFor="servicePlan" className="mb-2 block text-xs uppercase text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                  {labels.fields.servicePlan.label}
                </label>
                <select
                  id="servicePlan"
                  {...register('servicePlan')}
                  aria-invalid={Boolean(errors.servicePlan)}
                  aria-describedby={errors.servicePlan ? 'servicePlan-error' : undefined}
                  className="h-12 w-full rounded-lg border border-emerald-200 bg-emerald-50/70 px-4 text-base text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">{labels.fields.servicePlan.placeholder}</option>
                  {labels.serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                {errors.servicePlan && <p id="servicePlan-error" className="mt-2 text-rose-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.servicePlan.message}</p>}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-sky-50 p-4">
              <label className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                <input
                  type="checkbox"
                  {...register('acceptTerms')}
                  className="mt-1 h-4 w-4 rounded-lg border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span className="font-medium tracking-normal">
                  {labels.fields.acceptTerms}
                </span>
              </label>
              {errors.acceptTerms && <p className="mt-2 text-rose-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.acceptTerms.message}</p>}
            </div>

            <FormDataNotice />
            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {labels.serviceConfirmation}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-60 text-sm font-semibold tracking-wide leading-5"
              >
                {isSubmitting ? t.formSubmission.saving : labels.submit}
              </button>

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
      labelClassName="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wide leading-5 text-slate-700"
      inputClassName={`h-12 w-full rounded-lg border px-4 text-sm sm:text-base font-normal tracking-normal leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-4 ${accentClasses[accent]}`}
      errorClassName="mt-2 text-xs sm:text-sm font-normal tracking-normal leading-5 text-rose-600"
    />
  )
}
