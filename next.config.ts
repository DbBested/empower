import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Old routes removed in the overhaul (Phase 4). Permanent (308) since these
  // paths are gone for good and now map onto the new by-topic IA.
  async redirects() {
    return [
      { source: '/webinars', destination: '/', permanent: true },
      { source: '/tutoring', destination: '/resources/tutoring-guidelines', permanent: true },
      { source: '/resources', destination: '/resources/tutoring-guidelines', permanent: true },
      { source: '/join-us', destination: '/chapters', permanent: true },
    ];
  },
};

export default nextConfig;
