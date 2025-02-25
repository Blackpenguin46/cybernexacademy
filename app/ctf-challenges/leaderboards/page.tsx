import { Trophy } from 'lucide-react'

export default function Leaderboards() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">CTF Leaderboards</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Top 10 Global CTF Teams</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Rank</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Team</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">Score</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">Team {index + 1}</td>
                  <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{10000 - index * 500}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            Team Alpha won the DEF CON CTF 2023
          </li>
          <li className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            Team Beta set a new record in the Google CTF speed challenge
          </li>
          <li className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            Team Gamma solved the previously unsolvable HITCON challenge
          </li>
        </ul>
      </div>
    </div>
  )
}

