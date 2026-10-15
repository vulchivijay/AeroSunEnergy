'use client'

import type { FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from '@/lib/motion'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import { OptimizedImage } from '@/app/components/ui'

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
    <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.18),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(245,158,11,0.12),transparent_18%),linear-gradient(180deg,#f8faf7_0%,#eefaf3_38%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.16),transparent_20%),radial-gradient(circle_at_80%_12%,rgba(245,158,11,0.14),transparent_18%),linear-gradient(180deg,#020817_0%,#0f172a_45%,#020817_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="grid gap-6 xl:grid-cols-[1.14fr_0.86fr] xl:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative isolate overflow-hidden rounded-[32px] border border-[#dfeee4] bg-white shadow-[0_36px_90px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.22),transparent_22%),radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.18),transparent_18%),linear-gradient(135deg,#f5faf6_0%,#effaf2_28%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.20),transparent_20%),radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.20),transparent_18%),linear-gradient(135deg,#081421_0%,#101d2d_32%,#020817_100%)]" aria-hidden="true" />

            <div className="relative grid gap-7 p-5 sm:p-7 xl:min-h-[560px]">
              <div className="flex rounded-[28px] border border-[#dfeee4]/80 bg-white/65 p-2 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/40">
                <div className="flex h-full flex-col justify-center rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(244,248,245,0.88))] p-5 sm:p-6 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,0.78))]">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#20A44A]/20 bg-white/85 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.30em] text-[#183729] shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-[#20A44A] shadow-[0_0_18px_rgba(32,164,74,0.9)]" />
                    {navbar.startProject}
                  </div>

                  <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[4rem] lg:leading-[1.02] dark:text-white">
                    {c.heroTitle}
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg dark:text-slate-200">
                    {c.heroDescription}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`mailto:${contactEmail}`}
                      className="inline-flex items-center justify-center rounded-full bg-[#20A44A] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_-18px_rgba(32,164,74,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1d9a45]"
                    >
                      {c.emailButton}
                    </Link>
                    <Link
                      href="/estimation"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md transition-colors duration-200 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                    >
                      {c.estimationButton}
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {contactHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-200/80 bg-white/75 p-3.5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70"
                      >
                        <div className={`h-1.5 rounded-full bg-linear-to-r ${item.tone}`} aria-hidden="true" />
                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-100">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex">
                <div className="absolute -left-5 top-12 h-28 w-28 rounded-full bg-[#20A44A]/18 blur-3xl" aria-hidden="true" />
                <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#F59E0B]/18 blur-3xl" aria-hidden="true" />

                <div className="relative w-full overflow-hidden rounded-[28px] border border-white/50 bg-white/60 p-3 shadow-[0_26px_80px_rgba(2,6,23,0.18)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/65">
                  <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-950 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-100 dark:border-slate-700">
                    <span>{c.badge}</span>
                    <span className="text-[#F59E0B]">{c.projectBrief}</span>
                  </div>

                  <div className="relative mt-3 h-[300px] overflow-hidden rounded-[22px] sm:h-[350px]">
                    <OptimizedImage
                      src="/images/customdesign-aerosunenergy.png"
                      alt="AeroSun Energy custom renewable energy design"
                      fill
                      sizes="(min-width: 1024px) 34vw, 90vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.50)_72%,rgba(2,6,23,0.82))]" aria-hidden="true" />
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-950/85 p-3 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">{c.channels[0]?.label ?? 'Email'}</p>
                      <p className="mt-2 break-all text-sm font-medium text-slate-100">{contactEmail}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/80 bg-slate-950/85 p-3 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">{c.channels[1]?.label ?? 'Website'}</p>
                      <p className="mt-2 text-sm font-medium text-slate-100">{footer.website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
            className="space-y-5"
          >
            <Card className="overflow-hidden border border-[#e4efe7] bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
              <CardContent className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{c.quickAccess}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{c.quickAccessTitle}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{c.quickAccessCopy}</p>

                <div className="mt-5 space-y-3">
                  {channels.map((channel) => (
                    <Link
                      key={channel.label}
                      href={channel.href}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-slate-100 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20A44A]/10 text-[#0f172a] transition-colors group-hover:bg-[#20A44A] group-hover:text-white dark:bg-[#20A44A]/15 dark:text-[#86efac] dark:group-hover:bg-[#20A44A] dark:group-hover:text-white">
                        {channel.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">{channel.label}</p>
                        <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{channel.value}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-[#e4efe7] bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
              <CardContent className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{c.whatHappensNext}</p>
                <div className="mt-4 space-y-3">
                  {contactSteps.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-700 dark:bg-slate-900/70"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#20A44A] to-[#F59E0B] text-xs font-bold text-white">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="overflow-hidden border border-[#e4efe7] bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">{c.projectBrief}</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{c.projectBriefTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{c.projectBriefCopy}</p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleProjectBrief}>
                <Field label={c.form.fullName} name="name" placeholder={c.form.fullNamePlaceholder} />
                <Field label={c.form.email} name="email" type="email" placeholder={c.form.emailPlaceholder} />
                <Field label={c.form.phone} name="phone" placeholder={c.form.phonePlaceholder} />
                <Field label={c.form.projectType} name="projectType" placeholder={c.form.projectTypePlaceholder} />
                <Field label={c.form.usage} name="usage" placeholder={c.form.usagePlaceholder} />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-100">{c.form.message}</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#20A44A] dark:bg-white dark:text-slate-950 dark:hover:bg-[#20A44A] dark:hover:text-white"
                  >
                    {c.openEmailDraft}
                  </button>
                  <Link
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    {c.emailDirect}
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-[#dbe9df] bg-gradient-to-br from-[#0b1728] via-[#0f1d2f] to-[#1f3f28] text-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] dark:border-slate-700">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">{c.builtForClarity}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{c.builtForClarityTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">{c.builtForClarityCopy}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">{c.brandPalette}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{c.brandPaletteCopy}</p>
                </div>
                <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">{c.mobileFirst}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{c.mobileFirstCopy}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">{c.helpfulRoutes}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/about" className="rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12">{c.aboutAeroSun}</Link>
                  <Link href="/services" className="rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12">{c.services}</Link>
                  <Link href="/estimation" className="rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/12">{c.estimation}</Link>
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