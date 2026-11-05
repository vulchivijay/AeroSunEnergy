'use client'

import Link from 'next/link'
import { ArrowRight, Globe2, Mail, MapPin, Phone, Sun, Wind, Zap } from 'lucide-react'
import DownloadProfilePdf from './DownloadProfilePdf'
import { useLocale } from '@/lib/LocaleContext'

const defaultCompanyProfile = {
  badge: 'Company profile · 2026',
  title: 'AeroSun Energy',
  subtitle: 'Private Limited',
  motto: 'Power from Sun, Wind, Water, Fire.',
  intro: 'An Indian renewable-energy company focused on developing and delivering practical clean-energy solutions using solar and wind power for households, agriculture, businesses and remote communities.',
  officeLabel: 'Registered office',
  officeText: 'D.No. 11-184, Gollavanigunta, T.N. Pallem, Tirupati, Andhra Pradesh – 517501, India',
  cinLabel: 'Corporate identity number',
  focusLabel: 'Our focus',
  focusTags: ['Solar', 'Wind', 'Hybrid'],
  section1Eyebrow: 'About us',
  section1Title: 'Practical clean energy, shaped around real needs.',
  section1Description: 'We aim to make renewable energy more accessible, adaptable and useful for households, agricultural operations, commercial establishments and remote communities. Our approach brings together renewable-energy products, customised system design, engineering, equipment integration and technical services. Our long-term direction includes customised small wind generators, solar power systems and integrated solar–wind hybrid solutions.',
  section2Eyebrow: 'Our vision',
  section2Title: 'A trusted partner for a cleaner-energy future.',
  section2Text: 'To become a trusted renewable-energy solutions company by promoting accessible, reliable and sustainable energy technologies for a cleaner future.',
  section3Eyebrow: 'Our mission',
  section3Title: 'What guides our work.',
  section4Eyebrow: 'Business areas',
  section4Title: 'Three complementary renewable-energy areas.',
  solarTitle: 'Solar energy solutions',
  windTitle: 'Wind energy solutions',
  hybridTitle: 'Solar–wind hybrid energy',
  windProductIntro: 'A customised small wind-generator product direction is under development, with a proposed capacity range from 100 W to 10 kW. The initial engineering programme focuses on a 3 kW hybrid vertical-axis wind turbine combining Savonius and Darrieus rotor concepts.',
  hybridIntro: 'We aim to integrate solar PV, wind generation, energy storage and suitable power electronics into customised renewable-energy systems.',
  hybridFinal: 'The final configuration depends on site conditions, load requirements and technical feasibility.',
  productSectionEyebrow: 'Products and services',
  productSectionTitle: 'Solutions planned around energy requirements.',
  productTableCategory: 'Category',
  productTableServices: 'Products and services',
  waitNote: 'Wind technologies remain subject to engineering development, prototype validation and applicable certification. They are development objectives, not claims of completed products or validated performance.',
  innovationEyebrow: 'Innovation focus',
  innovationTitle: 'Challenges we aim to address.',
  innovationDescription: 'Our product-development direction focuses on practical engineering and renewable-energy integration.',
  innovationNote: 'We aim to respond through customised product development, renewable-energy integration and practical engineering solutions.',
  technologyDevelopmentEyebrow: 'Technology development',
  technologyDevelopmentTitle: 'A considered path from requirements to support.',
  technologyDevelopmentDescription: 'Wind-energy products in particular require engineering validation and prototype testing before commercial performance claims are made.',
  whoWeServeEyebrow: 'Who we serve',
  whoWeServeTitle: 'For a range of customers and communities.',
  whoWeServeDescription: 'Our intended customer segments include:',
  manufacturingEyebrow: 'Business and manufacturing model',
  manufacturingTitle: 'Partnership-based engineering and integration.',
  manufacturingDescription: 'During our initial development stage, we intend to use a partnership-based manufacturing and integration model.',
  manufacturingNote: 'This approach allows us to focus on engineering, product development, quality control, customer requirements and business expansion.',
  qualityEyebrow: 'Quality and safety',
  qualityTitle: 'Quality, safety and reliability matter.',
  qualityDescription: 'Our intended practices include:',
  qualityNote: 'All installations and products will be subject to applicable technical standards, statutory requirements and manufacturer specifications.',
  whyWorkEyebrow: 'Why work with us',
  whyWorkTitle: 'An engineering-led, customer-oriented approach.',
  whyWorkDescription: 'We aim to establish long-term relationships with customers, suppliers, installation partners and technology developers.',
  futureEyebrow: 'Future direction',
  futureTitle: 'Building capabilities for the long term.',
  futureDescription: 'AeroSun Energy’s long-term development priorities include:',
  contactEyebrow: 'Contact us',
  contactTitle: 'Let’s build a cleaner energy future.',
  contactTagline: 'Power from Sun, Wind, Water, Fire..',
  contactCompany: 'AeroSun Energy Private Limited',
  contactAction: 'Contact our team',
  contactWebsite: 'aerosunenergy.in',
  contactEmail: 'customercare@aerosunenergy.in',
  contactPhone: '+91 8099181075',
  missionPoints: [
    'Promote the adoption of solar and wind energy.',
    'Develop customised renewable-energy solutions for different power requirements.',
    'Explore innovative small-scale wind-generation technologies.',
    'Integrate solar, wind and battery storage systems.',
    'Support agricultural, residential and commercial energy needs.',
    'Build reliable relationships with customers, manufacturers and technology partners.',
    'Contribute to environmental sustainability through renewable-energy adoption.',
  ],
  solarSolutions: [
    'Residential rooftop installations',
    'Commercial rooftop installations',
    'Industrial solar applications',
    'Agricultural solar pumps',
    'Off-grid solar power systems',
    'Solar battery storage',
    'Solar energy feasibility and consultation',
  ],
  windDevelopment: [
    'Customised power capacities.',
    'Investigation of low-wind-speed performance.',
    'Permanent-magnet generator integration.',
    'Mechanical and electrical system optimisation.',
    'Performance monitoring and testing.',
    'Applications for farms, rural locations and distributed energy systems.',
  ],
  hybridApplications: [
    'Farms and agricultural operations',
    'Remote buildings',
    'Small businesses',
    'Rural facilities',
    'Off-grid applications',
    'Commercial energy systems',
  ],
  productsAndServices: [
    ['Residential solar', 'Rooftop solar systems'],
    ['Commercial solar', 'Business and commercial rooftop systems'],
    ['Agricultural solar', 'Solar-powered agricultural applications and pumps'],
    ['Off-grid solar', 'Independent solar electricity systems'],
    ['Wind energy', 'Small wind-generator development and proposed product range'],
    ['Hybrid energy', 'Solar, wind and battery integration'],
    ['Energy consultation', 'Site assessment and renewable-energy feasibility'],
    ['Energy storage', 'Battery-based storage integration'],
  ],
  innovationFocus: [
    'Limited availability of affordable, customised small wind generators.',
    'Inefficient utilisation of low-speed wind resources.',
    'Dependence on conventional electricity sources.',
    'Intermittent renewable-energy generation.',
    'Limited access to integrated solar and wind solutions for rural and agricultural applications.',
    'Difficulty accessing reliable renewable energy in remote locations.',
  ],
  developmentSteps: [
    'Understand customer energy requirements.',
    'Evaluate site and environmental conditions.',
    'Prepare a suitable system design.',
    'Identify reliable equipment and manufacturing partners.',
    'Integrate the selected components.',
    'Conduct applicable inspections and performance testing.',
    'Document system performance.',
    'Provide technical support and maintenance arrangements.',
  ],
  customerSegments: [
    'Individual homeowners',
    'Farmers and agricultural businesses',
    'Small and medium-sized enterprises',
    'Commercial establishments',
    'Educational institutions',
    'Industrial facilities',
    'Rural communities',
    'Remote and off-grid facilities',
    'Renewable-energy project developers',
  ],
  manufacturingModel: [
    'Sourcing specialised components from established manufacturers.',
    'Outsourcing selected fabrication and manufacturing activities.',
    'Coordinating product engineering and system integration.',
    'Establishing quality-inspection procedures.',
    'Conducting prototype and system testing.',
    'Developing customer-specific energy solutions.',
  ],
  qualityPractices: [
    'Equipment specification verification.',
    'Supplier qualification.',
    'Material inspection.',
    'Electrical safety checks.',
    'Mechanical inspection.',
    'Installation quality control.',
    'Commissioning documentation.',
    'Warranty and service coordination.',
  ],
  reasonsToWorkWithUs: [
    'Solar and wind energy focus.',
    'Customised renewable-energy solutions.',
    'Interest in innovative small wind generators.',
    'Solar–wind hybrid system development.',
    'Agricultural and rural energy applications.',
    'Manufacturer and technology partnerships.',
    'Customer-oriented project planning.',
    'Engineering-led product development.',
  ],
  futurePriorities: [
    'Establishing a portfolio of residential and commercial solar solutions.',
    'Developing customised small wind generators.',
    'Validating the 3 kW hybrid VAWT prototype.',
    'Developing integrated solar–wind demonstration systems.',
    'Expanding manufacturing and supplier partnerships.',
    'Building a regional renewable-energy service network.',
    'Expanding into additional Indian markets.',
  ],
}

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
    <div className="mb-8 max-w-3xl">
      <p className={`font-mono text-sm font-bold uppercase tracking-[0.2em] ${inverse ? 'text-lime-300' : 'text-emerald-700 dark:text-emerald-300'}`}>
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
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-md leading-6 text-slate-700 dark:text-slate-200 sm:text-base">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CompanyProfilePage() {
  const { t } = useLocale()
  const cp = t.about.companyProfile ?? defaultCompanyProfile

  const missionPoints = cp.missionPoints ?? defaultCompanyProfile.missionPoints
  const solarSolutions = cp.solarSolutions ?? defaultCompanyProfile.solarSolutions
  const windDevelopment = cp.windDevelopment ?? defaultCompanyProfile.windDevelopment
  const hybridApplications = cp.hybridApplications ?? defaultCompanyProfile.hybridApplications
  const productsAndServices = cp.productsAndServices ?? defaultCompanyProfile.productsAndServices
  const innovationFocus = cp.innovationFocus ?? defaultCompanyProfile.innovationFocus
  const developmentSteps = cp.developmentSteps ?? defaultCompanyProfile.developmentSteps
  const customerSegments = cp.customerSegments ?? defaultCompanyProfile.customerSegments
  const manufacturingModel = cp.manufacturingModel ?? defaultCompanyProfile.manufacturingModel
  const qualityPractices = cp.qualityPractices ?? defaultCompanyProfile.qualityPractices
  const reasonsToWorkWithUs = cp.reasonsToWorkWithUs ?? defaultCompanyProfile.reasonsToWorkWithUs
  const futurePriorities = cp.futurePriorities ?? defaultCompanyProfile.futurePriorities

  return (
    <main className="printable-about-document overflow-hidden bg-[#f5f6ef] text-slate-900 dark:bg-[#101b17] dark:text-slate-100">
      <section className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex items-center justify-between gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-100"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" aria-hidden="true" />{cp.badge}</p>
            <DownloadProfilePdf label={cp.downloadButton} />
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-[0.045em] sm:text-6xl lg:text-7xl">
            {cp.title}
            <span className="mt-2 block text-emerald-300">{cp.subtitle}</span>
          </h1>
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.22em] text-emerald-100/75 sm:text-xl">
            {cp.motto}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
            {cp.intro}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-100/60">{cp.officeLabel}</p>
              <p className="mt-2 text-md leading-6 text-white">{cp.officeText}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-100/60">{cp.cinLabel}</p>
              <p className="mt-2 font-mono text-lg font-bold tracking-wide text-lime-200">U35106AP2026PTC128748</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-100/60">{cp.focusLabel}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-md font-semibold text-white">
                {cp.focusTags?.map((tag: string, idx: number) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    {idx === 0 && <Sun className="h-4 w-4 text-lime-300" aria-hidden="true" />}
                    {idx === 1 && <Wind className="h-4 w-4 text-lime-300" aria-hidden="true" />}
                    {idx === 2 && <Zap className="h-4 w-4 text-lime-300" aria-hidden="true" />}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:px-10">
        <section>
          <SectionHeading
            number="01"
            eyebrow={cp.section1Eyebrow}
            title={cp.section1Title}
            description={cp.section1Description}
          />
        </section>

        <section>
          <SectionHeading number="02" eyebrow={cp.section2Eyebrow} title={cp.section2Title} />
          <p className="max-w-4xl rounded-3xl border border-emerald-900/10 bg-white p-6 text-lg leading-8 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 sm:p-8">
            {cp.section2Text}
          </p>
        </section>

        <section>
          <SectionHeading number="03" eyebrow={cp.section3Eyebrow} title={cp.section3Title} />
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
            <BulletList items={missionPoints} />
          </div>
        </section>

        <section>
          <SectionHeading
            number="04"
            eyebrow={cp.section4Eyebrow}
            title={cp.section4Title}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.solarTitle}</h3>
              <div className="mt-4"><BulletList items={solarSolutions} /></div>
            </article>
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200">
                <Wind className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.windTitle}</h3>
              <p className="mt-3 text-md leading-6 text-slate-600 dark:text-slate-300">
                {cp.windProductIntro}
              </p>
              <div className="mt-4"><BulletList items={windDevelopment} /></div>
            </article>
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.hybridTitle}</h3>
              <p className="mt-3 text-md leading-6 text-slate-600 dark:text-slate-300">
                {cp.hybridIntro}
              </p>
              <div className="mt-4"><BulletList items={hybridApplications} /></div>
              <p className="mt-4 text-md leading-6 text-slate-600 dark:text-slate-300">
                {cp.hybridFinal}
              </p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-300/50 bg-amber-50 px-5 py-4 text-md leading-6 text-amber-950 dark:border-amber-200/20 dark:bg-amber-300/10 dark:text-amber-100">
            {cp.waitNote}
          </p>
        </section>

        <section>
          <SectionHeading
            number="05"
            eyebrow={cp.productSectionEyebrow}
            title={cp.productSectionTitle}
          />
          <div className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white dark:border-white/10 dark:bg-white/[0.04]">
            <div className="grid grid-cols-[0.8fr_1.2fr] bg-emerald-950 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-50 sm:px-7">
              <span>{cp.productTableCategory}</span>
              <span>{cp.productTableServices}</span>
            </div>
            {productsAndServices.map(([category, description], index) => (
              <div
                key={category}
                className={`grid grid-cols-[0.8fr_1.2fr] gap-3 px-5 py-4 text-md leading-6 sm:px-7 ${
                  index % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-emerald-50/70 dark:bg-white/[0.03]'
                }`}
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100">{category}</span>
                <span className="text-slate-600 dark:text-slate-300">{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              number="06"
              eyebrow={cp.innovationEyebrow}
              title={cp.innovationTitle}
              description={cp.innovationDescription}
            />
            <p className="rounded-2xl border-l-4 border-lime-500 bg-white px-5 py-4 text-md leading-6 text-slate-600 dark:bg-white/[0.04] dark:text-slate-300">
              {cp.innovationNote}
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {innovationFocus.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-md leading-6 text-slate-700 dark:text-slate-200">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            number="07"
            eyebrow={cp.technologyDevelopmentEyebrow}
            title={cp.technologyDevelopmentTitle}
            description={cp.technologyDevelopmentDescription}
          />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-emerald-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-md leading-6 text-slate-700 dark:text-slate-200">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              number="08"
              eyebrow={cp.whoWeServeEyebrow}
              title={cp.whoWeServeTitle}
              description={cp.whoWeServeDescription}
            />
            <BulletList items={customerSegments} />
          </div>
          <div>
            <SectionHeading
              number="09"
              eyebrow={cp.manufacturingEyebrow}
              title={cp.manufacturingTitle}
              description={cp.manufacturingDescription}
            />
            <BulletList items={manufacturingModel} />
            <p className="mt-5 text-md leading-6 text-slate-600 dark:text-slate-300">
              {cp.manufacturingNote}
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#14372f] p-6 text-white sm:p-10">
          <SectionHeading
            number="10"
            eyebrow={cp.qualityEyebrow}
            title={cp.qualityTitle}
            description={cp.qualityDescription}
            inverse
          />
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPractices.map((practice) => (
              <div key={practice} className="flex gap-3 text-md leading-6 text-emerald-50">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300" aria-hidden="true" />
                {practice}
              </div>
            ))}
          </div>
          <p className="mt-7 border-t border-white/15 pt-5 text-md leading-6 text-emerald-100/80">
            {cp.qualityNote}
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              number="11"
              eyebrow={cp.whyWorkEyebrow}
              title={cp.whyWorkTitle}
              description={cp.whyWorkDescription}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasonsToWorkWithUs.map((reason) => (
              <div key={reason} className="rounded-2xl border border-emerald-900/10 bg-white p-5 text-md font-semibold leading-6 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                {reason}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            number="12"
            eyebrow={cp.futureEyebrow}
            title={cp.futureTitle}
            description={cp.futureDescription}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futurePriorities.map((priority, index) => (
              <div key={priority} className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="font-mono text-md font-bold text-emerald-700 dark:text-lime-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-md leading-6 text-slate-700 dark:text-slate-200">{priority}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white dark:border-white/10 dark:bg-white/[0.04]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#14372f] p-7 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">13 / {cp.contactEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{cp.contactTitle}</h2>
              <p className="mt-4 text-lg font-semibold italic text-emerald-100">{cp.contactTagline}</p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{cp.contactCompany}</h3>
              <p className="flex gap-3 text-md leading-6 text-slate-600 dark:text-slate-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                {cp.officeText}.
              </p>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="https://aerosunenergy.in/">
                <Globe2 className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                {cp.contactWebsite}
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="mailto:customercare@aerosunenergy.in">
                <Mail className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                {cp.contactEmail}
              </a>
              <a className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-lime-300" href="tel:+918099181075">
                <Phone className="h-4 w-4 text-emerald-700 dark:text-lime-300" aria-hidden="true" />
                {cp.contactPhone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-md font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                {cp.contactAction}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
