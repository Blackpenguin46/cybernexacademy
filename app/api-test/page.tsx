'use client';

import React, { useEffect, useState } from 'react';

export default function ApiTestPage() {
  const [apiResult, setApiResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function testApi() {
    setLoading(true);
    setError(null);
    
    try {
      // Test the API
      const response = await fetch('/api/news');
      const data = await response.json();
      
      setApiResult(data);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      
      <div className="mb-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={testApi}
          disabled={loading}
        >
          {loading ? 'Testing...' : 'Test API'}
        </button>
      </div>
      
      {error && (
        <div className="p-4 bg-red-100 border border-red-300 rounded mb-4">
          <h2 className="font-bold text-red-700">Error:</h2>
          <p>{error}</p>
        </div>
      )}
      
      {apiResult && (
        <div className="p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="font-bold mb-2">API Result:</h2>
          <pre className="bg-black text-green-400 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(apiResult, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 