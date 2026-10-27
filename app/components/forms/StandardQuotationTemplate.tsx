'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState, type FocusEventHandler } from 'react'
import { validateZeroBounceEmail } from '@/lib/emailValidation'

const quotationSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  projectType: z.string().min(1, 'Please select a project type.'),
  siteLocation: z.string().trim().min(3, 'Please enter the site location.'),
  systemCapacity: z.string().trim().min(1, 'Please enter the system capacity.'),
  estimatedBudget: z.string().trim().min(1, 'Please select an estimated budget.'),
  scope: z.string().trim().min(20, 'Please describe the quotation scope in a little more detail.'),
  terms: z.string().min(1, 'Please accept the quotation terms.'),
})

export type StandardQuotationValues = z.infer<typeof quotationSchema>

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
        message: 'This email address appears risky or invalid. Please use a different email address.',
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
        message: 'This email address appears risky or invalid. Please use a different email address.',
      })
      return
    }

    const subject = `Standard Quotation Request - ${data.customerName}`
    const body = [
      'STANDARD QUOTATION REQUEST',
      '===========================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Project Type: ${data.projectType}`,
      `Site Location: ${data.siteLocation}`,
      `System Capacity: ${data.systemCapacity}`,
      `Estimated Budget: ${data.estimatedBudget}`,
      '',
      'Scope / Requirement:',
      data.scope,
      '',
      `Terms Accepted: ${data.terms}`,
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultQuotationValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? 'Your quotation request has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfeff_24%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 shadow-[0_26px_90px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-[#123c72] bg-linear-to-r from-[#0b1d4d] via-[#143d72] to-[#0d5a80] p-4 text-white shadow-[0_25px_60px_-32px_rgba(15,68,120,0.9)] sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl font-black">
                    Q
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.38em] text-cyan-200/85">Quotation</p>
                    <h1 className="mt-1 text-2xl font-black tracking-[-0.06em] sm:text-3xl">Standard Quotation Template</h1>
                  </div>
                </div>

                <div className="grid gap-2 text-right text-sm sm:grid-cols-3 lg:min-w-[420px]">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-cyan-100/80">No.</p>
                    <p className="mt-1 font-semibold">AESP/QTN/2025/001</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-cyan-100/80">Date</p>
                    <p className="mt-1 font-semibold">DD-MM-YYYY</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-cyan-100/80">Valid Till</p>
                    <p className="mt-1 font-semibold">DD-MM-YYYY</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-3">
              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f2f8ff] via-white to-[#effaf4] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Company Details</h2>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="space-y-2">
                    <Field
                      label="Company Name"
                      name="companyName"
                      placeholder="Your company / organization"
                      register={register}
                      error={errors.companyName}
                      compact
                    />
                    <Field
                      label="Customer Name"
                      name="customerName"
                      placeholder="Customer full name"
                      register={register}
                      error={errors.customerName}
                      compact
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      register={register}
                      error={errors.email}
                      compact
                      onBlur={handleEmailBlur}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      register={register}
                      error={errors.phone}
                      compact
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f6f9ff] via-white to-[#f5fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Customer Details</h2>
                </div>

                <div className="space-y-4">
                  <Field
                    label="Name"
                    name="customerName"
                    placeholder="Enter your full name"
                    register={register}
                    error={errors.customerName}
                    compact
                  />
                  <Field
                    label="Address"
                    placeholder="Street / locality / landmark"
                    register={register}
                    compact
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="City"
                      placeholder="City"
                      register={register}
                      compact
                    />
                    <Field
                      label="PIN Code"
                      placeholder="PIN code"
                      register={register}
                      compact
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      register={register}
                      error={errors.phone}
                      compact
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      register={register}
                      error={errors.email}
                      compact
                      onBlur={handleEmailBlur}
                    />
                  </div>
                  <Field
                    label="GSTIN (if applicable)"
                    placeholder="GSTIN number"
                    register={register}
                    compact
                  />
                </div>
              </section>

              <section className="rounded-[24px] border border-slate-200 bg-linear-to-br from-[#f4fff9] via-white to-[#f5f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-slate-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">Project Details</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">Project Type</label>
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/80 p-3">
                      {['Rooftop Solar', 'Ground-Mounted Solar', 'Wind Energy', 'Hybrid System', 'Battery Storage', 'Other'].map((option) => (
                        <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs font-medium text-slate-700">
                          <input type="radio" value={option} {...register('projectType')} className="h-4 w-4 accent-emerald-600" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <p className="mt-2 text-xs text-rose-600">{errors.projectType.message}</p>}
                  </div>

                  <Field
                    label="Site Address"
                    name="siteLocation"
                    placeholder="Site address"
                    register={register}
                    error={errors.siteLocation}
                    compact
                  />
                  <Field
                    label="City"
                    placeholder="City"
                    register={register}
                    compact
                  />
                  <Field
                    label="System Capacity"
                    name="systemCapacity"
                    placeholder="Example: 5 kW / 15 kW"
                    register={register}
                    error={errors.systemCapacity}
                    compact
                  />
                  <Field
                    label="Special Requirements"
                    placeholder="Any special technical conditions"
                    register={register}
                    compact
                  />
                </div>
              </section>
            </div>

            <section className="overflow-hidden rounded-[24px] border border-blue-200 bg-linear-to-br from-[#edf9ff] via-[#f4fbff] to-[#eefdf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="border-b border-blue-200 bg-linear-to-r from-[#0d2f65] via-[#103d77] to-[#0c5f87] px-4 py-3 text-left text-lg font-black tracking-[-0.04em] text-white sm:px-5">
                1. Scope of Supply and Work
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
                  <thead className="bg-blue-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700">
                    <tr>
                      <th className="border-r border-blue-200 px-3 py-3">S. No.</th>
                      <th className="border-r border-blue-200 px-3 py-3">Description</th>
                      <th className="border-r border-blue-200 px-3 py-3">Specification / Brand (Tentative)</th>
                      <th className="border-r border-blue-200 px-3 py-3">Quantity</th>
                      <th className="border-r border-blue-200 px-3 py-3">Unit</th>
                      <th className="border-r border-blue-200 px-3 py-3">Unit Price (₹)</th>
                      <th className="px-3 py-3">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/80 text-slate-700">
                    {['Solar PV Modules', 'Grid/Hybrid Inverter', 'Mounting Structure', 'DC Cables, AC Cables & Accessories', 'Distribution Box (DCDB/ACDB)', 'Installation and Commissioning', 'Net Meter (if applicable)', 'Battery Storage System (if applicable)', 'Additional Items (if any)', 'Other Charges (if any)'].map((item, index) => (
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
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">2. Commercial Summary</h2>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Total Ex-Work Price</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Total Supply and Installation Charges</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Sub-Total (A)</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">GST @ ___ % (B)</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Total Project Cost (A + B)</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Less: Government Subsidy (if applicable)</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">(−) ₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3">
                    <span className="font-semibold text-slate-700">Less: Special Discount (if any)</span>
                    <div className="rounded-xl border border-emerald-200 bg-white px-3 py-2 text-right font-bold text-slate-800">(−) ₹</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr] items-center gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 px-2 py-2 font-black text-emerald-900">
                    <span>Grand Total (Customer Payable)</span>
                    <div className="rounded-xl border border-emerald-300 bg-white px-3 py-2 text-right">₹</div>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffdf8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-amber-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">3. Payment Terms</h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                  <div className="grid grid-cols-[60px_1.5fr_1fr_1fr] border-b border-amber-200 bg-amber-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700">
                    <div className="px-3 py-3">S. No.</div>
                    <div className="px-3 py-3">Milestone</div>
                    <div className="px-3 py-3">Percentage</div>
                    <div className="px-3 py-3">Amount (₹)</div>
                  </div>
                  {['On Order Confirmation', 'On Delivery of Materials', 'On Completion of Installation', 'On Testing & Commissioning', 'After Net Meter Installation / Project Handover'].map((milestone, index) => (
                    <div key={milestone} className="grid grid-cols-[60px_1.5fr_1fr_1fr] border-b border-amber-100 last:border-b-0 text-sm text-slate-700">
                      <div className="border-r border-amber-100 px-3 py-3 font-semibold">{index + 1}</div>
                      <div className="border-r border-amber-100 px-3 py-3">{milestone}</div>
                      <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></div>
                      <div className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/50" /></div>
                    </div>
                  ))}
                  <div className="grid grid-cols-[60px_1.5fr_1fr_1fr] bg-amber-50 text-sm font-black text-slate-800">
                    <div className="px-3 py-3">Total</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">100%</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">—</div>
                    <div className="border-l border-amber-200 px-3 py-3 text-center">—</div>
                  </div>
                </div>
              </section>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
              <section className="rounded-[24px] border border-yellow-200 bg-linear-to-br from-[#fffdea] via-white to-[#fffef8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-yellow-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">4. Terms and Conditions</h2>
                </div>

                <ol className="space-y-2 text-sm leading-6 text-slate-700">
                  {['This quotation is valid for 30 days from the date of issue.', 'Prices are subject to change based on final site survey and system design.', 'Government subsidy is subject to eligibility and approval from the concerned authorities.', 'Customer to provide necessary approvals, access, and electrical connection as required.', 'Warranty: As per manufacturer\'s standard warranty terms.', 'Any additional work not mentioned in this quotation will be charged separately.', 'This quotation is subject to our standard terms and conditions.'].map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-300 text-[10px] font-black text-slate-900">{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#edfdf5] via-white to-[#f8fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 border-b border-emerald-200 pb-3">
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">5. Acceptance</h2>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <p>We accept the above quotation and agree to the terms and conditions.</p>
                  <div className="space-y-3">
                    <Field
                      label="Customer Name"
                      placeholder="Customer name"
                      register={register}
                      compact
                    />
                    <Field
                      label="Signature"
                      placeholder="Customer signature"
                      register={register}
                      compact
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Date"
                        placeholder="DD-MM-YYYY"
                        register={register}
                        compact
                      />
                      <Field
                        label="Place"
                        placeholder="Place"
                        register={register}
                        compact
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col gap-4 rounded-[22px] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-start gap-3 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  {...register('terms')}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span>I accept the above quotation and agree to proceed under the stated terms.</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#0d5a80] via-[#123f74] to-[#0a2d5a] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_30px_-18px_rgba(15,63,116,0.9)] transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Submit Quotation'}
              </button>
            </div>

            {submitFeedback ? (
              <p className={`rounded-2xl border px-4 py-3 text-sm font-medium ${submitFeedback.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                {submitFeedback.message}
              </p>
            ) : isSubmitSuccessful && (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Your quotation request has been prepared in your email app.
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
  const fieldId = name ?? label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={fieldId} className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        {...(name ? register(name, { onBlur }) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
