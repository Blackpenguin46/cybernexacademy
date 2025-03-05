"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

interface EnrollButtonProps {
  courseId: string;
  price: number;
}

export default function EnrollButton({ courseId, price }: EnrollButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [user, setUser] = useState<any>(null);
  
  // Check authentication and enrollment status
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        setUser(session.user);
        // Check if user is already enrolled
        checkEnrollmentStatus(session.user.id, courseId);
      } else {
        setAuthChecking(false);
      }
    };
    
    checkAuth();
  }, [courseId]);
  
  // Check if user is already enrolled in the course
  const checkEnrollmentStatus = async (userId: string, courseId: string) => {
    try {
      const { data, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .maybeSingle();
      
      if (error) {
        console.error('Error checking enrollment:', error);
      }
      
      setEnrolled(!!data);
      setAuthChecking(false);
    } catch (error) {
      console.error('Error in enrollment check:', error);
      setAuthChecking(false);
    }
  };
  
  // Handle enrollment process
  const handleEnroll = async () => {
    // If not authenticated, redirect to login
    if (!user) {
      router.push(`/auth/login?callback=/learning/courses/${courseId}`);
      return;
    }
    
    // If already enrolled, go to course dashboard
    if (enrolled) {
      router.push('/dashboard');
      return;
    }
    
    setLoading(true);
    
    try {
      // Create enrollment record
      const { error } = await supabase
        .from('enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId,
          status: 'active',
          progress: 0,
          enrolled_at: new Date().toISOString(),
        });
      
      if (error) throw error;
      
      // Update UI
      setEnrolled(true);
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in course. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Show placeholder during auth check
  if (authChecking) {
    return (
      <button 
        className="w-full py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center opacity-75"
        disabled
      >
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        Checking...
      </button>
    );
  }
  
  return (
    <button
      onClick={handleEnroll}
      disabled={loading}
      className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center ${
        enrolled
          ? 'bg-green-600 hover:bg-green-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : enrolled ? (
        'Go to Course'
      ) : (
        `Enroll Now - $${price.toFixed(2)}`
      )}
    </button>
  );
} 