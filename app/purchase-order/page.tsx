'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useLocale } from '@/lib/LocaleContext'

const createPurchaseOrderSchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.purchaseOrder.validation) => z.object({
  customerName: z.string().trim().min(2, validation.customerName),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email(validation.email),
  phone: z
    .string()
    .trim()
    .min(10, validation.phoneLength)
    .regex(/^[0-9+()\-\s]+$/, validation.phoneFormat),
  poNumber: z.string().trim().min(2, validation.poNumber),
  projectTitle: z.string().trim().min(3, validation.projectTitle),
  supplierName: z.string().trim().min(2, validation.supplierName),
  productLine: z.string().min(1, validation.productLine),
  quantity: z.string().trim().min(1, validation.quantity),
  unitPrice: z.string().trim().min(1, validation.unitPrice),
  totalValue: z.string().trim().min(1, validation.totalValue),
  deliverySchedule: z.string().trim().min(3, validation.deliverySchedule),
  warranty: z.string().trim().min(3, validation.warranty),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: validation.termsAccepted,
  }),
})

type PurchaseOrderFormValues = z.infer<ReturnType<typeof createPurchaseOrderSchema>>

export default function PurchaseOrderPage() {
  const { t } = useLocale()
  const content = t.businessForms.purchaseOrder
  const defaultValues = content.defaultValues
  const { labels } = content
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PurchaseOrderFormValues>({
    resolver: zodResolver(createPurchaseOrderSchema(content.validation)),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: PurchaseOrderFormValues) => {
    const emailText = content.email
    const subject = emailText.subject.replace('{poNumber}', data.poNumber)
    const body = [
      emailText.title,
      emailText.separator,
      '',
      `${emailText.customerName}: ${data.customerName}`,
      `${emailText.companyName}: ${data.companyName || emailText.notProvided}`,
      `${emailText.email}: ${data.email}`,
      `${emailText.phone}: ${data.phone}`,
      `${emailText.poNumber}: ${data.poNumber}`,
      `${emailText.projectTitle}: ${data.projectTitle}`,
      `${emailText.supplierName}: ${data.supplierName}`,
      `${emailText.productLine}: ${data.productLine}`,
      `${emailText.quantity}: ${data.quantity}`,
      `${emailText.unitPrice}: ${data.unitPrice}`,
      `${emailText.totalValue}: ${data.totalValue}`,
      `${emailText.deliverySchedule}: ${data.deliverySchedule}`,
      `${emailText.warranty}: ${data.warranty}`,
      '',
      emailText.termsAccepted,
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? content.feedback.success : content.feedback.error,
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_28%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-sm">
            {labels.badge}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[0.06em] text-slate-900 sm:text-5xl">
            {labels.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {labels.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.summary.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.summary.text}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.commercialTerms.title}</h2>
                  <div className="mt-3 space-y-3 text-md leading-7 text-slate-600">
                    {labels.sections.commercialTerms.items.map((item) => <p key={item.label}><span className="font-semibold text-slate-800">{item.label}</span> {item.text}</p>)}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.delivery.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.delivery.text}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.warranty.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.warranty.text}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.riskCompliance.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.riskCompliance.text}
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-emerald-100 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-emerald-200">{labels.formTitle}</p>
              <h2 className="mt-3 text-2xl font-semibold">{labels.formHeading}</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field
                  label={labels.fields.customerName.label}
                  name="customerName"
                  placeholder={labels.fields.customerName.placeholder}
                  register={register}
                  error={errors.customerName}
                />

                <Field
                  label={labels.fields.companyName.label}
                  name="companyName"
                  placeholder={labels.fields.companyName.placeholder}
                  register={register}
                  error={errors.companyName}
                />

                <Field
                  label={labels.fields.email.label}
                  name="email"
                  type="email"
                  placeholder={labels.fields.email.placeholder}
                  register={register}
                  error={errors.email}
                />

                <Field
                  label={labels.fields.phone.label}
                  name="phone"
                  type="tel"
                  placeholder={labels.fields.phone.placeholder}
                  register={register}
                  error={errors.phone}
                />

                <Field
                  label={labels.fields.poNumber.label}
                  name="poNumber"
                  placeholder={labels.fields.poNumber.placeholder}
                  register={register}
                  error={errors.poNumber}
                />

                <Field
                  label={labels.fields.projectTitle.label}
                  name="projectTitle"
                  placeholder={labels.fields.projectTitle.placeholder}
                  register={register}
                  error={errors.projectTitle}
                />

                <Field
                  label={labels.fields.supplierName.label}
                  name="supplierName"
                  placeholder={labels.fields.supplierName.placeholder}
                  register={register}
                  error={errors.supplierName}
                />

                <div>
                  <label htmlFor="productLine" className="mb-2 block text-md font-semibold text-slate-100">
                    {labels.fields.productLine.label}
                  </label>
                  <select
                    id="productLine"
                    {...register('productLine')}
                    aria-invalid={Boolean(errors.productLine)}
                    aria-describedby={errors.productLine ? 'productLine-error' : undefined}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
                  >
                    <option value="" className="text-slate-900">{labels.fields.productLine.placeholder}</option>
                    {labels.productOptions.map((option) => <option key={option} value={option} className="text-slate-900">{option}</option>)}
                  </select>
                  {errors.productLine && <p id="productLine-error" className="mt-2 text-md text-rose-300">{errors.productLine.message}</p>}
                </div>

                <Field
                  label={labels.fields.quantity.label}
                  name="quantity"
                  placeholder={labels.fields.quantity.placeholder}
                  register={register}
                  error={errors.quantity}
                />

                <Field
                  label={labels.fields.unitPrice.label}
                  name="unitPrice"
                  placeholder={labels.fields.unitPrice.placeholder}
                  register={register}
                  error={errors.unitPrice}
                />

                <Field
                  label={labels.fields.totalValue.label}
                  name="totalValue"
                  placeholder={labels.fields.totalValue.placeholder}
                  register={register}
                  error={errors.totalValue}
                />

                <Field
                  label={labels.fields.deliverySchedule.label}
                  name="deliverySchedule"
                  placeholder={labels.fields.deliverySchedule.placeholder}
                  register={register}
                  error={errors.deliverySchedule}
                />

                <Field
                  label={labels.fields.warranty.label}
                  name="warranty"
                  placeholder={labels.fields.warranty.placeholder}
                  register={register}
                  error={errors.warranty}
                />

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('termsAccepted')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>
                    {labels.fields.termsAccepted}
                  </span>
                </label>
                {errors.termsAccepted && <p className="text-md text-rose-300">{errors.termsAccepted.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-md font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? labels.submitting : labels.submit}
                </button>

                {submitFeedback ? (
                  <p className={`text-md font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {submitFeedback.message}
                  </p>
                ) : isSubmitSuccessful && (
                  <p className="text-md font-medium text-emerald-300">{content.feedback.success}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name: keyof PurchaseOrderFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<PurchaseOrderFormValues>>['register']
  error?: { message?: string }
}

function Field({ label, name, placeholder, type = 'text', register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-md font-semibold text-slate-100">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
      />
      {error && <p id={`${name}-error`} className="mt-2 text-md text-rose-300">{error.message}</p>}
    </div>
  )
}
