"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Book, 
  Clock, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  BarChart4, 
  BookOpen, 
  GraduationCap, 
  Rocket, 
  Plus,
  CheckCircle,
  Zap,
  ExternalLink,
  Calendar,
  Shield
} from 'lucide-react';
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

export default function Dashboard() {
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
  const [isLoading, setIsLoading] = useState(true);
  
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
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  // Dashboard data
  const inProgressCourses = [
    {
      id: 1,
      title: 'Ethical Hacking Fundamentals',
      progress: 65,
      lastAccessed: '2 days ago',
      totalLessons: 24,
      completedLessons: 16,
      image: '/images/courses/ethical-hacking.webp',
      category: 'Offensive Security',
    },
    {
      id: 2,
      title: 'Network Defense Strategies',
      progress: 28,
      lastAccessed: '5 days ago',
      totalLessons: 18,
      completedLessons: 5,
      image: '/images/courses/network-defense.webp',
      category: 'Defensive Security',
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Live Hack Session: Web Applications',
      date: 'Oct 15, 2023',
      time: '2:00 PM EST',
      duration: '90 min',
      type: 'Workshop'
    },
    {
      id: 2,
      title: 'Career Panel: Breaking into Cybersecurity',
      date: 'Oct 22, 2023',
      time: '1:00 PM EST',
      duration: '60 min',
      type: 'Panel'
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'New course on Cloud Security is now available',
      time: '1 hour ago',
      isRead: false,
      link: '/academy/courses/cloud-security'
    },
    {
      id: 2,
      message: 'You\'ve earned the "Network Defender" badge!',
      time: '1 day ago',
      isRead: true,
      link: '/profile/badges'
    },
    {
      id: 3,
      message: 'Community AMA with cybersecurity expert starts in 2 days',
      time: '2 days ago',
      isRead: true,
      link: '/community/events'
    }
  ];

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first lesson', icon: CheckCircle, isCompleted: true },
    { id: 2, name: 'Consistent Learner', description: 'Study for 5 consecutive days', icon: Calendar, isCompleted: true },
    { id: 3, name: 'Security Specialist', description: 'Complete 5 courses', icon: Shield, isCompleted: false },
    { id: 4, name: 'Quiz Master', description: 'Score 100% on 10 quizzes', icon: Award, isCompleted: false }
  ];

  const recommendedPaths = [
    { 
      id: 1, 
      title: 'Penetration Testing Career Path', 
      description: 'Master the skills needed to become a professional penetration tester',
      courses: 8,
      duration: '6 months',
      level: 'Intermediate',
      icon: Rocket
    },
    { 
      id: 2, 
      title: 'Security Analyst Track', 
      description: 'Learn to identify and respond to security threats and vulnerabilities',
      courses: 6,
      duration: '4 months',
      level: 'Beginner to Intermediate',
      icon: Shield
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark text-white">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-neon-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-lg text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-dark min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Welcome Section */}
          <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
            
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, <span className="text-neon-blue">User</span></h1>
              <p className="text-gray-400 max-w-2xl">
                Continue your cybersecurity journey. You've completed <span className="text-neon-green font-medium">21 lessons</span> so far, keep going!
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Link 
                  href="/academy/courses" 
                  className="flex items-center gap-2 bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/30 text-neon-blue px-4 py-2 rounded-lg transition duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Resume Learning</span>
                </Link>
                <Link 
                  href="/academy/paths" 
                  className="flex items-center gap-2 bg-dark-lighter hover:bg-dark-lighter/80 border border-dark-border px-4 py-2 rounded-lg transition duration-300"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>View Learning Paths</span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* In Progress Courses */}
              <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">In Progress</h2>
                    <Link href="/academy/courses/my-courses" className="text-neon-blue hover:text-neon-blue/80 text-sm flex items-center">
                      View All 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    {inProgressCourses.map((course) => (
                      <div key={course.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-dark-lighter rounded-lg border border-dark-border hover:border-neon-blue/50 transition duration-300">
                        <div className="sm:w-1/4 aspect-video rounded-lg bg-dark-card flex-shrink-0 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-neon-blue" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                            <div>
                              <h3 className="font-medium text-white">{course.title}</h3>
                              <p className="text-sm text-gray-400">{course.category}</p>
                            </div>
                            <span className="text-xs text-gray-500 mt-1 sm:mt-0">Last accessed: {course.lastAccessed}</span>
                          </div>
                          
                          <div className="mb-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                              <span className="text-neon-blue">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-dark-border rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <Link 
                              href={`/academy/courses/${course.id}`}
                              className="text-sm px-3 py-1.5 bg-dark hover:bg-dark-card border border-dark-border hover:border-neon-blue/30 rounded-md transition duration-300 inline-flex items-center"
                            >
                              <Zap className="w-3.5 h-3.5 mr-1.5 text-neon-blue" />
                              Continue
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Recommended Learning Paths */}
              <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Recommended Paths</h2>
                    <Link href="/academy/paths" className="text-neon-blue hover:text-neon-blue/80 text-sm flex items-center">
                      View All 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendedPaths.map((path) => (
                      <div 
                        key={path.id} 
                        className="p-4 bg-dark-lighter rounded-lg border border-dark-border hover:border-neon-blue/40 transition duration-300"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                            <path.icon className="w-5 h-5 text-neon-blue" />
                          </div>
                          <h3 className="font-medium text-white">{path.title}</h3>
                        </div>
                        
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {path.description}
                        </p>
                        
                        <div className="flex justify-between text-xs text-gray-500 mb-4">
                          <span className="flex items-center">
                            <BookOpen className="w-3.5 h-3.5 mr-1" />
                            {path.courses} courses
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            {path.duration}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-xs px-2 py-1 bg-neon-blue/10 text-neon-blue rounded">
                            {path.level}
                          </span>
                          <Link 
                            href={`/academy/paths/${path.id}`}
                            className="text-xs text-neon-blue hover:text-neon-blue/80 flex items-center"
                          >
                            View Path
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Notifications */}
              <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Notifications</h2>
                    <Link href="/dashboard/notifications" className="text-neon-blue hover:text-neon-blue/80 text-sm flex items-center">
                      View All 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <Link 
                        key={notification.id}
                        href={notification.link}
                        className={`block p-3 rounded-lg ${notification.isRead ? 'bg-dark-lighter' : 'bg-neon-blue/5 border border-neon-blue/20'} hover:bg-dark-card transition duration-300`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${notification.isRead ? 'bg-gray-600' : 'bg-neon-blue'}`}></div>
                          <div className="flex-1">
                            <p className={`text-sm ${notification.isRead ? 'text-gray-400' : 'text-white'}`}>
                              {notification.message}
                            </p>
                            <span className="text-xs text-gray-500 mt-1 block">
                              {notification.time}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Upcoming Events */}
              <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
                    <Link href="/community/events" className="text-neon-blue hover:text-neon-blue/80 text-sm flex items-center">
                      View All 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="p-4 bg-dark-lighter rounded-lg border border-dark-border">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-white line-clamp-1">{event.title}</h3>
                          <span className="text-xs px-2 py-0.5 bg-neon-purple/20 text-neon-purple rounded-full">
                            {event.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="w-4 h-4 mr-1.5 text-neon-purple/70" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">Duration: {event.duration}</span>
                          <Link 
                            href={`/community/events/${event.id}`}
                            className="text-xs text-neon-purple hover:text-neon-purple/80 flex items-center"
                          >
                            Details
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                    
                    <Link
                      href="/community/events/calendar"
                      className="block text-center py-2 border border-dashed border-gray-600 rounded-lg hover:border-neon-blue/50 hover:bg-dark-lighter transition duration-300"
                    >
                      <div className="flex items-center justify-center text-sm text-gray-400 hover:text-neon-blue">
                        <Plus className="w-4 h-4 mr-1.5" />
                        <span>View Full Calendar</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Achievements */}
              <motion.div variants={itemVariants} className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Achievements</h2>
                    <Link href="/profile/achievements" className="text-neon-blue hover:text-neon-blue/80 text-sm flex items-center">
                      View All 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className={`p-3 rounded-lg flex flex-col items-center justify-center text-center ${
                          achievement.isCompleted 
                            ? 'bg-neon-green/10 border border-neon-green/30' 
                            : 'bg-dark-lighter border border-dark-border opacity-60'
                        }`}
                      >
                        <achievement.icon className={`w-7 h-7 mb-2 ${
                          achievement.isCompleted ? 'text-neon-green' : 'text-gray-500'
                        }`} />
                        <h3 className="text-sm font-medium mb-1">
                          {achievement.name}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 