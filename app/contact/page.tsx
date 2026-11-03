'use client'

import Link from 'next/link'
import { motion } from '@/lib/motion'
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

  const contactHighlights = c.highlights

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
    // {
    //   label: c.channels[2]?.label ?? 'trust',
    //   value: c.channels[2]?.value ?? 'sanatanadharmam.in',
    //   href: 'https://sanatanadharmam.in',
    //   icon: channelIcons.quote,
    // },
    {
      label: c.channels[3]?.label ?? 'Estimation',
      value: c.channels[3]?.value ?? 'Open the calculator',
      href: '/estimation-calculator',
      icon: channelIcons.quote,
    },
  ]

  const contactEmail = footer.email

  return (
    <main className="overflow-hidden bg-[#f3f0e5] text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="px-5 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center justify-between border-b border-slate-300 pb-4 dark:border-slate-800">
            <p className="text-md font-black uppercase tracking-[0.22em] text-emerald-900 dark:text-emerald-300">AeroSun Energy <span className="mx-2 text-lime-600">/</span> {contactUs}</p>
            <span className="hidden text-md font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">Tirupati, India</span>
          </div>

          <div className="grid min-h-[34rem] overflow-hidden rounded-[2rem] bg-[#dfff72] lg:grid-cols-[1fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-11 lg:p-14"
            >
              <div className="pointer-events-none absolute -bottom-36 -left-36 h-[28rem] w-[28rem] rounded-full border border-emerald-950/10" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-emerald-950/10" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-3 text-md font-black uppercase tracking-[0.2em] text-emerald-950">
                  <span className="h-2 w-2 rounded-full bg-emerald-800" />
                  {navbar.startProject}
                </p>
                <h1 className="mt-10 max-w-2xl text-5xl font-black leading-[0.9] tracking-[0.075em] sm:text-6xl lg:text-7xl">
                  {c.heroTitle}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-emerald-950/80 sm:text-lg">
                  {c.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${contactEmail}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#10251f] px-6 py-3.5 text-md font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-900"
                  >
                    {c.emailButton}
                  </Link>
                  <Link
                    href="/estimation-calculator"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-950/25 px-6 py-3.5 text-md font-bold text-emerald-950 transition hover:bg-white/50"
                  >
                    {c.estimationButton}
                  </Link>
                </div>
              </div>
              <div className="relative mt-12 flex items-end justify-between gap-4 border-t border-emerald-950/20 pt-4">
                <span className="text-md font-bold uppercase tracking-[0.18em] text-emerald-950/70">{c.badge}</span>
                <span className="text-right text-md font-black text-emerald-950">{c.projectBrief}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
              className="relative min-h-80 overflow-hidden bg-[#172a21] lg:min-h-full"
            >
              <OptimizedImage
                src="/images/home-business-aerosunenergy.png"
                alt="AeroSun energy consultation"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251f]/75 via-transparent to-[#10251f]/10" />
              <div className="absolute right-8 top-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-lime-300 text-center text-[12px] font-black uppercase leading-4 tracking-[0.16em] text-emerald-950 shadow-xl sm:right-12 sm:top-12 sm:h-36 sm:w-36">
                Sun <span className="mx-1 text-emerald-700">+</span> wind<br />better together
              </div>
              <div className="absolute bottom-7 left-7 max-w-xs border-l-2 border-lime-300 pl-4 text-md font-semibold leading-6 text-white sm:bottom-10 sm:left-10">
                Practical renewable energy, shaped around your project.
              </div>
            </motion.div>
          </div>

          <section className="mt-5 overflow-hidden rounded-[2rem] bg-[#10251f] text-white">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r">
                <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">{contactUs}</p>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{contactCardTitle}</h2>
                <p className="mt-4 text-base leading-7 text-emerald-50/75">Choose the best way to connect or begin planning your energy project.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {channels.map((channel, index) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex min-h-36 items-start gap-4 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.06] sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-300 text-emerald-950 transition-transform group-hover:rotate-[-8deg]">
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-md font-bold text-lime-300">0{index + 1}</span>
                      <span className="mt-3 block text-md font-bold uppercase tracking-[0.14em] text-white/60">{channel.label}</span>
                      <span className="mt-1 block break-words text-base font-semibold leading-6 text-white group-hover:text-lime-200">{channel.value}</span>
                    </span>
                    <span className="ml-auto text-lg text-lime-300 transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    <span className="sr-only">Open {channel.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {contactHighlights.map((item, index) => (
              <article key={item.label} className="flex gap-4 border-t-2 border-emerald-800/20 bg-white/55 p-5 dark:border-emerald-300/20 dark:bg-slate-900/60">
                <span className="font-mono text-md font-bold text-emerald-800 dark:text-lime-300">0{index + 1}</span>
                <div>
                  <p className="text-md font-bold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">{item.label}</p>
                  <p className="mt-2 text-base leading-7 text-slate-800 dark:text-slate-200">{item.value}</p>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20 sm:mt-28">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-md font-black uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">From first question to next step</p>
                <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-[0.05em] text-slate-950 sm:text-5xl dark:text-white">A simple way to get started</h2>
              </div>
              <div className="flex flex-col justify-between gap-5 border-t border-slate-300 pt-5 sm:flex-row sm:items-end dark:border-slate-800">
                <p className="max-w-md text-base leading-7 text-slate-600 dark:text-slate-300">Tell us what you need, and we&apos;ll help you explore the right renewable-energy direction.</p>
                <Link href="/customer-enquiry" className="inline-flex w-fit items-center gap-3 text-md font-bold text-emerald-900 transition hover:gap-4 dark:text-lime-300">
                  Submit an enquiry <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-slate-300 dark:bg-slate-800 lg:grid-cols-3">
              {contactSteps.map((step) => (
                <article key={step.title} className="bg-[#f3f0e5] p-6 sm:p-8 dark:bg-slate-950">
                  <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">{step.number} <span className="text-slate-600 dark:text-slate-400">/ 03</span></span>
                  <h3 className="mt-8 text-2xl font-black text-slate-950 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid overflow-hidden rounded-[2rem] shadow-2xl border border-emerald-950/20 bg-[#dfff72] sm:mt-28 lg:grid-cols-[0.7fr_1.3fr] dark:border-emerald-300/20 dark:bg-emerald-950">
            <div className="flex flex-col justify-start p-6 sm:p-10">
              <p className="text-md font-black uppercase tracking-[0.2em] text-emerald-900 dark:text-lime-300">{faqHeader}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[0.05em] text-emerald-950 dark:text-white sm:text-5xl">{faqTitle}</h2>
              <p className="mt-5 text-base leading-7 text-emerald-950/75 dark:text-emerald-50/75">Explore answers to common questions about solar energy and project planning.</p>
            </div>
            <div className="space-y-3 bg-[#f3f0e5] p-4 sm:p-6 lg:p-8 dark:bg-slate-900">
              {solarFaqs.map((faq) => (
                <FaqCard key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}