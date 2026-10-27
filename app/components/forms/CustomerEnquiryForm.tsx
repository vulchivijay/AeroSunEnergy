'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState, type FocusEventHandler } from 'react'
import { validateZeroBounceEmail } from '@/lib/emailValidation'

const enquirySchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  address: z.string().trim().min(3, 'Please enter the address or site location.'),
  city: z.string().trim().min(2, 'Please enter the city.'),
  state: z.string().trim().min(2, 'Please enter the state.'),
  serviceType: z.string().trim().min(1, 'Please select an enquiry type.'),
  propertyType: z.string().trim().min(2, 'Please select the property type.'),
  availableArea: z.string().trim().min(2, 'Please enter the available roof or land area.'),
  roofType: z.string().trim().min(2, 'Please enter the roof type.'),
  averageBill: z.string().trim().min(1, 'Please enter the average monthly bill.'),
  monthlyConsumption: z.string().trim().min(1, 'Please enter the average monthly consumption.'),
  connectionType: z.string().trim().min(2, 'Please select the electricity connection type.'),
  expectedSystemCapacity: z.string().trim().min(1, 'Please enter the expected system capacity.'),
  installationTimeline: z.string().trim().min(1, 'Please select the preferred installation timeline.'),
  budgetRange: z.string().trim().min(1, 'Please select the budget range.'),
  projectDetails: z.string().trim().min(20, 'Please provide a few more details about your project requirement.'),
})

export type EnquiryFormValues = z.infer<typeof enquirySchema>

export const defaultEnquiryValues: EnquiryFormValues = {
  customerName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  serviceType: '',
  propertyType: '',
  availableArea: '',
  roofType: '',
  averageBill: '',
  monthlyConsumption: '',
  connectionType: '',
  expectedSystemCapacity: '',
  installationTimeline: '',
  budgetRange: '',
  projectDetails: '',
}

export function CustomerEnquiryForm() {
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: defaultEnquiryValues,
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

  const onSubmit = async (data: EnquiryFormValues) => {
    const isAllowed = await validateZeroBounceEmail(data.email)
    if (!isAllowed) {
      setError('email', {
        type: 'manual',
        message: 'This email address appears risky or invalid. Please use a different email address.',
      })
      return
    }

    const subject = `Customer Enquiry - ${data.customerName}`
    const body = [
      `Customer Name: ${data.customerName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Address: ${data.address}`,
      `City: ${data.city}`,
      `State: ${data.state}`,
      `Enquiry Type: ${data.serviceType}`,
      `Property Type: ${data.propertyType}`,
      `Available Area: ${data.availableArea}`,
      `Roof Type: ${data.roofType}`,
      `Average Monthly Electricity Bill: ${data.averageBill}`,
      `Average Monthly Consumption: ${data.monthlyConsumption}`,
      `Connection Type: ${data.connectionType}`,
      `Expected System Capacity: ${data.expectedSystemCapacity}`,
      `Installation Timeline: ${data.installationTimeline}`,
      `Budget Range: ${data.budgetRange}`,
      '',
      'Project Details:',
      data.projectDetails,
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultEnquiryValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? 'Your enquiry has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.12),transparent_22%),linear-gradient(180deg,#f8fafc_0%,#f0fdf4_32%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Card className="overflow-hidden border border-sky-200 bg-[#f7fbff] shadow-[0_26px_80px_rgba(14,116,144,0.12)] ring-1 ring-white/60 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="rounded-[28px] border border-sky-200 bg-[linear-gradient(135deg,#dff3ff_0%,#edf9ff_52%,#f2fbff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-base font-black text-white shadow-lg shadow-sky-500/20">
                    1
                  </span>
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-sky-800 sm:text-xl">
                    Customer Details
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name*" name="customerName" placeholder="Enter your full name" register={register} error={errors.customerName} />
                  <Field label="Phone Number*" name="phone" type="tel" placeholder="+91 98765 43210" register={register} error={errors.phone} />
                  <Field label="Email ID*" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} onBlur={handleEmailBlur} />
                  <Field label="Address*" name="address" placeholder="Street / local area / city" register={register} error={errors.address} />
                  <Field label="City*" name="city" placeholder="City name" register={register} error={errors.city} />
                  <Field label="State*" name="state" placeholder="State" register={register} error={errors.state} />
                </div>
              </div>

              <div className="rounded-[28px] border border-emerald-200 bg-[linear-gradient(135deg,#e8fff4_0%,#edfdf8_52%,#f8fffd_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-base font-black text-white shadow-lg shadow-emerald-500/20">
                    2
                  </span>
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-800 sm:text-xl">
                    Enquiry Type
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <SelectTile label="Rooftop Solar" value="Rooftop Solar" accent="emerald" register={register} />
                  <SelectTile label="Commercial Solar" value="Commercial Solar" accent="sky" register={register} />
                  <SelectTile label="Ground-Mounted Solar" value="Ground-Mounted Solar" accent="emerald" register={register} />
                  <SelectTile label="Wind Energy" value="Wind Energy" accent="blue" register={register} />
                  <SelectTile label="Solar-Wind Hybrid" value="Solar-Wind Hybrid" accent="violet" register={register} />
                  <SelectTile label="Battery Storage" value="Battery Storage" accent="amber" register={register} />
                  <SelectTile label="Solar Water Pumping" value="Solar Water Pumping" accent="emerald" register={register} />
                  <SelectTile label="Operations & Maintenance" value="Operations & Maintenance" accent="slate" register={register} />
                </div>

                {errors.serviceType && <p className="mt-3 text-xs text-rose-600">{errors.serviceType.message}</p>}
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[28px] border border-violet-200 bg-[linear-gradient(135deg,#f5f1ff_0%,#f9f6ff_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 text-base font-black text-white shadow-lg shadow-violet-500/20">
                      3
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-violet-800 sm:text-xl">
                      Property / Site
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label="Property Type*" name="propertyType" placeholder="Residential / Commercial / Industrial" register={register} error={errors.propertyType} />
                    <Field label="Available Roof / Land Area*" name="availableArea" placeholder="Approx. sq. ft. / acres" register={register} error={errors.availableArea} />
                    <Field label="Roof Type*" name="roofType" placeholder="RCC / Metal / Tile / Other" register={register} error={errors.roofType} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-amber-200 bg-[linear-gradient(135deg,#fff8e8_0%,#fffaf1_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-base font-black text-white shadow-lg shadow-amber-500/20">
                      4
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-amber-800 sm:text-xl">
                      Electricity Usage
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label="Average Monthly Electricity Bill*" name="averageBill" placeholder="₹ 0" register={register} error={errors.averageBill} />
                    <Field label="Average Monthly Consumption (Units)*" name="monthlyConsumption" placeholder="Example: 640 units" register={register} error={errors.monthlyConsumption} />
                    <Field label="Connection Type*" name="connectionType" placeholder="Single phase / Three phase" register={register} error={errors.connectionType} />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[28px] border border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#f4fff9_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-green-600 text-base font-black text-white shadow-lg shadow-emerald-500/20">
                      5
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-800 sm:text-xl">
                      Requirements
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label="Expected System Capacity (if known)*" name="expectedSystemCapacity" placeholder="Example: 5 kW" register={register} error={errors.expectedSystemCapacity} />
                    <Field label="Preferred Installation Timeframe*" name="installationTimeline" placeholder="Immediate / 1-3 months / 3-6 months" register={register} error={errors.installationTimeline} />
                    <Field label="Budget Range*" name="budgetRange" placeholder="Below ₹1 Lakh / ₹1-3 Lakhs" register={register} error={errors.budgetRange} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-sky-200 bg-[linear-gradient(135deg,#edf8ff_0%,#f4fbff_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-base font-black text-white shadow-lg shadow-sky-500/20">
                      6
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-sky-800 sm:text-xl">
                      Project Details
                    </h2>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="projectDetails" className="mb-2 block text-sm font-semibold text-slate-800">
                      Requirement details*
                    </label>
                    <textarea
                      id="projectDetails"
                      {...register('projectDetails')}
                      rows={7}
                      placeholder="Tell us about your expected load, site conditions, backup needs, voltage preference, and any unique project requirements."
                      aria-invalid={Boolean(errors.projectDetails)}
                      className="w-full rounded-2xl border border-sky-200 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                    {errors.projectDetails && <p className="mt-2 text-xs text-rose-600">{errors.projectDetails.message}</p>}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-sky-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_-18px_rgba(15,118,110,0.85)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_38px_-18px_rgba(15,118,110,0.9)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
                </button>

                {submitFeedback ? (
                  <p className={`text-sm font-semibold ${submitFeedback.type === 'success' ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {submitFeedback.message}
                  </p>
                ) : isSubmitSuccessful && (
                  <p className="text-sm font-semibold text-emerald-700">Your enquiry has been prepared in your email app.</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function SelectTile({
  label,
  value,
  accent,
  register,
}: {
  label: string
  value: string
  accent: 'emerald' | 'sky' | 'blue' | 'violet' | 'amber' | 'slate'
  register: ReturnType<typeof useForm<EnquiryFormValues>>['register']
}) {
  const accentClasses = {
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900 hover:border-emerald-400 hover:bg-emerald-100',
    sky: 'border-sky-200 bg-sky-50 text-sky-900 hover:border-sky-400 hover:bg-sky-100',
    blue: 'border-blue-200 bg-blue-50 text-blue-900 hover:border-blue-400 hover:bg-blue-100',
    violet: 'border-violet-200 bg-violet-50 text-violet-900 hover:border-violet-400 hover:bg-violet-100',
    amber: 'border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-400 hover:bg-amber-100',
    slate: 'border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-400 hover:bg-slate-100',
  }

  return (
    <label className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-3 transition-all duration-200 ${accentClasses[accent]}`}>
      <input type="radio" value={value} {...register('serviceType')} className="h-4 w-4 accent-sky-600" />
      <span className="text-sm font-semibold">{label}</span>
    </label>
  )
}

type FieldProps = {
  label: string
  name: keyof EnquiryFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<EnquiryFormValues>>['register']
  error?: { message?: string }
  onBlur?: FocusEventHandler<HTMLInputElement>
}

function Field({ label, name, placeholder, type = 'text', register, error, onBlur }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, { onBlur })}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-sky-200 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
