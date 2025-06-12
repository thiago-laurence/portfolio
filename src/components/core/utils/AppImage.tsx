import Image, { ImageProps } from 'next/image'

/**
 * Agrega automáticamente el basePath definido en NEXT_PUBLIC_BASE_PATH
 * solo si el src es una imagen local (empieza con "/").
 */
export default function AppImage({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} {...props} />
}