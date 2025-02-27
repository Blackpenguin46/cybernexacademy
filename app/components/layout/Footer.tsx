import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CyberNex</h3>
            <p className="text-gray-300">
              Your gateway to cybersecurity learning and career advancement
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CyberNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 