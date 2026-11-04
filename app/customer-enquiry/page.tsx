'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

const technicalSpecifications = [
  { label: 'Total Solar Capacity', name: 'solar_capacity', type: 'number', unit: 'kWp' },
  { label: 'Solar Module Technology', name: 'module_technology' },
  { label: 'Solar Module Manufacturer', name: 'module_manufacturer' },
  { label: 'Solar Module Model', name: 'module_model' },
  { label: 'Individual Module Capacity', name: 'module_capacity', type: 'number', unit: 'Wp' },
  { label: 'Total Number of Modules', name: 'module_quantity', type: 'number', unit: 'modules' },
  { label: 'Solar Inverter Manufacturer', name: 'inverter_manufacturer' },
  { label: 'Inverter Model', name: 'inverter_model' },
  { label: 'Inverter Capacity', name: 'inverter_capacity', type: 'number', unit: 'kW' },
  { label: 'System Configuration', name: 'technical_configuration' },
  { label: 'Mounting Structure', name: 'mounting_structure' },
  { label: 'Mounting Structure Material', name: 'mounting_material' },
  { label: 'DC Cable Specification', name: 'dc_cable' },
  { label: 'AC Cable Specification', name: 'ac_cable' },
  { label: 'Earthing Arrangement', name: 'earthing_arrangement' },
  { label: 'Lightning Protection', name: 'lightning_protection' },
  { label: 'Monitoring System', name: 'monitoring_system' },
  { label: 'Battery Type', name: 'battery_type' },
  { label: 'Battery Capacity', name: 'battery_capacity', type: 'number', unit: 'kWh' },
  { label: 'Battery Voltage', name: 'battery_voltage', type: 'number', unit: 'V' },
  { label: 'Estimated Installation Area', name: 'installation_area', type: 'number', unit: 'sq. ft.' },
] as const

const billOfMaterials = [
  'Solar PV Modules',
  'Solar Inverter',
  'Mounting Structure',
  'DC Cables',
  'AC Cables',
  'DC Distribution Box',
  'AC Distribution Box',
  'DC Protection Devices',
  'AC Protection Devices',
  'Earthing Materials',
  'Lightning Protection',
  'Connectors',
  'Monitoring Equipment',
  'Battery System, if applicable',
  'Other Accessories',
]

const priceItems = [
  'Solar PV Modules',
  'Solar Inverter',
  'Mounting Structure',
  'DC and AC Cables',
  'Electrical Protection Equipment',
  'Earthing and Lightning Protection',
  'Battery System, if applicable',
  'Monitoring Equipment',
  'Transportation and Logistics',
  'Installation and Labour',
  'Engineering and Project Coordination',
  'Testing and Commissioning',
]

const scopeActivities = [
  'Initial Customer Consultation',
  'Site Survey',
  'Technical System Design',
  'Equipment Procurement',
  'Solar Module Supply',
  'Inverter Supply',
  'Mounting Structure Supply',
  'Electrical Accessories',
  'Installation',
  'Electrical Connections',
  'Earthing Installation',
  'Testing and Commissioning',
  'Customer Handover',
  'System Operation Guidance',
  'Monitoring Setup',
  'After-Sales Support',
]

const scheduleActivities = [
  'Customer Approval',
  'Technical Design Finalisation',
  'Equipment Procurement',
  'Material Delivery',
  'Installation',
  'Testing and Commissioning',
  'Final Handover',
]

const exclusions = [
  'Civil construction and major structural modifications.',
  'Roof strengthening and waterproofing repairs.',
  'Land acquisition or leasing.',
  'Major electrical infrastructure upgrades.',
  'Transformer upgrades.',
  'DISCOM application and statutory fees.',
  'Government approval charges.',
  'Net-metering or grid-interconnection charges.',
  'Additional cable routing beyond the agreed scope.',
  'Battery replacement after warranty expiry.',
  'Unforeseen site modifications.',
  'Taxes or charges not included in the quotation.',
]

const warrantyItems = [
  'Solar Modules',
  'Solar Inverter',
  'Battery System',
  'Mounting Structure',
  'Electrical Accessories',
  'Installation Workmanship',
]

const paymentMilestones = [
  'Advance Payment on Order Confirmation',
  'Before Equipment Dispatch',
  'After Installation',
  'After Testing and Handover',
]

const termsAndConditions = [
  'This quotation is valid until the date specified on the first page.',
  'Prices are subject to equipment availability and supplier confirmation.',
  'Final project pricing may change if site conditions or customer requirements change.',
  'Equipment specifications will be confirmed before procurement.',
  'Installation will be subject to site readiness and applicable safety requirements.',
  'Grid-connected systems will require applicable DISCOM and statutory approvals.',
  'Subsidy eligibility is not guaranteed by this quotation.',
  'Any applicable subsidy will be processed only through the relevant authorised procedure.',
  'Delivery timelines are subject to supplier availability and logistics.',
  'Customer changes after order confirmation may result in revised pricing and timelines.',
  "Warranty coverage will follow the respective manufacturer's written terms.",
  'Any additional work outside the agreed scope will require a separate quotation or written variation approval.',
]

const financialParameters = [
  { label: 'Average Monthly Electricity Bill', name: 'average_monthly_bill', unit: '₹' },
  { label: 'Estimated Monthly Solar Generation', name: 'estimated_monthly_generation', unit: 'kWh' },
  { label: 'Estimated Monthly Electricity Savings', name: 'estimated_monthly_savings', unit: '₹' },
  { label: 'Estimated Annual Electricity Savings', name: 'estimated_annual_savings', unit: '₹' },
  { label: 'Total Project Investment', name: 'total_project_investment', unit: '₹' },
  { label: 'Estimated Simple Payback Period', name: 'payback_period', unit: 'Years' },
]

const quotationSections = [
  'Company Details',
  'Customer Details',
  'Project Overview',
  'Proposed System Technical Specifications',
  'Bill of Materials (BOM)',
  'Project Price Breakdown',
  'Estimated Energy Generation',
  'Estimated Financial Benefits',
  'Project Execution Scope',
  'Exclusions',
  'Warranty Details',
  'Payment Terms',
  'Quotation Terms and Conditions',
  'Customer Acceptance',
  'AeroSun Energy Authorisation',
]

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-3">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-700 font-mono text-md font-bold text-white">
        {number}
      </span>
      <h2 id={`quotation-section-${number}`} className="scroll-mt-28 text-lg font-black uppercase tracking-wide text-slate-900 sm:text-xl">{title}</h2>
    </div>
  )
}

function TextField({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  min,
  max,
  minLength,
  step,
  pattern,
  className = '',
}: {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'number'
  required?: boolean
  placeholder?: string
  min?: number
  max?: number
  minLength?: number
  step?: number | 'any'
  pattern?: string
  className?: string
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-bold text-slate-700">
        {label}{required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        minLength={minLength}
        step={step}
        pattern={pattern}
        className="min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-slate-700">
        {label}{required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}

function EditableTable({
  rowHeader,
  headers,
  rows,
}: {
  rowHeader: string
  headers: string[]
  rows: {
    label: string
    unit?: string
    fields: { label: string; name: string; type?: 'text' | 'number'; min?: number; step?: number | 'any' }[]
  }[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-emerald-50 text-[11px] font-bold uppercase tracking-wide text-emerald-950">
          <tr>
            <th className="border-b border-r border-emerald-100 px-3 py-2.5">{rowHeader}</th>
            {headers.map((header) => <th key={header} className="border-b border-r border-emerald-100 px-3 py-2.5 last:border-r-0">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="odd:bg-white even:bg-slate-50">
              <th scope="row" className="min-w-52 border-b border-r border-slate-100 px-3 py-2 text-left font-semibold text-slate-700">{row.label}</th>
              {row.fields.map((field) => (
                <td key={field.name} className="min-w-36 border-b border-r border-slate-100 px-2 py-1.5 last:border-r-0">
                  <input
                    name={field.name}
                    type={field.type ?? 'text'}
                    min={field.min}
                    step={field.step}
                    aria-label={`${row.label}: ${field.label}`}
                    className="min-h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-sm text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </td>
              ))}
              {row.unit !== undefined && <td className="border-b border-slate-100 px-3 py-2.5 text-slate-600">{row.unit}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ChoiceGroup({
  legend,
  name,
  options,
  required = false,
}: {
  legend: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-bold text-slate-700">
        {legend}{required && <span aria-hidden="true"> *</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option, index) => (
          <label key={option} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-2.5 text-sm leading-5 text-slate-700">
            <input
              type="radio"
              name={name}
              value={option}
              required={required && index === 0}
              className="mt-1 accent-emerald-700"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function CustomerEnquiryPage() {
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const percentages = paymentMilestones.map((_, index) =>
      Number(formData.get(`payment_percentage_${index + 1}`))
    )
    const totalPercentage = percentages.reduce((total, percentage) => total + percentage, 0)
    const lastPercentageInput = form.elements.namedItem(`payment_percentage_${paymentMilestones.length}`)

    if (lastPercentageInput instanceof HTMLInputElement) {
      lastPercentageInput.setCustomValidity(
        Math.abs(totalPercentage - 100) < 0.001 ? '' : 'Payment milestone percentages must add up to 100%.'
      )
      if (!form.reportValidity()) return
    }

    const body = [
      'AEROSUN ENERGY SOLAR PROJECT QUOTATION',
      'Technical & Commercial Proposal',
      '',
      ...Array.from(formData.entries()).map(([key, value]) => `${key.replaceAll('_', ' ')}: ${String(value)}`),
    ].join('\n')
    const subject = encodeURIComponent(`Solar Project Quotation - ${String(formData.get('customer_name'))}`)
    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${subject}&body=${encodeURIComponent(body)}`
    setFeedback('Your completed quotation has been prepared in your email app.')
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-md font-bold uppercase tracking-[0.18em] text-emerald-700">Customer Enquiry</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Solar Project Quotation</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Complete the technical and commercial proposal with the customer and project details.
        </p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <form
          onSubmit={handleSubmit}
          onInput={(event) => {
            const target = event.target
            if (target instanceof HTMLInputElement && target.name.startsWith('payment_percentage_')) {
              const lastPercentageInput = event.currentTarget.elements.namedItem(
                `payment_percentage_${paymentMilestones.length}`
              )
              if (lastPercentageInput instanceof HTMLInputElement) lastPercentageInput.setCustomValidity('')
            }
          }}
          className="space-y-6"
        >
      <header className="rounded-2xl bg-[#123c48] p-5 text-white sm:p-7">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">AeroSun Energy Private Limited</p>
        <h1 className="mt-2 text-2xl font-black uppercase leading-tight sm:text-4xl">Solar Project Quotation</h1>
        <p className="mt-2 text-md font-semibold text-emerald-100">Power from Sun, Wind, Water, Fire.</p>
        <p className="mt-3 text-sm uppercase tracking-wide text-emerald-50/80">Solar Energy System – Technical &amp; Commercial Proposal</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <TextField label="Quotation Reference" name="quotation_reference" placeholder="ASE-SOL-QTN-0001" required />
          <TextField label="Revision" name="quotation_revision" placeholder="00" required pattern="[0-9]{2}" />
          <TextField label="Quotation Date" name="quotation_date" type="date" required />
          <TextField label="Valid Until" name="quotation_valid_until" type="date" required />
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <SectionTitle number="01" title="Company Details" />
        <div className="grid gap-3 text-md text-slate-700 sm:grid-cols-2">
          <p><strong>AeroSun Energy Private Limited</strong></p>
          <p><strong>CIN:</strong> U35106AP2026PTC128748</p>
          <p className="sm:col-span-2"><strong>Registered Office:</strong> D.No. 11-184, Gollavanigunta, T.N. Pallem, Tirupati, Andhra Pradesh – 517501, India.</p>
          <p><strong>MSME/Udyam:</strong> Registered</p>
          <p><strong>Startup India:</strong> DPIIT Recognised</p>
          <p><strong>Website:</strong> aerosunenergy.in</p>
          <p><strong>Email:</strong> customercare@aerosunenergy.in</p>
          <p><strong>Phone:</strong> +91 8099181075</p>
        </div>
      </section>

      <section className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5">
        <SectionTitle number="02" title="Customer Details" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TextField label="Customer Name" name="customer_name" required minLength={2} placeholder="Full name" />
          <TextField label="Company / Organisation" name="company_organisation" placeholder="If applicable" />
          <TextField label="Contact Person" name="contact_person" required minLength={2} />
          <TextField label="Mobile Number" name="mobile_number" type="tel" required minLength={10} pattern="[0-9+() -]{10,}" placeholder="+91 98765 43210" />
          <TextField label="Email Address" name="customer_email" type="email" required placeholder="name@example.com" />
          <TextField label="Customer Enquiry Reference" name="customer_enquiry_reference" />
          <TextField label="Installation Address" name="installation_address" required className="sm:col-span-2 lg:col-span-3" />
          <TextField label="District" name="district" required />
          <TextField label="State" name="state" required />
          <TextField label="PIN Code" name="pin_code" required pattern="[0-9]{6}" placeholder="6-digit PIN code" />
          <SelectField label="Customer Category" name="customer_category" required options={['Residential', 'Commercial', 'Industrial', 'Agricultural']} />
          <TextField label="Site Survey Date" name="site_survey_date" type="date" />
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
        <SectionTitle number="03" title="Project Overview" />
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField label="Project Name" name="project_name" required placeholder="Solar Power Installation" />
          <TextField label="Proposed System Capacity (kWp)" name="proposed_capacity_kwp" type="number" min={0.01} step="any" required />
          <ChoiceGroup
            legend="System Configuration"
            name="system_configuration"
            required
            options={[
              'On-Grid Solar System',
              'Off-Grid Solar System',
              'Hybrid Solar System',
              'Grid-Connected Solar with Battery Backup',
              'Ground-Mounted Solar System',
              'Rooftop Solar System',
            ]}
          />
          <ChoiceGroup
            legend="Installation Type"
            name="installation_type"
            required
            options={['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Institutional']}
          />
        </div>
        <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
          <h3 className="text-md font-bold text-slate-900">Project Objective</h3>
          <p className="mt-2 text-md leading-6 text-slate-700">
            The proposed solar energy system is intended to utilise solar photovoltaic technology to generate
            electricity for the customer’s premises. The final system configuration will be based on electricity
            consumption, available installation area, site conditions, equipment specifications and applicable
            electrical requirements.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
        <SectionTitle number="04" title="Proposed System Technical Specifications" />
        <EditableTable
          rowHeader="Parameter"
          headers={['Proposed Specification', 'Unit']}
          rows={technicalSpecifications.map((item) => ({
            label: item.label,
            unit: 'unit' in item ? item.unit : '',
            fields: [{
              label: item.label,
              name: item.name,
              type: 'type' in item && item.type === 'number' ? 'number' : 'text',
              min: 'type' in item && item.type === 'number' ? 0 : undefined,
              step: 'type' in item && item.type === 'number' ? 'any' : undefined,
            }],
          }))}
        />
        <p className="mt-3 text-sm leading-5 text-slate-600">
          Final specifications will be confirmed in the approved technical design and equipment datasheets.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <SectionTitle number="05" title="Bill of Materials (BOM)" />
        <EditableTable
          rowHeader="Product / Component"
          headers={['Brand / Model', 'Specification', 'Quantity']}
          rows={billOfMaterials.map((item, index) => ({
            label: `${index + 1}. ${item}`,
            fields: [
              { label: item, name: `bom_${index + 1}_brand_model` },
              { label: item, name: `bom_${index + 1}_specification` },
              { label: item, name: `bom_${index + 1}_quantity`, type: 'number', min: 0, step: 'any' },
            ],
          }))}
        />
        <p className="mt-3 text-sm leading-5 text-slate-600">
          All equipment supplied will be subject to the specifications and commercial terms agreed in the final
          purchase order.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
        <SectionTitle number="06" title="Project Price Breakdown" />
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] border-collapse text-md">
            <thead className="bg-emerald-100 text-left text-sm font-bold uppercase text-emerald-950">
              <tr><th className="px-3 py-3">S.No.</th><th className="px-3 py-3">Description</th><th className="px-3 py-3">Amount (₹)</th></tr>
            </thead>
            <tbody>
              {priceItems.map((item, index) => (
                <tr key={item} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2">{item}</td>
                  <td className="px-3 py-2"><input name={`price_item_${index + 1}`} type="number" min={0} step="0.01" aria-label={`${item} amount in rupees`} className="min-h-9 w-full rounded-md border border-slate-200 px-2" /></td>
                </tr>
              ))}
              {[
                ['Subtotal', 'price_subtotal'],
                ['GST', 'price_gst'],
                ['Other Applicable Charges', 'price_other_charges'],
                ['TOTAL PROJECT COST', 'price_total'],
              ].map(([label, name]) => (
                <tr key={name} className="border-t border-slate-200 bg-white font-semibold">
                  <th colSpan={2} className="px-3 py-2 text-left">{label}</th>
                  <td className="px-3 py-2"><input name={name} type="number" min={0} step="0.01" required={name === 'price_total'} aria-label={`${label} in rupees`} className="min-h-9 w-full rounded-md border border-slate-200 px-2" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <TextField label="Total Amount in Words" name="total_amount_words" required placeholder="Rupees … only" />
          <TextField label="GST Treatment / Notes" name="gst_treatment" placeholder="GST charged as applicable to goods and services" />
        </div>
        <p className="mt-3 text-sm leading-5 text-slate-600">
          GST will be charged as applicable to the individual goods and services and the agreed supply structure.
        </p>
      </section>

      <section className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5">
        <SectionTitle number="07" title="Estimated Energy Generation" />
        <EditableTable
          rowHeader="Parameter"
          headers={['Estimated Value', 'Unit']}
          rows={[
            ['Installed Solar Capacity', 'installed_capacity', 'kWp'],
            ['Estimated Daily Generation', 'daily_generation', 'kWh'],
            ['Estimated Monthly Generation', 'monthly_generation', 'kWh'],
            ['Estimated Annual Generation', 'annual_generation', 'kWh'],
            ['Estimated Self-Consumption', 'self_consumption', '%'],
            ['Estimated Grid Export', 'grid_export', 'kWh'],
            ['Estimated System Performance Ratio', 'performance_ratio', '%'],
          ].map(([label, name, unit]) => ({
            label,
            unit,
            fields: [{ label, name, type: 'number', min: 0, step: 'any' }],
          }))}
        />
        <h3 className="mb-3 mt-5 text-md font-bold text-slate-900">Generation assumptions</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Site location', 'generation_site_location'],
            ['Solar resource assessment', 'solar_resource_assessment'],
            ['Panel orientation', 'panel_orientation'],
            ['Panel tilt', 'panel_tilt'],
            ['Shading assessment', 'shading_assessment'],
            ['System losses considered', 'system_losses'],
          ].map(([label, name]) => <TextField key={name} label={label} name={name} />)}
        </div>
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-5 text-amber-950">
          Actual electricity generation will vary depending on solar irradiation, weather, shading, module
          temperature, equipment performance, maintenance and grid availability. These estimates are not guaranteed
          generation figures.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <SectionTitle number="08" title="Estimated Financial Benefits" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {financialParameters.map((parameter) => (
            <TextField
              key={parameter.name}
              label={`${parameter.label} (${parameter.unit})`}
              name={parameter.name}
              type="number"
              min={0}
              step="any"
            />
          ))}
        </div>
        <h3 className="mb-3 mt-5 text-md font-bold text-slate-900">Calculation assumptions</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TextField label="Applicable Electricity Tariff (₹/kWh)" name="electricity_tariff" type="number" min={0} step="any" />
          <TextField label="Estimated Self-Consumption (%)" name="financial_self_consumption" type="number" min={0} max={100} step="any" />
          <TextField label="Export Compensation, if applicable (₹/kWh)" name="export_compensation" type="number" min={0} step="any" />
          <TextField label="Annual Performance Degradation Assumption (%)" name="annual_degradation" type="number" min={0} max={100} step="any" />
          <SelectField label="Applicable Fixed Charges and Demand Charges" name="fixed_demand_charges" options={['Excluded', 'Included']} />
        </div>
        <p className="mt-4 text-sm leading-5 text-slate-600">
          Savings and payback estimates are indicative and depend on actual consumption, tariffs, self-consumption,
          applicable export arrangements and system performance.
        </p>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
        <SectionTitle number="09" title="Project Execution Scope" />
        <p className="mb-4 text-md text-slate-600">Select whether each activity is included or excluded in the offer.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scopeActivities.map((activity, index) => (
            <SelectField
              key={activity}
              label={activity}
              name={`scope_activity_${index + 1}`}
              options={['Included', 'Excluded']}
            />
          ))}
        </div>
        <h3 className="mb-3 mt-6 text-md font-bold text-slate-900">Proposed Execution Schedule</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scheduleActivities.map((activity, index) => (
            <TextField key={activity} label={`${activity} – Estimated Duration`} name={`schedule_duration_${index + 1}`} placeholder="e.g. 5 working days" />
          ))}
        </div>
        <p className="mt-4 text-sm leading-5 text-slate-600">
          The execution schedule will begin after the agreed advance payment, technical approvals and site readiness,
          as applicable.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
        <SectionTitle number="10" title="Exclusions" />
        <p className="mb-4 text-md text-slate-600">Unless specifically mentioned in the commercial offer, the following are excluded:</p>
        <ol className="grid gap-2 sm:grid-cols-2">
          {exclusions.map((item, index) => (
            <li key={item} className="flex gap-3 rounded-lg bg-white p-3 text-sm leading-5 text-slate-700">
              <span className="font-mono font-bold text-amber-700">{index + 1}.</span>{item}
            </li>
          ))}
        </ol>
        <label className="mt-4 block">
          <span className="mb-1.5 block text-sm font-bold text-slate-700">Additional work / separately priced items</span>
          <textarea name="additional_work" rows={2} placeholder="Any additional work will be communicated and priced separately with customer approval." className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md" />
        </label>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <SectionTitle number="11" title="Warranty Details" />
        <EditableTable
          rowHeader="Equipment"
          headers={['Manufacturer / Warranty Provider', 'Warranty Period']}
          rows={warrantyItems.map((item, index) => ({
            label: item,
            fields: [
              { label: `${item} manufacturer or provider`, name: `warranty_provider_${index + 1}` },
              { label: `${item} warranty period`, name: `warranty_period_${index + 1}` },
            ],
          }))}
        />
        <p className="mt-4 text-sm leading-5 text-slate-600">
          Warranty coverage is subject to the respective manufacturer’s or service provider’s written warranty terms.
          AeroSun Energy will communicate the applicable warranty arrangements before order confirmation. No warranty
          period should be assumed unless stated in the final quotation or supporting warranty document.
        </p>
      </section>

      <section className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5">
        <SectionTitle number="12" title="Payment Terms" />
        <p className="mb-4 text-md text-slate-600">Proposed payment schedule (percentages must total 100%).</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {paymentMilestones.map((milestone, index) => (
            <div key={milestone} className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2">
              <p className="self-center text-md font-semibold text-slate-700">{milestone}</p>
              <TextField label="Payment Percentage (%)" name={`payment_percentage_${index + 1}`} type="number" min={0} max={100} step={0.01} required />
              <TextField label="Payment Amount (₹)" name={`payment_amount_${index + 1}`} type="number" min={0} step={0.01} required className="sm:col-span-2" />
            </div>
          ))}
        </div>
        <p className="mt-3 text-right text-md font-black text-emerald-900">Total payment percentage: 100%</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TextField label="Account Name" name="bank_account_name" placeholder="AeroSun Energy Private Limited" />
          <TextField label="Bank Name" name="bank_name" />
          <TextField label="Account Number" name="bank_account_number" />
          <TextField label="IFSC Code" name="bank_ifsc" />
          <TextField label="Branch" name="bank_branch" />
        </div>
        <p className="mt-3 text-sm italic text-slate-600">
          Bank details will be provided through an authenticated company invoice or payment document.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5">
        <SectionTitle number="13" title="Quotation Terms and Conditions" />
        <ol className="grid gap-2 sm:grid-cols-2">
          {termsAndConditions.map((term, index) => (
            <li key={term} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-5 text-slate-700">
              <span className="font-mono font-bold text-emerald-700">{index + 1}.</span>{term}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
        <SectionTitle number="14" title="Customer Acceptance" />
        <p className="mb-4 text-md leading-6 text-slate-700">
          I / We have reviewed the technical proposal, equipment specifications, project price, payment schedule and
          terms and conditions. I / We agree to proceed with the proposed project subject to the final approved scope
          and purchase agreement.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField label="Customer Name" name="acceptance_customer_name" required minLength={2} />
          <TextField label="Signature / Name of Signatory" name="customer_signature" required minLength={2} />
          <TextField label="Date" name="customer_acceptance_date" type="date" required />
          <TextField label="Place" name="customer_acceptance_place" required />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <SectionTitle number="15" title="AeroSun Energy Authorisation" />
        <p className="mb-4 text-md font-semibold text-slate-800">For AeroSun Energy Private Limited</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField label="Authorised Representative" name="authorised_representative" required minLength={2} />
          <TextField label="Designation" name="authorised_designation" required />
          <TextField label="Authorised Signature / Name" name="authorised_signature" required minLength={2} />
          <TextField label="Authorisation Date" name="authorisation_date" type="date" required />
        </div>
        <label className="mt-3 block">
          <span className="mb-1.5 block text-sm font-bold text-slate-700">Company Seal</span>
          <input name="company_seal" placeholder="Company seal / stamp details" className="min-h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md" />
        </label>
      </section>

      <section className="rounded-2xl bg-[#123c48] p-5 text-white sm:p-7">
        <h2 className="text-xl font-black uppercase tracking-wide">Thank You</h2>
        <p className="mt-2 font-semibold">AeroSun Energy Private Limited</p>
        <p className="mt-1 text-md text-emerald-100">Power from Sun, Wind, Water, Fire.</p>
        <p className="mt-4 text-sm leading-6 text-emerald-50/80">
          aerosunenergy.in · customercare@aerosunenergy.in · +91 8099181075
        </p>
        <p className="mt-2 font-mono text-sm text-emerald-100/70">Document Reference: ASE-SOL-QTN-0001 | Revision 00</p>
      </section>

      <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-start gap-3 text-md leading-6 text-slate-700">
          <input type="checkbox" name="accept_terms" value="Accepted" required className="mt-1 h-4 w-4 accent-emerald-700" />
          I have reviewed the quotation details and accept the terms and conditions.
        </label>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-md font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">
          Validate &amp; Prepare Quotation
        </button>
      </div>
      <p className="text-right text-sm text-slate-500">Required fields are marked with an asterisk. Your browser will validate the form before submission.</p>
      {feedback && <p role="status" aria-live="polite" className="rounded-lg bg-emerald-50 p-3 text-md font-semibold text-emerald-800">{feedback}</p>}
        </form>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
          <h2 className="mb-4 text-md font-black uppercase tracking-wide text-slate-900">Quotation Sections</h2>
          <nav aria-label="Quotation sections">
            <ol className="space-y-2">
              {quotationSections.map((section, index) => {
                const number = String(index + 1).padStart(2, '0')
                return (
                  <li key={number}>
                    <a
                      href={`#quotation-section-${number}`}
                      className="flex gap-2 rounded-lg px-2 py-1.5 text-sm leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <span className="font-mono font-bold text-emerald-700">{number}</span>
                      <span>{section}</span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </nav>
        </aside>
      </div>
    </main>
  )
}
