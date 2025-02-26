"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Book, Calendar, MessageCircle, Folder, ArrowRight } from "lucide-react"
import { useAuth } from '@/contexts/AuthContext'
import { createClientComponent } from '@/lib/auth'

interface Course {
  id: string
  title: string
  description: string
  progress: number
  image_url: string
  slug: string
}

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null)
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [content, setContent] = useState<Course[]>([])
  const { user } = useAuth()
  const supabase = createClientComponent()

  useEffect(() => {
    // Check for admin status
    if (user?.email === "samuel.oakes@proton.me") {
      setIsAdmin(true)
    }

    // Fetch user name
    const fetchUserName = async () => {
      try {
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .single()
          
          if (error) throw error
          setUserName(data?.full_name || user.email?.split('@')[0] || 'User')
        }
      } catch (error) {
        console.error("Error fetching user name:", error)
        setUserName(user?.email?.split('@')[0] || 'User')
      }
    }

    fetchUserName()

    // Check subscription status
    const checkSubscription = async () => {
      try {
        if (user) {
          const { data, error } = await supabase
            .from('subscriptions')
            .select('plan_type, status')
            .eq('user_id', user.id)
            .eq('status', 'active')
            .single()
          
          if (error) throw error
          setSubscriptionStatus(data?.plan_type || null)
        }
      } catch (error) {
        console.error("Error checking subscription:", error)
        setSubscriptionStatus(null)
      }
    }

    checkSubscription()

    // Fetch courses with progress
    const fetchCourses = async () => {
      try {
        if (user) {
          // First get all premium courses
          const { data: courses, error: coursesError } = await supabase
            .from('courses')
            .select('*')
            .eq('is_premium', true)
            .order('created_at', { ascending: false })
          
          if (coursesError) throw coursesError
          
          // Then get user's progress for these courses
          const { data: progress, error: progressError } = await supabase
            .from('course_progress')
            .select('*')
            .eq('user_id', user.id)
          
          if (progressError) throw progressError
          
          // Combine the data
          const coursesWithProgress = courses.map((course: any) => {
            const courseProgress = progress?.find((p: any) => p.course_id === course.id)
            return {
              ...course,
              progress: courseProgress ? courseProgress.progress : 0
            }
          })
          
          setContent(coursesWithProgress)
        }
      } catch (error) {
        console.error("Error fetching courses:", error)
        setContent([])
      }
    }

    fetchCourses()
  }, [user, supabase])

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Not logged in!</strong>
          <span className="block sm:inline"> Please sign in to view your CyberNex Plus dashboard.</span>
        </div>
      </div>
    )
  }

  if (!subscriptionStatus) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">No active subscription!</strong>
          <span className="block sm:inline"> You need an active CyberNex Plus subscription to access this content.</span>
        </div>
        
        <Link 
          href="/cybernex-plus"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          View Subscription Options <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">CyberNex Plus Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Welcome back, {userName}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Book className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Courses</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Premium cybersecurity courses</p>
          <Link 
            href="/cybernex-plus/courses" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            View All Courses <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Events</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Exclusive webinars and workshops</p>
          <Link 
            href="/cybernex-plus/events" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            Upcoming Events <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-6 w-6 text-orange-500 mr-2" />
            <h2 className="text-xl font-semibold">Community</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Connect with other members</p>
          <Link 
            href="/cybernex-plus/community" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            Join Discussion <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Folder className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold">Resources</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Exclusive tools and materials</p>
          <Link 
            href="/cybernex-plus/resources" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            Browse Resources <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
      
      {content.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((course) => (
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
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      style={{ width: `${course.progress}%` }}
                      className="h-2.5 bg-blue-500 rounded-full"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

