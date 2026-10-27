'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState } from 'react'

const warrantyPolicySchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  projectName: z.string().trim().min(3, 'Please enter the project name.'),
  productLine: z.string().min(1, 'Please select the product or service line.'),
  warrantyStart: z.string().min(1, 'Please enter the warranty start date.'),
  servicePlan: z.string().min(1, 'Please select the after-sales service plan.'),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that you accept the warranty and service policy terms.',
  }),
})

type WarrantyPolicyFormValues = z.infer<typeof warrantyPolicySchema>

const defaultValues: WarrantyPolicyFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  projectName: '',
  productLine: '',
  warrantyStart: '',
  servicePlan: '',
  acceptTerms: false,
}

export default function WarrantyPolicyPage() {
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<WarrantyPolicyFormValues>({
    resolver: zodResolver(warrantyPolicySchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: WarrantyPolicyFormValues) => {
    try {
      const response = await fetch('/api/warranty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result?.error || 'The warranty service rejected the request.')
      }

      reset(defaultValues)
      setSubmitFeedback({
        type: 'success',
        message: result?.message || 'Your warranty acknowledgement has been sent successfully.',
      })
    } catch (error) {
      reset(defaultValues)
      setSubmitFeedback({
        type: 'error',
        message: 'We could not send your warranty acknowledgement right now. Please try again later or email us directly.',
      })
    }
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
                  <p className="text-[10px] font-black uppercase tracking-[0.36em] text-sky-100/80">Warranty</p>
                  <h1 className="mt-1 text-2xl font-black tracking-[-0.06em] sm:text-3xl">Policy Acknowledgement</h1>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                Online Support
              </div>
            </div>
          </header>

          <div className="space-y-5 p-4 sm:p-6 lg:p-7">
            <div className="grid gap-5 lg:grid-cols-2">
              <Field
                label="Customer name"
                name="customerName"
                placeholder="Enter your full name"
                register={register}
                error={errors.customerName}
                accent="sky"
              />

              <Field
                label="Company name"
                name="companyName"
                placeholder="Optional company / organization"
                register={register}
                error={errors.companyName}
                accent="emerald"
              />

              <Field
                label="Email address"
                name="email"
                type="email"
                placeholder="you@example.com"
                register={register}
                error={errors.email}
                accent="cyan"
              />

              <Field
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                register={register}
                error={errors.phone}
                accent="blue"
              />

              <Field
                label="Project name"
                name="projectName"
                placeholder="Solar rooftop project"
                register={register}
                error={errors.projectName}
                accent="indigo"
              />

              <div>
                <label htmlFor="productLine" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                  Product or service line
                </label>
                <select
                  id="productLine"
                  {...register('productLine')}
                  aria-invalid={Boolean(errors.productLine)}
                  className="h-12 w-full rounded-2xl border border-sky-200 bg-sky-50/70 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">Select product line</option>
                  <option value="Solar PV system">Solar PV system</option>
                  <option value="Wind energy system">Wind energy system</option>
                  <option value="Hybrid energy system">Hybrid energy system</option>
                  <option value="Battery storage">Battery storage</option>
                  <option value="Maintenance plan">Maintenance plan</option>
                  <option value="Service request">Service request</option>
                </select>
                {errors.productLine && <p className="mt-2 text-xs text-rose-600">{errors.productLine.message}</p>}
              </div>

              <Field
                label="Warranty start date"
                name="warrantyStart"
                type="date"
                register={register}
                error={errors.warrantyStart}
                accent="emerald"
              />

              <div>
                <label htmlFor="servicePlan" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                  After-sales service plan
                </label>
                <select
                  id="servicePlan"
                  {...register('servicePlan')}
                  aria-invalid={Boolean(errors.servicePlan)}
                  className="h-12 w-full rounded-2xl border border-emerald-200 bg-emerald-50/70 px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select service plan</option>
                  <option value="Basic support">Basic support</option>
                  <option value="Annual maintenance contract">Annual maintenance contract</option>
                  <option value="Priority service plan">Priority service plan</option>
                  <option value="Monitoring and support">Monitoring and support</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                {errors.servicePlan && <p className="mt-2 text-xs text-rose-600">{errors.servicePlan.message}</p>}
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-sky-50 p-4">
              <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                <input
                  type="checkbox"
                  {...register('acceptTerms')}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <span className="font-medium">
                  I acknowledge and accept the warranty and after-sales service policy terms as outlined by AeroSun Energy.
                </span>
              </label>
              {errors.acceptTerms && <p className="mt-2 text-xs text-rose-600">{errors.acceptTerms.message}</p>}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Service confirmation
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit acknowledgement'}
              </button>

              {submitFeedback ? (
                <p className={`text-sm font-medium ${submitFeedback.type === 'success' ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {submitFeedback.message}
                </p>
              ) : isSubmitSuccessful && (
                <p className="text-sm font-medium text-emerald-700">Your warranty acknowledgement has been prepared in your email app.</p>
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
  const accentClasses: Record<string, string> = {
    sky: 'border-sky-200 bg-sky-50/70 focus:border-sky-500 focus:ring-sky-100',
    emerald: 'border-emerald-200 bg-emerald-50/70 focus:border-emerald-500 focus:ring-emerald-100',
    cyan: 'border-cyan-200 bg-cyan-50/70 focus:border-cyan-500 focus:ring-cyan-100',
    blue: 'border-blue-200 bg-blue-50/70 focus:border-blue-500 focus:ring-blue-100',
    indigo: 'border-indigo-200 bg-indigo-50/70 focus:border-indigo-500 focus:ring-indigo-100',
  }

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`h-12 w-full rounded-2xl border px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 ${accentClasses[accent]}`}
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
