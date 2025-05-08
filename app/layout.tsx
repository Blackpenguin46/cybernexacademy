
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from "./components/ui/toast"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CyberNex Academy: Learn Cybersecurity | Free Resources & Beginner Guides',
  description: 'Start your cybersecurity journey with free resources, beginner-friendly labs, and expert guides. CyberNex Academy helps you break into cybersecurity.',
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
  metadataBase: new URL('https://www.cybernexacademy.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CyberNex Academy',
    description: 'Your comprehensive cybersecurity education platform with courses, community resources, and insights.',
    url: 'https://www.cybernexacademy.com',
    siteName: 'CyberNex Academy',
    images: [
      {
        url: 'https://www.cybernexacademy.com/cybernex-og.png',
        width: 1200,
        height: 630,
        alt: 'CyberNex Academy OG Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CyberNex Academy',
    description: 'Courses, community, and cybersecurity insights – all in one place.',
    images: ['https://www.cybernexacademy.com/cybernex-og.png'],
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
};

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cybernex Academy",
    "url": "https://www.cybernexacademy.com",
    "logo": "https://www.cybernexacademy.com/apple-touch-icon.png"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Security Headers */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NNRXC8BK');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNRXC8BK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-grow relative">{children}</main>
        <div className="relative z-20">
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

