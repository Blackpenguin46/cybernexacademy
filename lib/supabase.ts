import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing. Please check your environment variables.")
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export const checkSupabaseConnection = async () => {
  try {
    console.log("Checking Supabase connection...")
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      console.error("Supabase connection error:", error)
      throw error
    }
    console.log("Supabase connection successful")
    return true
  } catch (error) {
    console.error("Supabase connection failed:", error)
    return false
  }
}

