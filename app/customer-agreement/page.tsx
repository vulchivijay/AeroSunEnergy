'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoFormAndReset } from '@/lib/submitMailto'
import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'

type AgreementFormValues = {
  customerName: string
  companyName?: string
  email: string
  phone: string
  agreed: boolean
}

export default function CustomerAgreementPage() {
  const { t } = useLocale()
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
    agreed: z.boolean().refine((value) => value === true, {
      message: formCopy.validation.acceptanceRequired,
    }),
  })
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
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
    const subject = `${formCopy.submission.subject} - ${data.customerName}`
    const body = [
      formCopy.submission.heading,
      formCopy.submission.separator,
      '',
      `${formCopy.submission.customerName}: ${data.customerName}`,
      `${formCopy.submission.companyName}: ${data.companyName || formCopy.submission.notProvided}`,
      `${formCopy.submission.email}: ${data.email}`,
      `${formCopy.submission.phone}: ${data.phone}`,
      '',
      formCopy.submission.status,
      formCopy.submission.paymentAcknowledged,
    ].join('\n')

    submitMailtoFormAndReset({
      to: content.contact.emailLabel,
      subject,
      body,
      defaultValues,
      reset,
      setFeedback: setSubmitFeedback,
      successMessage: formCopy.submission.success,
      errorMessage: formCopy.submission.error,
    })
  }

  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(99,102,241,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-indigo-100/10">
          <div className="absolute inset-10 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-20 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-32 rounded-full border border-indigo-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
              {content.hero.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              {content.hero.titleStart}
              <span className="mt-1 block text-sky-300">{content.hero.titleEnd}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              {content.hero.description}
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-300/10 text-xl text-indigo-200">7</span>
            <span className="text-md leading-5 text-slate-300">
              {content.hero.lifecycle}
              <strong className="block text-md font-bold text-white">{content.hero.lifecycleDescription}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-100/60 sm:px-8 lg:px-10">
            {content.hero.topics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section className="mb-8 rounded-3xl border border-indigo-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg text-indigo-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-800">{content.overview.title}</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
                    {content.overview.description}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {content.overview.cards.map((card, index) => (
                <div key={card.title} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-md font-bold text-indigo-700">0{index + 1}</span>
                  <span className="text-md leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{card.title}</strong>
                    {card.description}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mt-6 text-md font-bold text-slate-900">{content.overview.coreStepsTitle}</h2>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {content.overview.steps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3 text-md leading-5 text-slate-600">
                  <span className="font-mono font-bold text-indigo-700">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="space-y-4">
            {content.sections.map((section, index) => (
              <section key={section.title} id={`agreement-process-${index + 1}`} className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono text-md font-bold text-indigo-800">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.title.replace(/^(?:\d+\.\s*)/, '')}</h2>
                    <p className="mt-3 text-md leading-7 text-slate-600 sm:text-base">{section.text}</p>
                    <ul className="mt-4 space-y-2.5">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-linear-to-r from-indigo-100 via-sky-100 to-transparent" />
              </section>
            ))}
          </div>

          <p className="mt-7 rounded-2xl border border-indigo-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            {content.contact.question}{' '}
            <a href={`mailto:${content.contact.emailLabel}`} className="font-bold text-indigo-800 underline decoration-indigo-300 underline-offset-4">{content.contact.emailLabel}</a>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={content.navigation.ariaLabel} className="overflow-hidden rounded-2xl border border-indigo-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-800">{content.navigation.findTopic}</p>
              <p className="mt-1 text-md font-bold text-slate-900">{content.navigation.projectProcess}</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {content.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#agreement-process-${index + 1}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                    <span className="font-mono font-bold text-indigo-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.title.replace(/^(?:\d+\.\s*)/, '')}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#customer-agreement-form" className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                  <span className="font-mono font-bold text-indigo-700/70">{content.navigation.formMarker}</span>
                  <span>{content.navigation.agreementForm}</span>
                </a>
              </li>
            </ol>
          </nav>
          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-300">{content.beforeAccepting.title}</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-200">
              {content.beforeAccepting.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </aside>
      </div>

      <section id="customer-agreement-form" className="scroll-mt-28 mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-indigo-200 bg-linear-to-r from-[#0c1f51] via-[#153c78] to-[#0d6685] p-4 text-white sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl font-black shadow-[0_20px_40px_-18px_rgba(255,255,255,0.8)]">
                    C
                  </div>
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.34em] text-indigo-100/85">{formCopy.agreement}</p>
                    <h2 className="mt-1 text-2xl font-black tracking-[0.06em] sm:text-3xl">{formCopy.title}</h2>
                  </div>
                </div>

                <div className="grid gap-2 text-md sm:grid-cols-3 lg:min-w-104">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">{formCopy.referenceLabel}</p>
                    <p className="mt-1 font-semibold">{formCopy.reference}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">{formCopy.date}</p>
                    <p className="mt-1 font-semibold">{formCopy.datePlaceholder}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">{formCopy.status}</p>
                    <p className="mt-1 font-semibold text-emerald-300">{formCopy.pendingSign}</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[22px] border border-sky-200 bg-linear-to-br from-[#ebf8ff] via-white to-[#f5fbff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-cyan-700 text-lg font-black text-white shadow-lg shadow-sky-500/25">1</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.agreementDetails}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={formCopy.agreementNumber} placeholder={formCopy.agreementNumberPlaceholder} register={register} compact />
                      <Field label={formCopy.date} placeholder={formCopy.datePlaceholder} register={register} compact />
                      <Field label={formCopy.projectReference} placeholder={formCopy.projectReferencePlaceholder} register={register} compact />
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-emerald-200 bg-linear-to-br from-[#f1fff9] via-white to-[#f7fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/25">2</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.customerDetails}</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label={formCopy.customerName} name="customerName" placeholder={formCopy.customerNamePlaceholder} register={register} error={errors.customerName} compact />
                      <Field label={formCopy.companyName} name="companyName" placeholder={formCopy.companyNamePlaceholder} register={register} error={errors.companyName} compact />
                      <Field label={formCopy.phoneNumber} name="phone" type="tel" placeholder={formCopy.phonePlaceholder} register={register} error={errors.phone} compact />
                      <Field label={formCopy.email} name="email" type="email" placeholder={formCopy.emailPlaceholder} register={register} error={errors.email} compact />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-200 bg-linear-to-br from-[#f6f1ff] via-white to-[#f7f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-indigo-600 text-lg font-black text-white shadow-lg shadow-violet-500/25">3</span>
                    <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.projectDetails}</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <fieldset className="md:col-span-2">
                      <legend className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">{formCopy.projectType}</legend>
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-violet-200 bg-white/80 p-2.5 sm:grid-cols-3">
                        {formCopy.projectTypeOptions.map((option) => (
                          <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-[12px] font-medium text-slate-700">
                            <input type="radio" name="projectType" value={option} className="h-4 w-4 accent-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <Field label={formCopy.systemCapacity} placeholder={formCopy.systemCapacityPlaceholder} register={register} compact />
                    <Field label={formCopy.projectLocation} placeholder={formCopy.projectLocationPlaceholder} register={register} compact />
                    <Field label={formCopy.quotedAmount} placeholder={formCopy.quotedAmountPlaceholder} register={register} compact />
                    <Field label={formCopy.siteAccessDate} placeholder={formCopy.datePlaceholder} register={register} compact />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <section className="rounded-3xl border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-amber-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-slate-950 shadow-lg shadow-amber-500/25">4</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.commercialTerms}</h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                      <div className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-200 bg-amber-50 text-[12px] font-black uppercase tracking-[0.18em] text-slate-700">
                        {formCopy.milestoneHeaders.map((header) => <div key={header} className="px-3 py-3">{header}</div>)}
                      </div>
                      {formCopy.milestones.map((milestone, index) => (
                        <div key={milestone} className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-100 last:border-b-0 text-md text-slate-700">
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
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/25">5</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.scopeOfWork}</h2>
                    </div>

                    <div className="space-y-2 text-md text-slate-700">
                      {formCopy.scopeItems.map((item) => (
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
                    <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">{formCopy.termsAndConditions}</h2>
                  </div>

                  <ol className="space-y-2 text-md leading-7 text-slate-700">
                    {formCopy.terms.map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[12px] font-black text-rose-700">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </section>

              <aside className="rounded-3xl border border-indigo-200 bg-linear-to-br from-[#0b1e46] via-[#132c5e] to-[#0a1d45] p-4 text-white shadow-[0_25px_50px_-30px_rgba(15,23,42,0.9)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg font-black">7</span>
                  <h2 className="text-lg font-black tracking-[0.04em]">{formCopy.acceptance}</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-md leading-7 text-slate-200">
                    {formCopy.acceptanceStatement}
                  </p>

                  <Field label={formCopy.customerName} placeholder={formCopy.customerNameAcceptancePlaceholder} register={register} compact dark />
                  <Field label={formCopy.signature} placeholder={formCopy.signaturePlaceholder} register={register} compact dark />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={formCopy.date} placeholder={formCopy.datePlaceholder} register={register} compact dark />
                    <Field label={formCopy.place} placeholder={formCopy.placePlaceholder} register={register} compact dark />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
                    <input type="checkbox" {...register('agreed')} aria-invalid={Boolean(errors.agreed)} aria-describedby={errors.agreed ? 'agreed-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400" />
                    <span>{formCopy.acceptCheckbox}</span>
                  </label>
                  {errors.agreed && <p id="agreed-error" className="text-md text-rose-300">{errors.agreed.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-md font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? formCopy.sending : formCopy.submit}
                  </button>

                  {submitFeedback ? (
                    <p className={`text-md font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                      {submitFeedback.message}
                    </p>
                  ) : isSubmitSuccessful && (
                    <p className="text-md font-medium text-emerald-300">{formCopy.submission.success}</p>
                  )}
                </div>
              </aside>
            </div>
          </form>
        </div>
      </section>
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
  return (
    <SharedFormField
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      register={register}
      error={error}
      wrapperClassName={compact ? '' : 'md:col-span-2'}
      labelClassName={`mb-2 block text-[12px] font-black uppercase tracking-[0.22em] ${dark ? 'text-slate-200' : 'text-slate-700'}`}
      inputClassName={`h-11 w-full rounded-2xl border px-4 py-3 text-md outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-4 ${dark ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-600/30' : 'border-slate-200 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-100'}`}
      errorClassName="mt-2 text-md text-rose-300"
    />
  )
}
