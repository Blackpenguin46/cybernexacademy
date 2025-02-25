import Link from 'next/link'
import { Award, Book, PenToolIcon as Tool, TrendingUp, Shield, Globe, Database, Code } from 'lucide-react'

export default function AdvancedProfessionalsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Advanced Professionals</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Welcome to the Advanced Professionals section of CyberNex. Here, you'll find resources, insights, and opportunities tailored for experienced cybersecurity practitioners looking to further their careers and stay at the cutting edge of the field.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/advanced-professionals/certifications" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Advanced Certifications</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Explore advanced certifications like OSCP, CISSP, and CISM to validate your expertise and advance your career.</p>
        </Link>
        
        <Link href="/advanced-professionals/specialized-tracks" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Specialized Learning Tracks</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Dive deep into advanced topics like Cloud Security, IoT Security, and AI in Cybersecurity.</p>
        </Link>
        
        <Link href="/advanced-professionals/tools" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Tool className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Advanced Tools and Techniques</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Master advanced cybersecurity tools and techniques for both offensive and defensive security operations.</p>
        </Link>
        
        <Link href="/advanced-professionals/research" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Research and Industry Trends</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest cybersecurity research, emerging threats, and industry trends.</p>
        </Link>
        
        <Link href="/advanced-professionals/leadership" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Leadership in Cybersecurity</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Develop the skills needed to lead cybersecurity teams and manage enterprise-level security strategies.</p>
        </Link>
        
        <Link href="/advanced-professionals/consulting" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Cybersecurity Consulting</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Learn how to provide expert cybersecurity consulting services to organizations of all sizes.</p>
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Advancing Your Career</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          As an advanced professional in cybersecurity, staying ahead of the curve is crucial. 
          CyberNex provides you with the resources and insights needed to continue growing in your career, 
          whether you're looking to specialize further, transition to a new role, or stay updated with 
          the latest industry developments.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Explore our advanced resources, participate in expert-led webinars, and connect with other seasoned professionals 
          to exchange knowledge and experiences. Your journey in cybersecurity is ongoing, and we're here to support you 
          every step of the way.
        </p>
      </section>
    </div>
  )
}

