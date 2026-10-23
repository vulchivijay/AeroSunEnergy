'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'

export type EnquiryFormValues = {
  customerName: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  serviceType: string
  propertyType: string
  availableArea: string
  roofType: string
  averageBill: string
  monthlyConsumption: string
  connectionType: string
  expectedSystemCapacity: string
  installationTimeline: string
  budgetRange: string
  projectDetails: string
}

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
  const { t } = useLocale()
  const formText = t.customerEnquiry as any

  const enquirySchema = z.object({
    customerName: z.string().trim().min(2, formText.validation.customerNameRequired),
    phone: z
      .string()
      .trim()
      .min(10, formText.validation.phoneMin)
      .regex(/^[0-9+()\-\s]+$/, formText.validation.phoneFormat),
    email: z.string().trim().email(formText.validation.emailInvalid),
    address: z.string().trim().min(3, formText.validation.addressRequired),
    city: z.string().trim().min(2, formText.validation.cityRequired),
    state: z.string().trim().min(2, formText.validation.stateRequired),
    serviceType: z.string().trim().min(1, formText.validation.serviceTypeRequired),
    propertyType: z.string().trim().min(2, formText.validation.propertyTypeRequired),
    availableArea: z.string().trim().min(2, formText.validation.availableAreaRequired),
    roofType: z.string().trim().min(2, formText.validation.roofTypeRequired),
    averageBill: z.string().trim().min(1, formText.validation.averageBillRequired),
    monthlyConsumption: z.string().trim().min(1, formText.validation.monthlyConsumptionRequired),
    connectionType: z.string().trim().min(2, formText.validation.connectionTypeRequired),
    expectedSystemCapacity: z.string().trim().min(1, formText.validation.expectedSystemCapacityRequired),
    installationTimeline: z.string().trim().min(1, formText.validation.installationTimelineRequired),
    budgetRange: z.string().trim().min(1, formText.validation.budgetRangeRequired),
    projectDetails: z.string().trim().min(20, formText.validation.projectDetailsRequired),
  })

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
    const subject = formText.email.subject.replace('{name}', data.customerName)
    const body = [
      `${formText.email.customerName}: ${data.customerName}`,
      `${formText.email.phone}: ${data.phone}`,
      `${formText.email.email}: ${data.email}`,
      `${formText.email.address}: ${data.address}`,
      `${formText.email.city}: ${data.city}`,
      `${formText.email.state}: ${data.state}`,
      `${formText.email.enquiryType}: ${data.serviceType}`,
      `${formText.email.propertyType}: ${data.propertyType}`,
      `${formText.email.availableArea}: ${data.availableArea}`,
      `${formText.email.roofType}: ${data.roofType}`,
      `${formText.email.averageBill}: ${data.averageBill}`,
      `${formText.email.monthlyConsumption}: ${data.monthlyConsumption}`,
      `${formText.email.connectionType}: ${data.connectionType}`,
      `${formText.email.expectedSystemCapacity}: ${data.expectedSystemCapacity}`,
      `${formText.email.installationTimeline}: ${data.installationTimeline}`,
      `${formText.email.budgetRange}: ${data.budgetRange}`,
      '',
      `${formText.email.projectDetails}:`,
      data.projectDetails,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultEnquiryValues)
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
                    {formText.customerDetails}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label={formText.fields.customerName} name="customerName" placeholder={formText.fields.customerNamePlaceholder} register={register} error={errors.customerName} />
                  <Field label={formText.fields.phone} name="phone" type="tel" placeholder={formText.fields.phonePlaceholder} register={register} error={errors.phone} />
                  <Field label={formText.fields.email} name="email" type="email" placeholder={formText.fields.emailPlaceholder} register={register} error={errors.email} />
                  <Field label={formText.fields.address} name="address" placeholder={formText.fields.addressPlaceholder} register={register} error={errors.address} />
                  <Field label={formText.fields.city} name="city" placeholder={formText.fields.cityPlaceholder} register={register} error={errors.city} />
                  <Field label={formText.fields.state} name="state" placeholder={formText.fields.statePlaceholder} register={register} error={errors.state} />
                </div>
              </div>

              <div className="rounded-[28px] border border-emerald-200 bg-[linear-gradient(135deg,#e8fff4_0%,#edfdf8_52%,#f8fffd_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-base font-black text-white shadow-lg shadow-emerald-500/20">
                    2
                  </span>
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-800 sm:text-xl">
                    {formText.enquiryType}
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {formText.services.map((service: string) => (
                    <SelectTile key={service} label={service} value={service} accent={service.includes('Solar') ? 'emerald' : service.includes('Wind') ? 'blue' : service.includes('Hybrid') ? 'violet' : service.includes('Battery') ? 'amber' : service.includes('Operations') ? 'slate' : 'sky'} register={register} />
                  ))}
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
                      {formText.propertySite}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={formText.fields.propertyType} name="propertyType" placeholder={formText.fields.propertyTypePlaceholder} register={register} error={errors.propertyType} />
                    <Field label={formText.fields.availableArea} name="availableArea" placeholder={formText.fields.availableAreaPlaceholder} register={register} error={errors.availableArea} />
                    <Field label={formText.fields.roofType} name="roofType" placeholder={formText.fields.roofTypePlaceholder} register={register} error={errors.roofType} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-amber-200 bg-[linear-gradient(135deg,#fff8e8_0%,#fffaf1_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-base font-black text-white shadow-lg shadow-amber-500/20">
                      4
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-amber-800 sm:text-xl">
                      {formText.electricityUsage}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={formText.fields.averageBill} name="averageBill" placeholder={formText.fields.averageBillPlaceholder} register={register} error={errors.averageBill} />
                    <Field label={formText.fields.monthlyConsumption} name="monthlyConsumption" placeholder={formText.fields.monthlyConsumptionPlaceholder} register={register} error={errors.monthlyConsumption} />
                    <Field label={formText.fields.connectionType} name="connectionType" placeholder={formText.fields.connectionTypePlaceholder} register={register} error={errors.connectionType} />
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
                      {formText.requirements}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={formText.fields.expectedSystemCapacity} name="expectedSystemCapacity" placeholder={formText.fields.expectedSystemCapacityPlaceholder} register={register} error={errors.expectedSystemCapacity} />
                    <Field label={formText.fields.installationTimeline} name="installationTimeline" placeholder={formText.fields.installationTimelinePlaceholder} register={register} error={errors.installationTimeline} />
                    <Field label={formText.fields.budgetRange} name="budgetRange" placeholder={formText.fields.budgetRangePlaceholder} register={register} error={errors.budgetRange} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-sky-200 bg-[linear-gradient(135deg,#edf8ff_0%,#f4fbff_60%,#ffffff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-base font-black text-white shadow-lg shadow-sky-500/20">
                      6
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-sky-800 sm:text-xl">
                      {formText.projectDetails}
                    </h2>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="projectDetails" className="mb-2 block text-sm font-semibold text-slate-800">
                      {formText.fields.projectRequirements}
                    </label>
                    <textarea
                      id="projectDetails"
                      {...register('projectDetails')}
                      rows={7}
                      placeholder={formText.fields.projectRequirementsPlaceholder}
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
                  {isSubmitting ? formText.submitting : formText.submit}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-semibold text-emerald-700">{formText.success}</p>
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
}

function Field({ label, name, placeholder, type = 'text', register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-sky-200 bg-white/90 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
      {error && <p className="mt-2 text-xs text-rose-600">{error.message}</p>}
    </div>
  )
}
