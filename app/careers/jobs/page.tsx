'use client'

import { Briefcase, MapPin, DollarSign, Building } from 'lucide-react'

export default function JobsPage() {
  const jobs = [
    {
      title: "Senior Security Engineer",
      company: "CyberTech Solutions",
      location: "Remote",
      salary: "$120k - $160k",
      description: "Lead security initiatives and implement security measures...",
      requirements: [
        "5+ years of security experience",
        "CISSP certification",
        "Experience with cloud security",
      ]
    },
    // Add more jobs
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cybersecurity Jobs</h1>
      <div className="grid gap-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <div className="flex items-center text-gray-400 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-400">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{job.description}</p>
            <div className="space-y-2">
              <h3 className="font-semibold">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-400">
                {job.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 