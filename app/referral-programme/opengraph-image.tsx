import {
  brandOpenGraphImageSize,
  createBrandOpenGraphImage,
} from '@/app/components/seo/BrandOpenGraphImage'

export const alt = 'AeroSun Energy solar referral programme'
export const size = brandOpenGraphImageSize
export const contentType = 'image/png'

export default function Image() {
  return createBrandOpenGraphImage({
    category: 'Share clean energy',
    title: 'Solar Referral Programme',
    description:
      'Refer a neighbour or friend to AeroSun Energy and learn about referral incentives.',
  })
}
