import Head from 'next/head'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { useAuth } from '../../lib/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Premium() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=/premium')
    }
  }, [user, loading, router])

  const resources = [
    {
      title: 'Dashboard',
      description: 'View your learning progress and achievements',
      href: '/premium/dashboard',
    },
    {
      title: 'Learning Paths',
      description: 'Structured cybersecurity curricula for different specializations',
      href: '/premium/learning-paths',
    },
    {
      title: 'Advanced Labs',
      description: 'Hands-on environments for practicing advanced skills',
      href: '/premium/labs',
    }
  ]

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Please log in to access premium content.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Premium Content - CyberNex Academy</title>
        <meta name="description" content="Exclusive cybersecurity training content for premium members" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Premium Content</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.href} {...resource} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
