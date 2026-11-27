'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useLocale } from '@/lib/LocaleContext'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'
import { getFirstFormErrorMessage } from '@/lib/formValidation'
import { useToast } from '@/app/components/ui/ToastContext'
import { CustomerAgreementField as Field } from "./CustomerAgreementField";
import type { AgreementFormValues } from "./customerAgreementFormTypes";
import { CustomerAgreementProcessGuide } from "./CustomerAgreementProcessGuide";

export default function CustomerAgreementPage() {
  const { t } = useLocale()
  const toast = useToast()
  const content = t.customerAgreementPage
  const formCopy = content.form
  const defaultValues = formCopy.defaultValues
  const agreementSchema = z.object({
    ...createBusinessContactSchema({
      customerName: formCopy.validation.customerNameRequired,
      email: formCopy.validation.invalidEmail,
      phoneLength: formCopy.validation.phoneMinimum,
      phoneFormat: formCopy.validation.phonePattern,
    }).shape,
    agreementNumber: z.string().max(200).optional(),
    agreementDate: z.string().max(100).optional(),
    projectReference: z.string().max(200).optional(),
    projectType: z.string().max(200).optional(),
    systemCapacity: z.string().max(200).optional(),
    projectLocation: z.string().max(300).optional(),
    quotedAmount: z.string().max(200).optional(),
    siteAccessDate: z.string().max(100).optional(),
    scopeItems: z.array(z.string().max(200)).max(100).optional(),
    acceptanceCustomerName: z.string().max(100).optional(),
    signature: z.string().max(200).optional(),
    acceptanceDate: z.string().max(100).optional(),
    acceptancePlace: z.string().max(200).optional(),
    agreed: z.boolean().refine((value) => value === true, {
      message: formCopy.validation.acceptanceRequired,
    }),
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AgreementFormValues>({
    resolver: zodResolver(agreementSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: AgreementFormValues) => {
    let referenceCode: string
    try {
      referenceCode = await submitWebsiteForm('customer_agreement', data)
    } catch {
      toast.error(t.formSubmission.error)
      return
    }

    reset(defaultValues)
    toast.success(`${formCopy.submission.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`)
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden border-b border-slate-700 bg-linear-to-br from-slate-950/75 via-indigo-950/65 to-sky-950/75 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(99,102,241,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-indigo-100/10">
          <div className="absolute inset-10 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-20 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-32 rounded-full border border-indigo-100/10" />
        </div>
        <div className="mx-auto my-6 grid grid-cols-1 w-[calc(100%-2rem)] max-w-7xl items-center gap-10 rounded-xl border border-slate-200 bg-white/20 px-5 py-14 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:px-8 sm:py-20 lg:my-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100/20 bg-white/5 px-3 py-1.5 text-xs uppercase text-indigo-100 text-xs font-semibold tracking-wide leading-5">
              <span className="shrink-0 h-2 w-2 rounded-full bg-current shadow-sm" />
              {content.hero.badge}
            </div>
            <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {content.hero.titleStart}
              <span className="mt-1 block text-sky-300">{content.hero.titleEnd}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.hero.description}
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-xl border border-slate-700 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-300/10 text-xl text-indigo-200">7</span>
            <span className="text-base leading-5 text-slate-300">
              {content.hero.lifecycle}
              <strong className="block text-base font-bold text-white tracking-normal">{content.hero.lifecycleDescription}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-slate-700">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs uppercase text-indigo-100/60 sm:px-8 lg:px-10 text-xs font-semibold tracking-wide leading-5">
            {content.hero.topics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <CustomerAgreementProcessGuide content={content} />

      <section id="customer-agreement-form" className={`scroll-mt-28 mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit, (formErrors) => toast.error(getFirstFormErrorMessage(formErrors) ?? t.formSubmission.error))}
            noValidate
            className="space-y-5 p-3 sm:p-5 lg:p-6"
          >
            <header className="overflow-hidden rounded-xl border border-slate-700 bg-linear-to-r from-indigo-950/65 via-blue-900/55 to-cyan-900/60 p-4 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700 bg-white/8 text-xl font-bold shadow-sm tracking-normal">
                    C
                  </div>
                  <div>
                    <p className="uppercase text-indigo-100/85 text-xs font-semibold tracking-wide leading-5">{formCopy.agreement}</p>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.title}</h2>
                  </div>
                </div>

                <div className="grid gap-2 text-base sm:grid-cols-3 lg:min-w-104">
                  <div className="rounded-xl border border-slate-700 bg-white/5 px-3 py-2">
                    <p className="uppercase text-indigo-100/75 text-xs font-semibold tracking-wide leading-5">{formCopy.referenceLabel}</p>
                    <p className="mt-1 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{formCopy.reference}</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-white/5 px-3 py-2">
                    <p className="uppercase text-indigo-100/75 text-xs font-semibold tracking-wide leading-5">{formCopy.date}</p>
                    <p className="mt-1 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{formCopy.datePlaceholder}</p>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-white/5 px-3 py-2">
                    <p className="uppercase text-indigo-100/75 text-xs font-semibold tracking-wide leading-5">{formCopy.status}</p>
                    <p className="mt-1 text-emerald-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{formCopy.pendingSign}</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-5">
              <section className={`space-y-5 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-[#f1f2f6] to-white' : 'bg-gradient-to-br from-white to-[#f1f2f6]'}`}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="rounded-xl border border-sky-200 bg-linear-to-br from-[#ebf8ff] via-white to-[#f5fbff] p-4 shadow-sm sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-cyan-700 text-lg font-bold text-white shadow-sm tracking-normal">1</span>
                      <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.agreementDetails}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={formCopy.agreementNumber} name="agreementNumber" placeholder={formCopy.agreementNumberPlaceholder} register={register} compact />
                      <Field label={formCopy.date} name="agreementDate" placeholder={formCopy.datePlaceholder} register={register} compact />
                      <Field label={formCopy.projectReference} name="projectReference" placeholder={formCopy.projectReferencePlaceholder} register={register} compact />
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-linear-to-br from-[#f1fff9] via-white to-[#f7fff7] p-4 shadow-sm sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-bold text-slate-950 shadow-sm tracking-normal">2</span>
                      <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.customerDetails}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={formCopy.customerName} name="customerName" placeholder={formCopy.customerNamePlaceholder} register={register} error={errors.customerName} compact />
                      <Field label={formCopy.companyName} name="companyName" placeholder={formCopy.companyNamePlaceholder} register={register} error={errors.companyName} compact />
                      <Field label={formCopy.phoneNumber} name="phone" type="tel" placeholder={formCopy.phonePlaceholder} register={register} error={errors.phone} compact />
                      <Field label={formCopy.email} name="email" type="email" placeholder={formCopy.emailPlaceholder} register={register} error={errors.email} compact />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-violet-200 bg-linear-to-br from-[#f6f1ff] via-white to-[#f7f8ff] p-4 shadow-sm sm:p-5">
                  <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-indigo-600 text-lg font-bold text-white shadow-sm tracking-normal">3</span>
                    <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.projectDetails}</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <fieldset className="md:col-span-2">
                      <legend className="mb-2 block text-xs uppercase text-slate-700 text-xs font-semibold tracking-wide leading-5">{formCopy.projectType}</legend>
                      <div className="grid grid-cols-1 gap-2 rounded-xl border border-violet-200 bg-white/80 p-2.5 sm:grid-cols-3">
                        {formCopy.projectTypeOptions.map((option) => (
                          <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-xs text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                            <input type="radio" value={option} {...register('projectType')} className="h-4 w-4 accent-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <Field label={formCopy.systemCapacity} name="systemCapacity" placeholder={formCopy.systemCapacityPlaceholder} register={register} compact />
                    <Field label={formCopy.projectLocation} name="projectLocation" placeholder={formCopy.projectLocationPlaceholder} register={register} compact />
                    <Field label={formCopy.quotedAmount} name="quotedAmount" placeholder={formCopy.quotedAmountPlaceholder} register={register} compact />
                    <Field label={formCopy.siteAccessDate} name="siteAccessDate" placeholder={formCopy.datePlaceholder} register={register} compact />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <section className={`rounded-xl border border-amber-200 p-4 shadow-sm sm:p-5 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
                    <div className="mb-3 flex items-center gap-3 border-b border-amber-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-bold text-slate-950 shadow-sm tracking-normal">4</span>
                      <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.commercialTerms}</h2>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-amber-200 bg-white/80">
                      <div className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-200 bg-amber-50 text-xs uppercase text-slate-700 text-xs font-semibold tracking-wide leading-5">
                        {formCopy.milestoneHeaders.map((header) => <div key={header} className="px-3 py-3">{header}</div>)}
                      </div>
                      {formCopy.milestones.map((milestone, index) => (
                        <div key={milestone} className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-slate-200 last:border-b-0 text-base text-slate-700">
                          <div className="border-r border-slate-200 px-3 py-3">{index + 1}. {milestone}</div>
                          <div className="border-r border-slate-200 px-3 py-3"><div className="h-7 rounded-lg border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="border-r border-slate-200 px-3 py-3"><div className="h-7 rounded-lg border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="px-3 py-3"><div className="h-7 rounded-lg border border-dashed border-slate-200 bg-slate-50/60" /></div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className={`rounded-xl border border-emerald-200 p-4 shadow-sm sm:p-5 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-[#f1f2f6] to-white' : 'bg-gradient-to-br from-white to-[#f1f2f6]'}`}>
                    <div className="mb-3 flex items-center gap-3 border-b border-emerald-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-bold text-slate-950 shadow-sm tracking-normal">5</span>
                      <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.scopeOfWork}</h2>
                    </div>

                    <div className="space-y-2 text-base text-slate-700">
                      {formCopy.scopeItems.map((item) => (
                        <label key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                          <input type="checkbox" value={item} {...register('scopeItems')} className="h-4 w-4 accent-emerald-600" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>

                <section className={`rounded-xl border border-rose-200 p-4 shadow-sm sm:p-5 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
                  <div className="mb-3 flex items-center gap-3 border-b border-rose-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-bold text-white shadow-sm tracking-normal">6</span>
                    <h2 className="text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.termsAndConditions}</h2>
                  </div>

                  <ol className="space-y-2 text-base leading-7 text-slate-700">
                    {formCopy.terms.map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700 tracking-normal">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </section>

              <section className="rounded-xl border border-indigo-200 bg-linear-to-br from-[#0b1e46] via-[#132c5e] to-[#0a1d45] p-4 text-white shadow-sm sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg font-bold tracking-normal">7</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formCopy.acceptance}</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {formCopy.acceptanceStatement}
                  </p>

                  <Field label={formCopy.customerName} name="acceptanceCustomerName" placeholder={formCopy.customerNameAcceptancePlaceholder} register={register} compact dark />
                  <Field label={formCopy.signature} name="signature" placeholder={formCopy.signaturePlaceholder} register={register} compact dark />

                  <div className="grid grid-cols-1 gap-4">
                    <Field label={formCopy.date} name="acceptanceDate" placeholder={formCopy.datePlaceholder} register={register} compact dark />
                    <Field label={formCopy.place} name="acceptancePlace" placeholder={formCopy.placePlaceholder} register={register} compact dark />
                  </div>

                  <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-white/5 p-3 text-slate-200 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                    <input type="checkbox" {...register('agreed')} aria-invalid={Boolean(errors.agreed)} aria-describedby={errors.agreed ? 'agreed-error' : undefined} className="mt-1 h-4 w-4 rounded-lg border-slate-300 text-indigo-500 focus:ring-indigo-400" />
                    <span>{formCopy.acceptCheckbox}</span>
                  </label>
                  {errors.agreed && <p id="agreed-error" className="text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.agreed.message}</p>}

                  <FormDataNotice className="text-slate-300" />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-60 tracking-normal"
                  >
                    {isSubmitting ? t.formSubmission.saving : formCopy.submit}
                  </button>

                </div>
              </section>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
