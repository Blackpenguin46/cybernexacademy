import { Target, Lock, Code, Globe, Database, Cpu } from 'lucide-react'

export default function ChallengeCategories() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Challenge Categories</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Web Exploitation</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Challenges focused on finding and exploiting vulnerabilities in web applications.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cryptography</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Puzzles involving encryption, decryption, and breaking various cryptographic schemes.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Reverse Engineering</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Challenges that involve analyzing and understanding compiled programs or obfuscated code.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Cpu className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Binary Exploitation</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Challenges focused on exploiting vulnerabilities in compiled programs to gain control of a system.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Forensics</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Challenges involving the analysis of digital artifacts to uncover hidden information or recover deleted data.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Miscellaneous</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            A variety of challenges that don't fit into other categories, often involving general problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  )
}

