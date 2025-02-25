import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">CyberNex</h3>
            <p className="text-sm">Your gateway to cybersecurity knowledge and skills.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/learn" className="hover:text-gray-300">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/certifications-careers" className="hover:text-gray-300">
                  Certifications & Careers
                </Link>
              </li>
              <li>
                <Link to="/tools-utilities" className="hover:text-gray-300">
                  Tools & Utilities
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-gray-300">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: info@cybernex.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 CyberNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

