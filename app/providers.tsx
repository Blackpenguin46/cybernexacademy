"use client"

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'framer-motion'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ThemeProvider>
  )
}

