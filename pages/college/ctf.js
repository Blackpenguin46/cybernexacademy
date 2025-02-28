import Head from 'next/head'
import Layout from '../../components/Layout'

export default function CTF() {
  const upcomingCompetitions = [
    {
      name: "National Collegiate Cyber Defense Competition",
      date: "March 2024",
      description: "Teams of college students are challenged to manage and protect a commercial network infrastructure.",
      link: "#"
    },
    {
      name: "DEFCON CTF Qualifier",
      date: "May 2024",
      description: "One of the oldest and most prestigious CTF competitions in the world.",
      link: "#"
    },
    {
      name: "picoCTF",
      date: "Ongoing",
      description: "A free computer security game targeted at middle and high school students.",
      link: "#"
    }
  ]

  return (
    <Layout>
      <Head>
        <title>CTF Competitions - CyberNex Academy</title>
        <meta name="description" content="Information about Capture The Flag competitions for cybersecurity students" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Capture The Flag Competitions</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What are CTFs?</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Capture The Flag (CTF) competitions are cybersecurity contests where participants solve security-related challenges to find "flags" that can be exchanged for points. These competitions are a great way to practice and develop your cybersecurity skills in a fun, gamified environment.
            </p>
            <p className="text-gray-700">
              CTFs typically include challenges in categories like cryptography, web exploitation, reverse engineering, binary exploitation, and forensics.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Competitions</h2>
          <div className="space-y-6">
            {upcomingCompetitions.map((competition, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{competition.name}</h3>
                <p className="text-gray-600 mb-2">Date: {competition.date}</p>
                <p className="text-gray-700 mb-4">{competition.description}</p>
                <a href={competition.link} className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
