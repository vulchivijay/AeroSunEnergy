'use client'

import Link from 'next/link'

const eligibilityChecks = [
  {
    title: 'Residential status',
    detail:
      'The scheme is primarily for residential households that own or occupy a suitable rooftop in India and wish to install rooftop solar.',
  },
  {
    title: 'Rooftop ownership',
    detail:
      'The applicant should have a roof or suitable rooftop space where the solar panels can be installed and connected in compliance with local electrical requirements.',
  },
  {
    title: 'Electricity connection',
    detail:
      'A valid electricity connection and a proper consumer account are typically required so the system can be connected to the grid, billed, and net-metered correctly.',
  },
  {
    title: 'System capacity',
    detail:
      'The eligible system is normally sized based on the household’s average consumption and roof suitability. The subsidy is generally provided for a rooftop solar system up to the approved cap.',
  },
  {
    title: 'Approved vendor and installation',
    detail:
      'The rooftop solar project should typically be installed by an empanelled or registered vendor and follow the portal and DISCOM process for application and commissioning.',
  },
  {
    title: 'Official portal compliance',
    detail:
      'Applicants are expected to apply through the official PM Surya Ghar portal and comply with the required verification, installation, and subsidy claim steps.',
  },
]

const subsidyBreakdown = [
  {
    title: 'First 2 kW',
    value: '₹30,000 per kW',
    note: 'For eligible residential households',
  },
  {
    title: 'Additional capacity up to 3 kW',
    value: '₹18,000 per kW',
    note: 'For the next part of the system',
  },
  {
    title: 'Maximum overall benefit',
    value: '₹78,000',
    note: 'Capped for eligible systems',
  },
  {
    title: 'Common facilities / GHS / RWA',
    value: '₹18,000 per kW',
    note: 'For suitable shared facilities up to the approved limit',
  },
]

const processSteps = [
  'Check your household electricity consumption and roof suitability.',
  'Register on the official PM Surya Ghar portal and upload the required details.',
  'Select a registered solar vendor and confirm the proposed rooftop system.',
  'Complete technical feasibility and net-metering requirements with the DISCOM.',
  'Install the rooftop solar system and complete commissioning.',
  'Submit the required documents for subsidy verification and receive the support amount as per scheme rules.',
]

const importantNotes = [
  'Subsidy amounts, rules, and programme conditions can change, so always verify the latest information on the official PM Surya Ghar portal and your local DISCOM portal.',
  'The scheme is for a residential rooftop solar application and may have specific requirements based on state rules, consumer category, and vendor empanelment.',
  'AeroSun Energy can help with application guidance, documentation support, vendor coordination, and installation planning for eligible homes.',
]

const schemeOverviewCards = [
  {
    title: 'Residential rooftop solar',
    detail: 'PM Surya Ghar focuses on grid-connected residential rooftops and is the most relevant scheme for household customers. It is not a general commercial or industrial subsidy route.',
  },
  {
    title: 'Agricultural solarisation',
    detail: 'PM-KUSUM supports agricultural solar pumps, solarisation of existing pumping systems, and decentralised renewable energy where the farmer or eligible entity qualifies under the scheme rules.',
  },
  {
    title: 'Developer and commercial categories',
    detail: 'Some schemes support renewable-energy developers, farmer groups, cooperatives, FPOs, and common facility applications, while others are strictly limited to eligible residential connections.',
  },
]

const schemeEligibilityNotes = [
  'Eligibility depends on customer category, location, electricity connection, land ownership, installation type, equipment quality, and scheme-specific documentation.',
  'Before promising a subsidy, AeroSun should verify the customer’s residential or agricultural category, the applicable state process, and the relevant funding rules.',
  'Projects that do not meet the scheme’s technical or consumer-category requirements may still be viable as non-subsidised renewable energy installations.',
]

const pmKusumComponents = [
  {
    title: 'Component A',
    detail: 'Decentralised grid-connected renewable power plants for eligible farmer groups, cooperatives, panchayats, FPOs, WUAs, and similar entities.',
  },
  {
    title: 'Component B',
    detail: 'Standalone solar agricultural pumps, mainly for eligible farmers and agricultural end-users seeking off-grid or standalone irrigation solutions.',
  },
  {
    title: 'Component C',
    detail: 'Solarisation of existing grid-connected agricultural pumps and feeders, where the state implementation process and grid conditions permit the programme.',
  },
]

const commonRejectionReasons = [
  'Commercial, industrial, or institutional electricity connection rather than a residential category',
  'No qualifying agricultural land or beneficiary documentation',
  'Standalone off-grid solar system where the scheme only supports eligible grid-connected rooftop solar',
  'Wind turbine or hybrid project without the specific qualifying rooftop solar configuration under that scheme',
  'Non-DCR-compliant modules, ineligible equipment, or failure to complete the official portal process',
]

export default function KnowEligibilityPage() {
  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
          <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              Eligibility · Schemes · Support
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              PM Surya Ghar.
              <span className="mt-1 block text-emerald-300">Know your eligibility.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              Understand the residential rooftop solar programme, the common eligibility requirements, and how to verify scheme support before planning a project.
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">₹</span>
            <span className="text-xs leading-5 text-slate-300">
              Residential subsidy snapshot
              <strong className="block text-md font-bold text-white">Up to ₹78,000*</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-100/60 sm:px-8 lg:px-10">
            <span>Residential rooftop solar</span>
            <span>Subsidy overview</span>
            <span>PM-KUSUM</span>
            <span>Application steps</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section id="eligibility-requirements" className="scroll-mt-28 mb-8 rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">Eligibility at a glance</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
                  The PM Surya Ghar: Muft Bijli Yojana is a Central Government rooftop solar programme designed to encourage residential households to adopt solar power and reduce their dependence on conventional electricity.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {[
                { label: 'Household', text: 'Residential consumer category' },
                { label: 'Rooftop', text: 'Suitable space and grid connection' },
                { label: 'Verify', text: 'Check current portal and DISCOM rules' },
              ].map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-xs font-bold text-emerald-700">0{index + 1}</span>
                  <span className="text-xs leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{item.label}</strong>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mt-7 text-lg font-extrabold tracking-tight text-slate-950">Check your household eligibility</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {eligibilityChecks.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-md font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-md leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            <section id="subsidy-overview" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">01</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Central subsidy support</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600 sm:text-base">Indicative central financial assistance for eligible residential systems; final amounts and applicability depend on current scheme rules and verification.</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {subsidyBreakdown.map((item) => (
                      <div key={item.title} className="rounded-xl bg-[#f4f8fc] p-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.16em] text-emerald-800">{item.title}</p>
                        <p className="mt-2 text-xl font-black text-slate-950">{item.value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="scheme-categories" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">02</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Renewable-energy scheme categories</h2>
                  <div className="mt-4 grid gap-3">
                    {schemeOverviewCards.map((card) => (
                      <div key={card.title} className="rounded-xl bg-[#f4f8fc] p-4">
                        <h3 className="text-md font-bold text-slate-900">{card.title}</h3>
                        <p className="mt-2 text-md leading-6 text-slate-600">{card.detail}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="mt-6 text-md font-bold text-slate-900">PM-KUSUM components</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {pmKusumComponents.map((item, index) => (
                      <div key={item.title} className="rounded-xl border border-sky-100 bg-sky-50/70 p-4">
                        <span className="font-mono text-xs font-bold text-sky-800">0{index + 1}</span>
                        <h4 className="mt-2 text-md font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-2 text-xs leading-6 text-slate-600">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="application-process" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">03</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Typical application process</h2>
                  <ol className="mt-4 space-y-3">
                    {processSteps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-[12px] font-bold text-emerald-800">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="verification-and-exclusions" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">04</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Verify before relying on support</h2>
                  <ul className="mt-4 space-y-3">
                    {[...importantNotes, ...schemeEligibilityNotes].map((note) => (
                      <li key={note} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-6 text-md font-bold text-slate-900">Common reasons support may not apply</h3>
                  <ul className="mt-3 space-y-2.5">
                    {commonRejectionReasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>
          </div>

          <p className="mt-7 rounded-2xl border border-emerald-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            Need help checking your eligibility?{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">Contact AeroSun</Link>
            {' '}or <Link href="/solarenergy" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">view our solar solutions</Link>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Eligibility guide sections" className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">Find a topic</p>
              <p className="mt-1 text-md font-bold text-slate-900">Eligibility guide</p>
            </div>
            <ol className="space-y-1 p-3">
              {[
                ['eligibility-requirements', 'Eligibility requirements'],
                ['subsidy-overview', 'Subsidy overview'],
                ['scheme-categories', 'Scheme categories'],
                ['application-process', 'Application process'],
                ['verification-and-exclusions', 'Verification & exclusions'],
              ].map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900">
                    <span className="font-mono font-bold text-emerald-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-300">Important</p>
            <p className="mt-3 text-md leading-6 text-slate-200">Subsidy amounts, vendor requirements, and programme rules can change. Confirm the latest details through the official portal and your local DISCOM.</p>
            <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-md font-bold text-emerald-300 underline decoration-emerald-300/50 underline-offset-4 hover:text-white">Visit PM Surya Ghar portal</a>
          </section>
        </aside>
      </div>
    </main>
  )
}
