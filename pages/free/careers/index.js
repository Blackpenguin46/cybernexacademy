import React from 'react'
import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function CareersHome() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Cybersecurity Careers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/free/careers/jobs" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Job Board</h2>
            <p className="text-gray-600">Find cybersecurity job opportunities</p>
          </Link>

          <Link href="/free/careers/roadmaps" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Career Roadmaps</h2>
            <p className="text-gray-600">Plan your career progression</p>
          </Link>

          <Link href="/free/careers/branding" 
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Personal Branding</h2>
            <p className="text-gray-600">Build your professional presence</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
} 