"use client"

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/Input'

export default function Profile() {
  const { user } = useAuth()
  const [email, setEmail] = useState(user?.email || '')
  const [updating, setUpdating] = useState(false)

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)
    // Mock update functionality
    await new Promise(resolve => setTimeout(resolve, 1000))
    setUpdating(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          disabled={updating}
        >
          {updating ? 'Updating...' : 'Update Profile'}
        </Button>
      </form>
    </div>
  )
} 