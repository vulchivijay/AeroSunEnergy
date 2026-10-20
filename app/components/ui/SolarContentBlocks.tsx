import type { ReactNode } from 'react'

export type AccentTone = 'emerald' | 'amber' | 'sky' | 'violet'

export const solarOfferings = [
  {
    title: 'Solar Rooftop Systems',
    description: 'On-grid power plants for homes and businesses.',
    points: [
      'On-grid, off-grid and hybrid configurations',
      'Net metering with state DISCOM',
      'PM Surya Ghar subsidy assistance',
      'TATA Power Solar premium panels',
    ],
    accent: 'emerald' as const,
  },
  {
    title: 'Solar Thermal — Water Heating Solutions',
    description:
      'Solar Hot Water & Heat Pump — efficient, eco-friendly hot water for homes, hotels, hospitals, hostels, commercial establishments and industries.',
    points: [
      'Available in capacities from 100 litres per day (LPD)',
      'Choice of pressurised and non-pressurised models',
      'High-performance BIS-certified solar collectors',
      'Cuts electricity use by minimising geyser usage',
    ],
    accent: 'amber' as const,
  },
  {
    title: 'Solar Street Lights',
    description: 'All-in-one lighting powered entirely by sunlight.',
    points: [
      'Integrated all-in-one luminaires starting from 12W',
      'Auto dusk-to-dawn operation',
      'Lithium-ion storage, 5+ year life',
      'Zero electricity bills',
    ],
    accent: 'sky' as const,
  },
  {
    title: 'Solar Fencing',
    description: 'Solar-powered electric fences for farms and estates.',
    points: [
      'Solar-charged energiser',
      'Up to 10 km perimeter on a single charger',
      'Audible alarm and battery backup',
      'Crop and livestock protection',
    ],
    accent: 'violet' as const,
  },
  {
    title: 'Solar Pumpsets',
    description: 'Diesel-free water pumping for agriculture.',
    points: [
      'AC and DC pump configurations',
      'MNRE-approved controllers',
      'PM-KUSUM scheme assistance',
      '5-year manufacturer warranty',
    ],
    accent: 'amber' as const,
  },
  {
    title: 'Operation & Maintenance (AMC)',
    description: 'Annual care to keep your plant generating at peak.',
    points: [
      'Quarterly preventive maintenance',
      'Performance ratio monitoring',
      '24x7 priority support',
      'Spare parts and inverter service',
    ],
    accent: 'emerald' as const,
  },
]

export const solarRooftopBenefits = [
  {
    title: 'Reduce electricity bills by up to 80–90%',
    description: 'Lower your monthly spend while improving energy certainty.',
  },
  {
    title: '25+ years of solar panel life',
    description: 'Long operational life with minimal replacement cycles.',
  },
  {
    title: 'Low maintenance and high reliability',
    description: 'Designed for stable long-term generation with simple upkeep.',
  },
  {
    title: 'Environment-friendly renewable energy',
    description: 'Reduce your environmental impact with clean power generation.',
  },
  {
    title: 'Increase property value',
    description: 'Improve the value and appeal of your property with solar-ready infrastructure.',
  },
  {
    title: 'Net Metering facility',
    description: 'Export excess power to the grid and earn credits where applicable.',
  },
]

export const solarWhySolar = [
  {
    title: 'Reduce Carbon Emissions',
    description: 'Every kW of solar offsets ~1.2 tonnes of CO₂ a year — shrinking your carbon footprint.',
  },
  {
    title: 'Eco-Friendly',
    description: 'Clean, renewable energy that protects nature for generations to come.',
  },
  {
    title: 'Cost Saving',
    description: 'Slash electricity bills by 70–90% from day one and recover your investment in 4–6 years.',
  },
  {
    title: 'Energy Independence',
    description: 'Generate your own power and cut reliance on the grid and rising tariffs.',
  },
  {
    title: 'Unlimited Energy',
    description: 'Sunlight is infinite — Tirupati enjoys 300+ sunny days every year.',
  },
  {
    title: 'Continuous Supply',
    description: 'Hybrid systems with battery backup keep critical loads running through outages.',
  },
]

export const solarSubsidyCards = [
  {
    label: 'For Residential Households',
    value: '₹ 30,000',
    note: 'per kW up to 2 kW',
  },
  {
    label: 'Additional Capacity',
    value: '₹ 18,000',
    note: 'per kW for additional capacity up to 3 kW',
  },
  {
    label: 'Maximum Total Subsidy',
    value: '₹ 78,000',
    note: 'maximum total subsidy for systems larger than 3 kW',
  },
  {
    label: 'For GHS / RWA',
    value: '₹ 18,000',
    note: 'per kW • common facilities incl. EV charging, up to 500 kW',
  },
]

export const solarCapacityRows = [
  { usage: '0–150 units', capacity: '1–2 kW', tag: 'Ideal for small homes' },
  { usage: '150–300 units', capacity: '2–3 kW', tag: 'Balanced family needs' },
  { usage: '> 300 units', capacity: 'Above 3 kW', tag: 'High-consumption homes' },
]

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-700">{children}</p>
  )
}

export function FeatureCard({
  title = 'Solar Rooftop Systems',
  description = 'On-grid power plants for homes and businesses.',
  points = [
    'On-grid, off-grid and hybrid configurations',
    'Net metering with state DISCOM',
    'PM Surya Ghar subsidy assistance',
    'TATA Power Solar premium panels',
  ],
  accent = 'emerald',
}: {
  title?: string
  description?: string
  points?: string[]
  accent?: AccentTone
}) {
  const accentClasses: Record<AccentTone, string> = {
    emerald: 'border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] text-emerald-700',
    amber: 'border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] text-amber-700',
    sky: 'border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] text-sky-700',
    violet: 'border-violet-200 bg-[linear-gradient(135deg,#f5f3ff_0%,#ffffff_100%)] text-violet-700',
  }

  return (
    <article className="group rounded-[1.9rem] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_45px_-26px_rgba(15,23,42,0.30)]">
      <div className={`mb-4 inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] ${accentClasses[accent]}`}>
        Solar solution
      </div>
      <h3 className="text-2xl font-black tracking-[-0.05em] text-slate-900">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-700">{description}</p>
      {points.length > 0 && (
        <ul className="mt-5 space-y-3 text-base text-slate-700">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export function BenefitCard({
  title = 'Reduce electricity bills by up to 80–90%',
  description = 'Lower your monthly spend while improving energy certainty.',
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f0fdf4_100%)] p-5 shadow-[0_18px_28px_-24px_rgba(15,23,42,0.3)]">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-lg font-black text-emerald-700">
        ✓
      </div>
      <h3 className="text-xl font-black tracking-[-0.04em] text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
    </div>
  )
}

export function SubsidyCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#ecfdf5_100%)] p-5 shadow-[0_18px_28px_-24px_rgba(15,23,42,0.24)]">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <div className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900">{value}</div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{note}</p>
    </div>
  )
}

export function InfoPanel({
  title = 'Key Benefits',
  content = [
    'Reduce electricity bills by up to 80–90%',
    '25+ years of solar panel life',
    'Low maintenance and high reliability',
    'Environment-friendly renewable energy',
  ],
  accent = 'emerald',
}: {
  title?: string
  content?: string[]
  accent?: 'emerald' | 'amber' | 'sky'
}) {
  const theme: Record<'emerald' | 'amber' | 'sky', string> = {
    emerald: 'border-emerald-200 bg-[linear-gradient(135deg,#ecfdf5_0%,#ffffff_100%)] text-emerald-900',
    amber: 'border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_100%)] text-amber-900',
    sky: 'border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] text-sky-900',
  }

  return (
    <div className={`rounded-[1.75rem] border p-5 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.28)] ${theme[accent]}`}>
      <h3 className="text-xl font-black tracking-[-0.04em]">{title}</h3>
      <ul className="mt-4 space-y-2 text-base leading-7">
        {content.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-current" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CapacityTable() {
  return (
    <div className="overflow-x-auto rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_28px_-24px_rgba(15,23,42,0.28)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <div className="min-w-[620px]">
        <div className="grid border-b border-slate-200 bg-[linear-gradient(90deg,#ecfdf5_0%,#ffffff_50%,#eff6ff_100%)] text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 md:grid-cols-3">
          <div className="px-4 py-3">Average monthly usage</div>
          <div className="px-4 py-3">Suitable rooftop capacity</div>
          <div className="px-4 py-3">Best fit</div>
        </div>
        {solarCapacityRows.map((row) => (
          <div key={row.usage} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-3 md:gap-0">
            <div className="font-semibold text-slate-900">{row.usage}</div>
            <div className="font-black text-emerald-700">{row.capacity}</div>
            <div>{row.tag}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
