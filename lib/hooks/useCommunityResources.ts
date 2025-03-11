"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// Resource types
export interface CommunityResource {
  id: string;
  name: string;
  description: string;
  url: string;
  member_count: number | null;
  is_verified: boolean;
  last_verified: string | null;
  created_at: string;
}

export interface DiscordServer extends Omit<CommunityResource, 'url'> {
  invite_link: string;
}

export interface ResourceStats {
  total: number;
  verified: number;
}

export type ResourceType = 'discord' | 'reddit' | 'skool';

export function useCommunityResources(resourceType: ResourceType) {
  const [resources, setResources] = useState<(CommunityResource | DiscordServer)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<ResourceStats>({ total: 0, verified: 0 });
  
  const supabase = createClientComponentClient();
  
  // Map resource type to table name
  const getTableName = (type: ResourceType) => {
    switch (type) {
      case 'discord': return 'discord_servers';
      case 'reddit': return 'reddit_communities';
      case 'skool': return 'skool_communities';
    }
  };
  
  // Fetch resources
  useEffect(() => {
    async function fetchResources() {
      setLoading(true);
      setError(null);
      
      try {
        const tableName = getTableName(resourceType);
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .order('name');
          
        if (error) throw error;
        
        setResources(data || []);
        
        // Calculate stats
        const total = data?.length || 0;
        const verified = data?.filter(item => item.is_verified)?.length || 0;
        setStats({ total, verified });
      } catch (err) {
        console.error(`Error fetching ${resourceType} resources:`, err);
        setError(`Failed to load ${resourceType} resources`);
      } finally {
        setLoading(false);
      }
    }
    
    fetchResources();
  }, [resourceType, supabase]);
  
  // Add new resource
  const addResource = async (resource: Omit<CommunityResource | DiscordServer, 'id' | 'created_at' | 'is_verified' | 'last_verified'>) => {
    try {
      const tableName = getTableName(resourceType);
      const { data, error } = await supabase
        .from(tableName)
        .insert({
          ...resource,
          is_verified: false
        })
        .select();
        
      if (error) throw error;
      
      // Update local state
      setResources(prev => [...prev, data[0]]);
      setStats(prev => ({ ...prev, total: prev.total + 1 }));
      
      return { success: true, data: data[0] };
    } catch (err) {
      console.error(`Error adding ${resourceType} resource:`, err);
      return { success: false, error: `Failed to add ${resourceType} resource` };
    }
  };
  
  // Update resource
  const updateResource = async (id: string, updates: Partial<CommunityResource | DiscordServer>) => {
    try {
      const tableName = getTableName(resourceType);
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select();
        
      if (error) throw error;
      
      // Update local state
      setResources(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
      
      // Update stats if verification status changed
      if ('is_verified' in updates) {
        setStats(prev => ({
          ...prev,
          verified: updates.is_verified 
            ? prev.verified + 1 
            : prev.verified - 1
        }));
      }
      
      return { success: true, data: data[0] };
    } catch (err) {
      console.error(`Error updating ${resourceType} resource:`, err);
      return { success: false, error: `Failed to update ${resourceType} resource` };
    }
  };
  
  // Delete resource
  const deleteResource = async (id: string) => {
    try {
      const tableName = getTableName(resourceType);
      const resourceToDelete = resources.find(r => r.id === id);
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      // Update local state
      setResources(prev => prev.filter(item => item.id !== id));
      
      // Update stats
      setStats(prev => ({
        total: prev.total - 1,
        verified: resourceToDelete?.is_verified ? prev.verified - 1 : prev.verified
      }));
      
      return { success: true };
    } catch (err) {
      console.error(`Error deleting ${resourceType} resource:`, err);
      return { success: false, error: `Failed to delete ${resourceType} resource` };
    }
  };
  
  // Verify resource link
  const verifyResourceLink = async (id: string, url: string) => {
    try {
      // Call API to verify link
      const apiKey = process.env.NEXT_PUBLIC_LINK_VERIFICATION_API_KEY;
      const response = await fetch(`/api/resources/verify-link?url=${encodeURIComponent(url)}&key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error(`Verification failed with status: ${response.status}`);
      }
      
      const { isValid } = await response.json();
      
      // Update the resource with verification result
      const tableName = getTableName(resourceType);
      const { data, error } = await supabase
        .from(tableName)
        .update({ 
          is_verified: isValid,
          last_verified: new Date().toISOString()
        })
        .eq('id', id)
        .select();
        
      if (error) throw error;
      
      // Update local state
      const resourceToUpdate = resources.find(r => r.id === id);
      const wasVerified = resourceToUpdate?.is_verified || false;
      
      setResources(prev => prev.map(item => 
        item.id === id 
          ? { ...item, is_verified: isValid, last_verified: new Date().toISOString() } 
          : item
      ));
      
      // Update stats if verification status changed
      if (wasVerified !== isValid) {
        setStats(prev => ({
          ...prev,
          verified: isValid ? prev.verified + 1 : prev.verified - 1
        }));
      }
      
      return { success: true, isValid, data: data[0] };
    } catch (err) {
      console.error(`Error verifying ${resourceType} resource:`, err);
      return { success: false, error: `Failed to verify ${resourceType} resource` };
    }
  };
  
  return {
    resources,
    loading,
    error,
    stats,
    addResource,
    updateResource,
    deleteResource,
    verifyResourceLink
  };
} 