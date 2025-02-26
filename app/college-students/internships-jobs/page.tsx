import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import JobListings from '@/components/JobListings';

export default function InternshipsAndJobs() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/college-students" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6">
        <ArrowLeft className="mr-2" />
        Back to College Students
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Internships and Jobs</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore current cybersecurity internships and job opportunities. These listings are updated in real-time from various job platforms.
      </p>

      {/* Internships Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Internships</h2>
        <JobListings type="internship" />
      </section>

      {/* Full-time Positions Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Full-time Positions</h2>
        <JobListings type="job" />
      </section>

      {/* Tips for Applying Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Tips for Applying</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Tailor your resume and cover letter to each specific position</li>
          <li>Highlight relevant projects, coursework, and certifications</li>
          <li>Prepare for technical interviews by practicing common cybersecurity concepts</li>
          <li>Showcase your passion for cybersecurity through personal projects or contributions to open-source security tools</li>
          <li>Network with professionals in the field through LinkedIn, conferences, and local meetups</li>
          <li>Consider obtaining relevant certifications to boost your credentials</li>
        </ul>
      </section>

      {/* External Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Explore More Opportunities</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Check out these additional resources to find cybersecurity internships, jobs, and career pathways:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://www.cyberseek.org/pathway.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cyberseek Pathway
            </Link> - Explore cybersecurity career pathways and job demand trends.
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn Jobs
            </Link> - Search for cybersecurity roles and connect with industry professionals.
          </li>
          <li>
            <Link
              href="https://www.indeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Indeed
            </Link> - Find cybersecurity internships and full-time positions.
          </li>
          <li>
            <Link
              href="https://www.usajobs.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              USAJobs
            </Link> - Explore cybersecurity roles in the U.S. government.
          </li>
          <li>
            <Link
              href="https://www.glassdoor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Glassdoor
            </Link> - Discover cybersecurity jobs and company reviews.
          </li>
          <li>
            <Link
              href="https://www.nist.gov/itl/applied-cybersecurity/nice/resources/online-learning-content"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NICE Cybersecurity Workforce Framework
            </Link> - Learn about cybersecurity roles and skills.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sign up for job alerts and get notified about new cybersecurity opportunities.
        </p>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Sign Up for Job Alerts
        </Link>
      </section>
    </div>
  );
}

