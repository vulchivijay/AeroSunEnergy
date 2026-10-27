'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState } from 'react'

const checklistSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  projectName: z.string().trim().min(3, 'Please enter the project name.'),
  siteLocation: z.string().trim().min(3, 'Please enter the site location.'),
  installationDate: z.string().min(1, 'Please enter the installation date.'),
  checklistStatus: z.string().min(1, 'Please select the installation status.'),
  safetyCheck: z.boolean().refine((value) => value === true, {
    message: 'Please confirm the site safety checklist has been completed.',
  }),
  commissioningCheck: z.boolean().refine((value) => value === true, {
    message: 'Please confirm the commissioning checklist has been completed.',
  }),
  notes: z.string().trim().min(10, 'Please add a few notes for the installation and commissioning team.'),
})

type ChecklistFormValues = z.infer<typeof checklistSchema>

const defaultValues: ChecklistFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  projectName: '',
  siteLocation: '',
  installationDate: '',
  checklistStatus: '',
  safetyCheck: false,
  commissioningCheck: false,
  notes: '',
}

export default function InstallationChecklistPage() {
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ChecklistFormValues>({
    resolver: zodResolver(checklistSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: ChecklistFormValues) => {
    const subject = `Installation & Commissioning Checklist - ${data.projectName}`
    const body = [
      'INSTALLATION, TESTING, AND COMMISSIONING CHECKLIST',
      '=================================================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Project Name: ${data.projectName}`,
      `Site Location: ${data.siteLocation}`,
      `Installation Date: ${data.installationDate}`,
      `Status: ${data.checklistStatus}`,
      `Safety Checklist Completed: ${data.safetyCheck ? 'Yes' : 'No'}`,
      `Commissioning Checklist Completed: ${data.commissioningCheck ? 'Yes' : 'No'}`,
      '',
      'Notes:',
      data.notes,
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? 'Your checklist has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-700 shadow-sm backdrop-blur-sm">
            Checklist
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Installation, testing, and commissioning checklist
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Use this checklist to record the installation readiness, safety review, commissioning process, and final sign-off requirements before system handover.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">1. Pre-installation checks</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>• Site access, labor availability, and installation safety plan confirmed.</li>
                    <li>• Equipment received, inspected, and verified against purchase order and serial numbers.</li>
                    <li>• Mounting layout, cable route, and protective clearances reviewed before installation.</li>
                    <li>• Utility, grid, or battery integration requirements confirmed with the project team.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">2. Installation checklist</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>• Structure, support frame, and anchor points inspected and installed correctly.</li>
                    <li>• Module or turbine mounting alignment verified for safe operation and drainage.</li>
                    <li>• Cable routing, termination, earthing/grounding, and protection devices installed as per design.</li>
                    <li>• Inverter, controller, panel, and battery components mounted and labelled correctly.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">3. Testing and commissioning</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>• Continuity, insulation resistance, polarity, and voltage checks completed.</li>
                    <li>• System startup sequence, inverter communication, and protection logic verified.</li>
                    <li>• Load testing, generation readings, and battery charging/discharging confirmed.</li>
                    <li>• Final performance values and commissioning report signed off by responsible personnel.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">4. Handover and documentation</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    <li>• Final site photos, test logs, and safety record uploaded or shared.</li>
                    <li>• Customer demonstration and operating instructions delivered.</li>
                    <li>• Warranty documents, product data sheets, and maintenance guidance handed over.</li>
                    <li>• AMC or monitoring plan discussed and agreed for post-commissioning support.</li>
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-amber-100 bg-linear-to-br from-slate-950 via-slate-900 to-amber-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-200">Commissioning form</p>
              <h2 className="mt-3 text-2xl font-semibold">Submit checklist</h2>

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

                <Field
                  label="Site location"
                  name="siteLocation"
                  placeholder="City / site address"
                  register={register}
                  error={errors.siteLocation}
                />

                <Field
                  label="Installation date"
                  name="installationDate"
                  type="date"
                  register={register}
                  error={errors.installationDate}
                />

                <div>
                  <label htmlFor="checklistStatus" className="mb-2 block text-sm font-semibold text-slate-100">
                    Installation status
                  </label>
                  <select
                    id="checklistStatus"
                    {...register('checklistStatus')}
                    aria-invalid={Boolean(errors.checklistStatus)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
                  >
                    <option value="" className="text-slate-900">Select status</option>
                    <option value="Not started" className="text-slate-900">Not started</option>
                    <option value="In progress" className="text-slate-900">In progress</option>
                    <option value="Completed" className="text-slate-900">Completed</option>
                    <option value="Pending follow-up" className="text-slate-900">Pending follow-up</option>
                    <option value="Ready for commissioning" className="text-slate-900">Ready for commissioning</option>
                  </select>
                  {errors.checklistStatus && <p className="mt-2 text-xs text-rose-300">{errors.checklistStatus.message}</p>}
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('safetyCheck')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  />
                  <span>I confirm the site safety checklist has been completed before energizing the system.</span>
                </label>
                {errors.safetyCheck && <p className="text-xs text-rose-300">{errors.safetyCheck.message}</p>}

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('commissioningCheck')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  />
                  <span>I confirm the commissioning checklist and performance validation have been completed.</span>
                </label>
                {errors.commissioningCheck && <p className="text-xs text-rose-300">{errors.commissioningCheck.message}</p>}

                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-slate-100">
                    Installation and commissioning notes
                  </label>
                  <textarea
                    id="notes"
                    {...register('notes')}
                    rows={5}
                    placeholder="Include site observations, test results, deviations, and any additional actions needed."
                    aria-invalid={Boolean(errors.notes)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
                  />
                  {errors.notes && <p className="mt-2 text-xs text-rose-300">{errors.notes.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit checklist'}
                </button>

                {submitFeedback ? (
                  <p className={`text-sm font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {submitFeedback.message}
                  </p>
                ) : isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">Your checklist has been prepared in your email app.</p>
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
  name: keyof ChecklistFormValues
  placeholder?: string
  type?: string
  register: ReturnType<typeof useForm<ChecklistFormValues>>['register']
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
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
