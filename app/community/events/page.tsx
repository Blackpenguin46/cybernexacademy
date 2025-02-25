'use client'

import { Calendar, MapPin, Users, ExternalLink, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function EventsPage() {
  const events = [
    {
      title: "Cybersecurity Summit 2024",
      date: "March 15, 2024",
      location: "Virtual",
      attendees: 500,
      type: "Conference",
      description: "Annual cybersecurity conference featuring industry experts and latest trends."
    },
    {
      title: "Ethical Hacking Workshop",
      date: "April 2, 2024",
      location: "New York, NY",
      attendees: 50,
      type: "Workshop",
      description: "Hands-on workshop covering ethical hacking techniques and tools."
    },
    {
      title: "Security+ Certification Bootcamp",
      date: "May 1-3, 2024",
      location: "Online",
      attendees: 100,
      type: "Training",
      description: "Intensive 3-day bootcamp preparing for CompTIA Security+ certification."
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Upcoming Events</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter Events
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{event.title}</h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {event.type}
              </span>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </p>
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {event.attendees} attendees
              </p>
              <p className="mt-2">{event.description}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Register
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 