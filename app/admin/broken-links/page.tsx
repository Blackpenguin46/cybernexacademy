"use client"; // Use client component initially to integrate with AdminAuthGuard easily

import { useState, useEffect } from 'react';
import AdminAuthGuard from '../components/AdminAuthGuard';
import { supabase } from '@/lib/supabase'; // Corrected import path
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"; // Import the hook
import { Trash2 } from 'lucide-react';
// We will create this server action later
import { deleteBrokenLink } from './actions'; // Import the server action

interface BrokenLink {
  id: string;
  url: string;
  last_status_code: number | null;
  last_error_message: string | null;
  last_checked_at: string | null;
}

function BrokenLinksPageContent() {
  const [brokenLinks, setBrokenLinks] = useState<BrokenLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast(); // Get toast function from the hook
  const [deletingId, setDeletingId] = useState<string | null>(null); // State to track deleting item

  useEffect(() => {
    async function fetchBrokenLinks() {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('monitored_links')
          .select('*')
          .eq('status', 'BROKEN')
          .order('last_checked_at', { ascending: false });

        if (fetchError) {
          throw fetchError;
        }
        setBrokenLinks(data || []);
      } catch (err: any) {
        console.error("Error fetching broken links:", err);
        setError(err.message || 'Failed to fetch broken links.');
        toast({ // Use the toast function from the hook
          title: "Error",
          description: `Failed to load broken links: ${err.message}`,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchBrokenLinks();
  // }, [supabase, toast]); // Add toast to dependency array
  }, [toast]); // supabase client from lib/supabase might be stable 

  const handleDelete = async (linkId: string) => {
    setDeletingId(linkId); // Set deleting state for UI feedback
    try {
      await deleteBrokenLink(linkId); // Call the server action
      // Update UI immediately on success
      setBrokenLinks(prev => prev.filter(link => link.id !== linkId));
      toast({ title: "Success", description: "Link deleted." });
    } catch (err: any) {
      console.error("Error deleting link:", err);
      toast({ title: "Error", description: `Failed to delete link: ${err.message}` });
    } finally {
      setDeletingId(null); // Clear deleting state
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading broken links...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Review Broken Links</h1>
      
      {brokenLinks.length === 0 ? (
        <p>No broken links found.</p>
      ) : (
        <ul className="space-y-4">
          {brokenLinks.map((link) => (
            <li key={link.id} className={`border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-800/50 transition-opacity ${deletingId === link.id ? 'opacity-50' : 'opacity-100'}`}>
              <div className="flex-grow overflow-hidden">
                <p className="font-semibold truncate text-lg text-red-400">{link.url}</p>
                <p className="text-sm text-gray-400">
                  Status: {link.last_status_code ?? 'N/A'} | 
                  Last Checked: {link.last_checked_at ? new Date(link.last_checked_at).toLocaleString() : 'Never'}
                </p>
                {link.last_error_message && (
                  <p className="text-xs text-gray-500 mt-1 italic truncate" title={link.last_error_message}>
                    Error: {link.last_error_message}
                  </p>
                )}
              </div>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => handleDelete(link.id)}
                aria-label={`Delete link ${link.url}`}
                disabled={deletingId === link.id} // Disable button while deleting
              >
                {deletingId === link.id ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </>
                )}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Wrap the main content with the AdminAuthGuard
export default function BrokenLinksAdminPage() {
  return (
    <AdminAuthGuard>
      <BrokenLinksPageContent />
    </AdminAuthGuard>
  );
} 