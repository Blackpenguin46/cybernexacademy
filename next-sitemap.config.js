/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cybernex.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
} 