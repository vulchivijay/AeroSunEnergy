'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { submitMailtoForm } from '@/lib/submitMailto'
import { trackGoogleAdsConversion } from '@/lib/googleAdsConversion'
import { useId, useState, type FocusEventHandler } from 'react'
import { validateZeroBounceEmail } from '@/lib/emailValidation'
import FormWarningRibbon from '@/app/components/ui/FormWarningRibbon'
import { useLocale } from '@/lib/LocaleContext'

type SiteSurveyValidationMessages = {
  customerName: string
  email: string
  riskyEmail: string
  phoneMin: string
  phoneFormat: string
  propertyType: string
  siteAddress: string
  city: string
  roofType: string
  availableArea: string
  avgMonthlyUnits: string
  peakLoadKw: string
  backupPriority: string
  equipmentLoads: string
  timeline: string
  notes: string
}

const createSiteSurveySchema = (messages: SiteSurveyValidationMessages) => z.object({
  customerName: z.string().trim().min(2, messages.customerName),
  email: z.string().trim().email(messages.email),
  phone: z
    .string()
    .trim()
    .min(10, messages.phoneMin)
    .regex(/^[0-9+()\-\s]+$/, messages.phoneFormat),
  propertyType: z.string().min(1, messages.propertyType),
  siteAddress: z.string().trim().min(5, messages.siteAddress),
  city: z.string().trim().min(2, messages.city),
  roofType: z.string().min(1, messages.roofType),
  availableArea: z
    .string()
    .trim()
    .min(1, messages.availableArea),
  avgMonthlyUnits: z
    .string()
    .trim()
    .min(1, messages.avgMonthlyUnits),
  peakLoadKw: z.string().trim().min(1, messages.peakLoadKw),
  backupPriority: z.string().min(1, messages.backupPriority),
  equipmentLoads: z.string().trim().min(20, messages.equipmentLoads),
  timeline: z.string().min(1, messages.timeline),
  notes: z.string().trim().min(10, messages.notes),
})

export type SiteSurveyFormValues = z.infer<ReturnType<typeof createSiteSurveySchema>>

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
  const { t } = useLocale()
  const content = t.sharedForms.siteSurvey
  const siteSurveySchema = createSiteSurveySchema(content.validation)
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SiteSurveyFormValues>({
    resolver: zodResolver(siteSurveySchema),
    defaultValues: defaultSiteSurveyValues,
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

  const onSubmit = async (data: SiteSurveyFormValues) => {
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
      `${mail.email}: ${data.email}`,
      `${mail.phone}: ${data.phone}`,
      `${mail.propertyType}: ${data.propertyType}`,
      `${mail.siteAddress}: ${data.siteAddress}`,
      `${mail.city}: ${data.city}`,
      `${mail.roofType}: ${data.roofType}`,
      `${mail.availableArea}: ${data.availableArea} sq ft`,
      `${mail.avgMonthlyUnits}: ${data.avgMonthlyUnits} kWh`,
      `${mail.peakLoad}: ${data.peakLoadKw} kW`,
      `${mail.backupPriority}: ${data.backupPriority}`,
      `${mail.equipmentLoads}: ${data.equipmentLoads}`,
      `${mail.timeline}: ${data.timeline}`,
      '',
      `${mail.notes}:`,
      data.notes,
    ].join('\n')

    const opened = submitMailtoForm({
      to: t.sharedForms.emailAddress,
      subject,
      body,
    })

    if (opened) {
      trackGoogleAdsConversion()
    }

    reset(defaultSiteSurveyValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? content.feedback.success : content.feedback.error,
    })
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfeff_30%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FormWarningRibbon />
        <div className="rounded-[30px] border border-slate-200 bg-white/80 p-4 shadow-[0_28px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <header className="overflow-hidden rounded-[26px] border border-[#1d4f7a] bg-linear-to-r from-[#0a1d4d] via-[#113f7d] to-[#0a5c4b] p-5 text-white shadow-[0_26px_50px_-30px_rgba(15,68,120,0.9)] sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.38em] text-cyan-200/90">
                    {content.header.eyebrow}
                  </p>
                  <h1 className="mt-3 text-2xl font-black tracking-[0.06em] sm:text-4xl lg:text-[2.6rem]">
                    {content.header.title}
                  </h1>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-right backdrop-blur-sm">
                  <p className="text-[12px] font-bold uppercase tracking-[0.32em] text-cyan-100/80">
                    {content.header.assessment}
                  </p>
                  <p className="mt-1 text-md font-semibold text-emerald-200">
                    {content.header.solution}
                  </p>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-2">
              <section className="rounded-[24px] border border-sky-200 bg-linear-to-br from-[#f3fbff] via-white to-[#eef9ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-sky-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-cyan-700 text-lg font-black text-white shadow-lg shadow-sky-500/20">
                    1
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.customerInformation}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label={content.fields.name}
                    name="customerName"
                    placeholder={content.placeholders.name}
                    register={register}
                    error={errors.customerName}
                    compact
                  />

                  <Field
                    label={content.fields.phone}
                    name="phone"
                    type="tel"
                    placeholder={content.placeholders.phone}
                    register={register}
                    error={errors.phone}
                    compact
                  />

                  <Field
                    label={content.fields.email}
                    name="email"
                    type="email"
                    placeholder={content.placeholders.email}
                    register={register}
                    error={errors.email}
                    compact
                    onBlur={handleEmailBlur}
                  />

                  <Field
                    label={content.fields.city}
                    name="city"
                    placeholder={content.placeholders.city}
                    register={register}
                    error={errors.city}
                    compact
                  />

                  <div className="md:col-span-2">
                    <Field
                      label={content.fields.address}
                      name="siteAddress"
                      placeholder={content.placeholders.address}
                      register={register}
                      error={errors.siteAddress}
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#f1fff7] via-white to-[#edfef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/20">
                    2
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.projectEnquiryDetails}
                  </h2>
                </div>

                <div className="grid gap-4">
                  <fieldset>
                    <legend className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.projectType}
                    </legend>
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-emerald-200 bg-white/80 p-3 sm:grid-cols-3">
                      {content.projectTypes.map((option) => (
                        <label key={option.value} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-md font-medium text-slate-700">
                          <input
                            type="radio"
                            value={option.value}
                            {...register('propertyType')}
                            aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
                            className="h-4 w-4 accent-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.propertyType && <p id="propertyType-error" className="mt-2 text-md text-rose-600">{errors.propertyType.message}</p>}
                  </fieldset>

                  <div>
                    <label htmlFor="roofType" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.roofType}
                    </label>
                    <select
                      id="roofType"
                      {...register('roofType')}
                      aria-invalid={Boolean(errors.roofType)}
                      aria-describedby={errors.roofType ? 'roofType-error' : undefined}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    >
                      <option value="">{content.placeholders.selectRoofType}</option>
                      {content.roofTypes.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    {errors.roofType && <p id="roofType-error" className="mt-2 text-md text-rose-600">{errors.roofType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.preferredTimeline}
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline')}
                      aria-invalid={Boolean(errors.timeline)}
                      aria-describedby={errors.timeline ? 'timeline-error' : undefined}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    >
                      <option value="">{content.placeholders.selectTimeline}</option>
                      {content.timelines.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    {errors.timeline && <p id="timeline-error" className="mt-2 text-md text-rose-600">{errors.timeline.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-violet-200 bg-linear-to-br from-[#f5f3ff] via-white to-[#f6f4ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5 xl:col-span-2">
                <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-indigo-600 text-lg font-black text-white shadow-lg shadow-violet-500/20">
                    3
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.siteLocationAccessibility}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Field
                    label={content.fields.availableArea}
                    name="availableArea"
                    placeholder={content.placeholders.availableArea}
                    register={register}
                    error={errors.availableArea}
                    compact
                  />

                  <Field
                    label={content.fields.avgMonthlyUnits}
                    name="avgMonthlyUnits"
                    placeholder={content.placeholders.avgMonthlyUnits}
                    register={register}
                    error={errors.avgMonthlyUnits}
                    compact
                  />

                  <Field
                    label={content.fields.peakLoad}
                    name="peakLoadKw"
                    placeholder={content.placeholders.peakLoad}
                    register={register}
                    error={errors.peakLoadKw}
                    compact
                  />

                  <div>
                    <label htmlFor="backupPriority" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.backupPriority}
                    </label>
                    <select
                      id="backupPriority"
                      {...register('backupPriority')}
                      aria-invalid={Boolean(errors.backupPriority)}
                      aria-describedby={errors.backupPriority ? 'backupPriority-error' : undefined}
                      className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    >
                      <option value="">{content.placeholders.select}</option>
                      {content.backupPriorities.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                    {errors.backupPriority && <p id="backupPriority-error" className="mt-2 text-md text-rose-600">{errors.backupPriority.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffdf7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-amber-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-slate-950 shadow-lg shadow-amber-500/20">
                    4
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.siteConditions}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label htmlFor="equipmentLoads" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.equipmentLoadDetails}
                    </label>
                    <textarea
                      id="equipmentLoads"
                      {...register('equipmentLoads')}
                      rows={5}
                      placeholder={content.placeholders.equipmentLoads}
                      aria-invalid={Boolean(errors.equipmentLoads)}
                      aria-describedby={errors.equipmentLoads ? 'equipmentLoads-error' : undefined}
                      className="w-full rounded-2xl border border-amber-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                    />
                    {errors.equipmentLoads && <p id="equipmentLoads-error" className="mt-2 text-md text-rose-600">{errors.equipmentLoads.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-emerald-200 bg-linear-to-br from-[#f2fff9] via-white to-[#f3fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/20">
                    5
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.solarResourceAssessment}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label={content.fields.dailySunlight}
                    placeholder={content.placeholders.dailySunlight}
                    register={register}
                    compact
                  />

                  <Field
                    label={content.fields.availableRoofArea}
                    placeholder={content.placeholders.availableRoofArea}
                    register={register}
                    compact
                  />

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.remarksPhotos}
                    </label>
                    <textarea
                      id="notes"
                      {...register('notes')}
                      rows={4}
                      placeholder={content.placeholders.notes}
                      aria-invalid={Boolean(errors.notes)}
                      aria-describedby={errors.notes ? 'notes-error' : undefined}
                      className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    />
                    {errors.notes && <p id="notes-error" className="mt-2 text-md text-rose-600">{errors.notes.message}</p>}
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-sky-200 bg-linear-to-br from-[#f4fbff] via-white to-[#f0f9ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-sky-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-blue-700 text-lg font-black text-white shadow-lg shadow-sky-500/20">
                    6
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.existingElectricalConnection}
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label={content.fields.supplyType}
                    placeholder={content.placeholders.supplyType}
                    register={register}
                    compact
                  />

                  <Field
                    label={content.fields.connectedLoad}
                    placeholder={content.placeholders.connectedLoad}
                    register={register}
                    compact
                  />

                  <Field
                    label={content.fields.meterType}
                    placeholder={content.placeholders.meterType}
                    register={register}
                    compact
                  />

                  <Field
                    label={content.fields.tariffCategory}
                    placeholder={content.placeholders.tariffCategory}
                    register={register}
                    compact
                  />
                </div>
              </section>

              <section className="rounded-[24px] border border-cyan-200 bg-linear-to-br from-[#ecfeff] via-white to-[#f0fdff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-cyan-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-700 to-teal-700 text-lg font-black text-white shadow-lg shadow-cyan-500/20">
                    7
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.detailedLoadAssessment}
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-cyan-200 bg-white/80">
                  <table className="w-full min-w-[640px] border-collapse text-left" aria-label={content.loadTable.ariaLabel}>
                    <thead>
                      <tr className="border-b border-cyan-200 bg-cyan-50 text-[12px] font-black uppercase tracking-[0.2em] text-slate-700">
                        <th scope="col" className="px-3 py-3">{content.loadTable.number}</th>
                        <th scope="col" className="px-3 py-3">{content.loadTable.equipment}</th>
                        <th scope="col" className="px-3 py-3">{content.loadTable.quantity}</th>
                        <th scope="col" className="px-3 py-3">{content.loadTable.power}</th>
                        <th scope="col" className="px-3 py-3">{content.loadTable.dailyUsage}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((row) => (
                        <tr key={row} className="border-b border-cyan-100 last:border-b-0">
                          <th scope="row" className="border-r border-cyan-100 px-3 py-3 text-md font-semibold text-slate-700">{row}</th>
                          <td className="border-r border-cyan-100 px-3 py-3">
                            <input aria-label={content.loadTable.equipmentForLoad.replace('{row}', String(row))} className="w-full bg-transparent text-md text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700" placeholder={content.placeholders.equipment} />
                          </td>
                          <td className="border-r border-cyan-100 px-3 py-3">
                            <input aria-label={content.loadTable.quantityForLoad.replace('{row}', String(row))} type="number" min="0" inputMode="numeric" className="w-full bg-transparent text-md text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700" placeholder={content.placeholders.quantity} />
                          </td>
                          <td className="border-r border-cyan-100 px-3 py-3">
                            <input aria-label={content.loadTable.powerForLoad.replace('{row}', String(row))} type="number" min="0" inputMode="numeric" className="w-full bg-transparent text-md text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700" placeholder={content.placeholders.power} />
                          </td>
                          <td className="px-3 py-3">
                            <input aria-label={content.loadTable.dailyUsageForLoad.replace('{row}', String(row))} type="number" min="0" max="24" inputMode="decimal" className="w-full bg-transparent text-md text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700" placeholder={content.placeholders.dailyUsage} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-[24px] border border-rose-200 bg-linear-to-br from-[#fff5f5] via-white to-[#fffaf9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-rose-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-rose-500/20">
                    8
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.specialRequirements}
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {content.specialRequirements.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-3 py-2.5 text-md font-medium text-slate-700">
                      <input type="checkbox" className="h-4 w-4 accent-rose-600" />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-lime-200 bg-linear-to-br from-[#f8fff5] via-white to-[#fafff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-lime-200 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-lime-500 to-emerald-500 text-lg font-black text-slate-950 shadow-lg shadow-lime-500/20">
                    9
                  </span>
                  <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">
                    {content.sections.surveyFindings}
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label={content.fields.recommendedSystemSize}
                      placeholder={content.placeholders.recommendedSystemSize}
                      register={register}
                      compact
                    />
                    <Field
                      label={content.fields.batteryStorage}
                      placeholder={content.placeholders.batteryStorage}
                      register={register}
                      compact
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
                      {content.fields.keyObservations}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={content.placeholders.keyObservations}
                      className="w-full rounded-2xl border border-lime-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-lime-500 focus:ring-4 focus:ring-lime-100"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-md font-semibold text-slate-700">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-base text-slate-950 shadow-md shadow-emerald-500/20">
                  ✓
                </span>
                {content.fields.customerAcknowledgement}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-md font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? content.submitting : content.submit}
              </button>

              {submitFeedback ? (
                <p className={`text-md font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {submitFeedback.message}
                </p>
              ) : isSubmitSuccessful && (
                <p className="text-md font-medium text-emerald-300">{content.feedback.success}</p>
              )}
            </div>
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
  onBlur?: FocusEventHandler<HTMLInputElement>
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false, onBlur }: FieldProps) {
  const generatedId = useId()
  const inputId = name ?? generatedId

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={inputId} className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        {...(name ? register(name, { onBlur }) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-md text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-sky-500 focus:ring-4 focus:ring-sky-100 ${compact ? 'h-12' : 'h-12'}`}
      />
      {error && <p id={`${inputId}-error`} className="mt-2 text-md text-rose-600">{error.message}</p>}
    </div>
  )
}
