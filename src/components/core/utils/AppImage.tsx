import Image, { ImageProps } from 'next/image'
import { getBasePath } from '@/lib/utils'

export default function AppImage({ src, alt, ...props }: ImageProps) {
  return <Image src={getBasePath() + src} alt={alt} {...props} />
}