import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    },
    db: {
      schema: 'public'
    },
    global: {
      headers: {
        'x-application-name': 'cybernex'
      }
    }
  }
)

// Add error event listener
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT') {
    // Clear any cached data
    supabase.auth.refreshSession()
  }
})

