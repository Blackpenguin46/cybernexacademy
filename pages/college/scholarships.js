import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Scholarships() {
  const scholarships = [
    {
      name: "CyberCorps Scholarship for Service",
      description: "Federal program that provides scholarships for cybersecurity education.",
      link: "https://www.sfs.opm.gov/"
    },
    {
      name: "Women in Cybersecurity Scholarship",
      description: "Scholarships specifically for women pursuing cybersecurity degrees.",
      link: "#"
    },
    {
      name: "(ISC)² Undergraduate Cybersecurity Scholarship",
      description: "Supports undergraduate students pursuing degrees in cybersecurity.",
      link: "#"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Cybersecurity Scholarships - CyberNex Academy</title>
        <meta name="description" content="Scholarships for cybersecurity students" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Scholarships</h1>

        <div className="space-y-6">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
              <p className="text-gray-600 mb-4">{scholarship.description}</p>
              <a 
                href={scholarship.link} 
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
