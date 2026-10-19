'use client'

import Link from 'next/link'
import Logo from '../brand/Logo'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

const socialLinks = [
	{
		href: 'https://x.com/aerosunenergy',
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
		href: 'https://www.linkedin.com/company/aerosunenergy',
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
		href: 'https://www.facebook.com/aerosunenergy',
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
		href: 'https://www.instagram.com/aerosunenergy',
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

	return (
		<footer
			id="contact"
			className="w-full overflow-hidden border-t border-[#20A44A]/10 bg-[radial-gradient(circle_at_top,rgba(32,164,74,0.10),transparent_40%),linear-gradient(180deg,#f9fdf9_0%,#eef8f1_100%)] text-slate-800 shadow-[0_-12px_35px_-28px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_35%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-slate-100"
		>
			<div className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
					<div className="space-y-5">
						<div className="inline-flex p-2 dark:border-slate-700 dark:bg-slate-900/60">
							<Logo />
						</div>

						<p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
							{footer.brandDesc}
						</p>

						<div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
							<p className="flex items-center gap-2">
								<span
									className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF9F0] text-[#20A44A] dark:bg-slate-800 dark:text-[#F59E0B]"
									aria-hidden="true"
								>
									✉️
								</span>
								{footer.email}
							</p>
							<p className="flex items-center gap-2">
								<span
									className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF7E6] text-[#F59E0B] dark:bg-slate-800 dark:text-[#F59E0B]"
									aria-hidden="true"
								>
									🌐
								</span>
								<Link
									href={footer.website?.startsWith('http') ? footer.website : `https://${footer.website}`}
									className="transition-colors duration-150 hover:underline"
									target="_self"
									rel="nofollow"
									aria-label={`Visit ${footer.website}`}
								>
									{footer.website}
								</Link>
							</p>
							<p className="flex items-center gap-2">
								<span
									className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF7E6] text-[#F59E0B] dark:bg-slate-800 dark:text-[#F59E0B]"
									aria-hidden="true"
								>
									🌐
								</span>
								<Link
									href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`}
									className="transition-colors duration-150 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Visit ${footer.trust} (opens in new tab)`}
								>
									{footer.trust}
								</Link>
							</p>
						</div>
					</div>

					<div>
						<h3 className="mb-5 text-lg font-bold text-[#18251F] dark:text-white">
							{footer.quickLinks}
						</h3>
						<ul className="space-y-3">
							{navLinks.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="inline-flex items-center gap-2 text-sm text-slate-700 transition-all duration-200 hover:translate-x-1 hover:text-[#20A44A] dark:text-slate-300 dark:hover:text-[#F59E0B]"
									>
										<span
											className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]"
											aria-hidden="true"
										/>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-5 text-lg font-bold text-[#18251F] dark:text-white">
							{footer.followUs}
						</h3>
						<div className="mb-6 flex flex-wrap items-center gap-3">
							{socialLinks.map(
								({ href, label, title, dataSocial, icon }) => (
									<Link
										key={dataSocial}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
										title={title}
										itemProp="sameAs"
										data-social={dataSocial}
										className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20A44A] hover:text-white dark:bg-slate-800 dark:hover:bg-[#F59E0B] dark:hover:text-slate-950"
									>
										{icon}
									</Link>
								)
							)}
						</div>

						<div className="inline-flex bg-white/80 p-3 shadow-[0_18px_30px_-22px_rgba(15,23,42,0.4)] dark:border-slate-700 dark:bg-slate-900/70">
							<OptimizedImage
								src="/images/qr-code.png"
								alt="AeroSun Energy QR Code - Scan to visit our website"
								width={170}
								height={170}
								className="h-auto w-40 rounded-2xl"
								title="AeroSun Energy Contact QR Code"
								itemProp="image"
								data-seo="qr-code"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full border-t border-[#20A44A]/10 bg-[#18251F] py-4 text-center text-sm text-white/90 dark:border-slate-700 dark:bg-slate-900">
				<div className="flex w-full flex-col items-center justify-between gap-2 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8">
					<div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.18em] text-slate-300">
						<Link
							href="/terms"
							className="transition-colors duration-200 hover:text-white"
						>
							Terms & Conditions
						</Link>
						<span className="text-slate-500">|</span>
						<Link
							href="/privacy"
							className="transition-colors duration-200 hover:text-white"
						>
							Privacy Policy
						</Link>
					</div>
					<p>
						{footer.copyright}. {footer.allRightsReserved}
					</p>
				</div>
			</div>
		</footer>
	)
}