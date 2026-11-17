import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'AeroSun Energy privacy and data protection policies'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Privacy & data protection',
    title: 'Policies',
    description:
      'Understand how AeroSun Energy collects, uses, and protects personal information.',
  })
}
