"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Book, Calendar, MessageCircle, Folder, ArrowRight } from "lucide-react"
import { useAuth } from '@/app/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null)
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState(false) // New state for admin status
  const searchParams = useSearchParams()
  const { user } = useAuth()
  const [content, setContent] = useState<any[]>([])

  useEffect(() => {
    // Check for admin status (replace with actual authentication logic)
    const adminEmail = "samuel.oakes@proton.me" // Replace with your admin email
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.email === adminEmail) {
        setIsAdmin(true)
      }
    }

    // Fetch user name (replace with actual API call)
    const fetchUserName = async () => {
      try {
        const response = await fetch("/api/user")
        if (!response.ok) {
          throw new Error("Failed to fetch user name")
        }
        const data = await response.json()
        setUserName(data.name)
      } catch (error) {
        console.error("Error fetching user name:", error)
        setUserName(null)
      }
    }

    fetchUserName()

    // Check subscription status (replace with actual API call)
    const checkSubscription = async () => {
      try {
        const response = await fetch("/api/check-subscription")
        if (!response.ok) {
          throw new Error("Failed to check subscription")
        }
        const data = await response.json()
        setSubscriptionStatus(data.plan)
      } catch (error) {
        console.error("Error checking subscription:", error)
        setSubscriptionStatus(null)
      }
    }

    checkSubscription()

    const fetchPremiumContent = async () => {
      const { data, error } = await supabase
        .from('premium_content')
        .select('*')
        .eq('access_level', 'plus')

      if (!error && data) {
        setContent(data)
      }
    }

    fetchPremiumContent()
  }, [])

  // Conditionally render content based on subscription or admin status
  if (!subscriptionStatus && !isAdmin) {
    // Redirect to CyberNex+ page if not subscribed and not admin
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">CyberNex+</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Unlock exclusive content and personalized guidance with CyberNex+.
        </p>
        <Link
          href="/cybernex-plus"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
        >
          <ArrowRight className="w-5 h-5 mr-2" />
          Learn More
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gold">Welcome to CyberNex Premium, {userName || "Guest"}!</h1>

        {subscriptionStatus && (
          <p className="text-xl mb-8 text-gray-300">
            Your current plan: <span className="font-bold text-gold">{subscriptionStatus}</span>
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Courses and Labs */}
          <Link
            href={
              subscriptionStatus === "pro" || isAdmin // Check for pro plan or admin
                ? "/cybernex-plus/classroom"
                : "/cybernex-plus"
            }
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Book className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Courses and Labs</h2>
            <p className="text-gray-300">
              {subscriptionStatus === "pro" || isAdmin
                ? "Access exclusive cybersecurity courses and hands-on labs"
                : "Upgrade to Pro for exclusive courses and labs"}
            </p>
          </Link>

          {/* Schedule Meetings */}
          <Link
            href="/cybernex-plus/schedule"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Calendar className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Schedule Meetings</h2>
            <p className="text-gray-300">Book your 1-on-1 and follow-up meetings with experts</p>
          </Link>

          {/* Premium Discord Community */}
          <Link
            href="https://discord.gg/cybernex-plus"
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <MessageCircle className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Premium Discord</h2>
            <p className="text-gray-300">Join our exclusive community of cybersecurity professionals</p>
          </Link>

          {/* Custom Projects */}
          <Link
            href={
              subscriptionStatus === "pro" || isAdmin // Check for pro plan or admin
                ? "/cybernex-plus/projects"
                : "/cybernex-plus"
            }
            className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gold hover:bg-gray-700 transition-colors duration-200"
          >
            <Folder className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gold">Custom Projects</h2>
            <p className="text-gray-300">
              {subscriptionStatus === "pro" || isAdmin
                ? "Work on tailored projects to enhance your skills"
                : "Upgrade to Pro for custom projects"}
            </p>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-gold hover:underline">
            Back to Home
          </Link>
        </div>

        {/* Premium Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {content.map((item) => (
            <div key={item.id} className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              <p className="mb-4">{item.description}</p>
              <a href={item.url} className="text-blue-600 hover:underline">
                Access Content
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

