import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { PageWrapper } from './components/PageWrapper'
import { AuthProvider } from '@/app/contexts/AuthContext'
import { Navigation } from '@/app/components/Navigation'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex",
  description: "Your gateway to cybersecurity knowledge and career growth",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <AuthProvider>
          <Navigation />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}

