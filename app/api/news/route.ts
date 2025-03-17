import { NextResponse } from 'next/server';

// Use Next.js cache to refresh every 24 hours
export const revalidate = 86400; // 24 hours in seconds

// Sample data structure for a news item
interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
}

// This function would normally fetch from a real API
async function fetchCybersecurityNews(): Promise<NewsItem[]> {
  // For production, replace with a real API call to NewsAPI.org, RapidAPI, etc.
  // Example with NewsAPI: 
  // const response = await fetch(`https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${process.env.NEWS_API_KEY}&sortBy=publishedAt&language=en&pageSize=10`);
  // const data = await response.json();
  // return data.articles.map(article => ({
  //   title: article.title,
  //   description: article.description,
  //   url: article.url,
  //   source: article.source.name,
  //   publishedAt: article.publishedAt,
  //   category: determineCategoryFromContent(article.content || article.description),
  //   imageUrl: article.urlToImage
  // }));
  
  // For now, return realistic mock data
  return [
    {
      title: "Critical vulnerability found in popular VPN software",
      description: "Security researchers have discovered a severe vulnerability in widely-used VPN applications that could allow attackers to intercept encrypted traffic.",
      url: "https://thehackernews.com/2023/04/researchers-uncover-high-severity.html",
      source: "The Hacker News",
      publishedAt: new Date().toISOString(),
      category: "Vulnerabilities",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Ransomware attacks increase by 40% in healthcare sector",
      description: "New report indicates a significant rise in ransomware attacks targeting healthcare institutions, with attackers exploiting pandemic-related vulnerabilities.",
      url: "https://www.bleepingcomputer.com/news/security/new-ransomware-attack-method-bypasses-a-common-security-solution/",
      source: "Bleeping Computer",
      publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(), // 6 hours ago
      category: "Threats",
      imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "New AI-powered security platform launches",
      description: "Tech startup unveils innovative platform using artificial intelligence to detect anomalies and prevent cyber attacks in real-time.",
      url: "https://www.darkreading.com/cyber-risk/is-generative-ai-a-security-risk-or-solution",
      source: "Dark Reading",
      publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(), // 12 hours ago
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      title: "Government introduces new cybersecurity regulations",
      description: "Federal agencies announce stricter compliance requirements for organizations handling sensitive data, with implementation deadlines set for next quarter.",
      url: "https://www.zdnet.com/article/cisa-reveals-new-cybersecurity-requirements-for-critical-infrastructure-organizations/",
      source: "ZDNet",
      publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(), // 18 hours ago
      category: "Compliance",
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
    },
    {
      title: "Major data breach affects millions of customers",
      description: "Large e-commerce company reports unauthorized access to customer database, potentially exposing personal and payment information of over 5 million users.",
      url: "https://www.wired.com/story/t-mobile-data-breach-140-million-customers/",
      source: "Wired",
      publishedAt: new Date(Date.now() - 22 * 3600000).toISOString(), // 22 hours ago
      category: "Threats",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "International Cybersecurity Conference announces keynote speakers",
      description: "Renowned security experts and government officials to headline upcoming global cybersecurity summit addressing emerging threats and defense strategies.",
      url: "https://www.infosecurity-magazine.com/news/us-government-announces-new/",
      source: "Infosecurity Magazine",
      publishedAt: new Date(Date.now() - 23 * 3600000).toISOString(), // 23 hours ago
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];
}

export async function GET() {
  try {
    // Fetch the latest cybersecurity news
    const newsData = await fetchCybersecurityNews();
    
    // Sort by published date (most recent first)
    const sortedNews = newsData.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    // Return the news with a 24-hour cache header
    return NextResponse.json(
      { news: sortedNews, lastUpdated: new Date().toISOString() },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
        }
      }
    );
  } catch (error) {
    console.error('Error fetching cybersecurity news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cybersecurity news' },
      { status: 500 }
    );
  }
} 