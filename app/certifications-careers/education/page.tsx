import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Education</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Bachelor's in Cybersecurity</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">4-year undergraduate degree</p>
          <p className="text-gray-600 dark:text-gray-400">Provides a comprehensive foundation in cybersecurity principles, practices, and technologies. Covers topics such as network security, cryptography, ethical hacking, and security policies.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Master's in Cybersecurity</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">2-year graduate degree</p>
          <p className="text-gray-600 dark:text-gray-400">Offers advanced knowledge and skills in cybersecurity. Focuses on advanced topics like security architecture, risk management, and cybersecurity policy.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cybersecurity Bootcamp</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Intensive short-term program</p>
          <p className="text-gray-600 dark:text-gray-400">Provides hands-on training in cybersecurity skills. Typically lasts 12-24 weeks and covers practical skills needed for entry-level cybersecurity positions.</p>
        </div>
      </div>
    </div>
  )
}

