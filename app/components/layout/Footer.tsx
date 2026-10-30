'use client'

import Link from 'next/link'
import Logo from '../brand/Logo'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

const socialLinks = [
	{
		href: 'https://x.com/AeroSunEnergy',
		label: 'Follow AeroSun Energy on X (Twitter)',
		title: 'Follow AeroSun Energy on X (opens in new tab)',
		dataSocial: 'twitter',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		),
	},
	{
		href: 'https://www.linkedin.com/company/aerosun-energy/',
		label: 'Connect with AeroSun Energy on LinkedIn',
		title: 'Connect with AeroSun Energy on LinkedIn (opens in new tab)',
		dataSocial: 'linkedin',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		href: 'https://www.facebook.com/AeroSunEnergy',
		label: 'Like AeroSun Energy on Facebook',
		title: 'Like AeroSun Energy on Facebook (opens in new tab)',
		dataSocial: 'facebook',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
			</svg>
		),
	},
	{
		href: 'https://www.instagram.com/aerosunenergy/',
		label: 'Follow AeroSun Energy on Instagram',
		title: 'Follow AeroSun Energy on Instagram (opens in new tab)',
		dataSocial: 'instagram',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
	},
]

export default function Footer() {
	const { t } = useLocale()
	const footer = t.footer
	const navLinks = t.navbar.links
	const queries = t.navbar.quiries || []
	const allowedQuickEnquiries = ['/know-eligibility', '/customer-enquiry', '/installation-checklist']
	const quickEnquiries = queries
		.filter((item) => allowedQuickEnquiries.includes(item.href))
		.sort((a, b) => allowedQuickEnquiries.indexOf(a.href) - allowedQuickEnquiries.indexOf(b.href))
	const visibleNavLinks = navLinks

	return (
		<footer
			id="contact"
			className="w-full overflow-hidden border-t border-[#20A44A]/10 bg-[radial-gradient(circle_at_top,rgba(32,164,74,0.10),transparent_40%),linear-gradient(180deg,#f9fdf9_0%,#eef8f1_100%)] text-slate-800 shadow-[0_-12px_35px_-28px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_35%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-slate-100"
		>
			<div className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-350">
					<div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_0.8fr]">
						<div className="rounded-[30px] border border-emerald-200/70 bg-white/70 p-5 shadow-[0_24px_60px_-35px_rgba(16,185,129,0.7)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
							<div className="inline-flex p-2 dark:border-slate-700 dark:bg-slate-800/80">
								<Logo />
							</div>

							<p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
								{footer.brandDesc}
							</p>

							<div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
								<div className="group rounded-2xl border border-emerald-100 bg-linear-to-r from-emerald-50 to-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-24px_rgba(16,185,129,0.8)] dark:border-slate-700 dark:from-slate-800/80 dark:to-slate-900/80">
									<div className="flex items-start gap-3">
										<span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
												<path d="M12 21s7-4.35 7-11.3A7.2 7.2 0 0 0 12 3a7.2 7.2 0 0 0-7 6.7C5 16.65 12 21 12 21Z" />
												<circle cx="12" cy="9.5" r="2.5" />
											</svg>
										</span>
										<div>
											<span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
												Address
											</span>
											<address className="not-italic text-slate-600 dark:text-slate-300">
												Do.no 11-184, Gollavanigunta,<br />
												T.N. Pallem, Tirupati,<br />
												Andhra Pradesh, India - 517501.
											</address>
										</div>
									</div>
								</div>

								<div className="group rounded-2xl border border-amber-100 bg-linear-to-r from-amber-50 to-white p-3 transition-all duration-200 shadow-[0_24px_60px_-35px_rgba(16,185,129,0.7)] backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-24px_rgba(245,158,11,0.8)] dark:border-slate-700 dark:from-slate-800/80 dark:to-slate-900/80">
									<div className="flex items-center gap-3">
										<span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/20" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
												<rect x="3" y="5" width="18" height="14" rx="3" />
												<path d="m4 7 8 6 8-6" />
											</svg>
										</span>
										<a href={`mailto:${footer.email}`} className="text-slate-700 transition-colors duration-200 hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-300">
											{footer.email}
										</a>
									</div>
								</div>

								<div className="group rounded-2xl border border-cyan-100 bg-linear-to-r from-cyan-50 to-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-24px_rgba(6,182,212,0.8)] dark:border-slate-700 dark:from-slate-800/80 dark:to-slate-900/80">
									<div className="flex items-center gap-3">
										<span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/20" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
												<circle cx="12" cy="12" r="8" />
												<path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
											</svg>
										</span>
										<Link
											href="/save-earth"
											className="text-slate-700 transition-colors duration-200 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300"
											aria-label="Visit Save Earth page"
										>
											{footer.saveEarth}
										</Link>
									</div>
								</div>

								<div className="group rounded-2xl border border-violet-100 bg-linear-to-r from-violet-50 to-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_30px_-24px_rgba(139,92,246,0.8)] dark:border-slate-700 dark:from-slate-800/80 dark:to-slate-900/80">
									<div className="flex items-center gap-3">
										<span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/20" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
												<path d="M12 2.5 3 7l9 4.5L21 7l-9-4.5Z" />
												<path d="M3 12.5 12 17l9-4.5" />
												<path d="M3 17.5 12 22l9-4.5" />
											</svg>
										</span>
										<Link
											href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`}
											className="text-slate-700 transition-colors duration-200 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-300"
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Visit ${footer.trust} (opens in new tab)`}
										>
											{footer.saveSanatanaDharma}
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-[30px] border border-emerald-200/70 bg-white/70 p-5 shadow-[0_24px_60px_-35px_rgba(16,185,129,0.7)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
							<h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#18251F] dark:text-white">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/20">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
										<path d="M5 12h14M12 5v14" />
									</svg>
								</span>
								{footer.quickLinks}
							</h3>
							<ul className="space-y-3">
								{visibleNavLinks.map((link) => (
									<li key={link.label}>
										{(link as { disabled?: boolean }).disabled ? (
											<span className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-500">
												<span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
												{link.label}
												<span className="absolute -right-1 -top-2 inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-amber-700 shadow-sm">
													Soon
												</span>
											</span>
										) : (
											<Link
												href={link.href}
												className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-slate-50 px-3 py-2 text-sm text-slate-700 transition-all duration-200 hover:-translate-x-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
											>
												<span className="inline-flex h-2.5 w-2.5 rounded-full bg-linear-to-r from-amber-400 to-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)] transition-transform duration-200 group-hover:scale-125" aria-hidden="true" />
												{link.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-[30px] border border-emerald-200/70 bg-white/70 p-5 shadow-[0_24px_60px_-35px_rgba(16,185,129,0.7)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
							<h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#18251F] dark:text-white">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
										<path d="M7 8h10M7 12h10M7 16h6" />
									</svg>
								</span>
								{footer.quickEnquiries}
							</h3>
							<ul className="space-y-3">
								{quickEnquiries.map((item) => (
									<li key={item.href}>
										{(item as { disabled?: boolean }).disabled ? (
											<span className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-500">
												<span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
												{item.label}
												<span className="absolute -right-1 -top-2 inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-amber-700 shadow-sm">
													Soon
												</span>
											</span>
										) : (
											<Link
												href={item.href}
												className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-slate-50 px-3 py-2 text-sm text-slate-700 transition-all duration-200 hover:-translate-x-0.5 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
											>
												<span className="inline-flex h-2.5 w-2.5 rounded-full bg-linear-to-r from-emerald-500 to-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.12)] transition-transform duration-200 group-hover:scale-125" aria-hidden="true" />
												{item.label}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-[30px] border border-slate-200/70 bg-slate-900 p-5 shadow-[0_24px_60px_-35px_rgba(16,185,129,0.7)] backdrop-blur-sm text-white dark:border-slate-700 dark:bg-slate-900/80">
							<h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-white">
								<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-rose-500 text-white shadow-lg shadow-amber-500/20">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
										<path d="M7 7h10v10H7z" />
										<path d="M10 10h4v4h-4z" />
									</svg>
								</span>
								{footer.followUs}
							</h3>
							<div className="mb-6 flex flex-wrap items-center gap-3">
								{socialLinks.map(({ href, label, title, dataSocial, icon }) => (
									<Link
										key={dataSocial}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										title={title}
										itemProp="sameAs"
										data-social={dataSocial}
										className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-linear-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:shadow-[0_18px_28px_-18px_rgba(16,185,129,0.9)] dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
									>
										{icon}
									</Link>
								))}
							</div>

							<div className="hidden py-12">
								<div className="inline-flex w-full items-center justify-center">
									<OptimizedImage
										src="/images/qr-code.png"
										alt="AeroSun Energy QR Code - Scan to visit our website"
										width={170}
										height={170}
										className="h-36 w-36 rounded-2xl"
										title="AeroSun Energy Contact QR Code"
										itemProp="image"
										data-seo="qr-code"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full border-t border-[#20A44A]/10 bg-gray-50 pb-4 text-center text-sm text-gray-900 dark:border-slate-700 dark:bg-slate-900">
        <p className="mb-4 py-2 px-2 border-t border-b border-t-gray-200 border-b-gray-200 text-center text-[14px] leading-6 text-gray-400 dark:text-amber-400 sm:px-4 lg:px-4">
					🚧 This website is currently under development. Some content and images may be incomplete, and information, page titles, or page locations may change as updates are made.
          <br />Images generated with <Link href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="mx-1 text-emerald-600 transition-colors duration-200 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">ChatGPT</Link>.
				</p>
				<div className="mx-auto flex w-full max-w-350 flex-col items-center justify-between gap-2 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8">
					<div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.18em] text-gray-900">
						<Link
							href="/terms"
							className="transition-colors duration-200 hover:text-green-500"
						>
							Terms & Conditions
						</Link>
						<span className="text-slate-500">|</span>
						<Link
							href="/privacy"
							className="transition-colors duration-200 hover:text-orange-500"
						>
							Privacy Policy
						</Link>
					</div>
          <p className='text-gray-400'>Build with 💕 & 🔥 @VulchiVijayaKumar.</p>
					<p className='text-gray-400'>
						{footer.copyright}. {footer.allRightsReserved}
					</p>
				</div>
			</div>
		</footer>
	)
}