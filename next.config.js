/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Vercel deployment, we don't need to use standalone output
  // as Vercel has its own optimized build process
  // output: "standalone",
  images: {
    domains: [],
    // Vercel automatically optimizes images, so we don't need to disable optimization
    // unoptimized: true,
  },
  // Ensure we're not using experimental features that might cause issues
  experimental: {
    // Add any necessary experimental features here
  },
  // Disable eslint during build to speed up deployment (you can remove this if you want eslint checks)
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

