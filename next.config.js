/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'hpfpuljthcngnswwfkrb.supabase.co'],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },

  async headers() {
    const cspValue = `default-src 'self';
      script-src 'self' 'unsafe-inline' https://*.vercel.app https://vercel.live;
      script-src-elem 'self' 'unsafe-inline' https://*.vercel.app https://vercel.live;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' blob: data: https://*.googleusercontent.com https://*.supabase.co;
      font-src 'self' https://fonts.gstatic.com data:;
      connect-src 'self' https://*.supabase.co https://hpfpuljthcngnswwfkrb.supabase.co https://api.openai.com https://fonts.googleapis.com https://fonts.gstatic.com https://vercel.live;
      frame-src 'self' https://vercel.live;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      block-all-mixed-content;
      upgrade-insecure-requests;`.replace(/\n/g, '');

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspValue,
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless',
          },
        ],
      },
      {
        source: '/:path*.js',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;