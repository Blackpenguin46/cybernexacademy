import Link from "next/link";
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

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
              <a href="https://github.com" className="text-gray-400 hover:text-blue-500">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learning/paths" className="text-gray-400 hover:text-blue-500">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/learning/labs" className="text-gray-400 hover:text-blue-500">
                  Hands-On Labs
                </Link>
              </li>
              <li>
                <Link href="/learning/certifications" className="text-gray-400 hover:text-blue-500">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/learning/challenges" className="text-gray-400 hover:text-blue-500">
                  CTF Challenges
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community/forum" className="text-gray-400 hover:text-blue-500">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link href="/community/events" className="text-gray-400 hover:text-blue-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/community/mentorship" className="text-gray-400 hover:text-blue-500">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="/community/blog" className="text-gray-400 hover:text-blue-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-500">
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
  );
};

export default Footer;