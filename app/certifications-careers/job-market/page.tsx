import { TrendingUp } from 'lucide-react'

export default function JobMarket() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Job Market Trends</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">High Demand for Cybersecurity Professionals</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">The cybersecurity job market continues to grow rapidly, with a significant shortage of skilled professionals. This trend is expected to continue in the coming years.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Emerging Roles in Cloud Security</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">As more organizations move to the cloud, there's an increasing demand for professionals with expertise in cloud security architecture and operations.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Focus on AI and Machine Learning in Cybersecurity</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">There's a growing trend of integrating AI and machine learning into cybersecurity solutions, creating new job opportunities for professionals with skills in these areas.</p>
        </div>
      </div>
    </div>
  )
}

