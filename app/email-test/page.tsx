'use client';

import { useState } from 'react';

export default function EmailTestPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [emailType, setEmailType] = useState('single');

  const testEmail = async () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, type: emailType }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: 'Failed to send test email' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Email Test Tool</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email Type:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="emailType"
                checked={emailType === 'single'}
                onChange={() => setEmailType('single')}
                className="mr-2"
              />
              Single Recipient
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="emailType"
                checked={emailType === 'broadcast'}
                onChange={() => setEmailType('broadcast')}
                className="mr-2"
              />
              Broadcast
            </label>
          </div>
        </div>
        
        <button
          onClick={testEmail}
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Sending...' : 'Send Test Email'}
        </button>
      </div>
      
      {result && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-lg font-medium mb-2">Result:</h2>
          <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 