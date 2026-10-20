'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<StandardQuotationValues>({
    resolver: zodResolver(quotationSchema),
    defaultValues: defaultQuotationValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: StandardQuotationValues) => {
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

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultQuotationValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_28%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-sm">
            Quotation
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Standard quotation template
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Provide the project details below and we will prepare a detailed, site-specific commercial proposal.
          </p>
        </div>

        <Card className="overflow-hidden border border-emerald-100 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
          <CardContent className="p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 md:grid-cols-2">
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

              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-semibold text-slate-800">
                  Project type
                </label>
                <select
                  id="projectType"
                  {...register('projectType')}
                  aria-invalid={Boolean(errors.projectType)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select project type</option>
                  <option value="Residential rooftop solar">Residential rooftop solar</option>
                  <option value="Commercial rooftop solar">Commercial rooftop solar</option>
                  <option value="Industrial solar">Industrial solar</option>
                  <option value="Wind energy system">Wind energy system</option>
                  <option value="Hybrid energy system">Hybrid energy system</option>
                  <option value="Solar water pumping">Solar water pumping</option>
                  <option value="Maintenance / AMC">Maintenance / AMC</option>
                </select>
                {errors.projectType && <p className="mt-2 text-xs text-rose-600">{errors.projectType.message}</p>}
              </div>

              <Field
                label="Site location"
                name="siteLocation"
                placeholder="City / area / site address"
                register={register}
                error={errors.siteLocation}
              />

              <Field
                label="System capacity"
                name="systemCapacity"
                placeholder="Example: 5 kW / 25 kW"
                register={register}
                error={errors.systemCapacity}
              />

              <div>
                <label htmlFor="estimatedBudget" className="mb-2 block text-sm font-semibold text-slate-800">
                  Estimated budget
                </label>
                <select
                  id="estimatedBudget"
                  {...register('estimatedBudget')}
                  aria-invalid={Boolean(errors.estimatedBudget)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select budget range</option>
                  <option value="Below ₹2 lakh">Below ₹2 lakh</option>
                  <option value="₹2 lakh - ₹5 lakh">₹2 lakh - ₹5 lakh</option>
                  <option value="₹5 lakh - ₹10 lakh">₹5 lakh - ₹10 lakh</option>
                  <option value="₹10 lakh - ₹25 lakh">₹10 lakh - ₹25 lakh</option>
                  <option value="₹25 lakh - ₹50 lakh">₹25 lakh - ₹50 lakh</option>
                  <option value="Above ₹50 lakh">Above ₹50 lakh</option>
                </select>
                {errors.estimatedBudget && <p className="mt-2 text-xs text-rose-600">{errors.estimatedBudget.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="scope" className="mb-2 block text-sm font-semibold text-slate-800">
                  Scope of work / project requirement
                </label>
                <textarea
                  id="scope"
                  {...register('scope')}
                  rows={6}
                  placeholder="Outline the system requirement, equipment preference, site conditions, expected usage, timeline, and any special conditions."
                  aria-invalid={Boolean(errors.scope)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
                {errors.scope && <p className="mt-2 text-xs text-rose-600">{errors.scope.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    {...register('terms')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>
                    I understand that this quotation is a preliminary estimate and subject to site survey, technical feasibility, and final scope confirmation.
                  </span>
                </label>
                {errors.terms && <p className="mt-2 text-xs text-rose-600">{errors.terms.message}</p>}
              </div>

              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Preparing quotation...' : 'Send quotation request'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-700">Your quotation request has been prepared in your email app.</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name: keyof StandardQuotationValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<StandardQuotationValues>>['register']
  error?: { message?: string }
}

function Field({ label, name, placeholder, type = 'text', register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
