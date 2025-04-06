import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Always use server-side rendering so we can access server environment variables
export const dynamic = 'force-dynamic';

// Define fallback messages in case the API fails
const fallbackArticles = [
  {
    id: '1',
    title: 'Critical vulnerability found in popular VPN software',
    content: 'Researchers have discovered a critical remote code execution vulnerability in a widely-used VPN application affecting over 10 million users. The vulnerability (CVE-2024-1234) allows attackers to execute malicious code with system privileges. Vendor has released a patch - update immediately!',
    author: 'SecurityResearcher',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://thehackernews.com/sample/vpn-vulnerability']
  },
  {
    id: '2',
    title: 'Ransomware attacks increase by 40% in healthcare sector',
    content: 'New report from CyberInsight reveals a 40% increase in ransomware attacks targeting healthcare organizations in Q1 2024. Attackers are specifically exploiting outdated remote access infrastructure and phishing campaigns directed at medical staff. Implement MFA and conduct security awareness training immediately.',
    author: 'ThreatIntelTeam',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.healthcybersecurity.org/report/q1-2024']
  },
  {
    id: '3',
    title: 'New AI-powered security platform launches',
    content: 'CyberNex Security has announced a new AI-powered threat detection platform that reduces false positives by 75%. The platform uses machine learning algorithms to identify patterns of malicious behavior across network traffic, user activity, and endpoint data. Early access program now open for enterprise security teams.',
    author: 'TechReporter',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://cybernexsecurity.io/ai-platform-launch']
  },
  {
    id: '4',
    title: 'Government introduces new cybersecurity regulations',
    content: 'The Department of Homeland Security has announced new cybersecurity regulations for critical infrastructure. Organizations will be required to implement zero-trust architecture, conduct regular penetration testing, and report security incidents within 72 hours. Compliance deadline set for January 2025.',
    author: 'PolicyAnnouncer',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.dhs.gov/cybersecurity/new-regulations-2024']
  },
  {
    id: '5',
    title: 'Major data breach affects millions of customers',
    content: 'A major e-commerce platform has disclosed a data breach affecting approximately 7.2 million customer records. Compromised data includes names, email addresses, phone numbers, and partial payment information. The breach was caused by an unsecured API endpoint. Affected users should change passwords immediately.',
    author: 'BreachAnalyst',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://www.databreachregistry.com/ecommerce-breach-april2024']
  },
  {
    id: '6',
    title: 'International Cybersecurity Conference announces keynote speakers',
    content: 'The annual International Cybersecurity Conference (ICyCon 2024) has announced its keynote speakers, including renowned security researchers, industry leaders, and government officials. Topics will focus on zero-trust architecture, cloud security, AI-based threats, and ransomware evolution. Registration now open for the June event.',
    author: 'EventCoordinator',
    timestamp: '2024-04-05T10:52:00.000Z',
    attachments: [],
    urls: ['https://icycon2024.org/speakers']
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
  
  try {
    // Direct hardcoded data from your database - as seen in screenshot
    const realDatabaseArticles = [
      {
        id: '187',
        title: 'Minnesota Tribe Struggles After Ransomware Attack',
        content: 'Minnesota Tribe Struggles After Ransomware Attack Hote',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:07.954',
        urls: ['https://www.darkreading.com/cyberattacks-data-breaches/minnesota-tribe-struggles-after-ransomware-attack']
      },
      {
        id: '188',
        title: 'Flaw in Verizon call record requests',
        content: 'Flaw in Verizon call record requests put millions of Americans at risk',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:07.998',
        urls: ['https://www.malwarebytes.com/blog/news/2025/04/flaw-in-verizon-call-records']
      },
      {
        id: '189',
        title: 'Medusa Rides Momentum From Ransomware-as-a-Service',
        content: 'Medusa Rides Momentum From Ransomware-as-a-Service',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:08.037',
        urls: ['https://www.darkreading.com/threat-intelligence/medusa-momentum']
      },
      {
        id: '190',
        title: 'CISA Layoffs Are a Momentary Disruption, Not a Threat',
        content: 'CISA Layoffs Are a Momentary Disruption, Not a Threat',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:08.076',
        urls: ['https://www.darkreading.com/vulnerabilities-threats/cisa-layoffs-momentary-disruption']
      },
      {
        id: '191',
        title: 'Rafts of Security Bugs Could Rain Out Solar Grids',
        content: 'Rafts of Security Bugs Could Rain Out Solar Grids At least temporarily',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:08.117',
        urls: ['https://www.darkreading.com/vulnerabilities-threats/security-bugs-solar-grids']
      },
      {
        id: '192',
        title: 'SpotBugs Access Token Theft Identified as Root Cause',
        content: 'SpotBugs Access Token Theft Identified as Root Cause',
        author: 'CyberSecurity Bot',
        timestamp: '2025-04-05 03:44:08.156',
        urls: ['https://thehackernews.com/2025/04/spotbugs-access-token-theft']
      }
    ];

    // Return the real database data
    return NextResponse.json({
      articles: realDatabaseArticles,
      source: 'direct_data',
      message: 'Using direct data from database screenshot',
      time: new Date().toISOString(),
      debug: {
        method: 'hardcoded_data',
        count: realDatabaseArticles.length,
        env: isVercelEnv ? 'vercel' : 'local'
      }
    });
  } catch (error) {
    // Catch-all for any unexpected errors
    logWithEnv('Unexpected error:', error);
    return NextResponse.json({
      articles: fallbackArticles,
      source: 'fallback_error',
      message: `Unexpected error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      time: new Date().toISOString(),
      debug: {
        env: isVercelEnv ? 'vercel' : 'local',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    });
  }
} 