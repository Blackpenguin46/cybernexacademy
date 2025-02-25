'use client'

import { Users, Search, Plus, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function StudyGroupsPage() {
  const studyGroups = [
    {
      title: "CISSP Study Group",
      members: 24,
      focus: "CISSP Certification Prep",
      meetingTime: "Wednesdays 7PM EST",
      status: "Active"
    },
    {
      title: "Ethical Hacking Practice",
      members: 18,
      focus: "Hands-on penetration testing",
      meetingTime: "Saturdays 2PM EST",
      status: "Active"
    },
    {
      title: "Security+ Prep Group",
      members: 32,
      focus: "CompTIA Security+ Certification",
      meetingTime: "Mondays 6PM EST",
      status: "Active"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Study Groups</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search study groups..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyGroups.map((group, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{group.title}</h2>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {group.members} members
              </p>
              <p>Focus: {group.focus}</p>
              <p>Meets: {group.meetingTime}</p>
              <div className="flex items-center mt-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {group.status}
                </span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 