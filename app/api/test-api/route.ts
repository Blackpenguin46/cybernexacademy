import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Test API Route: Generating mock news data');
  
  // Create mock data that mimics news items
  const mockNews = [
    {
      title: "Test Article 1",
      link: "https://example.com/article1",
      pubDate: new Date().toISOString(),
      thumbnail: "https://via.placeholder.com/150",
      description: "This is a test article to verify API connectivity"
    },
    {
      title: "Test Article 2",
      link: "https://example.com/article2",
      pubDate: new Date().toISOString(),
      thumbnail: "https://via.placeholder.com/150",
      description: "Another test article to verify API connectivity"
    },
    {
      title: "Test Article 3",
      link: "https://example.com/article3",
      pubDate: new Date().toISOString(),
      thumbnail: "https://via.placeholder.com/150",
      description: "Third test article to verify API connectivity"
    }
  ];
  
  console.log('Test API Route: Returning mock news data:', mockNews);
  
  // Add a delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return the mock data
  return NextResponse.json(mockNews);
} 