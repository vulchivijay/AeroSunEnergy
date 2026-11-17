import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'AeroSun Energy account access'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Customer account',
    title: 'AeroSun Energy Account',
    description: 'Sign in, create an account, or access your AeroSun Energy dashboard.',
  })
}
