import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Learn</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/learn/fundamentals">Fundamentals</Link></li>
              <li><Link href="/learn/labs">Labs</Link></li>
              <li><Link href="/learn/certifications">Certifications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">College</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/college/scholarships">Scholarships</Link></li>
              <li><Link href="/college/internships">Internships</Link></li>
              <li><Link href="/college/ctf">CTF Competitions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Career</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/career/job-board">Job Board</Link></li>
              <li><Link href="/career/roadmaps">Career Roadmaps</Link></li>
              <li><Link href="/career/branding">Personal Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/communities/forums">Forums</Link></li>
              <li><Link href="/communities/events">Events</Link></li>
              <li><Link href="/communities/mentorship">Mentorship</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} CyberNex Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 