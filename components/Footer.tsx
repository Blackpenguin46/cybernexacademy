export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About CyberNex</h3>
            <p className="text-gray-400">
              Your gateway to cybersecurity knowledge and career growth
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/learning-resources" className="text-gray-400 hover:text-white">
                  Learning Resources
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: support@cybernex.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyberNex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 