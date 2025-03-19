import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
      <div className="max-w-md p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-purple-500 mb-4">404 - Page Not Found</h1>
        <p className="text-white mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/"
            className="py-2 px-6 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}