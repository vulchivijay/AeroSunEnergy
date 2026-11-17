import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Billing & Project Documents | AeroSun Energy',
  description:
    'Access AeroSun Energy customer enquiries, agreements, installation checklists, invoices, purchase orders, warranty support, and project resources.',
  alternates: {
    canonical: '/auth/dashboard/billing',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

const billingLinks = [
  {
    title: 'Terms & Conditions',
    description: 'Review the terms governing website use and renewable energy service engagements.',
    href: '/auth/dashboard/billing/terms-conditions',
  },
  {
    title: 'Customer Enquiry',
    description: 'Submit project requirements and prepare a customer quotation.',
    href: '/auth/dashboard/billing/customer-enquiry',
  },
  {
    title: 'Customer Agreement',
    description: 'Review project scope, payment terms, and customer acceptance.',
    href: '/auth/dashboard/billing/customer-agreement',
  },
  {
    title: 'Installation Checklist',
    description: 'Review installation and commissioning checks for a project.',
    href: '/auth/dashboard/billing/installation-checklist',
  },
  {
    title: 'Invoice & Receipt',
    description: 'Prepare an invoice and record project payments.',
    href: '/auth/dashboard/billing/invoice-receipt',
  },
  {
    title: 'Purchase Order',
    description: 'Create a purchase order for project equipment and services.',
    href: '/auth/dashboard/billing/purchase-order',
  },
  {
    title: 'Warranty & Service Policy',
    description: 'Review warranty coverage and service support information.',
    href: '/auth/dashboard/billing/warranty-policy',
  },
  {
    title: '90-Day Tracker',
    description: 'Track business execution milestones and progress.',
    href: '/auth/dashboard/billing/nintydays-tracker',
  },
  {
    title: 'Research & Development',
    description: 'Explore renewable energy research and development resources.',
    href: '/auth/dashboard/billing/research-development',
  },
]

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
      <header className="bg-[#102a43] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">AeroSun Energy · Customer resources</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Billing &amp; Project Documents</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Access the forms and resources used to manage renewable energy enquiries, project agreements, billing, installation, and service.
          </p>
        </div>
      </header>

      <section aria-label="Billing and project resources" className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {billingLinks.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-sm font-bold text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
              <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-emerald-700" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-lg font-extrabold text-slate-950">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
