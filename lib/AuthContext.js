import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - replace with your actual auth logic
  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      try {
        // This is a placeholder - replace with your actual auth check
        // For example: const user = await supabase.auth.getUser();
        setUser(null); // Set to null for unauthenticated state
      } catch (error) {
        console.error('Auth error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Values to expose through the context
  const value = {
    user,
    loading,
    signIn: async () => {
      // Placeholder for sign in logic
      console.log('Sign in triggered');
    },
    signOut: async () => {
      // Placeholder for sign out logic
      setUser(null);
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