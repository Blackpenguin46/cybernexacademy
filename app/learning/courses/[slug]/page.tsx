import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Award, Share2, Users, ChevronRight, BookOpen } from 'lucide-react';
import { fetchCourseBySlug, fetchModulesForCourse, fetchInstructorById } from '@/lib/supabase';
import EnrollButton from '@/app/components/EnrollButton';

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
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Course header */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0">
            <Image
              src={course.image_url || '/placeholder-course-hero.jpg'}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/20" />
          </div>
          
          <div className="relative z-10 py-16 px-8 flex flex-col md:flex-row">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {course.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Award className="w-5 h-5 mr-2" />
                  <span>{course.level}</span>
                </div>
                {instructor && (
                  <div className="flex items-center text-gray-400">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Instructor: {instructor.name}</span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 md:hidden">
                <EnrollButton courseId={course.id} price={course.price} />
                <button 
                  className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  aria-label="Share course"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="md:w-2/5 md:pl-8">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold mb-4 text-white">${course.price.toFixed(2)}</div>
                <div className="bg-gray-700 h-px w-full mb-4"></div>
                <h3 className="text-lg font-semibold mb-4 text-white">This course includes:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">{modules.length} modules</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">{course.duration} of content</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">Certificate of completion</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2">
                  <div className="flex-grow">
                    <EnrollButton courseId={course.id} price={course.price} />
                  </div>
                  <button 
                    className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors hidden md:flex"
                    aria-label="Share course"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course modules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Course Content</h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            {sortedModules.length > 0 ? (
              <div className="divide-y divide-gray-700">
                {sortedModules.map((module, index) => (
                  <div key={module.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {index + 1}. {module.title}
                        </h3>
                        <p className="text-gray-400">{module.description}</p>
                      </div>
                      <div className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                        Module {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-400">
                No modules available for this course yet.
              </div>
            )}
          </div>
        </div>
        
        {/* Instructor */}
        {instructor && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Meet Your Instructor</h2>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={instructor.avatar_url || '/placeholder-avatar.jpg'}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{instructor.name}</h3>
                  <p className="text-gray-400 mb-4">{instructor.bio}</p>
                  <Link href="#" className="text-blue-400 hover:text-blue-300">
                    View full profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Related courses placeholder */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="p-6 text-center text-gray-400">
                Related courses will be dynamically loaded here.
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="p-6 text-center text-gray-400">
                Related courses will be dynamically loaded here.
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="p-6 text-center text-gray-400">
                Related courses will be dynamically loaded here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 