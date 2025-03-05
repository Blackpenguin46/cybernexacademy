import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex Academy",
  description: "Your gateway to mastering cybersecurity skills with expert-led courses, hands-on labs, and a supportive community.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
        <div className="relative z-50">
          <Header />
          <Navbar />
        </div>
        <main className="flex-grow relative z-10 mt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

