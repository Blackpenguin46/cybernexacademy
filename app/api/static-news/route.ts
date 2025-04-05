import { NextResponse } from 'next/server';

export async function GET() {
  // Return static news data
  const staticNews = [
    {
      title: "Critical Vulnerability Discovered in Popular Framework",
      link: "https://example.com/article1",
      pubDate: "2023-04-01T12:00:00Z",
      thumbnail: "https://via.placeholder.com/150",
      description: "Security researchers have discovered a critical vulnerability affecting millions of users. Patch immediately."
    },
    {
      title: "New Ransomware Campaign Targets Healthcare Sector",
      link: "https://example.com/article2",
      pubDate: "2023-04-02T10:30:00Z",
      thumbnail: "https://via.placeholder.com/150",
      description: "A sophisticated ransomware campaign is targeting healthcare organizations worldwide with phishing emails."
    },
    {
      title: "Government Releases New Cybersecurity Framework",
      link: "https://example.com/article3",
      pubDate: "2023-04-03T14:15:00Z",
      thumbnail: "https://via.placeholder.com/150",
      description: "A new cybersecurity framework has been released to help organizations improve their security posture."
    },
    {
      title: "Major Tech Company Patches Zero-Day Vulnerability",
      link: "https://example.com/article4",
      pubDate: "2023-04-04T09:45:00Z",
      thumbnail: "https://via.placeholder.com/150",
      description: "A critical zero-day vulnerability being actively exploited in the wild has been patched. Update immediately."
    },
    {
      title: "New Data Privacy Regulations to Take Effect Next Month",
      link: "https://example.com/article5",
      pubDate: "2023-04-05T11:20:00Z",
      thumbnail: "https://via.placeholder.com/150",
      description: "Companies must prepare for stringent new data privacy regulations that will be enforced starting next month."
    }
  ];

  // Add headers to prevent caching
  return new NextResponse(JSON.stringify(staticNews), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, max-age=0',
      'Access-Control-Allow-Origin': '*'
    }
  });
} 