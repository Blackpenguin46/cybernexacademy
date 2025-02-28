import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CyberNex Academy - Cybersecurity Learning Platform</title>
        <meta name="description" content="Learn cybersecurity with CyberNex Academy" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">
            Master Cybersecurity with CyberNex Academy
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your journey to becoming a cybersecurity expert starts here
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/learn" className="btn-primary">
              Start Learning
            </Link>
            <Link href="/premium" className="btn-secondary">
              Go Premium
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
} 