import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AnimatedBackground from "./components/AnimatedBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex Academy",
  description: "Your gateway to mastering cybersecurity skills with expert-led courses, hands-on labs, and a supportive community.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800`}>
        <div className="relative">
          <AnimatedBackground />
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

