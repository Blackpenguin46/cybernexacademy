/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // For Netlify compatibility
  output: 'standalone',
  // Experimental features config for Next.js 14
  experimental: {
    // Disable app directory
    appDir: false,
    // Disable middleware
    serverComponentsExternalPackages: [],
    esmExternals: true,
  },
  // Avoid bundling @netlify/edge-functions incorrectly
  webpack: (config, { isServer }) => {
    // Fix for Netlify edge functions
    if (isServer) {
      config.externals = [...(config.externals || []), '@netlify/edge-functions']
    }
    return config
  },
}

module.exports = nextConfig