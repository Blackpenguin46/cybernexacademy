import Link from 'next/link'
import { ArrowLeft, TrendingUp, DollarSign, Briefcase, Globe, Shield } from 'lucide-react'

export default function WhyCybersecurityPage() {
  const reasons = [
    {
      title: "High Demand",
      description: "The cybersecurity field is experiencing rapid growth with a significant shortage of skilled professionals.",
      icon: TrendingUp,
    },
    {
      title: "Competitive Salaries",
      description: "Cybersecurity professionals often enjoy above-average salaries due to the high demand and specialized skills required.",
      icon: DollarSign,
    },
    {
      title: "Job Security",
      description: "As cyber threats continue to evolve, the need for cybersecurity experts remains constant, providing long-term job security.",
      icon: Briefcase,
    },
    {
      title: "Global Opportunities",
      description: "Cybersecurity skills are in demand worldwide, offering opportunities to work internationally or remotely.",
      icon: Globe,
    },
    {
      title: "Challenging and Dynamic Field",
      description: "The ever-changing nature of cyber threats ensures that you'll always be learning and facing new challenges.",
      icon: Shield,
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Why Choose Cybersecurity?</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Cybersecurity is an exciting and rapidly growing field that offers numerous opportunities for college students. Here are some compelling reasons to consider a career in cybersecurity:
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <reason.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{reason.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
          </div>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Career Paths in Cybersecurity</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Information Security Analyst</li>
          <li>Penetration Tester / Ethical Hacker</li>
          <li>Security Engineer</li>
          <li>Incident Response Analyst</li>
          <li>Cybersecurity Consultant</li>
          <li>Chief Information Security Officer (CISO)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Getting Started in Cybersecurity</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Develop a strong foundation in computer science and networking</li>
          <li>Learn about different areas of cybersecurity to find your interests</li>
          <li>Gain hands-on experience through projects, internships, and CTF competitions</li>
          <li>Pursue relevant certifications to validate your skills</li>
          <li>Network with professionals and join cybersecurity communities</li>
        </ol>
      </section>

      <div className="mt-8">
        <Link href="/college-students" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2" />
          Back to College Students
        </Link>
      </div>
    </div>
  )
}

