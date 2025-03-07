"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  BookOpen, Terminal, GraduationCap, Award, Youtube, Briefcase, Code, ArrowRight, 
  Shield, Star, Clock, Users, Database, Server, Globe
} from 'lucide-react';

const AcademyPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
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
      },
    },
  };

  // Academy sections data
  const academySections = [
    {
      title: 'Learning Paths',
      description: 'Structured learning tracks for different career goals and skill levels',
      icon: BookOpen,
      href: '/academy/paths',
      color: 'neon-blue',
    },
    {
      title: 'YouTube Channels',
      description: 'Curated list of the best cybersecurity YouTube channels and playlists',
      icon: Youtube,
      href: '/academy/youtube',
      color: 'neon-red',
    },
    {
      title: 'Certifications',
      description: 'Preparation resources for popular cybersecurity certifications',
      icon: Award,
      href: '/academy/certifications',
      color: 'neon-yellow',
    },
    {
      title: 'Hands-on Labs',
      description: 'Practice in real-world environments with guided challenges',
      icon: Terminal,
      href: '/academy/labs',
      color: 'neon-green',
    },
    {
      title: 'College Resources',
      description: 'Academic materials, scholarships, and guidance for students',
      icon: GraduationCap,
      href: '/academy/college',
      color: 'neon-purple',
    },
    {
      title: 'Career Resources',
      description: 'Resume templates, interview preparation, and job search resources',
      icon: Briefcase,
      href: '/academy/careers',
      color: 'neon-pink',
    },
  ];

  // Featured learning paths
  const featuredLearningPaths = [
    {
      title: 'Ethical Hacking Fundamentals',
      description: 'Start your journey to become an ethical hacker with essential concepts and tools',
      level: 'Beginner',
      resources: 12,
      icon: Code,
      href: '/academy/paths/ethical-hacking-fundamentals',
    },
    {
      title: 'Security Operations Analyst',
      description: 'Learn to detect, investigate, and respond to cybersecurity incidents',
      level: 'Intermediate',
      resources: 10,
      icon: Terminal,
      href: '/academy/paths/security-operations-analyst',
    },
    {
      title: 'Cloud Security Specialist',
      description: 'Master security concepts and best practices for cloud environments',
      level: 'Advanced',
      resources: 14,
      icon: BookOpen,
      href: '/academy/paths/cloud-security-specialist',
    },
  ];

  // Featured courses with modern card styling
  const featuredCourses = [
    {
      id: "ethical-hacking",
      title: "Ethical Hacking & Penetration Testing",
      description: "Learn to identify and exploit vulnerabilities in systems and networks",
      icon: Terminal,
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.9,
      students: 12547,
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500/60",
      tag: "Most Popular",
      tagColor: "bg-blue-500/20 text-blue-400"
    },
    {
      id: "secure-coding",
      title: "Secure Coding Practices",
      description: "Master the art of writing code that's resistant to common security threats",
      icon: Code,
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.8,
      students: 9853,
      color: "from-green-500/20 to-green-600/5",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500/60",
      tag: "Trending",
      tagColor: "bg-green-500/20 text-green-400"
    },
    {
      id: "cloud-security",
      title: "Cloud Security Architecture",
      description: "Secure your cloud infrastructure against modern threats and attacks",
      icon: Server,
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.7,
      students: 7638,
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/60",
      tag: "Advanced",
      tagColor: "bg-purple-500/20 text-purple-400"
    },
    {
      id: "network-security",
      title: "Network Security Fundamentals",
      description: "Learn to protect networks from unauthorized access and attacks",
      icon: Globe,
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.9,
      students: 15230,
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      hoverColor: "group-hover:border-amber-500/60",
      tag: "Beginner Friendly",
      tagColor: "bg-amber-500/20 text-amber-400"
    }
  ];

  // Learning paths with card styling
  const learningPaths = [
    {
      title: "Security Analyst Path",
      description: "Master the skills needed to identify and mitigate security threats",
      icon: Shield,
      courses: 12,
      duration: "6 months",
      color: "from-neon-blue/20 to-blue-900/10"
    },
    {
      title: "Penetration Tester Path",
      description: "Learn to think like a hacker to secure systems and networks",
      icon: Terminal,
      courses: 10,
      duration: "5 months",
      color: "from-neon-green/20 to-green-900/10"
    },
    {
      title: "DevSecOps Path",
      description: "Integrate security into your development lifecycle",
      icon: Code,
      courses: 8,
      duration: "4 months",
      color: "from-purple-500/20 to-purple-900/10"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section with Cybersecurity Theme */}
      <section className="relative py-20 border-b border-neon-blue/20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] blur-[120px] bg-neon-blue/10 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-[400px] h-[400px] blur-[120px] bg-neon-green/10 rounded-full"></div>
          
          {/* Circuit-like elements */}
          <div className="absolute left-10 top-10 w-[200px] h-[200px] border-l-2 border-t-2 border-neon-blue/20 rounded-tl-3xl"></div>
          <div className="absolute right-10 bottom-10 w-[200px] h-[200px] border-r-2 border-b-2 border-neon-green/20 rounded-br-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                CyberNex Academy
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8">
              Master the art of cybersecurity with expert-designed courses and hands-on labs.
              Gain the skills to protect systems, networks, and data from digital threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/academy/paths" className="bg-neon-blue hover:bg-neon-blue/90 text-black font-medium px-8 py-3 rounded-md transition-all duration-300 group flex items-center">
                Browse Learning Paths <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/learning/courses" className="border border-neon-green text-neon-green hover:bg-neon-green/10 font-medium px-8 py-3 rounded-md transition-all duration-300 group flex items-center">
                View All Courses <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section with Card-based Layout */}
      <section className="py-16 border-b border-neon-blue/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                Featured Courses
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              Our most popular and highly-rated cybersecurity courses to help you start your security journey
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants} className="group">
                <Link href={`/learning/courses/${course.id}`} className="block h-full">
                  <div className={`h-full rounded-lg border ${course.borderColor} bg-gradient-to-br ${course.color} backdrop-blur-sm p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg ${course.hoverColor}`}>
                    {/* Course Tag */}
                    {course.tag && (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${course.tagColor}`}>
                        {course.tag}
                      </span>
                    )}
                    
                    {/* Course Icon */}
                    <div className="mb-4 p-3 bg-black/30 rounded-lg inline-block">
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Course Title & Description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm">
                      {course.description}
                    </p>
                    
                    {/* Course Meta Information */}
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-neon-blue">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-1" />
                          <span>{course.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16 border-b border-neon-blue/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                Learning Paths
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              Structured learning journeys to guide you from beginner to expert in different cybersecurity domains
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {learningPaths.map((path, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href="/academy/paths" className="block h-full">
                  <div className={`h-full rounded-lg bg-gradient-to-br ${path.color} border border-white/10 p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:border-white/20`}>
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-black/30 rounded-lg">
                        <path.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                          {path.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm">
                          {path.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-neon-blue">
                            <BookOpen className="w-4 h-4 mr-1" />
                            <span>{path.courses} courses</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{path.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-10">
            <Link href="/academy/paths" className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors font-medium">
              View All Learning Paths <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-neon-blue/20 to-black"></div>
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] opacity-[0.15]"></div>
            
            {/* HUD-like corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-blue"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-green"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-green"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-blue"></div>
            
            <div className="relative p-8 md:p-12 text-center">
              <BookOpen className="w-12 h-12 text-neon-blue mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to start your cybersecurity journey?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Create an account to track your progress, earn certificates, and join our community of security professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/auth/register" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue text-black px-8 py-3 rounded-md transition-all duration-300 font-medium">
                  Start Learning Now
                </Link>
                <Link href="/community" className="text-neon-blue border-2 border-neon-blue hover:bg-neon-blue/10 px-8 py-3 rounded-md transition-colors duration-300 font-medium">
                  Join Community
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage; 