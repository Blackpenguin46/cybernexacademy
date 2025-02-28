import Head from 'next/head'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

export default function Communities() {
  const resources = [
    {
      title: 'Forums',
      description: 'Discussion boards and Q&A for cybersecurity topics',
      href: '/communities/forums',
    },
    {
      title: 'Events',
      description: 'Conferences, webinars, and meetups in the industry',
      href: '/communities/events',
    },
    {
      title: 'Mentorship',
      description: 'Connect with mentors and mentorship programs',
      href: '/communities/mentorship',
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Cybersecurity Communities - CyberNex Academy</title>
        <meta name="description" content="Connect with cybersecurity communities and forums" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cybersecurity Communities</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.href} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
