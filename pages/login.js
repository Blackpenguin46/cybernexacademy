import Head from 'next/head'
import Layout from '../components/Layout'
import { LoginForm } from '../components/Auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const { redirect } = router.query

  return (
    <Layout>
      <Head>
        <title>Login - CyberNex Academy</title>
        <meta name="description" content="Log in to your CyberNex Academy account" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Log in to your account</h1>
          <LoginForm redirectTo={redirect || '/'} />
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
} 