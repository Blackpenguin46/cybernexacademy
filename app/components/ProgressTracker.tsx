'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { createClient } from '@/lib/auth'

interface ProgressTrackerProps {
  courseId: string
  totalSteps: number
}

export function ProgressTracker({ courseId, totalSteps }: ProgressTrackerProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()
  const supabase = createClient()

  useEffect(() => {
    async function loadProgress() {
      if (!user) return

      try {
        const { data: profile, error } = await supabase
          .from('user_profiles')
          .select('progress')
          .eq('id', user.id)
          .single()

        if (error) throw error

        const courseProgress = profile.progress[courseId]
        if (courseProgress) {
          setCurrentStep(courseProgress.progress)
        }
      } catch (error) {
        console.error('Error loading progress:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProgress()
  }, [courseId, user, supabase])

  const updateProgress = async (step: number) => {
    if (!user) return

    try {
      setLoading(true)
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('progress')
        .eq('id', user.id)
        .single()

      if (profileError) throw profileError

      const newProgress = {
        ...profile.progress,
        [courseId]: {
          progress: step,
          lastAccessed: new Date().toISOString(),
          completed: step === totalSteps
        }
      }

      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({ progress: newProgress })
        .eq('id', user.id)

      if (updateError) throw updateError

      setCurrentStep(step)
    } catch (error) {
      console.error('Error updating progress:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Progress: {Math.round((currentStep / totalSteps) * 100)}%
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  )
} 