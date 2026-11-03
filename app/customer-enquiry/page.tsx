import { CustomerEnquiryForm } from '@/app/components/forms/CustomerEnquiryForm'
import FormWarningRibbon from '@/app/components/ui/FormWarningRibbon'

export default function CustomerEnquiryPage() {
  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(14,165,233,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(16,185,129,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-sky-100/10">
          <div className="absolute inset-10 rounded-full border border-sky-100/10" />
          <div className="absolute inset-20 rounded-full border border-sky-100/10" />
          <div className="absolute inset-32 rounded-full border border-sky-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100/20 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-sky-100">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.8)]" />
              Your project · Your requirements
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s plan.
              <span className="mt-1 block text-sky-300">Tell us what you need.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              Share your site, energy use, and project goals so our team can understand your renewable energy requirements.
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300/10 text-xl text-sky-200">↗</span>
            <span className="text-xs leading-5 text-slate-300">
              Enquiries welcome
              <strong className="block text-md font-bold text-white">Solar · Wind · Hybrid</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-100/60 sm:px-8 lg:px-10">
            <span>Customer details</span>
            <span>Site & energy use</span>
            <span>Project requirements</span>
            <span>Next steps</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section className="mb-8 rounded-3xl border border-sky-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-800">i</span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-800">Enquiry at a glance</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
                  Complete the form with your contact information, property details, energy usage, and preferred solution. Required fields help us understand your project before following up.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {[
                { label: 'Your site', text: 'Property, roof or land details' },
                { label: 'Your usage', text: 'Electricity consumption and connection' },
                { label: 'Your goals', text: 'Capacity, timing, budget, and needs' },
              ].map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-xs font-bold text-sky-700">0{index + 1}</span>
                  <span className="text-xs leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{item.label}</strong>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>
          <div id="enquiry-form" className="scroll-mt-28">
            <FormWarningRibbon />
            <CustomerEnquiryForm />
          </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Customer enquiry form sections" className="overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-800">Form sections</p>
              <p className="mt-1 text-md font-bold text-slate-900">Your project details</p>
            </div>
            <ol className="space-y-1 p-3">
              {[
                ['enquiry-customer-details', 'Customer details'],
                ['enquiry-service-type', 'Enquiry type'],
                ['enquiry-property-site', 'Property & site'],
                ['enquiry-electricity-usage', 'Electricity usage'],
                ['enquiry-requirements', 'Requirements'],
                ['enquiry-project-details', 'Project details'],
              ].map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-sky-900">
                    <span className="font-mono font-bold text-sky-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300">Solutions we discuss</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-200">
              <li>Rooftop, ground-mounted, and commercial solar</li>
              <li>Wind, solar-wind hybrid, and battery storage</li>
              <li>Solar water pumping and operations support</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-800">Need help?</p>
            <p className="mt-3 text-md leading-6 text-slate-700">If the form is unavailable, email our team directly.</p>
            <a href="mailto:customercare@aerosunenergy.in" className="mt-3 inline-flex text-md font-bold text-sky-800 underline decoration-sky-300 underline-offset-4">customercare@aerosunenergy.in</a>
          </section>
        </aside>
      </div>
    </main>
  )
}
