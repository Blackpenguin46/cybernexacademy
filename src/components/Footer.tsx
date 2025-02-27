import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-fundamentals" className="hover:text-gray-300">
                  About Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/careers/jobs" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications" className="hover:text-gray-300">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/cybernex-plus" className="hover:text-gray-300">
                  CyberNex Plus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>Email: support@cybernex.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CyberNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

