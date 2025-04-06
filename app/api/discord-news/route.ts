import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Remove Edge Runtime since it's causing DNS resolution issues
// export const runtime = 'edge';

// Explicitly force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Define fallback messages in case the API fails
const fallbackArticles = [
  {
    id: '1',
    content: '[SECURITY ALERT] Microsoft has released patches for 147 vulnerabilities in their April 2024 Patch Tuesday update, including 5 actively exploited zero-days. https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html',
    author: 'SecurityBot',
    timestamp: '2024-04-09T16:30:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/microsoft-april-2024-patch-tuesday.html']
  },
  {
    id: '2',
    content: '[THREAT INTEL] New LockBit ransomware variant detected with enhanced evasion capabilities. Researchers warn of increased targeting of healthcare and financial sectors. https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html',
    author: 'SecurityBot',
    timestamp: '2024-04-10T14:15:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/new-lockbit-30-ransomware-variant.html']
  },
  {
    id: '3',
    content: '[VULNERABILITY] Critical Adobe Acrobat zero-day vulnerability (CVE-2024-21412) being actively exploited. Update immediately! https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html',
    author: 'SecurityBot',
    timestamp: '2024-04-11T09:45:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/2024/04/critical-adobe-acrobat-zero-day-under.html']
  }
];

// New simulated database items to make the UI more interesting
const mockDatabaseArticles = [
  {
    id: 'db1',
    content: '[BREAKING] Security researchers discover critical vulnerability in popular IoT devices affecting over 2 million homes. Manufacturers rushing to deploy patches. https://example.com/iot-vulnerability',
    author: 'ThreatAlert',
    timestamp: new Date().toISOString(), // Current time
    attachments: [],
    urls: ['https://example.com/iot-vulnerability']
  },
  {
    id: 'db2',
    content: '[RANSOMWARE] Major hospital chain hit with sophisticated ransomware attack affecting patient systems across 12 states. FBI investigating. https://example.com/hospital-attack',
    author: 'CyberNewsBot',
    timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    attachments: [],
    urls: ['https://example.com/hospital-attack']
  },
  {
    id: 'db3',
    content: '[ADVISORY] CISA issues emergency directive for federal agencies to patch Exchange Server vulnerabilities being actively exploited. Patch within 48 hours. https://example.com/cisa-directive',
    author: 'SecurityFeed',
    timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    attachments: [],
    urls: ['https://example.com/cisa-directive']
  },
  {
    id: 'db4',
    content: '[PHISHING] Sophisticated phishing campaign targeting financial institutions detected. Uses lookalike domains and stolen certificates. Check your security controls. https://example.com/finance-phishing',
    author: 'PhishDetector',
    timestamp: new Date(Date.now() - 10800000).toISOString(), // 3 hours ago
    attachments: [],
    urls: ['https://example.com/finance-phishing']
  },
  {
    id: 'db5',
    content: '[MALWARE] New Android malware steals banking credentials and bypasses 2FA via SMS interception. Over 30,000 devices infected so far. https://example.com/android-malware',
    author: 'MalwareHunter',
    timestamp: new Date(Date.now() - 14400000).toISOString(), // 4 hours ago
    attachments: [],
    urls: ['https://example.com/android-malware']
  }
];

// Check if we're in a Vercel environment
const isVercelEnv = process.env.VERCEL === '1' || process.env.VERCEL_ENV !== undefined;

// Custom console log that includes environment info
function logWithEnv(message: string, ...args: any[]) {
  console.log(`[API:${isVercelEnv ? 'Vercel' : 'Local'}] ${message}`, ...args);
}

export async function GET() {
  logWithEnv('Discord news API route called');
  
  // Due to persistent connectivity issues with Supabase from Vercel
  // we're returning simulated "database" entries that would typically
  // come from Supabase
  
  logWithEnv('Returning simulated database entries due to connectivity issues');
  
  return NextResponse.json(
    { 
      articles: mockDatabaseArticles, 
      source: 'simulated_database', 
      message: 'Retrieved from simulated database due to Vercel-Supabase connectivity issues',
      time: new Date().toISOString(),
      env: isVercelEnv ? 'vercel' : 'local',
      note: 'Supabase connectivity from Vercel encountering DNS resolution issues (error 1016)'
    }, 
    { status: 200 }
  );
} 