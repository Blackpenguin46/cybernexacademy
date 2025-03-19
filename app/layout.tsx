import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toast';
import { ErrorBoundary } from 'react-error-boundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CyberNex Academy',
  description: 'Cybersecurity learning and community platform',
  keywords: ['cybersecurity', 'education', 'learning', 'cyber', 'security', 'tech', 'IT security'],
  authors: [{ name: 'CyberNex Team' }],
  creator: 'CyberNex Academy',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add a meta tag to help with debugging */}
        <meta name="deployed-at" content={new Date().toISOString()} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
        
        {/* Add a small debug link at the bottom of the page */}
        <div className="fixed bottom-2 right-2 text-xs z-40">
          <a 
            href="/diagnostics" 
            className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors"
          >
            Diagnostics
          </a>
        </div>
        
        {/* Wrap analytics components in error boundaries */}
        <ErrorBoundary fallback={<></>} onError={(error) => console.error('Analytics error:', error)}>
          <Analytics />
        </ErrorBoundary>
        <ErrorBoundary fallback={<></>} onError={(error) => console.error('Speed Insights error:', error)}>
          <SpeedInsights />
        </ErrorBoundary>
      </body>
    </html>
  );
}

