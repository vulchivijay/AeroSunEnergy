import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'Billing and project documents from AeroSun Energy'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Customer resources',
    title: 'Billing & Project Documents',
    description:
      'Customer forms and project resources for renewable energy enquiries, billing, installation, and service.',
  })
}
