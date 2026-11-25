'use client'

import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import Logo from '@/app/components/brand/Logo'
import { isLocale, LocaleProvider, useLocale, type Locale } from '@/lib/LocaleContext'
import { ArrowDownToLine, ArrowRight, ArrowUp, ArrowUpRight, Banknote, Building2, Check, ChevronDown, ChevronUp, Globe, Globe2, House, Info, Mail, MapPin, Megaphone, Menu, PanelsTopLeft, PackageOpen, Phone, RefreshCw, Send, Sun, WifiOff, Wind, X, Zap, type LucideIcon } from 'lucide-react'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { ToastContext, useToast, type ToastApi, type ToastKind } from '@/app/components/ui/ToastContext'
import { trackGoogleAdsPageViewConversion } from '@/lib/googleAdsConversion'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import en from '@/public/locales/en/index.json'

const DeferredOverlays = dynamic(() => import('./DeferredOverlays'), {
  ssr: false,
  loading: () => null,
})

function DeferredOverlayLoader() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  return isReady ? <DeferredOverlays /> : null
}

export default function SiteChrome({
  children,
  gtmId,
  googleAdsId,
  gaMeasurementId,
}: {
  children: ReactNode
  gtmId?: string
  googleAdsId?: string
  gaMeasurementId?: string
}) {
  const pathname = usePathname() ?? ''
  const isDashboardRoute = pathname === '/auth/dashboard' || pathname.startsWith('/auth/dashboard/')

  return (
    <>
      {process.env.NODE_ENV === 'production' ? <ProductionProtector /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(en.componentData.jsonLdSchema) }}
      />
      <ConsentAwareTracking
        gtmId={gtmId}
        googleAdsId={googleAdsId}
        gaMeasurementId={gaMeasurementId}
      />
      {process.env.NODE_ENV !== 'production' ? <PerformanceMonitor /> : null}
      <LocaleProvider>
        <ToastProvider>
          <NetworkStatus />
          <Notifications />
          <DeferredOverlayLoader />
          {!isDashboardRoute && <Navbar />}
          {children}
          {!isDashboardRoute && <Footer />}
          <BackToTop />
        </ToastProvider>
      </LocaleProvider>
    </>
  )
}


const socialIconClassName = 'h-5 w-5 shrink-0'

const socialIconComponents: Record<string, ReactNode> = {
	twitter: (
		<svg xmlns="http://www.w3.org/2000/svg" className={socialIconClassName} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	),
	linkedin: (
		<svg xmlns="http://www.w3.org/2000/svg" className={socialIconClassName} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
		</svg>
	),
	facebook: (
		<svg xmlns="http://www.w3.org/2000/svg" className={socialIconClassName} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	),
	instagram: (
		<svg xmlns="http://www.w3.org/2000/svg" className={socialIconClassName} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
		</svg>
	),
	youtube: (
		<svg xmlns="http://www.w3.org/2000/svg" className="h-[1.375rem] w-[1.375rem] shrink-0" fill="none" viewBox="3 6 18 12" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
			<rect x="3" y="6" width="18" height="12" rx="4" />
			<path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
		</svg>
	),
}

const INITIAL_COPYRIGHT_YEAR = 2026

function Footer() {
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
	const visibleNavLinks = [...navLinks.filter((link) => link.href !== '/policies'), { label: footer.referralProgram, href: '/referral-programme' }]
	const comingSoonBadge = (
		<span className="inline-flex items-center gap-1.5 border-l border-amber-200/30 pl-2 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">
			<span className="h-px w-2 bg-amber-200/70" aria-hidden="true" />
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
			className="relative w-full overflow-hidden border-t border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(23,37,84,0.96),rgba(23,37,84,0.96))] text-white/90 shadow-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-white/40 before:to-sky-300 "
		>
			<div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-amber-700/10 " aria-hidden="true" />

			<div className="pointer-events-none absolute -right-24 top-16 h-[24rem] w-[24rem] rounded-full border border-slate-700 " aria-hidden="true" />

			<div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 ">

				<section className="relative mb-14 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#d72b0b_0%,#f99104_52%,#faf206_100%)] p-7 text-slate-900 sm:p-10 lg:mb-20 lg:p-14 shadow-sm">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_45%,rgba(245,199,106,0.18),transparent_35%)]" aria-hidden="true" />
					<div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
						<div className="max-w-3xl">
							<p className="flex items-center gap-3 uppercase text-white text-xs tracking-wide leading-5">
								<span className="h-px w-8 bg-white" />
								{t.navbar.brandName}
							</p>
							<h2 className="mt-5 text-slate-200 text-3xl sm:text-4xl leading-snug">
								{footer.heroTitle}
							</h2>
							<p className="mt-5 max-w-2xl text-slate-100 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
								{footer.heroDescription}
							</p>
							<Link
								href="/contact"
								prefetch={false}
								className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#148161] px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#148161] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7]"
							>
								{footer.contactCta}
								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
							</Link>
						</div>

						<div className="relative mx-auto flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52" role="img" aria-label={footer.illustrationLabel}>
							<div className="absolute inset-2 rounded-full border border-emerald-700/25" />
							<div className="absolute inset-5 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-amber-500/50 motion-reduce:animate-none" />
							<div className="absolute inset-0 animate-[spin_38s_linear_infinite_reverse] rounded-full border border-emerald-700/20 motion-reduce:animate-none" />
							<div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#F5C76A] text-slate-900 shadow-sm">
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

				<div className="mb-10 h-px w-full origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent motion-reduce:animate-none " aria-hidden="true" />

				<div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1fr] lg:gap-x-8 ">
					<section aria-labelledby="footer-brand">
						<div className="inline-flex max-w-full p-2">
							<Logo />
						</div>
						<h2 id="footer-brand" className="mt-6 hidden text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{t.navbar.brandName}</h2>
						<p className="mt-1 text-[#F5C76A] hidden      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">&ldquo;{t.navbar.brandTagline}&rdquo;</p>
						<p className="mt-4 max-w-sm text-white/75      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{footer.brandDesc}</p>
						<div className="mt-6 flex flex-wrap gap-3" role="group" aria-label={footer.followUs}>
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
									className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-300/60 hover:bg-linear-to-r hover:from-[#137c63] hover:to-[#20A44A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#137c63]"
								>
									{icon}
								</Link>
							))}
						</div>
					</section>

					<nav aria-labelledby="footer-navigation">
						<h2 id="footer-navigation" className="mb-5 uppercase text-sky-200 text-2xl leading-snug">{footer.quickLinks}</h2>
						<ul className="space-y-0.5">
							{visibleNavLinks.map((link) => (
								<li key={link.label}>
									{(link as { disabled?: boolean }).disabled ? (
										<span className="flex min-h-9 w-full flex-col items-start justify-center gap-0.5 py-1 text-sm text-white/50">
											<span className="min-w-0">{link.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`group inline-flex min-h-9 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 ${isActive(link.href) ? 'text-amber-200' : 'text-white/80 hover:text-amber-100 focus-visible:text-amber-100'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(link.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
						<h3 className="mb-3 mt-7 uppercase text-amber-200 text-2xl leading-snug">{footer.quickEnquiries}</h3>
						<ul className="space-y-0.5">
							{quickEnquiries.map((item) => (
								<li key={item.href}>
									{(item as { disabled?: boolean }).disabled ? (
										<span className="flex min-h-9 w-full flex-col items-start justify-center gap-0.5 py-1 text-sm text-white/50">
											<span className="min-w-0">{item.label}</span>{comingSoonBadge}
										</span>
									) : (
										<Link href={item.href} prefetch={item.href !== '/auth/dashboard/installation-checklist' && item.href !== '/auth/dashboard/customer-agreement'} aria-current={isActive(item.href) ? 'page' : undefined} className={`group inline-flex min-h-9 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 ${isActive(item.href) ? 'text-amber-200' : 'text-white/80 hover:text-amber-100 focus-visible:text-amber-100'}`}>
											<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(item.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
											{item.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>

					<nav aria-labelledby="footer-solutions">
						<h2 id="footer-solutions" className="mb-5 uppercase text-sky-200 text-2xl leading-snug">{footer.ourSolutions}</h2>
						<ul className="space-y-0.5">
							{solutions.map((solution) => (
								<li key={solution.label}>
									<Link href={solution.href} aria-current={isActive(solution.href) ? 'page' : undefined} className={`group inline-flex min-h-9 items-center gap-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 ${isActive(solution.href) ? 'text-amber-200' : 'text-white/80 hover:text-amber-100 focus-visible:text-amber-100'}`}>
										<span className={`h-px transition-all group-hover:w-3 group-focus-visible:w-3 ${isActive(solution.href) ? 'w-3 bg-[#A5D6A7]' : 'w-0 bg-[#A5D6A7]'}`} aria-hidden="true" />
										{solution.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<section aria-labelledby="footer-contact">
						<h2 id="footer-contact" className="mb-5 uppercase text-sky-200 text-2xl leading-snug">{footer.contactInformation}</h2>
						<ul className="space-y-4 text-sm leading-6 text-white/80 ">
							<li className="flex items-start gap-3">
								<MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">
									{companyAddress}<span className="sr-only"> {footer.opensInNewTab}</span>
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<span className="break-all">{footer.email}</span>
							</li>
							<li className="flex items-center gap-3 ">
								<Phone className="h-4 w-4 shrink-0 text-amber-300 " aria-hidden="true" />
								<a href={`tel:${footer.phoneHref}`} className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100 "><DigitalNumber value={footer.phone} /></a>
							</li>
							<li className="flex items-center gap-3">
								<Globe className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
								<a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">{footer.website}<span className="sr-only"> {footer.opensInNewTab}</span></a>
							</li>
							<li>
								<Link href="/save-earth" className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100">
									<ArrowUpRight className="h-4 w-4 text-sky-200" aria-hidden="true" />{footer.saveEarth}
								</Link>
							</li>
							<li>
								<a href={footer.trust?.startsWith('http') ? footer.trust : `https://${footer.trust}`} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 text-sm text-white/80 transition-colors hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 focus-visible:text-amber-100" aria-label={footer.visitTrustLink.replace('{trust}', footer.trust)}>
									<ArrowUpRight className="h-4 w-4 text-sky-200" aria-hidden="true" />{footer.saveSanatanaDharma}
								</a>
							</li>
						</ul>
						<div className="mt-6 flex items-center gap-2 border-t border-slate-700 pt-4 text-sm text-white/75">
							<Sun className="h-4 w-4 text-amber-300" aria-hidden="true" />
							<Wind className="h-4 w-4 text-sky-200" aria-hidden="true" />
							<span>{footer.solarWindHybrid}</span>
						</div>
					</section>
				</div>

				<section aria-labelledby="footer-newsletter" className="mt-14 grid gap-6 rounded-xl bg-[#147e62] p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
					<div>
						<h2 id="footer-newsletter" className="text-slate-200 text-2xl sm:text-3xl leading-snug">{footer.stayPowered}</h2>
						<p className="mt-2 max-w-xl text-slate-100 text-sm sm:text-base font-normal tracking-normal sm:leading-5">{footer.newsletterDescription}</p>
					</div>
					<form onSubmit={handleNewsletterSubmit} className="w-full">
						<label htmlFor="footer-newsletter-email" className="sr-only text-xs sm:text-sm tracking-normal leading-5">{footer.newsletterEmailLabel}</label>
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
								className="min-h-12 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-800 focus:border-[#137c63] focus:ring-2 focus:ring-emerald-700/20 text-sm sm:text-base font-normal tracking-normal leading-6"
							/>
							<button type="submit" disabled={newsletterPending} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-[#1fa34a] transition hover:bg-[#DCEDC8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A5D6A7] disabled:cursor-wait disabled:opacity-70 text-sm sm:text-base font-semibold tracking-normal leading-6">
								{newsletterPending ? t.formSubmission.saving : footer.subscribe} <Send className="h-4 w-4" aria-hidden="true" />
							</button>
						</div>
						<p className="my-5 text-slate-200 text-sm sm:text-base font-normal tracking-normal sm:leading-5">{footer.newsletterHint}</p>
						<FormDataNotice className="text-slate-200" />
					</form>
				</section>

			</div>

			<div className="border-t border-slate-700 bg-white/5 backdrop-blur ">
				<div className="flex w-full flex-col items-center justify-between gap-1 border-t border-slate-700 px-5 py-5 text-center sm:px-8 lg:flex-row lg:px-10 ">
					<div className="flex flex-wrap items-center justify-center gap-1 text-xs uppercase text-white/70 tracking-wide leading-5">
						{footer.legalLinks.map((link: { href: string; label: string }) => (
              <Fragment key={link.href}>
                <Link href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`transition-colors hover:text-amber-100 ${isActive(link.href) ? 'text-amber-200' : ''}`}>
                {link.label}</Link>
                <span className="inline-flex px-1 text-amber-500 last:hidden">|</span>
              </Fragment>
						))}
					</div>
					<p className="text-white/50 tabular-nums text-xs font-normal tracking-normal leading-6 sm:leading-7">
            {footer.attribution} <DigitalNumber value={footer.copyright.replace('{year}', String(currentYear))} />
					</p>
				</div>
				<div className="border-t border-slate-700 px-5 py-4 sm:px-8 lg:px-10">
					<CompanyAge />
				</div>
			</div>
		</footer>
	)
}


type Duration = {
	years: number
	months: number
	days: number
}

const START_DATE = new Date(2026, 9, 6)

function getDuration(date: Date): Duration {
	const referenceDate = new Date(date)
	referenceDate.setHours(0, 0, 0, 0)

	if (referenceDate < START_DATE) {
		return { years: 0, months: 0, days: 0 }
	}

	let totalMonths =
		(referenceDate.getFullYear() - START_DATE.getFullYear()) * 12 +
		(referenceDate.getMonth() - START_DATE.getMonth())
	let days = referenceDate.getDate() - START_DATE.getDate()

	if (days < 0) {
		const previousMonth = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0)
		days += previousMonth.getDate()
		totalMonths -= 1
	}

	const years = Math.floor(totalMonths / 12)
	const months = totalMonths % 12

	return {
		years,
		months: months < 0 ? 0 : months,
		days,
	}
}

function CompanyAge() {
	const { locale, t } = useLocale()
	const [duration, setDuration] = useState<Duration | null>(null)
	const companyAge = t.companyAge
	const digitalFontStyle = t.componentData.companyAge.digitalFontStyle

	useEffect(() => {
		const updateDuration = () => setDuration(getDuration(new Date()))
		let timeout: number | undefined

		const scheduleUpdate = () => {
			const now = new Date()
			const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
			timeout = window.setTimeout(() => {
				updateDuration()
				scheduleUpdate()
			}, Math.max(nextDay.getTime() - now.getTime(), 0))
		}

		updateDuration()
		scheduleUpdate()

		return () => {
			if (timeout !== undefined) {
				window.clearTimeout(timeout)
			}
		}
	}, [])

	const units = duration
		? [
				...(duration.years > 0
					? [{ value: duration.years, label: duration.years === 1 ? companyAge.year : companyAge.years }]
					: []),
				...(duration.years > 0 || duration.months > 0 || duration.days > 0
					? [{ value: duration.months, label: duration.months === 1 ? companyAge.month : companyAge.months }]
					: []),
				...(duration.days >= 0
					? [{ value: duration.days, label: duration.days === 1 ? companyAge.day : companyAge.days }]
					: []),
			]
		: null

	const formatter = new Intl.DateTimeFormat({
		en: 'en-US',
		hi: 'hi-IN',
		te: 'te-IN',
		ta: 'ta-IN',
		kn: 'kn-IN',
		ml: 'ml-IN',
	}[locale], {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})
	const formattedStartDate = formatter.format(START_DATE)

	return (
		<p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/75      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
			<span>
				{companyAge.operatingSince}{' '}
				<span className="text-sm" style={digitalFontStyle}>{formattedStartDate}</span>
			</span>
			{units && (
				<span className="inline-flex items-baseline gap-1.5 text-xs font-semibold tracking-wide leading-5" style={digitalFontStyle}>
					{units.map(({ value, label }) => (
						<span key={`${label}-${value}`} className="whitespace-nowrap">
							<span className="text-amber-200 text-xs font-semibold tracking-wide leading-5">
								{String(value).padStart(2, '0')}
							</span>{' '}
							{label}
						</span>
					))}
				</span>
			)}
		</p>
	)
}


function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-linear-to-br from-[#FF9933] via-white to-[#138808] text-[#075e3b] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
    >
      <svg
        viewBox="0 0 32 32"
        className="pointer-events-none absolute h-4 w-4 text-[#000080] opacity-55"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" />
        {Array.from({ length: 24 }, (_, index) => (
          <g key={index} transform={`rotate(${index * 15} 16 16)`}>
            <line x1="16" y1="5" x2="16" y2="27" />
          </g>
        ))}
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
      <ArrowUp className="relative z-10 animate-bounce" width={24} height={24} strokeWidth={1.5} color='#000000' aria-hidden="true" />
    </button>
  )
}

const TRACKING_COOKIE_KEY = 'aerosun_cookie_consent'

function ConsentAwareTracking({
  gtmId,
  googleAdsId,
  gaMeasurementId,
}: {
  gtmId?: string
  googleAdsId?: string
  gaMeasurementId?: string
}) {
  const { t } = useLocale()
  const pathname = usePathname()
  const adsTagIds = Array.from(
    new Set(
      [googleAdsId, ...t.componentData.consentAwareTracking.adsTagIds].filter(
        (id): id is string => Boolean(id),
      ),
    ),
  )
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      setHasConsent(window.localStorage.getItem(TRACKING_COOKIE_KEY) === 'accepted')
    }

    const handleConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<{ choice?: string }>).detail?.choice
      setHasConsent(choice === 'accepted')
    }

    syncConsent()
    window.addEventListener('aerosun-cookie-consent', handleConsentChange)
    window.addEventListener('storage', syncConsent)

    return () => {
      window.removeEventListener('aerosun-cookie-consent', handleConsentChange)
      window.removeEventListener('storage', syncConsent)
    }
  }, [])

  useEffect(() => {
    if (hasConsent) {
      trackGoogleAdsPageViewConversion()
    }
  }, [hasConsent, pathname])

  if (!hasConsent) return null

  const gtagId = gaMeasurementId || adsTagIds[0]

  return (
    <>
      {gtmId ? (
        <>
          <Script id="google-tag-manager-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            `}
          </Script>
          <Script
            id="google-tag-manager"
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}
      <Script
        id="google-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ''}
          ${adsTagIds.map((id) => `gtag('config', '${id}');`).join('\n')}
        `}
      </Script>
    </>
  )
}

function NetworkStatus() {
  const { t } = useLocale()
  const content = t.systemUi.networkStatus
  const [isOffline, setIsOffline] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [retryMessage, setRetryMessage] = useState('')

  useEffect(() => {
    const updateConnection = () => {
      setIsOffline(!navigator.onLine)
      setHasMounted(true)
    }

    updateConnection()
    window.addEventListener('online', updateConnection)
    window.addEventListener('offline', updateConnection)

    return () => {
      window.removeEventListener('online', updateConnection)
      window.removeEventListener('offline', updateConnection)
    }
  }, [])

  if (!hasMounted || !isOffline) return null

  function retry() {
    if (navigator.onLine) {
      window.location.reload()
      return
    }

    setRetryMessage(content.retryOffline)
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={content.accessibilityLabel}
      className="relative z-[70] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-[#f5c76a]/20 bg-[#092d25] px-4 py-3 text-center text-base text-white"
    >
      <WifiOff className="h-4 w-4 shrink-0 text-[#f5c76a]" aria-hidden="true" />
      <p className="text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
        {content.offlineMessage}
      </p>
      <button
        type="button"
        onClick={retry}
        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-slate-700 px-3 py-1.5 text-sm sm:text-base font-semibold tracking-normal leading-6 text-[#d6e8b9] transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6e8b9]"
      >
        <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
        {content.retry}
      </button>
      {retryMessage && <span className="sr-only" aria-live="polite">{retryMessage}</span>}
    </div>
  )
}

function Notifications() {
  const { t } = useLocale()
  const { text: notificationText, highlight: notificationBoldText, tail: notificationEndText } = t.notifications
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsExpanded(false), 10_000)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className=" bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] px-3 py-2 text-slate-800 shadow-sm sm:px-5">
      <div className="relative mx-auto flex w-full items-center gap-3 overflow-hidden bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] text-white shadow-sm">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-300 via-sky-400 to-violet-500" aria-hidden="true" />
        <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-950/80 text-white shadow-sm">
          <Megaphone className="h-4 w-4" aria-hidden="true" />
        </div>

        <div id="site-notification-content" hidden={!isExpanded} className="min-w-0 flex-1 py-2">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-sm" aria-hidden="true" />
            <span className="uppercase text-white text-xs tracking-wide leading-5">
              {t.notifications.badge}
            </span>
          </div>
          <p className="text-white text-sm sm:text-base leading-5">
            {notificationText}
            <span className="text-xs sm:text-sm underline underline-offset-4 text-[#ffb321]">{notificationBoldText}</span>
            {notificationEndText}
          </p>
        </div>

        {!isExpanded && (
          <span className="min-w-0 flex-1 truncate uppercase text-[#F59E0B] text-xs font-semibold tracking-wide leading-5">
            {t.notifications.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-label={isExpanded ? t.notifications.toggleClose : t.notifications.toggleOpen}
          aria-expanded={isExpanded}
          aria-controls="site-notification-content"
          className="mr-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 text-white transition hover:border-amber-300/60 hover:bg-white/10 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  )
}

const REPORT_KEY = 'aerosun_performance_report'

type Metrics = {
  ttfb: number
  domContentLoaded: number
  load: number
  firstPaint: number
  firstContentfulPaint: number
  cls: number
  timestamp: number
}

function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      const paintEntries = performance.getEntriesByType('paint')
      const layoutShiftEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[]
      const firstPaint = paintEntries.find((entry) => entry.name === 'first-paint')
      const firstContentfulPaint = paintEntries.find((entry) => entry.name === 'first-contentful-paint')

      const cls = layoutShiftEntries.reduce(
        (sum, entry) =>
          sum + ('value' in entry ? Number((entry as PerformanceEntry & { value?: number }).value ?? 0) : 0),
        0,
      )

      const nextMetrics: Metrics = {
        ttfb: navigation ? navigation.responseStart - navigation.startTime : 0,
        domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.startTime : 0,
        load: navigation ? navigation.loadEventEnd - navigation.startTime : 0,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        cls: Number(cls.toFixed(4)),
        timestamp: Date.now(),
      }

      setMetrics(nextMetrics)

      try {
        sessionStorage.setItem(REPORT_KEY, JSON.stringify(nextMetrics))
      } catch {
        // storage is optional and should never break the page
      }

      if (process.env.NODE_ENV !== 'production') {
        console.table([
          { metric: 'TTFB', value: `${Math.round(nextMetrics.ttfb)} ms` },
          { metric: 'DOMContentLoaded', value: `${Math.round(nextMetrics.domContentLoaded)} ms` },
          { metric: 'Load', value: `${Math.round(nextMetrics.load)} ms` },
          { metric: 'FCP', value: `${Math.round(nextMetrics.firstContentfulPaint)} ms` },
          { metric: 'CLS', value: nextMetrics.cls.toFixed(4) },
        ])
      }
    }

    if (document.readyState === 'complete') {
      handleLoad()
      return
    }

    window.addEventListener('load', handleLoad, { once: true })
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  const rows = metrics
    ? [
        { label: 'TTFB', value: `${Math.round(metrics.ttfb)}ms` },
        { label: 'FCP', value: `${Math.round(metrics.firstContentfulPaint)}ms` },
        { label: 'CLS', value: metrics.cls.toFixed(4) },
      ]
    : [{ label: 'Perf', value: 'Loading…' }]

  return (
    <div className="fixed bottom-4 right-4 z-40 rounded-xl border border-slate-700 bg-slate-950/85 px-3 py-2 text-xs font-medium shadow-md backdrop-blur-sm tracking-normal ">
      <div className="mb-1 flex items-center gap-2 uppercase text-sky-300 text-xs font-semibold tracking-wide leading-5">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm" />
        Perf
      </div>
      <div className="space-y-1 text-slate-200 ">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 ">
            <span className="text-slate-400">{row.label}</span>
            <span className="font-semibold text-white tracking-normal tabular-nums"><DigitalNumber value={row.value} /></span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductionProtector() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    const onContext = (e: MouseEvent) => {
      e.preventDefault()
    }

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()
      if (key === 'F12') e.preventDefault()
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) e.preventDefault()
      if (e.ctrlKey && key === 'U') e.preventDefault()
    }

    document.addEventListener('contextmenu', onContext, true)
    document.addEventListener('keydown', onKey, true)

    return () => {
      document.removeEventListener('contextmenu', onContext, true)
      document.removeEventListener('keydown', onKey, true)
    }
  }, [])

  return null
}

type ToastItem = { id: number; kind: ToastKind; message: string }

function ToastIcon({ kind }: { kind: ToastKind }) {
  if (kind === 'success') {
    return (
      <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.78-9.97a.75.75 0 0 0-1.06-1.06L9 10.69 7.28 8.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.25-4.25Z" clipRule="evenodd" />
      </svg>
    )
  }
  if (kind === 'error') {
    return (
      <svg className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
      </svg>
    )
  }
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9.25 8a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0V8Zm.75-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" />
    </svg>
  )
}

function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const nextId = useRef(0)
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>())

  const dismiss = useCallback((id: number) => {
    const timer = timers.current.get(id)
    if (timer) clearTimeout(timer)
    timers.current.delete(id)
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const show = useCallback((kind: ToastKind, message: string) => {
    const id = ++nextId.current
    setToasts((current) => [...current, { id, kind, message }])
    timers.current.set(id, setTimeout(() => dismiss(id), 5000))
  }, [dismiss])

  const toast = useMemo<ToastApi>(() => ({
    success: (message) => show('success', message),
    error: (message) => show('error', message),
    info: (message) => show('info', message),
  }), [show])

  useEffect(() => {
    const activeTimers = timers.current
    let validationTimer: ReturnType<typeof setTimeout> | undefined
    let firstValidationMessage = ''
    const handleInvalid = (event: Event) => {
      const field = event.target
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return

      event.preventDefault()
      if (!firstValidationMessage) {
        firstValidationMessage = field.validationMessage || 'Please review the highlighted form fields.'
      }
      if (validationTimer) return
      validationTimer = setTimeout(() => {
        toast.error(firstValidationMessage)
        firstValidationMessage = ''
        validationTimer = undefined
      }, 0)
    }

    document.addEventListener('invalid', handleInvalid, true)
    return () => {
      document.removeEventListener('invalid', handleInvalid, true)
      if (validationTimer) clearTimeout(validationTimer)
      for (const timer of activeTimers.values()) clearTimeout(timer)
      activeTimers.clear()
    }
  }, [toast])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3 sm:right-6 sm:top-6">
        {toasts.map((item) => (
          <div
            key={item.id}
            role={item.kind === 'error' ? 'alert' : 'status'}
            aria-live={item.kind === 'error' ? 'assertive' : 'polite'}
            aria-atomic="true"
            className={`pointer-events-auto flex items-start gap-3 rounded-xl border bg-white p-4 shadow-md ${
              item.kind === 'success'
                ? 'border-emerald-200'
                : item.kind === 'error'
                  ? 'border-rose-200'
                  : 'border-sky-200'
            }`}
          >
            <ToastIcon kind={item.kind} />
            <p className="min-w-0 flex-1 text-slate-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.message}</p>
            <button
              type="button"
              onClick={() => dismiss(item.id)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
              aria-label="Dismiss notification"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

const navigationIconComponents: Record<string, LucideIcon> = {
  house: House,
  info: Info,
  building: Building2,
  bank: Banknote,
  package: PackageOpen,
  sun: Sun,
  wind: Wind,
  zap: Zap,
  panels: PanelsTopLeft,
  mail: Mail,
}

type NavigationLink = {
  label: string
  href: string
  disabled?: boolean
  children?: { label: string; href: string }[]
}

function Navbar() {
  const { t, locale, setLocale } = useLocale()
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null)
  const [dismissedDesktopSubmenu, setDismissedDesktopSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const languageOptions = t.navbar.languages as {
    code: Locale
    label: string
    shortLabel: string
  }[]
  const navLinks = t.navbar.links
  const navigationIconIds: Record<string, string> = t.navbar.navigationIconIds

  const getNavigationIcon = (href: string) =>
    navigationIconComponents[navigationIconIds[href]] ?? PanelsTopLeft

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false)
        setLangOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  function closeMenu() {
    setMenuOpen(false)
    setLangOpen(false)
    setExpandedMobileSubmenu(null)
  }

  function renderNavigationLink(link: NavigationLink, mobile = false) {
    const disabled = Boolean(link.disabled)
    const active = isActive(link.href) && !disabled
    const Icon = getNavigationIcon(link.href)
    const comingSoonLabel = t.navbar.comingSoon
    const classes = mobile
      ? `flex min-h-12 w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
          disabled
            ? 'cursor-not-allowed text-white/50'
            : active
              ? 'bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm ring-1 ring-inset ring-white/40'
              : 'text-white/90 hover:bg-white/10 hover:text-amber-100 hover:shadow-sm'
        }`
      : `group relative z-10 flex h-full min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-sm transition-colors xl:text-xs ${
          active
            ? 'bg-linear-to-r from-[#137c63] to-[#20A44A] text-white shadow-sm'
            : disabled
              ? 'cursor-not-allowed text-white/50'
              : 'text-white/90 hover:bg-white/10 hover:text-amber-100 hover:shadow-sm'
        }`

    const content = (
      <span className={mobile ? 'flex w-full items-center justify-between gap-3' : 'flex w-full min-w-0 flex-col items-center gap-1'}>
        {mobile ? (
          <span>{link.label}</span>
        ) : (
          <>
            <span className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              active
                ? 'border-slate-200 bg-white/20 text-white shadow-sm'
                : 'border-slate-700 bg-white/10 text-white/90 shadow-sm group-hover:border-amber-200/50 group-hover:bg-white/15 group-hover:text-amber-100'
            }`}>
              <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
              {disabled && (
                <span className="absolute left-[50%] -top-1 translate-[-50%] z-10 whitespace-nowrap rounded-t-xl rounded-br-xl border border-slate-200 bg-[#e5e7eb] px-1.5 py-0.5 cursor-default uppercase text-[#333333] shadow-sm text-xs font-semibold tracking-wide leading-5">
                  {comingSoonLabel}
                </span>
              )}
            </span>
            <span className="min-w-0 w-full max-w-full whitespace-normal break-keep text-center leading-tight line-clamp-2">{link.label}</span>
          </>
        )}
        {disabled && (
          <span className={`${mobile ? 'inline-flex' : 'hidden'} items-center gap-1.5 rounded-full border border-slate-200 bg-[#e5e7eb] px-2 py-1 uppercase text-[#333333] text-xs font-semibold tracking-wide leading-5`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#333333]/50" aria-hidden="true" />
            {comingSoonLabel}
          </span>
        )}
      </span>
    )

    if (disabled) {
      return (
        <button
          key={link.href}
          type="button"
          disabled
          aria-disabled="true"
          className={classes}
        >
          {content}
        </button>
      )
    }

    const parentLink = (
      <Link
        key={link.href}
        href={link.href}
        prefetch={link.href !== '/contact'}
        onClick={() => {
          if (mobile) {
            closeMenu()
          } else if (link.children?.length) {
            setDismissedDesktopSubmenu(link.href)
          }
        }}
        aria-current={active ? 'page' : undefined}
        aria-label={`${t.navbar.goTo} ${link.label}`}
        className={classes}
      >
        {content}
      </Link>
    )

    if (!link.children?.length) {
      return parentLink
    }

    if (mobile) {
      const submenuOpen = expandedMobileSubmenu === link.href
      return (
        <div key={link.href}>
          <div className="flex items-center gap-1">
            <Link
              href={link.href}
              prefetch={link.href !== '/contact'}
              onClick={closeMenu}
              aria-current={active ? 'page' : undefined}
              aria-label={`${t.navbar.goTo} ${link.label}`}
              className={`flex min-h-12 min-w-0 flex-1 items-center rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? 'bg-[#18833a] text-white ring-1 ring-inset ring-[#18833a]/50'
                  : 'text-white/90 hover:bg-white/10 hover:text-amber-100'
              } tracking-normal`}
            >
              {link.label}
            </Link>
            <button
              type="button"
              onClick={() => setExpandedMobileSubmenu(submenuOpen ? null : link.href)}
              aria-label={t.navbar.aboutSubmenuLabel}
              aria-expanded={submenuOpen}
              aria-controls="mobile-about-submenu"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${submenuOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          </div>
          <div
            id="mobile-about-submenu"
            hidden={!submenuOpen}
            className="ml-5 rounded-xl border border-slate-700 bg-indigo-950/40 p-2 shadow-sm backdrop-blur-xl"
          >
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const ChildIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeMenu}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex min-h-10 items-center rounded-lg px-3 py-2 text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                    childActive
                      ? 'bg-[#18833a] text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-amber-100'
                  }`}
                >
                  <ChildIcon className="mr-3 h-4 w-4 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      )
    }

    const submenuDismissed = dismissedDesktopSubmenu === link.href

    return (
      <div
        key={link.href}
        className="group/nav relative z-20 h-full min-w-0"
        onMouseLeave={() => {
          if (submenuDismissed) setDismissedDesktopSubmenu(null)
        }}
      >
        {parentLink}
        <div
          className={`invisible absolute left-1/2 top-full z-[70] min-w-52 -translate-x-1/2 pt-2 opacity-0 transition duration-150 ${
            submenuDismissed
              ? ''
              : 'group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100'
          }`}
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-md">
            {link.children.map((child) => {
              const childActive = pathname === child.href
              const ChildIcon = getNavigationIcon(child.href)
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setDismissedDesktopSubmenu(link.href)}
                  aria-current={childActive ? 'page' : undefined}
                  className={`flex items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333333] ${
                    childActive
                      ? 'bg-[#18833a] text-white'
                      : 'text-[#333333] hover:bg-[#18833a] hover:text-white'
                  }`}
                >
                  <ChildIcon className="mr-3 h-4 w-4 shrink-0" strokeWidth={1.7} aria-hidden="true" />
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  function renderLanguageOptions(id: string, open: boolean, inline = false) {
    return (
      <div
        id={id}
        hidden={!open}
        role="group"
        aria-label={t.navbar.languageLabel}
        className={inline
          ? 'mt-2 grid gap-1 rounded-xl border border-slate-700 bg-white/10 p-1.5 text-white'
          : 'absolute right-0 top-[calc(100%+0.65rem)] z-[60] w-48 overflow-hidden rounded-xl border border-slate-200 bg-[#e5e7eb] p-1.5 text-[#333333] shadow-md'}
      >
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => {
              if (isLocale(option.code)) setLocale(option.code)
              setLangOpen(false)
            }}
            aria-pressed={locale === option.code}
            className={`flex min-h-11 w-full items-center justify-between rounded-full px-3 text-sm transition ${
              locale === option.code
                ? inline
                  ? 'bg-white/15 font-semibold text-white'
                  : 'bg-[#333333]/10 text-[#333333]'
                : inline
                  ? 'text-white/85 hover:bg-white/10'
                  : 'text-[#333333] hover:bg-[#333333]/5 tracking-normal'
            }`}
          >
            <span>{option.label}</span>
            {locale === option.code && <Check className={`h-4 w-4 ${inline ? 'text-white' : 'text-[#333333]'}`} aria-hidden="true" />}
          </button>
        ))}
      </div>
    )
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(49,46,129,0.92),rgba(15,23,42,0.98))] text-white shadow-md ring-1 ring-inset ring-white/10 backdrop-blur-2xl "
    >
      <div className="absolute -left-10 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-sky-300/20 blur-3xl " />
      <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-amber-200/20 blur-3xl " />

      <div className="relative border-b border-slate-700 bg-white/5 text-white/90 backdrop-blur-xl ">
        <div className="mx-auto flex min-h-8 w-full flex-col items-start gap-1 px-3 py-1 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-8 text-xs tracking-wide leading-5">
          <span className="flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <Building2 className="h-3.5 w-3.5 shrink-0 text-[#d6b45e]" strokeWidth={1.8} aria-hidden="true" />
            {t.navbar.companyRegistration}
          </span>
          <span className="flex min-w-0 shrink-0 items-center gap-2 whitespace-nowrap">
            <svg className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm" viewBox="0 0 30 20" role="img" aria-label="Indian flag">
              <rect width="30" height="20" fill="#138808" />
              <rect width="30" height="13.34" fill="#fff" />
              <rect width="30" height="6.67" fill="#ff9933" />
              <circle cx="15" cy="10" r="3" fill="none" stroke="#000080" strokeWidth=".7" />
              <circle cx="15" cy="10" r=".55" fill="#000080" />
              <path d="M15 7v6m-3-3h6m-5.12-2.12 4.24 4.24m0-4.24-4.24 4.24" stroke="#000080" strokeWidth=".45" />
            </svg>
            {t.navbar.patrioticLine}
          </span>
          <span className="flex items-center gap-2 whitespace-nowrap uppercase text-white/80 lg:ml-3 text-xs font-semibold tracking-wide leading-5 tabular-nums">
            <Phone className="h-3 w-3 text-amber-500 " strokeWidth={1.8} aria-hidden="true" />
            <DigitalNumber value={t.navbar.companyMobile} />
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[5.25rem] w-full items-center justify-between gap-1 p-2 sm:px-3 max-[319px]:flex-wrap">
        <Logo compact />

        <nav aria-label={t.navbar.primaryNavigationLabel} className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
          <div className="relative grid min-w-0 grid-flow-col auto-cols-fr items-stretch justify-center gap-1">
            <span className="pointer-events-none absolute left-[8%] right-[8%] top-[1.375rem] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
            {navLinks.map((link) => renderNavigationLink(link))}
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 border-l border-slate-700 pl-3 xl:flex 2xl:gap-3 2xl:pl-5">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="desktop-language-options"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-3 text-sm font-semibold tracking-wide leading-5 text-white shadow-sm transition hover:border-slate-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <Globe2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
              {languageOptions.find((option) => option.code === locale)?.shortLabel}
              <ChevronDown className={`h-3.5 w-3.5 text-sky-200 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('desktop-language-options', langOpen)}
          </div>

          <a
            href="/aerosun-energy.pdf"
            download="aerosun-energy.pdf"
            aria-label={t.navbar.downloadVoucher}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-amber-300/70 bg-linear-to-r from-amber-500 to-orange-500 px-3 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden min-w-0 max-w-[7rem] 2xl:block">
              <span className="block whitespace-normal break-keep text-center leading-tight line-clamp-2">{t.navbar.voucher}</span>
            </span>
          </a>

          <Link
            href="/contact"
            prefetch={false}
            title={t.navbar.startProjectTitle}
            aria-label={t.navbar.startProjectAriaLabel}
            data-cta="start-project"
            className="group inline-flex min-h-11 items-center gap-1 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-4 text-sm text-white shadow-sm ring-1 ring-inset ring-white/15 transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-400"
          >
            <span className="min-w-0 max-w-[8rem] whitespace-normal break-keep text-center leading-tight line-clamp-2">{t.navbar.startProject}</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open)
              setLangOpen(false)
            }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
              menuOpen
                ? 'border-slate-200 bg-white/20 text-white ring-2 ring-white/20'
                : 'border-slate-700 bg-white/10 text-white hover:border-amber-200/50 hover:bg-white/20'
            }`}
            aria-label={menuOpen ? t.navbar.closeMenu : t.navbar.toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-primary-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-primary-navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,1),rgba(49,46,129,1),rgba(15,23,42,1))] px-4 pb-6 pt-3 text-white shadow-md backdrop-blur-2xl sm:px-6 xl:hidden"
      >
        <nav aria-label={t.navbar.mobileNavigationLabel} className="mx-auto max-w-3xl space-y-1">
          <p className="mb-3 flex items-center gap-2 px-2 uppercase text-sky-200    text-xs font-semibold tracking-wide leading-5">
            <span className="h-px w-5 bg-white/35" />
            {t.navbar.exploreLabel}
          </p>
          {navLinks.map((link) => renderNavigationLink(link, true))}
          <div className="border-t border-slate-700 px-2 pt-4">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-label={t.navbar.languageLabel}
              aria-expanded={langOpen}
              aria-controls="mobile-language-options"
              className="flex min-h-12 w-full items-center justify-between rounded-full px-3 py-3 text-sm text-white/90 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              <span className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
                {t.navbar.languageLabel}
                <span className="text-xs text-sky-200">
                  {languageOptions.find((option) => option.code === locale)?.label}
                </span>
              </span>
              <ChevronDown className={`h-4 w-4 text-sky-200 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {renderLanguageOptions('mobile-language-options', langOpen, true)}
          </div>
          <div className="grid gap-3 border-t border-slate-700 pt-4 sm:grid-cols-2">
            <Link
              href="/contact"
              prefetch={false}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-300/60 bg-linear-to-r from-[#137c63] to-[#20A44A] px-5 text-center text-sm text-white shadow-sm ring-1 ring-inset ring-white/15 transition hover:-translate-y-0.5 hover:from-[#126b2e] hover:to-[#18833a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <span className="min-w-0 max-w-[9rem] whitespace-normal break-keep leading-tight line-clamp-2">{t.navbar.startProject}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <a
              href="/aerosun-energy.pdf"
              download="aerosun-energy.pdf"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-amber-300/70 bg-white/60 px-5 text-sm text-amber-800 shadow-sm transition hover:border-amber-500/60 hover:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0 max-w-[9rem] whitespace-normal break-keep leading-tight line-clamp-2">{t.navbar.downloadVoucher}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
