"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SimpleTestPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Simple test page: Attempting to fetch from simple API...");
        const response = await fetch('/api/simple-test');
        console.log("Simple test page: Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log("Simple test page: Data received:", result);
        setData(result);
      } catch (err) {
        console.error("Simple test page: Error fetching data:", err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Simple API Test</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl mb-4">API Response:</h2>
          
          {loading && <p className="text-gray-400">Loading...</p>}
          
          {error && (
            <div className="text-red-500 bg-red-500/10 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Error:</h3>
              <p>{error}</p>
            </div>
          )}
          
          {!loading && !error && data && (
            <div className="bg-green-500/10 p-4 rounded-lg">
              <h3 className="font-bold text-green-400 mb-2">API is working!</h3>
              <pre className="bg-black/50 p-4 rounded overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          <Link href="/insights/news" className="text-purple-400 hover:underline">
            Go to News Page
          </Link>
          <Link href="/insights/test-news" className="text-purple-400 hover:underline">
            Go to Test News Page
          </Link>
          <Link href="/insights" className="text-purple-400 hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    </div>
  );
} 