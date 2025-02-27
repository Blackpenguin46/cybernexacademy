import { Navigation } from '../components/Navigation'

export default function About() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About CyberNex</h1>
        <div className="prose lg:prose-xl">
          <p className="text-lg text-gray-600 mb-4">
            CyberNex is your premier platform for cybersecurity education and career advancement.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to make cybersecurity education accessible to everyone,
            from beginners to advanced practitioners.
          </p>
        </div>
      </main>
    </div>
  )
} 