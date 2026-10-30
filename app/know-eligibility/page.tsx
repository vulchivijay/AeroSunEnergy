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
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 max-w-4xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-emerald-700">Eligibility check</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            PM Surya Ghar: Muft Bijli Yojana
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The PM Surya Ghar: Muft Bijli Yojana is a Central Government rooftop solar programme designed to encourage residential households to adopt solar power and reduce their dependence on conventional electricity.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-emerald-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.6)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">Who can apply</p>
            <h2 className="mt-3 text-2xl font-black text-slate-900">Check your household eligibility</h2>

            <div className="mt-6 space-y-4">
              {eligibilityChecks.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-emerald-200 bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-900 p-6 text-white shadow-[0_24px_60px_-28px_rgba(5,150,105,0.85)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-100">Subsidy snapshot</p>
            <h2 className="mt-3 text-2xl font-black">Central subsidy support</h2>

            <div className="mt-6 grid gap-4">
              {subsidyBreakdown.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-100">{item.title}</div>
                  <div className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-emerald-50">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
        <div className="rounded-[30px] border border-emerald-200 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.25)] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-emerald-700">Scheme guide</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">Renewable-energy scheme categories</h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {schemeOverviewCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-black text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{card.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {pmKusumComponents.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.25)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">Eligibility checklist</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">What AeroSun should verify before promising support</h2>

            <div className="mt-6 space-y-3">
              {schemeEligibilityNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-rose-200 bg-rose-50 p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.25)] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-rose-700">Common exclusions</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">Where schemes normally do not apply</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {commonRejectionReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[10px] font-black text-rose-700">×</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.2)]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">Next step</p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-slate-900">Need help checking your eligibility?</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-slate-800">
              Contact AeroSun
            </Link>
            <Link href="/solarenergy" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700">
              View Solar Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
