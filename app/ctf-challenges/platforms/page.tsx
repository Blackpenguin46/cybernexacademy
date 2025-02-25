import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function CTFPlatforms() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">CTF Platforms</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">HackTheBox</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A platform offering various cybersecurity challenges and virtual machines to hack. 
            Great for both beginners and advanced users.
          </p>
          <Link href="https://www.hackthebox.eu/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Visit HackTheBox <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">TryHackMe</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An online platform that teaches cybersecurity through short, gamified real-world labs. 
            Offers both free and paid content.
          </p>
          <Link href="https://tryhackme.com/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Visit TryHackMe <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">PicoCTF</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A free computer security education program with original content built on a capture-the-flag framework. 
            Designed for beginners and hosted by Carnegie Mellon University.
          </p>
          <Link href="https://picoctf.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Visit PicoCTF <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

