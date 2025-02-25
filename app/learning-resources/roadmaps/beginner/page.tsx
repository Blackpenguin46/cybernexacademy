import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function BeginnerRoadmapPage() {
  const roadmapSteps = [
    {
      title: "Fundamentals of Computer Networks",
      description: "Learn about OSI model, TCP/IP, and basic networking concepts",
      resources: [
        { title: "Introduction to Computer Networks", link: "/learn/intro-to-networks" },
        { title: "Networking Fundamentals Course", link: "/learn/networking-fundamentals" },
      ]
    },
    {
      title: "Operating Systems Basics",
      description: "Understand Windows and Linux operating systems",
      resources: [
        { title: "Windows Security Essentials", link: "/learn/windows-security" },
        { title: "Linux for Cybersecurity", link: "/learn/linux-cybersecurity" },
      ]
    },
    {
      title: "Introduction to Cybersecurity",
      description: "Learn about common threats, attack vectors, and basic defense mechanisms",
      resources: [
        { title: "Cybersecurity Fundamentals", link: "/learn/cybersecurity-fundamentals" },
        { title: "Common Cyber Attacks Explained", link: "/learn/common-cyber-attacks" },
      ]
    },
    {
      title: "Basic Cryptography",
      description: "Understand encryption, hashing, and digital signatures",
      resources: [
        { title: "Cryptography for Beginners", link: "/learn/crypto-beginners" },
        { title: "Practical Cryptography Applications", link: "/learn/practical-crypto" },
      ]
    },
    {
      title: "Web Application Security",
      description: "Learn about common web vulnerabilities and how to protect against them",
      resources: [
        { title: "OWASP Top 10", link: "/learn/owasp-top-10" },
        { title: "Web App Security Fundamentals", link: "/learn/web-app-security" },
      ]
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Beginner's Cybersecurity Roadmap</h1>

      <div className="space-y-8">
        {roadmapSteps.map((step, index) => (
          <div key={index} className="bg-secondary rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              {step.title}
            </h2>
            <p className="text-muted-foreground mb-4">{step.description}</p>
            <h3 className="font-medium mb-2">Resources:</h3>
            <ul className="space-y-2">
              {step.resources.map((resource, resourceIndex) => (
                <li key={resourceIndex}>
                  <Link 
                    href={resource.link}
                    className="text-primary hover:underline flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/learning-resources/roadmaps"
          className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          Explore More Roadmaps
        </Link>
      </div>
    </div>
  )
}

