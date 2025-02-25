import { Search, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function OSINT() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">OSINT (Open Source Intelligence) Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Maltego</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A powerful tool for data mining and information gathering, with graphical link analysis.
          </p>
          <Link href="https://www.maltego.com/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Shodan</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A search engine for Internet-connected devices, allowing users to find specific types of computers and devices.
          </p>
          <Link href="https://www.shodan.io/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">theHarvester</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A tool for gathering e-mail accounts, subdomains, hosts, employee names, open ports and banners from different public sources.
          </p>
          <Link href="https://github.com/laramies/theHarvester" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">OSINT Best Practices</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          When conducting OSINT investigations:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Always respect privacy and legal boundaries</li>
          <li>Verify information from multiple sources</li>
          <li>Document your sources and methodology</li>
          <li>Be aware of potential misinformation or disinformation</li>
          <li>Use OSINT tools ethically and responsibly</li>
        </ul>
      </section>
    </div>
  )
}

