import Link from 'next/link'
import { ArrowLeft, Flag, Award, Book, PenToolIcon as Tool, ExternalLink } from 'lucide-react'

export default function CTFPage() {
  const ctfPlatforms = [
    { 
      name: "PicoCTF", 
      description: "A free computer security education program with original content built on a capture-the-flag framework",
      link: "https://picoctf.org/"
    },
    { 
      name: "TryHackMe", 
      description: "A free platform for learning cyber security, using hands-on exercises and labs",
      link: "https://tryhackme.com/"
    },
    { 
      name: "HackTheBox", 
      description: "An online platform to test and advance your skills in penetration testing and cyber security",
      link: "https://www.hackthebox.com/"
    },
    { 
      name: "OverTheWire", 
      description: "A series of wargames to learn and practice security concepts in the form of fun-filled games",
      link: "https://overthewire.org/wargames/"
    },
    { 
      name: "VulnHub", 
      description: "Provides materials allowing anyone to gain practical hands-on experience with digital security",
      link: "https://www.vulnhub.com/"
    },
    { 
      name: "Root-Me", 
      description: "A platform offering a wide range of challenges across various security domains, suitable for all skill levels.",
      link: "https://www.root-me.org/"
    },
    { 
      name: "CTFtime", 
      description: "A website that aggregates various CTF competitions, allowing you to find and participate in events that match your skill level.",
      link: "https://ctftime.org/"
    }
  ]

  const ctfCourses = [
    {
      name: "Practical Ethical Hacking - The Complete Course",
      provider: "TCM Security",
      link: "https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course"
    },
    {
      name: "Web Security Academy",
      provider: "PortSwigger",
      link: "https://portswigger.net/web-security"
    },
    {
      name: "Cryptography I",
      provider: "Coursera (Stanford University)",
      link: "https://www.coursera.org/learn/crypto"
    },
    {
      name: "Binary Exploitation",
      provider: "Nightmare",
      link: "https://guyinatuxedo.github.io/index.html"
    }
  ]

  const beginnerIntermediateCTFs = [
    {
      name: "National Cyber League (NCL)",
      description: "A biannual cybersecurity competition for high school and college students",
      link: "https://nationalcyberleague.org/"
    },
    {
      name: "CSAW CTF Qualification Round",
      description: "Annual CTF organized by NYU Tandon School of Engineering",
      link: "https://www.csaw.io/ctf"
    },
    {
      name: "picoCTF",
      description: "Year-round CTF for beginners with a special event each spring",
      link: "https://picoctf.org/"
    },
    {
      name: "SANS Holiday Hack Challenge",
      description: "Annual holiday-themed CTF suitable for various skill levels",
      link: "https://www.sans.org/mlp/holiday-hack-challenge/"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/college-students" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6">
        <ArrowLeft className="mr-2" />
        Back to College Students
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Capture The Flag (CTF) Competitions</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Explore the exciting world of Capture The Flag competitions, from beginner-friendly challenges to advanced contests. CTFs are an excellent way to develop and test your cybersecurity skills in a fun, gamified environment.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Choose a platform from the list below that matches your skill level</li>
          <li>Create an account and explore the available challenges</li>
          <li>Start with challenges that interest you and gradually increase the difficulty</li>
          <li>Use online resources and tutorials when you get stuck</li>
          <li>Join CTF-related forums or Discord channels to connect with other learners and experts</li>
          <li>Don't be discouraged by setbacks – persistence is key in CTF!</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Tips for Beginners and Beyond</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Start with beginner-friendly platforms like PicoCTF or TryHackMe</li>
          <li>Focus on learning fundamental skills like Linux command line, basic scripting, and networking</li>
          <li>Don't be afraid to use hints or look up solutions when you're stuck</li>
          <li>Join a CTF team or find a study group to learn collaboratively</li>
          <li>Practice regularly and participate in online CTF competitions</li>
          <li>Keep a journal of your learning progress and challenges solved</li>
          <li>Explore different challenge types to broaden your skillset (web exploitation, reverse engineering, cryptography, etc.)</li>
          <li>Analyze write-ups of solved challenges to learn new techniques and approaches</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">CTF Platforms</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ctfPlatforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Flag className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{platform.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{platform.description}</p>
              <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                Visit Platform <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">CTF-Related Courses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {ctfCourses.map((course, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Book className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{course.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Provider: {course.provider}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                View Course <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Beginner to Intermediate CTFs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {beginnerIntermediateCTFs.map((ctf, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{ctf.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{ctf.description}</p>
              <a href={ctf.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center text-sm">
                Learn More <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

