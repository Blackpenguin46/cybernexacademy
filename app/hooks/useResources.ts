import { useState, useEffect, useCallback } from 'react';

// Define types for our resources
export interface BaseResource {
  name: string;
  description: string;
  url: string;
  lastVerified: string;
}

export interface DiscordServer extends BaseResource {
  members: string;
  categories: string[];
}

export interface RedditCommunity extends BaseResource {
  members: string;
  categories: string[];
}

export interface SkoolCommunity extends BaseResource {
  students: string;
  categories?: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  data: T[];
  lastUpdated: string;
  error?: string;
}

// Generic hook for fetching resources
export function useResources<T>(
  endpoint: string, 
  initialData: T[] = []
): {
  data: T[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  lastUpdated: string | null;
} {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Move fetchData outside useEffect and memoize it with useCallback
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }
      
      const result: ApiResponse<T> = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error occurred');
      }
      
      setData(result.data);
      setLastUpdated(result.lastUpdated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error fetching resources:', err);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]); // Add endpoint as a dependency

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Now fetchData is properly listed as a dependency
  
  // Return data and state
  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
    lastUpdated
  };
}

// Specific hooks for each resource type
export function useDiscordServers() {
  return useResources<DiscordServer>('/api/community/discord');
}

export function useRedditCommunities() {
  return useResources<RedditCommunity>('/api/community/reddit');
}

export function useSkoolCommunities() {
  return useResources<SkoolCommunity>('/api/community/skool');
} 