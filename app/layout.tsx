import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono, Orbitron } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Providers } from "./providers"
import Navbar from './components/Navbar'

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space-mono'
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: "CyberNex Academy",
  description: "Your gateway to mastering cybersecurity skills with expert-led courses, hands-on labs, and a supportive community.",
  keywords: ["cybersecurity", "academy", "courses", "learning", "cyber", "security", "education", "online courses"],
  authors: [{ name: "CyberNex Academy Team" }],
  creator: "CyberNex Academy",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#111827",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceMono.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} antialiased bg-dark-background text-white min-h-screen flex flex-col`}>
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute left-1/2 top-1/3 w-[800px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>
        
        {/* Accent lines */}
        <div className="fixed top-0 left-20 bottom-0 w-px bg-gradient-to-b from-neon-blue/0 via-neon-blue/10 to-neon-blue/0 z-[-1]" />
        <div className="fixed top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent z-[-1]" />

        {/* Main layout */}
        <Navbar />
        
        <main className="flex-1 pt-16 w-full mx-auto max-w-[1920px]">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}

