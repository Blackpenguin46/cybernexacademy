'use client'

import { useAuth } from '@/app/contexts/AuthContext'
import Link from 'next/link'
import { Lock } from 'lucide-react'

interface ContentCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  requiresAuth?: boolean
}

export function ContentCard({ title, description, href, icon, requiresAuth = true }: ContentCardProps) {
  const { user } = useAuth()

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {requiresAuth && !user ? (
          <div className="flex items-center text-gray-500">
            <Lock className="w-4 h-4 mr-2" />
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login to Access
            </Link>
          </div>
        ) : (
          <Link href={href} className="text-blue-600 hover:text-blue-800 font-medium">
            Start Learning →
          </Link>
        )}
      </div>
    </div>
  )
} 