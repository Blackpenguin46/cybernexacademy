import { PenTool, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function PenetrationTesting() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Penetration Testing Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PenTool className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Metasploit Framework</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A powerful open-source penetration testing and exploitation framework.
          </p>
          <Link href="https://www.metasploit.com/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PenTool className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Nmap</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A versatile network scanner used for network discovery and security auditing.
          </p>
          <Link href="https://nmap.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PenTool className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Burp Suite</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An integrated platform for performing security testing of web applications.
          </p>
          <Link href="https://portswigger.net/burp" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Getting Started with Penetration Testing</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Penetration testing, or ethical hacking, is a crucial aspect of cybersecurity. Here are some steps to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Learn the basics of networking and web technologies</li>
          <li>Set up a lab environment using virtual machines</li>
          <li>Start with basic tools like Nmap and Wireshark</li>
          <li>Practice on intentionally vulnerable systems like DVWA or Metasploitable</li>
          <li>Join online communities and participate in CTF competitions</li>
        </ol>
      </section>
    </div>
  )
}

