import { Navigation } from './components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CyberNex
        </h1>
        <p className="text-xl text-gray-600">
          Your gateway to cybersecurity learning and career advancement
        </p>
      </main>
    </div>
  )
} 