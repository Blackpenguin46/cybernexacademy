import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CyberNex Academy',
    short_name: 'CyberNex',
    description: 'Comprehensive cybersecurity learning platform with courses, community resources, and insights',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#0078ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'security', 'cybersecurity'],
    screenshots: [
      {
        src: '/screenshot1.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
      },
      {
        src: '/screenshot2.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
      },
    ],
    shortcuts: [
      {
        name: 'Community',
        url: '/community',
        description: 'Connect with the cybersecurity community',
      },
      {
        name: 'Academy',
        url: '/academy',
        description: 'Learn cybersecurity skills',
      },
      {
        name: 'Insights',
        url: '/insights',
        description: 'Latest cybersecurity news and trends',
      },
    ],
  }
} 