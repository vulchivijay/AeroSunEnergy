'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

const invoiceSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  invoiceNumber: z.string().trim().min(2, 'Please enter the invoice number.'),
  projectName: z.string().trim().min(3, 'Please enter the project name.'),
  invoiceDate: z.string().min(1, 'Please enter the invoice date.'),
  amount: z.string().trim().min(1, 'Please enter the invoice amount.'),
  paymentMode: z.string().min(1, 'Please select the payment mode.'),
  receiptNote: z.string().trim().min(10, 'Please provide a brief receipt note or remarks.'),
  paymentReceived: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that the payment has been received.',
  }),
})

type InvoiceFormValues = z.infer<typeof invoiceSchema>

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

export default function InvoiceReceiptPage() {
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
    const subject = `Invoice & Receipt - ${data.invoiceNumber}`
    const body = [
      'INVOICE AND RECEIPT TEMPLATE',
      '===========================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Invoice Number: ${data.invoiceNumber}`,
      `Project Name: ${data.projectName}`,
      `Invoice Date: ${data.invoiceDate}`,
      `Amount: ${data.amount}`,
      `Payment Mode: ${data.paymentMode}`,
      `Payment Received: ${data.paymentReceived ? 'Yes' : 'No'}`,
      '',
      'Receipt Notes:',
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
            Invoice
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Invoice and receipt template
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Generate a brief invoice and receipt record for payment confirmation, project billing, and customer acknowledgment for renewable energy solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">1. Invoice summary</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The invoice records the project value, purchase order reference, payment mode, and customer acknowledgment for services rendered or equipment supplied. It acts as a commercial record for part payment, final settlement, and receipt tracking.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">2. Payment breakdown</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    <p><span className="font-semibold text-slate-800">Advance:</span> Initial deposit or milestone payment before project execution.</p>
                    <p><span className="font-semibold text-slate-800">Progress billing:</span> Amount billed at agreed project phases or material dispatch milestones.</p>
                    <p><span className="font-semibold text-slate-800">Final settlement:</span> Balance payment on commissioning, handover, and final documentation.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">3. Receipt and acknowledgement</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Receipt acknowledgement confirms the customer has received payment documentation and accepted the amount as final, subject to the project agreement, tax conditions, and supporting commercial terms recorded in the transaction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">4. Support and dispute handling</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Any discrepancy in billing, payment schedule, or receipt details should be reported promptly. Clarifications can be reviewed through the customer support process, the project agreement, and the commercial documentation associated with the project.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-orange-100 bg-linear-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-orange-200">Receipt form</p>
              <h2 className="mt-3 text-2xl font-semibold">Create invoice record</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field
                  label="Customer name"
                  name="customerName"
                  placeholder="Enter your full name"
                  register={register}
                  error={errors.customerName}
                />

                <Field
                  label="Company name"
                  name="companyName"
                  placeholder="Optional company / organization"
                  register={register}
                  error={errors.companyName}
                />

                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  register={register}
                  error={errors.email}
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  register={register}
                  error={errors.phone}
                />

                <Field
                  label="Invoice number"
                  name="invoiceNumber"
                  placeholder="INV-2026-001"
                  register={register}
                  error={errors.invoiceNumber}
                />

                <Field
                  label="Project name"
                  name="projectName"
                  placeholder="Solar rooftop project"
                  register={register}
                  error={errors.projectName}
                />

                <Field
                  label="Invoice date"
                  name="invoiceDate"
                  type="date"
                  register={register}
                  error={errors.invoiceDate}
                />

                <Field
                  label="Invoice amount"
                  name="amount"
                  placeholder="Example: ₹4,50,000"
                  register={register}
                  error={errors.amount}
                />

                <div>
                  <label htmlFor="paymentMode" className="mb-2 block text-sm font-semibold text-slate-100">
                    Payment mode
                  </label>
                  <select
                    id="paymentMode"
                    {...register('paymentMode')}
                    aria-invalid={Boolean(errors.paymentMode)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/30"
                  >
                    <option value="" className="text-slate-900">Select payment mode</option>
                    <option value="Bank transfer" className="text-slate-900">Bank transfer</option>
                    <option value="UPI" className="text-slate-900">UPI</option>
                    <option value="Cheque" className="text-slate-900">Cheque</option>
                    <option value="Cash" className="text-slate-900">Cash</option>
                    <option value="Demand draft" className="text-slate-900">Demand draft</option>
                    <option value="Other" className="text-slate-900">Other</option>
                  </select>
                  {errors.paymentMode && <p className="mt-2 text-xs text-rose-300">{errors.paymentMode.message}</p>}
                </div>

                <div>
                  <label htmlFor="receiptNote" className="mb-2 block text-sm font-semibold text-slate-100">
                    Receipt note / remarks
                  </label>
                  <textarea
                    id="receiptNote"
                    {...register('receiptNote')}
                    rows={5}
                    placeholder="Add booking notes, payment reference, GST detail, and any remarks relevant to the invoice."
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
                  <span>
                    I confirm that the payment for this invoice has been received and acknowledged as part of the project record.
                  </span>
                </label>
                {errors.paymentReceived && <p className="text-xs text-rose-300">{errors.paymentReceived.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Generate receipt'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">Your invoice and receipt record has been prepared in your email app.</p>
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
