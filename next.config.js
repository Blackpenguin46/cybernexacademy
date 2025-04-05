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
        // Apply CSP headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://cybernex-git-main-cybernexacademy.vercel.app https://*.vercel.app;
              script-src-elem 'self' 'unsafe-inline' https://cybernex-git-main-cybernexacademy.vercel.app https://*.vercel.app;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cybernex-git-main-cybernexacademy.vercel.app;
              style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://cybernex-git-main-cybernexacademy.vercel.app;
              img-src 'self' blob: data: https://*.googleusercontent.com https://*.supabase.co;
              font-src 'self' https://fonts.gstatic.com data:;
              connect-src 'self' https://*.supabase.co https://api.openai.com https://fonts.googleapis.com https://fonts.gstatic.com;
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

