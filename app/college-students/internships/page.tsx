"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Briefcase, Calendar, MapPin } from "lucide-react"

export default function InternshipsPage() {
  // Sample internships organized by job categories
  const internshipsByCategory = {
    "GRC Internships": [
      { company: "Google", position: "GRC Intern", location: "Mountain View, CA", deadline: "2024-01-15" },
      { company: "Microsoft", position: "Governance Intern", location: "Redmond, WA", deadline: "2024-01-30" },
    ],
    "SOC Analyst Internships": [
      { company: "Amazon", position: "SOC Analyst Intern", location: "Seattle, WA", deadline: "2024-02-15" },
      { company: "IBM", position: "Security Operations Intern", location: "Armonk, NY", deadline: "2024-03-15" },
    ],
    "Penetration Testing Internships": [
      { company: "Cisco", position: "Penetration Testing Intern", location: "San Jose, CA", deadline: "2024-02-28" },
      { company: "Meta", position: "Red Team Intern", location: "Menlo Park, CA", deadline: "2024-03-10" },
    ],
    "General Cybersecurity Internships": [
      { company: "Deloitte", position: "Cybersecurity Intern", location: "New York, NY", deadline: "2024-03-01" },
      { company: "PwC", position: "Cybersecurity Analyst Intern", location: "Chicago, IL", deadline: "2024-03-20" },
    ],
  }

  const [filters, setFilters] = useState({
    location: "",
    deadline: "",
    company: "",
    category: "",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const internshipsPerPage = 6

  // Flatten internships for filtering and pagination
  const allInternships = Object.values(internshipsByCategory).flat()

  // Filter internships based on filters
  const filteredInternships = allInternships.filter((internship) => {
    return (
      (!filters.location || internship.location.includes(filters.location)) &&
      (!filters.deadline || internship.deadline <= filters.deadline) &&
      (!filters.company || internship.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (!filters.category || internshipsByCategory[filters.category].includes(internship))
    )
  })

  // Pagination logic
  const indexOfLastInternship = currentPage * internshipsPerPage
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage
  const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Countdown timer component
  const CountdownTimer = ({ deadline }) => {
    const calculateTimeLeft = (deadline) => {
      const difference = new Date(deadline) - new Date()
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline))

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(deadline))
      }, 1000)

      return () => clearInterval(timer)
    }, [deadline])

    return (
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        <span className="font-semibold">Time Left:</span> {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Internships and Jobs</h1>

      {/* Filter Section */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Filter Internships</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="date"
            placeholder="Deadline"
            value={filters.deadline}
            onChange={(e) => setFilters({ ...filters, deadline: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Company"
            value={filters.company}
            onChange={(e) => setFilters({ ...filters, company: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="p-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            {Object.keys(internshipsByCategory).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Internships Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Featured Internships</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentInternships.map((internship, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{internship.position}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{internship.company}</p>
              <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                {internship.location}
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                Deadline: {internship.deadline}
              </div>
              <CountdownTimer deadline={internship.deadline} />
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(filteredInternships.length / internshipsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Job Preparation Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Job Preparation Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Build a strong foundation in computer science and networking fundamentals</li>
          <li>Gain hands-on experience through personal projects and CTF competitions</li>
          <li>Develop soft skills such as communication and teamwork</li>
          <li>Stay updated with the latest cybersecurity trends and technologies</li>
          <li>Network with professionals in the field through conferences and online communities</li>
          <li>Prepare a cybersecurity-focused resume and portfolio</li>
          <li>Practice common technical interview questions and scenarios</li>
        </ul>
      </section>

      {/* Additional Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Additional Resources</h2>
        <ul className="space-y-2 text-blue-600 dark:text-blue-400">
          <li>
            <Link href="#" className="hover:underline">
              Cybersecurity Job Board
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Resume Building Workshop
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Mock Interview Practice
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Networking Events Calendar
            </Link>
          </li>
        </ul>
      </section>

      {/* Back Button */}
      <div className="mt-8">
        <Link
          href="/college-students"
          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
        >
          <ArrowLeft className="mr-2" />
          Back to College Students
        </Link>
      </div>
    </div>
  )
}

