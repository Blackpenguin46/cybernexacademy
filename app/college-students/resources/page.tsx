import Link from 'next/link'
import { ArrowLeft, GraduationCap, Award, Book } from 'lucide-react'

export default function CollegeResourcesPage() {
  const topPrograms = [
    { name: "Carnegie Mellon University", program: "Information Security and Assurance" },
    { name: "Georgia Institute of Technology", program: "Cybersecurity" },
    { name: "Purdue University", program: "Cyber Security" },
    { name: "University of California, Berkeley", program: "Information Security" },
    { name: "Massachusetts Institute of Technology", program: "Cybersecurity and Information Assurance" },
  ]

  const scholarships = [
    { name: "CyberCorps: Scholarship for Service", provider: "U.S. Government" },
    { name: "(ISC)² Undergraduate Cybersecurity Scholarship", provider: "(ISC)²" },
    { name: "SWSIS Scholarship for Women in Cybersecurity", provider: "CRA-WP" },
    { name: "Raytheon CCDC Scholarship", provider: "Raytheon" },
    { name: "NSA Stokes Educational Scholarship Program", provider: "National Security Agency" },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">College Resources</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Top Cybersecurity Programs</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topPrograms.map((program, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{program.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{program.program}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Scholarships</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{scholarship.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Provider: {scholarship.provider}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>National Centers of Academic Excellence in Cybersecurity (NCAE-C) Program</li>
          <li>Cybersecurity and Infrastructure Security Agency (CISA) Education Resources</li>
          <li>NIST National Initiative for Cybersecurity Education (NICE)</li>
          <li>IEEE Computer Society Student Membership</li>
          <li>ACM SIGSAC (Special Interest Group on Security, Audit and Control)</li>
        </ul>
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

