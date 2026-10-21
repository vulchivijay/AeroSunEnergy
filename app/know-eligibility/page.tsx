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
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.25)] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-sky-700">Process</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">How the scheme typically works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-amber-700">Important notes</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-slate-900">Before you apply</h2>

          <div className="mt-6 space-y-4">
            {importantNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-amber-200 bg-white/80 p-4 text-sm leading-7 text-slate-700">
                {note}
              </div>
            ))}
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
