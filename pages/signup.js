import Head from 'next/head'
import Layout from '../components/Layout'
import { SignupForm } from '../components/Auth'
import Link from 'next/link'

export default function Signup() {
  return (
    <Layout>
      <Head>
        <title>Sign Up - CyberNex Academy</title>
        <meta name="description" content="Create your CyberNex Academy account" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Create an account</h1>
          <SignupForm />
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-800">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
} 