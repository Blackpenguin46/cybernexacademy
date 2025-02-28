import Head from 'next/head'
import Layout from '../../components/Layout'
import Card from '../../components/Card'

export default function Learn() {
  const resources = [
    {
      title: 'Fundamentals',
      description: 'Core cybersecurity concepts and principles',
      href: '/learn/fundamentals',
    },
    {
      title: 'Labs',
      description: 'Hands-on technical training environments',
      href: '/learn/labs',
    },
    {
      title: 'Certifications',
      description: 'Certification preparation guides',
      href: '/learn/certifications',
    },
  ]

  return (
    <Layout>
      <Head>
        <title>Learn Cybersecurity - CyberNex Academy</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Learning Resources</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.href} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  )
} 