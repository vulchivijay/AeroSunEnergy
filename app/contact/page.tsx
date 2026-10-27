'use client'

import Link from 'next/link'
import { motion } from '@/lib/motion'
import { Card, CardContent } from '@/app/components/ui/Card'
import FaqCard, { solarFaqs } from '@/app/components/ui/FaqCard'
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
  const c = t.contact as typeof t.contact & {
    contactUs?: string
    contactCardTitle?: string
    faqHeader?: string
    faqTitle?: string
  }
  const footer = t.footer
  const navbar = t.navbar

  const contactUs = c.contactUs ?? 'Contact us'
  const contactCardTitle = c.contactCardTitle ?? 'Speak with our team'
  const faqHeader = c.faqHeader ?? 'FAQ'
  const faqTitle = c.faqTitle ?? 'Common questions'

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
      label: c.channels[2]?.label ?? 'trust',
      value: c.channels[2]?.value ?? 'sanatanadharmam.in',
      href: 'https://sanatanadharmam.in',
      icon: channelIcons.quote,
    },
    {
      label: c.channels[3]?.label ?? 'Estimation',
      value: c.channels[3]?.value ?? 'Open the calculator',
      href: '/estimation-calculator',
      icon: channelIcons.quote,
    },
  ]

  const contactEmail = footer.email

  return (
    <section className="relative isolate overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-7xl space-y-8">
        <div className="grid gap-6 xl:grid-cols-[1.14fr_0.86fr] xl:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative isolate overflow-hidden rounded-4xl border border-[#dfeee4] bg-white shadow-[0_36px_90px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.22),transparent_22%),radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.18),transparent_18%),linear-gradient(135deg,#f5faf6_0%,#effaf2_28%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(32,164,74,0.20),transparent_20%),radial-gradient(circle_at_100%_0%,rgba(245,158,11,0.20),transparent_18%),linear-gradient(135deg,#081421_0%,#101d2d_32%,#020817_100%)]" aria-hidden="true" />

            <div className="relative grid gap-7 p-5 sm:p-6 xl:min-h-140">
              <div className="flex rounded-[28px] border border-[#dfeee4]/80 bg-white/65 p-2 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/40">
                <div className="flex h-full flex-col justify-center rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(244,248,245,0.88))] p-5 sm:p-6 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,0.78))]">
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
                      href="/estimation-calculator"
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            className="rounded-[32px] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 sm:p-7"
          >
            <div className="relative flex">
              <div className="absolute -left-5 top-12 h-28 w-28 rounded-full bg-[#20A44A]/18 blur-3xl" aria-hidden="true" />
              <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#F59E0B]/18 blur-3xl" aria-hidden="true" />

              <div className="relative w-full overflow-hidden rounded-[28px] border border-white/50 bg-white/60 p-3 shadow-[0_26px_80px_rgba(2,6,23,0.18)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/65">
                <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-950 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-100 dark:border-slate-700">
                  <span>{c.badge}</span>
                  <span className="text-[#F59E0B]">{c.projectBrief}</span>
                </div>

                <div className="relative mt-3 h-52 overflow-hidden rounded-[22px] sm:h-62.5">
                  <OptimizedImage
                    src="/images/home-business-aerosunenergy.png"
                    alt="AeroSun energy consultation"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between gap-3 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#20A44A]">{contactUs}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{contactCardTitle}</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20A44A]/10 text-[#20A44A]">
                {channelIcons.email}
              </div>
            </div>

            <div className="space-y-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-colors hover:border-[#20A44A]/30 hover:bg-[#f3faf5] dark:border-slate-700 dark:bg-slate-950/60 dark:hover:border-[#20A44A]/40 dark:hover:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                      {channel.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{channel.label}</p>
                      <p className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">{channel.value}</p>
                    </div>
                  </div>
                  <span className="text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {contactSteps.map((step) => (
            <Card key={step.title} className="relative overflow-hidden border border-slate-200 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900/80">
              <CardContent className="p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#20A44A]/10 text-sm font-semibold text-[#20A44A]">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900/80 sm:p-7">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#20A44A]">{faqHeader}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{faqTitle}</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-1">
            {solarFaqs.map((faq) => (
              <FaqCard key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}