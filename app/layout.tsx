import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
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
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: "CyberNex Academy - Your Gateway to Cybersecurity",
  description: "Comprehensive cybersecurity learning platform for students and professionals",
  generator: 'Next.js',
  applicationName: 'CyberNex Academy',
  referrer: 'origin-when-cross-origin',
  keywords: ['cybersecurity', 'learning', 'academy', 'security', 'hacking', 'defense'],
  authors: [{ name: 'CyberNex Team' }],
  creator: 'CyberNex Academy',
  publisher: 'CyberNex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow relative">{children}</main>
        <div className="relative z-20">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

