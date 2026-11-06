import { z } from 'zod'

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
    email: z.string().trim().email(validation.email),
    phone: z
      .string()
      .trim()
      .min(10, validation.phoneLength)
      .regex(/^[0-9+()\-\s]+$/, validation.phoneFormat),
  })
}
