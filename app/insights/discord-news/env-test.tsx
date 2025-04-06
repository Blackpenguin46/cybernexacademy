'use client';

import React, { useEffect, useState } from 'react';

export function EnvTest() {
  const [envInfo, setEnvInfo] = useState<Record<string, any>>({});
  
  useEffect(() => {
    // Simple function to check environment variables
    function checkEnvironment() {
      // Direct access to process.env
      const directEnv = {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL,
        key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      };
      
      // Get all NEXT_PUBLIC keys
      const publicKeys = Object.keys(process.env)
        .filter(key => key.startsWith('NEXT_PUBLIC_'));
      
      // Hard-coded test values to verify rendering works
      const testValues = {
        hardcoded1: 'test-value-1',
        hardcoded2: 'test-value-2',
        timestamp: new Date().toISOString()
      };
      
      setEnvInfo({
        direct: directEnv,
        publicKeys,
        testValues,
        nodeEnv: process.env.NODE_ENV,
        nextConfig: process.env.NEXT_PUBLIC_RUNTIME_CONFIG
      });
    }
    
    checkEnvironment();
  }, []);
  
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg my-4">
      <h2 className="text-xl font-bold mb-2">Environment Test Component</h2>
      <div>
        <h3 className="text-lg font-semibold">Direct Environment Access:</h3>
        <pre className="bg-gray-700 p-2 rounded my-2 overflow-x-auto">
          URL exists: {envInfo.direct?.url ? 'YES' : 'NO'}<br />
          KEY exists: {envInfo.direct?.key ? 'YES' : 'NO'}<br />
          URL value: {envInfo.direct?.url ? envInfo.direct.url.substring(0, 10) + '...' : 'undefined'}<br />
          KEY value: {envInfo.direct?.key ? envInfo.direct.key.substring(0, 5) + '...' : 'undefined'}<br />
        </pre>
        
        <h3 className="text-lg font-semibold mt-3">Public Environment Keys:</h3>
        <pre className="bg-gray-700 p-2 rounded my-2 overflow-x-auto">
          {envInfo.publicKeys?.length 
            ? envInfo.publicKeys.join(', ') 
            : 'No NEXT_PUBLIC keys found'}
        </pre>
        
        <h3 className="text-lg font-semibold mt-3">Test Values (Should Always Show):</h3>
        <pre className="bg-gray-700 p-2 rounded my-2 overflow-x-auto">
          {envInfo.testValues ? JSON.stringify(envInfo.testValues, null, 2) : 'Loading...'}
        </pre>
        
        <h3 className="text-lg font-semibold mt-3">Other Info:</h3>
        <pre className="bg-gray-700 p-2 rounded my-2 overflow-x-auto">
          NODE_ENV: {envInfo.nodeEnv || 'undefined'}<br />
          NEXT_CONFIG: {envInfo.nextConfig || 'undefined'}
        </pre>
      </div>
    </div>
  );
} 