import Link from 'next/link'
import { Book, Video, PenToolIcon as Tool, ExternalLink } from 'lucide-react'

export default function LearningResources() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">CTF Learning Resources</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Books</h2>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                Hacking: The Art of Exploitation <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                The Web Application Hacker's Handbook <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Video className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Video Tutorials</h2>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="https://www.youtube.com/c/LiveOverflow" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                LiveOverflow YouTube Channel <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/JohnHammond010" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                John Hammond YouTube Channel <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Tool className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Tools</h2>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="https://www.kali.org/" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                Kali Linux <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="https://www.metasploit.com/" className="hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
                Metasploit Framework <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

