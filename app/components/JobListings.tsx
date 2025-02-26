"use client"

import { useEffect, useState } from 'react'
import { Briefcase, MapPin, Building } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  url: string
  source: string
}

interface JobListingsProps {
  type: 'internship' | 'job'
}

export default function JobListings({ type }: JobListingsProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`/api/jobs?type=${type}`)
        if (!response.ok) throw new Error('Failed to fetch jobs')
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError('Failed to load job listings')
        console.error('Error fetching jobs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [type])

  if (loading) return <div className="text-center py-8">Loading job listings...</div>
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{job.title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{job.source}</span>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Building className="w-4 h-4 mr-2" />
              {job.company}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              {job.location}
            </div>
          </div>

          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Briefcase className="w-4 h-4 mr-2" />
            View Listing
          </a>
        </div>
      ))}
    </div>
  )
}

