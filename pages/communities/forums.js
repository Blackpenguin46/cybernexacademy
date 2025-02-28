import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Forums() {
  const forums = [
    {
      name: "Reddit r/cybersecurity",
      description: "Reddit's cybersecurity community with discussions on news, tools, career advice, and more.",
      link: "https://www.reddit.com/r/cybersecurity/",
      members: "500K+"
    },
    {
      name: "HackTheBox Forums",
      description: "Community forums for the popular HackTheBox platform with challenge discussions and resources.",
      link: "https://forum.hackthebox.eu/",
      members: "250K+"
    },
    {
      name: "OWASP Community",
      description: "Forums and mailing lists for the Open Web Application Security Project community.",
      link: "https://owasp.org/",
      members: "150K+"
    },
    {
      name: "Stack Exchange Information Security",
      description: "Q&A site for information security professionals, with strict quality standards.",
      link: "https://security.stackexchange.com/",
      members: "300K+"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Cybersecurity Forums - CyberNex Academy</title>
        <meta name="description" content="Connect with cybersecurity discussion forums and communities" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Forums & Communities</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Forums</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {forums.map((forum, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{forum.name}</h3>
                <p className="text-gray-600 mb-1">Members: {forum.members}</p>
                <p className="text-gray-700 mb-4">{forum.description}</p>
                <a 
                  href={forum.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Forum →
                </a>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              When participating in cybersecurity communities, follow these guidelines for a positive experience:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Be respectful and professional in all interactions</li>
              <li>Don't share illegal content or activities</li>
              <li>Be mindful of operational security (OPSEC) when sharing information</li>
              <li>Search before asking questions that may have been answered already</li>
              <li>Give back to the community by helping others when you can</li>
              <li>Properly format code and technical information</li>
              <li>Respect intellectual property and give credit where it's due</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">CyberNex Community</h2>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Discord</h3>
            <p className="text-gray-700 mb-6">
              Connect with fellow CyberNex Academy members, ask questions, share resources, and collaborate on projects.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Join Discord Community
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}
