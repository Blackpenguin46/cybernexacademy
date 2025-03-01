/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable image optimization for best Netlify compatibility
  images: {
    unoptimized: true,  
  },
  // Configure your protected routes to be dynamic
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // For Netlify compatibility
  output: 'standalone',
  // Modify runtime settings
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  compiler: {
    styledComponents: true,
  },
  // Set routes to be server-side rendered or completely static
  async headers() {
    return [
      {
        source: '/(dashboard|premium/dashboard|communities/mentorship)',
        headers: [
          {
            key: 'x-auth-protected',
            value: 'true',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig