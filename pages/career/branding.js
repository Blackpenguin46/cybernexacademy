import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Branding() {
  return (
    <Layout>
      <Head>
        <title>Personal Branding - CyberNex Academy</title>
        <meta name="description" content="Build your professional brand in cybersecurity" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Personal Branding for Cybersecurity Professionals</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Personal Branding Matters</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              In the competitive field of cybersecurity, having a strong personal brand can help you stand out to employers, clients, and peers. Your personal brand communicates your expertise, values, and unique perspective.
            </p>
            <p className="text-gray-700">
              A well-developed personal brand can lead to better job opportunities, speaking engagements, and professional connections.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Building Your Brand</h2>
          
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Define Your Expertise</h3>
              <p className="text-gray-700">
                Identify your strengths, skills, and areas of expertise within cybersecurity. Consider what makes you unique and what value you bring to the table. This could be a specific technical skill, a particular approach to problem-solving, or knowledge in a niche area.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Create an Online Presence</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Maintain an up-to-date LinkedIn profile with your achievements and skills</li>
                <li>Create a personal website or portfolio showcasing your projects</li>
                <li>Start a blog or contribute to cybersecurity publications</li>
                <li>Share insights and resources on social media platforms</li>
                <li>Contribute to open-source projects or GitHub repositories</li>
              </ul>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. Network Effectively</h3>
              <p className="text-gray-700 mb-4">
                Building connections in the cybersecurity community is crucial for your professional growth and brand development.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Attend industry conferences and meetups</li>
                <li>Join cybersecurity communities and forums</li>
                <li>Engage with industry leaders on social media</li>
                <li>Participate in CTF competitions and hackathons</li>
                <li>Offer help and share knowledge in community spaces</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Showcasing Your Work</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Demonstrating your expertise is the most effective way to build credibility in your personal brand. Consider these ways to showcase your work:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Write detailed walkthroughs of CTF challenges you've solved</li>
              <li>Create tutorial videos on security tools or techniques</li>
              <li>Publish research on vulnerabilities or security trends</li>
              <li>Speak at conferences or local meetups</li>
              <li>Create a portfolio of your projects and case studies</li>
              <li>Obtain and highlight relevant certifications</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  )
}
