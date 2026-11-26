'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'
import { getFirstFormErrorMessage } from '@/lib/formValidation'
import { useToast } from '@/app/components/ui/ToastContext'
import { DashboardCollapsibleSection } from '@/app/components/ui/DashboardCollapsibleSection'

const createChecklistSchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.installationChecklist.validation) => z.object({
	...createBusinessContactSchema(validation).shape,
	projectName: z.string().trim().min(3, validation.projectName),
	siteLocation: z.string().trim().min(3, validation.siteLocation),
	installationDate: z.string().min(1, validation.installationDate),
	checklistStatus: z.string().min(1, validation.checklistStatus),
	safetyCheck: z.boolean().refine((value) => value === true, {
		message: validation.safetyCheck,
	}),
	commissioningCheck: z.boolean().refine((value) => value === true, {
		message: validation.commissioningCheck,
	}),
	notes: z.string().trim().min(10, validation.notes),
})

type ChecklistFormValues = z.infer<ReturnType<typeof createChecklistSchema>>

export default function InstallationChecklistPage() {
	const { t } = useLocale()
	const toast = useToast()
	const content = t.businessForms.installationChecklist
	const defaultValues = content.defaultValues
	const { labels } = content
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ChecklistFormValues>({
		resolver: zodResolver(createChecklistSchema(content.validation)),
		defaultValues,
		mode: 'onBlur',
		reValidateMode: 'onChange',
	})

	const onSubmit = async (data: ChecklistFormValues) => {
		let referenceCode: string
		try {
			referenceCode = await submitWebsiteForm('installation_checklist', data)
		} catch {
			toast.error(t.formSubmission.error)
			return
		}

		reset(defaultValues)
		toast.success(`${content.feedback.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`)
	}

	return (
		<main className="min-h-screen bg-[#f7f7f2] text-slate-800">
			<header className="relative isolate overflow-hidden border-b border-slate-700 bg-linear-to-br from-slate-950/75 via-amber-950/60 to-sky-950/75 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/10">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(245,158,11,0.22),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
				<div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-amber-100/10">
					<div className="absolute inset-10 rounded-full border border-amber-100/10" />
					<div className="absolute inset-20 rounded-full border border-amber-100/10" />
					<div className="absolute inset-32 rounded-full border border-amber-100/10" />
				</div>
				<div className="mx-auto my-6 grid w-[calc(100%-2rem)] max-w-7xl items-center gap-10 rounded-xl border border-slate-200 bg-white/20 px-5 py-14 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:px-8 sm:py-20 lg:my-8 lg:grid-cols-[1fr_auto] lg:px-10">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-white/5 px-3 py-1.5 text-xs uppercase text-amber-100 text-xs font-semibold tracking-wide leading-5">
							<span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-sm" />
							{labels.badge}
						</div>
						<h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
							{labels.heroTitle}
							<span className="mt-1 block text-amber-300">{labels.heroTitleAccent}</span>
						</h1>
						<p className="mt-5 max-w-2xl text-slate-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
							{labels.heroDescription}
						</p>
					</div>
					<div className="flex w-fit items-center gap-4 rounded-xl border border-slate-700 bg-white/[0.06] px-5 py-4 backdrop-blur">
						<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 text-xl text-amber-200">{content.sections.length}</span>
						<span className="text-base leading-5 text-slate-300">
							{labels.projectLifecycle}
							<strong className="block text-base font-bold text-white tracking-normal">{labels.checklistPhases}</strong>
						</span>
					</div>
				</div>
				<div className="border-t border-slate-700">
					<div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-xs uppercase text-amber-100/60 sm:px-8 lg:px-10 text-xs font-semibold tracking-wide leading-5">
						{labels.quickLinks.map((item) => <span key={item}>{item}</span>)}
					</div>
				</div>
			</header>

			<div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-10 lg:py-16">
				<article className="min-w-0">
					<div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
						<div className="flex items-start gap-4">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800">i</span>
							<>
								<p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{labels.glanceTitle}</p>
								<p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
									{labels.glanceDescription}
								</p>
							</>
						</div>
						<div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
							{content.summaryCards.map((card, index) => (
								<div key={card.title} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
									<span className="font-mono text-base font-bold text-amber-700 tracking-normal tabular-nums">0{index + 1}</span>
									<span className="text-base leading-5 text-slate-600">
										<strong className="block text-base text-slate-900">{card.title}</strong>
										{card.description}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-4">
						{content.sections.map((section, index) => (
							<DashboardCollapsibleSection
								key={section.title}
								id={`checklist-phase-${index + 1}`}
								title={section.title}
								titleClassName="text-slate-950"
								contentClassName="mt-3"
								className={`scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 p-5 shadow-sm sm:p-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}
							>
								<div className="flex items-start gap-4">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 font-mono text-base font-bold text-amber-800 tracking-normal tabular-nums">
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0 flex-1">
										<p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.text}</p>
										<ul className="mt-4 space-y-2.5">
											{section.points.map((item) => (
												<li key={item} className="flex items-start gap-3 text-base leading-6 text-slate-600">
													<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="h-px bg-linear-to-r from-amber-100 via-orange-100 to-transparent" />
							</DashboardCollapsibleSection>
						))}
					</div>

					<p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
						{labels.contactPromptBefore}{' '}
						<a href="/contact" className="font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-orange-800 tracking-normal">
							{labels.contactLink}
						</a>{' '}
						{labels.contactPromptAfter}
					</p>
				</article>

				<aside className="space-y-5 lg:self-start">
					<nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
						<div className="border-b border-slate-200 px-5 py-4">
							<p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{labels.findPhase}</p>
							<p className="mt-1 text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.projectLifecycle}</p>
						</div>
						<ol className="max-h-[45vh] space-y-1 overflow-y-auto p-3">
							{content.sections.map((section, index) => (
								<li key={section.title}>
									<a
										href={`#checklist-phase-${index + 1}`}
										className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-base leading-5 text-slate-600 transition hover:bg-amber-50 hover:text-amber-900"
									>
										<span className="font-mono font-bold text-amber-700/70 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
										<span>{section.title}</span>
									</a>
								</li>
							))}
						</ol>
					</nav>

					<section className={`rounded-xl border border-amber-200 p-5 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
						<p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{labels.projectEssentials}</p>
						<ul className="mt-4 space-y-3 text-base leading-6 text-slate-700">
							{labels.projectEssentialsItems.map((item) => <li key={item}>{item}</li>)}
						</ul>
					</section>

					<div className="rounded-xl border border-amber-200 bg-[#101c32] p-5 text-white shadow-sm">
						<p className="uppercase text-amber-300 text-xs font-semibold tracking-wide leading-5">{labels.submissionForm}</p>
						<h2 className="mt-2 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.recordStatus}</h2>
						<form
							onSubmit={handleSubmit(onSubmit, (formErrors) => toast.error(getFirstFormErrorMessage(formErrors) ?? t.formSubmission.error))}
							noValidate
							className="mt-5 space-y-4"
						>
							{(['customerName', 'companyName', 'email', 'phone', 'projectName', 'siteLocation', 'installationDate'] as const).map((name) => (
								<Field key={name} {...labels.fields[name]} name={name} type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'installationDate' ? 'date' : 'text'} register={register} error={errors[name]} />
							))}

							<>
								<label htmlFor="checklistStatus" className="mb-2 block text-slate-100 text-xs sm:text-sm font-semibold tracking-normal leading-5">{labels.fields.checklistStatus.label}</label>
								<select
									id="checklistStatus"
									{...register('checklistStatus')}
									aria-invalid={Boolean(errors.checklistStatus)}
									aria-describedby={errors.checklistStatus ? 'checklistStatus-error' : undefined}
									className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-base text-white outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								>
									<option value="" className="text-slate-900">{labels.fields.checklistStatus.placeholder}</option>
									{labels.statusOptions.map((option) => <option key={option} value={option} className="text-slate-900">{option}</option>)}
								</select>
								{errors.checklistStatus && <p id="checklistStatus-error" className="mt-2 text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.checklistStatus.message}</p>}
							</>

							<label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-white/5 p-3 text-slate-200 text-xs sm:text-sm font-semibold tracking-normal leading-5">
								<input type="checkbox" {...register('safetyCheck')} aria-invalid={Boolean(errors.safetyCheck)} aria-describedby={errors.safetyCheck ? 'safetyCheck-error' : undefined} className="mt-1 h-4 w-4 rounded-lg border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>{labels.fields.safetyCheck}</span>
							</label>
							{errors.safetyCheck && <p id="safetyCheck-error" className="text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.safetyCheck.message}</p>}

							<label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-white/5 p-3 text-slate-200 text-xs sm:text-sm font-semibold tracking-normal leading-5">
								<input type="checkbox" {...register('commissioningCheck')} aria-invalid={Boolean(errors.commissioningCheck)} aria-describedby={errors.commissioningCheck ? 'commissioningCheck-error' : undefined} className="mt-1 h-4 w-4 rounded-lg border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>{labels.fields.commissioningCheck}</span>
							</label>
							{errors.commissioningCheck && <p id="commissioningCheck-error" className="text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.commissioningCheck.message}</p>}

							<>
								<label htmlFor="notes" className="mb-2 block text-slate-100 text-xs sm:text-sm font-semibold tracking-normal leading-5">{labels.fields.notes.label}</label>
								<textarea
									id="notes"
									rows={4}
									{...register('notes')}
									aria-invalid={Boolean(errors.notes)}
									aria-describedby={errors.notes ? 'notes-error' : undefined}
									placeholder={labels.fields.notes.placeholder}
									className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-300 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								/>
								{errors.notes && <p id="notes-error" className="mt-2 text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.notes.message}</p>}
							</>

							<FormDataNotice className="text-amber-100/70" />
							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-4 py-3 text-base font-bold text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70 tracking-normal"
							>
								{isSubmitting ? t.formSubmission.saving : labels.submit}
							</button>

						</form>
					</div>
				</aside>
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
		<SharedFormField
			label={label}
			name={name}
			placeholder={placeholder}
			type={type}
			register={register}
			error={error}
			labelClassName="mb-2 block text-xs sm:text-sm font-semibold leading-5 text-slate-100"
			inputClassName="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-sm sm:text-base font-normal tracking-normal leading-6 text-white placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
			errorClassName="mt-2 text-xs sm:text-sm font-normal tracking-normal leading-5 text-rose-300"
		/>
	)
}
