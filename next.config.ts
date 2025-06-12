import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'merakiui.com',
        port: '',
        pathname: '/images/components/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/devicons/devicon/raw/v2.16.0/icons/**',
      },
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        port: '',
        pathname: '/images/junhok82/post/**',
      },
    ],
  },
};

export default nextConfig;
