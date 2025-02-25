import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Certifications</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">CompTIA Security+</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Entry-level cybersecurity certification</p>
          <p className="text-gray-600 dark:text-gray-400">Covers network security, compliance and operation security, threats and vulnerabilities, application, data and host security, access control and identity management, and cryptography.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Certified Information Systems Security Professional (CISSP)</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Advanced cybersecurity certification</p>
          <p className="text-gray-600 dark:text-gray-400">Covers security and risk management, asset security, security architecture and engineering, communication and network security, identity and access management, security assessment and testing, security operations, and software development security.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Certified Ethical Hacker (CEH)</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Specialized certification for ethical hacking</p>
          <p className="text-gray-600 dark:text-gray-400">Covers attack vectors, attack detection, web app hacking, malware, sniffing, social engineering, denial-of-service, session hijacking, and more.</p>
        </div>
      </div>
    </div>
  )
}

