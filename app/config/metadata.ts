import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'CyberNex - Cybersecurity Learning Platform',
    template: '%s | CyberNex'
  },
  description: 'Learn cybersecurity and advance your career with CyberNex',
  keywords: ['cybersecurity', 'learning', 'education', 'career'],
  authors: [{ name: 'CyberNex Team' }],
  creator: 'CyberNex',
  publisher: 'CyberNex',
  robots: {
    index: true,
    follow: true
  }
} 