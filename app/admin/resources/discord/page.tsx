"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, Plus, ExternalLink, Check, X, Edit, Trash2, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import AdminAuthGuard from '@/app/admin/components/AdminAuthGuard';

// Discord server type definition
interface DiscordServer {
  id: string;
  name: string;
  description: string;
  invite_link: string;
  member_count: number | null;
  is_verified: boolean;
  last_verified: string | null;
  created_at: string;
}

// Server form type
interface ServerForm {
  name: string;
  description: string;
  invite_link: string;
  member_count: number | null;
}

export default function DiscordResourcesPage() {
  const router = useRouter();
  const [servers, setServers] = useState<DiscordServer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentServer, setCurrentServer] = useState<DiscordServer | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [verifyingId, setVerifyingId] = useState<string | null>(null);
  
  // Form state
  const [form, setForm] = useState<ServerForm>({
    name: '',
    description: '',
    invite_link: '',
    member_count: null
  });

  // Load servers on mount
  useEffect(() => {
    fetchServers();
  }, []);

  // Fetch servers from database
  async function fetchServers() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('discord_servers')
        .select('*')
        .order('name');
        
      if (error) throw error;
      setServers(data || []);
    } catch (error) {
      console.error('Error fetching servers:', error);
      toast({
        title: 'Error',
        description: 'Failed to load Discord servers',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }

  // Open dialog for adding new server
  function openAddDialog() {
    setForm({
      name: '',
      description: '',
      invite_link: '',
      member_count: null
    });
    setIsEditing(false);
    setDialogOpen(true);
  }

  // Open dialog for editing server
  function openEditDialog(server: DiscordServer) {
    setForm({
      name: server.name,
      description: server.description,
      invite_link: server.invite_link,
      member_count: server.member_count
    });
    setCurrentServer(server);
    setIsEditing(true);
    setDialogOpen(true);
  }

  // Open delete confirmation dialog
  function openDeleteDialog(server: DiscordServer) {
    setCurrentServer(server);
    setDeleteDialogOpen(true);
  }

  // Handle form input changes
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'member_count' ? (value ? parseInt(value) : null) : value
    }));
  }

  // Save server (create or update)
  async function handleSaveServer() {
    try {
      if (isEditing && currentServer) {
        // Update existing server
        const { error } = await supabase
          .from('discord_servers')
          .update({
            name: form.name,
            description: form.description,
            invite_link: form.invite_link,
            member_count: form.member_count
          })
          .eq('id', currentServer.id);
          
        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Discord server updated successfully',
        });
      } else {
        // Create new server
        const { error } = await supabase
          .from('discord_servers')
          .insert({
            name: form.name,
            description: form.description,
            invite_link: form.invite_link,
            member_count: form.member_count,
            is_verified: false
          });
          
        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Discord server added successfully',
        });
      }
      
      // Close dialog and refresh data
      setDialogOpen(false);
      fetchServers();
    } catch (error) {
      console.error('Error saving server:', error);
      toast({
        title: 'Error',
        description: 'Failed to save Discord server',
        variant: 'destructive'
      });
    }
  }

  // Delete server
  async function handleDeleteServer() {
    if (!currentServer) return;
    
    try {
      const { error } = await supabase
        .from('discord_servers')
        .delete()
        .eq('id', currentServer.id);
        
      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Discord server deleted successfully',
      });
      
      // Close dialog and refresh data
      setDeleteDialogOpen(false);
      fetchServers();
    } catch (error) {
      console.error('Error deleting server:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete Discord server',
        variant: 'destructive'
      });
    }
  }

  // Verify a single server link
  async function verifyServerLink(server: DiscordServer) {
    setVerifyingId(server.id);
    try {
      // Call the API to verify the link
      const apiKey = process.env.NEXT_PUBLIC_LINK_VERIFICATION_API_KEY;
      const response = await fetch(`/api/resources/verify-link?url=${encodeURIComponent(server.invite_link)}&key=${apiKey}`);
      
      if (!response.ok) {
        throw new Error(`Verification failed with status: ${response.status}`);
      }
      
      const { isValid } = await response.json();
      
      // Update the server verification status
      const { error } = await supabase
        .from('discord_servers')
        .update({ 
          is_verified: isValid,
          last_verified: new Date().toISOString()
        })
        .eq('id', server.id);
        
      if (error) throw error;
      
      // Refresh the data
      fetchServers();
      
      toast({
        title: isValid ? 'Link Valid' : 'Link Invalid',
        description: isValid 
          ? 'The Discord invite link is valid.' 
          : 'The Discord invite link could not be verified.',
        variant: isValid ? 'default' : 'destructive'
      });
    } catch (error) {
      console.error('Error verifying link:', error);
      toast({
        title: 'Error',
        description: 'Failed to verify Discord invite link',
        variant: 'destructive'
      });
    } finally {
      setVerifyingId(null);
    }
  }

  return (
    <AdminAuthGuard>
      <div className="container mx-auto py-12">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-indigo-500" />
              Discord Servers
            </h1>
            <p className="text-gray-500">
              Manage Discord server resources
            </p>
          </div>
          <Button onClick={openAddDialog} className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Server
          </Button>
        </header>
        
        {loading ? (
          <div className="flex justify-center my-20">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        ) : servers.length === 0 ? (
          <div className="text-center py-10 bg-gray-800 rounded-lg">
            <MessageSquare className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No Discord Servers</h3>
            <p className="text-gray-500 mb-6">
              There are no Discord servers in the database yet.
            </p>
            <Button onClick={openAddDialog} className="flex items-center mx-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Server
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {servers.map(server => (
              <div key={server.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-medium mr-3">{server.name}</h3>
                      {server.is_verified ? (
                        <Badge className="bg-green-600">
                          <Check className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <X className="w-3 h-3 mr-1" />
                          Unverified
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {server.member_count ? `${server.member_count.toLocaleString()} members · ` : ''}
                      {server.last_verified ? `Last verified: ${new Date(server.last_verified).toLocaleDateString()}` : 'Not verified yet'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8"
                      onClick={() => verifyServerLink(server)}
                      disabled={verifyingId === server.id}
                    >
                      <RefreshCw className={`w-4 h-4 mr-1 ${verifyingId === server.id ? 'animate-spin' : ''}`} />
                      Verify
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8"
                      onClick={() => openEditDialog(server)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8 text-red-500 border-red-500/30 hover:bg-red-950/20"
                      onClick={() => openDeleteDialog(server)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{server.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={server.invite_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center text-sm"
                  >
                    {server.invite_link}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Edit Discord Server' : 'Add Discord Server'}</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. Cybersecurity Professionals"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="invite_link" className="text-right">
                Invite Link
              </Label>
              <Input
                id="invite_link"
                name="invite_link"
                value={form.invite_link}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. https://discord.gg/example"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="member_count" className="text-right">
                Member Count
              </Label>
              <Input
                id="member_count"
                name="member_count"
                type="number"
                value={form.member_count || ''}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="e.g. 1000"
              />
            </div>
            
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right pt-2">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Briefly describe what this Discord server is about..."
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveServer}>
              {isEditing ? 'Update Server' : 'Add Server'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the Discord server "{currentServer?.name}" from the database.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteServer} className="bg-red-600 hover:bg-red-700">
              Delete Server
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminAuthGuard>
  );
} 