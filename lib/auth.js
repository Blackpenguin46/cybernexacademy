import { useState, useEffect, createContext, useContext } from 'react'
import { supabase } from './supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to set user from session
    const setUserFromSession = async () => {
      try {
        setLoading(true)
        
        // Get current session
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          throw error
        }
        
        // Only set user if we have a valid session with a user
        if (data && data.session && data.session.user) {
          setUser(data.session.user)
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error('Error getting session:', error.message)
        setError(error.message)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    // Call the function
    setUserFromSession()

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // Safely set user if session exists and has user
        if (session && session.user) {
          setUser(session.user)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    // Cleanup on unmount
    return () => {
      try {
        if (subscription && subscription.unsubscribe) {
          subscription.unsubscribe()
        }
      } catch (error) {
        console.error('Error unsubscribing from auth changes:', error)
      }
    }
  }, [])

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      // Safely set user
      if (data && data.user) {
        setUser(data.user)
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      
      if (error) throw error
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setUser(null)
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  const value = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
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