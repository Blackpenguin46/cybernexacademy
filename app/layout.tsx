import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex Academy - Master Cybersecurity",
  description: "Your gateway to cybersecurity knowledge and career growth. Join our community of learners and advance your cybersecurity journey today.",
  keywords: "cybersecurity, education, training, hacking, security, certification",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-black cyber-bg scanline`}>
        <div className="flex flex-col min-h-screen">
          {/* Top Navigation */}
          <div className="fixed w-full z-50">
            <Header />
            <Navbar />
          </div>

          {/* Main Content */}
          <main className="flex-grow pt-32">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}

