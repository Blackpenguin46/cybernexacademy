"use client";

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Filter, 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen 
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
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl text-white">Loading courses...</h2>
      </div>
    </div>
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

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Browse Courses
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of cybersecurity courses designed for all skill levels.
          </p>
        </motion.div>
        
        {/* Filters and Search */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Search Bar */}
            <div className="md:w-1/2">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
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
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full flex items-center justify-between"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                >
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    <span>
                      {currentCategory === 'all' ? 'All Categories' : currentCategory}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                {categoryOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg z-10">
                    <div 
                      className="p-2 hover:bg-gray-600 cursor-pointer"
                      onClick={() => {
                        updateFilters({ category: 'all' });
                        setCategoryOpen(false);
                      }}
                    >
                      All Categories
                    </div>
                    {categories.map(category => (
                      <div 
                        key={category}
                        className="p-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => {
                          updateFilters({ category });
                          setCategoryOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Level Filter */}
              <div className="relative w-full sm:w-1/2">
                <button
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full flex items-center justify-between"
                  onClick={() => setLevelOpen(!levelOpen)}
                >
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>
                      {currentLevel === 'all' ? 'All Levels' : currentLevel}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                {levelOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 rounded-lg shadow-lg z-10">
                    <div 
                      className="p-2 hover:bg-gray-600 cursor-pointer"
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
                        className="p-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => {
                          updateFilters({ level });
                          setLevelOpen(false);
                        }}
                      >
                        {level}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(currentCategory !== 'all' || currentLevel !== 'all' || searchQuery) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {currentCategory !== 'all' && (
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                  Category: {currentCategory}
                  <button 
                    className="ml-2"
                    onClick={() => updateFilters({ category: 'all' })}
                  >
                    &times;
                  </button>
                </div>
              )}
              
              {currentLevel !== 'all' && (
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                  Level: {currentLevel}
                  <button 
                    className="ml-2"
                    onClick={() => updateFilters({ level: 'all' })}
                  >
                    &times;
                  </button>
                </div>
              )}
              
              {searchQuery && (
                <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
                  Search: {searchQuery}
                  <button 
                    className="ml-2"
                    onClick={() => {
                      setSearchValue('');
                      updateFilters({ q: '' });
                    }}
                  >
                    &times;
                  </button>
                </div>
              )}
              
              <button 
                className="text-gray-400 hover:text-white text-sm"
                onClick={() => {
                  setSearchValue('');
                  updateFilters({ category: 'all', level: 'all', q: '' });
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        {/* Courses Grid */}
        {loading ? (
          // Loading state
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-400">Loading courses...</p>
          </div>
        ) : filteredCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <Link href={`/learning/courses/${course.slug}`}>
                    <div className="relative h-48 w-full">
                      <Image
                        src={course.image_url || '/placeholder-course.jpg'}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-24" />
                      <div className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        ${course.price}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-400 mb-2">{course.category}</div>
                      <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{course.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{course.level}</span>
                        <span className="text-blue-400 text-sm">View Course →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  className="p-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage <= 1}
                  onClick={() => goToPage(currentPage - 1)}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  className="p-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage >= totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          // No results state
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <div className="flex justify-center mb-4">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Courses Found</h3>
            <p className="text-gray-400 mb-6">
              We couldn't find any courses matching your criteria. Try adjusting your filters.
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => {
                setSearchValue('');
                updateFilters({ category: 'all', level: 'all', q: '' });
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Export the page component with Suspense
export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesLoading />}>
      <CoursesContent />
    </Suspense>
  );
}