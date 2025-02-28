import Head from 'next/head'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

export default function College() {
  const resources = [
    {
      title: 'Scholarships',
      description: 'Cybersecurity scholarships and university programs',
      href: '/college/scholarships',
    },
    {
      title: 'Internships',
      description: 'Internships and entry-level job opportunities',
      href: '/college/internships',
    },
    {
      title: 'CTF Competitions',
      description: 'Capture The Flag competitions for students',
      href: '/college/ctf',
    },
    {
      title: 'Student Projects',
      description: 'Research and project opportunities for students',
      href: '/college/projects',
    }
  ]

  return (
    <Layout>
      <Head>
        <title>College Resources - CyberNex Academy</title>
        <meta name="description" content="Cybersecurity resources for college students" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">College Resources</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Card key={resource.href} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
