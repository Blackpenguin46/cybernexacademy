"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

export default function MeetingScheduler() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to schedule the meeting
    console.log("Scheduling meeting for:", selectedDate, selectedTime)
    alert("Meeting scheduled successfully!")
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Schedule a 1-on-1 Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Time
          </label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-700"
        >
          <Calendar className="w-4 h-4 inline-block mr-2" />
          Schedule Meeting
        </button>
      </form>
    </div>
  )
}

