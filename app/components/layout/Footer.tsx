'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import Logo from '../brand/Logo'
import CompanyAge from './CompanyAge'
import { useLocale } from '@/lib/LocaleContext'
import { isProductionComingSoonLink } from '@/lib/navigation'
import { ArrowRight, ArrowUpRight, Globe, Mail, MapPin, Phone, Send, Sun, Wind, Zap } from 'lucide-react'

const socialIconComponents: Record<string, ReactNode> = {
	twitter: (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	),
	linkedin: (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	),
	facebook: (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	),
	instagram: (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
		</svg>
	),
}

const INITIAL_COPYRIGHT_YEAR = 2026

export default function Footer() {
	const { t } = useLocale()
	const pathname = usePathname() || '/'
	const footer = t.footer
	const socialMetadataByPlatform: Record<string, { label: string; title: string }> = footer.socialLinks
	const socialLinks = t.componentData.footer.socialLinks.map((social) => ({
		...social,
		icon: socialIconComponents[social.iconId],
	}))
	const navLinks = t.navbar.links
	const queries = t.navbar.quiries || []
	const quickEnquiries = queries
	const visibleNavLinks = navLinks
	const comingSoonBadge = (
		<span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#F5C76A]/20 bg-[#F5C76A]/[0.07] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F5C76A]">
			<span className="h-1.5 w-1.5 rounded-full bg-[#F5C76A]" aria-hidden="true" />
			{t.navbar.comingSoon}
		</span>
	)
	const [newsletterEmail, setNewsletterEmail] = useState('')
	const [newsletterStatus, setNewsletterStatus] = useState('')
	const [currentYear, setCurrentYear] = useState(INITIAL_COPYRIGHT_YEAR)
	const companyAddress = footer.address
	const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`
	const websiteUrl = footer.website.startsWith('http') ? footer.website : `https://${footer.website}`
	const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
	const solutions = footer.solutions

	useEffect(() => {
		const updateCurrentYear = () => setCurrentYear(new Date().getFullYear())
		updateCurrentYear()
	}, [])

	function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const subject = encodeURIComponent(footer.newsletterSubject)
		const body = encodeURIComponent(footer.newsletterBody.replace('{email}', newsletterEmail))
		setNewsletterStatus(footer.newsletterStatus)
		window.location.href = `mailto:${footer.email}?subject=${subject}&body=${body}`
	}

	return (
		<footer
			id="contact"
			className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_75%_5%,rgba(163,217,119,0.12),transparent_34%),linear-gradient(145deg,#071B17_0%,#0B2922_52%,#071B17_100%)] text-white"
		>
			<div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-[#F5C76A]/[0.08]" aria-hidden="true" />
			<div className="pointer-events-none absolute -right-24 top-16 h-[24rem] w-[24rem] rounded-full border border-[#A3D977]/[0.08]" aria-hidden="true" />

			<div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10">
				<section className="relative mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B2922]/80 p-7 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)] sm:p-10 lg:mb-20 lg:p-14">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_45%,rgba(163,217,119,0.14),transparent_35%)]" aria-hidden="true" />
					<div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
						<div className="max-w-3xl">
							<p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-[#A3D977]">
								<span className="h-px w-8 bg-[#A3D977]" />
								{t.navbar.brandName}
							</p>
							<h2 className="mt-5 text-4xl leading-[1.05] tracking-[0.045em] text-white sm:text-5xl lg:text-6xl">
								{footer.heroTitle}
							</h2>
							<p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-lg">
								{footer.heroDescription}
							</p>
							<Link
								href="/contact"
								className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#A5D6A7] px-6 py-3 text-sm font-bold text-[#173B2C] transition hover:-translate-y-0.5 hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7]"
							>
								{footer.contactCta}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
							</Link>
						</div>

						<div className="relative mx-auto flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52" role="img" aria-label={footer.illustrationLabel}>
							<div className="absolute inset-2 rounded-full border border-[#A3D977]/25" />
							<div className="absolute inset-5 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-[#F5C76A]/45 motion-reduce:animate-none" />
							<div className="absolute inset-0 animate-[spin_38s_linear_infinite_reverse] rounded-full border border-[#A3D977]/20 motion-reduce:animate-none" />
							<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C76A] text-[#071B17] shadow-[0_0_60px_rgba(245,199,106,0.3)]">
								<Sun className="h-10 w-10 motion-safe:animate-[spin_20s_linear_infinite] motion-reduce:animate-none" strokeWidth={1.5} aria-hidden="true" />
							</div>
							<span className="absolute right-5 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#123b30] text-[#A3D977]">
								<Wind className="h-4 w-4" aria-hidden="true" />
							</span>
							<span className="absolute bottom-7 left-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#123b30] text-[#F5C76A]">
								<Zap className="h-4 w-4" aria-hidden="true" />
							</span>
						</div>
					</div>
				</section>

				<div className="mb-10 h-px w-full origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#A3D977]/80 to-transparent motion-reduce:animate-none" aria-hidden="true" />

				<div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1fr] lg:gap-x-8">
					<section aria-labelledby="footer-brand">
						<div className="inline-flex max-w-full rounded-xl bg-white p-2">
							<Logo />
						</div>
						<h2 id="footer-brand" className="mt-6 text-sm font-bold tracking-wide text-white hidden">{t.navbar.brandName}</h2>
						<p className="mt-1 text-sm font-medium text-[#F5C76A] hidden">&ldquo;{t.navbar.brandTagline}&rdquo;</p>
						<p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">{footer.brandDesc}</p>
						<div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={footer.followUs}>
							{socialLinks.map(({ href, platform, dataSocial, icon }) => (
								<Link
									key={dataSocial}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={socialMetadataByPlatform[platform].label}
									title={socialMetadataByPlatform[platform].title}
									itemProp="sameAs"
									data-social={dataSocial}
									className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-gray-300 transition duration-200 hover:-translate-y-1 hover:border-[#A5D6A7] hover:bg-[#A5D6A7] hover:text-[#173B2C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7]"
								>
									{icon}
								</Link>
							))}
						</div>
					</section>

					<nav aria-labelledby="footer-navigation">
						<h2 id="footer-navigation" className="mb-5 text-sm uppercase text-[#A3D977]">{footer.quickLinks}</h2>
						<ul className="space-y-1">
							{visibleNavLinks.map((link) => (
								<li key={link.label}>
									{(link as { disabled?: boolean }).disabled || isProductionComingSoonLink(link.href) ? (
										<span className="flex min-h-10 w-full items-center justify-between gap-3 text-sm text-gray-400">
											<span className="min-w-0">{link.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`group inline-flex min-h-10 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] ${isActive(link.href) ? 'font-semibold text-[#DCEDC8]' : 'text-gray-300 hover:text-[#DCEDC8] focus-visible:text-[#DCEDC8]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(link.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
						<h3 className="mb-3 mt-7 text-sm uppercase text-[#F5C76A]">{footer.quickEnquiries}</h3>
						<ul className="space-y-1">
							{quickEnquiries.map((item) => (
								<li key={item.href}>
									{(item as { disabled?: boolean }).disabled || isProductionComingSoonLink(item.href) ? (
										<span className="flex min-h-9 w-full items-center justify-between gap-3 text-sm text-gray-400">
											<span className="min-w-0">{item.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`group inline-flex min-h-11 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] ${isActive(item.href) ? 'font-semibold text-[#DCEDC8]' : 'text-gray-300 hover:text-[#DCEDC8] focus-visible:text-[#DCEDC8]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(item.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{item.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-solutions">
						<h2 id="footer-solutions" className="mb-5 text-sm uppercase text-[#A3D977]">{footer.ourSolutions}</h2>
						<ul className="space-y-1">
							{solutions.map((solution) => (
								<li key={solution.label}>
									{isProductionComingSoonLink(solution.href) ? (
										<span className="flex min-h-10 w-full items-center justify-between gap-3 text-sm text-gray-400">
											<span className="min-w-0">{solution.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={solution.href} aria-current={isActive(solution.href) ? 'page' : undefined} className={`group inline-flex min-h-10 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] ${isActive(solution.href) ? 'font-semibold text-[#DCEDC8]' : 'text-gray-300 hover:text-[#DCEDC8] focus-visible:text-[#DCEDC8]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(solution.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{solution.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<section aria-labelledby="footer-contact">
						<h2 id="footer-contact" className="mb-5 text-sm uppercase text-[#A3D977]">{footer.contactInformation}</h2>
						<ul className="space-y-4 text-sm leading-6 text-gray-300">
							<li className="flex items-start gap-3">
								<MapPin className="mt-1 h-4 w-4 shrink-0 text-[#F5C76A]" aria-hidden="true" />
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]">
									{companyAddress}<span className="sr-only"> {footer.opensInNewTab}</span>
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-4 w-4 shrink-0 text-[#F5C76A]" aria-hidden="true" />
								<a href={`mailto:${footer.email}`} className="break-all transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]">{footer.email}</a>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="h-4 w-4 shrink-0 text-[#F5C76A]" aria-hidden="true" />
								<a href={`tel:${footer.phoneHref}`} className="transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]">{footer.phone}</a>
							</li>
							<li className="flex items-center gap-3">
								<Globe className="h-4 w-4 shrink-0 text-[#F5C76A]" aria-hidden="true" />
								<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]">{footer.website}<span className="sr-only"> {footer.opensInNewTab}</span></a>
							</li>
							<li>
								<Link href="/save-earth" className="group inline-flex min-h-11 items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]">
									<ArrowUpRight className="h-4 w-4 text-[#A5D6A7]" aria-hidden="true" />{footer.saveEarth}
								</Link>
							</li>
							<li>
								<a href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7] focus-visible:text-[#DCEDC8]" aria-label={footer.visitTrustLink.replace('{trust}', footer.trust)}>
									<ArrowUpRight className="h-4 w-4 text-[#A5D6A7]" aria-hidden="true" />{footer.saveSanatanaDharma}
								</a>
							</li>
						</ul>
						<div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-gray-400">
							<Sun className="h-4 w-4 text-[#F5C76A]" aria-hidden="true" />
							<Wind className="h-4 w-4 text-[#A3D977]" aria-hidden="true" />
							<span>{footer.solarWindHybrid}</span>
						</div>
					</section>
				</div>

				<section aria-labelledby="footer-newsletter" className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
					<div>
						<h2 id="footer-newsletter" className="text-2xl leading-[1.05] tracking-[0.045em] text-white sm:text-3xl">{footer.stayPowered}</h2>
						<p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">{footer.newsletterDescription}</p>
					</div>
					<form onSubmit={handleNewsletterSubmit} className="w-full">
						<label htmlFor="footer-newsletter-email" className="sr-only">{footer.newsletterEmailLabel}</label>
						<div className="flex flex-col gap-3 sm:flex-row">
							<input
								id="footer-newsletter-email"
								name="email"
								type="email"
								autoComplete="email"
								required
								maxLength={254}
								value={newsletterEmail}
								onChange={(event) => {
									setNewsletterEmail(event.target.value)
									setNewsletterStatus('')
								}}
								placeholder={footer.newsletterPlaceholder}
								className="min-h-12 min-w-0 flex-1 rounded-full border border-white/15 bg-[#071B17] px-5 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-[#A5D6A7] focus:ring-2 focus:ring-[#A5D6A7]/25"
							/>
							<button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#A5D6A7] px-6 text-sm font-bold text-[#173B2C] transition hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7]">
								{footer.subscribe} <Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>
						<p className="mt-3 text-sm leading-5 text-gray-400">{footer.newsletterHint}</p>
						<p role="status" aria-live="polite" className="mt-1 min-h-5 text-sm text-[#DCEDC8]">{newsletterStatus}</p>
					</form>
				</section>
			</div>

			<div className="border-t border-white/10 bg-black/20">
				<p className="mx-auto flex max-w-[90rem] justify-center text-sm font-medium text-gray-400 gap-1 border-t border-white/10 px-5 py-5 sm:px-8 lg:flex-row lg:px-10">
					🚧 {footer.developmentNotice} <Link href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" aria-label={footer.attributionLinkLabel} className="text-[#A5D6A7] transition-colors hover:text-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A5D6A7]">{footer.attributionLinkText}</Link>
				</p>
				<div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-5 text-center sm:px-8 lg:flex-row lg:px-10">
					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-gray-400">
						{footer.legalLinks.map((link: { href: string; label: string }) => (
							<Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`transition-colors hover:text-[#DCEDC8] ${isActive(link.href) ? 'font-semibold text-[#DCEDC8]' : ''}`}>{link.label}</Link>
						))}
					</div>
					<p className="text-[12px] text-gray-400">{footer.attribution}</p>
					<p className="text-[12px] text-gray-400">
						{footer.copyright.replace('{year}', String(currentYear))}
					</p>
				</div>
				<div className="border-t border-white/10 px-5 py-4 sm:px-8 lg:px-10">
					<CompanyAge />
				</div>
			</div>
		</footer>
	)
}