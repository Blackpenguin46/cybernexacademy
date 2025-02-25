"use client"

import { useState } from "react"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function SchedulePage() {
  const [meetingType, setMeetingType] = useState("initial")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to schedule the meeting
    console.log("Scheduling meeting:", { meetingType, selectedDate, selectedTime })
    alert("Meeting scheduled successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Schedule Your CyberNex+ Meeting</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Meeting Type</label>
          <select
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="initial">Initial 1-on-1 Meeting</option>
            <option value="followup">Bi-weekly Follow-up</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Select Date</label>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border rounded pl-10"
              required
            />
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select Time</label>
          <div className="relative">
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-2 border rounded pl-10"
              required
            />
            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Schedule Meeting
        </button>
      </form>

      <div className="mt-8 text-center">
        <Link href="/cybernex-plus" className="text-blue-600 hover:underline">
          Back to CyberNex+
        </Link>
      </div>
    </div>
  )
}

