'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoFormAndReset } from '@/lib/submitMailto'
import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'

const createInvoiceSchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.invoiceReceipt.validation) => z.object({
  ...createBusinessContactSchema(validation).shape,
  invoiceNumber: z.string().trim().min(2, validation.invoiceNumber),
  projectName: z.string().trim().min(3, validation.projectName),
  invoiceDate: z.string().min(1, validation.invoiceDate),
  amount: z.string().trim().min(1, validation.amount),
  paymentMode: z.string().min(1, validation.paymentMode),
  receiptNote: z.string().trim().min(10, validation.receiptNote),
  paymentReceived: z.boolean().refine((value) => value === true, {
    message: validation.paymentReceived,
  }),
})

type InvoiceFormValues = z.infer<ReturnType<typeof createInvoiceSchema>>

export default function InvoiceReceiptPage() {
  const { t } = useLocale()
  const content = t.businessForms.invoiceReceipt
  const defaultValues = content.defaultValues
  const { labels } = content
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(createInvoiceSchema(content.validation)),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: InvoiceFormValues) => {
    const emailText = content.email
    const subject = emailText.subject.replace('{invoiceNumber}', data.invoiceNumber)
    const body = [
      emailText.title,
      emailText.separator,
      '',
      `${emailText.customerName}: ${data.customerName}`,
      `${emailText.companyName}: ${data.companyName || emailText.notProvided}`,
      `${emailText.email}: ${data.email}`,
      `${emailText.phone}: ${data.phone}`,
      `${emailText.invoiceNumber}: ${data.invoiceNumber}`,
      `${emailText.projectName}: ${data.projectName}`,
      `${emailText.invoiceDate}: ${data.invoiceDate}`,
      `${emailText.amount}: ${data.amount}`,
      `${emailText.paymentMode}: ${data.paymentMode}`,
      `${emailText.paymentReceived}: ${data.paymentReceived ? emailText.yes : emailText.no}`,
      '',
      emailText.receiptNotes,
      data.receiptNote,
    ].join('\n')

    submitMailtoFormAndReset({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
      defaultValues,
      reset,
      setFeedback: setSubmitFeedback,
      successMessage: content.feedback.success,
      errorMessage: content.feedback.error,
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.28em] text-orange-700 shadow-sm backdrop-blur-sm">
            {labels.badge}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[0.06em] text-slate-900 sm:text-5xl">
            {labels.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {labels.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.paymentBreakdown.title}</h2>
                  <div className="mt-3 space-y-3 text-md leading-7 text-slate-600">
                    {labels.sections.paymentBreakdown.items.map((item) => <p key={item.label}><span className="font-semibold text-slate-800">{item.label}</span> {item.text}</p>)}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.acknowledgement.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.acknowledgement.text}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{labels.sections.support.title}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600">
                    {labels.sections.support.text}
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-orange-100 bg-linear-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-orange-200">{labels.formTitle}</p>
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
                  label={labels.fields.invoiceNumber.label}
                  name="invoiceNumber"
                  placeholder={labels.fields.invoiceNumber.placeholder}
                  register={register}
                  error={errors.invoiceNumber}
                />

                <Field
                  label={labels.fields.projectName.label}
                  name="projectName"
                  placeholder={labels.fields.projectName.placeholder}
                  register={register}
                  error={errors.projectName}
                />

                <Field
                  label={labels.fields.invoiceDate.label}
                  name="invoiceDate"
                  type="date"
                  register={register}
                  error={errors.invoiceDate}
                />

                <Field
                  label={labels.fields.amount.label}
                  name="amount"
                  placeholder={labels.fields.amount.placeholder}
                  register={register}
                  error={errors.amount}
                />

                <div>
                  <label htmlFor="paymentMode" className="mb-2 block text-md font-semibold text-slate-100">
                    {labels.fields.paymentMode.label}
                  </label>
                  <select
                    id="paymentMode"
                    {...register('paymentMode')}
                    aria-invalid={Boolean(errors.paymentMode)}
                    aria-describedby={errors.paymentMode ? 'paymentMode-error' : undefined}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition-all duration-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
                  >
                    <option value="" className="text-slate-900">{labels.fields.paymentMode.placeholder}</option>
                    {labels.paymentOptions.map((option) => <option key={option} value={option} className="text-slate-900">{option}</option>)}
                  </select>
                  {errors.paymentMode && <p id="paymentMode-error" className="mt-2 text-md text-rose-300">{errors.paymentMode.message}</p>}
                </div>

                <div>
                  <label htmlFor="receiptNote" className="mb-2 block text-md font-semibold text-slate-100">
                    {labels.fields.receiptNote.label}
                  </label>
                  <textarea
                    id="receiptNote"
                    {...register('receiptNote')}
                    rows={5}
                    placeholder={labels.fields.receiptNote.placeholder}
                    aria-invalid={Boolean(errors.receiptNote)}
                    aria-describedby={errors.receiptNote ? 'receiptNote-error' : undefined}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
                  />
                  {errors.receiptNote && <p id="receiptNote-error" className="mt-2 text-md text-rose-300">{errors.receiptNote.message}</p>}
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('paymentReceived')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                  />
                  <span>
                    {labels.fields.paymentReceived}
                  </span>
                </label>
                {errors.paymentReceived && <p className="text-md text-rose-300">{errors.paymentReceived.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-md font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
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
  name: keyof InvoiceFormValues
  placeholder?: string
  type?: string
  register: ReturnType<typeof useForm<InvoiceFormValues>>['register']
  error?: { message?: string }
}

function Field({ label, name, placeholder, type = 'text', register, error }: FieldProps) {
  return (
    <SharedFormField
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      register={register}
      error={error}
      labelClassName="mb-2 block text-md font-semibold text-slate-100"
      inputClassName="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
      errorClassName="mt-2 text-md text-rose-300"
    />
  )
}
