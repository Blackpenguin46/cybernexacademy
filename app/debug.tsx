'use client';

import { useState, useEffect } from 'react';

export default function DebugPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [envVars, setEnvVars] = useState<Record<string, string>>({});
  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Check for env vars
      const vars: Record<string, string> = {
        'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL || 'undefined',
        'NEXT_PUBLIC_VERCEL_URL': process.env.NEXT_PUBLIC_VERCEL_URL || 'undefined',
        'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'defined' : 'undefined',
        'NODE_ENV': process.env.NODE_ENV || 'undefined'
      };
      setEnvVars(vars);
    } catch (error) {
      if (error instanceof Error) {
        setErrorInfo(error.message);
      } else {
        setErrorInfo('Unknown error occurred');
      }
    }
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-2 rounded-lg shadow-lg"
      >
        Debug
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 text-white w-full max-w-2xl p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold mb-4">Debug Information</h2>
        
        {errorInfo && (
          <div className="mb-4 p-3 bg-red-900 rounded">
            <h3 className="font-bold">Error:</h3>
            <p>{errorInfo}</p>
          </div>
        )}

        <div className="mb-4">
          <h3 className="font-bold mb-2">Environment Variables:</h3>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify(envVars, null, 2)}
          </pre>
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-2">Window Information:</h3>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify({
              url: typeof window !== 'undefined' ? window.location.href : 'unknown',
              userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
              dimensions: typeof window !== 'undefined' 
                ? `${window.innerWidth}x${window.innerHeight}` 
                : 'unknown'
            }, null, 2)}
          </pre>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
} 