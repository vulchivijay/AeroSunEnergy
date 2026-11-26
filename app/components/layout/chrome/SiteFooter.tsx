'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment, useEffect, useState, type FormEvent } from 'react'
import Logo from '@/app/components/brand/Logo'
import { useLocale } from '@/lib/LocaleContext'
import { ArrowRight, Sun, Wind, Zap } from 'lucide-react'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useToast } from '@/app/components/ui/ToastContext'
import { FooterContactInformation } from './FooterContactInformation'
import { FooterNewsletterSignup } from './FooterNewsletterSignup'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { CompanyAge } from './CompanyAge'

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
    className="relative w-full overflow-hidden border-t border-slate-700 bg-[linear-gradient(135deg,rgba(23,37,84,0.96),rgba(23,37,84,0.96),rgba(23,37,84,0.96))] text-white/90 shadow-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-amber-400 before:via-white/40 before:to-sky-300"
  >
    <div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-amber-700/10" aria-hidden="true" />

    <div className="pointer-events-none absolute -right-24 top-16 h-[24rem] w-[24rem] rounded-full border border-slate-700" aria-hidden="true" />

    <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10">

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

      <div className="mb-10 h-px w-full origin-left animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent motion-reduce:animate-none" aria-hidden="true" />

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1fr] lg:gap-x-8">
        <section aria-labelledby="footer-brand">
          <div className="inline-flex max-w-full p-2">
            <Logo />
          </div>
          <h2 id="footer-brand" className="mt-6 hidden text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{t.navbar.brandName}</h2>
          <p className="mt-1 text-[#F5C76A] hidden text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">&ldquo;{t.navbar.brandTagline}&rdquo;</p>
          <p className="mt-4 max-w-sm text-white/75 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{footer.brandDesc}</p>
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

        <FooterContactInformation footer={footer} mapUrl={mapUrl} companyAddress={companyAddress} websiteUrl={websiteUrl} />
      </div>

      <FooterNewsletterSignup
        footer={footer}
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        newsletterPending={newsletterPending}
        savingLabel={t.formSubmission.saving}
        onSubmit={handleNewsletterSubmit}
      />

    </div>

    <div className="border-t border-slate-700 bg-white/5 backdrop-blur">
      <div className="flex w-full flex-col items-center justify-between gap-1 border-t border-slate-700 px-5 py-5 text-center sm:px-8 lg:flex-row lg:px-10">
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
