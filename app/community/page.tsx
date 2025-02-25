import Link from 'next/link'
import { MessageSquare, Users, Calendar } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Community</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Join the CyberNex community to connect with fellow cybersecurity enthusiasts, share knowledge, 
        and participate in collaborative learning experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/community/forums" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Discussion Forums</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Engage in discussions about various cybersecurity topics with the community.</p>
        </Link>

        <Link href="/community/study-groups" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Study Groups</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Join or create study groups to learn and practice together.</p>
        </Link>

        <Link href="/community/events" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Events</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Discover upcoming cybersecurity events, workshops, and meetups.</p>
        </Link>
      </div>
    </div>
  )
}

