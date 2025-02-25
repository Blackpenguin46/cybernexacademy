import { cookies } from "next/headers"
import Link from "next/link"
import { Shield, Book, Users, Calendar, Target, PenToolIcon as Tool } from "lucide-react"
import { jwtVerify } from "jose"
import { checkSubscription } from "../../lib/checkSubscription"

const SECRET_KEY = process.env.JWT_SECRET

if (!SECRET_KEY) {
  console.error("JWT_SECRET is not set in environment variables")
}

export default async function CyberNexProPage() {
  const token = cookies().get("token")?.value

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-white">Access Denied</h1>
          <p className="mb-4 text-gray-300">You need to be logged in to view this content.</p>
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    )
  }

  if (!SECRET_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-white">Server Error</h1>
          <p className="mb-4 text-gray-300">There was an error processing your request. Please try again later.</p>
        </div>
      </div>
    )
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY))
    const subscription = await checkSubscription(payload.userId as string)

    if (subscription !== "cybernex_pro") {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl mb-4 text-white">Subscription Required</h1>
            <p className="mb-4 text-gray-300">You need a CyberNex Pro subscription to access this content.</p>
            <Link href="/cybernex-plus" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Upgrade to CyberNex Pro
            </Link>
          </div>
        </div>
      )
    }

    // Rest of your CyberNex Pro page content...
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">CyberNex Pro</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome to CyberNex Pro, our most comprehensive cybersecurity learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/cybernex-pro/courses"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Book className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2">Advanced Courses</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access all CyberNex+ courses plus additional advanced material.
            </p>
          </Link>

          <Link
            href="/cybernex-pro/community"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Users className="w-12 h-12 mb-4 text-green-500" />
            <h2 className="text-xl font-semibold mb-2">Pro Community</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Engage with our most experienced cybersecurity professionals.
            </p>
          </Link>

          <Link
            href="/cybernex-pro/mentoring"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Shield className="w-12 h-12 mb-4 text-purple-500" />
            <h2 className="text-xl font-semibold mb-2">Priority Mentoring</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get frequent, in-depth 1-on-1 sessions with top industry experts.
            </p>
          </Link>

          <Link
            href="/cybernex-pro/events"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Calendar className="w-12 h-12 mb-4 text-red-500" />
            <h2 className="text-xl font-semibold mb-2">VIP Events</h2>
            <p className="text-gray-600 dark:text-gray-300">Access to exclusive pro-level events and conferences.</p>
          </Link>

          <Link
            href="/cybernex-pro/labs"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Tool className="w-12 h-12 mb-4 text-yellow-500" />
            <h2 className="text-xl font-semibold mb-2">Advanced Labs</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Practice with cutting-edge tools in our advanced cybersecurity labs.
            </p>
          </Link>

          <Link
            href="/cybernex-pro/career"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Target className="w-12 h-12 mb-4 text-indigo-500" />
            <h2 className="text-xl font-semibold mb-2">Career Fast-Track</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized career guidance and job placement assistance.
            </p>
          </Link>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Token verification error:", error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-white">Authentication Error</h1>
          <p className="mb-4 text-gray-300">Please log in again.</p>
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    )
  }
}

