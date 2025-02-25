import Link from 'next/link'
import { ExternalLink, DollarSign, Bookmark } from 'lucide-react'

export default function OnlineCourses() {
  const paidCourses = [
    {
      title: "Introduction to Cyber Security Specialization",
      provider: "Coursera (NYU Tandon School of Engineering)",
      link: "#"
    },
    {
      title: "Cybersecurity for Business",
      provider: "Coursera (University of Colorado Boulder)",
      link: "#"
    },
    {
      title: "Practical Ethical Hacking",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Web Security for Developers",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Learn Ethical Hacking from Scratch",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Hands-On Cybersecurity",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Advanced Cybersecurity for Business",
      provider: "Coursera (University of Colorado Boulder)",
      link: "#"
    },
    {
      title: "Network Security Concepts",
      provider: "LinkedIn Learning",
      link: "#"
    },
    {
      title: "Web Application Security",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Advanced Penetration Testing",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Introduction to Malware Analysis",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Secure Coding Practices",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Introduction to Incident Response",
      provider: "Cybrary",
      link: "#"
    },
    {
      title: "Cybersecurity & Privacy for Executives",
      provider: "Coursera (University of California, Berkeley)",
      link: "#"
    },
    {
      title: "Hacking and Securing Networks",
      provider: "LinkedIn Learning",
      link: "#"
    },
    {
      title: "Cloud Security Concepts",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Computer Network Security",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Secure Your Web Application with OWASP",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Mastering Ethical Hacking",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Digital Forensics and Incident Response",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Application Security Fundamentals",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Cyber Threat Intelligence",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Cybersecurity in the Cloud",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Advanced Malware Analysis",
      provider: "Pluralsight",
      link: "#"
    },
    {
      title: "Hacking Web Applications",
      provider: "Udemy",
      link: "#"
    }
  ]

  const freeCourses = [
    {
      title: "Practical Ethical Hacking - The Complete Course",
      provider: "TCM Security",
      link: "https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course",
    },
    {
      title: "Introduction to Cyber Security",
      provider: "Cisco Networking Academy",
      link: "https://www.netacad.com/courses/cybersecurity"
    },
    {
      title: "Cybersecurity Essentials",
      provider: "Cisco Networking Academy",
      link: "https://www.netacad.com/courses/cybersecurity"
    },
    {
      title: "Internet Security Basics",
      provider: "Coursera (University of Maryland)",
      link: "#"
    },
    {
      title: "Introduction to Ethical Hacking",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "The Basics of Cyber Security",
      provider: "edX (University of California, Berkeley)",
      link: "#"
    },
    {
      title: "Fundamentals of Cybersecurity",
      provider: "edX (University of Washington)",
      link: "#"
    },
    {
      title: "Security + for Beginners",
      provider: "Cybrary",
      link: "https://www.cybrary.it"
    },
    {
      title: "Network Security Essentials",
      provider: "Coursera (University of Colorado Boulder)",
      link: "#"
    },
    {
      title: "Cybersecurity Basics",
      provider: "edX (University of Maryland)",
      link: "#"
    },
    {
      title: "Cybersecurity Fundamentals",
      provider: "LinkedIn Learning",
      link: "#"
    },
    {
      title: "Cybersecurity Awareness",
      provider: "FutureLearn (Cisco Networking Academy)",
      link: "#"
    },
    {
      title: "Practical Network Security",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Cloud Security Foundations",
      provider: "edX (University of California, Irvine)",
      link: "#"
    },
    {
      title: "How to Protect Your Privacy and Security Online",
      provider: "Coursera (University of Michigan)",
      link: "#"
    },
    {
      title: "Fundamentals of Cryptography",
      provider: "edX (University of Maryland)",
      link: "#"
    },
    {
      title: "Penetration Testing for Beginners",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Cybersecurity for Beginners",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Incident Response for Beginners",
      provider: "Cybrary",
      link: "#"
    },
    {
      title: "Building Secure Applications",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Intro to Reverse Engineering",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Learning How to Hack",
      provider: "LinkedIn Learning",
      link: "#"
    },
    {
      title: "Ethical Hacking - Exploiting Web Applications",
      provider: "Udemy",
      link: "#"
    },
    {
      title: "Hands-on Introduction to Cyber Security",
      provider: "FutureLearn (University of California, Irvine)",
      link: "#"
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyber Attacks",
      provider: "Coursera (IBM)",
      link: "#"
    },
    {
      title: "Social Engineering & Cybersecurity Awareness",
      provider: "Coursera (University of Maryland)",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Online Courses</h1>
      
      <section className="mb-8 bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Recommended for Beginners</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you're new to cybersecurity, we highly recommend starting with this comprehensive free course:
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Practical Ethical Hacking - The Complete Course</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Provider: TCM Security</p>
          <Link 
            href="https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
          >
            Start Learning <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Bookmark className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Free Courses</h2>
        </div>
        <div className="grid gap-4">
          {freeCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.provider}</p>
              <Link href={course.link} className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                Learn more <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center mb-6">
          <DollarSign className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Paid Courses</h2>
        </div>
        <div className="grid gap-4">
          {paidCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{course.provider}</p>
              <Link href={course.link} className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                Learn more <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Featured Learning Platforms</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="https://www.netacad.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Cisco Networking Academy</h3>
            <p className="text-gray-600 dark:text-gray-400">Free cybersecurity courses from a leading networking company</p>
          </a>
          <a href="https://www.cybrary.it" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Cybrary</h3>
            <p className="text-gray-600 dark:text-gray-400">Free and premium cybersecurity training platform</p>
          </a>
          <a href="https://daily.dev" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-200">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">Daily.dev</h3>
            <p className="text-gray-600 dark:text-gray-400">Developer news feed with free cybersecurity courses and resources</p>
          </a>
        </div>
      </section>
    </div>
  )
}

