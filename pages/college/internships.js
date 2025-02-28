import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Internships() {
  return (
    <Layout>
      <Head>
        <title>Cybersecurity Internships - CyberNex Academy</title>
        <meta name="description" content="Find cybersecurity internships and entry-level positions" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Internships</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Internships</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Security Operations Intern</h3>
              <p className="text-gray-600 mb-2">Company XYZ</p>
              <p className="text-gray-600 mb-4">Remote • Summer 2024</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </a>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Penetration Testing Intern</h3>
              <p className="text-gray-600 mb-2">ABC Security</p>
              <p className="text-gray-600 mb-4">New York, NY • Fall 2023</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Finding Your First Position</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Landing your first cybersecurity internship or entry-level position can be challenging. Here are some tips to help you stand out:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Build practical skills through CTFs and home labs</li>
              <li>Obtain relevant certifications like CompTIA Security+</li>
              <li>Contribute to open-source security projects</li>
              <li>Network with professionals through LinkedIn and cybersecurity events</li>
              <li>Create a portfolio showcasing your projects and skills</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}
