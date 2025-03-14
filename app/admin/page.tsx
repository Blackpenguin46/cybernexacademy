'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">CyberNex Academy Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Launch Notification Card */}
          <Link href="/admin/launch-notification" className="block">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-semibold mb-2">Launch Notification</h2>
              <p className="text-gray-400">Send launch notifications to all waitlist subscribers</p>
            </div>
          </Link>

          {/* Announcements Card */}
          <Link href="/admin/announcements" className="block">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-semibold mb-2">Announcements</h2>
              <p className="text-gray-400">Manage and send announcements to subscribers</p>
            </div>
          </Link>

          {/* Waitlist Management Card */}
          <Link href="/admin/waitlist" className="block">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-semibold mb-2">Waitlist Management</h2>
              <p className="text-gray-400">View and manage waitlist subscribers</p>
            </div>
          </Link>

          {/* Email Templates Card */}
          <Link href="/admin/email-templates" className="block">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-xl font-semibold mb-2">Email Templates</h2>
              <p className="text-gray-400">Manage email templates and content</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 