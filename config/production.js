/**
 * @type {import('next').NextConfig}
 */
const productionConfig = {
  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ];
  },

  // Redirect all HTTP traffic to HTTPS
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        permanent: true,
        destination: 'https://:path*'
      }
    ];
  },

  // Security-focused build settings
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
    minimumCacheTTL: 60,
    formats: ['image/webp']
  },

  // Strict mode for better error catching
  reactStrictMode: true,

  // Standalone output for better deployment
  output: 'standalone',

  // Experimental features
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXTAUTH_URL || ''],
      bodySizeLimit: '2mb'
    }
  }
};

module.exports = productionConfig; 