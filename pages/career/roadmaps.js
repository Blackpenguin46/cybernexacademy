import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Roadmaps() {
  const roadmaps = [
    {
      title: 'Security Operations (SOC)',
      steps: [
        'CompTIA Security+ Certification',
        'Junior SOC Analyst position',
        'Learn SIEM tools and incident response',
        'SOC Analyst Level 2 position',
        'Specialist certifications (e.g., GCIH)',
        'SOC Team Lead or Incident Response roles'
      ]
    },
    {
      title: 'Penetration Testing',
      steps: [
        'Learn networking and Linux fundamentals',
        'Practice in lab environments (e.g., HackTheBox)',
        'Security+ and eJPT certifications',
        'Junior Penetration Tester position',
        'OSCP certification',
        'Specialize in web, network, or cloud penetration testing',
        'Senior Penetration Tester or Red Team roles'
      ]
    },
    {
      title: 'Security Engineering',
      steps: [
        'Software development or systems administration background',
        'Learn security principles and secure coding',
        'Security+ and cloud security certifications',
        'Junior Security Engineer position',
        'Implement security controls and automation',
        'CISSP certification',
        'Senior Security Engineer or Security Architect roles'
      ]
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Cybersecurity Career Roadmaps - CyberNex Academy</title>
        <meta name="description" content="Career paths and roadmaps for different cybersecurity specializations" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Career Roadmaps</h1>
        
        <div className="mb-8">
          <p className="text-gray-700">
            There are many different paths in cybersecurity. Here are some common career roadmaps to help you plan your journey:
          </p>
        </div>
        
        <div className="space-y-12">
          {roadmaps.map((roadmap, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">{roadmap.title}</h2>
              <div className="relative">
                {roadmap.steps.map((step, i) => (
                  <div key={i} className="mb-8 relative pl-8">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-600"></div>
                    {i < roadmap.steps.length - 1 && (
                      <div className="absolute left-2 top-5 w-0.5 h-full bg-blue-600"></div>
                    )}
                    <div className="ml-2">
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
