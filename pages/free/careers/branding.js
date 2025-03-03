import React from 'react'
import Layout from '../../../components/Layout'

export default function PersonalBranding() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Personal Branding & Networking</h1>

        {/* Online Presence Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold mb-6">Building Your Online Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-4">LinkedIn Profile</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Professional photo and compelling headline
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Detailed work experience and projects
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Skills endorsements and recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Regular content sharing and engagement
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-4">Technical Blog</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Document your learning journey
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Share project walkthroughs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Contribute to technical discussions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Build your personal brand
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Networking Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">Professional Networking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-4">Online Networking</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Join cybersecurity communities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Participate in online forums
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Attend virtual conferences
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Connect with industry professionals
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-xl font-semibold mb-4">In-Person Networking</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Attend local meetups
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Join professional organizations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Participate in conferences
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Volunteer at security events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 