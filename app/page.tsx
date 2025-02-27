import { Navigation } from "@/components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to CyberNex</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your content here */}
        </div>
      </div>
    </main>
  )
} 