"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Book, Clock, Award, ChevronRight, ArrowRight, BarChart4 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  status: string;
  progress: number;
  enrolled_at: string;
  course: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    level: string;
    duration: string;
    slug: string;
  };
}

interface DashboardCounts {
  enrolledCourses: number;
  completedCourses: number;
  certificatesEarned: number;
  averageProgress: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [inProgressEnrollments, setInProgressEnrollments] = useState<Enrollment[]>([]);
  const [recentlyEnrolled, setRecentlyEnrolled] = useState<Enrollment[]>([]);
  const [counts, setCounts] = useState<DashboardCounts>({
    enrolledCourses: 0,
    completedCourses: 0,
    certificatesEarned: 0,
    averageProgress: 0,
  });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/auth/login?callback=/dashboard');
        return;
      }
      
      setUser(session.user);
      fetchUserEnrollments(session.user.id);
    };
    
    checkSession();
  }, [router]);
  
  const fetchUserEnrollments = async (userId: string) => {
    setLoading(true);
    
    try {
      // Fetch enrollments with course details
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(*)
        `)
        .eq('user_id', userId)
        .order('enrolled_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      if (data) {
        const typedData = data as unknown as Enrollment[];
        setEnrollments(typedData);
        
        // Filter in-progress courses (progress > 0 and < 100)
        const inProgress = typedData.filter(
          enrollment => enrollment.progress > 0 && enrollment.progress < 100
        );
        setInProgressEnrollments(inProgress);
        
        // Get recently enrolled courses (latest 3)
        setRecentlyEnrolled(typedData.slice(0, 3));
        
        // Calculate dashboard counts
        const completed = typedData.filter(
          enrollment => enrollment.progress === 100
        );
        
        // Calculate average progress across all courses
        const totalProgress = typedData.reduce(
          (sum, enrollment) => sum + enrollment.progress, 
          0
        );
        const avgProgress = typedData.length > 0 
          ? Math.round(totalProgress / typedData.length) 
          : 0;
        
        setCounts({
          enrolledCourses: typedData.length,
          completedCourses: completed.length,
          certificatesEarned: completed.length, // Assuming one certificate per completed course
          averageProgress: avgProgress,
        });
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const calculateProgressColor = (progress: number) => {
    if (progress < 25) return 'bg-red-500';
    if (progress < 50) return 'bg-orange-500';
    if (progress < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Your Dashboard
          </motion.h1>
          {user && (
            <p className="text-gray-300">
              Welcome back, {user.email}
            </p>
          )}
        </div>
        
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Enrolled Courses</p>
                <h3 className="text-3xl font-bold text-white">{counts.enrolledCourses}</h3>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Book className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Completed Courses</p>
                <h3 className="text-3xl font-bold text-white">{counts.completedCourses}</h3>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Award className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Certificates Earned</p>
                <h3 className="text-3xl font-bold text-white">{counts.certificatesEarned}</h3>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Average Progress</p>
                <h3 className="text-3xl font-bold text-white">{counts.averageProgress}%</h3>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <BarChart4 className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${counts.averageProgress}%` }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* In Progress Courses */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">In Progress</h2>
            <Link href="/dashboard/courses" className="text-blue-400 hover:text-blue-300 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {inProgressEnrollments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressEnrollments.map((enrollment) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={enrollment.course.image_url || '/placeholder-course.jpg'}
                      alt={enrollment.course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">Progress: {enrollment.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${calculateProgressColor(enrollment.progress)} rounded-full`}
                          style={{ width: `${enrollment.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                      {enrollment.course.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {enrollment.course.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{enrollment.course.duration}</span>
                      </div>
                      <Link 
                        href={`/learning/courses/${enrollment.course.slug}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300"
                      >
                        Continue <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
              <Book className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No courses in progress</h3>
              <p className="text-gray-400 mb-6">
                You haven&apos;t started any courses yet. Explore our catalog to find courses
                that match your interests.
              </p>
              <Link
                href="/learning/courses"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center"
              >
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
        
        {/* Recently Enrolled */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Recently Enrolled</h2>
          </div>
          
          {recentlyEnrolled.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyEnrolled.map((enrollment) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <Link href={`/learning/courses/${enrollment.course.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={enrollment.course.image_url || '/placeholder-course.jpg'}
                        alt={enrollment.course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24" />
                      <div className="absolute bottom-2 right-2 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {enrollment.course.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                        {enrollment.course.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {enrollment.course.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{enrollment.course.level}</span>
                        <span className="text-blue-400 text-sm">Start Learning →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
              <Book className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No recent enrollments</h3>
              <p className="text-gray-400 mb-6">
                You haven&apos;t enrolled in any courses recently. Explore our catalog to find courses
                that match your interests.
              </p>
              <Link
                href="/learning/courses"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg inline-flex items-center"
              >
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
        
        {/* Recommendations */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400">
              Personalized course recommendations based on your interests and learning history
              will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 