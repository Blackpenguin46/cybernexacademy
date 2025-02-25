import { Code, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function CodingScripting() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Coding & Scripting Tools for Cybersecurity</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Python</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A versatile programming language widely used in cybersecurity for scripting, automation, and tool development.
          </p>
          <Link href="https://www.python.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Bash</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A Unix shell and command language used for system administration, network scanning, and automation in cybersecurity.
          </p>
          <Link href="https://www.gnu.org/software/bash/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">PowerShell</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A task automation and configuration management framework from Microsoft, useful for Windows system administration and security tasks.
          </p>
          <Link href="https://docs.microsoft.com/en-us/powershell/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Importance of Coding in Cybersecurity</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Coding and scripting skills are crucial in cybersecurity for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Automating repetitive tasks and improving efficiency</li>
          <li>Developing custom tools for specific security needs</li>
          <li>Analyzing and manipulating large datasets</li>
          <li>Reverse engineering malware and understanding attack vectors</li>
          <li>Creating and testing exploit code (for ethical hacking and penetration testing)</li>
        </ul>
      </section>
    </div>
  )
}

