"use client";

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Lock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminAuthGuardProps {
  children: ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if the user is authenticated and is an admin
  useEffect(() => {
    async function checkAuth() {
      try {
        setLoading(true);
        setError(null);
        
        // Get the current user
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }
        
        if (!session?.user) {
          router.push('/auth/login?redirect=/admin/dashboard');
          return;
        }
        
        // Check if the user has admin role
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
          
        if (profileError) {
          throw profileError;
        }
        
        // Verify admin role
        if (profileData?.role === 'admin') {
          setIsAdmin(true);
        } else {
          setError('You do not have permission to access the admin area.');
          setTimeout(() => {
            router.push('/');
          }, 3000);
        }
      } catch (error) {
        console.error('Error checking admin authentication:', error);
        setError('Authentication error. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    
    checkAuth();
  }, [router]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-red-950/20 border border-red-800 rounded-lg">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-4">Access Denied</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <p className="text-gray-400 mb-6">You are being redirected to the home page...</p>
          <Button onClick={() => router.push('/')} className="bg-red-600 hover:bg-red-700">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  // Authenticated and admin
  if (isAdmin) {
    return (
      <div>
        {/* Admin Header */}
        <div className="bg-gray-900 border-b border-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-semibold">Admin Panel</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => router.push('/admin/dashboard')}>
                Dashboard
              </Button>
              <Button variant="ghost" onClick={() => router.push('/admin/resources/discord')}>
                Discord
              </Button>
              <Button variant="ghost" onClick={() => router.push('/admin/resources/reddit')}>
                Reddit
              </Button>
              <Button variant="ghost" onClick={() => router.push('/admin/resources/skool')}>
                Skool
              </Button>
              <Button variant="ghost" onClick={() => router.push('/')}>
                Back to Site
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        {children}
      </div>
    );
  }

  return null;
} 