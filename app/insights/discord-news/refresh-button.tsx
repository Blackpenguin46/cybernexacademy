'use client';

import { useState } from 'react';
import { RefreshCw, Info } from 'lucide-react';

export function RefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  
  // Get environment info on the client side
  const clientEnvInfo = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set',
    NODE_ENV: process.env.NODE_ENV || 'unknown',
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL || 'unknown',
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    try {
      // This forces a refresh of the current route
      window.location.reload();
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      // If we get here without the page reloading, reset the state
      setTimeout(() => setIsRefreshing(false), 1000);
    }
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setShowDiagnostics(!showDiagnostics)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Show diagnostics"
        >
          <Info className="h-4 w-4" />
        </button>
        
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors 
                   bg-blue-100 border border-blue-200 rounded-md hover:bg-blue-200
                   dark:bg-blue-900/30 dark:border-blue-800 dark:hover:bg-blue-900/50
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   disabled:pointer-events-none disabled:opacity-50"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {showDiagnostics && (
        <div className="mt-2 p-3 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-1">Client Environment</h4>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(clientEnvInfo, null, 2)}
          </pre>
          <p className="mt-2 text-xs text-gray-500">
            Note: Server-side environment variables won't be visible here.
          </p>
        </div>
      )}
    </div>
  );
} 