'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { useLocale } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'

type PurchaseOrderFormValues = {
  customerName: string
  companyName?: string
  email: string
  phone: string
  poNumber: string
  projectTitle: string
  supplierName: string
  productLine: string
  quantity: string
  unitPrice: string
  totalValue: string
  deliverySchedule: string
  warranty: string
  termsAccepted: boolean
}

export default function PurchaseOrderPage() {
  const { t } = useLocale()
  const purchaseText = ((t as any).purchaseOrder ?? (en as any).purchaseOrder) as any

  const purchaseOrderSchema = z.object({
    customerName: z.string().trim().min(2, purchaseText.validation.customerNameRequired),
    companyName: z.string().trim().optional().or(z.literal('')),
    email: z.string().trim().email(purchaseText.validation.emailInvalid),
    phone: z
      .string()
      .trim()
      .min(10, purchaseText.validation.phoneMin)
      .regex(/^[0-9+()\-\s]+$/, purchaseText.validation.phoneFormat),
    poNumber: z.string().trim().min(2, purchaseText.validation.poNumberRequired),
    projectTitle: z.string().trim().min(3, purchaseText.validation.projectTitleRequired),
    supplierName: z.string().trim().min(2, purchaseText.validation.supplierNameRequired),
    productLine: z.string().min(1, purchaseText.validation.productLineRequired),
    quantity: z.string().trim().min(1, purchaseText.validation.quantityRequired),
    unitPrice: z.string().trim().min(1, purchaseText.validation.unitPriceRequired),
    totalValue: z.string().trim().min(1, purchaseText.validation.totalValueRequired),
    deliverySchedule: z.string().trim().min(3, purchaseText.validation.deliveryRequired),
    warranty: z.string().trim().min(3, purchaseText.validation.warrantyRequired),
    termsAccepted: z.boolean().refine((value) => value === true, {
      message: purchaseText.validation.termsRequired,
    }),
  })

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
    const subject = purchaseText.email.subject.replace('{po}', data.poNumber)
    const body = [
      purchaseText.email.title,
      '===================================',
      '',
      `${purchaseText.email.customerName}: ${data.customerName}`,
      `${purchaseText.email.companyName}: ${data.companyName || 'Not provided'}`,
      `${purchaseText.email.email}: ${data.email}`,
      `${purchaseText.email.phone}: ${data.phone}`,
      `${purchaseText.email.poNumber}: ${data.poNumber}`,
      `${purchaseText.email.projectTitle}: ${data.projectTitle}`,
      `${purchaseText.email.supplierName}: ${data.supplierName}`,
      `${purchaseText.email.productLine}: ${data.productLine}`,
      `${purchaseText.email.quantity}: ${data.quantity}`,
      `${purchaseText.email.unitPrice}: ${data.unitPrice}`,
      `${purchaseText.email.totalValue}: ${data.totalValue}`,
      `${purchaseText.email.deliverySchedule}: ${data.deliverySchedule}`,
      `${purchaseText.email.warranty}: ${data.warranty}`,
      '',
      purchaseText.email.termsAccepted,
    ].join('\n')

    window.location.href = `mailto:customercare@aerosunenergy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset(defaultValues)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_28%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-700 shadow-sm backdrop-blur-sm">
            {purchaseText.badge}
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            {purchaseText.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {purchaseText.summaryText}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold text-slate-900">{purchaseText.summaryTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{purchaseText.summaryText}</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{purchaseText.commercialTitle}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    <p><span className="font-semibold text-slate-800">Advance payment:</span> 30% of the total contract value is payable on order confirmation.</p>
                    <p><span className="font-semibold text-slate-800">Procurement stage:</span> 40% is payable upon equipment procurement and dispatch scheduling.</p>
                    <p><span className="font-semibold text-slate-800">Installation stage:</span> 20% is payable upon site installation and commissioning verification.</p>
                    <p><span className="font-semibold text-slate-800">Final settlement:</span> 10% is retained until final documentation, testing, and closing formalities are completed.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{purchaseText.deliveryTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The supplier shall provide goods and services in accordance with the agreed schedule, quality standards, and site access conditions. Delivery timelines may be revised if client approvals, import constraints, weather, or local access conditions affect execution.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{purchaseText.warrantyTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    All supplied equipment, materials, and installation workmanship are subject to the applicable manufacturer warranty and service support terms. Maintenance, after-sales service, and AMC arrangements will be governed by the final scope and contract documents.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900">{purchaseText.riskTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The supplier shall comply with all relevant quality, safety, labour, and statutory requirements applicable to the project. The buyer remains responsible for site access, local permissions, and any third-party approvals required for project execution.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-emerald-100 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <CardContent className="p-5 sm:p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-200">{purchaseText.acceptTitle}</p>
              <h2 className="mt-3 text-2xl font-semibold">{purchaseText.acceptTitle}</h2>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <Field label={purchaseText.fields.customerName} name="customerName" placeholder={purchaseText.fields.customerNamePlaceholder} register={register} error={errors.customerName} />
                <Field label={purchaseText.fields.companyName} name="companyName" placeholder={purchaseText.fields.companyNamePlaceholder} register={register} error={errors.companyName} />
                <Field label={purchaseText.fields.email} name="email" type="email" placeholder={purchaseText.fields.emailPlaceholder} register={register} error={errors.email} />
                <Field label={purchaseText.fields.phone} name="phone" type="tel" placeholder={purchaseText.fields.phonePlaceholder} register={register} error={errors.phone} />
                <Field label={purchaseText.fields.poNumber} name="poNumber" placeholder={purchaseText.fields.poNumberPlaceholder} register={register} error={errors.poNumber} />
                <Field label={purchaseText.fields.projectTitle} name="projectTitle" placeholder={purchaseText.fields.projectTitlePlaceholder} register={register} error={errors.projectTitle} />
                <Field label={purchaseText.fields.supplierName} name="supplierName" placeholder={purchaseText.fields.supplierNamePlaceholder} register={register} error={errors.supplierName} />

                <div>
                  <label htmlFor="productLine" className="mb-2 block text-sm font-semibold text-slate-100">
                    {purchaseText.fields.productLine}
                  </label>
                  <select
                    id="productLine"
                    {...register('productLine')}
                    aria-invalid={Boolean(errors.productLine)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
                  >
                    <option value="" className="text-slate-900">{purchaseText.fields.productLine}</option>
                    {purchaseText.productLines.map((option: string) => (
                      <option key={option} value={option} className="text-slate-900">{option}</option>
                    ))}
                  </select>
                  {errors.productLine && <p className="mt-2 text-xs text-rose-300">{errors.productLine.message}</p>}
                </div>

                <Field label={purchaseText.fields.quantity} name="quantity" placeholder={purchaseText.fields.quantityPlaceholder} register={register} error={errors.quantity} />
                <Field label={purchaseText.fields.unitPrice} name="unitPrice" placeholder={purchaseText.fields.unitPricePlaceholder} register={register} error={errors.unitPrice} />
                <Field label={purchaseText.fields.totalValue} name="totalValue" placeholder={purchaseText.fields.totalValuePlaceholder} register={register} error={errors.totalValue} />
                <Field label={purchaseText.fields.deliverySchedule} name="deliverySchedule" placeholder={purchaseText.fields.deliverySchedulePlaceholder} register={register} error={errors.deliverySchedule} />
                <Field label={purchaseText.fields.warranty} name="warranty" placeholder={purchaseText.fields.warrantyPlaceholder} register={register} error={errors.warranty} />

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <input
                    type="checkbox"
                    {...register('termsAccepted')}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>{purchaseText.fields.acceptTerms}</span>
                </label>
                {errors.termsAccepted && <p className="text-xs text-rose-300">{errors.termsAccepted.message}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? purchaseText.submitting : purchaseText.submit}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-sm font-medium text-emerald-300">{purchaseText.success}</p>
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
