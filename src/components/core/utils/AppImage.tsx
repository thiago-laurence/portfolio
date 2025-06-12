'use client';
import { useState } from 'react';
import { Loader } from "@/components/core/utils/Loader";
import Image, { ImageProps } from 'next/image'
import { getBasePath } from '@/lib/utils'

interface AppImageProps extends ImageProps {
  errorImage?: string;
}

export default function AppImage({ src, alt, errorImage, ...props }: AppImageProps) {
  const [error, setError] = useState(false);
  const isExternal = typeof src === 'string' && src.startsWith('https');
  const url = (isExternal) ? src : getBasePath() + src;

  if (error) {
    return (
      <>
        {errorImage ? (
          <Image src={errorImage} alt="Error loading image" {...props} />
        ) : (
          <Loader />
        )}
      </>
    );
  }

  return (
    <Image src={url} alt={alt} onError={() => setError(true)} {...props} />
  );
}