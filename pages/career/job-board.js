import Head from 'next/head'
import Layout from '../../components/Layout'
import { useState } from 'react'

export default function JobBoard() {
  const [filters, setFilters] = useState({
    role: 'all',
    location: 'all',
    experience: 'all'
  })

  const jobs = [
    {
      title: 'Security Engineer',
      company: 'Tech Solutions Inc',
      location: 'Remote',
      experience: 'Mid-level',
      description: 'Looking for a security engineer to help build and maintain secure infrastructure.',
      link: '#'
    },
    {
      title: 'SOC Analyst',
      company: 'CyberDefense Corp',
      location: 'New York, NY',
      experience: 'Entry-level',
      description: 'Monitor security alerts and respond to security incidents.',
      link: '#'
    },
    {
      title: 'Penetration Tester',
      company: 'SecureNet',
      location: 'Chicago, IL',
      experience: 'Senior',
      description: 'Conduct security assessments and penetration tests for our clients.',
      link: '#'
    },
    {
      title: 'CISO',
      company: 'Enterprise Solutions',
      location: 'San Francisco, CA',
      experience: 'Senior',
      description: 'Lead the security strategy and team for a growing technology company.',
      link: '#'
    }
  ]

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const filteredJobs = jobs.filter(job => {
    return (filters.role === 'all' || job.title.toLowerCase().includes(filters.role.toLowerCase())) &&
           (filters.location === 'all' || job.location === filters.location) &&
           (filters.experience === 'all' || job.experience === filters.experience)
  })

  return (
    <Layout>
      <Head>
        <title>Cybersecurity Job Board - CyberNex Academy</title>
        <meta name="description" content="Find cybersecurity job opportunities" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Job Board</h1>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full border border-gray-300 rounded-md shadow-sm"
                value={filters.role}
                onChange={handleFilterChange}
              >
                <option value="all">All Roles</option>
                <option value="engineer">Security Engineer</option>
                <option value="analyst">Security Analyst</option>
                <option value="tester">Penetration Tester</option>
                <option value="ciso">CISO/Management</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                name="location"
                className="w-full border border-gray-300 rounded-md shadow-sm"
                value={filters.location}
                onChange={handleFilterChange}
              >
                <option value="all">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="New York, NY">New York, NY</option>
                <option value="San Francisco, CA">San Francisco, CA</option>
                <option value="Chicago, IL">Chicago, IL</option>
              </select>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                className="w-full border border-gray-300 rounded-md shadow-sm"
                value={filters.experience}
                onChange={handleFilterChange}
              >
                <option value="all">All Levels</option>
                <option value="Entry-level">Entry-level</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                  <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                  <p className="text-gray-600 mb-4">Experience: {job.experience}</p>
                </div>
                <a 
                  href={job.link} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                >
                  Apply
                </a>
              </div>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <p className="text-gray-700">No jobs found matching your filters. Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}
