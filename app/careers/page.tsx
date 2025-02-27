import { Navigation } from '../components/Navigation'

export default function Careers() {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Careers in Cybersecurity</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Security Analyst</h2>
            <p className="text-gray-600">
              Monitor and protect organizations from cyber threats.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Penetration Tester</h2>
            <p className="text-gray-600">
              Identify and exploit security vulnerabilities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Security Engineer</h2>
            <p className="text-gray-600">
              Design and implement security solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 