import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Mono, Orbitron } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import { Providers } from "./providers"

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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceMono.variable} ${orbitron.variable}`}>
      <body className="min-h-screen flex flex-col bg-dark text-white font-sans">
        <Providers>
          {/* Animated background with grid and gradients */}
          <div className="fixed inset-0 bg-cyber-grid bg-grid-md opacity-20 pointer-events-none"></div>
          <div className="fixed inset-0 bg-gradient-radial from-cyber-purple/5 via-dark to-dark pointer-events-none"></div>
          
          {/* Accent lines - top */}
          <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-70"></div>
          
          {/* Sidebar Navigation */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex flex-col flex-1 min-h-screen">
            {/* Main Content Area */}
            <main className="flex-grow mt-6 md:mt-0 pb-20 w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pl-[280px] transition-all duration-300">
                {children}
              </div>
            </main>
            
            {/* Footer - Only visible at bottom of page */}
            <div className="md:pl-[280px] transition-all duration-300">
              <Footer />
            </div>
          </div>
          
          {/* Accent lines - bottom */}
          <div className="fixed bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-70"></div>
        </Providers>
      </body>
    </html>
  )
}

