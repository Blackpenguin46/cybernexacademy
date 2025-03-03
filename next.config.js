/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // For Netlify compatibility
  output: 'standalone',
  // No webpack customization at all
}

module.exports = nextConfig