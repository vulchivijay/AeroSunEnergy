import Link from 'next/link'
import { getRequestTranslations } from '@/lib/serverLocale'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

export default async function CancellationRefundPage() {
  const t = await getRequestTranslations()
  const content = t.legalPages.cancellationRefund

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#102a43_0%,#1d4e89_55%,#137c63_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_12%,rgba(251,191,36,0.2),transparent_36%),radial-gradient(ellipse_at_12%_90%,rgba(14,165,233,0.2),transparent_38%)]" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/10 px-4 py-2 uppercase text-sky-100 text-xs font-semibold tracking-wide leading-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {content.badge}
            </div>
            <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.description}
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-700 pt-5 uppercase text-sky-100/80 text-xs font-semibold tracking-wide leading-5">
            {content.headerTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.intro}</p>
          <div className="mt-6 rounded-xl border-l-4 border-emerald-700 bg-[#eaf2e9] p-5">
            <h2 className="uppercase text-emerald-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.commitmentTitle}</h2>
            <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.commitment}</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.definitionsTitle}</h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {content.definitions.map((item) => (
              <div key={item.term} className="rounded-xl bg-slate-50 p-4">
                <dt className="font-bold text-slate-900 tracking-normal">{item.term}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-600">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.policyTitle}</h2>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
            <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.clientCancellationTitle}</h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.clientCancellation}</p>
          </div>

          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
            <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.automaticRefundTitle}</h3>
            <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.automaticRefundIntro}</p>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
              {content.automaticRefundCases.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <h3 className="text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{content.companyCancellationTitle}</h3>
            <div className="mt-4 space-y-4">
              {content.companyCancellationCases.map((item) => (
                <div key={item.heading} className="rounded-lg bg-white p-4">
                  <h4 className="text-slate-900 text-lg font-semibold tracking-normal leading-snug">{item.heading}</h4>
                  <p className="mt-1 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.description}</p>
                  <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    <span className="font-semibold tracking-normal">{content.refundLabel}: </span>{item.refund}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.companyRefundTimeline}</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.refundProcessTitle}</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
            {content.refundProcess.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </section>

        <section className="rounded-xl bg-[#102a43] p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.contactTitle}</h2>
          <p className="mt-2 text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.contactIntro}</p>
          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <>
              <dt className="font-bold text-sky-200 tracking-normal">{content.emailLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`mailto:${content.email}`}>{content.email}</a></dd>
            </>
            <>
              <dt className="font-bold text-sky-200 tracking-normal">{content.phoneLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`tel:${content.phone}`}>{content.phone}</a></dd>
            </>
            <>
              <dt className="font-bold text-sky-200 tracking-normal">{content.websiteLabel}</dt>
              <dd className="mt-1"><a className="underline underline-offset-4 hover:text-amber-200" href={`https://${content.website}`} target="_blank" rel="noopener noreferrer">{content.website}</a></dd>
            </>
            <>
              <dt className="font-bold text-sky-200 tracking-normal">{content.addressLabel}</dt>
              <dd className="mt-1 leading-6">{content.address}</dd>
            </>
          </dl>
          <p className="mt-6 border-t border-slate-700 pt-5 text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {content.moreQuestions}{' '}
            <Link href="/contact" className="font-bold text-amber-200 underline underline-offset-4 hover:text-white tracking-normal">
              {content.contactLink}
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
