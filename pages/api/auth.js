import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.action === 'signin') {
      const { email, password } = req.body
      
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (error) throw error
        
        res.status(200).json({ data })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    } 
    else if (req.body.action === 'signup') {
      const { email, password } = req.body
      
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (error) throw error
        
        res.status(200).json({ data })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    }
    else if (req.body.action === 'signout') {
      try {
        const { error } = await supabase.auth.signOut()
        
        if (error) throw error
        
        res.status(200).json({ message: 'Signed out successfully' })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    }
    else {
      res.status(400).json({ error: 'Invalid action' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
} 