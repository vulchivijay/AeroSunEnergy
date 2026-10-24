'use client'

import { motion } from '@/lib/motion'

const ideaValidation = [
	{
		title: 'Residential rooftop solar',
		risk: 'Medium',
		recommendation: 'Validate first',
		note: 'Strong market opportunity, especially where electricity bills are high and rooftops are suitable.',
		accent: 'from-emerald-500 to-green-500',
	},
	{
		title: 'Commercial rooftop solar',
		risk: 'Medium',
		recommendation: 'Second segment',
		note: 'Strong ROI potential for businesses with daytime load and suitable roof area.',
		accent: 'from-sky-500 to-cyan-500',
	},
	{
		title: 'Solar maintenance & monitoring',
		risk: 'Low to medium',
		recommendation: 'Build recurring revenue',
		note: 'Lower execution complexity and useful for after-sales service relationships.',
		accent: 'from-violet-500 to-purple-500',
	},
	{
		title: 'Solar-wind hybrid systems',
		risk: 'Medium to high',
		recommendation: 'Pilot selectively',
		note: 'Promising where complementary generation adds value, but not the first launch priority.',
		accent: 'from-amber-500 to-orange-500',
	},
	{
		title: 'Own-brand low-wind turbine',
		risk: 'High',
		recommendation: 'Prototype first',
		note: 'High technical and commercial risk until independent field testing proves output and reliability.',
		accent: 'from-rose-500 to-red-500',
	},
]

const targetGroups = [
	{
		label: 'Homeowners',
		age: '30–55',
		profile: 'IT professionals, teachers, doctors, business owners',
		concern: 'High electricity bills',
		offer: 'Transparent rooftop solar proposals and savings estimates',
	},
	{
		label: 'Young homeowners',
		age: '25–35',
		profile: 'Software engineers, entrepreneurs',
		concern: 'Upfront installation cost',
		offer: 'Affordable system options and clearer finance guidance',
	},
	{
		label: 'Agricultural customers',
		age: '30–60',
		profile: 'Farmers and agricultural entrepreneurs',
		concern: 'Pumping costs and unreliable supply',
		offer: 'Solar pump and agriculture-ready renewable systems',
	},
	{
		label: 'SMEs',
		age: '30–60',
		profile: 'Retailers, workshops, hospitality owners',
		concern: 'Operating costs',
		offer: 'Commercial solar systems sized to daytime demand',
	},
	{
		label: 'Institutional buyers',
		age: '30–60',
		profile: 'Schools, clinics, hotels, property associations',
		concern: 'Electricity expense and continuity',
		offer: 'Application-specific solar and hybrid proposals',
	},
]

const prototypeRoadmap = [
	{
		title: 'Prototype A: Affordable Solar Package',
		subtitle: 'Service-led, repeatable launch path',
		bullets: [
			'Standard enquiry form for bill, roof, usage and ownership details',
			'Site survey and technical suitability assessment',
			'Sizing, quotation, subsidy guidance and savings estimate',
			'Maintenance, warranty and support process',
		],
		accent: 'from-emerald-500 to-teal-500',
	},
	{
		title: 'Prototype B: Smart Wind Turbine',
		subtitle: 'Technology validation before commercial claims',
		bullets: [
			'Measure wind speed, output and conversion efficiency',
			'Test starting speed, gust performance and vibration',
			'Assess safety, maintenance and real-life reliability',
			'Do not claim useful output without measured field results',
		],
		accent: 'from-sky-500 to-blue-500',
	},
	{
		title: 'Prototype C: Solar + Monitoring',
		subtitle: 'Natural product differentiator',
		bullets: [
			'Track generation, consumption, grid import/export and battery use',
			'Use proven monitoring equipment rather than proprietary hardware too early',
			'Offer a simple dashboard and transparent performance reporting',
			'Build trust through real, measurable customer outcomes',
		],
		accent: 'from-violet-500 to-fuchsia-500',
	},
]

const redFlags = [
	{
		title: 'Wind turbine claims need proof',
		text: 'Marketing a product as low-wind, silent and low-maintenance requires measured data, output curves, and independent validation.',
	},
	{
		title: 'Too many offerings at launch',
		text: 'A broad portfolio can dilute trust. Solar-first execution is safer and easier to scale.',
	},
	{
		title: 'Trust depends on proof',
		text: 'Customers want evidence: working installations, service process, real quotes, warranties and clear policies.',
	},
	{
		title: 'Subsidy and savings claims need caution',
		text: 'Actual bill savings depend on consumption, net metering, tariffs, roof conditions, system design and equipment choice.',
	},
	{
		title: 'Supplier and warranty compliance must be documented',
		text: 'Maintain verified product information, certifications, warranty terms and supplier responsibilities.',
	},
	{
		title: 'Working capital and service risk',
		text: 'Cash flow can get tight when inventory, installation, labour and after-sales support all stack together.',
	},
]

const packageOptions = [
	{
		name: 'AeroSun Essential',
		audience: 'Budget-conscious homeowners',
		positioning: 'Reliable, basic system using suitable established equipment',
		accent: 'from-emerald-500 to-lime-500',
	},
	{
		name: 'AeroSun Smart',
		audience: 'Homeowners seeking monitoring',
		positioning: 'Solar plus smart monitoring and transparent savings reporting',
		accent: 'from-sky-500 to-cyan-500',
	},
	{
		name: 'AeroSun Backup',
		audience: 'Customers with outage concerns',
		positioning: 'Hybrid solar plus suitably sized battery storage for backup use',
		accent: 'from-violet-500 to-purple-500',
	},
]

const validationPlan = [
	{ period: 'Days 1-15', action: 'Interview homeowners, business owners and electricians', result: 'At least 30 customer conversations' },
	{ period: 'Days 16-30', action: 'Build a survey, sizing and quotation process', result: '10 qualified site assessments' },
	{ period: 'Days 31-45', action: 'Test package positioning and proposal formats', result: '10-15 genuine proposals' },
	{ period: 'Days 46-60', action: 'Complete initial paid installations through partners, where feasible', result: 'First 3-5 paid projects' },
	{ period: 'Days 61-75', action: 'Collect installation feedback and check economics', result: 'Customer satisfaction and service data' },
	{ period: 'Days 76-90', action: 'Review conversion, margin and service burden', result: 'Go/no-go decision' },
]

const finalAssessment = [
	{ label: 'Residential solar service', value: 'Practical starting opportunity', level: 'High' },
	{ label: 'Commercial solar', value: 'Attractive expansion opportunity', level: 'High' },
	{ label: 'Solar maintenance and monitoring', value: 'Recurring revenue potential', level: 'High' },
	{ label: 'Hybrid systems', value: 'Needs technical and financial validation', level: 'Medium' },
	{ label: 'Low-wind turbine prototype', value: 'High validation priority before marketing claims', level: 'High' },
	{ label: 'Broad national marketing', value: 'Premature without delivery proof', level: 'Low initially' },
]

export default function ResearchDevelopmentPage() {
	return (
		<main className="bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.10),_transparent_28%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-white">
			<section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
					className="relative overflow-hidden rounded-[2rem] border border-emerald-200/80 bg-white/75 shadow-[0_35px_90px_-35px_rgba(16,185,129,0.55)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/75"
				>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.15),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%)]" />
					<div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
						<div>
							<span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 shadow-sm dark:border-emerald-800/80 dark:bg-slate-900/80 dark:text-emerald-300">
								Research & Development
							</span>
							<h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
								AeroSun Energy Private Limited
							</h1>
							<p className="mt-3 text-xl font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
								Idea validation, prototype, target customers & red flags
							</p>
							<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
								Validate affordable solar solutions first, while developing the smart wind-turbine concept as a
								separate product-validation project. Do not invest heavily in manufacturing or market a wind
								turbine as commercially proven until its performance is independently tested.
							</p>
						</div>

						<div className="flex items-center">
							<div className="w-full rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.5)] dark:border-slate-700 dark:bg-slate-900/80">
								<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
									Key recommendation
								</p>
								<div className="mt-5 rounded-[1.5rem] border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/20">
									<p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
										<span className="font-black text-emerald-700 dark:text-emerald-300">Best first move:</span> build
										a disciplined solar business model in residential and small commercial segments, then validate
										wind technology as a separate R&D effort before large investment.
									</p>
								</div>
								<div className="mt-4 space-y-3">
									{['Solar-first launch', 'Measured pilot validation', 'Trust over hype'].map((item) => (
										<div
											key={item}
											className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80"
										>
											<span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-sm font-bold text-white">
												✓
											</span>
											<span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						Recommendation summary
					</p>
					<p className="mt-4 text-xl font-semibold leading-9 text-slate-800 dark:text-slate-100">
						AeroSun Energy can be positioned as a practical solar-solutions business first, with wind innovation
						treated as a separate prototype and validation program until performance data and product-market fit
						are proven.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6 flex items-end justify-between gap-3">
					<div>
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
							1. Idea validation
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Which businesses are actually viable right now?
						</h2>
					</div>
				</div>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
					{ideaValidation.map((item) => (
						<div
							key={item.title}
							className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/75 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75"
						>
							<div className={`h-2 bg-linear-to-r ${item.accent}`} />
							<div className="p-4">
								<p className="text-sm font-black text-slate-900 dark:text-white">{item.title}</p>
								<div className="mt-4 flex items-center justify-between gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 dark:border-slate-700 dark:bg-slate-800">
									<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
										Risk
									</span>
									<span className="text-xs font-bold text-slate-700 dark:text-slate-200">{item.risk}</span>
								</div>
								<div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-2 dark:border-emerald-900/60 dark:bg-emerald-950/20">
									<p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
										Recommendation
									</p>
									<p className="mt-1 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
										{item.recommendation}
									</p>
								</div>
								<p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.note}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">
							2. Who should AeroSun target?
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Priority customer groups
						</h2>

						<div className="mt-6 space-y-4">
							{targetGroups.map((group) => (
								<div
									key={group.label}
									className="rounded-[1.5rem] border border-violet-100 bg-white/80 p-4 shadow-[0_18px_35px_-28px_rgba(139,92,246,0.5)] dark:border-violet-900/60 dark:bg-slate-900/75"
								>
									<div className="flex flex-wrap items-center justify-between gap-2">
										<h3 className="text-lg font-black text-slate-900 dark:text-white">{group.label}</h3>
										<span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
											{group.age}
										</span>
									</div>
									<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">Profile:</span> {group.profile}
									</p>
									<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">Main concern:</span> {group.concern}
									</p>
									<p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">AeroSun offer:</span> {group.offer}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white/75 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							Priority order
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Best launch sequence
						</h2>

						<ol className="mt-6 space-y-4">
							{[
								'Owner-occupied independent homes with high electricity bills',
								'Small and medium businesses with substantial daytime consumption',
								'Farmers with suitable sites and a clear business case for solar pumping',
								'Schools, clinics, hotels and other institutional customers',
								'Apartment associations after installation and service proof is established',
							].map((item, index) => (
								<li
									key={item}
									className="flex gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/85 p-3 dark:border-slate-700 dark:bg-slate-800/80"
								>
									<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">
										{index + 1}
									</div>
									<span className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						3. Develop a low-cost prototype before expansion
					</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						Three practical validation tracks
					</h2>
				</div>

				<div className="grid gap-5 lg:grid-cols-3">
					{prototypeRoadmap.map((item) => (
						<div
							key={item.title}
							className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-[0_22px_50px_-30px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75"
						>
							<div className={`h-2 bg-linear-to-r ${item.accent}`} />
							<div className="p-5">
								<h3 className="text-xl font-black text-slate-900 dark:text-white">{item.title}</h3>
								<p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.subtitle}</p>
								<ul className="mt-4 space-y-3">
									{item.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
											<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">4. Red flags</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						Risk areas to address before scale-up
					</h2>
				</div>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{redFlags.map((flag) => (
						<div
							key={flag.title}
							className="rounded-[1.5rem] border border-rose-100 bg-white/80 p-4 shadow-[0_20px_40px_-30px_rgba(251,113,133,0.5)] dark:border-rose-900/40 dark:bg-slate-900/75"
						>
							<div className="flex items-center gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
								<p className="text-sm font-black uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">
									Risk
								</p>
							</div>
							<h3 className="mt-3 text-lg font-black text-slate-900 dark:text-white">{flag.title}</h3>
							<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{flag.text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						5. Price strategy
					</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						A more realistic market position
					</h2>
				</div>

				<div className="grid gap-5 lg:grid-cols-3">
					{packageOptions.map((option) => (
						<div
							key={option.name}
							className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-[0_22px_50px_-30px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75"
						>
							<div className={`h-2 bg-linear-to-r ${option.accent}`} />
							<div className="p-5">
								<h3 className="text-xl font-black text-slate-900 dark:text-white">{option.name}</h3>
								<p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{option.audience}</p>
								<p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{option.positioning}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">
						6. Practical 90-day validation plan
					</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						Measure what customers will really pay for
					</h2>
				</div>

				<div className="space-y-4">
					{validationPlan.map((step) => (
						<div
							key={step.period}
							className="grid gap-3 rounded-[1.5rem] border border-indigo-100 bg-white/80 p-4 md:grid-cols-[180px_1fr_1fr] dark:border-indigo-900/40 dark:bg-slate-900/75"
						>
							<div className="flex items-center justify-center rounded-[1rem] bg-indigo-100 px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
								{step.period}
							</div>
							<div>
								<p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
									Action
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{step.action}</p>
							</div>
							<div>
								<p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
									Target evidence
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{step.result}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							7. Final assessment
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Current assessment of AeroSun
						</h2>
						<div className="mt-6 space-y-3">
							{finalAssessment.map((item) => (
								<div
									key={item.label}
									className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80"
								>
									<div>
										<p className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</p>
										<p className="text-xs text-slate-600 dark:text-slate-300">{item.value}</p>
									</div>
									<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
										{item.level}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
							Recommended operating model
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Two parallel tracks
						</h2>
						<div className="mt-6 space-y-4">
							<div className="rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
									Track 1
								</p>
								<p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
									Sell and install suitable solar systems using proven equipment and qualified partners. Focus on
									transparent pricing, trust, and dependable after-sales support.
								</p>
							</div>
							<div className="rounded-[1.5rem] border border-sky-100 bg-white/80 p-4 dark:border-sky-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
									Track 2
								</p>
								<p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
									Develop the smart wind turbine as a measured technology project with field testing, independent
									verification, and disciplined proof before strong commercial claims.
								</p>
							</div>
						</div>

						<div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900/75">
							<p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
								Decision questions
							</p>
							<ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
								<li>• What is AeroSun’s current stage: website only, solar activity, or prototype stage?</li>
								<li>• What is the available startup budget for validation?</li>
								<li>• Which product should be prioritised in the next six months?</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(59,130,246,0.45)] dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
						AeroSun Energy: Competitor analysis, profitability, opportunities and risks in India
					</p>
					<h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						The most relevant comparison is not “who is big,” but “who serves the same customer with the same economics.”
					</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For AeroSun Energy Private Limited, the most useful comparison is not simply which renewable-energy companies are
						profitable. It is which competitors target the same customers, how they make money, what risks they face, and where a new
						company can compete successfully.
					</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						I would divide the market into three segments: residential and small commercial rooftop solar, solar equipment distribution,
						installation and maintenance, and wind turbines, hybrid energy systems and smart energy monitoring. The first two are the more
						practical starting points for AeroSun. The third could provide differentiation, but it requires more technical validation.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">1. Who are AeroSun’s competitors?</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Major market participants</h2>
				</div>

				<div className="overflow-x-auto rounded-[1.8rem] border border-slate-200 bg-white/80 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
					<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
						<thead className="bg-slate-50 dark:bg-slate-800/80">
							<tr>
								<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Competitor</th>
								<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Main business</th>
								<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Where it competes</th>
								<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Competitive strength</th>
							</tr>
						</thead>
						<tbody>
							{[
								['Tata Power Solar', 'Solar manufacturing, rooftop solar, EPC and energy services', 'Residential and commercial solar', 'Established brand, broad capabilities and customer trust'],
								['Waaree Energies', 'Solar modules, energy products and related businesses', 'Equipment supply and solar distribution', 'Manufacturing scale, product portfolio and supply-chain reach'],
								['Loom Solar', 'Solar products, inverters, batteries and rooftop solutions', 'Residential equipment sales and installations', 'Consumer-focused product offerings and online reach'],
								['Jakson Group', 'Solar modules, EPC and energy infrastructure', 'Commercial and industrial solar', 'Engineering and project-delivery capabilities'],
								['Mahindra Susten', 'Renewable-energy development and EPC', 'Larger commercial and industrial projects', 'Institutional execution capabilities'],
								['Sterling and Wilson Renewable Energy', 'Utility-scale solar EPC and renewable-energy projects', 'Large projects rather than typical household installations', 'Experience delivering large-scale projects'],
							].map(([name, business, market, strength]) => (
								<tr key={name} className="border-t border-slate-200 dark:border-slate-700">
									<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{name}</td>
									<td className="px-4 py-3">{business}</td>
									<td className="px-4 py-3">{market}</td>
									<td className="px-4 py-3">{strength}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">2. Are competitors making profits?</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Financial reality varies by model</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Company</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Reported financial evidence</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">What it tells AeroSun</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Tata Power', 'FY2025–26 revenue of ₹63,681 crore and consolidated profit after tax of ₹5,118 crore.', 'A large diversified energy company can operate profitably across multiple business lines.'],
									['Tata Power rooftop solar', 'FY2025–26 rooftop-solar profit after tax reported at ₹499 crore, up 150% year on year.', 'Rooftop solar can be a meaningful profit-generating business at scale.'],
									['Waaree Energies', 'Annual report identifies competitive pricing, supply-chain dependencies and regulatory changes as risks.', 'Manufacturing benefits from scale but is exposed to pricing and supply-chain changes.'],
									['Sterling and Wilson Renewable Energy', 'Sector comparison in a 2025 SEBI prospectus reports revenue above ₹3,000 crore and presents EPC financial metrics.', 'Large EPC companies can operate at substantial revenue scale, but revenue alone does not establish profitability.'],
								].map(([company, evidence, insight]) => (
									<tr key={company} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{company}</td>
										<td className="px-4 py-3">{evidence}</td>
										<td className="px-4 py-3">{insight}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">3. Why AeroSun has an opportunity</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Key market advantages</h2>
						<div className="mt-6 space-y-4">
							{[
								'Customers want help managing electricity costs and reducing bills.',
								'You can start by sourcing equipment instead of investing in a factory or large inventory.',
								'Local service can differentiate you through faster site surveys, clear quotes and better after-sales support.',
								'Monitoring services can become a measurable add-on for solar generation and usage visibility.',
								'Maintenance contracts can create recurring revenue once systems are installed.',
							].map((item) => (
								<div key={item} className="flex gap-3 rounded-[1.2rem] border border-emerald-100 bg-white/80 p-3 dark:border-emerald-900/50 dark:bg-slate-900/75">
									<span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
									<span className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-rose-200 bg-linear-to-br from-rose-50 via-white to-pink-50 p-5 dark:border-rose-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">4. Main concerns</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">What can cause pressure</h2>
						<div className="mt-6 space-y-3">
							{[
								['Price competition', 'Customers compare multiple installer quotes, so low pricing alone is risky.'],
								['Customer trust', 'A new company may have few completed projects and limited proof.'],
								['Cash flow', 'Suppliers, technicians and installation teams may need payment before the customer pays in full.'],
								['Subsidy expectations', 'Customers may assume every installation qualifies for assistance.'],
								['Technical responsibility', 'Weak design or installation can cause faults and warranty disputes.'],
								['Wind-turbine performance', 'A rotating turbine is not equivalent to profitable energy output.'],
							].map(([title, text]) => (
								<div key={title} className="rounded-[1.2rem] border border-rose-100 bg-white/80 p-3 dark:border-rose-900/50 dark:bg-slate-900/75">
									<p className="text-sm font-black text-rose-700 dark:text-rose-300">{title}</p>
									<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_24px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">5. Illustrative profit model</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">What a solar installation could contribute</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Item</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Illustrative amount</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Customer project price', '₹1,50,000'],
									['Solar equipment and materials', '₹1,10,000'],
									['Installation labour and transport', '₹12,000'],
									['Sales and project-related costs', '₹5,000'],
									['Warranty and rework provision', '₹3,000'],
									['Estimated project contribution before overheads and tax', '₹20,000'],
									['Contribution as a percentage of sales', '13.3%'],
								].map(([item, value]) => (
									<tr key={item} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{item}</td>
										<td className="px-4 py-3">{value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
						This illustrative model shows why project contribution matters: if business overhead is ₹60,000 per month, a company would need several sales per month to cover its fixed costs before tax and financing.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">6. How AeroSun should compete</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Three core promises</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-3">
						{[
							['Transparent pricing', 'Give customers an itemised quotation showing equipment, installation, taxes, exclusions and subsidy assumptions.'],
							['Measurable performance', 'Explain expected generation and savings using actual site and usage conditions, then track real output after installation.'],
							['Dependable after-sales support', 'Define a clear process for reporting faults, arranging inspections and managing warranties.'],
						].map(([title, text]) => (
							<div key={title} className="rounded-[1.4rem] border border-slate-200 bg-slate-50/85 p-4 dark:border-slate-700 dark:bg-slate-800/80">
								<p className="text-sm font-black uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">{title}</p>
								<p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-indigo-200 bg-linear-to-br from-indigo-50 via-white to-purple-50 p-5 dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">7. 90-day competitive validation plan</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Check the market before committing capital</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-3">
						{[
							['First 30 days', 'Identify 10 local solar installers and suppliers, collect quotations, and interview 20 homeowners and 10 small-business owners.'],
							['Days 31–60', 'Build two or three solar packages, confirm equipment availability, complete site surveys and issue actual quotations.'],
							['Days 61–90', 'Complete initial projects where commercially viable, measure costs and customer satisfaction, and decide whether the model is sustainable.'],
						].map(([period, text]) => (
							<div key={period} className="rounded-[1.4rem] border border-indigo-100 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{period}</p>
								<p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">8. Final verdict</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">A plausible but narrow path to success</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						My assessment is that AeroSun has a plausible opportunity as a focused solar-sales, installation and maintenance company, but it should validate demand and project profitability before expanding into manufacturing.
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{[
							['Residential rooftop solar', 'Strong candidate for initial validation'],
							['Small commercial solar', 'Attractive next segment'],
							['Solar maintenance and monitoring', 'Useful additional service'],
							['Smart energy monitoring', 'Potential differentiator'],
							['Hybrid solar and battery systems', 'Worth pursuing where the economics justify the cost'],
							['Proprietary wind turbines', 'Technically demanding and must be validated before large investment'],
						].map(([title, text]) => (
							<div key={title} className="rounded-[1.3rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black text-slate-900 dark:text-white">{title}</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						# AeroSun Energy Private Limited
					</p>
					<h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						Prototype ideas for solar, wind and hybrid renewable energy
					</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For AeroSun Energy, I recommend developing three practical prototypes: a solar energy system, a small wind turbine, and an integrated solar–wind hybrid system. Each prototype should be designed around a real customer need, affordable components, measurable energy output, and long-term sustainability.
					</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						The objective is not just to build a device that generates electricity. It is to develop a product that can generate useful energy reliably, remain affordable for Indian customers, be repaired locally, and produce enough value to justify its cost.
					</p>
					<div className="mt-6 rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
						<p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Recommended order</p>
						<ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
							<li>1. Solar prototype — lowest technical risk and best starting point for customer validation.</li>
							<li>2. Wind prototype — higher technical risk; validate wind resources and actual electrical output.</li>
							<li>3. Hybrid prototype — combine proven solar and wind components with a controller, battery and energy monitoring.</li>
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(59,130,246,0.45)] dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">1. Prototype A — AeroSun Solar Smart System</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">AeroSun Solar Smart 1 kW</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						Purpose: build an affordable demonstration system that generates solar electricity and measures where that electricity goes.
					</p>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Component</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Suggested specification</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Solar panels', 'Approximately 1 kWp total capacity'],
									['Inverter', 'Compatible 1 kW inverter, selected for the chosen system architecture'],
									['Monitoring', 'Energy meter or inverter monitoring'],
									['Grid measurement', 'Bidirectional meter for an approved grid-connected installation'],
									['Home-consumption measurement', 'Compatible CT sensor or energy meter'],
									['Optional battery', 'Small battery system with compatible charge controller or hybrid inverter'],
									['Demonstration load', 'LED lights, fans and other suitable loads'],
								].map(([component, spec]) => (
									<tr key={component} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{component}</td>
										<td className="px-4 py-3">{spec}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						A 1 kWp solar array has a peak DC rating of approximately 1,000 watts under specified test conditions. Actual output varies with sunlight, panel temperature, shading, orientation and system losses.
					</p>
					<div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-sm font-black uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200">What the prototype should prove</p>
						<ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
							<li>• How much electricity does it generate each day?</li>
							<li>• How much of that electricity does the home consume directly?</li>
							<li>• How much electricity is imported from and exported to the grid?</li>
							<li>• How accurately do the monitoring readings match reference measurements?</li>
							<li>• What is the total installation and maintenance cost?</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-cyan-200 bg-linear-to-br from-cyan-50 via-white to-sky-50 p-5 shadow-[0_24px_60px_-40px_rgba(14,165,233,0.45)] dark:border-cyan-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">2. Prototype B — AeroSun Small Wind Turbine</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">AeroSun Wind 500</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						Purpose: develop a small wind turbine for demonstration, testing and potentially suitable off-grid applications.
					</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						For the first prototype, I would investigate a 300–500 W rated horizontal-axis wind turbine using a commercially available generator and a properly engineered rotor. A vertical-axis design could be tested separately as a research comparison.
					</p>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Component</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Purpose</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Rotor and blades', 'Capture energy from moving air'],
									['Generator', 'Convert rotational energy into electricity'],
									['Mechanical braking or overspeed protection', 'Help control unsafe rotational speeds'],
									['Rectifier', 'Convert generator output to DC when required'],
									['Wind charge controller', 'Regulate battery charging and protect the system'],
									['Battery', 'Store energy when generation exceeds immediate demand'],
									['Dump load or braking arrangement', 'Safely manage excess power where required'],
									['Voltage and current sensors', 'Measure electrical output'],
									['Anemometer', 'Measure wind speed'],
								].map(([comp, purpose]) => (
									<tr key={comp} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{comp}</td>
										<td className="px-4 py-3">{purpose}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						The key question is not whether the rotor turns, but how much useful electricity it can generate at the wind speeds available at the customer's site.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_24px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">3. Prototype C — AeroSun Solar–Wind Hybrid System</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">AeroSun Hybrid Smart 1 kW</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						Purpose: combine solar and wind generation with battery storage and intelligent monitoring. The goal is to supply useful electricity from two renewable sources while managing changes in generation and customer demand.
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{[
							['Solar array', 'Approximately 600 Wp'],
							['Wind turbine', 'Approximately 300–500 W rated'],
							['Battery', 'Appropriately sized low-voltage battery system'],
							['Monitoring', 'Separate solar, wind, battery, load and grid measurements'],
						].map(([label, value]) => (
							<div key={label} className="rounded-[1.3rem] border border-violet-100 bg-white/80 p-4 dark:border-violet-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">{label}</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{value}</p>
							</div>
						))}
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						The hybrid system should only be offered where local resource data and the customer's energy needs justify it. Solar plus wind is not automatically better or cheaper than solar alone.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">4. Make the prototypes reusable and sustainable</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Build for repairability, durability and lower waste</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{[
							['Modular construction', 'Make controllers, sensors and power electronics replaceable without discarding the whole product.'],
							['Standard components', 'Use commonly available fasteners, connectors and replacement parts where practical.'],
							['Repairable electronics', 'Use replaceable controller boards and sensors where safe and practical.'],
							['Responsible battery management', 'Provide safe inspection, replacement, collection and recycling arrangements.'],
						].map(([title, text]) => (
							<div key={title} className="rounded-[1.5rem] border border-amber-100 bg-white/80 p-4 dark:border-amber-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">{title}</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">5. Prototype development roadmap</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Order of work for AeroSun</h2>
				</div>
				<div className="space-y-4">
					{[
						['1. Requirements', 'Interview customers and identify real energy needs'],
						['2. Component selection', 'Compare suppliers, datasheets, warranties and applicable standards'],
						['3. Bench prototype', 'Assemble the solar monitoring system and wind-generator test rig'],
						['4. Integrated prototype', 'Combine proven solar, wind, battery and monitoring components'],
						['5. Field testing', 'Measure output, reliability, safety and maintenance requirements'],
						['6. Economic validation', 'Calculate installation cost, operating cost and expected customer value'],
					].map(([phase, work]) => (
						<div key={phase} className="grid gap-3 rounded-[1.4rem] border border-emerald-100 bg-white/80 p-4 md:grid-cols-[180px_1fr] dark:border-emerald-900/50 dark:bg-slate-900/75">
							<div className="flex items-center justify-center rounded-[1rem] bg-emerald-100 px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">{phase}</div>
							<p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{work}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
						Business funding explained
					</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						From bootstrapping to IPO: a funding roadmap for AeroSun Energy Private Limited
					</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For AeroSun Energy, funding means obtaining the money needed to start operations, acquire equipment,
						develop solar and wind prototypes, hire people, win customers and expand the business.
					</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						The right choice depends on <span className="font-black text-slate-900 dark:text-white">how much money you need, what it will be used for, how quickly the business generates revenue, and how much ownership you are willing to give investors.</span>
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						Funding stages
					</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						The main funding stages AeroSun should understand
					</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{[
						['Bootstrapping', 'Finance using your own capital and revenue.'],
						['Friends and family', 'Capital from trusted contacts.'],
						['Grants and incubators', 'Non-dilutive support and technical help.'],
						['Angel investment', 'Individual investors with equity or convertible instruments.'],
						['Pre-seed and seed', 'Prototype, validation and early growth capital.'],
						['Series A', 'Scale a proven artificial or real-world commercial model.'],
						['Series B and beyond', 'Expand operations, markets and manufacturing capacity.'],
						['IPO or acquisition', 'Potential exit for investors and public-market capital.'],
					].map(([stage, detail]) => (
						<div key={stage} className="rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 shadow-[0_18px_35px_-25px_rgba(16,185,129,0.45)] dark:border-emerald-900/50 dark:bg-slate-900/75">
							<p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">{stage}</p>
							<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{detail}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
							1. Bootstrapping your business
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							What bootstrapping means
						</h2>
						<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
							<span className="font-black text-slate-900 dark:text-white">Bootstrapping means building a business primarily using your own capital and the revenue generated by the business</span>, rather than relying on outside equity investors.
						</p>
						<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
							For AeroSun Energy, this could mean starting with solar equipment sales, installation coordination and maintenance services, then using the profits to finance larger projects and prototype development.
						</p>
						<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
							<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
								<thead className="bg-slate-50 dark:bg-slate-800/80">
									<tr>
										<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Initial expenditure</th>
										<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Illustrative amount</th>
									</tr>
								</thead>
								<tbody>
									{[
										['Website, branding and marketing', '₹10,000'],
										['Tools and testing equipment', '₹20,000'],
										['Supplier visits and customer acquisition', '₹10,000'],
										['Prototype and monitoring equipment', '₹25,000'],
										['Working capital reserve', '₹35,000'],
										['Total', '₹1,00,000'],
									].map(([label, value]) => (
										<tr key={label} className="border-t border-slate-200 dark:border-slate-700">
											<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{label}</td>
											<td className="px-4 py-3">{value}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="mt-6 space-y-3">
							{[
								'You retain ownership of your company.',
								'You can grow according to actual customer demand.',
								'You avoid investor dilution.',
								'Growth may be slower and personal capital is at risk.',
							].map((item) => (
								<div key={item} className="flex gap-3 rounded-[1.2rem] border border-emerald-100 bg-white/80 p-3 dark:border-emerald-900/50 dark:bg-slate-900/75">
									<span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
									<span className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							When bootstrap makes sense
						</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							Best use cases
						</h2>
						<ol className="mt-6 space-y-4">
							{[
								'You are testing whether customers will purchase residential solar installations.',
								'You can source equipment from established suppliers.',
								'You do not need to build a factory immediately.',
								'You can generate revenue before making large capital commitments.',
							].map((item, index) => (
								<li key={item} className="flex gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80">
									<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-black text-white">{index + 1}</div>
									<span className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">2. Friends and family funding</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Small early capital should still be documented</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For example, a relative might invest ₹2 lakh to help AeroSun purchase demonstration equipment and secure its first customers. There are three common arrangements: equity investment, loan, or a gift. Do not rely on a verbal promise — document the amount, purpose, repayment terms, or investor rights.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">3. Grants and incubator funding</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Use grants where innovation needs proof</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Funding route</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Published scheme limit</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Intended use</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Grant', 'Up to ₹20 lakh', 'Proof of concept, prototype development and product trials'],
									['Debt or convertible instruments', 'Up to ₹50 lakh', 'Market entry, commercialisation and scaling'],
								].map(([route, limit, use]) => (
									<tr key={route} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{route}</td>
										<td className="px-4 py-3">{limit}</td>
										<td className="px-4 py-3">{use}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For AeroSun, a grant may be especially useful for a wind-turbine prototype, a hybrid energy controller, field trials or energy-monitoring software. The key is to define one problem, one customer segment, one prototype and measurable milestones.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">4. Funding stages in practice</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Pre-seed, seed, angel and Series A</h2>
				</div>
				<div className="grid gap-5 lg:grid-cols-2">
					{[
						['Pre-seed', 'Used when you need a prototype or first version of a product. Investors look for a clear customer problem, a technical plan and credible milestones.'],
						['Seed', 'Used to move from a prototype to a validated product and repeatable business model with pilot programmes and initial customers.'],
						['Angel', 'An individual investor provides capital in exchange for equity, often bringing mentoring and investor relationships as well.'],
						['Series A', 'Raise after repeated traction and a business model that can grow with capital, usually across engineering, sales and operations.'],
					].map(([stage, text]) => (
						<div key={stage} className="rounded-[1.7rem] border border-amber-100 bg-white/80 p-5 dark:border-amber-900/50 dark:bg-slate-900/75">
							<p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{stage}</p>
							<p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-rose-200 bg-linear-to-br from-rose-50 via-white to-pink-50 p-5 dark:border-rose-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">5. Understand dilution before you raise</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Dilution reduces founder ownership</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Funding stage</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">New investment</th>
									<th className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">Illustrative post-investment ownership</th>
								</tr>
							</thead>
							<tbody>
								{[
									['Founders start the company', '₹1 lakh founder capital', 'Founders: 100%'],
									['Angel round', '₹25 lakh', 'Founders: 80%; angel: 20%'],
									['Seed round', '₹75 lakh', 'Founders: 60%; angel: 15%; seed investor: 25%'],
									['Series A', '₹5 crore', 'Founders: 45%; angel: 11.25%; seed investor: 18.75%; Series A investor: 25%'],
								].map(([stage, investment, ownership]) => (
									<tr key={stage} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{stage}</td>
										<td className="px-4 py-3">{investment}</td>
										<td className="px-4 py-3">{ownership}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						The important point is that raising money increases resources, but each equity round can reduce the founders' percentage ownership. A smaller percentage of a substantially more valuable company may be worth more than a larger percentage of a company that cannot grow.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-indigo-200 bg-linear-to-br from-indigo-50 via-white to-purple-50 p-5 dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">6. Which funding route should AeroSun follow?</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">A staged plan is the safest strategy</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{[
							['Stage 1', 'Bootstrap the solar business and generate early revenue.'],
							['Stage 2', 'Apply for grant or incubator support for a prototype or validation project.'],
							['Stage 3', 'Raise angel or seed capital only after demand and product evidence are credible.'],
							['Stage 4', 'Expand with larger financing only after the business model is proven.'],
						].map(([stage, point]) => (
							<div key={stage} className="rounded-[1.5rem] border border-indigo-100 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{stage}</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">Final funding recommendation</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Do not ask how much you can raise before knowing what milestone you need to fund.</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						For AeroSun, the immediate funding path should be: <span className="font-black text-slate-900 dark:text-white">bootstrap the solar business, validate customer demand, apply for incubator or grant support for technology proof, and only then raise angel or seed capital if the prototype and market case are credible.</span>
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
						{[
							['₹1–3 lakh', 'Validate solar-service business and customer demand'],
							['₹3–10 lakh', 'Develop a structured prototype or monitoring system'],
							['₹10–50 lakh+', 'Larger prototype, pilot deployment or commercialisation'],
							['Grant route', 'Use for eligible innovation and proof-of-concept work'],
							['Equity route', 'Use only when evidence supports product scale'],
						].map(([amount, note]) => (
							<div key={amount} className="rounded-[1.4rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-sm font-black text-emerald-700 dark:text-emerald-300">{amount}</p>
								<p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{note}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
