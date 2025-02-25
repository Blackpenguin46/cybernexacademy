import Link from "next/link"
import {
  ClipboardCheck,
  Lock,
  Shield,
  GraduationCap,
  Users,
  Fingerprint,
  Search,
  Scale,
  Network,
  Settings,
  BarChart,
  Cpu,
  Image,
  BookOpen,
  UserCheck,
  HardDrive,
} from "lucide-react"
import React from "react" // Import React

interface FundamentalTopic {
  title: string
  description: string
  icon: React.ElementType
  link: string
}

const fundamentalTopics: FundamentalTopic[] = [
  {
    title: "Assurance, Audit, and Certification",
    description:
      "Learn about security assurance frameworks, audit methodologies, and professional certifications in cybersecurity.",
    icon: ClipboardCheck,
    link: "/fundamentals/assurance-audit-certification",
  },
  {
    title: "Cryptology",
    description: "Explore cryptography fundamentals, encryption algorithms, and cryptanalysis techniques.",
    icon: Lock,
    link: "/fundamentals/cryptology",
  },
  {
    title: "Data Security and Privacy",
    description: "Understanding data protection principles, privacy regulations, and security controls.",
    icon: Shield,
    link: "/fundamentals/data-security-privacy",
  },
  {
    title: "Education and Training",
    description: "Resources for cybersecurity education, training programs, and skill development.",
    icon: GraduationCap,
    link: "/fundamentals/education-training",
  },
  {
    title: "Human Aspects",
    description:
      "Understanding the human element in cybersecurity, including social engineering and security awareness.",
    icon: Users,
    link: "/fundamentals/human-aspects",
  },
  {
    title: "Identity Management",
    description: "Learn about authentication, authorization, and identity governance.",
    icon: Fingerprint,
    link: "/fundamentals/identity-management",
  },
  {
    title: "Incident Handling and Digital Forensics",
    description: "Understanding incident response procedures and digital forensics techniques.",
    icon: Search,
    link: "/fundamentals/incident-handling-forensics",
  },
  {
    title: "Legal Aspects",
    description: "Explore cybersecurity laws, regulations, and compliance requirements.",
    icon: Scale,
    link: "/fundamentals/legal-aspects",
  },
  {
    title: "Network and Distributed Systems",
    description: "Understanding network security principles and distributed systems security.",
    icon: Network,
    link: "/fundamentals/network-distributed-systems",
  },
  {
    title: "Operating Systems",
    description: "Learn about operating system security, kernel-level protections, and OS hardening techniques.",
    icon: HardDrive,
    link: "/fundamentals/operating-systems",
  },
  {
    title: "Security Management and Governance",
    description: "Learn about security program management and governance frameworks.",
    icon: Settings,
    link: "/fundamentals/security-management-governance",
  },
  {
    title: "Security Measurements",
    description: "Understanding security metrics, measurements, and assessment methodologies.",
    icon: BarChart,
    link: "/fundamentals/security-measurements",
  },
  {
    title: "Software and Hardware Security Engineering",
    description: "Learn about secure development practices and hardware security principles.",
    icon: Cpu,
    link: "/fundamentals/software-hardware-security",
  },
  {
    title: "Steganography and Watermarking",
    description: "Explore techniques for hiding information and digital watermarking.",
    icon: Image,
    link: "/fundamentals/steganography-watermarking",
  },
  {
    title: "Theoretical Foundations",
    description: "Understanding the theoretical basis of cybersecurity principles.",
    icon: BookOpen,
    link: "/fundamentals/theoretical-foundations",
  },
  {
    title: "Trust Management and Accountability",
    description: "Learn about trust frameworks and accountability in cybersecurity.",
    icon: UserCheck,
    link: "/fundamentals/trust-management-accountability",
  },
]

export default function FundamentalsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Fundamentals</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore the comprehensive domains of cybersecurity knowledge based on the European Cybersecurity Taxonomy. Each
        domain provides essential understanding and resources for building your cybersecurity expertise.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fundamentalTopics.map((topic, index) => (
          <Link
            key={index}
            href={topic.link}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              {React.createElement(topic.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{topic.title}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{topic.description}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Why Study Cybersecurity Fundamentals?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Understanding these fundamental domains is crucial for building a strong foundation in cybersecurity. Whether
          you're just starting your journey or looking to expand your knowledge, these resources will help you develop
          comprehensive expertise across all critical areas of cybersecurity.
        </p>
        <Link href="/about-fundamentals" className="text-blue-600 dark:text-blue-400 hover:underline">
          Learn more about the importance of cybersecurity fundamentals
        </Link>
      </section>
    </div>
  )
}

