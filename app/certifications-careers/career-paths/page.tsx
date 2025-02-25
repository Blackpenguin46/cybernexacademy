import { Briefcase } from 'lucide-react'

export default function CareerPaths() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Career Paths</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Information Security Analyst</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Entry to Mid-level position</p>
          <p className="text-gray-600 dark:text-gray-400">Responsible for protecting an organization's computer networks and systems. They plan and implement security measures to protect computer networks from cyberattacks and unauthorized access.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Penetration Tester</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Mid to Senior-level position</p>
          <p className="text-gray-600 dark:text-gray-400">Also known as ethical hackers, they attempt to breach computer systems, networks, and applications to help organizations improve their security.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Chief Information Security Officer (CISO)</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Executive-level position</p>
          <p className="text-gray-600 dark:text-gray-400">Responsible for establishing and maintaining the enterprise vision, strategy, and program to ensure information assets and technologies are adequately protected.</p>
        </div>
      </div>
    </div>
  )
}

