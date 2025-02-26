import { createClientComponentClient } from '@supabase/ssr'
import { type Database } from '@/types/supabase'
import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClientComponentClient<Database>()

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
  bookmarks: string[]
}

export interface Subscription {
  id: string
  user_id: string
  plan_type: 'plus' | 'pro'
  status: 'active' | 'canceled' | 'past_due'
  current_period_end: string
}

// Add your auth helper functions here 

export { createClient } 