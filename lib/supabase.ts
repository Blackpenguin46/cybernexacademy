import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Create a custom hook to handle auth state
export const handleAuthStateChange = (callback: (user: unknown) => void) => {
  const { data } = supabase.auth.onAuthStateChange((_event) => {
    supabase.auth.getUser().then(({ data }) => {
      callback(data?.user || null)
    })
  })
  
  return data?.subscription
}

// Add error event listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    // Clear any cached data
    supabase.auth.refreshSession()
  }
})

