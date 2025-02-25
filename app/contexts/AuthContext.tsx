"use client"

import type React from "react"
import { createContext, useState, useEffect, useContext } from "react"
import type { User } from "@supabase/supabase-js"
import { supabase } from "../lib/supabase"
import { useRouter } from "next/navigation"
import type { UserProfile, Subscription } from "@/lib/auth"

type AuthContextType = {
  user: User | null
  profile: UserProfile | null
  subscription: 'plus' | 'pro' | null
  loading: boolean
  signUp: (email: string, password: string, username: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signInWithGithub: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [subscription, setSubscription] = useState<'plus' | 'pro' | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        console.log('Session:', session)
        setUser(session?.user ?? null)

        if (session?.user) {
          // Get profile
          const { data: profileData } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
          setProfile(profileData)

          // Get subscription
          const { data: subscriptionData } = await supabase
            .from('subscriptions')
            .select('plan_type')
            .eq('user_id', session.user.id)
            .eq('status', 'active')
            .single()
          setSubscription(subscriptionData?.plan_type || null)
        }

        // Listen for auth changes
        const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
          async (_event, session) => {
            setUser(session?.user ?? null)
            if (!session?.user) {
              setProfile(null)
              setSubscription(null)
              setLoading(false)
              return
            }

            try {
              const { data: profileData } = await supabase
                .from('user_profiles')
                .select('*')
                .eq('id', session.user.id)
                .single()
              setProfile(profileData)

              const { data: subscriptionData } = await supabase
                .from('subscriptions')
                .select('plan_type')
                .eq('user_id', session.user.id)
                .eq('status', 'active')
                .single()
              setSubscription(subscriptionData?.plan_type || null)
            } catch (error) {
              console.error('Error updating auth state:', error)
            } finally {
              setLoading(false)
            }
          }
        )

        return () => {
          authSubscription.unsubscribe()
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()
  }, [])

  const signUp = async (email: string, password: string, username: string) => {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          username,
        }
      }
    })
    if (signUpError) throw signUpError

    // Create user profile
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert([
        {
          id: (await supabase.auth.getUser()).data.user?.id,
          username,
          email,
        }
      ])
    if (profileError) throw profileError
  }

  const signIn = async (email: string, password: string) => {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error

    // Check email verification
    if (!user?.email_confirmed_at) {
      throw new Error('Please verify your email before logging in')
    }
  }

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    setUser(null) // Explicitly set user to null after sign out
  }

  const value = {
    user,
    profile,
    subscription,
    loading,
    signUp,
    signIn,
    signInWithGithub,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}


