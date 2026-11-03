'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useState } from 'react'

const checklistSections = [
	{
		title: 'Phase 1: Customer enquiry and requirement collection',
		text: 'The project starts with gathering customer details, electricity requirements, site information, available land or roof space, expected backup, and the application type. This phase establishes the project scope and customer expectations before technical work begins.',
		points: [
			'Customer name, mobile number, email, address, and installation location',
			'Monthly electricity use, connected load, sanctioned load, and critical loads',
			'Project type: residential, commercial, industrial, agriculture, or institutional',
			'System requirements for solar, wind, hybrid, or pump applications',
		],
	},
	{
		title: 'Phase 2: Site survey and feasibility assessment',
		text: 'A site visit and technical survey help determine whether the proposed project is feasible. The engineering team evaluates roof or land conditions, access, wind exposure, shading, electrical infrastructure, and project risks before design approval.',
		points: [
			'GPS coordinates, site photographs, dimensions, and access conditions',
			'Solar rooftop or land area, tilt, orientation, and shading checks',
			'Wind assessment, tower height, turbulence, and safety clearances',
			'Agricultural or hybrid requirements such as water level, discharge, and battery backup',
		],
	},
	{
		title: 'Phase 3: Engineering design and technical approval',
		text: 'Design is finalized only after site feasibility and project requirements have been captured. This phase includes load calculations, equipment sizing, single-line diagrams, layouts, and technical approval before procurement and installation.',
		points: [
			'Solar, wind, or hybrid capacity calculations and equipment sizing',
			'Panel, inverter, batteries, generator, controller, and protection selection',
			'Structural review, cable sizing, earthing, and lightning protection design',
			'Final approved design documents and bill of materials',
		],
	},
	{
		title: 'Phase 4: Quotation, agreement, and payment tracking',
		text: 'The quotation must include technical scope, commercial assumptions, exclusions, warranty, taxes, and the expected completion schedule. A signed agreement and agreed payment schedule are required before procurement begins.',
		points: [
			'Quotation explains equipment, installation, civil work, warranty, and approval responsibilities',
			'Customer confirmation and project agreement approval are recorded before execution',
			'Payment milestones are tracked against procurement, installation, and handover stages',
		],
	},
	{
		title: 'Phase 5: Government approvals and permissions',
		text: 'Approval requirements vary by project type, location, capacity, and grid configuration. The team must confirm local rules, utility requirements, and safety conditions before the system is energized.',
		points: [
			'Grid-connected solar and net-metering checks',
			'Off-grid, wind, and hybrid approvals for electrical and local compliance',
			'Agricultural pump scheme and subsidy requirements, where relevant',
			'Approval register with dates, application numbers, and status',
		],
	},
	{
		title: 'Phase 6: Material procurement and quality inspection',
		text: 'Material verification prevents wrong equipment, damaged deliveries, and site delays. Procurement must match the approved technical design and quality control must inspect materials before installation.',
		points: [
			'Check quantity, specifications, serial numbers, and manufacturer details',
			'Verify condition, invoice, delivery challan, and warranty documents',
			'Confirm solar modules, inverters, batteries, turbine equipment, and protection devices',
		],
	},
	{
		title: 'Phase 7: Installation, quality control, and electrical safety',
		text: 'The installation team works from approved drawings and quality checklists. Installation quality must be verified before commissioning so that the system remains safe, serviceable, and aligned with design standards.',
		points: [
			'Mechanical structure, roof mounting, tower, and foundation checks',
			'Electrical installation, cable routing, earthing, and protection device checks',
			'Component labelling, water-tightness, maintenance access, and safety barriers',
		],
	},
	{
		title: 'Phase 8: Pre-commissioning and safety testing',
		text: 'Before energization, the system must undergo rigorous testing with calibrated instruments. All electrical, mechanical, and control checks must pass before startup or grid synchronization is approved.',
		points: [
			'Solar string voltage, current, insulation, and earthing tests',
			'Wind turbine brake, overspeed, alignment, and vibration checks',
			'Hybrid battery, inverter, and control validation',
			'Pump performance and dry-run protection verification',
		],
	},
	{
		title: 'Phase 9: Commissioning and performance testing',
		text: 'Commissioning confirms that the project performs according to its approved operating design. After startup, the team verifies generation, synchronization, battery behavior, backup operation, and system output under real conditions.',
		points: [
			'Startup and operating checks for solar, wind, and hybrid systems',
			'Generator output, inverter control, grid response, and battery charging',
			'Water flow, pump operation, and discharge verification for pump systems',
		],
	},
	{
		title: 'Phase 10: Output verification and acceptance',
		text: 'Energy output is evaluated against design expectations and accepted operating criteria. Performance deviations need to be documented and corrected before final handover is approved.',
		points: [
			'Actual generation compared with expected design values',
			'Monitoring records, site conditions, and production review',
			'Customer acceptance criteria and final project documentation',
		],
	},
	{
		title: 'Phase 11: Customer handover and documentation',
		text: 'The final handover includes technical documents, training, warranty records, and an acceptance certificate. This phase confirms that the customer is informed and prepared to operate and maintain the system safely.',
		points: [
			'Drawings, manuals, warranties, performance reports, and approvals',
			'Customer training on operation, battery management, and emergency shutdown',
			'Final handover certificate and closure sign-off',
		],
	},
	{
		title: 'Phase 12: After-sales service and maintenance',
		text: 'Preventive maintenance keeps the project delivering reliable output and supports the long-term health of the installation. Planned inspections and service tracking reduce downtime and protect warranties.',
		points: [
			'Monthly, quarterly, half-yearly, and annual maintenance schedules',
			'Generation, panel, inverter, cable, battery, and blade inspection',
			'Service requests, corrective actions, and customer support coordination',
		],
	},
]

const projectSummaryCards = [
	{
		title: 'Project ID and scope',
		description: 'Every installation gets a unique project identity with a full project brief and scope of work.',
		accent: 'amber',
	},
	{
		title: 'Quality and safety',
		description: 'Mechanical, electrical, and commissioning checks are completed before energization and handover.',
		accent: 'sky',
	},
	{
		title: 'Customer handover',
		description: 'Final documentation, training, service plan, and customer sign-off complete the project lifecycle.',
		accent: 'emerald',
	},
]

const checklistSchema = z.object({
	customerName: z.string().trim().min(2, 'Customer name is required.'),
	companyName: z.string().trim().optional().or(z.literal('')),
	email: z.string().trim().email('Please enter a valid email address.'),
	phone: z
		.string()
		.trim()
		.min(10, 'Phone number must be at least 10 digits.')
		.regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
	projectName: z.string().trim().min(3, 'Please enter the project name.'),
	siteLocation: z.string().trim().min(3, 'Please enter the site location.'),
	installationDate: z.string().min(1, 'Please enter the installation date.'),
	checklistStatus: z.string().min(1, 'Please select the installation status.'),
	safetyCheck: z.boolean().refine((value) => value === true, {
		message: 'Please confirm the site safety checklist has been completed.',
	}),
	commissioningCheck: z.boolean().refine((value) => value === true, {
		message: 'Please confirm the commissioning checklist has been completed.',
	}),
	notes: z.string().trim().min(10, 'Please add a few notes for the installation and commissioning team.'),
})

type ChecklistFormValues = z.infer<typeof checklistSchema>

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

export default function InstallationChecklistPage() {
	const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ChecklistFormValues>({
		resolver: zodResolver(checklistSchema),
		defaultValues,
		mode: 'onBlur',
		reValidateMode: 'onChange',
	})

	const onSubmit = (data: ChecklistFormValues) => {
		const subject = `Installation & Commissioning Checklist - ${data.projectName}`
		const body = [
			'INSTALLATION, TESTING, AND COMMISSIONING CHECKLIST',
			'=================================================',
			'',
			`Customer Name: ${data.customerName}`,
			`Company Name: ${data.companyName || 'Not provided'}`,
			`Email: ${data.email}`,
			`Phone: ${data.phone}`,
			`Project Name: ${data.projectName}`,
			`Site Location: ${data.siteLocation}`,
			`Installation Date: ${data.installationDate}`,
			`Status: ${data.checklistStatus}`,
			`Safety Checklist Completed: ${data.safetyCheck ? 'Yes' : 'No'}`,
			`Commissioning Checklist Completed: ${data.commissioningCheck ? 'Yes' : 'No'}`,
			'',
			'Notes:',
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
			message: opened ? 'Your checklist has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
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
						<div className="inline-flex items-center gap-2 rounded-full border border-amber-100/20 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-100">
							<span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.8)]" />
							Plan · Install · Commission
						</div>
						<h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
							Installation.
							<span className="mt-1 block text-amber-300">Checked at every stage.</span>
						</h1>
						<p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
							A practical guide to planning, installing, testing, and handing over solar, wind, hybrid, and pump projects.
						</p>
					</div>
					<div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
						<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300/10 text-xl text-amber-200">12</span>
						<span className="text-md leading-5 text-slate-300">
							Project lifecycle
							<strong className="block text-md font-bold text-white">12 checklist phases</strong>
						</span>
					</div>
				</div>
				<div className="border-t border-white/10">
					<div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-100/60 sm:px-8 lg:px-10">
						<span>Requirements</span>
						<span>Site readiness</span>
						<span>Safe installation</span>
						<span>Testing & handover</span>
					</div>
				</div>
			</header>

			<div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-10">
				<article className="min-w-0">
					<div className="mb-8 rounded-3xl border border-amber-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
						<div className="flex items-start gap-4">
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg text-amber-800">i</span>
							<div>
								<p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">Checklist at a glance</p>
								<p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
									This operational guide covers the complete project lifecycle, from the first customer enquiry through design, approvals, procurement, installation, testing, performance verification, and final handover.
								</p>
							</div>
						</div>
						<div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
							{projectSummaryCards.map((card, index) => (
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
						{checklistSections.map((section, index) => (
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
										<h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.title.replace(/^Phase \d+:\s*/, '')}</h2>
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
						For project support or technical clarification, please visit the{' '}
						<a href="/contact" className="font-bold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-orange-800">
							Contact page
						</a>{' '}
						or use the official contact details listed on the website.
					</p>
				</article>

				<aside className="space-y-5 lg:self-start">
					<nav aria-label="Installation checklist phases" className="overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-sm">
						<div className="border-b border-slate-100 px-5 py-4">
							<p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">Find a phase</p>
							<p className="mt-1 text-md font-bold text-slate-900">Project lifecycle</p>
						</div>
						<ol className="max-h-[45vh] space-y-1 overflow-y-auto p-3">
							{checklistSections.map((section, index) => (
								<li key={section.title}>
									<a
										href={`#checklist-phase-${index + 1}`}
										className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-amber-50 hover:text-amber-900"
									>
										<span className="font-mono font-bold text-amber-700/70">{String(index + 1).padStart(2, '0')}</span>
										<span>{section.title.replace(/^Phase \d+:\s*/, '')}</span>
									</a>
								</li>
							))}
						</ol>
					</nav>

					<section className="rounded-2xl border border-amber-200 bg-white p-5">
						<p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">Project essentials</p>
						<ul className="mt-4 space-y-3 text-md leading-6 text-slate-700">
							<li>Confirm requirements and site feasibility before design approval.</li>
							<li>Verify materials and safety checks before installation and energization.</li>
							<li>Document commissioning, customer training, and final handover.</li>
						</ul>
					</section>

					<div className="rounded-2xl border border-amber-200 bg-[#101c32] p-5 text-white shadow-sm">
						<p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">Submission form</p>
						<h2 className="mt-2 text-xl font-extrabold tracking-tight">Record installation status</h2>
						<form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
							<Field label="Customer name" name="customerName" placeholder="Enter your full name" register={register} error={errors.customerName} />
							<Field label="Company name" name="companyName" placeholder="Optional company / organization" register={register} error={errors.companyName} />
							<Field label="Email address" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} />
							<Field label="Phone number" name="phone" type="tel" placeholder="+91 98765 43210" register={register} error={errors.phone} />
							<Field label="Project name" name="projectName" placeholder="Solar rooftop project" register={register} error={errors.projectName} />
							<Field label="Site location" name="siteLocation" placeholder="City / site address" register={register} error={errors.siteLocation} />
							<Field label="Installation date" name="installationDate" type="date" register={register} error={errors.installationDate} />

							<div>
								<label htmlFor="checklistStatus" className="mb-2 block text-md font-semibold text-slate-100">Installation status</label>
								<select
									id="checklistStatus"
									{...register('checklistStatus')}
									aria-invalid={Boolean(errors.checklistStatus)}
									aria-describedby={errors.checklistStatus ? 'checklistStatus-error' : undefined}
									className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								>
									<option value="" className="text-slate-900">Select status</option>
									<option value="Not started" className="text-slate-900">Not started</option>
									<option value="In progress" className="text-slate-900">In progress</option>
									<option value="Completed" className="text-slate-900">Completed</option>
									<option value="Pending follow-up" className="text-slate-900">Pending follow-up</option>
									<option value="Ready for commissioning" className="text-slate-900">Ready for commissioning</option>
								</select>
								{errors.checklistStatus && <p id="checklistStatus-error" className="mt-2 text-md text-rose-300">{errors.checklistStatus.message}</p>}
							</div>

							<label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
								<input type="checkbox" {...register('safetyCheck')} aria-invalid={Boolean(errors.safetyCheck)} aria-describedby={errors.safetyCheck ? 'safetyCheck-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>I confirm the site safety checklist has been completed before energizing the system.</span>
							</label>
							{errors.safetyCheck && <p id="safetyCheck-error" className="text-md text-rose-300">{errors.safetyCheck.message}</p>}

							<label className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
								<input type="checkbox" {...register('commissioningCheck')} aria-invalid={Boolean(errors.commissioningCheck)} aria-describedby={errors.commissioningCheck ? 'commissioningCheck-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
								<span>I confirm the commissioning checklist and performance validation have been completed.</span>
							</label>
							{errors.commissioningCheck && <p id="commissioningCheck-error" className="text-md text-rose-300">{errors.commissioningCheck.message}</p>}

							<div>
								<label htmlFor="notes" className="mb-2 block text-md font-semibold text-slate-100">Notes</label>
								<textarea
									id="notes"
									rows={4}
									{...register('notes')}
									aria-invalid={Boolean(errors.notes)}
									aria-describedby={errors.notes ? 'notes-error' : undefined}
									placeholder="Summarize installation status, testing notes, and any follow-up actions."
									className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-md text-white placeholder:text-slate-300 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
								/>
								{errors.notes && <p id="notes-error" className="mt-2 text-md text-rose-300">{errors.notes.message}</p>}
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="inline-flex w-full items-center justify-center rounded-xl bg-amber-300 px-4 py-3 text-md font-bold text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
							>
								{isSubmitting ? 'Submitting...' : 'Submit checklist'}
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
