"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { LoadingSpinner } from '@/components/LoadingSpinner'
import type { UserProfile } from "@/lib/auth"
import { createClientComponent } from "@/lib/auth"

export default function Dashboard() {
  const { user, loading } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClientComponent()

  useEffect(() => {
    async function loadProfile() {
      try {
        if (!user?.id) return

        const { data, error } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error) throw error
        setProfile(data)
      } catch (error) {
        console.error('Error loading profile:', error)
        setError('Failed to load profile data')
      }
    }

    loadProfile()
  }, [user, supabase])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Not logged in!</strong>
          <span className="block sm:inline"> Please sign in to view your dashboard.</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {profile?.full_name || 'Not set'}</p>
            <p><strong>Username:</strong> {profile?.username || 'Not set'}</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
          <p>You haven't started any courses yet.</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Browse Courses
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subscription</h2>
          <p>You are on the Free plan.</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  )
}

