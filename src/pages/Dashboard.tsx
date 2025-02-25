import type React from "react"
import { useAuth } from "../contexts/AuthContext"

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {user ? (
        <div>
          <p className="mb-4">Welcome, {user.email}!</p>
          <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
          {/* Add progress tracking components here */}
          <h2 className="text-2xl font-semibold mb-4">Recommended Courses</h2>
          {/* Add course recommendation components here */}
          <h2 className="text-2xl font-semibold mb-4">Recent Community Activity</h2>
          {/* Add community activity components here */}
        </div>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  )
}

export default Dashboard

