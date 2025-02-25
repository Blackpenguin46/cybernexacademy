import Link from 'next/link'
import { GraduationCap, Star, MapPin } from 'lucide-react'

export default function CollegesPage() {
  const colleges = [
    {
      name: "Carnegie Mellon University",
      program: "Information Security and Assurance",
      location: "Pittsburgh, PA",
      ranking: 1,
      link: "/education/colleges/cmu",
      description: "World-renowned cybersecurity program with strong industry connections"
    },
    {
      name: "Georgia Institute of Technology",
      program: "Cybersecurity",
      location: "Atlanta, GA",
      ranking: 2,
      link: "/education/colleges/gatech",
      description: "Leading research institution with innovative cybersecurity curriculum"
    },
    {
      name: "Purdue University",
      program: "Cyber Security",
      location: "West Lafayette, IN",
      ranking: 3,
      link: "/education/colleges/purdue",
      description: "Strong focus on hands-on experience and research opportunities"
    },
    // Add more colleges as needed
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Top Cybersecurity College Programs</h1>
      
      <div className="grid gap-6">
        {colleges.map((college, index) => (
          <Link 
            key={index} 
            href={college.link}
            className="block bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
                <p className="text-muted-foreground mb-2">{college.program}</p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {college.location}
                </div>
                <p className="text-sm text-muted-foreground">{college.description}</p>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span className="font-semibold">#{college.ranking}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

