/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Environment variables must be strings in Next.js
  env: {
    IS_BUILD: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },
  // Use webpack to replace auth implementation during build
  webpack: (config, { isServer, dev }) => {
    if (!dev && isServer) {
      // Replace auth imports with mock implementation during build
      config.resolve.alias['lib/auth'] = require.resolve('./lib/mock-auth.js');
    }
    return config;
  },
  // For Netlify compatibility
  output: 'standalone',
}

module.exports = nextConfig