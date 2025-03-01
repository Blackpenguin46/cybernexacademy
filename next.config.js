/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable SSG/SSR for auth-protected pages
  // This is the most reliable way to prevent the build error
  unstable_excludeFiles: [
    '**/components/DashboardContent.js',
    '**/components/PremiumDashboardContent.js',
    '**/components/MentorshipContent.js',
  ],
  // Disable image optimization for best Netlify compatibility
  images: {
    unoptimized: true,
  },
  // For Netlify compatibility
  output: 'standalone',
}

module.exports = nextConfig