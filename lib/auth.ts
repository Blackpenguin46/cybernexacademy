import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@/types/supabase'

export const createClient = () =>
  createClientComponentClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  })

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  username?: string
  created_at: string
  progress: {
    [courseId: string]: {
      completed: boolean
      lastAccessed: string
      progress: number
    }
  }
  bookmarks: string[] // Array of bookmarked content IDs
}

export interface Subscription {
  id: string
  user_id: string
  plan_type: 'plus' | 'pro'
  status: 'active' | 'canceled' | 'past_due'
  current_period_end: string
} 