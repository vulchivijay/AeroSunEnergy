'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

type InvoiceFormValues = {
  customerName: string
  companyName?: string
  email: string
  phone: string
  invoiceNumber: string
  projectName: string
  invoiceDate: string
  amount: string
  paymentMode: string
  receiptNote: string
  paymentReceived: boolean
}

export default function InvoiceReceiptPage() {
  const { t } = useLocale()
  const invoiceText = ((t as any).invoiceReceipt ?? (en as any).invoiceReceipt) as any

  const invoiceSchema = z.object({
    customerName: z.string().trim().min(2, invoiceText.validation.customerNameRequired),
    companyName: z.string().trim().optional().or(z.literal('')),
    email: z.string().trim().email(invoiceText.validation.emailInvalid),
    phone: z
      .string()
      .trim()
      .min(10, invoiceText.validation.phoneMin)
      .regex(/^[0-9+()\-\s]+$/, invoiceText.validation.phoneFormat),
    invoiceNumber: z.string().trim().min(2, invoiceText.validation.invoiceNumberRequired),
    projectName: z.string().trim().min(3, invoiceText.validation.projectNameRequired),
    invoiceDate: z.string().min(1, invoiceText.validation.invoiceDateRequired),
    amount: z.string().trim().min(1, invoiceText.validation.amountRequired),
    paymentMode: z.string().min(1, invoiceText.validation.paymentModeRequired),
    receiptNote: z.string().trim().min(10, invoiceText.validation.receiptNoteRequired),
    paymentReceived: z.boolean().refine((value) => value === true, {
      message: invoiceText.validation.paymentReceivedRequired,
    }),
  })

  const defaultValues: InvoiceFormValues = {
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    invoiceNumber: '',
    projectName: '',
    invoiceDate: '',
    amount: '',
    paymentMode: '',
    receiptNote: '',
    paymentReceived: false,
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: InvoiceFormValues) => {
    const subject = invoiceText.email.subject.replace('{invoice}', data.invoiceNumber)
    const body = [
      invoiceText.email.title,
      '===========================',
      '',
      `${invoiceText.email.customerName}: ${data.customerName}`,
      `${invoiceText.email.companyName}: ${data.companyName || 'Not provided'}`,
      `${invoiceText.email.email}: ${data.email}`,
      `${invoiceText.email.phone}: ${data.phone}`,
      `${invoiceText.email.invoiceNumber}: ${data.invoiceNumber}`,
      `${invoiceText.email.projectName}: ${data.projectName}`,
      `${invoiceText.email.invoiceDate}: ${data.invoiceDate}`,
      `${invoiceText.email.amount}: ${data.amount}`,
      `${invoiceText.email.paymentMode}: ${data.paymentMode}`,
      `${invoiceText.email.paymentReceived}: ${data.paymentReceived ? 'Yes' : 'No'}`,
      '',
      `${invoiceText.email.receiptNote}:`,
      data.receiptNote,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-700 shadow-sm backdrop-blur-sm">
            {invoiceText.badge}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            {invoiceText.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {invoiceText.intro}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">{invoiceText.sections.summary.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{invoiceText.sections.summary.content}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{invoiceText.sections.paymentBreakdown.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {invoiceText.sections.paymentBreakdown.items.map((item: string) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{invoiceText.sections.receipt.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{invoiceText.sections.receipt.content}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{invoiceText.sections.support.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{invoiceText.sections.support.content}</p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-orange-100 bg-linear-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-orange-200">{invoiceText.form.badge}</p>
              <h2 className="mt-3 text-2xl font-semibold">{invoiceText.form.title}</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field label={invoiceText.fields.customerName} name="customerName" placeholder={invoiceText.fields.customerNamePlaceholder} register={register} error={errors.customerName} />
                <Field label={invoiceText.fields.companyName} name="companyName" placeholder={invoiceText.fields.companyNamePlaceholder} register={register} error={errors.companyName} />
                <Field label={invoiceText.fields.email} name="email" type="email" placeholder={invoiceText.fields.emailPlaceholder} register={register} error={errors.email} />
                <Field label={invoiceText.fields.phone} name="phone" type="tel" placeholder={invoiceText.fields.phonePlaceholder} register={register} error={errors.phone} />
                <Field label={invoiceText.fields.invoiceNumber} name="invoiceNumber" placeholder={invoiceText.fields.invoiceNumberPlaceholder} register={register} error={errors.invoiceNumber} />
                <Field label={invoiceText.fields.projectName} name="projectName" placeholder={invoiceText.fields.projectNamePlaceholder} register={register} error={errors.projectName} />
                <Field label={invoiceText.fields.invoiceDate} name="invoiceDate" type="date" placeholder={invoiceText.fields.invoiceDatePlaceholder} register={register} error={errors.invoiceDate} />
                <Field label={invoiceText.fields.amount} name="amount" placeholder={invoiceText.fields.amountPlaceholder} register={register} error={errors.amount} />

                <div>
                  <label htmlFor="paymentMode" className="mb-2 block text-sm font-semibold text-slate-100">
                    {invoiceText.fields.paymentMode}
                  </label>
                  <select
                    id="paymentMode"
                    {...register('paymentMode')}
                    aria-invalid={Boolean(errors.paymentMode)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
                  >
                    <option value="" className="text-slate-900">{invoiceText.fields.paymentModePlaceholder}</option>
                    {invoiceText.paymentModes.map((option: string) => (
                      <option key={option} value={option} className="text-slate-900">{option}</option>
                    ))}
                  </select>
                  {errors.paymentMode && <p className="mt-2 text-xs text-rose-300">{errors.paymentMode.message}</p>}
                </div>

                <div>
                  <label htmlFor="receiptNote" className="mb-2 block text-sm font-semibold text-slate-100">
                    {invoiceText.fields.receiptNote}
                  </label>
                  <textarea
                    id="receiptNote"
                    {...register('receiptNote')}
                    rows={5}
                    placeholder={invoiceText.fields.receiptNotePlaceholder}
                    aria-invalid={Boolean(errors.receiptNote)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
                  />
                  {errors.receiptNote && <p className="mt-2 text-xs text-rose-300">{errors.receiptNote.message}</p>}
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('paymentReceived')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                  />
                  <span>{invoiceText.fields.paymentReceived}</span>
                </label>
                {errors.paymentReceived && <p className="text-xs text-rose-300">{errors.paymentReceived.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? invoiceText.submitting : invoiceText.submit}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">{invoiceText.success}</p>
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
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-100">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
