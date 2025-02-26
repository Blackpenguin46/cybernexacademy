import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About CyberNex</h1>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          At CyberNex, our mission is to make cybersecurity education accessible, practical, and engaging for everyone. 
          We believe that in today's digital world, understanding cybersecurity is not just for specialists—it's an 
          essential skill for anyone who uses technology.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          We're committed to bridging the cybersecurity skills gap by providing high-quality, hands-on learning 
          experiences that prepare individuals for real-world challenges and opportunities in the field of cybersecurity.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We believe effective learning happens through:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Practical Application</strong> - Learning by doing through hands-on projects and labs</li>
          <li><strong>Real-World Relevance</strong> - Focusing on current threats and industry-relevant skills</li>
          <li><strong>Progressive Learning</strong> - Building knowledge from fundamentals to advanced concepts</li>
          <li><strong>Community Support</strong> - Learning together with peers and mentors</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Our curriculum is continuously updated to reflect the evolving cybersecurity landscape, ensuring 
          that our students are prepared for both current and emerging threats.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          CyberNex was founded by a team of cybersecurity professionals and educators who recognized the need for 
          more accessible, practical cybersecurity education. Our team combines decades of experience in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Offensive security and penetration testing</li>
          <li>Security architecture and engineering</li>
          <li>Incident response and digital forensics</li>
          <li>Security compliance and risk management</li>
          <li>Cybersecurity education and training</li>
        </ul>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We'd love to hear from you! Whether you have questions about our courses, feedback on your learning 
          experience, or inquiries about partnerships, our team is here to help.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-700 dark:text-gray-300">support@cybernex.edu</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
            <p className="text-gray-700 dark:text-gray-300">
              123 Cyber Street<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Social Media</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

