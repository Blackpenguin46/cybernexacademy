import React from 'react';

// Simple mock AuthProvider that passes children through
export function AuthProvider({ children }) {
  return <>{children}</>;
}

// Simple mock useAuth that returns empty values
export function useAuth() {
  return {
    user: null,
    loading: false,
    error: null,
    signIn: () => Promise.resolve({ user: null, error: null }),
    signUp: () => Promise.resolve({ user: null, error: null }),
    signOut: () => Promise.resolve(),
    isAuthenticated: false
  };
} 