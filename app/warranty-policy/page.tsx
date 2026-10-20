'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

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

  const onSubmit = (data: WarrantyPolicyFormValues) => {
    const subject = `Warranty & After-Sales Policy - ${data.projectName}`
    const body = [
      'WARRANTY AND AFTER-SALES SERVICE POLICY',
      '=====================================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Project Name: ${data.projectName}`,
      `Product / Service Line: ${data.productLine}`,
      `Warranty Start Date: ${data.warrantyStart}`,
      `Service Plan: ${data.servicePlan}`,
      '',
      'Policy terms acknowledged: Yes',
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#f0f9ff_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-700 shadow-sm backdrop-blur-sm">
            Warranty
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Warranty and after-sales service policy
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            This policy outlines warranty coverage, service responsibilities, operating support, and after-sales obligations for renewable energy systems and solutions delivered by AeroSun Energy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">1. Warranty coverage</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    AeroSun Energy provides product and workmanship warranty coverage as specified in the applicable equipment supplier documentation, the final project agreement, and the installation report. Warranty terms may vary depending on the product category, manufacturer policy, and service contract signed with the customer.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">2. Warranty limitations</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Warranty coverage does not include damage caused by misuse, improper maintenance, accidents, unauthorized modifications, abnormal weather events, power surges, corrosion, tampering, or failures due to external site conditions beyond the design assumptions. Routine preventive maintenance and service compliance remain essential to maintaining eligibility for support.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">3. After-sales support</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    <p><span className="font-semibold text-slate-800">Service coordination:</span> Support requests are handled through direct communication with the project and service team for diagnosis, scheduling, and resolution.</p>
                    <p><span className="font-semibold text-slate-800">Remote assistance:</span> Remote diagnostics, performance review, and troubleshooting guidance may be provided for certain system issues.</p>
                    <p><span className="font-semibold text-slate-800">On-site support:</span> Site visits and technical interventions may be scheduled based on the service plan, warranty class, and nature of the fault.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">4. Annual maintenance contracts</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Customers may opt for annual maintenance contracts (AMC), periodic inspections, preventive checks, performance review, and support for inverter, battery, panel, and electrical health. AMC terms are subject to the selected plan and the agreed service schedule.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">5. Service request process</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Any defect or service issue should be reported promptly with system details, site information, fault symptoms, and relevant photos or readings. This helps the service team assess the issue quickly and determine whether remote support, component replacement, or site attendance is required.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-sky-100 bg-linear-to-br from-slate-950 via-slate-900 to-sky-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-200">Policy acknowledgement</p>
              <h2 className="mt-3 text-2xl font-semibold">Confirm service terms</h2>

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
                  label="Project name"
                  name="projectName"
                  placeholder="Solar rooftop project"
                  register={register}
                  error={errors.projectName}
                />

                <div>
                  <label htmlFor="productLine" className="mb-2 block text-sm font-semibold text-slate-100">
                    Product or service line
                  </label>
                  <select
                    id="productLine"
                    {...register('productLine')}
                    aria-invalid={Boolean(errors.productLine)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/30"
                  >
                    <option value="" className="text-slate-900">Select product line</option>
                    <option value="Solar PV system" className="text-slate-900">Solar PV system</option>
                    <option value="Wind energy system" className="text-slate-900">Wind energy system</option>
                    <option value="Hybrid energy system" className="text-slate-900">Hybrid energy system</option>
                    <option value="Battery storage" className="text-slate-900">Battery storage</option>
                    <option value="Maintenance plan" className="text-slate-900">Maintenance plan</option>
                    <option value="Service request" className="text-slate-900">Service request</option>
                  </select>
                  {errors.productLine && <p className="mt-2 text-xs text-rose-300">{errors.productLine.message}</p>}
                </div>

                <Field
                  label="Warranty start date"
                  name="warrantyStart"
                  type="date"
                  register={register}
                  error={errors.warrantyStart}
                />

                <div>
                  <label htmlFor="servicePlan" className="mb-2 block text-sm font-semibold text-slate-100">
                    After-sales service plan
                  </label>
                  <select
                    id="servicePlan"
                    {...register('servicePlan')}
                    aria-invalid={Boolean(errors.servicePlan)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/30"
                  >
                    <option value="" className="text-slate-900">Select service plan</option>
                    <option value="Basic support" className="text-slate-900">Basic support</option>
                    <option value="Annual maintenance contract" className="text-slate-900">Annual maintenance contract</option>
                    <option value="Priority service plan" className="text-slate-900">Priority service plan</option>
                    <option value="Monitoring and support" className="text-slate-900">Monitoring and support</option>
                    <option value="Not sure yet" className="text-slate-900">Not sure yet</option>
                  </select>
                  {errors.servicePlan && <p className="mt-2 text-xs text-rose-300">{errors.servicePlan.message}</p>}
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('acceptTerms')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-400"
                  />
                  <span>
                    I acknowledge and accept the warranty and after-sales service policy terms as outlined above.
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-xs text-rose-300">{errors.acceptTerms.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Accept warranty policy'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">Your policy acknowledgement has been prepared in your email app.</p>
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
  name: keyof WarrantyPolicyFormValues
  placeholder?: string
  type?: string
  register: ReturnType<typeof useForm<WarrantyPolicyFormValues>>['register']
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
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/30"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
