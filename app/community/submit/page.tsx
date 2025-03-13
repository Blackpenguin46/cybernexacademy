"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, User, Shield, Send, AlertTriangle } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/use-toast';

export default function SubmitResourcePage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [activeTab, setActiveTab] = useState('discord');
  const [submitting, setSubmitting] = useState(false);
  
  // Discord form state
  const [discordForm, setDiscordForm] = useState({
    name: '',
    description: '',
    invite_link: '',
    member_count: ''
  });
  
  // Reddit form state
  const [redditForm, setRedditForm] = useState({
    name: '',
    description: '',
    url: '',
    member_count: ''
  });
  
  // Skool form state
  const [skoolForm, setSkoolForm] = useState({
    name: '',
    description: '',
    url: '',
    member_count: ''
  });
  
  // Discord form handlers
  const handleDiscordChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDiscordForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Reddit form handlers
  const handleRedditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRedditForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Skool form handlers
  const handleSkoolChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSkoolForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Submit Discord server
  const submitDiscordServer = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Save form data to localStorage and redirect to login
        localStorage.setItem('pendingResourceSubmission', JSON.stringify({
          type: 'discord',
          data: discordForm
        }));
        
        router.push('/auth/login?redirect=/community/submit');
        return;
      }
      
      // Validate form
      if (!discordForm.name || !discordForm.invite_link) {
        toast({
          title: 'Missing required fields',
          description: 'Please fill out all required fields',
          type: 'error'
        });
        return;
      }
      
      // Format data
      const memberCount = discordForm.member_count ? parseInt(discordForm.member_count) : null;
      
      // Submit to database
      const { error } = await supabase
        .from('discord_servers')
        .insert({
          name: discordForm.name,
          description: discordForm.description,
          invite_link: discordForm.invite_link,
          member_count: memberCount,
          is_verified: false
        });
        
      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Discord server submitted successfully. It will be reviewed by our team.',
        type: 'success'
      });
      
      // Reset form
      setDiscordForm({
        name: '',
        description: '',
        invite_link: '',
        member_count: ''
      });
      
    } catch (error) {
      setSubmitting(false);
      console.error('Error submitting Discord server:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your Discord server. Please try again.',
        type: 'error'
      });
    }
  };
  
  // Submit Reddit community
  const submitRedditCommunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Save form data to localStorage and redirect to login
        localStorage.setItem('pendingResourceSubmission', JSON.stringify({
          type: 'reddit',
          data: redditForm
        }));
        
        router.push('/auth/login?redirect=/community/submit');
        return;
      }
      
      // Validate form
      if (!redditForm.name || !redditForm.url) {
        toast({
          title: 'Missing required fields',
          description: 'Please fill out all required fields',
          type: 'error'
        });
        return;
      }
      
      // Format data
      const memberCount = redditForm.member_count ? parseInt(redditForm.member_count) : null;
      
      // Submit to database
      const { error } = await supabase
        .from('reddit_communities')
        .insert({
          name: redditForm.name,
          description: redditForm.description,
          url: redditForm.url,
          member_count: memberCount,
          is_verified: false
        });
        
      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Reddit community submitted successfully. It will be reviewed by our team.',
        type: 'success'
      });
      
      // Reset form
      setRedditForm({
        name: '',
        description: '',
        url: '',
        member_count: ''
      });
      
    } catch (error) {
      setSubmitting(false);
      console.error('Error submitting Reddit community:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your Reddit community. Please try again.',
        type: 'error'
      });
    }
  };
  
  // Submit Skool community
  const submitSkoolCommunity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Save form data to localStorage and redirect to login
        localStorage.setItem('pendingResourceSubmission', JSON.stringify({
          type: 'skool',
          data: skoolForm
        }));
        
        router.push('/auth/login?redirect=/community/submit');
        return;
      }
      
      // Validate form
      if (!skoolForm.name || !skoolForm.url) {
        toast({
          title: 'Missing required fields',
          description: 'Please fill out all required fields',
          type: 'error'
        });
        return;
      }
      
      // Format data
      const memberCount = skoolForm.member_count ? parseInt(skoolForm.member_count) : null;
      
      // Submit to database
      const { error } = await supabase
        .from('skool_communities')
        .insert({
          name: skoolForm.name,
          description: skoolForm.description,
          url: skoolForm.url,
          member_count: memberCount,
          is_verified: false
        });
        
      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Skool community submitted successfully. It will be reviewed by our team.',
        type: 'success'
      });
      
      // Reset form
      setSkoolForm({
        name: '',
        description: '',
        url: '',
        member_count: ''
      });
      
    } catch (error) {
      setSubmitting(false);
      console.error('Error submitting Skool community:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your Skool community. Please try again.',
        type: 'error'
      });
    }
  };
  
  // Restore form data after login redirect
  useState(() => {
    if (typeof window === 'undefined') return;
    
    const pendingSubmission = localStorage.getItem('pendingResourceSubmission');
    if (!pendingSubmission) return;
    
    try {
      const { type, data } = JSON.parse(pendingSubmission);
      
      if (type === 'discord') {
        setDiscordForm(data);
        setActiveTab('discord');
      } else if (type === 'reddit') {
        setRedditForm(data);
        setActiveTab('reddit');
      } else if (type === 'skool') {
        setSkoolForm(data);
        setActiveTab('skool');
      }
      
      // Clear stored submission
      localStorage.removeItem('pendingResourceSubmission');
    } catch (error) {
      console.error('Error restoring form data:', error);
    }
  });
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <Badge className="bg-blue-800 hover:bg-blue-700 mb-4 flex items-center w-fit">
            <Send className="w-3 h-3 mr-1" />
            Submit Resource
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Suggest a Community Resource
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Know a great cybersecurity community that should be featured? Submit it here for review.
          </p>
        </div>
      </section>
      
      {/* Submission Form */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="discord" className="flex items-center data-[state=active]:bg-indigo-900/30">
                  <MessageSquare className="w-4 h-4 mr-2 text-indigo-500" />
                  Discord Server
                </TabsTrigger>
                <TabsTrigger value="reddit" className="flex items-center data-[state=active]:bg-orange-900/30">
                  <User className="w-4 h-4 mr-2 text-orange-500" />
                  Reddit Community
                </TabsTrigger>
                <TabsTrigger value="skool" className="flex items-center data-[state=active]:bg-purple-900/30">
                  <Shield className="w-4 h-4 mr-2 text-purple-500" />
                  Skool Forum
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="discord">
                <form onSubmit={submitDiscordServer} className="space-y-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="discord-name">
                        Server Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="discord-name"
                        name="name"
                        value={discordForm.name}
                        onChange={handleDiscordChange}
                        placeholder="e.g. Cybersecurity Professionals"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="discord-invite">
                        Invite Link <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="discord-invite"
                        name="invite_link"
                        value={discordForm.invite_link}
                        onChange={handleDiscordChange}
                        placeholder="e.g. https://discord.gg/example"
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Please provide a permanent invite link
                      </p>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="discord-members">
                        Member Count (approximate)
                      </Label>
                      <Input
                        id="discord-members"
                        name="member_count"
                        type="number"
                        value={discordForm.member_count}
                        onChange={handleDiscordChange}
                        placeholder="e.g. 1000"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="discord-description">
                        Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="discord-description"
                        name="description"
                        value={discordForm.description}
                        onChange={handleDiscordChange}
                        placeholder="Briefly describe what this Discord server is about..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-500 bg-amber-950/30 p-4 rounded-md mb-6">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      All submissions are reviewed before being published. Please ensure the resource is relevant to cybersecurity.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Discord Server'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="reddit">
                <form onSubmit={submitRedditCommunity} className="space-y-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="reddit-name">
                        Community Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="reddit-name"
                        name="name"
                        value={redditForm.name}
                        onChange={handleRedditChange}
                        placeholder="e.g. r/cybersecurity"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="reddit-url">
                        URL <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="reddit-url"
                        name="url"
                        value={redditForm.url}
                        onChange={handleRedditChange}
                        placeholder="e.g. https://www.reddit.com/r/cybersecurity/"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="reddit-members">
                        Member Count (approximate)
                      </Label>
                      <Input
                        id="reddit-members"
                        name="member_count"
                        type="number"
                        value={redditForm.member_count}
                        onChange={handleRedditChange}
                        placeholder="e.g. 100000"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="reddit-description">
                        Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="reddit-description"
                        name="description"
                        value={redditForm.description}
                        onChange={handleRedditChange}
                        placeholder="Briefly describe what this Reddit community is about..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-500 bg-amber-950/30 p-4 rounded-md mb-6">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      All submissions are reviewed before being published. Please ensure the resource is relevant to cybersecurity.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Reddit Community'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="skool">
                <form onSubmit={submitSkoolCommunity} className="space-y-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="skool-name">
                        Community Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="skool-name"
                        name="name"
                        value={skoolForm.name}
                        onChange={handleSkoolChange}
                        placeholder="e.g. Cybersecurity Professionals"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="skool-url">
                        URL <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="skool-url"
                        name="url"
                        value={skoolForm.url}
                        onChange={handleSkoolChange}
                        placeholder="e.g. https://www.skool.com/cybersecurity"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="skool-members">
                        Member Count (approximate)
                      </Label>
                      <Input
                        id="skool-members"
                        name="member_count"
                        type="number"
                        value={skoolForm.member_count}
                        onChange={handleSkoolChange}
                        placeholder="e.g. 5000"
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="skool-description">
                        Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="skool-description"
                        name="description"
                        value={skoolForm.description}
                        onChange={handleSkoolChange}
                        placeholder="Briefly describe what this Skool forum is about..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-500 bg-amber-950/30 p-4 rounded-md mb-6">
                    <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <p className="text-sm">
                      All submissions are reviewed before being published. Please ensure the resource is relevant to cybersecurity.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Skool Forum'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
} 