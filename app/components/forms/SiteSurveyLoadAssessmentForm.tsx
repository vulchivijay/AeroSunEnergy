'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

const siteSurveySchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  propertyType: z.string().min(1, 'Please select the property type.'),
  siteAddress: z.string().trim().min(5, 'Please enter the site address.'),
  city: z.string().trim().min(2, 'Please enter the city.'),
  roofType: z.string().min(1, 'Please select the roof type.'),
  availableArea: z
    .string()
    .trim()
    .min(1, 'Please enter the available area in sq ft.'),
  avgMonthlyUnits: z
    .string()
    .trim()
    .min(1, 'Please enter monthly electricity usage.'),
  peakLoadKw: z.string().trim().min(1, 'Please enter the peak load in kW.'),
  backupPriority: z.string().min(1, 'Please select the backup priority.'),
  equipmentLoads: z.string().trim().min(20, 'Please describe the main equipment and loads.'),
  timeline: z.string().min(1, 'Please select an expected timeline.'),
  notes: z.string().trim().min(10, 'Please add a few notes for the survey team.'),
})

export type SiteSurveyFormValues = z.infer<typeof siteSurveySchema>

export const defaultSiteSurveyValues: SiteSurveyFormValues = {
  customerName: '',
  email: '',
  phone: '',
  propertyType: '',
  siteAddress: '',
  city: '',
  roofType: '',
  availableArea: '',
  avgMonthlyUnits: '',
  peakLoadKw: '',
  backupPriority: '',
  equipmentLoads: '',
  timeline: '',
  notes: '',
}

export function SiteSurveyLoadAssessmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SiteSurveyFormValues>({
    resolver: zodResolver(siteSurveySchema),
    defaultValues: defaultSiteSurveyValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: SiteSurveyFormValues) => {
    const subject = `Site Survey & Load Assessment - ${data.customerName}`
    const body = [
      `Customer Name: ${data.customerName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Property Type: ${data.propertyType}`,
      `Site Address: ${data.siteAddress}`,
      `City: ${data.city}`,
      `Roof Type: ${data.roofType}`,
      `Available Area: ${data.availableArea} sq ft`,
      `Average Monthly Units: ${data.avgMonthlyUnits} kWh`,
      `Peak Load: ${data.peakLoadKw} kW`,
      `Backup Priority: ${data.backupPriority}`,
      `Equipment / Loads: ${data.equipmentLoads}`,
      `Expected Timeline: ${data.timeline}`,
      '',
      'Notes:',
      data.notes,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultSiteSurveyValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfeff_30%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[30px] border border-slate-200 bg-white/80 p-4 shadow-[0_28px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <header className="overflow-hidden rounded-[26px] border border-[#1d4f7a] bg-linear-to-r from-[#0a1d4d] via-[#113f7d] to-[#0a5c4b] p-5 text-white shadow-[0_26px_50px_-30px_rgba(15,68,120,0.9)] sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.38em] text-cyan-200/90">
                    Site Survey
                  </p>
                  <h1 className="mt-3 text-2xl font-black tracking-[-0.06em] sm:text-4xl lg:text-[2.6rem]">
                    Site Survey & Electricity-Load Assessment Form
                  </h1>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-right backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cyan-100/80">
                    Accurate assessment
                  </p>
                  <p className="mt-1 text-sm font-semibold text-emerald-200">
                    For the right solution
                  </p>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-2">
              <section className="rounded-[24px] border border-sky-200 bg-linear-to-br from-[#f3fbff] via-white to-[#eef9ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-sky-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-sky-500/20">
                    1
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Customer Information
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Name*"
                    name="customerName"
                    placeholder="Enter your full name"
                    register={register}
                    error={errors.customerName}
                    compact
                  />

                  <Field
                    label="Phone Number*"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    register={register}
                    error={errors.phone}
                    compact
                  />

                  <Field
                    label="Email ID*"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    register={register}
                    error={errors.email}
                    compact
                  />

                  <Field
                    label="City*"
                    name="city"
                    placeholder="City / district"
                    register={register}
                    error={errors.city}
                    compact
                  />

                  <div className="md:col-span-2">
                    <Field
                      label="Address*"
                      name="siteAddress"
                      placeholder="Plot / building / street address"
                      register={register}
                      error={errors.siteAddress}
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#f1fff7] via-white to-[#edfef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                    2
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Project / Enquiry Details
                  </h2>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label htmlFor="propertyType" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Type of Project
                    </label>
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-emerald-200 bg-white/80 p-3 sm:grid-cols-3">
                      {['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Domestic', 'Other'].map((option) => (
                        <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs font-medium text-slate-700">
                          <input type="radio" value={option} {...register('propertyType')} className="h-4 w-4 accent-emerald-600" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.propertyType && <p className="mt-2 text-xs text-rose-600">{errors.propertyType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="roofType" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Roof Type
                    </label>
                    <select
                      id="roofType"
                      {...register('roofType')}
                      aria-invalid={Boolean(errors.roofType)}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    >
                      <option value="">Select roof type</option>
                      <option value="Concrete roof">Concrete roof</option>
                      <option value="Metal sheet roof">Metal sheet roof</option>
                      <option value="Ground mount">Ground mount</option>
                      <option value="Open land / car park">Open land / car park</option>
                      <option value="Rooftop with shading">Rooftop with shading</option>
                    </select>
                    {errors.roofType && <p className="mt-2 text-xs text-rose-600">{errors.roofType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline')}
                      aria-invalid={Boolean(errors.timeline)}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Planning phase">Planning phase</option>
                    </select>
                    {errors.timeline && <p className="mt-2 text-xs text-rose-600">{errors.timeline.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-violet-200 bg-linear-to-br from-[#f5f3ff] via-white to-[#f6f4ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5 xl:col-span-2">
                <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 text-lg font-black text-white shadow-lg shadow-violet-500/20">
                    3
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Site Location & Accessibility
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Field
                    label="Available Area*"
                    name="availableArea"
                    placeholder="sq ft"
                    register={register}
                    error={errors.availableArea}
                    compact
                  />

                  <Field
                    label="Avg. Monthly Units*"
                    name="avgMonthlyUnits"
                    placeholder="units"
                    register={register}
                    error={errors.avgMonthlyUnits}
                    compact
                  />

                  <Field
                    label="Peak Load (kW)*"
                    name="peakLoadKw"
                    placeholder="kW"
                    register={register}
                    error={errors.peakLoadKw}
                    compact
                  />

                  <div>
                    <label htmlFor="backupPriority" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Backup Priority
                    </label>
                    <select
                      id="backupPriority"
                      {...register('backupPriority')}
                      aria-invalid={Boolean(errors.backupPriority)}
                      className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    >
                      <option value="">Select</option>
                      <option value="Essential loads only">Essential loads only</option>
                      <option value="Partial backup">Partial backup</option>
                      <option value="Full backup for all loads">Full backup for all loads</option>
                      <option value="Export to grid">Export to grid</option>
                    </select>
                    {errors.backupPriority && <p className="mt-2 text-xs text-rose-600">{errors.backupPriority.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffdf7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-amber-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-amber-500/20">
                    4
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Site Conditions
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="equipmentLoads" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Major Equipment / Load Details
                    </label>
                    <textarea
                      id="equipmentLoads"
                      {...register('equipmentLoads')}
                      rows={5}
                      placeholder="Example: 3 ACs, 20 LED lights, 3 HP water pump, 2 computers, 5 kW motor load..."
                      aria-invalid={Boolean(errors.equipmentLoads)}
                      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                    />
                    {errors.equipmentLoads && <p className="mt-2 text-xs text-rose-600">{errors.equipmentLoads.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#f2fff9] via-white to-[#f3fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                    5
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Solar Resource Assessment
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Daily Sunlight (approx.)"
                    placeholder="hours/day"
                    register={register}
                    compact
                  />

                  <Field
                    label="Available Roof / Land Area"
                    placeholder="sq m"
                    register={register}
                    compact
                  />

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Remarks / Photos
                    </label>
                    <textarea
                      id="notes"
                      {...register('notes')}
                      rows={4}
                      placeholder="Add notes for the survey team, shading observations, or technical constraints."
                      aria-invalid={Boolean(errors.notes)}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                    {errors.notes && <p className="mt-2 text-xs text-rose-600">{errors.notes.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-sky-200 bg-linear-to-br from-[#f4fbff] via-white to-[#f0f9ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-sky-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-lg font-black text-white shadow-lg shadow-sky-500/20">
                    6
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Existing Electrical Connection
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Supply Type"
                    placeholder="Single Phase / Three Phase"
                    register={register}
                    compact
                  />

                  <Field
                    label="Connected Load"
                    placeholder="kW / kVA"
                    register={register}
                    compact
                  />

                  <Field
                    label="Meter Type"
                    placeholder="Single / Net / Bi-directional"
                    register={register}
                    compact
                  />

                  <Field
                    label="Tariff Category"
                    placeholder="Domestic / Commercial"
                    register={register}
                    compact
                  />
                </div>
              </section>

              <section className="rounded-[24px] border border-cyan-200 bg-linear-to-br from-[#ecfeff] via-white to-[#f0fdff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-cyan-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-teal-500 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                    7
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Detailed Electricity Load Assessment
                  </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-white/80">
                  <div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] border-b border-cyan-200 bg-cyan-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">
                    <div className="px-3 py-3">No.</div>
                    <div className="px-3 py-3">Equipment</div>
                    <div className="px-3 py-3">Quantity</div>
                    <div className="px-3 py-3">Power</div>
                    <div className="px-3 py-3">Daily Usage</div>
                  </div>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] border-b border-cyan-100 last:border-b-0">
                      <div className="border-r border-cyan-100 px-3 py-3 text-sm font-semibold text-slate-700">{row}</div>
                      <div className="border-r border-cyan-100 px-3 py-3"><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="Equipment" /></div>
                      <div className="border-r border-cyan-100 px-3 py-3"><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="Qty" /></div>
                      <div className="border-r border-cyan-100 px-3 py-3"><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="W" /></div>
                      <div className="px-3 py-3"><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="hrs" /></div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-rose-200 bg-linear-to-br from-[#fff5f5] via-white to-[#fffaf9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-rose-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-rose-500/20">
                    8
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Special Requirements
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {['Battery Backup Required', 'EV Charging', 'Solar Water Pump', 'Hybrid System', 'Power Quality Issues', 'Other'].map((option) => (
                    <label key={option} className="flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700">
                      <input type="checkbox" className="h-4 w-4 accent-rose-600" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-lime-200 bg-linear-to-br from-[#f8fff5] via-white to-[#fafff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-lime-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-emerald-500 text-lg font-black text-white shadow-lg shadow-lime-500/20">
                    9
                  </span>
                  <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">
                    Survey Findings & Recommendation
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Recommended System Size"
                      placeholder="kW"
                      register={register}
                      compact
                    />
                    <Field
                      label="Battery Storage"
                      placeholder="kWh"
                      register={register}
                      compact
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
                      Key Observations
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Summarize key observations and next recommended steps."
                      className="w-full rounded-2xl border border-lime-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-base text-white shadow-md shadow-emerald-500/20">
                  ✓
                </span>
                Customer Acknowledgement
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#0d6a73] via-[#0d5b9f] to-[#0b3d7a] px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_-20px_rgba(17,94,89,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_34px_-18px_rgba(17,94,89,0.9)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              </button>
            </div>

            {isSubmitSuccessful && (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                Your survey request has been prepared in your email app.
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
  name?: keyof SiteSurveyFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<SiteSurveyFormValues>>['register']
  error?: { message?: string }
  compact?: boolean
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false }: FieldProps) {
  const inputId = name ?? label.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={inputId} className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        {...(name ? register(name) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 ${compact ? 'h-12' : 'h-12'}`}
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
