'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState } from 'react'
import FormWarningRibbon from '@/app/components/ui/FormWarningRibbon'

const agreementSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  agreed: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that you accept the agreement and payment terms.',
  }),
})

type AgreementFormValues = z.infer<typeof agreementSchema>

const defaultValues: AgreementFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  agreed: false,
}

export default function CustomerAgreementPage() {
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AgreementFormValues>({
    resolver: zodResolver(agreementSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: AgreementFormValues) => {
    const subject = `Customer Agreement Acceptance - ${data.customerName}`
    const body = [
      'CUSTOMER AGREEMENT AND PAYMENT TERMS',
      '=================================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      '',
      'Status: Agreement accepted',
      'Payment terms acknowledged by customer.',
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? 'Your agreement submission has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#eef6ff_28%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FormWarningRibbon />
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 shadow-[0_28px_90px_-35px_rgba(15,23,42,0.38)] backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-indigo-200 bg-linear-to-r from-[#0c1f51] via-[#153c78] to-[#0d6685] p-4 text-white sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl font-black shadow-[0_20px_40px_-18px_rgba(255,255,255,0.8)]">
                    C
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.34em] text-indigo-100/85">Agreement</p>
                    <h1 className="mt-1 text-2xl font-black tracking-[-0.06em] sm:text-3xl">Customer Agreement & Payment Terms</h1>
                  </div>
                </div>

                <div className="grid gap-2 text-sm sm:grid-cols-3 lg:min-w-[420px]">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Ref.</p>
                    <p className="mt-1 font-semibold">AES/AGR/2026</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Date</p>
                    <p className="mt-1 font-semibold">DD-MM-YYYY</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Status</p>
                    <p className="mt-1 font-semibold text-emerald-300">Pending Sign</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[22px] border border-sky-200 bg-linear-to-br from-[#ebf8ff] via-white to-[#f5fbff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-sky-500/25">1</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Agreement Details</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label="Agreement No." placeholder="Agreement number" register={register} compact />
                      <Field label="Date" placeholder="DD-MM-YYYY" register={register} compact />
                      <Field label="Project Reference" placeholder="Project reference" register={register} compact />
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-emerald-200 bg-linear-to-br from-[#f1fff9] via-white to-[#f7fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-white shadow-lg shadow-emerald-500/25">2</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Customer Details</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label="Customer Name" name="customerName" placeholder="Enter customer name" register={register} error={errors.customerName} compact />
                      <Field label="Company Name" name="companyName" placeholder="Optional company name" register={register} error={errors.companyName} compact />
                      <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" register={register} error={errors.phone} compact />
                      <Field label="Email ID" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} compact />
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-violet-200 bg-linear-to-br from-[#f6f1ff] via-white to-[#f7f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 text-lg font-black text-white shadow-lg shadow-violet-500/25">3</span>
                    <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Project Details</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">Project Type</label>
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-violet-200 bg-white/80 p-2.5 sm:grid-cols-3">
                        {['Rooftop Solar', 'Ground-Mounted Solar', 'Wind Energy', 'Hybrid System', 'Battery Storage', 'Other'].map((option) => (
                          <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-[11px] font-medium text-slate-700">
                            <input type="radio" className="h-4 w-4 accent-violet-600" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Field label="System Capacity" placeholder="kW / kWp" register={register} compact />
                    <Field label="Project Location" placeholder="Site location / city" register={register} compact />
                    <Field label="Quoted Amount" placeholder="₹" register={register} compact />
                    <Field label="Site Access Date" placeholder="DD-MM-YYYY" register={register} compact />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <section className="rounded-[24px] border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-amber-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-amber-500/25">4</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Commercial Terms</h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                      <div className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-200 bg-amber-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700">
                        <div className="px-3 py-3">Milestone</div>
                        <div className="px-3 py-3">%</div>
                        <div className="px-3 py-3">Amount</div>
                        <div className="px-3 py-3">Due</div>
                      </div>
                      { [
                        'Advance Payment',
                        'Material Supply',
                        'Installation',
                        'Testing & Commissioning',
                        'Final Handover',
                      ].map((milestone, index) => (
                        <div key={milestone} className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-100 last:border-b-0 text-sm text-slate-700">
                          <div className="border-r border-amber-100 px-3 py-3">{index + 1}. {milestone}</div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#edfdf7] via-white to-[#f5fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-emerald-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-white shadow-lg shadow-emerald-500/25">5</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Scope of Work</h2>
                    </div>

                    <div className="space-y-2 text-sm text-slate-700">
                      { [
                        'Supply of system equipment',
                        'Installation and commissioning',
                        'Testing, training, and handover',
                        'Net metering / utility coordination',
                        'Warranty support as applicable',
                        'AMC / O&M support if selected',
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                          <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>

                <section className="rounded-[24px] border border-rose-200 bg-linear-to-br from-[#fff5f5] via-white to-[#fffafb] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-3 flex items-center gap-3 border-b border-rose-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-rose-500/25">6</span>
                    <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Terms & Conditions</h2>
                  </div>

                  <ol className="space-y-2 text-sm leading-7 text-slate-700">
                    { [
                      'This agreement is based on the final approved quotation and technical specifications.',
                      'Prices are valid for the agreed time period and may be revised if the job scope changes.',
                      'Government subsidy, if applicable, remains subject to eligibility and authority approval.',
                      'Customer shall provide necessary approvals, access, and coordination for system implementation.',
                      'Any additional work outside the agreed scope will be charged separately.',
                      'This agreement shall be governed by the laws of India.',
                    ].map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[10px] font-black text-rose-700">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </section>

              <aside className="rounded-[24px] border border-indigo-200 bg-linear-to-br from-[#0b1e46] via-[#132c5e] to-[#0a1d45] p-4 text-white shadow-[0_25px_50px_-30px_rgba(15,23,42,0.9)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg font-black">7</span>
                  <h2 className="text-lg font-black tracking-[-0.04em]">Acceptance</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-7 text-slate-200">
                    I have read and understood the terms and conditions above and agree to proceed with AeroSun Energy Private Limited as per the agreed project scope, payment schedule, and service obligations.
                  </p>

                  <Field label="Customer Name" placeholder="Customer name" register={register} compact dark />
                  <Field label="Signature" placeholder="Authorized signature" register={register} compact dark />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Date" placeholder="DD-MM-YYYY" register={register} compact dark />
                    <Field label="Place" placeholder="City / place" register={register} compact dark />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                    <input type="checkbox" {...register('agreed')} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400" />
                    <span>I accept the customer agreement and payment terms stated above.</span>
                  </label>
                  {errors.agreed && <p className="text-xs text-rose-300">{errors.agreed.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit agreement'}
                  </button>

                  {submitFeedback ? (
                    <p className={`text-sm font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                      {submitFeedback.message}
                    </p>
                  ) : isSubmitSuccessful && (
                    <p className="text-sm font-medium text-emerald-300">Your agreement submission has been prepared in your email app.</p>
                  )}
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name?: keyof AgreementFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<AgreementFormValues>>['register']
  error?: { message?: string }
  compact?: boolean
  dark?: boolean
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false, dark = false }: FieldProps) {
  const inputId = name ?? label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={inputId} className={`mb-2 block text-[11px] font-black uppercase tracking-[0.22em] ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        {...(name ? register(name) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`h-11 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 ${dark ? 'border-white/10 bg-white/5 text-white focus:border-indigo-400 focus:ring-indigo-600/30' : 'border-slate-200 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-100'}`}
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
