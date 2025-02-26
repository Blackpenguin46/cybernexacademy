'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { createClient } from '@/lib/auth'

interface ProgressTrackerProps {
  courseId: string
  totalSteps: number
}

export default function ProgressTracker({ courseId, totalSteps }: ProgressTrackerProps) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) {
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('course_progress')
          .select('current_step')
          .eq('user_id', user.id)
          .eq('course_id', courseId)
          .single()

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching progress:', error)
        }

        if (data) {
          setProgress(data.current_step)
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
  }, [user, courseId, supabase])

  const updateProgress = async (step: number) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('course_progress')
        .upsert({
          user_id: user.id,
          course_id: courseId,
          current_step: step,
          updated_at: new Date().toISOString()
        })

      if (error) throw error
      setProgress(step)
    } catch (error) {
      console.error('Error updating progress:', error)
    }
  }

  if (loading) {
    return <div className="h-2 bg-gray-200 rounded-full animate-pulse"></div>
  }

  const progressPercentage = Math.round((progress / totalSteps) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span>Progress</span>
        <span>{progressPercentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
} 