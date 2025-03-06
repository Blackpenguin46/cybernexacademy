"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Newspaper, FileText, BarChart, Building2, ArrowRight, Clock, Eye, Badge } from 'lucide-react';

const InsightsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  // Insights sections data
  const insightsSections = [
    {
      title: 'News & Updates',
      description: 'The latest cybersecurity news, breaches, and industry updates',
      icon: Newspaper,
      href: '/insights/news',
      color: 'neon-blue',
    },
    {
      title: 'Blog Articles',
      description: 'In-depth articles, tutorials, and analysis from security experts',
      icon: FileText,
      href: '/insights/blog',
      color: 'neon-pink',
    },
    {
      title: 'Industry Trends',
      description: 'Data-driven insights on emerging trends in cybersecurity',
      icon: BarChart,
      href: '/insights/trends',
      color: 'neon-green',
    },
    {
      title: 'Job Market',
      description: 'Analysis of the cybersecurity job market, salaries, and skills in demand',
      icon: Building2,
      href: '/insights/jobs',
      color: 'neon-purple',
    },
  ];

  // Featured articles
  const featuredArticles = [
    {
      title: 'Understanding Zero-Day Vulnerabilities',
      description: 'A comprehensive guide to zero-day vulnerabilities, how they work, and why they are so dangerous.',
      category: 'Security Concepts',
      readTime: '8 min read',
      views: '1.2K',
      date: 'June 10, 2023',
      href: '/insights/blog/understanding-zero-day-vulnerabilities',
    },
    {
      title: 'The Rise of Ransomware-as-a-Service',
      description: 'Exploring how ransomware has evolved into a service-based model and what that means for organizations.',
      category: 'Threat Intelligence',
      readTime: '12 min read',
      views: '3.5K',
      date: 'May 22, 2023',
      href: '/insights/blog/rise-of-ransomware-as-a-service',
    },
    {
      title: 'Securing Your Cloud Infrastructure',
      description: 'Best practices for implementing robust security measures in cloud environments.',
      category: 'Cloud Security',
      readTime: '10 min read',
      views: '2.8K',
      date: 'April 15, 2023',
      href: '/insights/blog/securing-cloud-infrastructure',
    },
  ];

  // Latest news
  const latestNews = [
    {
      title: 'Major Banking System Hit by Sophisticated Cyber Attack',
      date: 'June 15, 2023',
      source: 'Cybersecurity Today',
      href: '/insights/news/banking-system-cyber-attack',
    },
    {
      title: 'New Vulnerability Found in Popular IoT Devices',
      date: 'June 12, 2023',
      source: 'Tech Security News',
      href: '/insights/news/iot-vulnerability-discovered',
    },
    {
      title: 'Government Releases Updated Cybersecurity Framework',
      date: 'June 8, 2023',
      source: 'Policy Watch',
      href: '/insights/news/government-cybersecurity-framework',
    },
    {
      title: 'Global Ransomware Attacks Increased by 300% in Q2',
      date: 'June 5, 2023',
      source: 'Threat Intelligence Review',
      href: '/insights/news/ransomware-attacks-q2-report',
    },
  ];

  return (
    <div className="space-y-20 mb-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative overflow-hidden py-24"
      >
        {/* Background effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-pink/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUpVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue tracking-tight">
              CyberNex Insights
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUpVariants} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity news, trends, analysis, and expert perspectives.
          </motion.p>
          
          <motion.div variants={fadeInUpVariants} className="flex flex-wrap justify-center gap-4">
            <Link href="/insights/news" className="cyber-btn text-base py-3 px-6 rounded-md flex items-center justify-center">
              Latest News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/insights/blog" className="cyber-btn-secondary text-base py-3 px-6 rounded-md flex items-center justify-center">
              Read Articles
              <FileText className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Insights Sections Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Explore Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the different sections of our insights platform to keep you updated on all aspects of cybersecurity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {insightsSections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUpVariants} className="h-full">
                <Link href={section.href} className="cyber-card group h-full block hover:shadow-glow transition-all duration-300">
                  <div className={`w-14 h-14 rounded-lg bg-${section.color}/10 flex items-center justify-center text-${section.color} mb-5`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 group-hover:text-${section.color} transition-colors`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  <div className="flex items-center text-gray-400 group-hover:text-neon-blue transition-colors mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Articles */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="border-t border-dark-border relative py-24"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Featured Articles</h2>
              <p className="text-gray-300 max-w-2xl">
                In-depth analysis and insights from cybersecurity experts
              </p>
            </div>
            <Link href="/insights/blog" className="text-neon-pink hover:text-neon-pink/80 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>View All Articles</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <motion.div key={article.title} variants={fadeInUpVariants}>
                <Link href={article.href} className="cyber-card group block hover:shadow-glow transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block bg-neon-pink/10 text-neon-pink px-3 py-1 rounded-full text-xs">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-pink transition-colors">{article.title}</h3>
                  <p className="text-gray-400 mb-6">{article.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{article.readTime}</span>
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{article.views} views</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.date}</span>
                    <div className="flex items-center text-neon-pink/70 group-hover:text-neon-pink transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest News */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="border-t border-dark-border relative py-24"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Latest News</h2>
              <p className="text-gray-300 max-w-2xl">
                Stay up-to-date with the latest cybersecurity events and updates
              </p>
            </div>
            <Link href="/insights/news" className="text-neon-blue hover:text-neon-blue/80 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>More News</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="space-y-4">
            {latestNews.map((news, index) => (
              <motion.div 
                key={news.title} 
                variants={fadeInUpVariants}
                className="cyber-card hover:shadow-glow transition-all duration-300"
              >
                <Link href={news.href} className="flex flex-col md:flex-row md:items-center justify-between p-4 group">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-neon-blue transition-colors">{news.title}</h3>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-4">{news.date}</span>
                      <Badge className="w-3 h-3 mr-1 text-neon-blue" />
                      <span className="text-neon-blue">{news.source}</span>
                    </div>
                  </div>
                  <div className="flex items-center self-end md:self-center text-neon-blue/70 group-hover:text-neon-blue transition-colors">
                    <span>Read Full Story</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Subscription */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUpVariants}
            className="cyber-card overflow-hidden relative"
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col p-8 gap-8 text-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Stay Updated</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest cybersecurity news, insights, and exclusive content directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="cyber-input py-3 px-4 w-full focus:ring-neon-pink focus:border-neon-pink"
                  />
                  <button className="cyber-btn bg-neon-pink hover:bg-neon-pink/90 text-white py-3 px-6 rounded-md">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-4">We respect your privacy and will never share your information.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default InsightsPage;