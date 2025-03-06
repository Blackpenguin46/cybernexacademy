"use client";

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Filter, 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Code,
  Shield,
  Terminal,
  Cpu,
  Award,
  Users
} from 'lucide-react';
import { fetchCourses } from '../../../lib/supabase';

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

// Loading component
function CoursesLoading() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute inset-0 border-4 border-t-neon-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-1 border-4 border-t-transparent border-r-neon-blue border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-150"></div>
            <div className="absolute inset-2 border-4 border-t-transparent border-r-transparent border-b-neon-blue border-l-transparent rounded-full animate-spin animation-delay-300"></div>
          </div>
          <h2 className="text-2xl text-white mb-3 glitch-text" data-text="Loading Courses">Loading Courses</h2>
          <div className="w-64 h-2 bg-dark-lighter rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Get dynamic icon for category
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
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

// Empty results component
function EmptyResults() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <div className="w-20 h-20 rounded-full bg-dark-lighter flex items-center justify-center mb-6">
        <Search className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-2xl font-display font-bold text-gray-300 mb-3">No Courses Found</h3>
      <p className="text-gray-400 text-center max-w-md mb-6">
        We couldn't find any courses matching your search criteria. Try adjusting your filters or search terms.
      </p>
      <button 
        onClick={() => window.location.href = '/learning/courses'}
        className="cyber-btn"
      >
        Reset Filters
      </button>
    </motion.div>
  );
}

// Main component with search params
function CoursesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get search parameters with defaults
  const currentCategory = searchParams.get('category') || 'all';
  const currentLevel = searchParams.get('level') || 'all';
  const currentPage = Number(searchParams.get('page') || '1');
  const searchQuery = searchParams.get('q') || '';
  
  // State for courses and UI
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>(['Beginner', 'Intermediate', 'Advanced']);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(searchQuery);

  // Items per page
  const ITEMS_PER_PAGE = 6;
  
  // Fetch courses from database
  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      try {
        const data = await fetchCourses();
        setCourses(data as unknown as Course[]);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.map((course: any) => course.category))
        );
        setCategories(uniqueCategories as string[]);
      } catch (error) {
        console.error('Error loading courses:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCourses();
  }, []);
  
  // Filter and paginate courses based on search params
  useEffect(() => {
    let result = [...courses];
    
    // Apply category filter
    if (currentCategory !== 'all') {
      result = result.filter(course => course.category === currentCategory);
    }
    
    // Apply level filter
    if (currentLevel !== 'all') {
      result = result.filter(course => course.level === currentLevel);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(query) || 
          course.description.toLowerCase().includes(query)
      );
    }
    
    // Calculate total pages
    setTotalPages(Math.max(1, Math.ceil(result.length / ITEMS_PER_PAGE)));
    
    // Paginate results
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedResults = result.slice(start, start + ITEMS_PER_PAGE);
    
    setFilteredCourses(paginatedResults);
  }, [courses, currentCategory, currentLevel, searchQuery, currentPage]);
  
  // Update URL when filters change
  const updateFilters = useCallback((params: Record<string, string>) => {
    // Create a new URLSearchParams instance with current search params
    const newParams = new URLSearchParams();
    
    // Add all existing parameters from the readonly searchParams
    searchParams.forEach((value, key) => {
      newParams.set(key, value);
    });
    
    // Update with new parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    // Reset to page 1 when filters change
    if (!('page' in params)) {
      newParams.set('page', '1');
    }
    
    router.push(`/learning/courses?${newParams.toString()}`);
  }, [router, searchParams]);
  
  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ q: searchValue, page: '1' });
  };
  
  // Handle pagination
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    updateFilters({ page: page.toString() });
  };

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants
  const itemVariants = {
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

  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header section with animated background */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-blue/5 to-transparent opacity-30"></div>
          
          {/* Animated circuit lines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue via-transparent to-neon-blue"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Browse <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-primary-500 glow-text">Courses</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-primary-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-0 leading-relaxed">
              Discover our comprehensive range of cybersecurity courses designed for all skill levels.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {/* Filters and Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cyber-card mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="md:w-1/2">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="cyber-input rounded-r-none w-full"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="cyber-btn !rounded-l-none !py-2 px-4"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Filters */}
            <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
              {/* Category Filter */}
              <div className="relative w-full sm:w-1/2">
                <button
                  className="cyber-input text-white px-4 py-3 rounded-lg w-full flex items-center justify-between"
                  onClick={() => {
                    setCategoryOpen(!categoryOpen);
                    setLevelOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>
                      {currentCategory === 'all' ? 'All Categories' : currentCategory}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {categoryOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-dark-card border border-dark-border rounded-lg shadow-glow-sm z-10"
                    >
                      <div 
                        className="p-3 hover:bg-dark-lighter hover:text-neon-blue cursor-pointer flex items-center"
                        onClick={() => {
                          updateFilters({ category: 'all' });
                          setCategoryOpen(false);
                        }}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        All Categories
                      </div>
                      {categories.map(category => (
                        <div 
                          key={category}
                          className="p-3 hover:bg-dark-lighter hover:text-neon-blue cursor-pointer flex items-center"
                          onClick={() => {
                            updateFilters({ category });
                            setCategoryOpen(false);
                          }}
                        >
                          {getCategoryIcon(category)}
                          <span className="ml-2">{category}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Level Filter */}
              <div className="relative w-full sm:w-1/2">
                <button
                  className="cyber-input text-white px-4 py-3 rounded-lg w-full flex items-center justify-between"
                  onClick={() => {
                    setLevelOpen(!levelOpen);
                    setCategoryOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-neon-blue" />
                    <span>
                      {currentLevel === 'all' ? 'All Levels' : currentLevel}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${levelOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {levelOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-dark-card border border-dark-border rounded-lg shadow-glow-sm z-10"
                    >
                      <div 
                        className="p-3 hover:bg-dark-lighter hover:text-neon-blue cursor-pointer"
                        onClick={() => {
                          updateFilters({ level: 'all' });
                          setLevelOpen(false);
                        }}
                      >
                        All Levels
                      </div>
                      {levels.map(level => (
                        <div 
                          key={level}
                          className="p-3 hover:bg-dark-lighter hover:text-neon-blue cursor-pointer"
                          onClick={() => {
                            updateFilters({ level });
                            setLevelOpen(false);
                          }}
                        >
                          {level}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Active filters display */}
        {(currentCategory !== 'all' || currentLevel !== 'all' || searchQuery) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex flex-wrap items-center gap-2"
          >
            <span className="text-gray-400">Active filters:</span>
            
            {currentCategory !== 'all' && (
              <div className="flex items-center bg-dark-lighter px-3 py-1 rounded-full">
                <span className="text-sm text-gray-300 mr-2">Category: {currentCategory}</span>
                <button 
                  onClick={() => updateFilters({ category: 'all' })}
                  className="text-gray-400 hover:text-neon-blue"
                  aria-label="Remove category filter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
            
            {currentLevel !== 'all' && (
              <div className="flex items-center bg-dark-lighter px-3 py-1 rounded-full">
                <span className="text-sm text-gray-300 mr-2">Level: {currentLevel}</span>
                <button 
                  onClick={() => updateFilters({ level: 'all' })}
                  className="text-gray-400 hover:text-neon-blue"
                  aria-label="Remove level filter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
            
            {searchQuery && (
              <div className="flex items-center bg-dark-lighter px-3 py-1 rounded-full">
                <span className="text-sm text-gray-300 mr-2">Search: "{searchQuery}"</span>
                <button 
                  onClick={() => updateFilters({ q: '' })}
                  className="text-gray-400 hover:text-neon-blue"
                  aria-label="Remove search filter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
            
            <button 
              onClick={() => router.push('/learning/courses')}
              className="ml-auto text-neon-blue hover:text-white transition-colors text-sm flex items-center"
            >
              Clear All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        )}
        
        {/* Main Course Grid */}
        {loading ? (
          <CoursesLoading />
        ) : filteredCourses.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <Link 
                  href={`/learning/courses/${course.slug}`} 
                  className="cyber-card group block h-full hover:shadow-glow transition-all duration-300"
                >
                  {/* Course Image */}
                  <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                    <Image
                      src={course.image_url || '/placeholders/course-default.jpg'}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                    <div className="absolute top-3 left-3 bg-dark-lighter px-3 py-1 rounded-full">
                      <div className="flex items-center">
                        {getCategoryIcon(course.category)}
                        <span className="ml-1 text-sm">{course.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="p-1">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">{course.title}</h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="w-4 h-4 mr-1 text-neon-blue" />
                          {course.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Award className="w-4 h-4 mr-1 text-neon-blue" />
                          {course.level}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${Number(course.price).toFixed(2)}</span>
                      <span className="flex items-center text-neon-blue group-hover:translate-x-1 transition-transform">
                        View Course
                        <ChevronRight className="ml-1 w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyResults />
        )}
        
        {/* Pagination */}
        {filteredCourses.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-300 hover:bg-dark-lighter hover:text-neon-blue'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    currentPage === i + 1
                      ? 'bg-neon-blue text-dark font-bold'
                      : 'text-gray-300 hover:bg-dark-lighter hover:text-neon-blue'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-300 hover:bg-dark-lighter hover:text-neon-blue'
                }`}
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesLoading />}>
      <CoursesContent />
    </Suspense>
  );
}