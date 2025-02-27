import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/lib/auth';

interface AuthContextType {
  currentUser: any;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Add auth state listener here if needed
  }, []);

  const value = {
    currentUser,
    signIn: auth.signIn,
    signUp: auth.signUp,
    signOut: auth.signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 