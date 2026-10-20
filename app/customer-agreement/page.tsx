'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

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

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_32%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-indigo-700 shadow-sm backdrop-blur-sm">
            Agreement
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Customer agreement and payment terms
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            This agreement outlines the project scope, installation process, commercial conditions, and payment milestones for renewable energy services.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">1. Project scope</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    AeroSun Energy will provide consultancy, design, supply coordination, installation support, and commissioning as agreed in the final project scope. The scope may include solar, wind, hybrid, storage, monitoring, and maintenance services, as applicable to the project.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">2. Site and technical conditions</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The customer is responsible for providing lawful access to the site, relevant approvals, utility information, and any required documentation. Final system sizing, equipment selection, and execution plan remain subject to on-site assessment and technical feasibility review.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">3. Payment terms</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    <p><span className="font-semibold text-slate-800">Advance payment:</span> 30% of the agreed project value is payable on confirmation of order and project scheduling.</p>
                    <p><span className="font-semibold text-slate-800">Supply / procurement stage:</span> 40% of the contract value is payable on equipment procurement and material dispatch.</p>
                    <p><span className="font-semibold text-slate-800">Installation / commissioning:</span> 20% is payable upon installation, testing, and commissioning completion.</p>
                    <p><span className="font-semibold text-slate-800">Balance / retention:</span> 10% may be retained as final completion and documentation settlement, subject to agreed project milestones.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">4. Delivery and timelines</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Project schedules are estimates based on clear site access, approvals, weather conditions, and equipment availability. Delays due to client-side approvals, local permissions, or external supply constraints may extend the timeline and may require revised milestones.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">5. Warranties and support</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Equipment and workmanship are covered in accordance with the manufacturer and supplier warranty terms. Maintenance support, annual service plans, and after-sales response will be provided under the project agreement and AMC terms, where applicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">6. Suspension and termination</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Either party may suspend or terminate the agreement if the other party materially breaches the terms, fails to provide required approvals, or defaults in payment or project access. In such cases, any unpaid work, committed procurement, and associated costs remain payable.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">7. Governing terms</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    This agreement is governed by the applicable laws of India and shall be interpreted in accordance with the commercial and regulatory environment applicable to the project site and installation context.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-indigo-100 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-indigo-300">Customer confirmation</p>
              <h2 className="mt-3 text-2xl font-semibold">Accept and acknowledge</h2>

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
                  placeholder="Optional company name"
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

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('agreed')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400"
                  />
                  <span>
                    I have read the customer agreement and payment terms, and I agree to the conditions outlined above.
                  </span>
                </label>
                {errors.agreed && <p className="text-xs text-rose-300">{errors.agreed.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Accept agreement'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">Your acceptance has been prepared in your email app.</p>
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
  name: keyof AgreementFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<AgreementFormValues>>['register']
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
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-600/30"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
