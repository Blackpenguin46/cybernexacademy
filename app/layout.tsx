import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CursorTrail from "./components/CursorTrail"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberNex Academy",
  description: "Your gateway to cybersecurity knowledge and career growth",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-black cyber-bg scanline`}>
        <CursorTrail />
        <Header />
        <div className="flex-grow relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

