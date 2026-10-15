"use client"

import Image, { ImageProps } from 'next/image'
import React from 'react'
import { generateImagePlaceholder } from '@/lib/imagePlaceholder'

type Props = Omit<ImageProps, 'src'> & { src: string }

export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  placeholder,
  blurDataURL,
  ...rest
}: Props) {
  const computedBlurDataURL =
    blurDataURL ??
    (src.startsWith('/images/')
      ? generateImagePlaceholder(18, 10, '#eaf7ee', '#f4fbf6')
      : undefined)

  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} object-cover`}
      placeholder={placeholder ?? (computedBlurDataURL ? 'blur' : 'empty')}
      blurDataURL={computedBlurDataURL}
      sizes={rest.sizes ?? '100vw'}
      {...rest}
    />
  )
}
