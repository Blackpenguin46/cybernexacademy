import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabase';

// Create a context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if user is authenticated
        const { data } = await supabase.auth.getSession();
        setUser(data?.session?.user || null);
      } catch (error) {
        console.error('Auth error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
      }
    );

    checkAuth();

    // Clean up listener
    return () => {
      if (authListener?.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  // Auth methods
  const value = {
    user,
    loading,
    signIn: async ({ email, password }) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        return { success: true, data };
      } catch (error) {
        console.error('Sign in error:', error.message);
        return { success: false, error: error.message };
      }
    },
    signOut: async () => {
      try {
        await supabase.auth.signOut();
        return { success: true };
      } catch (error) {
        console.error('Sign out error:', error.message);
        return { success: false, error: error.message };
      }
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 