"use client"

import Image, { ImageProps } from 'next/image'
import React from 'react'

type Props = Omit<ImageProps, 'src'> & { src: string | URL }

export default function OptimizedImage({ src, alt = '', className = '', ...rest }: Props) {
  // local images (public/) will be served by Next; external images should be whitelisted in next.config
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} object-cover`}
      placeholder="empty"
      sizes={rest.sizes ?? '100vw'}
      {...rest}
    />
  )
}
