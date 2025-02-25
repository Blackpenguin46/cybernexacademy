import { Lock, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Cryptography() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cryptography Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">OpenSSL</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A robust, full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols.
          </p>
          <Link href="https://www.openssl.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">GnuPG</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            GNU Privacy Guard, a complete and free implementation of the OpenPGP standard for encrypting and signing data.
          </p>
          <Link href="https://gnupg.org/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">CyberChef</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A web app for encryption, encoding, compression, and data analysis.
          </p>
          <Link href="https://gchq.github.io/CyberChef/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center" target="_blank" rel="noopener noreferrer">
            Learn More <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Importance of Cryptography in Cybersecurity</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cryptography plays a crucial role in ensuring:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Confidentiality: Keeping information secret from unauthorized parties</li>
          <li>Integrity: Ensuring that information hasn't been tampered with</li>
          <li>Authentication: Verifying the identity of parties in communication</li>
          <li>Non-repudiation: Preventing denial of actions or commitments</li>
        </ul>
      </section>
    </div>
  )
}

