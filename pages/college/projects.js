import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Student Projects - CyberNex Academy</title>
        <meta name="description" content="Cybersecurity project ideas and research opportunities for students" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Student Projects & Research</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Ideas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Personal Security Dashboard</h3>
              <p className="text-gray-700 mb-4">
                Build a dashboard that monitors and reports on your personal digital security posture, including password strength, account compromises, and more.
              </p>
              <p className="text-gray-600">
                Skills: Web development, API integration, security monitoring
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Phishing Simulator</h3>
              <p className="text-gray-700 mb-4">
                Create a tool that generates simulated phishing emails and tracks user responses to help organizations train employees.
              </p>
              <p className="text-gray-600">
                Skills: Email protocols, social engineering, data analysis
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">IoT Security Scanner</h3>
              <p className="text-gray-700 mb-4">
                Develop a tool that can scan a network for IoT devices and identify security vulnerabilities.
              </p>
              <p className="text-gray-600">
                Skills: Network scanning, vulnerability assessment, IoT protocols
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Malware Analysis Environment</h3>
              <p className="text-gray-700 mb-4">
                Build a sandboxed environment for safely analyzing malware behavior.
              </p>
              <p className="text-gray-600">
                Skills: Virtualization, system monitoring, reverse engineering
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research Opportunities</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Many universities and organizations offer research opportunities in cybersecurity. These programs allow students to work alongside experienced researchers and contribute to cutting-edge security research.
            </p>
            <h3 className="text-lg font-semibold mb-2">How to Find Research Opportunities:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Reach out to professors in your university's computer science or cybersecurity department</li>
              <li>Apply for Research Experiences for Undergraduates (REU) programs</li>
              <li>Look for internships at security research labs like MITRE or national laboratories</li>
              <li>Join cybersecurity clubs and organizations that collaborate on research projects</li>
              <li>Participate in open-source security projects</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  )
}
