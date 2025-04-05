/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
  },
  // Add env fallbacks
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  // Add Content Security Policy headers
  async headers() {
    return [
      {
        // TEMPORARY DEBUGGING - EXTREMELY PERMISSIVE - DO NOT USE IN PRODUCTION
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self'; 
              script-src * 'unsafe-inline' 'unsafe-eval'; 
              script-src-elem * 'unsafe-inline'; 
              style-src * 'unsafe-inline'; 
              style-src-elem * 'unsafe-inline'; 
              img-src 'self' blob: data: https:; 
              font-src 'self' data: https:; 
              connect-src *; 
              frame-src 'self'; 
              object-src 'none'; 
              base-uri 'self'; 
              form-action 'self'; 
              frame-ancestors 'none'; 
              block-all-mixed-content; 
              upgrade-insecure-requests; 
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig

