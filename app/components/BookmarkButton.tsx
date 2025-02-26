'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Bookmark, BookMarked } from 'lucide-react'
import { createClient } from '@/lib/auth'

interface BookmarkButtonProps {
  resourceId: string
  resourceType: 'article' | 'tutorial' | 'tool'
}

export default function BookmarkButton({ resourceId, resourceType }: BookmarkButtonProps) {
  const { user } = useAuth()
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleBookmark = async () => {
    if (!user) return
    
    setIsLoading(true)
    try {
      const supabase = createClient()
      
      if (isBookmarked) {
        // Remove bookmark
        await supabase
          .from('bookmarks')
          .delete()
          .match({ user_id: user.id, resource_id: resourceId })
      } else {
        // Add bookmark
        await supabase
          .from('bookmarks')
          .insert({
            user_id: user.id,
            resource_id: resourceId,
            resource_type: resourceType
          })
      }
      
      setIsBookmarked(!isBookmarked)
    } catch (error) {
      console.error('Error toggling bookmark:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      disabled={!user || isLoading}
      className="flex items-center text-gray-600 hover:text-blue-600 disabled:opacity-50"
    >
      {isBookmarked ? (
        <BookMarked className="h-5 w-5 mr-1" />
      ) : (
        <Bookmark className="h-5 w-5 mr-1" />
      )}
      {isBookmarked ? 'Bookmarked' : 'Bookmark'}
    </button>
  )
} 