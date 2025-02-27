import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'CyberNex',
  description: 'Next generation cybersecurity platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
} 