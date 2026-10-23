'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

type AgreementFormValues = {
  customerName: string
  companyName?: string
  email: string
  phone: string
  agreed: boolean
}

export default function CustomerAgreementPage() {
  const { t } = useLocale()
  const agreementText = ((t as any).customerAgreement ?? (en as any).customerAgreement) as any

  const agreementSchema = z.object({
    customerName: z.string().trim().min(2, agreementText.validation.customerNameRequired),
    companyName: z.string().trim().optional().or(z.literal('')),
    email: z.string().trim().email(agreementText.validation.emailInvalid),
    phone: z
      .string()
      .trim()
      .min(10, agreementText.validation.phoneMin)
      .regex(/^[0-9+()\-\s]+$/, agreementText.validation.phoneFormat),
    agreed: z.boolean().refine((value) => value === true, {
      message: agreementText.validation.agreeRequired,
    }),
  })

  const defaultValues: AgreementFormValues = {
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    agreed: false,
  }

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
    const subject = agreementText.email.subject.replace('{name}', data.customerName)
    const body = [
      agreementText.email.title,
      '=================================',
      '',
      `${agreementText.email.customerName}: ${data.customerName}`,
      `${agreementText.email.companyName}: ${data.companyName || 'Not provided'}`,
      `${agreementText.email.email}: ${data.email}`,
      `${agreementText.email.phone}: ${data.phone}`,
      '',
      agreementText.email.status,
      agreementText.email.paymentNote,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(30,64,175,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#eef6ff_28%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white/90 shadow-[0_28px_90px_-35px_rgba(15,23,42,0.38)] backdrop-blur-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-indigo-200 bg-linear-to-r from-[#0c1f51] via-[#153c78] to-[#0d6685] p-4 text-white sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl font-black shadow-[0_20px_40px_-18px_rgba(255,255,255,0.8)]">
                    C
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.34em] text-indigo-100/85">{agreementText.agreement}</p>
                    <h1 className="mt-1 text-2xl font-black tracking-[-0.06em] sm:text-3xl">{agreementText.pageTitle}</h1>
                  </div>
                </div>

                <div className="grid gap-2 text-sm sm:grid-cols-3 lg:min-w-105">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">{agreementText.ref}</p>
                    <p className="mt-1 font-semibold">AES/AGR/2026</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">{agreementText.date}</p>
                    <p className="mt-1 font-semibold">DD-MM-YYYY</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Status</p>
                    <p className="mt-1 font-semibold text-emerald-300">{agreementText.status}</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[22px] border border-sky-200 bg-linear-to-br from-[#ebf8ff] via-white to-[#f5fbff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-500 text-lg font-black text-white shadow-lg shadow-sky-500/25">1</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.details}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={agreementText.fields.agreementNo} placeholder={agreementText.fields.agreementNoPlaceholder} register={register} compact />
                      <Field label={agreementText.fields.date} placeholder={agreementText.fields.datePlaceholder} register={register} compact />
                      <Field label={agreementText.fields.projectReference} placeholder={agreementText.fields.projectReferencePlaceholder} register={register} compact />
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-emerald-200 bg-linear-to-br from-[#f1fff9] via-white to-[#f7fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-white shadow-lg shadow-emerald-500/25">2</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.customerDetails}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={agreementText.fields.customerName} name="customerName" placeholder={agreementText.fields.customerNamePlaceholder} register={register} error={errors.customerName} compact />
                      <Field label={agreementText.fields.companyName} name="companyName" placeholder={agreementText.fields.companyNamePlaceholder} register={register} error={errors.companyName} compact />
                      <Field label={agreementText.fields.phone} name="phone" type="tel" placeholder={agreementText.fields.phonePlaceholder} register={register} error={errors.phone} compact />
                      <Field label={agreementText.fields.email} name="email" type="email" placeholder={agreementText.fields.emailPlaceholder} register={register} error={errors.email} compact />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-200 bg-linear-to-br from-[#f6f1ff] via-white to-[#f7f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-500 text-lg font-black text-white shadow-lg shadow-violet-500/25">3</span>
                    <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.projectDetails}</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.22em] text-slate-700">{agreementText.fields.projectType}</label>
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-violet-200 bg-white/80 p-2.5 sm:grid-cols-3">
                        {['Rooftop Solar', 'Ground-Mounted Solar', 'Wind Energy', 'Hybrid System', 'Battery Storage', 'Other'].map((option) => (
                          <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-[11px] font-medium text-slate-700">
                            <input type="radio" className="h-4 w-4 accent-violet-600" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Field label={agreementText.fields.systemCapacity} placeholder={agreementText.fields.systemCapacityPlaceholder} register={register} compact />
                    <Field label={agreementText.fields.projectLocation} placeholder={agreementText.fields.projectLocationPlaceholder} register={register} compact />
                    <Field label={agreementText.fields.quotedAmount} placeholder={agreementText.fields.quotedAmountPlaceholder} register={register} compact />
                    <Field label={agreementText.fields.siteAccessDate} placeholder={agreementText.fields.siteAccessDatePlaceholder} register={register} compact />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <section className="rounded-3xl border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-amber-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-white shadow-lg shadow-amber-500/25">4</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.commercialTerms}</h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                      <div className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-200 bg-amber-50 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700">
                        <div className="px-3 py-3">Milestone</div>
                        <div className="px-3 py-3">%</div>
                        <div className="px-3 py-3">Amount</div>
                        <div className="px-3 py-3">Due</div>
                      </div>
                      {['Advance Payment', 'Material Supply', 'Installation', 'Testing & Commissioning', 'Final Handover'].map((milestone, index) => (
                        <div key={milestone} className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-100 last:border-b-0 text-sm text-slate-700">
                          <div className="border-r border-amber-100 px-3 py-3">{index + 1}. {milestone}</div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-3xl border border-emerald-200 bg-linear-to-br from-[#edfdf7] via-white to-[#f5fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-emerald-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-white shadow-lg shadow-emerald-500/25">5</span>
                      <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.scopeOfWork}</h2>
                    </div>

                    <div className="space-y-2 text-sm text-slate-700">
                      {['Supply of system equipment', 'Installation and commissioning', 'Testing, training, and handover', 'Net metering / utility coordination', 'Warranty support as applicable', 'AMC / O&M support if selected'].map((item) => (
                        <label key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                          <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>

                <section className="rounded-3xl border border-rose-200 bg-linear-to-br from-[#fff5f5] via-white to-[#fffafb] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-3 flex items-center gap-3 border-b border-rose-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-rose-500/25">6</span>
                    <h2 className="text-lg font-black tracking-[-0.04em] text-slate-900">{agreementText.termsAndConditions}</h2>
                  </div>

                  <ol className="space-y-2 text-sm leading-7 text-slate-700">
                    {agreementText.terms.map((item: string, index: number) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[10px] font-black text-rose-700">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </section>

              <aside className="rounded-3xl border border-indigo-200 bg-linear-to-br from-[#0b1e46] via-[#132c5e] to-[#0a1d45] p-4 text-white shadow-[0_25px_50px_-30px_rgba(15,23,42,0.9)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg font-black">7</span>
                  <h2 className="text-lg font-black tracking-[-0.04em]">{agreementText.acceptance}</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-sm leading-7 text-slate-200">{agreementText.email.accept}</p>

                  <Field label={agreementText.fields.customerName} placeholder={agreementText.fields.customerNamePlaceholder} register={register} compact dark />
                  <Field label={agreementText.fields.signature} placeholder={agreementText.fields.signaturePlaceholder} register={register} compact dark />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={agreementText.fields.date} placeholder={agreementText.fields.datePlaceholder} register={register} compact dark />
                    <Field label={agreementText.fields.place} placeholder={agreementText.fields.placePlaceholder} register={register} compact dark />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                    <input type="checkbox" {...register('agreed')} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400" />
                    <span>{agreementText.email.accept}</span>
                  </label>
                  {errors.agreed && <p className="text-xs text-rose-300">{errors.agreed.message}</p>}

                  <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-60">
                    {isSubmitting ? agreementText.submitting : agreementText.submit}
                  </button>

                  {isSubmitSuccessful && (
                    <p className="text-sm font-medium text-emerald-300">{agreementText.success}</p>
                  )}
                </div>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name?: keyof AgreementFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<AgreementFormValues>>['register']
  error?: { message?: string }
  compact?: boolean
  dark?: boolean
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false, dark = false }: FieldProps) {
  const inputId = typeof name === 'string' ? name : String(label).toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={inputId} className={`mb-2 block text-[11px] font-black uppercase tracking-[0.22em] ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        {...(name ? register(name) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`h-11 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 ${dark ? 'border-white/10 bg-white/5 text-white focus:border-indigo-400 focus:ring-indigo-600/30' : 'border-slate-200 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-100'}`}
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
