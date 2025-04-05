/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['vxxpwaloyrtwvpmatzpc.supabase.co'],
  },
  // Add env fallbacks
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  // Add Content Security Policy headers
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      script-src-elem 'self' 'unsafe-inline' *.vercel.app vercel.app;
      style-src 'self' 'unsafe-inline' fonts.googleapis.com *.googleapis.com;
      style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com *.googleapis.com;
      img-src 'self' vxxpwaloyrtwvpmatzpc.supabase.co thehackernews.com *.thehackernews.com feeds.feedburner.com *.feedburner.com *.bleepingcomputer.com krebsonsecurity.com *.darkreading.com securityweek.com *.securityweek.com data: blob: *;
      font-src 'self' fonts.gstatic.com *.gstatic.com data:;
      connect-src 'self' thehackernews.com *.thehackernews.com api.rss2json.com *.rss2json.com api.factmaven.com *.factmaven.com www.thehackernews.com feeds.feedburner.com *.feedburner.com feedburner.com *.bleepingcomputer.com krebsonsecurity.com *.darkreading.com securityweek.com *.securityweek.com;
      frame-src thehackernews.com *.thehackernews.com *.bleepingcomputer.com krebsonsecurity.com *.darkreading.com securityweek.com *.securityweek.com;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/(.*)', // Apply CSP to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig

