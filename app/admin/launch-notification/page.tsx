"use client";

import { useState } from 'react';

export default function LaunchNotificationPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [results, setResults] = useState<{
    total: number;
    successful: number;
    failed: number;
    errors: string[];
  } | null>(null);

  const handleSendNotification = async () => {
    setStatus('loading');
    setMessage('');
    setResults(null);

    try {
      const response = await fetch('/api/admin/send-launch-notification', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_API_KEY}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send launch notification');
      }

      setStatus('success');
      setMessage('Launch notification sent successfully!');
      setResults(data);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to send launch notification');
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--dark-bg))] text-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 neon-text cyber-font">
            Send Launch Notification
          </h1>
          <p className="text-gray-400">
            Send a launch notification to all active waitlist subscribers.
          </p>
        </div>

        <div className="terminal-box p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-[rgb(var(--secondary))]">
                  Launch Notification
                </h2>
                <p className="text-gray-400">
                  This will send a launch notification to all active subscribers.
                </p>
              </div>
              <button
                onClick={handleSendNotification}
                disabled={status === 'loading'}
                className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Notification'}
              </button>
            </div>

            {message && (
              <div className={`p-4 rounded-md ${
                status === 'success' 
                  ? 'bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.3)]' 
                  : 'bg-[rgba(var(--accent),0.1)] border border-[rgba(var(--accent),0.3)]'
              }`}>
                <p className={status === 'success' ? 'text-[rgb(var(--primary))]' : 'text-[rgb(var(--accent))]'}>
                  {message}
                </p>
              </div>
            )}

            {results && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-[rgb(var(--secondary))]">Results</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[rgba(var(--dark-surface),0.5)] rounded-md">
                    <p className="text-sm text-gray-400">Total</p>
                    <p className="text-xl font-bold">{results.total}</p>
                  </div>
                  <div className="p-4 bg-[rgba(var(--primary),0.1)] rounded-md">
                    <p className="text-sm text-[rgb(var(--primary))]">Successful</p>
                    <p className="text-xl font-bold text-[rgb(var(--primary))]">{results.successful}</p>
                  </div>
                  <div className="p-4 bg-[rgba(var(--accent),0.1)] rounded-md">
                    <p className="text-sm text-[rgb(var(--accent))]">Failed</p>
                    <p className="text-xl font-bold text-[rgb(var(--accent))]">{results.failed}</p>
                  </div>
                </div>

                {results.errors.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[rgb(var(--accent))] mb-2">Errors</h4>
                    <ul className="space-y-2">
                      {results.errors.map((error, index) => (
                        <li key={index} className="text-sm text-gray-400">{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 