import Link from "next/link"
import { Shield, Twitter, Linkedin, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start text-2xl font-bold text-foreground"
            >
              <Shield className="w-8 h-8 mr-2" />
              CyberNex
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Your central hub for all things cybersecurity and IT.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-foreground transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CyberNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

