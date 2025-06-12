import Image, { ImageProps } from 'next/image'
import { getBasePath } from '@/lib/utils'

export default function AppImage({ src, alt, ...props }: ImageProps) {
  const isExternal = typeof src === 'string' && src.startsWith('https');
  const url = (isExternal) ? src : getBasePath() + src;
  return <Image src={url} alt={alt} {...props} />
}