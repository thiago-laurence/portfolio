'use client'

import Image, { ImageProps } from 'next/image'

/**
 * Agrega automáticamente el basePath definido en NEXT_PUBLIC_BASE_PATH
 * solo si el src es una imagen local (empieza con "/").
 */
export default function AppImage({ src, alt, ...props }: ImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const isLocal = typeof src === 'string' && src.startsWith('/')

  const adjustedSrc = isLocal ? `${basePath}${src}` : src

  return <Image src={adjustedSrc} alt={alt} {...props} />
}