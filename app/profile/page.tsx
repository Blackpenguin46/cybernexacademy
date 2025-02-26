'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Calendar, Shield } from 'lucide-react'

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/') // Redirect to home if not logged in
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"/>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect due to useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold flex items-center">
              <User className="w-6 h-6 mr-2" />
              User Profile
            </h1>
          </div>

          {/* Profile Info */}
          <div className="p-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <User className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.email?.split('@')[0]}</h2>
                <p className="text-gray-400">Member</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>Joined {new Date(user.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="w-5 h-5" />
                <span>Email {user.email_confirmed_at ? 'Verified' : 'Not Verified'}</span>
              </div>
            </div>
          </div>

          {/* Account Settings Section */}
          <div className="p-6 bg-gray-900">
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            <div className="space-y-4">
              <button 
                className="w-full bg-gray-800 hover:bg-gray-700 text-left px-4 py-2 rounded"
                onClick={() => router.push('/profile/settings')}
              >
                Profile Settings
              </button>
              <button 
                className="w-full bg-gray-800 hover:bg-gray-700 text-left px-4 py-2 rounded"
                onClick={() => router.push('/profile/security')}
              >
                Security Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 