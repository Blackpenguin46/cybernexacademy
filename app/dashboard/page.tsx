"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/app/contexts/AuthContext"
import { LoadingSpinner } from "@/app/components/LoadingSpinner"
import type { UserProfile } from "@/lib/auth"
import { createClient } from "@/lib/auth"

export default function Dashboard() {
  const { user, loading } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to CyberNex</h1>
      
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Email:</span> {user?.email}</p>
              <p><span className="font-medium">Name:</span> {profile?.full_name || 'Not set'}</p>
              <p><span className="font-medium">Username:</span> {profile?.username || 'Not set'}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/courses" className="text-blue-600 hover:underline">
                  Browse Courses
                </a>
              </li>
              <li>
                <a href="/cybernex-plus" className="text-blue-600 hover:underline">
                  CyberNex Plus Features
                </a>
              </li>
              <li>
                <a href="/cybernex-pro" className="text-blue-600 hover:underline">
                  CyberNex Pro Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

