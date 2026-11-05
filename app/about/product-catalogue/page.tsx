import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Sun,
  Tractor,
  Wind,
  Zap,
} from 'lucide-react'
import DownloadCataloguePdf from './DownloadCataloguePdf'

const residentialSuitableFor = [
  'Independent houses',
  'Villas',
  'Residential buildings',
  'Apartments, subject to suitable common-area arrangements',
  'Residential properties with suitable rooftop space',
]

const residentialBenefits = [
  'Renewable electricity generation.',
  'Potential reduction in grid electricity purchases.',
  'Better utilisation of rooftop space.',
  'Optional battery backup, where appropriately designed.',
  'Reduced dependence on conventional energy sources.',
]

const commercialSuitableFor = [
  'Retail shops',
  'Offices',
  'Warehouses',
  'Manufacturing units',
  'Hotels',
  'Hospitals',
  'Educational institutions',
  'Commercial buildings',
]

const commercialSolutions = [
  'Grid-connected commercial solar.',
  'Industrial rooftop solar.',
  'Solar systems for daytime energy consumption.',
  'Hybrid solar with battery storage.',
  'Customised energy assessment.',
]

const commercialBenefits = [
  'Potential reduction in electricity expenditure.',
  'Better utilisation of available rooftop space.',
  'Reduced dependence on conventional electricity.',
  'Improved energy planning.',
  'Support for corporate sustainability objectives.',
]

const commercialProcess = [
  'Understand electricity consumption.',
  'Review electricity bills.',
  'Conduct site assessment.',
  'Evaluate rooftop suitability.',
  'Prepare system design.',
  'Provide a commercial proposal.',
  'Coordinate installation and commissioning through qualified partners.',
]

const agriculturalApplications = [
  'Solar irrigation pumps.',
  'Agricultural water pumping.',
  'Farm lighting.',
  'Off-grid farm electricity.',
  'Agricultural energy systems.',
  'Solar-powered rural applications.',
]

const agriculturalBenefits = [
  'Utilisation of renewable solar energy.',
  'Potential reduction in grid or diesel electricity dependence.',
  'Application in suitable remote agricultural locations.',
  'Customised system sizing.',
  'Reduced conventional energy consumption.',
]

const offGridSuitableFor = [
  'Remote houses',
  'Agricultural fields',
  'Farmhouses',
  'Rural facilities',
  'Small commercial establishments',
  'Isolated buildings',
  'Suitable telecom and monitoring applications',
]

const offGridComponents = [
  'Solar PV modules.',
  'Solar charge controller or compatible inverter.',
  'Battery storage.',
  'Protection equipment.',
  'Distribution panel.',
  'Electrical wiring and accessories.',
]

const offGridDesignFactors = [
  'Connected load.',
  'Daily energy consumption.',
  'Peak power demand.',
  'Required backup duration.',
  'Available solar resource.',
  'Battery capacity.',
  'Future expansion requirements.',
]

const batteryApplications = [
  'Residential backup',
  'Commercial backup',
  'Off-grid systems',
  'Solar hybrid installations',
  'Remote power applications',
]

const batterySelection = [
  'Customer load profile.',
  'Backup requirements.',
  'Required energy capacity.',
  'Battery chemistry.',
  'Inverter compatibility.',
  'Battery management and protection.',
  'Warranty and service arrangements.',
]

const windApplications = [
  'Agricultural properties',
  'Rural locations',
  'Remote facilities',
  'Small businesses',
  'Suitable distributed-energy installations',
]

const windFocus = [
  'Customised generator capacities.',
  'Permanent-magnet generator technology.',
  'Vertical-axis wind turbine concepts.',
  'Mechanical and electrical integration.',
  'Low-wind-speed performance investigation.',
  'System monitoring and testing.',
]

const windConfiguration = [
  '3 kW target electrical output.',
  'Hybrid Savonius–Darrieus vertical-axis turbine.',
  'Three external helical Darrieus blades.',
  'Central Savonius starter rotor.',
  'Direct-drive permanent-magnet generator concept.',
  'Electrical power conversion and protection.',
]

const hybridArchitecture = [
  'Solar PV modules.',
  'Wind generator.',
  'Compatible power conversion equipment.',
  'Battery storage.',
  'Energy management system.',
  'Electrical protection.',
  'Monitoring and control.',
]

const hybridApplications = [
  'Farms',
  'Remote buildings',
  'Rural facilities',
  'Small commercial operations',
  'Off-grid installations',
  'Suitable institutional applications',
]

const hybridBenefits = [
  'Utilisation of two renewable-energy sources.',
  'Opportunity to diversify electricity generation.',
  'Battery integration.',
  'Customised energy architecture.',
  'Reduced dependence on a single generation source.',
]

const consultationServices = [
  'Electricity consumption assessment.',
  'Solar rooftop suitability assessment.',
  'Wind resource assessment coordination.',
  'Agricultural energy requirement assessment.',
  'Off-grid system planning.',
  'Solar–wind hybrid feasibility.',
  'Preliminary system sizing.',
  'Equipment selection.',
  'Project cost estimation.',
  'Energy-generation estimation.',
]

const projectProcess = [
  {
    title: 'Customer enquiry',
    detail: 'Understand the customer’s energy needs.',
  },
  {
    title: 'Requirement assessment',
    detail: 'Review electricity bills, load details and usage patterns.',
  },
  {
    title: 'Site evaluation',
    detail: 'Assess rooftop, land, solar exposure, wind conditions and installation requirements.',
  },
  {
    title: 'System design',
    detail: 'Prepare a suitable preliminary technical configuration.',
  },
  {
    title: 'Commercial proposal',
    detail: 'Provide estimated project cost, scope and expected performance assumptions.',
  },
  {
    title: 'Procurement and execution',
    detail: 'Coordinate equipment procurement and installation through qualified partners.',
  },
  {
    title: 'Testing and handover',
    detail: 'Conduct applicable checks, commissioning and customer handover.',
  },
]

const whyChooseAeroSun = [
  'Solar and wind energy solutions.',
  'Customised system planning.',
  'Agricultural and rural energy applications.',
  'Small wind-generator development.',
  'Solar–wind hybrid technology.',
  'Equipment integration.',
  'Quality-conscious supplier selection.',
  'Customer-oriented technical assessment.',
]

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
}) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className={`font-mono text-md font-bold uppercase tracking-[0.2em] ${inverse ? 'text-lime-300' : 'text-emerald-700 dark:text-emerald-300'}`}>
        {number} / {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${inverse ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${inverse ? 'text-emerald-50/80' : 'text-slate-600 dark:text-slate-300'}`}>{description}</p>
      )}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-md leading-6 text-slate-700 dark:text-slate-200 sm:text-base">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function DetailCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04] sm:p-6">
      <h3 className="mb-4 text-base font-bold text-slate-950 dark:text-white">{title}</h3>
      {children}
    </div>
  )
}

export default function ProductCataloguePage() {
  return (
    <main className="printable-about-document overflow-hidden bg-[#f5f6ef] text-slate-900 dark:bg-[#101b17] dark:text-slate-100">
      <section className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-md font-bold uppercase tracking-[0.2em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300" aria-hidden="true" />
              Product &amp; Services Catalogue · 2026
            </p>
            <div data-print-hide className="sm:ml-auto">
              <DownloadCataloguePdf />
            </div>
          </div>
          <h1 className="mt-7 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-[0.045em] sm:text-6xl lg:text-7xl">
            Solar &amp; Renewable
            <span className="mt-2 block text-emerald-300">Energy Solutions</span>
          </h1>
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.22em] text-emerald-100/75 sm:text-xl">
            Power from Sun, Wind, Water, Fire.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
            Energy requirements differ for every home, farm and business. We aim to provide customised renewable-energy
            solutions designed around electricity consumption, site conditions, available resources and customer
            requirements, with a portfolio focused on solar, wind-energy development, battery storage and integrated
            renewable-energy systems.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Homes', icon: Sun, description: 'Residential rooftop solar' },
              { label: 'Businesses', icon: Building2, description: 'Commercial & industrial' },
              { label: 'Agriculture', icon: Tractor, description: 'Farm & water pumping' },
              { label: 'Integrated systems', icon: Zap, description: 'Wind, storage & hybrid' },
            ].map(({ label, icon: Icon, description }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <Icon className="h-5 w-5 text-lime-300" aria-hidden="true" />
                <p className="mt-4 text-md font-bold uppercase tracking-[0.16em] text-emerald-100/60">{label}</p>
                <p className="mt-1 text-md font-semibold text-white">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:px-10">
        <section>
          <SectionHeading
            number="01"
            eyebrow="Residential rooftop solar"
            title="Clean energy for your home."
            description="Generate electricity from sunlight and reduce your dependence on conventional grid electricity."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title="Suitable for"><BulletList items={residentialSuitableFor} /></DetailCard>
            <DetailCard title="System options">
              <div className="space-y-4 text-md leading-6 text-slate-700 dark:text-slate-200">
                <p><strong className="text-slate-950 dark:text-white">Grid-connected solar:</strong> A solar PV system connected to the electricity grid, subject to applicable DISCOM approvals and regulations.</p>
                <p><strong className="text-slate-950 dark:text-white">Off-grid solar:</strong> A solar system combined with battery storage for applications requiring independent electricity supply.</p>
                <p><strong className="text-slate-950 dark:text-white">Hybrid solar:</strong> A solar system integrated with suitable energy storage and grid or backup arrangements.</p>
              </div>
            </DetailCard>
            <DetailCard title="Key benefits"><BulletList items={residentialBenefits} /></DetailCard>
            <DetailCard title="Customisation">
              <p className="text-md leading-6 text-slate-700 dark:text-slate-200">
                System capacity is determined by electricity consumption, rooftop area, solar exposure, budget and
                applicable regulations.
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Bringing solar power closer to your home.
          </p>
        </section>

        <section>
          <SectionHeading
            number="02"
            eyebrow="Commercial & industrial rooftop solar"
            title="Smarter energy solutions for businesses."
            description="Commercial establishments and industries can use rooftop solar to generate electricity for their operations."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title="Suitable for"><BulletList items={commercialSuitableFor} /></DetailCard>
            <DetailCard title="Solutions"><BulletList items={commercialSolutions} /></DetailCard>
            <DetailCard title="Key benefits"><BulletList items={commercialBenefits} /></DetailCard>
            <DetailCard title="Our approach">
              <ol className="space-y-3">
                {commercialProcess.map((step, index) => (
                  <li key={step} className="flex gap-3 text-md leading-6 text-slate-700 dark:text-slate-200">
                    <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">{String(index + 1).padStart(2, '0')}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Supporting businesses with renewable energy.
          </p>
        </section>

        <section>
          <SectionHeading
            number="03"
            eyebrow="Agricultural solar energy"
            title="Solar power for agriculture."
            description="Agricultural activities require dependable electricity for irrigation, water pumping and other farm operations. We aim to support farmers with appropriately designed solar-energy solutions."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <DetailCard title="Applications"><BulletList items={agriculturalApplications} /></DetailCard>
            <DetailCard title="Available system configurations">
              <div className="space-y-4 text-md leading-6 text-slate-700 dark:text-slate-200">
                <p><strong className="text-slate-950 dark:text-white">Solar pump systems:</strong> Solar PV modules supply electricity to a compatible agricultural pump.</p>
                <p><strong className="text-slate-950 dark:text-white">Standalone agricultural solar systems:</strong> Independent solar systems designed for suitable agricultural loads.</p>
                <p><strong className="text-slate-950 dark:text-white">Hybrid agricultural systems:</strong> Solar integrated with battery storage or other compatible power sources.</p>
              </div>
            </DetailCard>
            <DetailCard title="Key benefits"><BulletList items={agriculturalBenefits} /></DetailCard>
            <DetailCard title="Important considerations">
              <p className="text-md leading-6 text-slate-700 dark:text-slate-200">
                Pump capacity, water requirement, total dynamic head, water source, daily operating hours and site
                conditions must be evaluated before selecting a system.
              </p>
              <p className="mt-4 text-md leading-6 text-slate-700 dark:text-slate-200">
                Government subsidy availability depends on the current scheme, state allocation, eligibility,
                approved equipment and official sanction. Subsidies are not guaranteed by AeroSun Energy.
              </p>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Empowering agriculture with clean energy.
          </p>
        </section>

        <section>
          <SectionHeading
            number="04"
            eyebrow="Off-grid solar power systems"
            title="Independent energy for remote locations."
            description="For locations with limited grid access or a need for independent power, off-grid solar systems can provide electricity through solar generation, battery storage and suitable power-conversion equipment."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard title="Suitable for"><BulletList items={offGridSuitableFor} /></DetailCard>
            <DetailCard title="System components"><BulletList items={offGridComponents} /></DetailCard>
            <DetailCard title="System design considerations">
              <p className="mb-3 text-md leading-6 text-slate-700 dark:text-slate-200">System sizing considers:</p>
              <BulletList items={offGridDesignFactors} />
            </DetailCard>
          </div>
          <div className="mt-5">
            <DetailCard title="Key benefits">
              <BulletList items={[
                'Independent electricity generation.',
                'Energy storage for use when solar generation is unavailable.',
                'Suitable for remote applications.',
                'Customised according to electricity demand.',
              ]} />
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Renewable power beyond the grid.
          </p>
        </section>

        <section>
          <SectionHeading
            number="05"
            eyebrow="Solar battery storage"
            title="Store energy. Use it when needed."
            description="Battery storage allows suitable solar systems to store electrical energy for later use."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard title="Applications"><BulletList items={batteryApplications} /></DetailCard>
            <DetailCard title="Storage options">
              <p className="text-md leading-6 text-slate-700 dark:text-slate-200">
                Battery selection depends on the application and may include suitable lithium-based or other
                compatible battery technologies.
              </p>
            </DetailCard>
            <DetailCard title="Key benefits">
              <BulletList items={[
                'Energy storage.',
                'Backup electricity.',
                'Better utilisation of solar generation.',
                'Support for off-grid operation.',
                'Flexible system design.',
              ]} />
            </DetailCard>
          </div>
          <div className="mt-5">
            <DetailCard title="Our selection process">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {batterySelection.map((item, index) => (
                  <p key={item} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700 dark:bg-white/[0.04] dark:text-slate-200">
                    <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">{String(index + 1).padStart(2, '0')}</span>
                    {item}
                  </p>
                ))}
              </div>
            </DetailCard>
          </div>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Making renewable energy more flexible.
          </p>
        </section>

        <section className="rounded-[2rem] bg-[#14372f] p-6 text-white sm:p-10">
          <SectionHeading
            number="06"
            eyebrow="Small wind generators"
            title="Harness the power of wind."
            description="AeroSun Energy is developing a customised small wind-generator product range intended to address different decentralised electricity requirements."
            inverse
          />
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-lime-200/20 bg-lime-200/10 px-5 py-3">
            <Wind className="h-5 w-5 text-lime-300" aria-hidden="true" />
            <span className="text-md font-bold uppercase tracking-[0.16em] text-emerald-100/70">Proposed development range</span>
            <span className="font-mono text-lg font-bold text-lime-300">100 W – 10 kW</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="mb-4 text-base font-bold">Intended applications</h3>
              <BulletList items={windApplications} />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <h3 className="mb-4 text-base font-bold">Product development focus</h3>
              <BulletList items={windFocus} />
            </div>
          </div>
          <div className="mt-5 rounded-3xl border border-lime-200/20 bg-black/10 p-6 sm:p-8">
            <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">Flagship development project</p>
            <h3 className="mt-3 text-2xl font-black sm:text-3xl">AeroSun AS-WG-3000</h3>
            <p className="mt-2 text-md text-emerald-100/75">Proposed configuration</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {windConfiguration.map((item) => (
                <p key={item} className="flex gap-3 text-md leading-6 text-emerald-50">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-6 border-t border-white/15 pt-5 text-md leading-6 text-emerald-100/80">
              <strong className="text-white">Development status:</strong> The AS-WG-3000 is a product-development
              project. Rated output, starting wind speed, power curve, efficiency, reliability and operating limits
              remain subject to engineering validation and physical testing.
            </p>
          </div>
          <p className="mt-6 font-semibold italic text-lime-300">
            AeroSun Energy – Exploring new possibilities in wind energy.
          </p>
        </section>

        <section>
          <SectionHeading
            number="07"
            eyebrow="Solar–wind hybrid energy systems"
            title="Two renewable sources. One integrated energy solution."
            description="Solar and wind resources can complement each other under suitable environmental conditions. A hybrid energy system integrates multiple generation sources and, where required, battery storage to serve a defined electricity load."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <DetailCard title="Proposed system architecture"><BulletList items={hybridArchitecture} /></DetailCard>
            <DetailCard title="Suitable applications"><BulletList items={hybridApplications} /></DetailCard>
            <DetailCard title="Potential benefits"><BulletList items={hybridBenefits} /></DetailCard>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-300/50 bg-amber-50 px-5 py-4 text-md leading-6 text-amber-950 dark:border-amber-200/20 dark:bg-amber-300/10 dark:text-amber-100">
            Solar and wind generation depend on environmental conditions. A hybrid system does not guarantee
            uninterrupted power unless its generation capacity, storage, load management and backup arrangements
            are properly designed.
          </p>
          <p className="mt-5 font-semibold italic text-emerald-800 dark:text-lime-300">
            AeroSun Energy – Power from Sun, Wind, Water, Fire.
          </p>
        </section>

        <section>
          <SectionHeading
            number="08"
            eyebrow="Consultation & feasibility assessment"
            title="Make an informed energy investment."
            description="Choosing the right renewable-energy system begins with understanding your actual energy requirements. We aim to provide project assessment and customised system-planning services."
          />
          <DetailCard title="Our consultation services">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {consultationServices.map((service, index) => (
                <p key={service} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700 dark:bg-white/[0.04] dark:text-slate-200">
                  <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">{String(index + 1).padStart(2, '0')}</span>
                  {service}
                </p>
              ))}
            </div>
          </DetailCard>
          <h3 className="mb-5 mt-8 text-xl font-bold text-slate-950 dark:text-white">Our project development process</h3>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projectProcess.map(({ title, detail }, index) => (
              <li key={title} className="rounded-2xl border border-emerald-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="mt-3 font-bold text-slate-950 dark:text-white">{title}</h4>
                <p className="mt-2 text-md leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-emerald-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeading
              number="09"
              eyebrow="Why choose AeroSun Energy?"
              title="Solutions shaped around your requirements."
            />
            <p className="text-md leading-6 text-slate-600 dark:text-slate-300">
              We aim to build renewable-energy solutions around actual customer requirements rather than offer a
              single configuration for every application.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseAeroSun.map((reason) => (
              <p key={reason} className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-md leading-6 text-slate-700 dark:bg-white/[0.04] dark:text-slate-200">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                {reason}
              </p>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white dark:border-white/10 dark:bg-white/[0.04]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#14372f] p-7 text-white sm:p-10">
              <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">10 / Let’s discuss your energy requirements</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Explore a suitable clean-energy option.</h2>
              <p className="mt-4 text-md leading-6 text-emerald-50/85">
                Whether you are a homeowner, farmer, business owner or institution, AeroSun Energy can help you
                explore suitable renewable-energy options.
              </p>
              <p className="mt-5 text-lg font-semibold italic text-emerald-100">Power from Sun, Wind, Water, Fire.</p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">AeroSun Energy Private Limited</h3>
              <p className="flex gap-3 text-md leading-6 text-slate-600 dark:text-slate-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                D.No. 11-184, Gollavanigunta, T.N. Pallem, Tirupati, Andhra Pradesh – 517501, India.
              </p>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="https://aerosunenergy.in/">
                <Globe2 className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                aerosunenergy.in
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="mailto:customercare@aerosunenergy.in">
                <Mail className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                customercare@aerosunenergy.in
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="tel:+918099181075">
                <Phone className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                +91 8099181075
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-md font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Discuss your requirements
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <p className="rounded-2xl border border-slate-300 bg-slate-100 px-5 py-4 text-md leading-5 text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
          All systems are subject to technical feasibility, site conditions, applicable approvals and equipment
          availability. Product specifications, savings and generation estimates will be provided based on individual
          project assessments. Government incentives and subsidies are subject to current official scheme rules and
          approval.
        </p>
      </div>
    </main>
  )
}
