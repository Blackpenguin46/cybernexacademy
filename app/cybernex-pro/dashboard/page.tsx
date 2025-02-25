import Link from "next/link"
import { Book, Calendar, MessageCircle, Shield, PenToolIcon as Tool, Target } from "lucide-react"

export default function CyberNexProDashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">CyberNex Pro Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/cybernex-pro/courses"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Book className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Courses</h2>
          <p className="text-gray-600 dark:text-gray-400">Access all courses including advanced material</p>
        </Link>
        <Link
          href="/cybernex-pro/schedule"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Calendar className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Priority Scheduling</h2>
          <p className="text-gray-600 dark:text-gray-400">Book frequent sessions with top experts</p>
        </Link>
        <Link
          href="/cybernex-pro/community"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <MessageCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Pro Community</h2>
          <p className="text-gray-600 dark:text-gray-400">Engage with experienced professionals</p>
        </Link>
        <Link
          href="/cybernex-pro/mentoring"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Mentoring</h2>
          <p className="text-gray-600 dark:text-gray-400">Get in-depth guidance from industry leaders</p>
        </Link>
        <Link
          href="/cybernex-pro/labs"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Tool className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Advanced Labs</h2>
          <p className="text-gray-600 dark:text-gray-400">Practice with cutting-edge cybersecurity tools</p>
        </Link>
        <Link
          href="/cybernex-pro/career"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Career Fast-Track</h2>
          <p className="text-gray-600 dark:text-gray-400">Get personalized career guidance and job placement</p>
        </Link>
      </div>
    </div>
  )
}

