import Link from 'next/link'
import { ArrowLeft, Flag, Award, Book, PenToolIcon as Tool } from 'lucide-react'
import CTFEventList from '../components/CTFEventList'

export default function CTFChallengesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">CTF & Challenges</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Current and Upcoming CTFs in the U.S.</h2>
        <CTFEventList />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">CTF Resources</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/ctf-challenges/platforms" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Flag className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">CTF Platforms</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Explore popular platforms for practicing CTF challenges</p>
          </Link>
          
          <Link href="/ctf-challenges/categories" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Challenge Categories</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Learn about different types of CTF challenges</p>
          </Link>
          
          <Link href="/ctf-challenges/resources" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Learning Resources</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Find tutorials, tools, and guides for CTF preparation</p>
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Getting Started with CTFs</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          New to Capture The Flag competitions? Here are some steps to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Familiarize yourself with common CTF categories (e.g., Web Exploitation, Cryptography, Reverse Engineering)</li>
          <li>Practice on beginner-friendly platforms like PicoCTF or CTFlearn</li>
          <li>Join a CTF team or find study partners to learn collaboratively</li>
          <li>Participate in online CTFs to gain experience</li>
          <li>Keep learning and expanding your skills in various areas of cybersecurity</li>
        </ol>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

