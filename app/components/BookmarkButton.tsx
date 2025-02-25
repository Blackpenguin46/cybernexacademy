'use client'

import { useState } from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { createClient } from '@/lib/auth'

interface BookmarkButtonProps {
  contentId: string
  initialBookmarked?: boolean
}

export function BookmarkButton({ contentId, initialBookmarked = false }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked)
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const supabase = createClient()

  const toggleBookmark = async () => {
    if (!user) return
    
    try {
      setLoading(true)
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('bookmarks')
        .eq('id', user.id)
        .single()

      if (profileError) throw profileError

      let newBookmarks = [...(profile.bookmarks || [])]
      
      if (isBookmarked) {
        newBookmarks = newBookmarks.filter(id => id !== contentId)
      } else {
        newBookmarks.push(contentId)
      }

      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({ bookmarks: newBookmarks })
        .eq('id', user.id)

      if (updateError) throw updateError
      
      setIsBookmarked(!isBookmarked)
    } catch (error) {
      console.error('Error toggling bookmark:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      disabled={loading || !user}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ? (
        <BookmarkCheck className="w-6 h-6 text-blue-600" />
      ) : (
        <Bookmark className="w-6 h-6" />
      )}
    </button>
  )
} 