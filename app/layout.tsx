import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex Academy - Your Gateway to Cybersecurity",
  description: "Comprehensive cybersecurity learning platform for students and professionals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

