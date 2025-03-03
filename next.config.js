/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // For Netlify compatibility
  output: 'standalone',
  // Disable ESLint during builds to avoid issues
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig