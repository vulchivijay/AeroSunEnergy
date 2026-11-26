'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent } from '@/app/components/ui/Card'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { submitWebsiteForm } from '@/lib/websiteFormSubmission'
import { useLocale } from '@/lib/LocaleContext'
import { SharedFormField } from '@/app/components/forms/SharedFormField'
import { createBusinessContactSchema } from '@/app/components/forms/businessContactSchema'
import { getFirstFormErrorMessage } from '@/lib/formValidation'
import { useToast } from '@/app/components/ui/ToastContext'
import { DashboardCollapsibleSection } from '@/app/components/ui/DashboardCollapsibleSection'

const createPurchaseOrderSchema = (validation: typeof import('@/public/locales/en/index.json').businessForms.purchaseOrder.validation) => z.object({
  ...createBusinessContactSchema(validation).shape,
  poNumber: z.string().trim().min(2, validation.poNumber),
  projectTitle: z.string().trim().min(3, validation.projectTitle),
  supplierName: z.string().trim().min(2, validation.supplierName),
  productLine: z.string().min(1, validation.productLine),
  quantity: z.string().trim().min(1, validation.quantity),
  unitPrice: z.string().trim().min(1, validation.unitPrice),
  totalValue: z.string().trim().min(1, validation.totalValue),
  deliverySchedule: z.string().trim().min(3, validation.deliverySchedule),
  warranty: z.string().trim().min(3, validation.warranty),
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: validation.termsAccepted,
  }),
})

type PurchaseOrderFormValues = z.infer<ReturnType<typeof createPurchaseOrderSchema>>

export default function PurchaseOrderPage() {
  const { t } = useLocale()
  const toast = useToast()
  const content = t.businessForms.purchaseOrder
  const defaultValues = content.defaultValues
  const { labels } = content
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PurchaseOrderFormValues>({
    resolver: zodResolver(createPurchaseOrderSchema(content.validation)),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: PurchaseOrderFormValues) => {
    let referenceCode: string
    try {
      referenceCode = await submitWebsiteForm('purchase_order', data)
    } catch {
      toast.error(t.formSubmission.error)
      return
    }

    reset(defaultValues)
    toast.success(`${content.feedback.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#ecfdf5_28%,#f8fafc_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs uppercase text-emerald-700 shadow-sm backdrop-blur-sm text-xs font-semibold tracking-wide leading-5">
            {labels.badge}
          </span>
          <h1 className="mt-5 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
            {labels.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {labels.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border border-slate-200 bg-white/85 shadow-sm backdrop-blur-md">
            <CardContent className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">
                <DashboardCollapsibleSection title={labels.sections.summary.title} className="bg-gradient-to-br from-white to-[#f1f2f6]">
                  <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.sections.summary.text}
                  </p>
                </DashboardCollapsibleSection>

                <DashboardCollapsibleSection title={labels.sections.commercialTerms.title} className="bg-gradient-to-br from-[#f1f2f6] to-white">
                  <div className="mt-3 space-y-3 text-base leading-7 text-slate-600">
                    {labels.sections.commercialTerms.items.map((item) => <p key={item.label}><span className="font-semibold text-slate-800 tracking-normal">{item.label}</span> {item.text}</p>)}
                  </div>
                </DashboardCollapsibleSection>

                <DashboardCollapsibleSection title={labels.sections.delivery.title} className="bg-gradient-to-br from-white to-[#f1f2f6]">
                  <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.sections.delivery.text}
                  </p>
                </DashboardCollapsibleSection>

                <DashboardCollapsibleSection title={labels.sections.warranty.title} className="bg-gradient-to-br from-[#f1f2f6] to-white">
                  <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.sections.warranty.text}
                  </p>
                </DashboardCollapsibleSection>

                <DashboardCollapsibleSection title={labels.sections.riskCompliance.title} className="bg-gradient-to-br from-white to-[#f1f2f6]">
                  <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                    {labels.sections.riskCompliance.text}
                  </p>
                </DashboardCollapsibleSection>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border border-slate-200 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 text-white shadow-sm">
            <CardContent className="p-5 sm:p-7">
              <p className="uppercase text-emerald-200 text-xs font-semibold tracking-wide leading-5">{labels.formTitle}</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.formHeading}</h2>

              <form
                onSubmit={handleSubmit(onSubmit, (formErrors) => toast.error(getFirstFormErrorMessage(formErrors) ?? t.formSubmission.error))}
                noValidate
                className="mt-6 space-y-4"
              >
                <Field
                  label={labels.fields.customerName.label}
                  name="customerName"
                  placeholder={labels.fields.customerName.placeholder}
                  register={register}
                  error={errors.customerName}
                />

                <Field
                  label={labels.fields.companyName.label}
                  name="companyName"
                  placeholder={labels.fields.companyName.placeholder}
                  register={register}
                  error={errors.companyName}
                />

                <Field
                  label={labels.fields.email.label}
                  name="email"
                  type="email"
                  placeholder={labels.fields.email.placeholder}
                  register={register}
                  error={errors.email}
                />

                <Field
                  label={labels.fields.phone.label}
                  name="phone"
                  type="tel"
                  placeholder={labels.fields.phone.placeholder}
                  register={register}
                  error={errors.phone}
                />

                <Field
                  label={labels.fields.poNumber.label}
                  name="poNumber"
                  placeholder={labels.fields.poNumber.placeholder}
                  register={register}
                  error={errors.poNumber}
                />

                <Field
                  label={labels.fields.projectTitle.label}
                  name="projectTitle"
                  placeholder={labels.fields.projectTitle.placeholder}
                  register={register}
                  error={errors.projectTitle}
                />

                <Field
                  label={labels.fields.supplierName.label}
                  name="supplierName"
                  placeholder={labels.fields.supplierName.placeholder}
                  register={register}
                  error={errors.supplierName}
                />

                <>
                  <label htmlFor="productLine" className="mb-2 block text-slate-100 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                    {labels.fields.productLine.label}
                  </label>
                  <select
                    id="productLine"
                    {...register('productLine')}
                    aria-invalid={Boolean(errors.productLine)}
                    aria-describedby={errors.productLine ? 'productLine-error' : undefined}
                    className="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all duration-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
                  >
                    <option value="" className="text-slate-900">{labels.fields.productLine.placeholder}</option>
                    {labels.productOptions.map((option) => <option key={option} value={option} className="text-slate-900">{option}</option>)}
                  </select>
                  {errors.productLine && <p id="productLine-error" className="mt-2 text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.productLine.message}</p>}
                </>

                <Field
                  label={labels.fields.quantity.label}
                  name="quantity"
                  placeholder={labels.fields.quantity.placeholder}
                  register={register}
                  error={errors.quantity}
                />

                <Field
                  label={labels.fields.unitPrice.label}
                  name="unitPrice"
                  placeholder={labels.fields.unitPrice.placeholder}
                  register={register}
                  error={errors.unitPrice}
                />

                <Field
                  label={labels.fields.totalValue.label}
                  name="totalValue"
                  placeholder={labels.fields.totalValue.placeholder}
                  register={register}
                  error={errors.totalValue}
                />

                <Field
                  label={labels.fields.deliverySchedule.label}
                  name="deliverySchedule"
                  placeholder={labels.fields.deliverySchedule.placeholder}
                  register={register}
                  error={errors.deliverySchedule}
                />

                <Field
                  label={labels.fields.warranty.label}
                  name="warranty"
                  placeholder={labels.fields.warranty.placeholder}
                  register={register}
                  error={errors.warranty}
                />

                <label className="flex items-start gap-3 rounded-xl border border-slate-700 bg-white/5 p-3 text-slate-200 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                  <input
                    type="checkbox"
                    {...register('termsAccepted')}
                    className="mt-1 h-4 w-4 rounded-lg border-slate-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>
                    {labels.fields.termsAccepted}
                  </span>
                </label>
                {errors.termsAccepted && <p className="text-rose-300 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{errors.termsAccepted.message}</p>}

                <FormDataNotice className="text-slate-300" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60 tracking-normal"
                >
                  {isSubmitting ? t.formSubmission.saving : labels.submit}
                </button>

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
    <SharedFormField
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      register={register}
      error={error}
      labelClassName="mb-2 block text-xs sm:text-sm font-semibold leading-5 text-slate-100"
      inputClassName="w-full rounded-lg border border-slate-700 bg-white/5 px-4 py-3 text-sm sm:text-base font-normal tracking-normal leading-6 text-white outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-600/30"
      errorClassName="mt-2 text-xs sm:text-sm font-normal tracking-normal leading-5 text-rose-300"
    />
  )
}
