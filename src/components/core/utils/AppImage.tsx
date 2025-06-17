'use client';
import { useState } from 'react';
import Image, { ImageProps } from 'next/image'
import { getBasePath } from '@/lib/utils'

type AppImageProps = ImageProps & {
  fallbackSrc?: string;
}

export default function AppImage({ src, alt, fallbackSrc = '/file.svg', ...props }: AppImageProps) {
  const [error, setError] = useState(false);
  const isExternal = typeof src === 'string' && src.startsWith('https');
  const url = (isExternal) ? src : getBasePath() + src;

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : url}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}