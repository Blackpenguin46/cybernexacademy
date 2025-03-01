import React, { createContext, useContext } from 'react';

// Mock AuthContext
const AuthContext = createContext({
  user: null,
  loading: false,
  error: null,
  signIn: () => Promise.resolve({ user: null, error: null }),
  signUp: () => Promise.resolve({ user: null, error: null }),
  signOut: () => Promise.resolve(),
  isAuthenticated: false
});

// Mock AuthProvider that does nothing during build
export function AuthProvider({ children }) {
  return <>{children}</>;
}

// Mock useAuth hook that works during build
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