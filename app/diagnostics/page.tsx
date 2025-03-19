'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DiagnosticsPage() {
  const [info, setInfo] = useState({
    envVars: {} as Record<string, string>,
    browserInfo: {} as Record<string, string>,
    domInfo: {} as Record<string, any>,
    csrfTest: '',
    runtimeChecks: {} as Record<string, boolean>
  });

  useEffect(() => {
    try {
      // Collect environment variables
      const envVars = {
        'NODE_ENV': process.env.NODE_ENV || 'undefined',
        'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL || 'undefined',
        'NEXT_PUBLIC_VERCEL_URL': process.env.NEXT_PUBLIC_VERCEL_URL || 'undefined',
        'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'defined (hidden)' : 'undefined',
      };

      // Collect browser info
      const browserInfo = {
        'User Agent': navigator.userAgent,
        'Language': navigator.language,
        'Window Size': `${window.innerWidth}x${window.innerHeight}`,
        'URL': window.location.href,
        'Referrer': document.referrer || 'none',
        'Cookies Enabled': navigator.cookieEnabled.toString(),
      };

      // DOM information
      const domInfo = {
        'Document Ready State': document.readyState,
        'Body Children Count': document.body.children.length,
        'Script Tags Count': document.getElementsByTagName('script').length,
        'Link Tags Count': document.getElementsByTagName('link').length,
      };

      // Runtime feature checks
      const runtimeChecks = {
        'Fetch API': typeof fetch === 'function',
        'Crypto API': typeof crypto !== 'undefined',
        'WebSocket': typeof WebSocket !== 'undefined',
        'Service Worker': 'serviceWorker' in navigator,
        'Local Storage': (() => {
          try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
          } catch (e) {
            return false;
          }
        })(),
      };

      // Test CSRF token generation
      const generateCSRFTest = async () => {
        try {
          // Generate a simple random token
          const buffer = new Uint8Array(8);
          crypto.getRandomValues(buffer);
          return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (error) {
          return `Error: ${error instanceof Error ? error.message : 'Unknown'}`;
        }
      };

      // Update state with collected info
      const updateInfo = async () => {
        setInfo({
          envVars,
          browserInfo,
          domInfo,
          csrfTest: await generateCSRFTest(),
          runtimeChecks
        });
      };

      updateInfo();
    } catch (error) {
      console.error('Diagnostics error:', error);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">System Diagnostics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Environment Variables</h2>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify(info.envVars, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Browser Information</h2>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify(info.browserInfo, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">DOM Information</h2>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify(info.domInfo, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Runtime Feature Checks</h2>
          <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm">
            {JSON.stringify(info.runtimeChecks, null, 2)}
          </pre>
        </div>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">CSRF Token Generation Test</h2>
        <p className="mb-2">Generated token: <code className="bg-gray-900 px-2 py-1 rounded">{info.csrfTest}</code></p>
        <p className="text-sm text-gray-400">This tests if the crypto APIs are working properly.</p>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition-colors">
          Back to Home
        </Link>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
        >
          Refresh Diagnostics
        </button>
      </div>
    </div>
  );
} 