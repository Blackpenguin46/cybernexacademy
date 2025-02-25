"use client"

import Link from "next/link"
import { Calendar, ExternalLink, ChevronDown, ChevronUp, Search } from "lucide-react"
import { useState } from "react"

// Event data organized into categories
const events = {
  CTFs: [
    {
      name: "National Collegiate Cyber Defense Competition (NCCDC)",
      date: "April 15-17, 2025",
      description:
        "A competition that focuses on the operational aspect of managing and protecting an existing network infrastructure.",
      link: "https://www.nationalccdc.org/",
    },
    {
      name: "CSAW CTF Qualification Round",
      date: "September 12-14, 2025",
      description:
        "One of the largest student-run cybersecurity events in the world, featuring various challenges for all skill levels.",
      link: "https://www.csaw.io/ctf",
    },
    {
      name: "Hack The Box University CTF",
      date: "October 3-5, 2025",
      description:
        "A team-based CTF competition specifically designed for university students, featuring a wide range of cybersecurity challenges.",
      link: "https://www.hackthebox.com/events/university-ctf",
    },
    {
      name: "DEFCON CTF Qualifier",
      date: "May 9-11, 2025",
      description: "One of the most prestigious CTF competitions, serving as a qualifier for the DEFCON CTF finals.",
      link: "https://www.oooverflow.io/",
    },
    {
      name: "PicoCTF",
      date: "March 2025",
      description: "A beginner-friendly CTF competition designed for high school and college students.",
      link: "https://picoctf.org/",
    },
  ],
  Conferences: [
    {
      name: "Black Hat USA",
      date: "August 5-8, 2025",
      description:
        "One of the world's leading cybersecurity conferences, featuring cutting-edge research and training.",
      link: "https://www.blackhat.com/",
    },
    {
      name: "DEFCON",
      date: "August 7-10, 2025",
      description: "The largest hacker convention in the world, featuring talks, workshops, and competitions.",
      link: "https://defcon.org/",
    },
    {
      name: "RSA Conference",
      date: "May 5-9, 2025",
      description: "A premier cybersecurity conference featuring industry leaders and innovative solutions.",
      link: "https://www.rsaconference.com/",
    },
    {
      name: "BSides Las Vegas",
      date: "August 6-7, 2025",
      description: "A community-driven cybersecurity conference held alongside Black Hat and DEFCON.",
      link: "https://www.bsideslv.org/",
    },
  ],
  Workshops: [
    {
      name: "SANS Penetration Testing Workshop",
      date: "Multiple dates throughout the year",
      description: "Hands-on workshops to master penetration testing techniques and tools.",
      link: "https://www.sans.org/cyber-security-training-events/",
    },
    {
      name: "OWASP AppSec Training",
      date: "Various dates",
      description: "Training sessions on application security best practices and tools.",
      link: "https://owasp.org/www-chapter-training/",
    },
    {
      name: "Cloud Security Workshop by AWS",
      date: "June 2025",
      description: "Learn about securing cloud infrastructure with hands-on labs and expert guidance.",
      link: "https://aws.amazon.com/security/",
    },
  ],
  Training: [
    {
      name: "Cybrary Career Path Training",
      date: "Ongoing",
      description: "Comprehensive training programs for various cybersecurity career paths.",
      link: "https://www.cybrary.it/",
    },
    {
      name: "TryHackMe Learning Paths",
      date: "Ongoing",
      description: "Interactive learning paths for beginners and advanced cybersecurity enthusiasts.",
      link: "https://tryhackme.com/",
    },
    {
      name: "Offensive Security Training",
      date: "Ongoing",
      description: "Advanced training programs for penetration testing and ethical hacking.",
      link: "https://www.offensive-security.com/",
    },
  ],
  "Online Events by Tech Giants": [
    {
      name: "Google Cloud Security Summit",
      date: "July 15, 2025",
      description: "A free online event to learn about Google Cloud's latest security innovations and best practices.",
      link: "https://cloud.google.com/security-summit",
    },
    {
      name: "IBM Security Connect",
      date: "October 2025",
      description: "An online conference featuring IBM's latest cybersecurity solutions and expert insights.",
      link: "https://www.ibm.com/security/connect",
    },
    {
      name: "AWS re:Inforce",
      date: "June 2025",
      description: "A global cloud security conference by Amazon Web Services, featuring keynotes, sessions, and labs.",
      link: "https://aws.amazon.com/reinforce/",
    },
    {
      name: "Microsoft Ignite: Security Edition",
      date: "November 2025",
      description: "An online event focused on Microsoft's security tools, strategies, and innovations.",
      link: "https://www.microsoft.com/ignite",
    },
    {
      name: "Cisco Live: Security Track",
      date: "Multiple dates",
      description: "Online sessions and workshops on Cisco's cybersecurity solutions and best practices.",
      link: "https://www.ciscolive.com/",
    },
    {
      name: "Intel Security Summit",
      date: "September 2025",
      description: "An online event showcasing Intel's latest advancements in hardware and software security.",
      link: "https://www.intel.com/security-summit",
    },
    {
      name: "Oracle Cloud Security Forum",
      date: "August 2025",
      description: "A virtual event to explore Oracle's cloud security solutions and strategies.",
      link: "https://www.oracle.com/cloud/security-forum/",
    },
  ],
}

export default function EventsAndCTFsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openCategory, setOpenCategory] = useState(null)

  // Toggle category visibility
  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  // Filter events based on search query
  const filteredEvents = Object.keys(events).reduce((acc, category) => {
    const filtered = events[category].filter(
      (event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    if (filtered.length > 0) {
      acc[category] = filtered
    }
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            Upcoming Cybersecurity Events, Conferences, and CTFs
          </h1>
          <p className="text-xl text-gray-300">
            Explore a wide range of cybersecurity events, conferences, CTFs, workshops, and training programs to enhance
            your skills and career.
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Event Categories */}
        {Object.keys(filteredEvents).map((category) => (
          <div key={category} className="mb-8">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-white">{category}</h2>
              {openCategory === category ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {/* Event Cards */}
            {openCategory === category && (
              <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents[category].map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-500"
                  >
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-white mb-2">{event.name}</h2>
                      <div className="flex items-center text-gray-400 mb-4">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      <Link
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-700 transition-all"
                      >
                        Learn More & Sign Up
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

