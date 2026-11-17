import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'Solar financing options from AeroSun Energy'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Solar financing',
    title: 'Solar Financing Options',
    description:
      'Explore rooftop solar loan eligibility, product terms, and application steps for PM Surya Ghar.',
  })
}
