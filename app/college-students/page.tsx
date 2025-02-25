import Link from "next/link"
import { Book, Briefcase, Calendar, GraduationCap, FileUp } from "lucide-react"

export default function CollegeStudentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Resources for College Students</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Begin your cybersecurity journey with foundational knowledge and skills.
          </p>
          <Link href="/college-students/getting-started" className="text-blue-600 hover:text-blue-800">
            Learn More →
          </Link>
        </div>
        <Link
          href="/college-students/resources"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">College Resources</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Find top cybersecurity programs and scholarship opportunities
          </p>
        </Link>

        <Link
          href="/college-students/internships"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Internships and Jobs</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Explore internship opportunities and prepare for your first job
          </p>
        </Link>

        <Link
          href="/college-students/learning-paths"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center mb-4">
            <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Paths</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Follow beginner-friendly roadmaps to build your cybersecurity skills
          </p>
        </Link>

        <Link
          href="/events-and-ctfs"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Events and CTFs</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Explore cybersecurity events and Capture The Flag competitions
          </p>
        </Link>

        <Link
          href="/college-students/course-planner"
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex items-center mb-4">
            <FileUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Course Planner</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Upload your courses and get a customized learning plan</p>
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Latest Cybersecurity Trends for Students
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Increased focus on cloud security in curricula</li>
          <li>Rising importance of AI and machine learning in cybersecurity</li>
          <li>Growing demand for skills in IoT (Internet of Things) security</li>
          <li>Emphasis on hands-on experience through virtual labs and simulations</li>
          <li>Integration of cybersecurity principles across various IT courses</li>
        </ul>
      </section>
    </div>
  )
}

