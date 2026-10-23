'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

type ChecklistFormValues = {
  customerName: string
  companyName?: string
  email: string
  phone: string
  projectName: string
  siteLocation: string
  installationDate: string
  checklistStatus: string
  safetyCheck: boolean
  commissioningCheck: boolean
  notes: string
}

export default function InstallationChecklistPage() {
  const { t } = useLocale()
  const checklistText = ((t as any).installationChecklist ?? (en as any).installationChecklist) as any

  const checklistSchema = z.object({
    customerName: z.string().trim().min(2, checklistText.validation.customerNameRequired),
    companyName: z.string().trim().optional().or(z.literal('')),
    email: z.string().trim().email(checklistText.validation.emailInvalid),
    phone: z
      .string()
      .trim()
      .min(10, checklistText.validation.phoneMin)
      .regex(/^[0-9+()\-\s]+$/, checklistText.validation.phoneFormat),
    projectName: z.string().trim().min(3, checklistText.validation.projectNameRequired),
    siteLocation: z.string().trim().min(3, checklistText.validation.siteLocationRequired),
    installationDate: z.string().min(1, checklistText.validation.installationDateRequired),
    checklistStatus: z.string().min(1, checklistText.validation.statusRequired),
    safetyCheck: z.boolean().refine((value) => value === true, {
      message: checklistText.validation.safetyRequired,
    }),
    commissioningCheck: z.boolean().refine((value) => value === true, {
      message: checklistText.validation.commissioningRequired,
    }),
    notes: z.string().trim().min(10, checklistText.validation.notesRequired),
  })

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
    const subject = checklistText.email.subject.replace('{project}', data.projectName)
    const body = [
      checklistText.email.title,
      '=================================================',
      '',
      `${checklistText.email.customerName}: ${data.customerName}`,
      `${checklistText.email.companyName}: ${data.companyName || 'Not provided'}`,
      `${checklistText.email.email}: ${data.email}`,
      `${checklistText.email.phone}: ${data.phone}`,
      `${checklistText.email.projectName}: ${data.projectName}`,
      `${checklistText.email.siteLocation}: ${data.siteLocation}`,
      `${checklistText.email.installationDate}: ${data.installationDate}`,
      `${checklistText.email.status}: ${data.checklistStatus}`,
      `${checklistText.email.safetyCheck}: ${data.safetyCheck ? 'Yes' : 'No'}`,
      `${checklistText.email.commissioningCheck}: ${data.commissioningCheck ? 'Yes' : 'No'}`,
      '',
      `${checklistText.email.notes}:`,
      data.notes,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_30%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-700 shadow-sm backdrop-blur-sm">
            {checklistText.badge}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            {checklistText.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {checklistText.intro}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">{checklistText.sections.preInstallation.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {checklistText.sections.preInstallation.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{checklistText.sections.installation.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {checklistText.sections.installation.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{checklistText.sections.testing.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {checklistText.sections.testing.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{checklistText.sections.handover.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {checklistText.sections.handover.items.map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-amber-100 bg-linear-to-br from-slate-950 via-slate-900 to-amber-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-amber-200">{checklistText.form.badge}</p>
              <h2 className="mt-3 text-2xl font-semibold">{checklistText.form.title}</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field label={checklistText.fields.customerName} name="customerName" placeholder={checklistText.fields.customerNamePlaceholder} register={register} error={errors.customerName} />
                <Field label={checklistText.fields.companyName} name="companyName" placeholder={checklistText.fields.companyNamePlaceholder} register={register} error={errors.companyName} />
                <Field label={checklistText.fields.email} name="email" type="email" placeholder={checklistText.fields.emailPlaceholder} register={register} error={errors.email} />
                <Field label={checklistText.fields.phone} name="phone" type="tel" placeholder={checklistText.fields.phonePlaceholder} register={register} error={errors.phone} />
                <Field label={checklistText.fields.projectName} name="projectName" placeholder={checklistText.fields.projectNamePlaceholder} register={register} error={errors.projectName} />
                <Field label={checklistText.fields.siteLocation} name="siteLocation" placeholder={checklistText.fields.siteLocationPlaceholder} register={register} error={errors.siteLocation} />
                <Field label={checklistText.fields.installationDate} name="installationDate" type="date" placeholder={checklistText.fields.installationDatePlaceholder} register={register} error={errors.installationDate} />

                <div>
                  <label htmlFor="checklistStatus" className="mb-2 block text-sm font-semibold text-slate-100">
                    {checklistText.fields.checklistStatus}
                  </label>
                  <select
                    id="checklistStatus"
                    {...register('checklistStatus')}
                    aria-invalid={Boolean(errors.checklistStatus)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
                  >
                    <option value="" className="text-slate-900">{checklistText.fields.checklistStatusPlaceholder}</option>
                    {checklistText.statusOptions.map((option: string) => (
                      <option key={option} value={option} className="text-slate-900">{option}</option>
                    ))}
                  </select>
                  {errors.checklistStatus && <p className="mt-2 text-xs text-rose-300">{errors.checklistStatus.message}</p>}
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('safetyCheck')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  />
                  <span>{checklistText.fields.safetyCheck}</span>
                </label>
                {errors.safetyCheck && <p className="text-xs text-rose-300">{errors.safetyCheck.message}</p>}

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('commissioningCheck')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                  />
                  <span>{checklistText.fields.commissioningCheck}</span>
                </label>
                {errors.commissioningCheck && <p className="text-xs text-rose-300">{errors.commissioningCheck.message}</p>}

                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-slate-100">
                    {checklistText.fields.notes}
                  </label>
                  <textarea
                    id="notes"
                    {...register('notes')}
                    rows={5}
                    placeholder={checklistText.fields.notesPlaceholder}
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
                  {isSubmitting ? checklistText.submitting : checklistText.submit}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">{checklistText.success}</p>
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
