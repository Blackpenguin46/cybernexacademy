"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, User, MessageSquare, ExternalLink, AlertTriangle, Check, BarChart4, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import AdminAuthGuard from '@/app/admin/components/AdminAuthGuard';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    discord: { total: 0, verified: 0 },
    reddit: { total: 0, verified: 0 },
    skool: { total: 0, verified: 0 },
  });
  const [loading, setLoading] = useState(true);
  const [lastVerificationRun, setLastVerificationRun] = useState<string | null>(null);
  const [runningVerification, setRunningVerification] = useState(false);

  // Fetch stats when component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    setLoading(true);
    try {
      // Get Discord stats
      const { data: discordData, error: discordError } = await supabase
        .from('discord_servers')
        .select('id, is_verified');
        
      if (discordError) throw discordError;
      
      // Get Reddit stats
      const { data: redditData, error: redditError } = await supabase
        .from('reddit_communities')
        .select('id, is_verified');
        
      if (redditError) throw redditError;
      
      // Get Skool stats
      const { data: skoolData, error: skoolError } = await supabase
        .from('skool_communities')
        .select('id, is_verified');
        
      if (skoolError) throw skoolError;
      
      // Get last verification run
      const { data: verificationData, error: verificationError } = await supabase
        .from('link_verification_log')
        .select('verified_at')
        .order('verified_at', { ascending: false })
        .limit(1);
        
      if (verificationError) throw verificationError;
      
      // Update stats
      setStats({
        discord: {
          total: discordData?.length || 0,
          verified: discordData?.filter(item => item.is_verified)?.length || 0
        },
        reddit: {
          total: redditData?.length || 0,
          verified: redditData?.filter(item => item.is_verified)?.length || 0
        },
        skool: {
          total: skoolData?.length || 0,
          verified: skoolData?.filter(item => item.is_verified)?.length || 0
        },
      });
      
      // Set last verification run time
      if (verificationData && verificationData.length > 0) {
        setLastVerificationRun(verificationData[0].verified_at);
      }
      
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  }

  async function runLinkVerification() {
    setRunningVerification(true);
    try {
      // Make a request to the verification API endpoint
      const apiKey = process.env.NEXT_PUBLIC_LINK_VERIFICATION_API_KEY;
      const response = await fetch(`/api/cron/verify-links?key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error(`Verification failed with status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Verification result:', result);
      
      // Refresh stats after verification
      fetchStats();
      
    } catch (error) {
      console.error('Error running verification:', error);
      alert('Failed to run verification. See console for details.');
    } finally {
      setRunningVerification(false);
    }
  }

  return (
    <AdminAuthGuard>
      <div className="container mx-auto py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Resource Management Dashboard</h1>
          <p className="text-gray-500">
            Manage community resources and verify links
          </p>
        </header>
        
        {/* Stats Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <BarChart4 className="w-5 h-5 mr-2" />
            Resource Stats
          </h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-indigo-500" />
                    Discord Servers
                  </h3>
                  <Link href="/admin/resources/discord" className="text-sm text-blue-500 hover:underline">
                    Manage
                  </Link>
                </div>
                <div className="text-3xl font-bold mb-4">{stats.discord.total}</div>
                <div className="flex items-center text-sm">
                  <div className={`mr-2 ${stats.discord.verified === stats.discord.total ? 'text-green-500' : 'text-yellow-500'}`}>
                    {stats.discord.verified} verified
                  </div>
                  <div className="text-gray-500">
                    ({Math.round((stats.discord.verified / (stats.discord.total || 1)) * 100)}%)
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-500" />
                    Reddit Communities
                  </h3>
                  <Link href="/admin/resources/reddit" className="text-sm text-blue-500 hover:underline">
                    Manage
                  </Link>
                </div>
                <div className="text-3xl font-bold mb-4">{stats.reddit.total}</div>
                <div className="flex items-center text-sm">
                  <div className={`mr-2 ${stats.reddit.verified === stats.reddit.total ? 'text-green-500' : 'text-yellow-500'}`}>
                    {stats.reddit.verified} verified
                  </div>
                  <div className="text-gray-500">
                    ({Math.round((stats.reddit.verified / (stats.reddit.total || 1)) * 100)}%)
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-purple-500" />
                    Skool Communities
                  </h3>
                  <Link href="/admin/resources/skool" className="text-sm text-blue-500 hover:underline">
                    Manage
                  </Link>
                </div>
                <div className="text-3xl font-bold mb-4">{stats.skool.total}</div>
                <div className="flex items-center text-sm">
                  <div className={`mr-2 ${stats.skool.verified === stats.skool.total ? 'text-green-500' : 'text-yellow-500'}`}>
                    {stats.skool.verified} verified
                  </div>
                  <div className="text-gray-500">
                    ({Math.round((stats.skool.verified / (stats.skool.total || 1)) * 100)}%)
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        
        {/* Actions */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={runLinkVerification} 
              disabled={runningVerification}
              className="flex items-center"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${runningVerification ? 'animate-spin' : ''}`} />
              {runningVerification ? 'Running Verification...' : 'Run Link Verification'}
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/admin/resources/new">
                Add New Resource
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/admin/verification-log">
                View Verification Log
              </Link>
            </Button>
          </div>
          
          {lastVerificationRun && (
            <div className="mt-4 text-sm text-gray-500">
              Last verification run: {new Date(lastVerificationRun).toLocaleString()}
            </div>
          )}
        </section>
        
        {/* Quick Links */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Resource Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/admin/resources/discord" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="font-medium flex items-center mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-indigo-500" />
                Manage Discord Servers
              </h3>
              <p className="text-sm text-gray-400">
                Add, edit, or remove Discord server resources.
              </p>
            </Link>
            
            <Link href="/admin/resources/reddit" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="font-medium flex items-center mb-2">
                <User className="w-5 h-5 mr-2 text-blue-500" />
                Manage Reddit Communities
              </h3>
              <p className="text-sm text-gray-400">
                Add, edit, or remove Reddit community resources.
              </p>
            </Link>
            
            <Link href="/admin/resources/skool" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="font-medium flex items-center mb-2">
                <Shield className="w-5 h-5 mr-2 text-purple-500" />
                Manage Skool Communities
              </h3>
              <p className="text-sm text-gray-400">
                Add, edit, or remove Skool community resources.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </AdminAuthGuard>
  );
} 