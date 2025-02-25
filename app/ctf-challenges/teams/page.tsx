import { Users, MessageSquare } from 'lucide-react'

export default function TeamFormation() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Team Formation</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Find a Team</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking to join a CTF team? Post your skills and interests here to connect with potential teammates.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Post Your Profile
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Team Recruitment</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Is your team looking for new members? Post your team's profile and requirements here.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Post Team Listing
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Team Formation Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Clearly communicate your skills and experience level</li>
          <li>Be open about your availability and commitment level</li>
          <li>Look for teams with complementary skills to your own</li>
          <li>Consider participating in beginner-friendly CTFs to gain experience</li>
          <li>Don't be afraid to reach out and introduce yourself to potential teammates</li>
        </ul>
      </div>
    </div>
  )
}

