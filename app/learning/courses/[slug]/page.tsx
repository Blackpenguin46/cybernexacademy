import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Award, Share2, Users, ChevronRight, BookOpen, ArrowRight, Code, Shield, Terminal, Cpu, Lock } from 'lucide-react';
import { fetchCourseBySlug, fetchModulesForCourse, fetchInstructorById } from '../../../../lib/supabase';
import EnrollButton from '../../../components/EnrollButton';

interface Module {
  id: string;
  title: string;
  description: string;
  course_id: string;
  order_index: number;
  created_at: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  level: string;
  duration: string;
  price: number;
  instructor_id: string;
  category: string;
  created_at: string;
  slug: string;
}

interface Instructor {
  id: string;
  name: string;
  bio: string;
  avatar_url: string;
  created_at: string;
}

// Get dynamic icon for category
const getCategoryIcon = (category: string) => {
  switch (category?.toLowerCase()) {
    case 'security':
    case 'cybersecurity':
      return <Shield className="w-5 h-5" />;
    case 'programming':
    case 'coding':
      return <Code className="w-5 h-5" />;
    case 'hacking':
    case 'ethical hacking':
      return <Terminal className="w-5 h-5" />;
    case 'networking':
    case 'network security':
      return <Cpu className="w-5 h-5" />;
    case 'certification':
      return <Award className="w-5 h-5" />;
    default:
      return <BookOpen className="w-5 h-5" />;
  }
};

// Generate metadata for the page based on course data
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourse(params.slug);
  
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found.',
    };
  }
  
  return {
    title: `${course.title} | CyberNex Academy`,
    description: course.description,
    openGraph: {
      title: `${course.title} | CyberNex Academy`,
      description: course.description,
      images: course.image_url ? [{ url: course.image_url }] : [],
    },
  };
}

// Helper function to fetch course data
async function getCourse(slug: string): Promise<Course | null> {
  const course = await fetchCourseBySlug(slug);
  return course;
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  // Fetch course details
  const course = await getCourse(params.slug);
  
  // Return 404 if course not found
  if (!course) {
    notFound();
  }
  
  // Fetch course modules
  const modules = await fetchModulesForCourse(course.id);
  
  // Fetch instructor info
  const instructor = await fetchInstructorById(course.instructor_id);
  
  // Sort modules by order_index
  const sortedModules = [...modules].sort((a, b) => a.order_index - b.order_index);
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Course Header with Hero Background */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
          
          {/* Course Image as Background with Overlay */}
          {course.image_url && (
            <div className="absolute inset-0 opacity-20">
              <Image
                src={course.image_url}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          {/* Animated circuit lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue via-transparent to-neon-blue"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <div className="mb-4">
                <Link href="/learning/courses" className="text-neon-blue hover:text-white flex items-center mb-4">
                  <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                  <span>Back to Courses</span>
                </Link>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dark-lighter text-neon-blue mb-4">
                  <span className="flex items-center">
                    {getCategoryIcon(course.category)}
                    <span className="ml-1">{course.category}</span>
                  </span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight glow-text-sm">
                {course.title}
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-2 text-neon-blue" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 mr-2 text-neon-blue" />
                  <span>{course.level}</span>
                </div>
                {instructor && (
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>Instructor: {instructor.name}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 lg:hidden">
                <EnrollButton courseId={course.id} price={course.price} />
                <button 
                  className="p-3 bg-dark-lighter hover:bg-dark-card text-white rounded-lg transition-colors"
                  aria-label="Share course"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="cyber-card">
                <div className="text-3xl font-bold mb-4 text-white flex items-baseline">
                  <span className="text-neon-blue mr-2 text-4xl">${course.price.toFixed(2)}</span>
                  <span className="text-gray-400 text-lg line-through">
                    ${(course.price * 1.3).toFixed(2)}
                  </span>
                </div>
                
                <div className="bg-dark-lighter h-px w-full mb-6"></div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Limited-time offer - 30% off</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">Full lifetime access</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-white">This course includes:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-neon-blue mr-3 mt-0.5" />
                    <span className="text-gray-300">{modules.length} modules</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-neon-blue mr-3 mt-0.5" />
                    <span className="text-gray-300">{course.duration} of content</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="w-5 h-5 text-neon-blue mr-3 mt-0.5" />
                    <span className="text-gray-300">Premium learning materials</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-neon-blue mr-3 mt-0.5" />
                    <span className="text-gray-300">Certificate of completion</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2">
                  <div className="flex-grow">
                    <EnrollButton courseId={course.id} price={course.price} />
                  </div>
                  <button 
                    className="p-3 bg-dark-lighter hover:bg-dark-card text-white rounded-lg transition-colors hidden lg:flex"
                    aria-label="Share course"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 -mt-4">
        {/* Course modules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white font-display">
            Course <span className="text-neon-blue">Content</span>
          </h2>
          
          <div className="cyber-card">
            {sortedModules.length > 0 ? (
              <div className="divide-y divide-dark-border">
                {sortedModules.map((module, index) => (
                  <div key={module.id} className="p-6 hover:bg-dark-lighter transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex">
                        <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mr-4 font-mono">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {module.title}
                          </h3>
                          <p className="text-gray-400">{module.description}</p>
                        </div>
                      </div>
                      <div className="bg-dark-card px-3 py-1 rounded-full text-sm text-gray-300">
                        Module {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-400">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-dark-lighter flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-gray-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">No modules available yet</h3>
                <p>Course modules are being prepared and will be available soon.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Instructor */}
        {instructor && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white font-display">
              Meet Your <span className="text-neon-blue">Instructor</span>
            </h2>
            
            <div className="cyber-card">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-neon-blue/30">
                    <Image
                      src={instructor.avatar_url || '/placeholders/avatar-default.jpg'}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{instructor.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{instructor.bio}</p>
                  <Link href="#" className="text-neon-blue hover:text-white transition-colors flex items-center w-fit">
                    <span>View full profile</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Related courses */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white font-display">
            Related <span className="text-neon-blue">Courses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center hover:shadow-glow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mx-auto mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical Hacking Fundamentals</h3>
              <p className="text-gray-400 text-sm mb-4">Master essential skills used by ethical hackers to secure systems.</p>
              <span className="text-neon-blue">Coming Soon</span>
            </div>
            
            <div className="cyber-card p-6 text-center hover:shadow-glow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mx-auto mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Network Security Specialist</h3>
              <p className="text-gray-400 text-sm mb-4">Learn to protect networks from unauthorized access and cyber threats.</p>
              <span className="text-neon-blue">Coming Soon</span>
            </div>
            
            <div className="cyber-card p-6 text-center hover:shadow-glow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue mx-auto mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Coding Practices</h3>
              <p className="text-gray-400 text-sm mb-4">Develop applications with security in mind and prevent vulnerabilities.</p>
              <span className="text-neon-blue">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 