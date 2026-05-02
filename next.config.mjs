/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all domains, use with caution
      },
    ],
  },
};

export default nextConfig;
