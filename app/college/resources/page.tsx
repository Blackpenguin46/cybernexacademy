'use client'

import { Book, Video, Download, Link as LinkIcon, BookOpen } from 'lucide-react'

export default function StudentResourcesPage() {
  const resources = [
    {
      category: "Study Materials",
      items: [
        {
          title: "Cybersecurity Fundamentals Guide",
          type: "PDF",
          description: "Comprehensive guide covering basic cybersecurity concepts",
          link: "#"
        },
        {
          title: "Network Security Basics",
          type: "Video Series",
          description: "Video tutorials on network security fundamentals",
          link: "#"
        },
        {
          title: "Cryptography Study Notes",
          type: "PDF",
          description: "Detailed notes on cryptographic principles and algorithms",
          link: "#"
        }
      ]
    },
    {
      category: "Practice Labs",
      items: [
        {
          title: "Virtual Security Lab",
          type: "Lab Environment",
          description: "Hands-on practice environment for security testing",
          link: "#"
        },
        {
          title: "CTF Challenges",
          type: "Interactive",
          description: "Capture The Flag challenges for practical learning",
          link: "#"
        }
      ]
    },
    {
      category: "Academic Papers",
      items: [
        {
          title: "Latest Research in Cybersecurity",
          type: "PDF Collection",
          description: "Collection of recent academic papers in cybersecurity",
          link: "#"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Student Resources</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Access a curated collection of study materials, practice labs, and academic resources 
        to support your cybersecurity education.
      </p>

      <div className="space-y-8">
        {resources.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    {item.type === "PDF" && <Book className="w-5 h-5 text-blue-600 mr-2" />}
                    {item.type === "Video Series" && <Video className="w-5 h-5 text-blue-600 mr-2" />}
                    {item.type === "Lab Environment" && <BookOpen className="w-5 h-5 text-blue-600 mr-2" />}
                    {item.type === "Interactive" && <LinkIcon className="w-5 h-5 text-blue-600 mr-2" />}
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Access Resource
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 