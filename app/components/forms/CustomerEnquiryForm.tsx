'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

const enquirySchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  serviceType: z.string().min(1, 'Please select a service type.'),
  location: z.string().trim().min(3, 'Please enter the project location.'),
  budget: z.string().trim().min(1, 'Please select an estimated budget range.'),
  message: z.string().trim().min(20, 'Please provide a few more details about your requirement.'),
})

export type EnquiryFormValues = z.infer<typeof enquirySchema>

export const defaultEnquiryValues: EnquiryFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  serviceType: '',
  location: '',
  budget: '',
  message: '',
}

export function CustomerEnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: defaultEnquiryValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: EnquiryFormValues) => {
    const subject = `Customer Enquiry - ${data.customerName}`
    const body = [
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service Type: ${data.serviceType}`,
      `Location: ${data.location}`,
      `Estimated Budget: ${data.budget}`,
      '',
      'Project Details:',
      data.message,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultEnquiryValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.12),transparent_22%),linear-gradient(180deg,#f8fafc_0%,#f0fdf4_32%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-sm">
            Customer enquiry
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Let’s discuss your renewable energy project
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Share your project requirements and our team will get back with the right solar, wind, or hybrid solution for your site.
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
                placeholder="Optional company or organization"
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

              <div className="md:col-span-2">
                <label htmlFor="serviceType" className="mb-2 block text-sm font-semibold text-slate-800">
                  Service required
                </label>
                <select
                  id="serviceType"
                  {...register('serviceType')}
                  aria-invalid={Boolean(errors.serviceType)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select a service</option>
                  <option value="Solar rooftop installation">Solar rooftop installation</option>
                  <option value="Solar water pumping">Solar water pumping</option>
                  <option value="Commercial solar solution">Commercial solar solution</option>
                  <option value="Wind energy system">Wind energy system</option>
                  <option value="Hybrid energy system">Hybrid energy system</option>
                  <option value="Maintenance & AMC">Maintenance & AMC</option>
                  <option value="Consultation / feasibility study">Consultation / feasibility study</option>
                </select>
                {errors.serviceType && <p className="mt-2 text-xs text-rose-600">{errors.serviceType.message}</p>}
              </div>

              <Field
                label="Project location"
                name="location"
                placeholder="City, district, or site address"
                register={register}
                error={errors.location}
              />

              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-slate-800">
                  Estimated budget
                </label>
                <select
                  id="budget"
                  {...register('budget')}
                  aria-invalid={Boolean(errors.budget)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="">Select range</option>
                  <option value="Below ₹2 lakh">Below ₹2 lakh</option>
                  <option value="₹2 lakh - ₹5 lakh">₹2 lakh - ₹5 lakh</option>
                  <option value="₹5 lakh - ₹10 lakh">₹5 lakh - ₹10 lakh</option>
                  <option value="₹10 lakh - ₹25 lakh">₹10 lakh - ₹25 lakh</option>
                  <option value="₹25 lakh - ₹50 lakh">₹25 lakh - ₹50 lakh</option>
                  <option value="Above ₹50 lakh">Above ₹50 lakh</option>
                </select>
                {errors.budget && <p className="mt-2 text-xs text-rose-600">{errors.budget.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                  Project requirement details
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  placeholder="Tell us about your power requirement, site condition, expected usage, preferred timeline, or any other relevant details."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
                {errors.message && <p className="mt-2 text-xs text-rose-600">{errors.message.message}</p>}
              </div>

              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Send enquiry'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-700">Your enquiry has been prepared in your email app.</p>
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
  name: keyof EnquiryFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<EnquiryFormValues>>['register']
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
