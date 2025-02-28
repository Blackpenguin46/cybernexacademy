import Head from 'next/head'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

export default function Career() {
  const resources = [
    {
      title: 'Job Board',
      description: 'Browse cybersecurity job listings and opportunities',
      href: '/career/job-board',
    },
    {
      title: 'Career Roadmaps',
      description: 'Paths to different cybersecurity specializations',
      href: '/career/roadmaps',
    },
    {
      title: 'Personal Branding',
      description: 'Build your professional brand and network effectively',
      href: '/career/branding',
    }
  ]

  return (
    <Layout>
      <Head>
        <title>Career Resources - CyberNex Academy</title>
        <meta name="description" content="Cybersecurity career resources and job opportunities" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Career Resources</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.href} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
