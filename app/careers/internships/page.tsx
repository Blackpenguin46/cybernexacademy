import Link from 'next/link'
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function InternshipsPage() {
  const internships = [
    {
      company: "Microsoft",
      position: "Security Engineering Intern",
      location: "Redmond, WA",
      type: "Summer 2024",
      deadline: "2024-01-15",
      link: "/careers/internships/microsoft-security",
      description: "Join Microsoft's security team to help protect millions of users"
    },
    {
      company: "Google",
      position: "Information Security Intern",
      location: "Mountain View, CA",
      type: "Summer 2024",
      deadline: "2024-01-30",
      link: "/careers/internships/google-security",
      description: "Work on cutting-edge security infrastructure at Google"
    },
    {
      company: "Cisco",
      position: "Cybersecurity Intern",
      location: "San Jose, CA",
      type: "Summer 2024",
      deadline: "2024-02-15",
      link: "/careers/internships/cisco-security",
      description: "Help secure the networks that power the internet"
    },
    // Add more internships as needed
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Internships</h1>
      
      <div className="grid gap-6">
        {internships.map((internship, index) => (
          <Link 
            key={index} 
            href={internship.link}
            className="block bg-secondary hover:bg-secondary/80 rounded-lg p-6 transition-colors duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{internship.position}</h2>
                <ExternalLink className="w-5 h-5" />
              </div>
              
              <div className="flex items-center text-muted-foreground mb-2">
                <Building className="w-4 h-4 mr-2" />
                {internship.company}
              </div>
              
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                {internship.location}
              </div>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Application Deadline: {internship.deadline}
              </div>
              
              <p className="text-sm text-muted-foreground">{internship.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

