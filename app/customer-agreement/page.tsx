'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { submitMailtoForm } from '@/lib/submitMailto'
import { useId, useState } from 'react'

const projectExecutionSections = [
  {
    title: 'Project lifecycle overview',
    text:
      'AeroSun Energy should follow a standard project lifecycle for every customer, from requirement collection to commissioning, performance verification, and final handover. The process should be documented and reviewed at each stage for solar, wind, and hybrid projects.',
    points: [
      'Residential rooftop solar systems',
      'Commercial and industrial solar installations',
      'Off-grid solar, solar pumpsets, and farm systems',
      'Wind turbine and wind generator projects',
      'Solar-wind hybrid and battery-based systems',
    ],
  },
  {
    title: '1. Customer enquiry and requirement collection',
    text:
      'The first step is to understand the customer’s exact needs before preparing a quotation. AeroSun should collect customer details, electrical requirements, site conditions, and operating expectations, including any wind, pump, or hybrid requirements.',
    points: [
      'Customer information, address, contact details, and use case',
      'Monthly electricity consumption, sanctioned load, and backup needs',
      'Available rooftop or land area, shading, structure, and wiring access',
      'Wind-speed and turbine requirements for wind projects',
      'Water source, flow rate, head, and agricultural pumping requirements',
    ],
  },
  {
    title: '2. Technical site survey and feasibility assessment',
    text:
      'After collecting the inquiry, AeroSun should conduct a technical site survey and confirm that the proposed design is feasible. This includes checking roof or land conditions, shading, wind exposure, load profile, structural suitability, and whether the intended solution can meet the customer’s goals.',
    points: [
      'Rooftop solar checks: structure, orientation, shading, and access',
      'Ground-mounted checks: land, soil, access, and compacting conditions',
      'Off-grid battery sizing and autonomy review',
      'Wind feasibility based on wind data, turbulence, obstacles, and tower height',
      'Pump system viability using water head, flow, source, and site conditions',
    ],
  },
  {
    title: '3. System design and engineering',
    text:
      'Once feasibility is confirmed, AeroSun prepares a project-specific engineering design. The design should cover solar, wind, hybrid generation, batteries, protection, cables, inverters, monitoring, and the project’s electrical and structural layout.',
    points: [
      'Solar system design includes panel capacity, string design, inverter, mounting, earthing, protection, and monitoring',
      'Wind system design includes turbine type, tower height, foundation, generator, overspeed protection, and battery or grid interfaces',
      'Hybrid system design includes solar and wind contribution, battery storage, control logic, backup loads, and protection',
      'Deliverables include the detailed project design, single-line diagram, BOM, drawings, and specifications',
    ],
  },
  {
    title: '4. Quotation preparation and commercial proposal',
    text:
      'The quotation should clearly explain what the customer is paying for and what is included, with separate cost categories for equipment, installation, civil works, electrical items, approvals, and after-sales support.',
    points: [
      'Solar, wind, battery, electrical, and safety equipment',
      'Civil work, installation, testing, commissioning, and transportation',
      'Engineering and drawing support',
      'Applicable approvals, inspections, and meter-related charges',
      'Warranty, maintenance, and service scope',
    ],
  },
  {
    title: '5. Customer approval, order confirmation, and payment',
    text:
      'Once the customer accepts the quotation, the project moves into a formal order confirmation stage. This includes the signed agreement, payment schedule, accepted design, and the generation of a project ID or order reference.',
    points: [
      'Explain the design and expected performance to the customer',
      'Clarify equipment, warranty, scope, and exclusions',
      'Collect the agreed advance payment and sign the project agreement',
      'Maintain a project file with approval history, documents, and schedules',
    ],
  },
  {
    title: '6. Government approvals and statutory permissions',
    text:
      'This is a critical stage because the required approvals depend on the type of system and the project category. AeroSun should not assume that all renewable energy systems require the same permits or checks.',
    points: [
      'Grid-connected rooftop solar may need DISCOM feasibility, net-metering, and commissioning approvals',
      'Off-grid systems need electrical safety and local compliance review',
      'Solar pumpsets may require state agency and subsidy checks',
      'Wind and hybrid systems may require land, electrical, grid, aviation, or structural approvals',
      'Always maintain an approval register with application numbers, conditions, and pending actions',
    ],
  },
  {
    title: '7. Material procurement and quality verification',
    text:
      'After the design is frozen, AeroSun procures the equipment and verifies the material against the approved BOM. Material verification helps prevent wrong models, damaged parts, missing accessories, and installation delays.',
    points: [
      'Verify model numbers, serial numbers, manufacturer details, and warranties',
      'Check physical condition, delivery challan, invoice, and matching BOM',
      'Confirm compatibility between modules, inverters, controllers, and batteries',
      'Record the inspection results in an approved material register',
    ],
  },
  {
    title: '8. Installation according to engineering and safety standards',
    text:
      'Installation should be performed by trained technicians under the supervision of a qualified engineer. Every installation must match the approved design and maintain proper mechanical, electrical, and safety standards.',
    points: [
      'Solar installation requires safe mounting, correct stringing, earthing, DC and AC protection, and waterproofing',
      'Wind installation covers proper tower installation, foundation checks, mechanical fastening, and overspeed protection',
      'Hybrid systems require synchronized design and integration across solar, wind, battery, and control equipment',
      'Maintain an installation checklist with photographs and completion records',
    ],
  },
  {
    title: '9. Pre-commissioning inspection and safety testing',
    text:
      'Before switching on the system, AeroSun should complete pre-commissioning checks to confirm the installation is electrically and mechanically safe.',
    points: [
      'Visual and module checks for damage or structural defects',
      'Polarity, string voltage, insulation, earthing continuity, and surge protection checks',
      'Protection and inverter configuration validation',
      'Wind and hybrid-specific checks such as blade inspection, braking, battery operation, and control testing',
    ],
  },
  {
    title: '10. System commissioning and operational testing',
    text:
      'Commissioning is the stage where the system is switched on and checked against its approved operational design. For grid-connected systems, this also includes utility coordination and synchronization checks.',
    points: [
      'Solar commissioning includes DC input verification, inverter startup, AC output, and monitoring checks',
      'Wind commissioning checks generator output, controller operation, braking, and safe operating conditions',
      'Hybrid commissioning validates source switching, battery charging, grid response, and backup behaviour',
      'Record the commissioning report and operational observations',
    ],
  },
  {
    title: '11. Output verification and performance assessment',
    text:
      'The project is not complete when the system is energized. AeroSun must measure actual energy output against the approved design and acceptance criteria.',
    points: [
      'Measure solar irradiation, module temperature, DC output, AC output, and daily generation',
      'For wind, record wind speed, turbine operating status, electrical output, vibration, and performance against the power curve',
      'For pump systems, verify water flow, head, and operating hours',
      'For hybrid systems, measure solar contribution, wind contribution, storage, backup, and grid import/export',
    ],
  },
  {
    title: '12. Customer handover and project closure',
    text:
      'After successful testing and commissioning, the system should be formally handed over to the customer with all documentation, training, and support information in place.',
    points: [
      'Final design, single-line diagram, BOM, warranty certificates, serial numbers, and technical manuals',
      'Electrical test report, commissioning report, performance report, and approval copies',
      'Customer training for operation, monitoring, and safe shutdown procedures',
      'Customer acceptance form and final handover certificate',
    ],
  },
  {
    title: 'Recommended AeroSun operating model',
    text:
      'The company should standardize its workflow around three documents: Customer Project File, Engineering & Quality File, and Customer Handover & Service File. This creates a traceable process from the first enquiry to long-term maintenance and gives AeroSun a repeatable operating model as it grows.',
    points: [
      'Customer Project File: requirements, site survey, quotation, agreement, approvals, and payment records',
      'Engineering & Quality File: design, BOM, material inspection, installation, testing, commissioning, and performance verification',
      'Handover & Service File: warranty, user manuals, maintenance, service history, and customer support',
    ],
  },
]

const agreementSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  agreed: z.boolean().refine((value) => value === true, {
    message: 'Please confirm that you accept the agreement and payment terms.',
  }),
})

type AgreementFormValues = z.infer<typeof agreementSchema>

const defaultValues: AgreementFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  agreed: false,
}

const projectSummaryCards = [
  {
    title: 'Customer Project File',
    description: 'Requirements, site survey, quotation, agreement, approvals, and project records kept in one traceable file.',
    accent: 'emerald',
  },
  {
    title: 'Engineering & Quality File',
    description: 'Design, BOM, inspection, installation, safety checks, commissioning, and performance verification.',
    accent: 'sky',
  },
  {
    title: 'Handover & Service File',
    description: 'Warranty, training, acceptance, maintenance history, and long-term service continuity.',
    accent: 'violet',
  },
]

const coreProcessSteps = [
  'Customer enquiry and requirement collection',
  'Technical site survey and feasibility review',
  'System design and engineering approval',
  'Quotation, commercial offer, and agreement',
  'Procurement, government approvals, and scheduling',
  'Installation, testing, commissioning, and performance verification',
  'Customer handover, training, and maintenance support',
]

export default function CustomerAgreementPage() {
  const [submitFeedback, setSubmitFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AgreementFormValues>({
    resolver: zodResolver(agreementSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: AgreementFormValues) => {
    const subject = `Customer Agreement Acceptance - ${data.customerName}`
    const body = [
      'CUSTOMER AGREEMENT AND PAYMENT TERMS',
      '=================================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      '',
      'Status: Agreement accepted',
      'Payment terms acknowledged by customer.',
    ].join('\n')

    const opened = submitMailtoForm({
      to: 'customercare@aerosunenergy.in',
      subject,
      body,
    })

    reset(defaultValues)
    setSubmitFeedback({
      type: opened ? 'success' : 'error',
      message: opened ? 'Your agreement submission has been prepared in your email app.' : 'We could not open your email app. Please try again or email us directly.',
    })
  }

  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(99,102,241,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-indigo-100/10">
          <div className="absolute inset-10 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-20 rounded-full border border-indigo-100/10" />
          <div className="absolute inset-32 rounded-full border border-indigo-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-indigo-100">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
              Agreement · Scope · Acceptance
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              Clear terms.
              <span className="mt-1 block text-sky-300">Confident projects.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              Review AeroSun Energy&apos;s project execution process, scope, payment milestones, and customer acceptance details.
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-300/10 text-xl text-indigo-200">7</span>
            <span className="text-md leading-5 text-slate-300">
              Project lifecycle
              <strong className="block text-md font-bold text-white">From enquiry to service</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-indigo-100/60 sm:px-8 lg:px-10">
            <span>Project process</span>
            <span>Customer details</span>
            <span>Commercial terms</span>
            <span>Acceptance</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section className="mb-8 rounded-3xl border border-indigo-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg text-indigo-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-800">Agreement at a glance</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
                  A traceable project process connects customer requirements, engineering, procurement, installation, commissioning, and long-term service.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {projectSummaryCards.map((card, index) => (
                <div key={card.title} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-md font-bold text-indigo-700">0{index + 1}</span>
                  <span className="text-md leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{card.title}</strong>
                    {card.description}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mt-6 text-md font-bold text-slate-900">Core process steps</h2>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {coreProcessSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3 text-md leading-5 text-slate-600">
                  <span className="font-mono font-bold text-indigo-700">{String(index + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="space-y-4">
            {projectExecutionSections.map((section, index) => (
              <section key={section.title} id={`agreement-process-${index + 1}`} className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 font-mono text-md font-bold text-indigo-800">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.title.replace(/^(?:\d+\.\s*)/, '')}</h2>
                    <p className="mt-3 text-md leading-7 text-slate-600 sm:text-base">{section.text}</p>
                    <ul className="mt-4 space-y-2.5">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-linear-to-r from-indigo-100 via-sky-100 to-transparent" />
              </section>
            ))}
          </div>

          <p className="mt-7 rounded-2xl border border-indigo-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            Have a question about your project terms? Contact our team at{' '}
            <a href="mailto:customercare@aerosunenergy.in" className="font-bold text-indigo-800 underline decoration-indigo-300 underline-offset-4">customercare@aerosunenergy.in</a>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Project execution sections" className="overflow-hidden rounded-2xl border border-indigo-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-800">Find a topic</p>
              <p className="mt-1 text-md font-bold text-slate-900">Project process</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {projectExecutionSections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#agreement-process-${index + 1}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                    <span className="font-mono font-bold text-indigo-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.title.replace(/^(?:\d+\.\s*)/, '')}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#customer-agreement-form" className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-900">
                  <span className="font-mono font-bold text-indigo-700/70">AG</span>
                  <span>Agreement form</span>
                </a>
              </li>
            </ol>
          </nav>
          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-indigo-300">Before accepting</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-200">
              <li>Review the agreed scope and technical specifications.</li>
              <li>Confirm payment milestones and project responsibilities.</li>
              <li>Ask our team about any items that need clarification.</li>
            </ul>
          </section>
        </aside>
      </div>

      <section id="customer-agreement-form" className="scroll-mt-28 mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 p-3 sm:p-5 lg:p-6">
            <header className="overflow-hidden rounded-[26px] border border-indigo-200 bg-linear-to-r from-[#0c1f51] via-[#153c78] to-[#0d6685] p-4 text-white sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xl font-black shadow-[0_20px_40px_-18px_rgba(255,255,255,0.8)]">
                    C
                  </div>
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.34em] text-indigo-100/85">Agreement</p>
                    <h2 className="mt-1 text-2xl font-black tracking-[0.06em] sm:text-3xl">Customer Agreement & Payment Terms</h2>
                  </div>
                </div>

                <div className="grid gap-2 text-md sm:grid-cols-3 lg:min-w-104">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Ref.</p>
                    <p className="mt-1 font-semibold">AES/AGR/2026</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Date</p>
                    <p className="mt-1 font-semibold">DD-MM-YYYY</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <p className="text-[12px] font-black uppercase tracking-[0.28em] text-indigo-100/75">Status</p>
                    <p className="mt-1 font-semibold text-emerald-300">Pending Sign</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="space-y-5">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[22px] border border-sky-200 bg-linear-to-br from-[#ebf8ff] via-white to-[#f5fbff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-sky-700 to-cyan-700 text-lg font-black text-white shadow-lg shadow-sky-500/25">1</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Agreement Details</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label="Agreement No." placeholder="Agreement number" register={register} compact />
                      <Field label="Date" placeholder="DD-MM-YYYY" register={register} compact />
                      <Field label="Project Reference" placeholder="Project reference" register={register} compact />
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-emerald-200 bg-linear-to-br from-[#f1fff9] via-white to-[#f7fff7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-lime-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/25">2</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Customer Details</h2>
                    </div>
                    <div className="space-y-4">
                      <Field label="Customer Name" name="customerName" placeholder="Enter customer name" register={register} error={errors.customerName} compact />
                      <Field label="Company Name" name="companyName" placeholder="Optional company name" register={register} error={errors.companyName} compact />
                      <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" register={register} error={errors.phone} compact />
                      <Field label="Email ID" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} compact />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-violet-200 bg-linear-to-br from-[#f6f1ff] via-white to-[#f7f8ff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
                  <div className="mb-4 flex items-center gap-3 border-b border-violet-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-700 to-indigo-600 text-lg font-black text-white shadow-lg shadow-violet-500/25">3</span>
                    <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Project Details</h2>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <fieldset className="md:col-span-2">
                      <legend className="mb-2 block text-[12px] font-black uppercase tracking-[0.22em] text-slate-700">Project Type</legend>
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-violet-200 bg-white/80 p-2.5 sm:grid-cols-3">
                        {['Rooftop Solar', 'Ground-Mounted Solar', 'Wind Energy', 'Hybrid System', 'Battery Storage', 'Other'].map((option) => (
                          <label key={option} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-[12px] font-medium text-slate-700">
                            <input type="radio" name="projectType" value={option} className="h-4 w-4 accent-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700" />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <Field label="System Capacity" placeholder="kW / kWp" register={register} compact />
                    <Field label="Project Location" placeholder="Site location / city" register={register} compact />
                    <Field label="Quoted Amount" placeholder="₹" register={register} compact />
                    <Field label="Site Access Date" placeholder="DD-MM-YYYY" register={register} compact />
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <section className="rounded-3xl border border-amber-200 bg-linear-to-br from-[#fffaf1] via-white to-[#fffef7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-amber-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-lg font-black text-slate-950 shadow-lg shadow-amber-500/25">4</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Commercial Terms</h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white/80">
                      <div className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-200 bg-amber-50 text-[12px] font-black uppercase tracking-[0.18em] text-slate-700">
                        <div className="px-3 py-3">Milestone</div>
                        <div className="px-3 py-3">%</div>
                        <div className="px-3 py-3">Amount</div>
                        <div className="px-3 py-3">Due</div>
                      </div>
                      { [
                        'Advance Payment',
                        'Material Supply',
                        'Installation',
                        'Testing & Commissioning',
                        'Final Handover',
                      ].map((milestone, index) => (
                        <div key={milestone} className="grid grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] border-b border-amber-100 last:border-b-0 text-md text-slate-700">
                          <div className="border-r border-amber-100 px-3 py-3">{index + 1}. {milestone}</div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="border-r border-amber-100 px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                          <div className="px-3 py-3"><div className="h-7 rounded-md border border-dashed border-slate-200 bg-slate-50/60" /></div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-3xl border border-emerald-200 bg-linear-to-br from-[#edfdf7] via-white to-[#f5fff9] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                    <div className="mb-3 flex items-center gap-3 border-b border-emerald-200 pb-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/25">5</span>
                      <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Scope of Work</h2>
                    </div>

                    <div className="space-y-2 text-md text-slate-700">
                      { [
                        'Supply of system equipment',
                        'Installation and commissioning',
                        'Testing, training, and handover',
                        'Net metering / utility coordination',
                        'Warranty support as applicable',
                        'AMC / O&M support if selected',
                      ].map((item) => (
                        <label key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5">
                          <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </section>
                </div>

                <section className="rounded-3xl border border-rose-200 bg-linear-to-br from-[#fff5f5] via-white to-[#fffafb] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
                  <div className="mb-3 flex items-center gap-3 border-b border-rose-200 pb-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-rose-500 to-pink-500 text-lg font-black text-white shadow-lg shadow-rose-500/25">6</span>
                    <h2 className="text-lg font-black tracking-[0.04em] text-slate-900">Terms & Conditions</h2>
                  </div>

                  <ol className="space-y-2 text-md leading-7 text-slate-700">
                    { [
                      'This agreement is based on the final approved quotation and technical specifications.',
                      'Prices are valid for the agreed time period and may be revised if the job scope changes.',
                      'Government subsidy, if applicable, remains subject to eligibility and authority approval.',
                      'Customer shall provide necessary approvals, access, and coordination for system implementation.',
                      'Any additional work outside the agreed scope will be charged separately.',
                      'This agreement shall be governed by the laws of India.',
                    ].map((item, index) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[12px] font-black text-rose-700">{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              </section>

              <aside className="rounded-3xl border border-indigo-200 bg-linear-to-br from-[#0b1e46] via-[#132c5e] to-[#0a1d45] p-4 text-white shadow-[0_25px_50px_-30px_rgba(15,23,42,0.9)] sm:p-5">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg font-black">7</span>
                  <h2 className="text-lg font-black tracking-[0.04em]">Acceptance</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-md leading-7 text-slate-200">
                    I have read and understood the terms and conditions above and agree to proceed with AeroSun Energy Private Limited as per the agreed project scope, payment schedule, and service obligations.
                  </p>

                  <Field label="Customer Name" placeholder="Customer name" register={register} compact dark />
                  <Field label="Signature" placeholder="Authorized signature" register={register} compact dark />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Date" placeholder="DD-MM-YYYY" register={register} compact dark />
                    <Field label="Place" placeholder="City / place" register={register} compact dark />
                  </div>

                  <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-md leading-6 text-slate-200">
                    <input type="checkbox" {...register('agreed')} aria-invalid={Boolean(errors.agreed)} aria-describedby={errors.agreed ? 'agreed-error' : undefined} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400" />
                    <span>I accept the customer agreement and payment terms stated above.</span>
                  </label>
                  {errors.agreed && <p id="agreed-error" className="text-md text-rose-300">{errors.agreed.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-md font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-900 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit agreement'}
                  </button>

                  {submitFeedback ? (
                    <p className={`text-md font-medium ${submitFeedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                      {submitFeedback.message}
                    </p>
                  ) : isSubmitSuccessful && (
                    <p className="text-md font-medium text-emerald-300">Your agreement submission has been prepared in your email app.</p>
                  )}
                </div>
              </aside>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

type FieldProps = {
  label: string
  name?: keyof AgreementFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<AgreementFormValues>>['register']
  error?: { message?: string }
  compact?: boolean
  dark?: boolean
}

function Field({ label, name, placeholder, type = 'text', register, error, compact = false, dark = false }: FieldProps) {
  const generatedId = useId()
  const inputId = name ?? generatedId

  return (
    <div className={compact ? '' : 'md:col-span-2'}>
      <label htmlFor={inputId} className={`mb-2 block text-[12px] font-black uppercase tracking-[0.22em] ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        {...(name ? register(name) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`h-11 w-full rounded-2xl border px-4 py-3 text-md outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-4 ${dark ? 'border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-600/30' : 'border-slate-200 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-100'}`}
      />
      {error && <p id={`${inputId}-error`} className="mt-2 text-md text-rose-300">{error.message}</p>}
    </div>
  )
}
