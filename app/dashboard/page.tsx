"use client"

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { Layout } from '../components/layout/Layout'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setLoading(true)
      await signOut()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome Back, {user?.name || 'User'}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Profile Overview">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 text-gray-900">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Role</label>
                <p className="mt-1 text-gray-900 capitalize">{user?.role || 'User'}</p>
              </div>
            </div>
          </Card>

          <Card title="Quick Actions">
            <div className="space-y-4">
              <Button
                onClick={handleLogout}
                variant="danger"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <LoadingSpinner size="small" className="mr-2" />
                    Signing Out...
                  </div>
                ) : (
                  'Sign Out'
                )}
              </Button>
            </div>
          </Card>

          <Card title="Recent Activity">
            <p className="text-gray-600">No recent activity to display.</p>
          </Card>
        </div>
      </div>
    </Layout>
  )
} 