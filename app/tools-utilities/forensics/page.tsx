import { Search, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function DigitalForensics() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Digital Forensics Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Autopsy</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An open-source digital forensics platform for analyzing hard drives and smartphones.
          </p>
          <Link href="https://www.autopsy.com/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Volatility</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An advanced memory forensics framework for incident response and malware analysis.
          </p>
          <Link href="https://www.volatilityfoundation.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Sleuth Kit</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A collection of command-line tools for investigating disk images and recovering files.
          </p>
          <Link href="https://www.sleuthkit.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Digital Forensics Process</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Digital forensics involves several key steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Identification: Recognizing and documenting potential sources of evidence</li>
          <li>Preservation: Securing and isolating the evidence to prevent tampering</li>
          <li>Analysis: Examining the evidence using various tools and techniques</li>
          <li>Documentation: Recording all findings and processes used</li>
          <li>Presentation: Explaining the findings in a clear, understandable manner</li>
        </ol>
      </section>
    </div>
  )
}

