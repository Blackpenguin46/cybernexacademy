"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { supabase } from "@/lib/supabase"
import LoadingSpinner from '@/components/LoadingSpinner'
import { createClient } from "@/lib/auth"

type Subscription = {
  id: string
  user_id: string
  plan: string
  status: string
  created_at: string
  updated_at: string
}

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  progress?: number
}

export default function CyberNexPlusPage() {
  const { user, loading: authLoading } = useAuth()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (user) {
      fetchSubscription()
      loadCourses()
    }
  }, [user])

  const fetchSubscription = async () => {
    if (!user) return

    const { data, error } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

    if (error) {
      console.error("Error fetching subscription:", error)
    } else {
      setSubscription(data)
    }
  }

  const handleSubscribe = async (plan: string) => {
    if (!user) {
      // Redirect to login or show error
      return
    }

    // In a real application, you would integrate with a payment provider here
    // For this example, we'll just update the subscription status directly
    const { data, error } = await supabase
      .from("subscriptions")
      .upsert({ user_id: user.id, plan, status: "active" })
      .select()
      .single()

    if (error) {
      console.error("Error updating subscription:", error)
    } else {
      setSubscription(data)
    }
  }

  const loadCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('plus_courses')
        .select('*')
      
      if (error) throw error
      setCourses(data || [])
    } catch (error) {
      console.error('Error loading courses:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            CyberNex Premium Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Elevate your cybersecurity journey with our premium services designed to provide personalized support and
            accelerate your career growth.
          </p>
        </header>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            What's Included in Our Premium Plans
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "1-on-1 meeting to discuss your goals, plans, and interests",
              "Tailored cybersecurity plan for your individual needs",
              "Custom labs to practice and hone your skills",
              "Access to weekly town halls with industry experts",
              "Bi-weekly meetings with industry professionals",
              "Access to exclusive courses taught by industry leaders",
              "1-on-1 mentoring with experienced cybersecurity professionals",
              "Premium Discord community access",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gold transition-all"
              >
                <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CyberNex+ Plan */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-transparent hover:border-gold transition-all shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gold">CyberNex+</h3>
              <p className="text-4xl font-bold mb-6 text-white">
                $10<span className="text-xl text-gray-300">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-gray-300">
                <li>1-on-1 meeting to discuss goals, plans, and interests</li>
                <li>Tailored cybersecurity plan</li>
                <li>Access to weekly town halls</li>
                <li>Access to exclusive courses</li>
              </ul>
              <button
                onClick={() => handleSubscribe("plus")}
                className="block w-full text-center bg-gradient-to-r from-gold to-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                {subscription?.plan === "plus" ? "Current Plan" : "Get Started with CyberNex+"}
              </button>
            </div>

            {/* CyberNex Pro Plan */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-transparent hover:border-gold transition-all shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gold">CyberNex Pro</h3>
              <p className="text-4xl font-bold mb-6 text-white">
                $20<span className="text-xl text-gray-300">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-gray-300">
                <li>Everything in CyberNex+, plus:</li>
                <li>Custom labs for hands-on practice</li>
                <li>Bi-weekly meetings with industry professionals</li>
                <li>1-on-1 mentoring with industry professionals</li>
              </ul>
              <button
                onClick={() => handleSubscribe("pro")}
                className="block w-full text-center bg-gradient-to-r from-gold to-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                {subscription?.plan === "pro" ? "Current Plan" : "Get Started with CyberNex Pro"}
              </button>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">
            Ready to Take Your Cybersecurity Career to the Next Level?
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Join CyberNex Premium today and unlock a world of exclusive content, personalized guidance, and networking
            opportunities to accelerate your cybersecurity journey.
          </p>
        </section>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center text-gold hover:text-yellow-400 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">CyberNex+ Courses</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                {course.progress !== undefined && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                )}
                <Link
                  href={`/cybernex-plus/courses/${course.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  {course.progress ? 'Continue Learning' : 'Start Course'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

