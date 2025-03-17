import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cybernex.vercel.app'
  
  // Main static pages
  const staticPages = [
    '',
    '/community',
    '/insights',
    '/academy',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Community pages
  const communityPages = [
    '/community/github',
    '/community/reddit',
    '/community/discord',
    '/community/substack',
    '/community/linkedin',
    '/community/skool',
    '/community/forums',
    '/community/events',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Insights pages
  const insightsPages = [
    '/insights/news',
    '/insights/research',
    '/insights/cases',
    '/insights/threats',
    '/insights/industry',
    '/insights/practices',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))
  
  // Academy pages
  const academyPages = [
    '/academy/foundational',
    '/academy/intermediate',
    '/academy/advanced',
    '/academy/courses',
    '/academy/youtube',
    '/academy/labs',
    '/academy/certifications',
    '/academy/general',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Combine all routes
  return [
    ...staticPages,
    ...communityPages,
    ...insightsPages,
    ...academyPages,
  ]
} 