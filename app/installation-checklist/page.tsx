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
		<main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_30%,#f8fafc_100%)] px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<section className="overflow-hidden rounded-4xl border border-amber-200 bg-white/90 shadow-[0_30px_80px_-35px_rgba(217,119,6,0.45)] backdrop-blur-sm">
					<div className="bg-linear-to-r from-[#1f2937] via-[#7c2d12] to-[#f59e0b] p-6 text-white sm:p-8 lg:p-10">
						<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
							<div className="max-w-3xl">
								<p className="text-[10px] font-black uppercase tracking-[0.32em] text-amber-100/80">Installation</p>
								<h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl lg:text-6xl">Installation checklist</h1>
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-amber-50 backdrop-blur-sm">
								Solar • Wind • Hybrid • Pump systems
							</div>
						</div>
					</div>

					<div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
						<div className="space-y-6">
							<div className="rounded-3xl border border-amber-200 bg-linear-to-br from-amber-50 to-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
								<p className="text-sm leading-7 text-slate-700">
									This checklist is designed as an operational project document for AeroSun Energy covering the complete lifecycle from the first customer enquiry to engineering, approvals, procurement, installation, testing, performance verification, and final handover.
								</p>
							</div>

							<div className="grid gap-4 md:grid-cols-3">
								{projectSummaryCards.map((card) => (
									<div
										key={card.title}
										className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
									>
										<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700">{card.accent}</p>
										<h2 className="mt-3 text-lg font-black tracking-[-0.04em] text-slate-900">{card.title}</h2>
										<p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
									</div>
								))}
							</div>

							{checklistSections.map((section) => (
								<section
									key={section.title}
									className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] sm:p-6"
								>
									<h2 className="text-xl font-black tracking-[-0.04em] text-slate-900">{section.title}</h2>
									<p className="mt-3 text-sm leading-7 text-slate-700">{section.text}</p>
									<ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
										{section.points.map((item) => (
											<li key={item} className="flex items-start gap-3">
												<span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-black text-amber-700">✓</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</section>
							))}
						</div>

						<aside className="space-y-5">
							<div className="rounded-3xl border border-amber-200 bg-slate-950 p-5 text-white shadow-[0_30px_60px_-35px_rgba(15,23,42,0.9)]">
								<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-200">Submission form</p>
								<h2 className="mt-3 text-2xl font-black tracking-tighter">Record installation status</h2>

								<form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
									<Field label="Customer name" name="customerName" placeholder="Enter your full name" register={register} error={errors.customerName} />
									<Field label="Company name" name="companyName" placeholder="Optional company / organization" register={register} error={errors.companyName} />
									<Field label="Email address" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} />
									<Field label="Phone number" name="phone" type="tel" placeholder="+91 98765 43210" register={register} error={errors.phone} />
									<Field label="Project name" name="projectName" placeholder="Solar rooftop project" register={register} error={errors.projectName} />
									<Field label="Site location" name="siteLocation" placeholder="City / site address" register={register} error={errors.siteLocation} />
									<Field label="Installation date" name="installationDate" type="date" register={register} error={errors.installationDate} />

									<div>
										<label htmlFor="checklistStatus" className="mb-2 block text-sm font-semibold text-slate-100">
											Installation status
										</label>
										<select
											id="checklistStatus"
											{...register('checklistStatus')}
											aria-invalid={Boolean(errors.checklistStatus)}
											className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
										>
											<option value="" className="text-slate-900">Select status</option>
											<option value="Not started" className="text-slate-900">Not started</option>
											<option value="In progress" className="text-slate-900">In progress</option>
											<option value="Completed" className="text-slate-900">Completed</option>
											<option value="Pending follow-up" className="text-slate-900">Pending follow-up</option>
											<option value="Ready for commissioning" className="text-slate-900">Ready for commissioning</option>
										</select>
										{errors.checklistStatus && <p className="mt-2 text-xs text-rose-300">{errors.checklistStatus.message}</p>}
									</div>

									<label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
										<input type="checkbox" {...register('safetyCheck')} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
										<span>I confirm the site safety checklist has been completed before energizing the system.</span>
									</label>
									{errors.safetyCheck && <p className="text-xs text-rose-300">{errors.safetyCheck.message}</p>}

									<label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
										<input type="checkbox" {...register('commissioningCheck')} className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
										<span>I confirm the commissioning checklist and performance validation have been completed.</span>
									</label>
									{errors.commissioningCheck && <p className="text-xs text-rose-300">{errors.commissioningCheck.message}</p>}

									<div>
										<label htmlFor="notes" className="mb-2 block text-sm font-semibold text-slate-100">
											Notes
										</label>
										<textarea
											id="notes"
											rows={4}
											{...register('notes')}
											aria-invalid={Boolean(errors.notes)}
											placeholder="Summarize installation status, testing notes, and any follow-up actions."
											className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
										/>
										{errors.notes && <p className="mt-2 text-xs text-rose-300">{errors.notes.message}</p>}
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
									>
										{isSubmitting ? 'Submitting...' : 'Submit checklist'}
									</button>

									{submitFeedback && (
										<p
											className={`rounded-2xl border px-3 py-2 text-sm ${
												submitFeedback.type === 'success'
													? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
													: 'border-rose-500/30 bg-rose-500/10 text-rose-200'
											}`}
										>
											{submitFeedback.message}
										</p>
									)}
								</form>
							</div>

							<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
								For project support or technical clarification, please use the{' '}
								<a href="/contact" className="font-semibold text-amber-700 underline decoration-amber-400 underline-offset-4">
									contact page
								</a>{' '}
								or the official contact details listed on the website.
							</div>
						</aside>
					</div>
				</section>
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
				className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none transition-all duration-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-600/30"
			/>
			{error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
		</div>
	)
}
