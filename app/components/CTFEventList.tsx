import { CalendarDays, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CTFEvent {
  name: string
  date: string
  location: string
  format: string
  website: string
}

const ctfEvents: CTFEvent[] = [
  {
    name: "DEFCON CTF",
    date: "August 10-13, 2023",
    location: "Las Vegas, NV",
    format: "On-site",
    website: "https://defcon.org/html/defcon-31/dc-31-index.html",
  },
  {
    name: "BSides Las Vegas CTF",
    date: "August 8-9, 2023",
    location: "Las Vegas, NV",
    format: "On-site",
    website: "https://www.bsideslv.org/",
  },
  {
    name: "CSAW CTF Qualification Round",
    date: "September 15-17, 2023",
    location: "Online",
    format: "Online",
    website: "https://www.csaw.io/ctf",
  },
  {
    name: "picoCTF",
    date: "March 14-28, 2024",
    location: "Online",
    format: "Online",
    website: "https://picoctf.org/",
  },
  {
    name: "SANS Holiday Hack Challenge",
    date: "December 2023 - January 2024",
    location: "Online",
    format: "Online",
    website: "https://www.sans.org/mlp/holiday-hack-challenge/",
  },
  {
    name: "National Cyber League (NCL)",
    date: "Fall 2023 Season: October - November 2023",
    location: "Online",
    format: "Online",
    website: "https://nationalcyberleague.org/",
  },
  {
    name: "MITRE CTF",
    date: "April 2024 (Exact dates TBA)",
    location: "Online",
    format: "Online",
    website: "https://mitrecyberacademy.org/competitions/",
  },
]

export default function CTFEventList() {
  return (
    <div className="space-y-6">
      {ctfEvents.map((event, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{event.name}</h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
            <CalendarDays className="w-5 h-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Format: {event.format}</p>
          <Link
            href={event.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 inline-flex items-center"
          >
            Visit Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      ))}
    </div>
  )
}

