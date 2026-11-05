'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { trackGoogleAdsConversion } from '@/lib/googleAdsConversion'
import { useState, type FocusEventHandler } from 'react'
import { validateZeroBounceEmail } from '@/lib/emailValidation'
import { useLocale } from '@/lib/LocaleContext'

type EnquiryValidationMessages = {
  customerName: string
  phoneMin: string
  phoneFormat: string
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

const createEnquirySchema = (messages: EnquiryValidationMessages) => z.object({
  customerName: z.string().trim().min(2, messages.customerName),
  phone: z
    .string()
    .trim()
    .min(10, messages.phoneMin)
    .regex(/^[0-9+()\-\s]+$/, messages.phoneFormat),
  email: z.string().trim().email(messages.email),
  address: z.string().trim().min(3, messages.address),
  city: z.string().trim().min(2, messages.city),
  state: z.string().trim().min(2, messages.state),
  serviceType: z.string().trim().min(1, messages.serviceType),
  propertyType: z.string().trim().min(2, messages.propertyType),
  availableArea: z.string().trim().min(2, messages.availableArea),
  roofType: z.string().trim().min(2, messages.roofType),
  averageBill: z.string().trim().min(1, messages.averageBill),
  monthlyConsumption: z.string().trim().min(1, messages.monthlyConsumption),
  connectionType: z.string().trim().min(2, messages.connectionType),
  expectedSystemCapacity: z.string().trim().min(1, messages.expectedSystemCapacity),
  installationTimeline: z.string().trim().min(1, messages.installationTimeline),
  budgetRange: z.string().trim().min(1, messages.budgetRange),
  projectDetails: z.string().trim().min(20, messages.projectDetails),
})

export type EnquiryFormValues = z.infer<ReturnType<typeof createEnquirySchema>>

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
  const content = t.sharedForms.customerEnquiry
  const enquirySchema = createEnquirySchema(content.validation)
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
        message: content.validation.riskyEmail,
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
        message: content.validation.riskyEmail,
      })
      return
    }

    const mail = content.mail
    const subject = `${mail.subject} - ${data.customerName}`
    const body = [
      `${mail.customerName}: ${data.customerName}`,
      `${mail.phone}: ${data.phone}`,
      `${mail.email}: ${data.email}`,
      `${mail.address}: ${data.address}`,
      `${mail.city}: ${data.city}`,
      `${mail.state}: ${data.state}`,
      `${mail.enquiryType}: ${data.serviceType}`,
      `${mail.propertyType}: ${data.propertyType}`,
      `${mail.availableArea}: ${data.availableArea}`,
      `${mail.roofType}: ${data.roofType}`,
      `${mail.averageBill}: ${data.averageBill}`,
      `${mail.monthlyConsumption}: ${data.monthlyConsumption}`,
      `${mail.connectionType}: ${data.connectionType}`,
      `${mail.expectedCapacity}: ${data.expectedSystemCapacity}`,
      `${mail.installationTimeline}: ${data.installationTimeline}`,
      `${mail.budgetRange}: ${data.budgetRange}`,
      '',
      `${mail.projectDetails}:`,
      data.projectDetails,
    ].join('\n')

    const opened = submitMailtoForm({
      to: t.sharedForms.emailAddress,
      subject,
      body,
    })

    if (opened) {
      trackGoogleAdsConversion()
    }

    reset(defaultEnquiryValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? content.feedback.success : content.feedback.error,
    })
  }

  return (
    <div className="min-w-0">
      <div className="w-full">
        <Card className="overflow-hidden border border-sky-200 bg-white shadow-sm">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div id="enquiry-customer-details" className="scroll-mt-28 rounded-2xl border border-sky-200 bg-[#f4f8fc] p-4 sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-cyan-700 text-base font-black text-white shadow-lg shadow-sky-500/20">
                    1
                  </span>
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-sky-800 sm:text-xl">
                    {content.customerDetails}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label={content.fields.fullName} name="customerName" placeholder={content.placeholders.fullName} register={register} error={errors.customerName} />
                  <Field label={content.fields.phone} name="phone" type="tel" placeholder={content.placeholders.phone} register={register} error={errors.phone} />
                  <Field label={content.fields.email} name="email" type="email" placeholder={content.placeholders.email} register={register} error={errors.email} onBlur={handleEmailBlur} />
                  <Field label={content.fields.address} name="address" placeholder={content.placeholders.address} register={register} error={errors.address} />
                  <Field label={content.fields.city} name="city" placeholder={content.placeholders.city} register={register} error={errors.city} />
                  <Field label={content.fields.state} name="state" placeholder={content.placeholders.state} register={register} error={errors.state} />
                </div>
              </div>

              <div id="enquiry-service-type" className="scroll-mt-28 rounded-2xl border border-emerald-200 bg-[#f4f8fc] p-4 sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-base font-black text-slate-950 shadow-lg shadow-emerald-500/20">
                    2
                  </span>
                  <h2 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-800 sm:text-xl">
                    {content.enquiryType}
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {content.serviceOptions.map((option, index) => (
                    <SelectTile key={option.value} label={option.label} value={option.value} accent={(['emerald', 'sky', 'emerald', 'blue', 'violet', 'amber', 'emerald', 'slate'] as const)[index] ?? 'slate'} register={register} />
                  ))}
                </div>

                {errors.serviceType && <p className="mt-3 text-md text-rose-600">{errors.serviceType.message}</p>}
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div id="enquiry-property-site" className="scroll-mt-28 rounded-2xl border border-violet-200 bg-[#f4f8fc] p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-indigo-700 text-base font-black text-white shadow-lg shadow-violet-500/20">
                      3
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-violet-800 sm:text-xl">
                      {content.propertySite}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={content.propertyTypeLabel} name="propertyType" placeholder={content.propertyTypePlaceholder} register={register} error={errors.propertyType} />
                    <Field label={content.availableAreaLabel} name="availableArea" placeholder={content.availableAreaPlaceholder} register={register} error={errors.availableArea} />
                    <Field label={content.roofTypeLabel} name="roofType" placeholder={content.roofTypePlaceholder} register={register} error={errors.roofType} />
                  </div>
                </div>

                <div id="enquiry-electricity-usage" className="scroll-mt-28 rounded-2xl border border-amber-200 bg-[#f4f8fc] p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-base font-black text-slate-950 shadow-lg shadow-amber-500/20">
                      4
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-amber-800 sm:text-xl">
                      {content.electricityUsage}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={content.averageBillLabel} name="averageBill" placeholder={content.averageBillPlaceholder} register={register} error={errors.averageBill} />
                    <Field label={content.monthlyConsumptionLabel} name="monthlyConsumption" placeholder={content.monthlyConsumptionPlaceholder} register={register} error={errors.monthlyConsumption} />
                    <Field label={content.connectionTypeLabel} name="connectionType" placeholder={content.connectionTypePlaceholder} register={register} error={errors.connectionType} />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div id="enquiry-requirements" className="scroll-mt-28 rounded-2xl border border-emerald-200 bg-[#f4f8fc] p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-green-600 text-base font-black text-slate-950 shadow-lg shadow-emerald-500/20">
                      5
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-emerald-800 sm:text-xl">
                      {content.requirements}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Field label={content.expectedCapacityLabel} name="expectedSystemCapacity" placeholder={content.expectedCapacityPlaceholder} register={register} error={errors.expectedSystemCapacity} />
                    <Field label={content.installationTimelineLabel} name="installationTimeline" placeholder={content.installationTimelinePlaceholder} register={register} error={errors.installationTimeline} />
                    <Field label={content.budgetRangeLabel} name="budgetRange" placeholder={content.budgetRangePlaceholder} register={register} error={errors.budgetRange} />
                  </div>
                </div>

                <div id="enquiry-project-details" className="scroll-mt-28 rounded-2xl border border-sky-200 bg-[#f4f8fc] p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-blue-700 text-base font-black text-white shadow-lg shadow-sky-500/20">
                      6
                    </span>
                    <h2 className="text-lg font-black uppercase tracking-[0.2em] text-sky-800 sm:text-xl">
                      {content.projectDetails}
                    </h2>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="projectDetails" className="mb-2 block text-md font-semibold text-slate-800">
                      {content.requirementDetails}
                    </label>
                    <textarea
                      id="projectDetails"
                      {...register('projectDetails')}
                      rows={7}
                      placeholder={content.projectDetailsPlaceholder}
                      aria-invalid={Boolean(errors.projectDetails)}
                      aria-describedby={errors.projectDetails ? 'projectDetails-error' : undefined}
                      className="w-full rounded-2xl border border-sky-200 bg-white/90 px-4 py-3 text-md text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                    {errors.projectDetails && <p id="projectDetails-error" className="mt-2 text-md text-rose-600">{errors.projectDetails.message}</p>}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-sky-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] px-6 py-3 text-md font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_32px_-18px_rgba(15,118,110,0.85)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_38px_-18px_rgba(15,118,110,0.9)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? content.submitting : content.submit}
                </button>

                {submitFeedback ? (
                  <p className={`text-md font-semibold ${submitFeedback.type === 'success' ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {submitFeedback.message}
                  </p>
                ) : isSubmitSuccessful && (
                  <p className="text-md font-semibold text-emerald-700">{content.feedback.success}</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
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
      <span className="text-md font-semibold">{label}</span>
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
      <label htmlFor={name} className="mb-2 block text-md font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name, { onBlur })}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-2xl border border-sky-200 bg-white/90 px-4 py-3 text-md text-slate-900 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />
      {error && <p id={`${name}-error`} className="mt-2 text-md text-rose-600">{error.message}</p>}
    </div>
  )
}
