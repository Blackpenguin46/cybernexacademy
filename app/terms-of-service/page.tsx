import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Terms of Service</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        This page will contain CyberNex's terms of service.
      </p>
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
    </div>
  )
}

