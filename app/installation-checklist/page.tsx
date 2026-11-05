'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const createChecklistSchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.installationChecklist.validation) => z.object({
	customerName: z.string().trim().min(2, validation.customerName),
	companyName: z.string().trim().optional().or(z.literal('')),
	email: z.string().trim().email(validation.email),
	phone: z
		.string()
		.trim()
		.min(10, validation.phoneLength)
		.regex(/^[0-9+()\-\s]+$/, validation.phoneFormat),
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
	const content = t.businessForms.installationChecklist
	const defaultValues = content.defaultValues
	const { labels } = content
	const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
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

	const onSubmit = (data: ChecklistFormValues) => {
		const emailText = content.email
		const subject = emailText.subject.replace('{projectName}', data.projectName)
		const body = [
			emailText.title,
			emailText.separator,
			'',
			`${emailText.customerName}: ${data.customerName}`,
			`${emailText.companyName}: ${data.companyName || emailText.notProvided}`,
			`${emailText.email}: ${data.email}`,
			`${emailText.phone}: ${data.phone}`,
			`${emailText.projectName}: ${data.projectName}`,
			`${emailText.siteLocation}: ${data.siteLocation}`,
			`${emailText.installationDate}: ${data.installationDate}`,
			`${emailText.status}: ${data.checklistStatus}`,
			`${emailText.safetyCheck}: ${data.safetyCheck ? emailText.yes : emailText.no}`,
			`${emailText.commissioningCheck}: ${data.commissioningCheck ? emailText.yes : emailText.no}`,
			'',
			`${emailText.notes}:`,
			data.notes,
		].join('\n')

		const opened = submitMailtoForm({
			to: 'customercare@aerosunenergy.in',
			subject,
			body,
		})

		reset(defaultValues)
		setSubmitFeedback({
			type: opened ? 'success' : 'error',
			message: opened ? content.feedback.success : content.feedback.error,
		})
	}

	return (
		<main className="min-h-screen bg-[#f2f6fb] text-slate-800">
			<header className="relative isolate overflow-hidden bg-[#101c32] text-white">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(245,158,11,0.22),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
				<div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-amber-100/10">
					<div className="absolute inset-10 rounded-full border border-amber-100/10" />
					<div className="absolute inset-20 rounded-full border border-amber-100/10" />
					<div className="absolute inset-32 rounded-full border border-amber-100/10" />
				</div>
				<div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-amber-100">
							<span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.8)]" />
							{labels.badge}
						</div>
						<h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
							{labels.heroTitle}
							<span className="mt-1 block text-amber-300">{labels.heroTitleAccent}</span>
						</h1>
						<p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
							{labels.heroDescription}
						</p>
					</div>
					<div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
						<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 text-xl text-amber-200">{content.sections.length}</span>
						<span className="text-md leading-5 text-slate-300">
							{labels.projectLifecycle}
							<strong className="block text-md font-bold text-white">{labels.checklistPhases}</strong>
						</span>
					</div>
				</div>
				<div className="border-t border-white/10">
					<div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-amber-100/60 sm:px-8 lg:px-10">
						{labels.quickLinks.map((item) => <span key={item}>{item}</span>)}
					</div>
				</div>
			</header>

			<div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-10">
				<article className="min-w-0">
					<div className="mb-8 rounded-3xl border border-amber-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
						<div className="flex items-start gap-4">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800">i</span>
							<div>
								<p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800">{labels.glanceTitle}</p>
								<p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
									{labels.glanceDescription}
								</p>
							</div>
						</div>
						<div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
							{content.summaryCards.map((card, index) => (
								<div key={card.title} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
									<span className="font-mono text-md font-bold text-amber-700">0{index + 1}</span>
									<span className="text-md leading-5 text-slate-600">
										<strong className="block text-md text-slate-900">{card.title}</strong>
										{card.description}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-4">
						{content.sections.map((section, index) => (
							<section
								key={section.title}
								id={`checklist-phase-${index + 1}`}
								className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]"
							>
								<div className="flex items-start gap-4 p-5 sm:p-6">
									<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 font-mono text-md font-bold text-amber-800">
										{String(index + 1).padStart(2, '0')}
									</span>
									<div className="min-w-0 flex-1">
										<h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.title}</h2>
										<p className="mt-3 text-md leading-7 text-slate-600 sm:text-base">{section.text}</p>
										<ul className="mt-4 space-y-2.5">
											{section.points.map((item) => (
												<li key={item} className="flex items-start gap-3 text-md leading-6 text-slate-600">
													<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="h-px bg-linear-to-r from-amber-100 via-orange-100 to-transparent" />
							</section>
						))}
					</div>

					<p className="mt-7 rounded-2xl border border-amber-200/80 bg-white p-5 text-md leading-7 text-slate-600">
						{labels.contactPromptBefore}{' '}
						<a href="/contact" className="font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-orange-800">
							{labels.contactLink}
						</a>{' '}
						{labels.contactPromptAfter}
					</p>
				</article>

				<aside className="space-y-5 lg:self-start">
					<nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-sm">
						<div className="border-b border-slate-100 px-5 py-4">
							<p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800">{labels.findPhase}</p>
							<p className="mt-1 text-md font-bold text-slate-900">{labels.projectLifecycle}</p>
						</div>
						<ol className="max-h-[45vh] space-y-1 overflow-y-auto p-3">
							{content.sections.map((section, index) => (
								<li key={section.title}>
									<a
										href={`#checklist-phase-${index + 1}`}
										className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-amber-50 hover:text-amber-900"
									>
										<span className="font-mono font-bold text-amber-700/70">{String(index + 1).padStart(2, '0')}</span>
										<span>{section.title}</span>
									</a>
								</li>
							))}
						</ol>
					</nav>

					<section className="rounded-2xl border border-amber-200 bg-white p-5">
						<p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-800">{labels.projectEssentials}</p>
						<ul className="mt-4 space-y-3 text-md leading-6 text-slate-700">
							{labels.projectEssentialsItems.map((item) => <li key={item}>{item}</li>)}
						</ul>
					</section>

					<div className="rounded-2xl border border-amber-200 bg-[#101c32] p-5 text-white shadow-sm">
						<p className="text-[12px] font-black uppercase tracking-[0.2em] text-amber-300">{labels.submissionForm}</p>
						<h2 className="mt-2 text-xl font-extrabold tracking-tight">{labels.recordStatus}</h2>
						<form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
							{(['customerName', 'companyName', 'email', 'phone', 'projectName', 'siteLocation', 'installationDate'] as const).map((name) => (
								<Field key={name} {...labels.fields[name]} name={name} type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'installationDate' ? 'date' : 'text'} register={register} error={errors[name]} />
							))}

							<div>
								<label htmlFor="checklistStatus" className="mb-2 block text-md font-semibold text-slate-100">{labels.fields.checklistStatus.label}</label>
								<select
									id="checklistStatus"
									{...register('checklistStatus')}
									aria-invalid={Boolean(errors.checklistStatus)}
									aria-describedby={errors.checklistStatus ? 'checklistStatus-error' : undefined}
									className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								>
									<option value="" className="text-slate-900">{labels.fields.checklistStatus.placeholder}</option>
									{labels.statusOptions.map((option) => <option key={option} value={option} className="text-slate-900">{option}</option>)}
								</select>
								{errors.checklistStatus && <p id="checklistStatus-error" className="mt-2 text-md text-rose-300">{errors.checklistStatus.message}</p>}
							</div>

							<label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
								<input type="checkbox" {...register('safetyCheck')} aria-invalid={Boolean(errors.safetyCheck)} aria-describedby={errors.safetyCheck ? 'safetyCheck-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>{labels.fields.safetyCheck}</span>
							</label>
							{errors.safetyCheck && <p id="safetyCheck-error" className="text-md text-rose-300">{errors.safetyCheck.message}</p>}

							<label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
								<input type="checkbox" {...register('commissioningCheck')} aria-invalid={Boolean(errors.commissioningCheck)} aria-describedby={errors.commissioningCheck ? 'commissioningCheck-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>{labels.fields.commissioningCheck}</span>
							</label>
							{errors.commissioningCheck && <p id="commissioningCheck-error" className="text-md text-rose-300">{errors.commissioningCheck.message}</p>}

							<div>
								<label htmlFor="notes" className="mb-2 block text-md font-semibold text-slate-100">{labels.fields.notes.label}</label>
								<textarea
									id="notes"
									rows={4}
									{...register('notes')}
									aria-invalid={Boolean(errors.notes)}
									aria-describedby={errors.notes ? 'notes-error' : undefined}
									placeholder={labels.fields.notes.placeholder}
									className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white placeholder:text-slate-300 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								/>
								{errors.notes && <p id="notes-error" className="mt-2 text-md text-rose-300">{errors.notes.message}</p>}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex w-full items-center justify-center rounded-xl bg-amber-300 px-4 py-3 text-md font-bold text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
							>
								{isSubmitting ? labels.submitting : labels.submit}
							</button>

							{submitFeedback && (
								<p className={`rounded-xl border px-3 py-2 text-md ${submitFeedback.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-rose-500/30 bg-rose-500/10 text-rose-200'}`}>
									{submitFeedback.message}
								</p>
							)}
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
		<div>
			<label htmlFor={name} className="mb-2 block text-md font-semibold text-slate-100">
				{label}
			</label>
			<input
				id={name}
				type={type}
				{...register(name)}
				placeholder={placeholder}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${name}-error` : undefined}
				className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
			/>
			{error && <p id={`${name}-error`} className="mt-2 text-md text-rose-300">{error.message}</p>}
		</div>
	)
}
