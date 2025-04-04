"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import Script from "next/script"

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative z-10" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center" aria-label="CyberNex Academy home">
              <Shield className="h-8 w-8 text-blue-500 mr-2" aria-hidden="true" />
              <span className="text-xl font-bold text-white">CyberNex Academy</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Your comprehensive cybersecurity education platform
            </p>
            <p className="text-blue-400 font-medium italic text-sm mt-1">
              Knowledge Is Security, Security Is Power
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="About CyberNex Academy">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Contact us">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CyberNex Academy. All rights reserved.</p>
        </div>

        {/* Social links with titles for better SEO */}
        <div className="flex justify-center mt-4 gap-4">
          <a href="https://cybernex-academy.substack.com" className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer" title="CyberNex on Substack" aria-label="CyberNex Substack profile">
            <span className="h-5 w-5" aria-hidden="true">Substack</span>
          </a>
        </div>
      </div>

      {/* Schema.org JSON-LD for better SEO */}
      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "CyberNex Academy",
            "url": "https://cybernex.vercel.app",
            "logo": "https://cybernex.vercel.app/logo.png",
            "description": "Comprehensive cybersecurity education platform offering courses, community resources, and security insights",
            "email": "cybernexacademy@proton.me",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://cybernex-academy.substack.com"
            ]
          }
        `}
      </Script>
    </footer>
  )
}

export default Footer

