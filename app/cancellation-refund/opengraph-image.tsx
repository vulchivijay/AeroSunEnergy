import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'Cancellation and refund policy for AeroSun Energy customers'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Customer policy',
    title: 'Cancellation & Refund Policy',
    description:
      'Review cancellation eligibility, refund timelines, and the refund process for solar projects.',
  })
}
