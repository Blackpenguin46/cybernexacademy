"use client"

import Link from "next/link"
import { Shield, ChevronDown } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [learningOpen, setLearningOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)
  const [careersOpen, setCareersOpen] = useState(false)
  const [collegeStudentsOpen, setCollegeStudentsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Shield className="w-8 h-8 mr-2 text-blue-400" />
          <span className="text-xl font-bold">CyberNex Academy</span>
        </Link>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-6">
            <li className="relative group">
              <button className="flex items-center hover:text-blue-400" onClick={() => setLearningOpen(!learningOpen)}>
                Learning <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {learningOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/learning/fundamentals" className="block px-4 py-2 hover:bg-gray-600">
                      Fundamentals
                    </Link>
                  </li>
                  <li>
                    <Link href="/learning/advanced" className="block px-4 py-2 hover:bg-gray-600">
                      Advanced Topics
                    </Link>
                  </li>
                  <li>
                    <Link href="/learning/certifications" className="block px-4 py-2 hover:bg-gray-600">
                      Certifications
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-400"
                onClick={() => setCommunityOpen(!communityOpen)}
              >
                Community <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {communityOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/community/forums" className="block px-4 py-2 hover:bg-gray-600">
                      Forums
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/events" className="block px-4 py-2 hover:bg-gray-600">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/mentorship" className="block px-4 py-2 hover:bg-gray-600">
                      Mentorship
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button className="flex items-center hover:text-blue-400" onClick={() => setCareersOpen(!careersOpen)}>
                Careers <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {careersOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/careers/job-board" className="block px-4 py-2 hover:bg-gray-600">
                      Job Board
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers/resume-builder" className="block px-4 py-2 hover:bg-gray-600">
                      Resume Builder
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers/interview-prep" className="block px-4 py-2 hover:bg-gray-600">
                      Interview Prep
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-400"
                onClick={() => setCollegeStudentsOpen(!collegeStudentsOpen)}
              >
                College Students <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {collegeStudentsOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/college-students/internships" className="block px-4 py-2 hover:bg-gray-600">
                      Internships
                    </Link>
                  </li>
                  <li>
                    <Link href="/college-students/scholarships" className="block px-4 py-2 hover:bg-gray-600">
                      Scholarships
                    </Link>
                  </li>
                  <li>
                    <Link href="/college-students/resources" className="block px-4 py-2 hover:bg-gray-600">
                      Student Resources
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button className="flex items-center hover:text-blue-400" onClick={() => setToolsOpen(!toolsOpen)}>
                Tools & Utilities <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {toolsOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <li>
                    <Link href="/tools/password-generator" className="block px-4 py-2 hover:bg-gray-600">
                      Password Generator
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/encryption-tools" className="block px-4 py-2 hover:bg-gray-600">
                      Encryption Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="/tools/network-scanner" className="block px-4 py-2 hover:bg-gray-600">
                      Network Scanner
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="hover:text-blue-400">
            Login
          </Link>
          <Link href="/auth/register" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

