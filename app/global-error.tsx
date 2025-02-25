'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-4">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => reset()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
} 