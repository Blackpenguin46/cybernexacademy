import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - CyberNex Academy</title>
        <meta name="description" content="About CyberNex Academy - our mission and team" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About CyberNex Academy</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            CyberNex Academy aims to democratize cybersecurity education by providing accessible, high-quality learning resources for students, professionals, and enthusiasts at all levels.
          </p>
          <p className="text-gray-700">
            We believe that cybersecurity knowledge should be available to everyone, regardless of their background or financial situation. Our platform offers both free and premium content to meet the needs of all learners.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
              <p className="text-gray-600 mb-2">Co-Founder & CEO</p>
              <p className="text-gray-700">
                Former security researcher with 15+ years of experience in the field.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600 mb-2">Co-Founder & CTO</p>
              <p className="text-gray-700">
                Previously led security engineering teams at major tech companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Education</p>
              <p className="text-gray-700">
                Cybersecurity professor with expertise in curriculum development.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 