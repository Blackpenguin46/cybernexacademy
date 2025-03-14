"use client";

import { useState } from 'react';

export default function AnnouncementsPage() {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [preheader, setPreheader] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/admin/send-announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ subject, content, preheader })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send announcement');
      }
      
      setResult(data);
    } catch (err: any) {
      console.error('Error sending announcement:', err);
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500">CyberNex Academy - Admin</h1>
          <p className="text-gray-400">Send announcements to your waitlist subscribers</p>
        </header>

        <div className="bg-gray-800 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-1">Admin API Key</label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Email Subject</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="preheader" className="block text-sm font-medium text-gray-300 mb-1">Preheader (optional)</label>
              <input
                type="text"
                id="preheader"
                value={preheader}
                onChange={(e) => setPreheader(e.target.value)}
                placeholder="Brief summary that appears in email clients"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">Email Content (HTML)</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="<p>Your announcement content here...</p>"
                required
              ></textarea>
              <p className="text-xs text-gray-400 mt-1">You can use HTML tags for formatting.</p>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Announcement'}
              </button>
            </div>
          </form>
        </div>
        
        {error && (
          <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
            <h3 className="text-red-400 font-medium">Error</h3>
            <p className="text-white">{error}</p>
          </div>
        )}
        
        {result && (
          <div className="mt-6 p-4 bg-green-900/50 border border-green-700 rounded-lg">
            <h3 className="text-green-400 font-medium">Announcement Sent</h3>
            <p className="text-white mb-2">{result.message}</p>
            <p className="text-gray-300">Total: {result.total}, Success: {result.success}, Failed: {result.failed}</p>
            
            {result.failed > 0 && (
              <div className="mt-4">
                <h4 className="text-yellow-400 font-medium">Failed Deliveries</h4>
                <ul className="mt-2 text-sm text-gray-300">
                  {result.results?.filter((r: any) => !r.success).map((r: any, i: number) => (
                    <li key={i} className="mb-1">
                      {r.email}: {r.error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 