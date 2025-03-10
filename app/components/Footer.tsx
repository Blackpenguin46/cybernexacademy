"use client"

import Link from "next/link"
import { Shield, Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Shield className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold text-white">CyberNex Academy</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Your comprehensive cybersecurity education platform
            </p>
            <p className="text-blue-400 font-medium italic text-sm mt-1">
              "Knowledge Is Security, Security Is Power"
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CyberNex Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

