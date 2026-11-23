import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { OptimizedImage } from '@/app/components/ui'
import { SolarEstimation } from '@/app/components/forms/SolarEstimation'
import ContactForm from '@/app/components/forms/ContactForm'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import { getRequestTranslations } from '@/lib/serverLocale'

const channelIconComponents: Record<string, ReactNode> = {
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
export default async function Contact() {
  const t = await getRequestTranslations()
  const channelIconIds = t.componentData.contact.channelIconIds
  const c = t.contact
  const footer = t.footer
  const navbar = t.navbar
  const referralProgram = t.home.referralProgram

  const contactUs = c.contactUs
  const contactCardTitle = c.contactCardTitle
  const faqHeader = c.faqHeader
  const faqTitle = c.faqTitle
  const connectionPrompt = c.connectionPrompt
  const projectStory = c.projectStory
  const stepIntroLabel = c.stepIntroLabel
  const stepIntroTitle = c.stepIntroTitle
  const stepIntroCopy = c.stepIntroCopy
  const submitEnquiry = c.submitEnquiry
  const faqIntro = c.faqIntro
  const location = c.location
  const energyBadge = c.energyBadge
  const energyBadgeAccent = c.energyBadgeAccent
  const energyBadgeSuffix = c.energyBadgeSuffix

  const contactHighlights = c.highlights

  const contactSteps = c.steps.map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))

  const channels = [
    {
      label: c.channels[1].label,
      value: c.channels[1].value,
      href: footer.website.startsWith('http') ? footer.website : `https://${footer.website}`,
      icon: channelIconComponents[channelIconIds[1]],
    },
    {
      label: c.channels[3].label,
      value: c.channels[3].value,
      href: '/finance',
      icon: channelIconComponents[channelIconIds[2]],
    },
  ]

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]overflow-hidden text-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#137c63]">AeroSun Energy <span className="mx-2 text-amber-600">/</span> {contactUs}</p>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 sm:block">{location}</span>
          </div>
          <div className="grid min-h-[34rem] overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#dbeafe_0%,#e0f2fe_55%,#ecfdf5_100%)] lg:grid-cols-[1fr_0.92fr]">
            <div
              className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-11 lg:p-14"
            >
              <div className="pointer-events-none absolute -bottom-36 -left-36 h-[28rem] w-[28rem] rounded-full border border-slate-200" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full border border-slate-200" aria-hidden="true" />
              <div className="relative">
                <p className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-slate-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#137c63]" />
                  {navbar.startProject}
                </p>
                <h1 className="mt-8 max-w-2xl text-4xl font-black leading-[1.02] tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl">
                  {c.heroTitle}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  {c.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/solar-calculator"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/40 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:bg-white/75"
                  >
                    {c.estimationButton}
                  </Link>
                </div>
              </div>
              <div className="relative mt-12 flex items-end justify-between gap-4 border-t border-slate-200 pt-4">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-600">{c.badge}</span>
                <span className="text-right text-sm font-black text-slate-900">{c.projectBrief}</span>
              </div>
            </div>
            <div
              className="relative min-h-80 overflow-hidden bg-[#102a43] lg:min-h-full"
            >
              <OptimizedImage
                src="/images/slider/slider-7.webp"
                alt={c.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a43]/75 via-transparent to-[#102a43]/10" />
              <div className="absolute right-8 top-8 flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-amber-300 text-center text-[12px] font-black uppercase leading-4 tracking-[0.16em] text-slate-900 shadow-sm sm:right-12 sm:top-12 sm:h-36 sm:w-36">
                {energyBadge} <span className="mx-1 text-[#137c63]">+</span> {energyBadgeAccent}<br />{energyBadgeSuffix}
              </div>
              <div className="absolute bottom-7 left-7 max-w-xs border-l-2 border-amber-300 pl-4 text-sm font-semibold leading-7 text-white sm:bottom-10 sm:left-10">
                {projectStory}
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(120deg,#102a43_0%,#1d4e89_55%,#2c698d_100%)] text-white">
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
              <div className="flex flex-col justify-center border-b border-slate-700 p-6 sm:p-9 lg:border-b-0 lg:border-r">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">{contactUs}</p>
                  <h2 className="mt-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl">{contactCardTitle}</h2>
                  <p className="mt-4 text-sm leading-7 text-sky-100/85">{connectionPrompt}</p>
              </div>
              <div className="grid grid-cols-2">
                {channels.map((channel, index) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="group flex min-h-36 items-start gap-4 border-b border-slate-700 p-6 transition-colors hover:bg-white/[0.06] sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 text-slate-900 transition-transform group-hover:rotate-[-8deg]">
                      {channel.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-sm font-bold text-amber-200">0{index + 1}</span>
                      <span className="mt-3 block text-sm font-bold uppercase tracking-[0.14em] text-white/75">{channel.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white group-hover:text-amber-200">{channel.value}</span>
                    </span>
                    <span className="ml-auto text-lg text-amber-200 transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    <span className="sr-only">{t.ui.openLink} {channel.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {contactHighlights.map((item, index) => (
                <article key={item.label} className="flex gap-4 border-t-2 border-[#137c63]/25 bg-white p-5">
                  <span className="font-mono text-sm font-bold text-[#137c63]">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-600">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-800">{item.value}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <SolarEstimation />
        <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16" aria-labelledby="contact-form-title">
          <div className="overflow-hidden mx-auto max-w-7xl rounded-xl border border-slate-200">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[linear-gradient(145deg,#bfdbfe_0%,#ddd6fe_52%,#fbcfe8_100%)] p-6 text-slate-900 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-900">{contactUs}</p>
                <h2 id="contact-form-title" className="mt-3 text-3xl font-black leading-tight tracking-tighter">{c.form.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{c.form.description}</p>
              </div>
              <ContactForm content={c.form} />
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-[linear-gradient(135deg,#dbeafe_0%,#e0f2fe_55%,#ecfdf5_100%)] text-white px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 ">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#137c63]">{stepIntroLabel}</p>
                <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tighter text-slate-950 sm:text-5xl">{stepIntroTitle}</h2>
              </div>
              <div className="flex flex-col justify-between gap-5 border-t border-slate-200 pt-5 sm:flex-row sm:items-end">
                <p className="max-w-md text-sm leading-7 text-slate-600">{stepIntroCopy}</p>
                <Link href="/auth/dashboard/customer-enquiry" className="inline-flex w-fit items-center gap-3 text-sm font-bold text-[#087a61] transition hover:gap-4">
                  {submitEnquiry} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 lg:grid-cols-3">
              {contactSteps.map((step) => (
                <article key={step.title} className="bg-white p-6 sm:p-8">
                  <span className="font-mono text-sm font-bold text-[#137c63]">{step.number} <span className="text-slate-500">/ 03</span></span>
                  <h3 className="mt-8 text-2xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustRibbon />

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16" aria-labelledby="contact-referral-title">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#137c63]">{referralProgram.eyebrow}</p>
            <h2 id="contact-referral-title" className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {referralProgram.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{referralProgram.description}</p>
          </div>
          <Link
            href="/referral-programme"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#087a61] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]"
          >
            {referralProgram.form.title}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        aria-labelledby="contact-faq-title"
      >
        <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-300/25 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <details className="group py-2 sm:py-5" open>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <span>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-900">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-500" aria-hidden="true" />
                  {faqHeader}
                </span>
                <h2 id="contact-faq-title" className="mt-5 text-4xl font-black leading-tight tracking-tighter text-slate-950 sm:text-5xl">
                  {faqTitle}
                </h2>
                <span className="mt-5 block max-w-md text-sm leading-7 text-slate-700 sm:text-base">
                  {faqIntro}
                </span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-2 pt-2 text-sm text-amber-800 underline decoration-amber-300 sm:text-base">
                {t.ui.readMore}
                <ArrowUpRight className="h-5 w-5 transition-transform group-open:rotate-90" aria-hidden="true" />
              </span>
            </summary>
            <div className="space-y-3 py-3 sm:py-5">
              {t.solarFaqs.items.map((faq) => (
                <details
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white/24 p-0"
                >
                  <summary className="cursor-pointer px-5 py-4 text-sm font-black tracking-[0.03em] text-[#1f2a44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-700 sm:px-6 sm:text-lg">
                    {faq.question}
                  </summary>
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-8 text-slate-700">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </details>
        </div>
      </section>
    </main>
  )
}
