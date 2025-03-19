'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
      <div className="max-w-md p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Something went wrong!</h1>
        <p className="text-white mb-6">
          We've encountered an error while rendering this page. Our team has been notified.
        </p>
        <div className="mb-6 p-4 bg-gray-800 rounded text-left overflow-x-auto max-w-full">
          <code className="text-sm text-red-300">
            {error.message || 'Unknown error'}
          </code>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="py-2 px-6 bg-purple-600 hover:bg-purple-700 rounded-md text-white transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="py-2 px-6 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
} 