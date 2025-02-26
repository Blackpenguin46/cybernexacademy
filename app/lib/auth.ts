import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/types/supabase'

// Define the UserProfile type
export type UserProfile = {
  id: string
  username?: string
  full_name?: string
  avatar_url?: string
  website?: string
  updated_at?: string
}

// Define the Subscription type
export type Subscription = {
  id: string
  user_id: string
  plan_type: 'plus' | 'pro'
  status: 'active' | 'canceled' | 'past_due'
  stripe_customer_id: string
  stripe_subscription_id: string
  current_period_end: string
  created_at: string
  updated_at: string
}

// Create a client for server components
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  return createSupabaseClient(supabaseUrl, supabaseKey)
}

// Create a client for client components
export const createClientComponent = () => {
  return createClientComponentClient<Database>()
} 