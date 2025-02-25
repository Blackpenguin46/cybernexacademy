import { PenToolIcon as Tool, Code, Terminal } from 'lucide-react'

export default function LearningTools() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Learning Tools</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Tool className="w-6 h-6 text-yellow-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">TryHackMe</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Interactive Learning Platform</p>
          <p className="text-gray-600 dark:text-gray-400">Learn cybersecurity through hands-on exercises and labs.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">OverTheWire</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Wargames</p>
          <p className="text-gray-600 dark:text-gray-400">Learn and practice security concepts in the form of fun-filled games.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Metasploitable</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Vulnerable Virtual Machine</p>
          <p className="text-gray-600 dark:text-gray-400">Practice your penetration testing skills in a safe, controlled environment.</p>
        </div>
      </div>
    </div>
  )
}

