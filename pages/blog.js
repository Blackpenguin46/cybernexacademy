import Head from 'next/head'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Blog() {
  const posts = [
    {
      title: 'Understanding Zero-Day Vulnerabilities',
      description: 'Learn what zero-day vulnerabilities are and how they impact security.',
      href: '/blog/understanding-zero-day-vulnerabilities',
      image: '/images/blog/zero-day.jpg',
      date: 'June 15, 2023',
    },
    {
      title: 'The Rise of Ransomware Attacks',
      description: 'Exploring the growth of ransomware and strategies for protection.',
      href: '/blog/rise-of-ransomware-attacks',
      image: '/images/blog/ransomware.jpg',
      date: 'May 22, 2023',
    },
    {
      title: 'Cybersecurity Career Trends for 2023',
      description: 'What skills and specializations are in demand this year.',
      href: '/blog/cybersecurity-career-trends-2023',
      image: '/images/blog/career-trends.jpg',
      date: 'April 10, 2023',
    },
  ]

  return (
    <Layout>
      <Head>
        <title>Blog - CyberNex Academy</title>
        <meta name="description" content="Cybersecurity articles, news, and updates from CyberNex Academy" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog & News</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title}
              description={`${post.date} - ${post.description}`}
              href={post.href}
              image={post.image}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
} 