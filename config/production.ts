import { defineConfig } from '@vercel/edge-config';

export default defineConfig({
  // Security Headers
  headers: [
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
  ],

  // Redirect all HTTP traffic to HTTPS
  redirects: [
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
  ],

  // Security-focused build settings
  build: {
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  },

  // Rate limiting configuration
  experimental: {
    rateLimit: {
      // 100 requests per minute per IP
      max: 100,
      timeWindow: '1m'
    }
  }
}); 