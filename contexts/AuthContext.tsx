"use client"

import { createContext, useContext, useState, useEffect } from 'react'

type User = {
  email: string;
  name?: string;
  role?: 'user' | 'admin';
}

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      // Mock authentication
      const user = { email, name: 'Test User', role: 'user' as const }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      // Mock registration
      const user = { email, name: 'New User', role: 'user' as const }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      setError(null)
      setUser(null)
      localStorage.removeItem('user')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign out')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => setError(null)

  return (
    <AuthContext.Provider 
      value={{
        user,
        loading,
        error,
        signIn,
        signUp,
        signOut,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

