import React from 'react';
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CyberNex Academy - Cybersecurity Learning Platform</title>
        <meta name="description" content="Learn cybersecurity with CyberNex Academy" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to CyberNex Academy
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto mb-12">
            Your gateway to cybersecurity excellence. Discover courses, labs, and resources to advance your career.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Learning Path Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">Learning Paths</h2>
                <p className="mb-4">Structured learning paths to guide your cybersecurity journey.</p>
                <Link href="/learn" className="text-blue-600 hover:underline">
                  Explore Paths →
                </Link>
              </div>
            </div>
            
            {/* Labs Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">Hands-on Labs</h2>
                <p className="mb-4">Practice in real-world environments with our interactive labs.</p>
                <Link href="/learn/labs" className="text-blue-600 hover:underline">
                  Try Labs →
                </Link>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">Join Community</h2>
                <p className="mb-4">Connect with peers, mentors, and experts in the field.</p>
                <Link href="/communities" className="text-blue-600 hover:underline">
                  Connect →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
} 