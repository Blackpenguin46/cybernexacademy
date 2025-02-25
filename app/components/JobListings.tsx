"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  location: string
  url: string
  source: string
}

export default function JobListings({ jobType }: { jobType: "internship" | "job" }) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // In a real-world scenario, this would be your API endpoint
        const response = await fetch(`/api/jobs?type=${jobType}`)
        if (!response.ok) {
          throw new Error("Failed to fetch jobs")
        }
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError("Failed to load job listings. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [jobType])

  if (loading) {
    return <div>Loading job listings...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{job.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm"
          >
            View on {job.source} <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  )
}

