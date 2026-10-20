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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-sky-700 shadow-sm backdrop-blur-sm">
            Site survey
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Site survey and electricity load assessment
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Share your site details and consumption patterns so we can understand your project fit, roof suitability, and load profile.
          </p>
        </div>

        <Card className="overflow-hidden border border-sky-100 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
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
                <label htmlFor="propertyType" className="mb-2 block text-sm font-semibold text-slate-800">
                  Property type
                </label>
                <select
                  id="propertyType"
                  {...register('propertyType')}
                  aria-invalid={Boolean(errors.propertyType)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">Select property type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Agricultural">Agricultural</option>
                  <option value="Other">Other</option>
                </select>
                {errors.propertyType && <p className="mt-2 text-xs text-rose-600">{errors.propertyType.message}</p>}
              </div>

              <div className="md:col-span-2">
                <Field
                  label="Site address"
                  name="siteAddress"
                  placeholder="Plot / building / street address"
                  register={register}
                  error={errors.siteAddress}
                />
              </div>

              <Field
                label="City / district"
                name="city"
                placeholder="Tirupati"
                register={register}
                error={errors.city}
              />

              <div>
                <label htmlFor="roofType" className="mb-2 block text-sm font-semibold text-slate-800">
                  Roof / installation type
                </label>
                <select
                  id="roofType"
                  {...register('roofType')}
                  aria-invalid={Boolean(errors.roofType)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">Select roof type</option>
                  <option value="Concrete roof">Concrete roof</option>
                  <option value="Metal sheet roof">Metal sheet roof</option>
                  <option value="Ground mount">Ground mount</option>
                  <option value="Open land / car park">Open land / car park</option>
                  <option value="Rooftop with shading">Rooftop with shading</option>
                  <option value="Not sure">Not sure</option>
                </select>
                {errors.roofType && <p className="mt-2 text-xs text-rose-600">{errors.roofType.message}</p>}
              </div>

              <Field
                label="Available area (sq ft)"
                name="availableArea"
                placeholder="Example: 1200"
                register={register}
                error={errors.availableArea}
              />

              <Field
                label="Average monthly electricity usage (units)"
                name="avgMonthlyUnits"
                placeholder="Example: 540"
                register={register}
                error={errors.avgMonthlyUnits}
              />

              <Field
                label="Peak load (kW)"
                name="peakLoadKw"
                placeholder="Example: 12.5"
                register={register}
                error={errors.peakLoadKw}
              />

              <div>
                <label htmlFor="backupPriority" className="mb-2 block text-sm font-semibold text-slate-800">
                  Backup priority
                </label>
                <select
                  id="backupPriority"
                  {...register('backupPriority')}
                  aria-invalid={Boolean(errors.backupPriority)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="">Select backup priority</option>
                  <option value="Essential loads only">Essential loads only</option>
                  <option value="Partial backup">Partial backup</option>
                  <option value="Full backup for all loads">Full backup for all loads</option>
                  <option value="Export to grid">Export to grid</option>
                  <option value="Not sure">Not sure</option>
                </select>
                {errors.backupPriority && <p className="mt-2 text-xs text-rose-600">{errors.backupPriority.message}</p>}
              </div>

              <div>
                <label htmlFor="timeline" className="mb-2 block text-sm font-semibold text-slate-800">
                  Expected timeline
                </label>
                <select
                  id="timeline"
                  {...register('timeline')}
                  aria-invalid={Boolean(errors.timeline)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
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

              <div className="md:col-span-2">
                <label htmlFor="equipmentLoads" className="mb-2 block text-sm font-semibold text-slate-800">
                  Major equipment / load details
                </label>
                <textarea
                  id="equipmentLoads"
                  {...register('equipmentLoads')}
                  rows={5}
                  placeholder="Example: 3 ACs, 20 LED lights, 3 HP water pump, 2 computers, 5 kW motor load, etc."
                  aria-invalid={Boolean(errors.equipmentLoads)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
                {errors.equipmentLoads && <p className="mt-2 text-xs text-rose-600">{errors.equipmentLoads.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-slate-800">
                  Additional notes for the survey team
                </label>
                <textarea
                  id="notes"
                  {...register('notes')}
                  rows={4}
                  placeholder="Tell us about access conditions, sunlight availability, preferences, or any technical constraints."
                  aria-invalid={Boolean(errors.notes)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
                {errors.notes && <p className="mt-2 text-xs text-rose-600">{errors.notes.message}</p>}
              </div>

              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit site assessment'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-700">Your survey request has been prepared in your email app.</p>
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
  name: keyof SiteSurveyFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<SiteSurveyFormValues>>['register']
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
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
