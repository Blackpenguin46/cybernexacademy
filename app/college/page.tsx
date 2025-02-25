'use client'

import Link from 'next/link'
import { Book, Briefcase, GraduationCap, Tag, School } from 'lucide-react'

export default function CollegePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">College Students</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Welcome to the College Students section of CyberNex. Here you'll find resources, opportunities, and guidance 
        specifically tailored for students pursuing cybersecurity education.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/college/resources" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Student Resources</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Access study materials, tutorials, and guides designed for cybersecurity students.</p>
        </Link>

        <Link href="/college/internships" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Student Internships</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Find cybersecurity internship opportunities specifically for students.</p>
        </Link>

        <Link href="/college/learning-paths" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Learning Paths</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Explore structured learning paths aligned with your academic goals.</p>
        </Link>

        <Link href="/college/discounts" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Tag className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Student Discounts</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Access special student pricing on tools, courses, and certifications.</p>
        </Link>

        <Link href="/college/programs" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <School className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Academic Programs</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Discover top cybersecurity degree programs and certifications.</p>
        </Link>
      </div>
    </div>
  )
} 