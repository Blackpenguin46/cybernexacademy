import Link from "next/link"
import { Shield } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <Shield className="w-16 h-16 text-blue-400 mb-6" />
      <h1 className="text-5xl font-bold mb-4 text-center">404 - Page Not Found</h1>
      <p className="text-xl text-gray-300 mb-8 text-center max-w-lg">
        The page you were looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-md font-medium"
      >
        Return to Home
      </Link>
    </div>
  )
}