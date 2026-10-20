'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'

const purchaseOrderSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required.'),
  companyName: z.string().trim().optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits.')
    .regex(/^[0-9+()\-\s]+$/, 'Phone number can contain only digits, spaces, +, (, ), and -.'),
  poNumber: z.string().trim().min(2, 'Please enter the purchase order number.'),
  projectTitle: z.string().trim().min(3, 'Please enter the project title.'),
  supplierName: z.string().trim().min(2, 'Please enter the supplier name.'),
  productLine: z.string().min(1, 'Please select the product line.'),
  quantity: z.string().trim().min(1, 'Please enter the quantity.'),
  unitPrice: z.string().trim().min(1, 'Please enter the unit price.'),
  totalValue: z.string().trim().min(1, 'Please enter the total value.'),
  deliverySchedule: z.string().trim().min(3, 'Please enter the delivery schedule.'),
  warranty: z.string().trim().min(3, 'Please enter the warranty details.'),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: 'Please accept the purchase terms and agreement.',
  }),
})

type PurchaseOrderFormValues = z.infer<typeof purchaseOrderSchema>

const defaultValues: PurchaseOrderFormValues = {
  customerName: '',
  companyName: '',
  email: '',
  phone: '',
  poNumber: '',
  projectTitle: '',
  supplierName: '',
  productLine: '',
  quantity: '',
  unitPrice: '',
  totalValue: '',
  deliverySchedule: '',
  warranty: '',
  termsAccepted: false,
}

export default function PurchaseOrderPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PurchaseOrderFormValues>({
    resolver: zodResolver(purchaseOrderSchema),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: PurchaseOrderFormValues) => {
    const subject = `Purchase Order Confirmation - ${data.poNumber}`
    const body = [
      'PURCHASE ORDER AND SUPPLIER AGREEMENT',
      '===================================',
      '',
      `Customer Name: ${data.customerName}`,
      `Company Name: ${data.companyName || 'Not provided'}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `PO Number: ${data.poNumber}`,
      `Project Title: ${data.projectTitle}`,
      `Supplier Name: ${data.supplierName}`,
      `Product Line: ${data.productLine}`,
      `Quantity: ${data.quantity}`,
      `Unit Price: ${data.unitPrice}`,
      `Total Value: ${data.totalValue}`,
      `Delivery Schedule: ${data.deliverySchedule}`,
      `Warranty: ${data.warranty}`,
      '',
      'Terms accepted by customer: Yes',
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_28%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-sm">
            Purchase order
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Purchase order and supplier agreement template
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Use this template to record the purchase order, commercial terms, delivery expectations, and supplier agreement acceptance for renewable energy equipment and services.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">1. Purchase order summary</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    This purchase order confirms the supply of equipment, materials, installation support, or associated services as agreed between the buyer and the supplier. Final order details are governed by the approved scope, pricing, timelines, and commercial conditions described in this document.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">2. Commercial terms</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    <p><span className="font-semibold text-slate-800">Advance payment:</span> 30% of the total contract value is payable on order confirmation.</p>
                    <p><span className="font-semibold text-slate-800">Procurement stage:</span> 40% is payable upon equipment procurement and dispatch scheduling.</p>
                    <p><span className="font-semibold text-slate-800">Installation stage:</span> 20% is payable upon site installation and commissioning verification.</p>
                    <p><span className="font-semibold text-slate-800">Final settlement:</span> 10% is retained until final documentation, testing, and closing formalities are completed.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">3. Delivery and execution</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The supplier shall provide goods and services in accordance with the agreed schedule, quality standards, and site access conditions. Delivery timelines may be revised if client approvals, import constraints, weather, or local access conditions affect execution.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">4. Warranty and support</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    All supplied equipment, materials, and installation workmanship are subject to the applicable manufacturer warranty and service support terms. Maintenance, after-sales service, and AMC arrangements will be governed by the final scope and contract documents.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">5. Risk and compliance</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The supplier shall comply with all relevant quality, safety, labour, and statutory requirements applicable to the project. The buyer remains responsible for site access, local permissions, and any third-party approvals required for project execution.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-emerald-100 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-200">Order acceptance</p>
              <h2 className="mt-3 text-2xl font-semibold">Confirm order details</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field
                  label="Customer name"
                  name="customerName"
                  placeholder="Enter your full name"
                  register={register}
                  error={errors.customerName}
                />

                <Field
                  label="Company name"
                  name="companyName"
                  placeholder="Optional company / organization"
                  register={register}
                  error={errors.companyName}
                />

                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  register={register}
                  error={errors.email}
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  register={register}
                  error={errors.phone}
                />

                <Field
                  label="Purchase order number"
                  name="poNumber"
                  placeholder="PO-2026-001"
                  register={register}
                  error={errors.poNumber}
                />

                <Field
                  label="Project title"
                  name="projectTitle"
                  placeholder="Residential solar installation"
                  register={register}
                  error={errors.projectTitle}
                />

                <Field
                  label="Supplier name"
                  name="supplierName"
                  placeholder="Supplier / vendor name"
                  register={register}
                  error={errors.supplierName}
                />

                <div>
                  <label htmlFor="productLine" className="mb-2 block text-sm font-semibold text-slate-100">
                    Product line
                  </label>
                  <select
                    id="productLine"
                    {...register('productLine')}
                    aria-invalid={Boolean(errors.productLine)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
                  >
                    <option value="" className="text-slate-900">Select product line</option>
                    <option value="Solar PV modules" className="text-slate-900">Solar PV modules</option>
                    <option value="Inverters and controllers" className="text-slate-900">Inverters and controllers</option>
                    <option value="Batteries and storage" className="text-slate-900">Batteries and storage</option>
                    <option value="Wind turbine equipment" className="text-slate-900">Wind turbine equipment</option>
                    <option value="Mounting and balance of system" className="text-slate-900">Mounting and balance of system</option>
                    <option value="Maintenance and AMC" className="text-slate-900">Maintenance and AMC</option>
                  </select>
                  {errors.productLine && <p className="mt-2 text-xs text-rose-300">{errors.productLine.message}</p>}
                </div>

                <Field
                  label="Quantity"
                  name="quantity"
                  placeholder="Example: 12 units"
                  register={register}
                  error={errors.quantity}
                />

                <Field
                  label="Unit price"
                  name="unitPrice"
                  placeholder="Example: ₹42,000"
                  register={register}
                  error={errors.unitPrice}
                />

                <Field
                  label="Total value"
                  name="totalValue"
                  placeholder="Example: ₹5,04,000"
                  register={register}
                  error={errors.totalValue}
                />

                <Field
                  label="Delivery schedule"
                  name="deliverySchedule"
                  placeholder="Example: 30-45 days from order confirmation"
                  register={register}
                  error={errors.deliverySchedule}
                />

                <Field
                  label="Warranty details"
                  name="warranty"
                  placeholder="Example: 5 years product warranty"
                  register={register}
                  error={errors.warranty}
                />

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('termsAccepted')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>
                    I accept the purchase order terms, commercial conditions, and supplier agreement as stated above.
                  </span>
                </label>
                {errors.termsAccepted && <p className="text-xs text-rose-300">{errors.termsAccepted.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm purchase order'}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">Your purchase order has been prepared in your email app.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

type FieldProps = {
  label: string
  name: keyof PurchaseOrderFormValues
  placeholder: string
  type?: string
  register: ReturnType<typeof useForm<PurchaseOrderFormValues>>['register']
  error?: { message?: string }
}

function Field({ label, name, placeholder, type = 'text', register, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-100">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error.message}</p>}
    </div>
  )
}
