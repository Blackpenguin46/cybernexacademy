import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberNex Academy - Your Ultimate Cybersecurity Resource Hub',
  description: 'CyberNex Academy is revolutionizing how you discover and access cybersecurity resources, from beginner to expert.',
  icons: {
    icon: [
      {
        url: '/icons/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

