import { Shield, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function DefensiveSecurity() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Defensive Security Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Snort</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An open-source intrusion detection system (IDS) capable of real-time traffic analysis and packet logging.
          </p>
          <Link href="https://www.snort.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Wireshark</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A widely-used network protocol analyzer for network troubleshooting and analysis.
          </p>
          <Link href="https://www.wireshark.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">OSSEC</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An open-source host-based intrusion detection system that performs log analysis, integrity checking, and more.
          </p>
          <Link href="https://www.ossec.net/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Importance of Defensive Security</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Defensive security is crucial for protecting organizations from cyber threats. Key aspects include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Continuous monitoring of networks and systems</li>
          <li>Implementing and maintaining strong access controls</li>
          <li>Regular security assessments and vulnerability management</li>
          <li>Incident response planning and execution</li>
          <li>Employee security awareness training</li>
        </ul>
      </section>
    </div>
  )
}

