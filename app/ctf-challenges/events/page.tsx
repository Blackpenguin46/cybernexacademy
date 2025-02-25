import { Calendar } from 'lucide-react'

export default function UpcomingEvents() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Upcoming CTF Events</h1>
      
      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">DEF CON CTF Qualifier</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Date: May 26-28, 2023</p>
          <p className="text-gray-600 dark:text-gray-400">
            The qualifier round for one of the most prestigious CTF competitions, held annually at the DEF CON hacking conference.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Google CTF</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Date: June 23-25, 2023</p>
          <p className="text-gray-600 dark:text-gray-400">
            An annual CTF competition organized by Google, featuring a wide range of challenges for all skill levels.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">HITCON CTF</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Date: August 19-21, 2023</p>
          <p className="text-gray-600 dark:text-gray-400">
            A highly regarded international CTF competition organized by the Hacks In Taiwan Conference (HITCON).
          </p>
        </div>
      </div>
    </div>
  )
}

