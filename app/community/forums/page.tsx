'use client'

import { MessageSquare, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function ForumsPage() {
  const forumCategories = [
    {
      title: "General Discussion",
      description: "General cybersecurity discussions and topics",
      topics: 156,
      posts: 1243
    },
    {
      title: "Certifications",
      description: "Discuss various cybersecurity certifications and exam prep",
      topics: 89,
      posts: 567
    },
    {
      title: "Technical Help",
      description: "Get help with technical cybersecurity challenges",
      topics: 234,
      posts: 1890
    },
    {
      title: "Career Advice",
      description: "Discuss cybersecurity career paths and opportunities",
      topics: 123,
      posts: 890
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Discussion Forums</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search forums..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="space-y-4">
        {forumCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>{category.topics} topics</p>
                <p>{category.posts} posts</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href={`/community/forums/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View discussions →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 