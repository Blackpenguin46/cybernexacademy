/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'vxxpwaloyrtwvpmatzpc.supabase.co'],
  },
  // Add env fallbacks
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  // Reinstating CSP headers now that conflicting meta tag is removed
  async headers() {
    // Define the CSP string directly without complex replacements
    const cspValue = `default-src 'self'; script-src 'self' 'unsafe-inline' https://*.vercel.app; script-src-elem 'self' 'unsafe-inline' https://*.vercel.app; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://*.googleusercontent.com https://*.supabase.co; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://*.supabase.co https://api.openai.com https://fonts.googleapis.com https://fonts.gstatic.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests;`;

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspValue,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

