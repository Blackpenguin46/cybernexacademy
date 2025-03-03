import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function FreeResources() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Free Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Careers Section */}
          <Link href="/free/careers" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Careers</h2>
            <p className="text-gray-600">Explore cybersecurity career paths and opportunities</p>
          </Link>

          {/* Learning Section */}
          <Link href="/free/learning" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Learning</h2>
            <p className="text-gray-600">Access educational resources and training materials</p>
          </Link>

          {/* Students Section */}
          <Link href="/free/students" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Students</h2>
            <p className="text-gray-600">Resources for cybersecurity students</p>
          </Link>

          {/* Community Section */}
          <Link href="/free/community" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Community</h2>
            <p className="text-gray-600">Join our cybersecurity community</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
