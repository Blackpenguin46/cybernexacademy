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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-white min-h-screen flex flex-col`}>
        {/* Cybersecurity-themed background elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          {/* Matrix-like code rain effect background */}
          <div className="absolute inset-0 bg-[url('/images/matrix-bg.png')] opacity-[0.07]"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
          
          {/* Digital circuit-like lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-60"></div>
          <div className="absolute top-0 bottom-0 left-20 w-[1px] bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-30"></div>
          <div className="absolute top-0 bottom-0 right-20 w-[1px] bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-30"></div>
          
          {/* Glowing orbs for depth */}
          <div className="absolute left-1/4 top-1/3 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[100px]"></div>
        </div>
        
        {/* HUD-like elements for cybersecurity feel */}
        <div className="fixed top-0 left-0 w-[120px] h-[120px] border-t-2 border-l-2 border-neon-blue/30 opacity-60 pointer-events-none"></div>
        <div className="fixed top-0 right-0 w-[120px] h-[120px] border-t-2 border-r-2 border-neon-green/30 opacity-60 pointer-events-none"></div>
        <div className="fixed bottom-0 left-0 w-[120px] h-[120px] border-b-2 border-l-2 border-neon-green/30 opacity-60 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-[120px] h-[120px] border-b-2 border-r-2 border-neon-blue/30 opacity-60 pointer-events-none"></div>

        {/* Main layout */}
        <Navbar />
        
        <main className="flex-1 w-full mx-auto max-w-[1920px] pt-16">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}

