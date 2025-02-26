"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { createClientComponent } from "@/lib/auth"
import Image from 'next/image'

type Subscription = {
  id: string
  user_id: string
  plan: string
  status: string
  created_at: string
  updated_at: string
}

type Course = {
  id: string
  title: string
  description: string
  level: string
  duration: string
  image_url: string
  slug: string
  progress?: number
}

export default function CyberNexPlusPage() {
  const { user, loading } = useAuth()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [courses, setCourses] = useState<Course[]>([])
  const [pageLoading, setPageLoading] = useState(true)
  const supabase = createClientComponent()

  useEffect(() => {
    async function checkSubscription() {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .eq('status', 'active')
          .single()

        if (error && error.code !== 'PGRST116') {
          console.error('Error checking subscription:', error)
        }

        setSubscription(data || null)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    async function fetchCourses() {
      try {
        const { data, error } = await supabase
          .from('courses')
          .select('*')
          .eq('is_premium', true)
          .order('created_at', { ascending: false })

        if (error) throw error
        setCourses(data || [])
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setPageLoading(false)
      }
    }

    if (!loading) {
      checkSubscription()
      fetchCourses()
    }
  }, [user, loading, supabase])

  if (loading || pageLoading) {
    return <LoadingSpinner />
  }

  // Function to handle subscription button click
  const handleSubscribe = useCallback(async (plan: string) => {
    if (!user) {
      // Redirect to login
      window.location.href = `/login?redirect=${encodeURIComponent('/cybernex-plus')}`
      return
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          userId: user.id,
        }),
      })

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error('Error creating checkout session:', error)
    }
  }, [user])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">CyberNex Plus</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Advanced cybersecurity training and resources</p>
      
      {subscription ? (
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-8">
          <p className="text-green-800 dark:text-green-200 font-medium">
            You are currently subscribed to CyberNex Plus! Enjoy your premium access.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Monthly</h2>
              <p className="text-3xl font-bold mb-4">$19.99<span className="text-gray-500 text-base font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Access to all premium courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hands-on labs and virtual environments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Community forum access</span>
                </li>
              </ul>
              <button 
                onClick={() => handleSubscribe('monthly')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Subscribe Monthly
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-2 border-blue-500">
            <div className="bg-blue-500 text-white text-center py-2">
              <span className="font-medium">BEST VALUE</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Annual</h2>
              <p className="text-3xl font-bold mb-4">$199.99<span className="text-gray-500 text-base font-normal">/year</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>All monthly benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save over 15% compared to monthly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Exclusive webinars and events</span>
                </li>
              </ul>
              <button 
                onClick={() => handleSubscribe('annual')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                Subscribe Annually
              </button>
            </div>
          </div>
        </div>
      )}
      
      <h2 className="text-2xl font-bold mb-6">Premium Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {course.image_url && (
              <div className="h-40 overflow-hidden">
                <img 
                  src={course.image_url} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
              
              <div className="flex justify-between text-sm mb-4">
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
                href={`/courses/${course.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Start Learning <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


