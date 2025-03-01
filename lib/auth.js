import { createContext, useContext, useEffect, useState } from 'react'

// Create auth context
const AuthContext = createContext()

export function AuthProvider({ children, supabaseClient }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load user on mount
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true)
        
        const { data: { session } } = await supabaseClient.auth.getSession()
        
        // Set user if session exists
        if (session) {
          setUser(session.user)
        }
      } catch (error) {
        console.error('Error loading user:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    
    // Get the initial user
    getUser()
    
    // Set up listener for auth changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )
    
    // Clean up subscription
    return () => {
      if (subscription && subscription.unsubscribe) {
        subscription.unsubscribe()
      }
    }
  }, [supabaseClient])

  // Auth methods
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut()
      if (error) throw error
      setUser(null)
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // Context value
  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 