import Link from 'next/link'
import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react'

export default function CertificationsCareers() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Certifications & Careers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/certifications-careers/certifications" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Certifications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Explore essential cybersecurity certifications for every career stage</p>
        </Link>
        
        <Link href="/certifications-careers/career-paths" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Career Paths</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Discover various cybersecurity career paths and job roles</p>
        </Link>
        
        <Link href="/certifications-careers/education" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Education</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Find cybersecurity degree programs and bootcamps</p>
        </Link>
        
        <Link href="/certifications-careers/job-market" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Job Market Trends</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Stay updated on the latest cybersecurity job market trends</p>
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Popular Certification Providers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.comptia.org/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">CompTIA</h3>
            <p className="text-gray-600 dark:text-gray-400">Vendor-neutral IT certifications</p>
          </a>
          <a href="https://www.isc2.org/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">(ISC)²</h3>
            <p className="text-gray-600 dark:text-gray-400">Global leader in cybersecurity certifications</p>
          </a>
          <a href="https://www.eccouncil.org/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">EC-Council</h3>
            <p className="text-gray-600 dark:text-gray-400">Ethical hacking and information security certifications</p>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Educational Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">MIT OpenCourseWare</h3>
            <p className="text-gray-600 dark:text-gray-400">Free computer science and cybersecurity courses</p>
          </a>
          <a href="https://online-learning.harvard.edu/subject/cybersecurity" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Harvard Online Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">Cybersecurity courses and programs</p>
          </a>
          <a href="https://learn-anything.xyz/" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learn Anything</h3>
            <p className="text-gray-600 dark:text-gray-400">Community-driven learning paths for various topics</p>
          </a>
        </div>
      </section>
    </div>
  )
}

