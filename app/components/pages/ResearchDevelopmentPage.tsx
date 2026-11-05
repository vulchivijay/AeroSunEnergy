'use client'

import { motion } from '@/lib/motion'
import { useLocale } from '@/lib/LocaleContext'

type ResearchDevelopmentInlineContent = [
	string[],
	string[],
	[string, string][],
	[string, string][],
	string[],
	string[],
	[string, string, string][],
	[string, string][],
	[string, string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	[string, string][],
	string[],
	string[],
	[string, string, string][],
	[string, string][],
	[string, string, string][],
	[string, string][],
	[string, string][],
]

export default function ResearchDevelopmentPage() {
	const { t } = useLocale()
	const copy = t.researchDevelopmentPage.component
	const inline = copy.inline as ResearchDevelopmentInlineContent
	const ideaValidationAccents = ["from-emerald-500 to-green-500","from-sky-500 to-cyan-500","from-violet-500 to-purple-500","from-amber-500 to-orange-500","from-rose-500 to-red-500"]
	const ideaValidation = copy.data.ideaValidation.map((item, index) => ({ ...item, accent: ideaValidationAccents[index] }))
	const targetGroups = copy.data.targetGroups
	const prototypeRoadmapAccents = ["from-emerald-500 to-teal-500","from-sky-500 to-blue-500","from-violet-500 to-fuchsia-500"]
	const prototypeRoadmap = copy.data.prototypeRoadmap.map((item, index) => ({ ...item, accent: prototypeRoadmapAccents[index] }))
	const redFlags = copy.data.redFlags
	const packageOptionsAccents = ["from-emerald-500 to-lime-500","from-sky-500 to-cyan-500","from-violet-500 to-purple-500"]
	const packageOptions = copy.data.packageOptions.map((item, index) => ({ ...item, accent: packageOptionsAccents[index] }))
	const validationPlan = copy.data.validationPlan
	const finalAssessment = copy.data.finalAssessment

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
							<span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 shadow-sm dark:border-emerald-800/80 dark:bg-slate-900/80 dark:text-emerald-300">
								{copy.text[0]}</span>
							<h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
								{copy.text[1]}</h1>
							<p className="mt-3 text-xl font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
								{copy.text[2]}</p>
							<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
								{copy.text[3]}</p>
						</div>

						<div className="flex items-center">
							<div className="w-full rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.5)] dark:border-slate-700 dark:bg-slate-900/80">
								<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
									{copy.text[4]}</p>
								<div className="mt-5 rounded-[1.5rem] border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/20">
									<p className="text-md leading-7 text-slate-700 dark:text-slate-200">
										<span className="font-black text-emerald-700 dark:text-emerald-300">{copy.text[5]}</span> {copy.text[6]}</p>
								</div>
								<div className="mt-4 space-y-3">
									{inline[0].map((item) => (
										<div
											key={item}
											className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80"
										>
											<span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-md font-bold text-slate-950">
												{copy.text[7]}</span>
											<span className="text-md font-medium text-slate-700 dark:text-slate-200">{item}</span>
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
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						{copy.text[8]}</p>
					<p className="mt-4 text-xl font-semibold leading-9 text-slate-800 dark:text-slate-100">
						{copy.text[9]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6 flex items-end justify-between gap-3">
					<div>
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
							{copy.text[10]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[11]}</h2>
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
								<p className="text-md font-black text-slate-900 dark:text-white">{item.title}</p>
								<div className="mt-4 flex items-center justify-between gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 dark:border-slate-700 dark:bg-slate-800">
									<span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
										{copy.text[12]}</span>
									<span className="text-md font-bold text-slate-700 dark:text-slate-200">{item.risk}</span>
								</div>
								<div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-2 dark:border-emerald-900/60 dark:bg-emerald-950/20">
									<p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
										{copy.text[13]}</p>
									<p className="mt-1 text-md font-semibold text-emerald-800 dark:text-emerald-300">
										{item.recommendation}
									</p>
								</div>
								<p className="mt-3 text-md leading-6 text-slate-600 dark:text-slate-300">{item.note}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-[1.75rem] border border-sky-100 bg-white/80 p-5 dark:border-sky-900/50 dark:bg-slate-900/75">
					<p className="text-[12px] font-black uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
						{copy.text[14]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[15]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">
							{copy.text[16]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[17]}</h2>

						<div className="mt-6 space-y-4">
							{targetGroups.map((group) => (
								<div
									key={group.label}
									className="rounded-[1.5rem] border border-violet-100 bg-white/80 p-4 shadow-[0_18px_35px_-28px_rgba(139,92,246,0.5)] dark:border-violet-900/60 dark:bg-slate-900/75"
								>
									<div className="flex flex-wrap items-center justify-between gap-2">
										<h3 className="text-lg font-black text-slate-900 dark:text-white">{group.label}</h3>
										<span className="rounded-full bg-violet-100 px-2.5 py-1 text-[12px] font-black uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
											{group.age}
										</span>
									</div>
									<p className="mt-2 text-md text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">{copy.text[18]}</span> {group.profile}
									</p>
									<p className="mt-1 text-md text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">{copy.text[19]}</span> {group.concern}
									</p>
									<p className="mt-1 text-md text-slate-600 dark:text-slate-300">
										<span className="font-bold text-slate-800 dark:text-white">{copy.text[20]}</span> {group.offer}
									</p>
								</div>
							))}
						</div>

						<div className="mt-6 rounded-[1.5rem] border border-violet-100 bg-violet-50/60 p-4 dark:border-violet-900/50 dark:bg-violet-950/20">
							<p className="text-[12px] font-black uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
								{copy.text[21]}</p>
							<p className="mt-3 text-md leading-7 text-slate-700 dark:text-slate-200">
								{copy.text[22]}</p>
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white/75 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							{copy.text[23]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[24]}</h2>

						<ol className="mt-6 space-y-4">
							{inline[1].map((item, index) => (
								<li
									key={item}
									className="flex gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/85 p-3 dark:border-slate-700 dark:bg-slate-800/80"
								>
									<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-md font-black text-white">
										{index + 1}
									</div>
									<span className="text-md leading-6 text-slate-700 dark:text-slate-200">{item}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						{copy.text[25]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[26]}</h2>
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
								<p className="mt-2 text-md font-semibold text-slate-500 dark:text-slate-400">{item.subtitle}</p>
								<ul className="mt-4 space-y-3">
									{item.bullets.map((bullet) => (
										<li key={bullet} className="flex gap-3 text-md leading-6 text-slate-700 dark:text-slate-300">
											<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
											<span>{bullet}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/60 p-5 dark:border-emerald-900/50 dark:bg-emerald-950/20">
					<p className="text-[12px] font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
						{copy.text[27]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-200">
						{copy.text[28]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">{copy.text[29]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[30]}</h2>
				</div>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{redFlags.map((flag) => (
						<div
							key={flag.title}
							className="rounded-[1.5rem] border border-rose-100 bg-white/80 p-4 shadow-[0_20px_40px_-30px_rgba(251,113,133,0.5)] dark:border-rose-900/40 dark:bg-slate-900/75"
						>
							<div className="flex items-center gap-2">
								<span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
								<p className="text-md font-black uppercase tracking-[0.16em] text-rose-700 dark:text-rose-300">
									{copy.text[12]}</p>
							</div>
							<h3 className="mt-3 text-lg font-black text-slate-900 dark:text-white">{flag.title}</h3>
							<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{flag.text}</p>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-[1.75rem] border border-rose-100 bg-rose-50/60 p-5 dark:border-rose-900/50 dark:bg-rose-950/20">
					<p className="text-[12px] font-black uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
						{copy.text[31]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-200">
						{copy.text[32]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						{copy.text[33]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[34]}</h2>
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
								<p className="mt-2 text-md font-semibold text-slate-500 dark:text-slate-400">{option.audience}</p>
								<p className="mt-4 text-md leading-7 text-slate-700 dark:text-slate-300">{option.positioning}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-[1.75rem] border border-amber-100 bg-amber-50/60 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
					<p className="text-[12px] font-black uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
						{copy.text[35]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-200">
						{copy.text[36]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">
						{copy.text[37]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[38]}</h2>
				</div>

				<div className="space-y-4">
					{validationPlan.map((step) => (
						<div
							key={step.period}
							className="grid gap-3 rounded-[1.5rem] border border-indigo-100 bg-white/80 p-4 md:grid-cols-[180px_1fr_1fr] dark:border-indigo-900/40 dark:bg-slate-900/75"
						>
							<div className="flex items-center justify-center rounded-[1rem] bg-indigo-100 px-3 py-2 text-md font-black uppercase tracking-[0.18em] text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
								{step.period}
							</div>
							<div>
								<p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
									{copy.text[39]}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{step.action}</p>
							</div>
							<div>
								<p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
									{copy.text[40]}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{step.result}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-[1.75rem] border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/50 dark:bg-indigo-950/20">
					<p className="text-[12px] font-black uppercase tracking-[0.22em] text-indigo-700 dark:text-indigo-300">
						{copy.text[41]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-200">
						{copy.text[42]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							{copy.text[43]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[44]}</h2>
						<div className="mt-6 space-y-3">
							{finalAssessment.map((item) => (
								<div
									key={item.label}
									className="flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80"
								>
									<div>
										<p className="text-md font-bold text-slate-900 dark:text-white">{item.label}</p>
										<p className="text-md text-slate-600 dark:text-slate-300">{item.value}</p>
									</div>
									<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[12px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
										{item.level}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
							{copy.text[45]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[46]}</h2>
						<div className="mt-6 space-y-4">
							<div className="rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
									{copy.text[47]}</p>
								<p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
									{copy.text[48]}</p>
							</div>
							<div className="rounded-[1.5rem] border border-sky-100 bg-white/80 p-4 dark:border-sky-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
									{copy.text[49]}</p>
								<p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">
									{copy.text[50]}</p>
							</div>
						</div>

						<div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900/75">
							<p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
								{copy.text[51]}</p>
							<ul className="mt-3 space-y-2 text-md leading-6 text-slate-700 dark:text-slate-300">
								<li>{copy.text[52]}</li>
								<li>{copy.text[53]}</li>
								<li>{copy.text[54]}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(59,130,246,0.45)] dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">
						{copy.text[55]}</p>
					<h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[56]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[57]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[58]}</p>
					<div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-white/80 p-4 dark:border-sky-900/50 dark:bg-slate-900/75">
						<p className="text-[12px] font-black uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">{copy.text[59]}</p>
						<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
							{copy.text[60]}</p>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
						{copy.text[61]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[62]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[63]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[64]}<span className="font-black text-slate-900 dark:text-white">{copy.text[65]}</span>
					</p>
					<div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/85 p-4 dark:border-slate-700 dark:bg-slate-800/80">
						<p className="text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[66]}</p>
						<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
							{copy.text[67]}</p>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						{copy.text[68]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[69]}</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{inline[2].map(([stage, detail]) => (
						<div key={stage} className="rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 shadow-[0_18px_35px_-25px_rgba(16,185,129,0.45)] dark:border-emerald-900/50 dark:bg-slate-900/75">
							<p className="text-md font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">{stage}</p>
							<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{detail}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
							{copy.text[70]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[71]}</h2>
						<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
							<span className="font-black text-slate-900 dark:text-white">{copy.text[72]}</span>{copy.text[73]}</p>
						<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
							{copy.text[74]}</p>
						<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
							<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
								<thead className="bg-slate-50 dark:bg-slate-800/80">
									<tr>
										<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[75]}</th>
										<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[76]}</th>
									</tr>
								</thead>
								<tbody>
									{inline[3].map(([label, value]) => (
										<tr key={label} className="border-t border-slate-200 dark:border-slate-700">
											<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{label}</td>
											<td className="px-4 py-3">{value}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="mt-6 space-y-3">
							{inline[4].map((item) => (
								<div key={item} className="flex gap-3 rounded-[1.2rem] border border-emerald-100 bg-white/80 p-3 dark:border-emerald-900/50 dark:bg-slate-900/75">
									<span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
									<span className="text-md leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							{copy.text[77]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[78]}</h2>
						<ol className="mt-6 space-y-4">
							{inline[5].map((item, index) => (
								<li key={item} className="flex gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80">
									<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-md font-black text-white">{index + 1}</div>
									<span className="text-md leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">{copy.text[79]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[80]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[81]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">{copy.text[82]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[83]}</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[84]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[85]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[86]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[6].map(([route, limit, use]) => (
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
						{copy.text[87]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						{copy.text[88]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[89]}</h2>
				</div>
				<div className="grid gap-5 lg:grid-cols-2">
					{inline[7].map(([stage, text]) => (
						<div key={stage} className="rounded-[1.7rem] border border-amber-100 bg-white/80 p-5 dark:border-amber-900/50 dark:bg-slate-900/75">
							<p className="text-md font-black uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{stage}</p>
							<p className="mt-3 text-md leading-7 text-slate-700 dark:text-slate-300">{text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-rose-200 bg-linear-to-br from-rose-50 via-white to-pink-50 p-5 dark:border-rose-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">{copy.text[90]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[91]}</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[92]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[93]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[94]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[8].map(([stage, investment, ownership]) => (
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
						{copy.text[95]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-indigo-200 bg-linear-to-br from-indigo-50 via-white to-purple-50 p-5 dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">{copy.text[96]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[97]}</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{inline[9].map(([stage, point]) => (
							<div key={stage} className="rounded-[1.5rem] border border-indigo-100 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{stage}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{point}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">{copy.text[98]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[99]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[100]}<span className="font-black text-slate-900 dark:text-white">{copy.text[101]}</span>
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
						{inline[10].map(([amount, note]) => (
							<div key={amount} className="rounded-[1.4rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black text-emerald-700 dark:text-emerald-300">{amount}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{note}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						{copy.text[102]}</p>
					<h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[103]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[104]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[105]}</p>
					<div className="mt-6 rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
						<p className="text-md font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">{copy.text[106]}</p>
						<ol className="mt-3 space-y-2 text-md leading-6 text-slate-700 dark:text-slate-300">
							<li>{copy.text[107]}</li>
							<li>{copy.text[108]}</li>
							<li>{copy.text[109]}</li>
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(59,130,246,0.45)] dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">{copy.text[110]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[111]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[112]}</p>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[113]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[114]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[11].map(([component, spec]) => (
									<tr key={component} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{component}</td>
										<td className="px-4 py-3">{spec}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[115]}</p>
					<div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-md font-black uppercase tracking-[0.2em] text-slate-700 dark:text-slate-200">{copy.text[116]}</p>
						<ul className="mt-3 space-y-2 text-md leading-6 text-slate-700 dark:text-slate-300">
							<li>{copy.text[117]}</li>
							<li>{copy.text[118]}</li>
							<li>{copy.text[119]}</li>
							<li>{copy.text[120]}</li>
							<li>{copy.text[121]}</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-cyan-200 bg-linear-to-br from-cyan-50 via-white to-sky-50 p-5 shadow-[0_24px_60px_-40px_rgba(14,165,233,0.45)] dark:border-cyan-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">{copy.text[122]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[123]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[124]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[125]}</p>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[113]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[126]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[12].map(([comp, purpose]) => (
									<tr key={comp} className="border-t border-slate-200 dark:border-slate-700">
										<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{comp}</td>
										<td className="px-4 py-3">{purpose}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[127]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 shadow-[0_24px_60px_-40px_rgba(168,85,247,0.45)] dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">{copy.text[128]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[129]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[130]}</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{inline[13].map(([label, value]) => (
							<div key={label} className="rounded-[1.3rem] border border-violet-100 bg-white/80 p-4 dark:border-violet-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">{label}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{value}</p>
							</div>
						))}
					</div>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[131]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-amber-200 bg-linear-to-br from-amber-50 via-white to-yellow-50 p-5 shadow-[0_24px_60px_-40px_rgba(245,158,11,0.45)] dark:border-amber-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">{copy.text[132]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[133]}</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-2">
						{inline[14].map(([title, text]) => (
							<div key={title} className="rounded-[1.5rem] border border-amber-100 bg-white/80 p-4 dark:border-amber-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">{title}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">{copy.text[134]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[135]}</h2>
				</div>
				<div className="space-y-4">
					{inline[15].map(([phase, work]) => (
						<div key={phase} className="grid gap-3 rounded-[1.4rem] border border-emerald-100 bg-white/80 p-4 md:grid-cols-[180px_1fr] dark:border-emerald-900/50 dark:bg-slate-900/75">
							<div className="flex items-center justify-center rounded-[1rem] bg-emerald-100 px-3 py-2 text-md font-black uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">{phase}</div>
							<p className="text-md leading-6 text-slate-700 dark:text-slate-300">{work}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
						{copy.text[61]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[62]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[63]}</p>
					<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[64]}<span className="font-black text-slate-900 dark:text-white">{copy.text[65]}</span>
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
						{copy.text[68]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[69]}</h2>
				</div>
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{inline[16].map(([stage, detail]) => (
						<div key={stage} className="rounded-[1.5rem] border border-emerald-100 bg-white/80 p-4 shadow-[0_18px_35px_-25px_rgba(16,185,129,0.45)] dark:border-emerald-900/50 dark:bg-slate-900/75">
							<p className="text-md font-black uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">{stage}</p>
							<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{detail}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 dark:border-emerald-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
							{copy.text[70]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[71]}</h2>
						<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
							<span className="font-black text-slate-900 dark:text-white">{copy.text[72]}</span>{copy.text[73]}</p>
						<p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">
							{copy.text[74]}</p>
						<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
							<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
								<thead className="bg-slate-50 dark:bg-slate-800/80">
									<tr>
										<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[75]}</th>
										<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[76]}</th>
									</tr>
								</thead>
								<tbody>
									{inline[17].map(([label, value]) => (
										<tr key={label} className="border-t border-slate-200 dark:border-slate-700">
											<td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{label}</td>
											<td className="px-4 py-3">{value}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="mt-6 space-y-3">
							{inline[18].map((item) => (
								<div key={item} className="flex gap-3 rounded-[1.2rem] border border-emerald-100 bg-white/80 p-3 dark:border-emerald-900/50 dark:bg-slate-900/75">
									<span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
									<span className="text-md leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/75">
						<p className="text-[12px] font-black uppercase tracking-[0.28em] text-slate-600 dark:text-slate-300">
							{copy.text[77]}</p>
						<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{copy.text[78]}</h2>
						<ol className="mt-6 space-y-4">
							{inline[19].map((item, index) => (
								<li key={item} className="flex gap-3 rounded-[1.2rem] border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-800/80">
									<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-md font-black text-white">{index + 1}</div>
									<span className="text-md leading-6 text-slate-700 dark:text-slate-300">{item}</span>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-violet-200 bg-linear-to-br from-violet-50 via-white to-fuchsia-50 p-5 dark:border-violet-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-violet-700 dark:text-violet-300">{copy.text[79]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[80]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[81]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-sky-200 bg-linear-to-br from-sky-50 via-white to-cyan-50 p-5 dark:border-sky-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">{copy.text[82]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[83]}</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[84]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[85]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[86]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[20].map(([route, limit, use]) => (
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
						{copy.text[87]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="mb-6">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
						{copy.text[88]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
						{copy.text[89]}</h2>
				</div>
				<div className="grid gap-5 lg:grid-cols-2">
					{inline[21].map(([stage, text]) => (
						<div key={stage} className="rounded-[1.7rem] border border-amber-100 bg-white/80 p-5 dark:border-amber-900/50 dark:bg-slate-900/75">
							<p className="text-md font-black uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{stage}</p>
							<p className="mt-3 text-md leading-7 text-slate-700 dark:text-slate-300">{text}</p>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-rose-200 bg-linear-to-br from-rose-50 via-white to-pink-50 p-5 dark:border-rose-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-rose-700 dark:text-rose-300">{copy.text[90]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[91]}</h2>
					<div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/75">
						<table className="min-w-full border-collapse text-left text-md text-slate-700 dark:text-slate-300">
							<thead className="bg-slate-50 dark:bg-slate-800/80">
								<tr>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[92]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[93]}</th>
									<th className="px-4 py-3 text-[12px] font-black uppercase tracking-[0.22em] text-slate-600 dark:text-slate-300">{copy.text[94]}</th>
								</tr>
							</thead>
							<tbody>
								{inline[22].map(([stage, investment, ownership]) => (
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
						{copy.text[95]}</p>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-indigo-200 bg-linear-to-br from-indigo-50 via-white to-purple-50 p-5 dark:border-indigo-900/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-700 dark:text-indigo-300">{copy.text[96]}</p>
					<h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[97]}</h2>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{inline[23].map(([stage, point]) => (
							<div key={stage} className="rounded-[1.5rem] border border-indigo-100 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-indigo-300">{stage}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{point}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
				<div className="rounded-[2rem] border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-[0_24px_60px_-40px_rgba(16,185,129,0.45)] dark:border-emerald-900/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
					<p className="text-[12px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">{copy.text[98]}</p>
					<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{copy.text[99]}</h2>
					<p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
						{copy.text[100]}<span className="font-black text-slate-900 dark:text-white">{copy.text[101]}</span>
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
						{inline[24].map(([amount, note]) => (
							<div key={amount} className="rounded-[1.4rem] border border-emerald-100 bg-white/80 p-4 dark:border-emerald-900/50 dark:bg-slate-900/75">
								<p className="text-md font-black text-emerald-700 dark:text-emerald-300">{amount}</p>
								<p className="mt-2 text-md leading-6 text-slate-700 dark:text-slate-300">{note}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
