'use client';

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export function RefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);

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
  );
} 