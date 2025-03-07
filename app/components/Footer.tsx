"use client"

import Link from "next/link"
import { Shield, Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 mr-2 text-blue-500" />
              <span className="text-lg font-bold">CyberNex</span>
            </div>
            <p className="text-gray-400 mb-4">Your gateway to cybersecurity knowledge and career growth.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Academy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academy/courses" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/academy/labs" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Hands-On Labs
                </Link>
              </li>
              <li>
                <Link href="/academy/certifications" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/academy/challenges" className="text-gray-400 hover:text-blue-500 transition-colors">
                  CTF Challenges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community/forum" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/community/mentorship" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/community/blog" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
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

