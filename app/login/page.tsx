import Link from 'next/link'
import LoginForm from '@/components/LoginForm'

export default function Login() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        
        <LoginForm />
        
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

