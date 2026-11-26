import { ArrowUpRight, Gift } from 'lucide-react'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'
import ReferralForm from '@/app/components/referral/ReferralForm'
import { getRequestTranslations } from '@/lib/serverLocale'
import type { Translations } from '@/lib/LocaleContext'

export default async function ReferralProgrammePage() {
  const t = await getRequestTranslations()

  return (
    <main>
      <ReferralProgramSection content={t.home.referralProgram} />
    </main>
  )
}

function ReferralProgramSection({
  content,
}: {
  content: Translations['home']['referralProgram']
}) {
  const landing = content.landing
  const formContent = content.form

  return (
    <>
      <section
        aria-labelledby="referral-landing-title"
        className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 text-slate-900 sm:px-6 lg:px-10 lg:py-16 sm:py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-indigo-700 text-xs font-semibold tracking-wide leading-5">
              <span className="shrink-0 h-2 w-2 rounded-full bg-current" aria-hidden="true" />
              {landing.badge}
            </p>
            <h1 id="referral-landing-title" className="mt-4 text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {landing.titlePrefix}
              <span className="block text-[#087a61]">{landing.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {landing.description}
            </p>
          </>

          <aside className="rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm sm:p-6">
            <p className="rounded-xl border-l-2 border-amber-500 bg-[#fff3df] px-4 py-3 text-amber-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {landing.earningsNote}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
              {landing.benefits.map((benefit, index) => (
                <li key={benefit} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-3 text-sm font-semibold text-slate-700 tracking-normal">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${index === 0 ? 'bg-emerald-100 text-emerald-800' : index === 1 ? 'bg-sky-100 text-sky-800' : 'bg-amber-100 text-amber-800'} tracking-normal`} aria-hidden="true">
                    ✓
                  </span>
                  {benefit}
                </li>
            ))}
            </ul>
            <a
              href="#referral-program"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#A3D977] px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-[#c7efa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 tracking-normal"
            >
              {formContent.submit}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <TrustRibbon />

      <section
        id="referral-program"
        className="relative isolate overflow-hidden bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18"
        aria-labelledby="referral-program-title"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
          <div className="min-w-0">
            <p className="uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
              {content.eyebrow}
            </p>
            <h2 id="referral-program-title" className="mt-5 max-w-2xl text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {content.title}
            </h2>
            <p className="mt-5 max-w-2xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.description}
            </p>

            <ol className="mt-8 space-y-3 sm:mt-10">
              {content.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-xl bg-white/70 p-4 sm:p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-bold text-amber-800 tracking-normal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-slate-950 tracking-normal">{step.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{step.description}</span>
                  </span>
                </li>
            ))}
            </ol>

            <div className="mt-4 flex gap-3 rounded-xl bg-white/70 p-4">
              <Gift className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
              <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                <span className="font-bold text-slate-950 tracking-normal">{content.rewardNoteTitle} </span>
                {content.rewardNote}
              </p>
            </div>
          </div>

          <ReferralForm content={formContent} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-14 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="referral-process-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
              {landing.processEyebrow}
            </p>
            <h2 id="referral-process-title" className="mt-3 text-emerald-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {landing.processTitle}
            </h2>
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {landing.processSteps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <span className="font-mono text-emerald-700 text-xs font-semibold tracking-wide leading-5 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{step.title}</h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{step.description}</p>
              </li>
          ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-14 text-slate-900 sm:px-6 lg:px-10 lg:py-18" aria-labelledby="referral-earnings-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(129,140,248,0.13),transparent_35%),radial-gradient(ellipse_at_100%_100%,rgba(56,189,248,0.12),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <header>
              <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 uppercase text-indigo-700 text-xs font-semibold tracking-wide leading-5">
                {landing.earningsEyebrow}
              </p>
              <h2 id="referral-earnings-title" className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {landing.earningsTitle}
              </h2>
            </header>
            <p className="max-w-3xl text-slate-600 lg:pb-1 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.earningsDescription}</p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 border-l-4 border-l-[#b8d8ec] bg-white/80 p-5 shadow-sm sm:p-6">
              <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">{landing.basicTitle}</p>
              <p className="mt-2 text-[#087a61] text-lg font-semibold tracking-normal leading-snug">
                {landing.basicRate}<span className="ml-1 text-sm font-bold text-slate-500 tracking-normal">{landing.perKilowatt}</span>
              </p>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.basicDescription}</p>
              <div className="mt-4 space-y-2">
                {landing.rewardTiers.map((tier) => (
                  <div key={tier.systemSize} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm">
                    <span className="text-slate-600">{tier.systemSize}</span>
                    <strong className="text-[#087a61]">{tier.basicReward}</strong>
                  </div>
              ))}
              </div>
            </article>

            <article className="rounded-xl border border-slate-200 border-l-4 border-l-[#c5dfc2] bg-[linear-gradient(135deg,#e7f2eb_0%,#ffffff_55%,#e8e7f8_100%)] p-5 text-slate-900 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <>
                  <p className="uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">{landing.guidedTitle}</p>
                  <p className="mt-2 text-[#087a61] text-lg font-semibold tracking-normal leading-snug">
                    {landing.guidedRate}<span className="ml-1 text-sm font-bold text-slate-500 tracking-normal">{landing.perKilowatt}</span>
                  </p>
                </>
                <span className="rounded-full bg-amber-300 px-3 py-1 text-xs uppercase text-slate-900 text-xs font-semibold tracking-wide leading-5">
                  {landing.topRateBadge}
                </span>
              </div>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.guidedDescription}</p>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-slate-700 sm:text-sm">
                {landing.guidanceTasks.map((task) => (
                  <li key={task} className="flex gap-2 rounded-xl bg-white/70 p-3">
                    <span className="text-emerald-700" aria-hidden="true">✓</span>
                    <span>{task}</span>
                  </li>
              ))}
              </ul>
              <p className="mt-3 text-emerald-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.guidedBonus}</p>
              <div className="mt-4 space-y-2">
                {landing.rewardTiers.map((tier) => (
                  <div key={tier.systemSize} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/80 px-3 py-2.5 text-sm">
                    <span className="text-slate-600">{tier.systemSize}</span>
                    <strong className="text-emerald-900">{tier.guidedReward}</strong>
                  </div>
              ))}
              </div>
            </article>
          </div>

          <aside className="mt-5 flex flex-col gap-3 rounded-xl border border-amber-300 bg-[#fff3df] p-5 text-amber-950 sm:flex-row sm:items-center">
            <p className="text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              <strong className="tracking-normal">{landing.guidanceNoteTitle} </strong>
              {landing.guidanceNote}
            </p>
          </aside>
          <p className="mt-4 border-l-2 border-amber-500 pl-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.termsNotice}</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 lg:px-10 lg:py-16 sm:py-14" aria-labelledby="referral-faq-title">
        <div className="mx-auto max-w-7xl">
          <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-slate-200 bg-[#eaf3fc] px-4 py-2 uppercase text-[#075da8] text-xs font-semibold tracking-wide leading-5">
            {landing.faqEyebrow}
          </p>
          <h2 id="referral-faq-title" className="mt-4 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {landing.faqTitle}
          </h2>
          <dl className="mt-7 grid gap-4 sm:grid-cols-3">
            {landing.faqs.map((faq, index) => (
              <div key={faq.question} className={`h-full rounded-xl border border-slate-200 border-l-4 ${index === 0 ? 'border-l-[#b8d7ec]' : index === 1 ? 'border-l-[#c5dfc2]' : 'border-l-[#efd9ad]'} bg-white p-5 shadow-sm sm:p-6`}>
                <dt className="font-bold leading-6 text-slate-950 tracking-normal">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</dd>
              </div>
          ))}
          </dl>
          <p className="mt-8 text-center text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{landing.trustNote}</p>
        </div>
      </section>
    </>
  )
}
