'use client'

import type { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from '@/app/lib/motion'
import { Card, CardContent } from '@/app/components/Card'
import { useLocale } from '@/app/lib/LocaleContext'

const channelIcons = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m4 7 8 6 8-6" />
    </svg>
  ),
  website: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  quote: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h10M4 17h16" />
    </svg>
  ),
}

export default function Contact() {
  const { t } = useLocale()
  const c = t.contact
  const footer = t.footer
  const navbar = t.navbar

  const contactHighlights = c.highlights.map((item, index) => ({
    ...item,
    tone: [
      'from-primary/20 via-custom-orange/15 to-custom-red/20',
      'from-custom-blue/20 via-primary/15 to-custom-violet/20',
      'from-emerald-500/20 via-primary/15 to-slate-500/20',
    ][index] ?? 'from-primary/20 via-custom-orange/15 to-custom-red/20',
  }))

  const contactSteps = c.steps.map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))

  const channels = [
    {
      label: c.channels[0]?.label ?? 'Email',
      value: c.channels[0]?.value ?? footer.email,
      href: `mailto:${footer.email}`,
      icon: channelIcons.email,
    },
    {
      label: c.channels[1]?.label ?? 'Website',
      value: c.channels[1]?.value ?? footer.website,
      href: footer.website.startsWith('http') ? footer.website : `https://${footer.website}`,
      icon: channelIcons.website,
    },
    {
      label: c.channels[2]?.label ?? 'Estimation',
      value: c.channels[2]?.value ?? 'Open the calculator',
      href: '/estimation',
      icon: channelIcons.quote,
    },
  ]

  const contactEmail = footer.email
  const websiteUrl = footer.website.startsWith('http') ? footer.website : `https://${footer.website}`

  const handleProjectBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const projectType = String(form.get('projectType') ?? '').trim()
    const usage = String(form.get('usage') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    const subject = `AeroSun Energy project brief${name ? ` from ${name}` : ''}`
    const body = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Project type: ${projectType || 'Not provided'}`,
      `Estimated usage: ${usage || 'Not provided'}`,
      '',
      'Message:',
      message || 'Not provided',
    ].join('\n')

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[#f6f7f2] dark:bg-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(50,84,146,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(250,89,82,0.12),transparent_22%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(50,84,146,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(250,89,82,0.12),transparent_22%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-size-[44px_44px] opacity-30 dark:opacity-10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="overflow-hidden rounded-3xl border border-white/70 bg-slate-950 text-white shadow-[0_24px_90px_rgba(15,23,42,0.14)] dark:border-white/10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,136,229,0.34),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(67,160,71,0.22),transparent_25%),linear-gradient(135deg,rgba(7,17,29,0.3),rgba(7,17,29,0.16))]" aria-hidden="true" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
                <div>
                  <span className="inline-flex rounded-md border border-white/16 bg-white/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.34em] text-white/70 backdrop-blur-md sm:text-sm">
                    {navbar.startProject}
                  </span>

                  <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="bg-linear-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                      {c.heroTitle}
                    </span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                    {c.heroDescription}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`mailto:${contactEmail}`}
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:scale-[1.02] hover:bg-primary hover:text-white"
                    >
                      {c.emailButton}
                    </Link>
                    <Link
                      href="/estimation"
                      className="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/15"
                    >
                      {c.estimationButton}
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {contactHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-3xl border border-white/14 bg-white/8 p-4 backdrop-blur-md"
                      >
                        <div className={`h-1.5 rounded-full bg-linear-to-r ${item.tone}`} aria-hidden="true" />
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-white/88">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-6 rounded-4xl bg-accent/20 blur-3xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/16 bg-white/8 p-3 shadow-2xl backdrop-blur-sm">
                    <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between rounded-md border border-white/16 bg-slate-950/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/78 backdrop-blur-md">
                      <span>{c.badge}</span>
                      <span>{c.projectBrief}</span>
                    </div>
                    <div className="relative min-h-90 overflow-hidden rounded-3xl sm:min-h-105">
                      <Image
                        src="/images/customdesign-aerosunenergy.png"
                        alt="AeroSun Energy custom renewable energy design"
                        fill
                        sizes="(min-width: 1024px) 38vw, 92vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,24,0.06),rgba(4,12,24,0.26)_58%,rgba(4,12,24,0.66)_100%)]" aria-hidden="true" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/16 bg-slate-950/55 p-4 text-white backdrop-blur-md">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{c.channels[0]?.label ?? 'Email'}</p>
                        <p className="mt-2 break-all text-sm text-white/92">{contactEmail}</p>
                      </div>
                      <div className="rounded-2xl border border-white/16 bg-white/10 p-4 text-white backdrop-blur-md">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">{c.channels[1]?.label ?? 'Website'}</p>
                        <p className="mt-2 text-sm text-white/92">{footer.website}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
          >
            <Card className="overflow-hidden border-white/70 bg-white/84 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76">
              <CardContent className="space-y-4 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                  {c.quickAccess}
                </p>
                <h2 className="text-2xl font-semibold text-custom-deep-blue dark:text-white">
                  {c.quickAccessTitle}
                </h2>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {c.quickAccessCopy}
                </p>

                <div className="space-y-3 pt-2">
                  {channels.map((channel) => (
                    <Link
                      key={channel.label}
                      href={channel.href}
                      className="group flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50 to-slate-100 px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-custom-deep-blue transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/15 dark:text-primary-100">
                        {channel.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                          {channel.label}
                        </p>
                        <p className="mt-1 truncate text-sm font-semibold text-custom-deep-blue dark:text-white">
                          {channel.value}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/70 bg-white/84 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76">
              <CardContent className="space-y-5 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                  {c.whatHappensNext}
                </p>
                <div className="space-y-3">
                  {contactSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-custom-red text-sm font-semibold text-white">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-custom-deep-blue dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Card className="overflow-hidden border-white/70 bg-white/84 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/76">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-slate-500 dark:text-slate-400">
                {c.projectBrief}
              </p>
              <h2 className="text-3xl font-semibold text-custom-deep-blue dark:text-white">
                {c.projectBriefTitle}
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                {c.projectBriefCopy}
              </p>

              <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleProjectBrief}>
                <Field label={c.form.fullName} name="name" placeholder={c.form.fullNamePlaceholder} />
                <Field label={c.form.email} name="email" type="email" placeholder={c.form.emailPlaceholder} />
                <Field label={c.form.phone} name="phone" placeholder={c.form.phonePlaceholder} />
                <Field label={c.form.projectType} name="projectType" placeholder={c.form.projectTypePlaceholder} />
                <Field label={c.form.usage} name="usage" placeholder={c.form.usagePlaceholder} />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-custom-deep-blue dark:text-white">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-primary dark:bg-white dark:text-slate-950"
                  >
                    {c.openEmailDraft}
                  </button>
                  <Link
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                  >
                    {c.emailDirect}
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-white/70 bg-linear-to-br from-custom-deep-blue via-slate-900 to-custom-blue shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10">
            <CardContent className="space-y-6 p-6 sm:p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">
                {c.builtForClarity}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                {c.builtForClarityTitle}
              </h2>
              <p className="text-sm leading-7 text-white/76">
                {c.builtForClarityCopy}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/16 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    {c.brandPalette}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/88">
                    {c.brandPaletteCopy}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/16 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    {c.mobileFirst}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/88">
                    {c.mobileFirstCopy}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/16 bg-white/8 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                  {c.helpfulRoutes}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/about" className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                    {c.aboutAeroSun}
                  </Link>
                  <Link href="/services" className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                    {c.services}
                  </Link>
                  <Link href="/estimation" className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                    {c.estimation}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  placeholder: string
  type?: string
}

function Field({ label, name, placeholder, type = 'text' }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-custom-deep-blue dark:text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-3xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
      />
    </div>
  )
}