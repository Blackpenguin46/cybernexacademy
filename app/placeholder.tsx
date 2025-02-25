import Link from "next/link"

export default function PlaceholderPage() {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
      <p className="text-muted-foreground mb-8">
        We're working on bringing you great content for this page. Check back soon!
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200"
      >
        Return to Home
      </Link>
    </div>
  )
}

