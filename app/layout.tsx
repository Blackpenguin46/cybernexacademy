import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from "./components/ui/toast"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "CyberNex Academy - Your Gateway to Cybersecurity",
    template: "%s | CyberNex Academy"
  },
  description: "Comprehensive cybersecurity learning platform with courses, community resources, and insights for students and professionals",
  generator: 'Next.js',
  applicationName: 'CyberNex Academy',
  referrer: 'origin-when-cross-origin',
  keywords: ['cybersecurity', 'learning', 'academy', 'security', 'hacking', 'defense', 'cyber education', 'infosec', 'network security', 'ethical hacking', 'security training'],
  authors: [{ name: 'CyberNex Team' }],
  creator: 'CyberNex Academy',
  publisher: 'CyberNex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cybernex.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CyberNex Academy',
    description: 'Your comprehensive cybersecurity education platform with courses, community resources, and insights',
    url: 'https://cybernex.vercel.app',
    siteName: 'CyberNex Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CyberNex Academy - Cybersecurity Education Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberNex Academy - Cybersecurity Education',
    description: 'Comprehensive cybersecurity learning platform for students and professionals',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://analytics.example.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://api.example.com;" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-blue focus:text-white">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-grow relative">{children}</main>
        <div className="relative z-20">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

