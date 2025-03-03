import React from 'react'
import Layout from '../../../components/Layout'

export default function JobBoard() {
  const jobs = [
    {
      title: "Junior Security Analyst",
      company: "CyberDefend Inc.",
      location: "Remote",
      type: "Full-time",
      level: "Entry Level",
      description: "Looking for a motivated junior analyst to join our SOC team..."
    },
    {
      title: "Cybersecurity Intern",
      company: "SecureNet Solutions",
      location: "New York, NY",
      type: "Internship",
      level: "Student",
      description: "3-month paid internship working with our security team..."
    },
    {
      title: "Network Security Engineer",
      company: "TechGuard",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Mid Level",
      description: "Seeking experienced security engineer for network defense..."
    }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Cybersecurity Job Board</h1>
        
        {/* Job Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="border rounded p-2">
              <option>All Locations</option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
            <select className="border rounded p-2">
              <option>All Job Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
            <select className="border rounded p-2">
              <option>All Experience Levels</option>
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
            <button className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <p className="text-gray-600">{job.company}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-sm text-gray-500">{job.type}</span>
                    <span className="text-sm text-gray-500">{job.level}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 