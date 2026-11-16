'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import Logo from '../brand/Logo'
import CompanyAge from './CompanyAge'
import { useLocale } from '@/lib/LocaleContext'
import { isProductionComingSoonLink } from '@/lib/navigation'
import { ArrowRight, ArrowUpRight, Globe, Mail, MapPin, Phone, Send, Sun, Wind, Zap } from 'lucide-react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useToast } from '@/app/components/ui/ToastProvider'

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
	const toast = useToast()
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
		<span className="inline-flex items-center gap-1.5 border-l border-amber-700/25 pl-2 text-[9px] uppercase tracking-[0.16em] text-amber-800">
			<span className="h-px w-2 bg-amber-700/70" aria-hidden="true" />
			{t.navbar.comingSoon}
		</span>
	)
	const [newsletterEmail, setNewsletterEmail] = useState('')
	const [newsletterPending, setNewsletterPending] = useState(false)
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

	async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setNewsletterPending(true)
		try {
			await submitWebsiteForm('newsletter', { email: newsletterEmail.trim() })
			toast.success(footer.newsletterStatus)
			setNewsletterEmail('')
		} catch {
			toast.error(t.formSubmission.error)
		} finally {
			setNewsletterPending(false)
		}
	}

	return (
		<footer
			id="contact"
			className="relative w-full overflow-hidden border-t border-slate-200/80 bg-[radial-gradient(ellipse_at_75%_5%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(ellipse_at_10%_85%,rgba(226,232,240,0.65),transparent_36%),linear-gradient(145deg,#ffffff_0%,#f8fafc_48%,#e2e8f0_100%)] text-slate-800 shadow-[0_-12px_40px_-28px_rgba(19,124,99,0.28)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-slate-200 before:to-[#137c63]"
		>
			<div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-amber-700/10" aria-hidden="true" />
			<div className="pointer-events-none absolute -right-24 top-16 h-[24rem] w-[24rem] rounded-full border border-slate-500/10" aria-hidden="true" />

			<div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10">
				<section className="relative mb-14 overflow-hidden rounded-[2rem] border border-white/90 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_52%,#eef2ff_100%)] p-7 text-slate-900 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.22)] sm:p-10 lg:mb-20 lg:p-14">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_45%,rgba(245,199,106,0.18),transparent_35%)]" aria-hidden="true" />
					<div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
						<div className="max-w-3xl">
							<p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-[#137c63]">
								<span className="h-px w-8 bg-[#137c63]" />
								{t.navbar.brandName}
							</p>
							<h2 className="mt-5 text-4xl leading-[1.05] tracking-[0.045em] text-slate-900 sm:text-5xl lg:text-6xl">
								{footer.heroTitle}
							</h2>
							<p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg">
								{footer.heroDescription}
							</p>
							<Link
								href="/contact"
								prefetch={false}
								className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#A5D6A7] px-6 py-3 text-sm font-bold text-[#173B2C] transition hover:-translate-y-0.5 hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7]"
							>
								{footer.contactCta}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
							</Link>
						</div>

						<div className="relative mx-auto flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52" role="img" aria-label={footer.illustrationLabel}>
							<div className="absolute inset-2 rounded-full border border-emerald-700/25" />
							<div className="absolute inset-5 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-amber-500/50 motion-reduce:animate-none" />
							<div className="absolute inset-0 animate-[spin_38s_linear_infinite_reverse] rounded-full border border-emerald-700/20 motion-reduce:animate-none" />
							<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C76A] text-slate-900 shadow-[0_0_60px_rgba(245,199,106,0.3)]">
								<Sun className="h-10 w-10 motion-safe:animate-[spin_20s_linear_infinite] motion-reduce:animate-none" strokeWidth={1.5} aria-hidden="true" />
							</div>
							<span className="absolute right-5 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/85 text-[#137c63] shadow-sm">
								<Wind className="h-4 w-4" aria-hidden="true" />
							</span>
							<span className="absolute bottom-7 left-2 flex h-8 w-8 items-center justify-center rounded-full border border-amber-300 bg-white/85 text-amber-700 shadow-sm">
								<Zap className="h-4 w-4" aria-hidden="true" />
							</span>
						</div>
					</div>
				</section>

				<div className="mb-10 h-px w-full origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent motion-reduce:animate-none" aria-hidden="true" />

				<div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1fr] lg:gap-x-8">
					<section aria-labelledby="footer-brand">
						<div className="inline-flex max-w-full rounded-xl bg-white p-2">
							<Logo />
						</div>
						<h2 id="footer-brand" className="mt-6 hidden text-sm font-bold tracking-wide text-slate-900">{t.navbar.brandName}</h2>
						<p className="mt-1 text-sm font-medium text-[#F5C76A] hidden">&ldquo;{t.navbar.brandTagline}&rdquo;</p>
						<p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">{footer.brandDesc}</p>
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
									className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-600 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#A5D6A7] hover:bg-[#A5D6A7] hover:text-[#173B2C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63]"
								>
									{icon}
								</Link>
							))}
						</div>
					</section>

					<nav aria-labelledby="footer-navigation">
						<h2 id="footer-navigation" className="mb-5 text-sm uppercase text-[#137c63]">{footer.quickLinks}</h2>
						<ul className="space-y-1">
							{visibleNavLinks.map((link) => (
								<li key={link.label}>
									{(link as { disabled?: boolean }).disabled || isProductionComingSoonLink(link.href) ? (
										<span className="flex min-h-10 w-full flex-col items-start justify-center gap-0.5 py-1 text-sm text-slate-500">
											<span className="min-w-0">{link.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`group inline-flex min-h-10 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] ${isActive(link.href) ? 'font-semibold text-[#137c63]' : 'text-slate-700 hover:text-[#137c63] focus-visible:text-[#137c63]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(link.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
						<h3 className="mb-3 mt-7 text-sm uppercase text-amber-800">{footer.quickEnquiries}</h3>
						<ul className="space-y-1">
							{quickEnquiries.map((item) => (
								<li key={item.href}>
									{(item as { disabled?: boolean }).disabled || isProductionComingSoonLink(item.href) ? (
										<span className="flex min-h-9 w-full flex-col items-start justify-center gap-0.5 py-1 text-sm text-slate-500">
											<span className="min-w-0">{item.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={item.href} prefetch={item.href !== '/installation-checklist' && item.href !== '/customer-agreement'} aria-current={isActive(item.href) ? 'page' : undefined} className={`group inline-flex min-h-11 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] ${isActive(item.href) ? 'font-semibold text-[#137c63]' : 'text-slate-700 hover:text-[#137c63] focus-visible:text-[#137c63]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(item.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{item.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-solutions">
						<h2 id="footer-solutions" className="mb-5 text-sm uppercase text-[#137c63]">{footer.ourSolutions}</h2>
						<ul className="space-y-1">
							{solutions.map((solution) => (
								<li key={solution.label}>
									{isProductionComingSoonLink(solution.href) ? (
										<span className="flex min-h-10 w-full flex-col items-start justify-center gap-0.5 py-1 text-sm text-slate-500">
											<span className="min-w-0">{solution.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={solution.href} aria-current={isActive(solution.href) ? 'page' : undefined} className={`group inline-flex min-h-10 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] ${isActive(solution.href) ? 'font-semibold text-[#137c63]' : 'text-slate-700 hover:text-[#137c63] focus-visible:text-[#137c63]'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(solution.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{solution.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<section aria-labelledby="footer-contact">
						<h2 id="footer-contact" className="mb-5 text-sm uppercase text-[#137c63]">{footer.contactInformation}</h2>
						<ul className="space-y-4 text-sm leading-6 text-slate-700">
							<li className="flex items-start gap-3">
								<MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]">
									{companyAddress}<span className="sr-only"> {footer.opensInNewTab}</span>
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
								<a href={`mailto:${footer.email}`} className="break-all transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]">{footer.email}</a>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
								<a href={`tel:${footer.phoneHref}`} className="transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]">{footer.phone}</a>
							</li>
							<li className="flex items-center gap-3">
								<Globe className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
								<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]">{footer.website}<span className="sr-only"> {footer.opensInNewTab}</span></a>
							</li>
							<li>
								<Link href="/save-earth" className="group inline-flex min-h-11 items-center gap-2 text-sm text-slate-700 transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]">
									<ArrowUpRight className="h-4 w-4 text-[#137c63]" aria-hidden="true" />{footer.saveEarth}
								</Link>
							</li>
							<li>
								<a href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 text-sm text-slate-700 transition-colors hover:text-[#137c63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63] focus-visible:text-[#137c63]" aria-label={footer.visitTrustLink.replace('{trust}', footer.trust)}>
									<ArrowUpRight className="h-4 w-4 text-[#137c63]" aria-hidden="true" />{footer.saveSanatanaDharma}
								</a>
							</li>
						</ul>
						<div className="mt-6 flex items-center gap-2 border-t border-slate-300/70 pt-4 text-sm text-slate-600">
							<Sun className="h-4 w-4 text-amber-700" aria-hidden="true" />
							<Wind className="h-4 w-4 text-[#137c63]" aria-hidden="true" />
							<span>{footer.solarWindHybrid}</span>
						</div>
					</section>
				</div>

				<section aria-labelledby="footer-newsletter" className="mt-14 grid gap-6 rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
					<div>
						<h2 id="footer-newsletter" className="text-2xl leading-[1.05] tracking-[0.045em] text-slate-900 sm:text-3xl">{footer.stayPowered}</h2>
						<p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{footer.newsletterDescription}</p>
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
								}}
								placeholder={footer.newsletterPlaceholder}
								className="min-h-12 min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#137c63] focus:ring-2 focus:ring-emerald-700/20"
							/>
							<button type="submit" disabled={newsletterPending} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#A5D6A7] px-6 text-sm font-bold text-[#173B2C] transition hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7] disabled:cursor-wait disabled:opacity-70">
								{newsletterPending ? t.formSubmission.saving : footer.subscribe} <Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>
						<p className="mt-3 text-sm leading-5 text-slate-500">{footer.newsletterHint}</p>
						<FormDataNotice className="text-slate-600" />
					</form>
				</section>
			</div>

			<div className="border-t border-slate-300/70 bg-white/55 backdrop-blur">
				<p className="mx-auto flex max-w-[90rem] justify-center gap-1 border-t border-slate-300/70 p-5 text-sm font-medium text-slate-600 sm:px-8 lg:flex-row lg:px-10">
					🚧 {footer.developmentNotice} <Link href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" aria-label={footer.attributionLinkLabel} className="text-[#137c63] transition-colors hover:text-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63]">{footer.attributionLinkText}</Link>
				</p>
				<div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-3 border-t border-slate-300/70 px-5 py-5 text-center sm:px-8 lg:flex-row lg:px-10">
					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-slate-600">
						{footer.legalLinks.map((link: { href: string; label: string }) => (
							<Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`transition-colors hover:text-[#137c63] ${isActive(link.href) ? 'font-semibold text-[#137c63]' : ''}`}>{link.label}</Link>
						))}
					</div>
					<p className="text-[12px] text-slate-600">{footer.attribution}</p>
					<p className="text-[12px] text-slate-600">
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