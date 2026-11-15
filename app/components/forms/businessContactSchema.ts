import { z } from 'zod'
import { createEmailAddressSchema, createIndianMobileSchema } from '@/lib/validation/contact'

export type BusinessContactValidation = {
  customerName: string
  email: string
  phoneLength: string
  phoneFormat: string
}

export function createBusinessContactSchema(validation: BusinessContactValidation) {
  return z.object({
    customerName: z.string().trim().min(2, validation.customerName),
    companyName: z.string().trim().optional().or(z.literal('')),
    email: createEmailAddressSchema(validation.email),
    phone: createIndianMobileSchema(validation.phoneFormat, validation.phoneLength),
  })
}
