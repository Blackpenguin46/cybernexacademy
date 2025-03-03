import React from 'react'
import Layout from '../components/Layout'
import { Card } from '../components/ui/card'
import Button from '../components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Master Cybersecurity with CyberNex Academy
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              From beginner to expert: Access world-class cybersecurity education, hands-on labs, and a supportive community.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/free-resources" 
                className="px-8 py-3 bg-white text-blue-900 rounded-md font-semibold hover:bg-blue-50">
                Start Learning Free
              </Link>
              <Link href="/premium" 
                className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-500 border border-blue-400">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CyberNex Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Learning</h3>
              <p className="text-gray-600">From fundamentals to advanced topics, our structured curriculum ensures thorough understanding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Hands-on Experience</h3>
              <p className="text-gray-600">Practice in real-world scenarios with our interactive labs and CTF challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">Join a thriving community of cybersecurity enthusiasts and professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Premium Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Free Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Cybersecurity Courses
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Community Forum Access
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Lab Exercises
                </li>
              </ul>
              <Link href="/free-resources" 
                className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
                Get Started Free
              </Link>
            </div>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Premium Platform</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Training Modules
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Interactive Labs & CTF
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1-on-1 Mentorship
                </li>
              </ul>
              <Link href="/premium" 
                className="mt-6 inline-block px-6 py-2 bg-white text-blue-900 rounded-md hover:bg-blue-50">
                Go Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"CyberNex Academy helped me transition into cybersecurity from a different field. The structured learning path was exactly what I needed."</p>
              <p className="font-semibold">- Security Analyst</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"The hands-on labs gave me practical experience that was invaluable during my job interviews."</p>
              <p className="font-semibold">- Penetration Tester</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"The community support and mentorship program accelerated my learning journey significantly."</p>
              <p className="font-semibold">- Security Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 