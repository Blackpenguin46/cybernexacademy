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
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect due to useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
            <User className="h-8 w-8 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.email?.split('@')[0]}</h2>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p>{user.email}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
              <p>{new Date(user.created_at || '').toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
              <p>Standard User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 