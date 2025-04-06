"use client"

import React, { useState } from 'react'
import { 
  Newspaper, 
  ExternalLink, 
  ArrowLeft, 
  Rss, 
  Construction, 
  Globe,
  Building,
  Mic,
  Landmark,
  FlaskConical,
  Search,
  Filter,
  X
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '@/app/components/CategoryFilter'

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering News Sources
  const categories: Category[] = [
    { id: 'all', name: 'All Sources', icon: Globe },
    { id: 'news_site', name: 'News Site', icon: Newspaper },
    { id: 'vendor_blog', name: 'Vendor Blog/News', icon: Building },
    { id: 'expert_blog', name: 'Expert Blog', icon: Mic },
    { id: 'research', name: 'Vendor Research', icon: FlaskConical },
    { id: 'government', name: 'Government News', icon: Landmark },
    { id: 'aggregator', name: 'Aggregator/Community', icon: Rss }
  ];

  // Added category field based on sourceType
  const newsSources = [
    { name: "The Hacker News", url: "https://thehackernews.com/", description: "Widely read source for cybersecurity news, vulnerabilities, and threat intelligence.", sourceType: "News Site", category: "news_site" },
    { name: "Dark Reading", url: "https://www.darkreading.com/", description: "News and commentary on cybersecurity threats, vulnerabilities, and technology trends.", sourceType: "News Site", category: "news_site" },
    { name: "SecurityWeek", url: "https://www.securityweek.com/", description: "Provides cybersecurity news, insights, and analysis for IT security professionals.", sourceType: "News Site", category: "news_site" },
    { name: "SC Magazine", url: "https://www.scmagazine.com/", description: "News, analysis, and product reviews for cybersecurity professionals.", sourceType: "News Site", category: "news_site" },
    { name: "BleepingComputer", url: "https://www.bleepingcomputer.com/", description: "Technology news site frequently reporting on ransomware, data breaches, and security news.", sourceType: "News Site", category: "news_site" },
    { name: "CyberScoop", url: "https://www.cyberscoop.com/", description: "Cybersecurity news and events focused on government and technology leaders.", sourceType: "News Site", category: "news_site" },
    { name: "Threatpost", url: "https://threatpost.com/", description: "Independent news site covering IT security, vulnerabilities, and cyber threats.", sourceType: "News Site", category: "news_site" },
    { name: "Krebs on Security", url: "https://krebsonsecurity.com/", description: "In-depth investigative journalism on cybercrime and security incidents.", sourceType: "Expert Blog", category: "expert_blog" },
    { name: "Wired Security", url: "https://www.wired.com/category/security/", description: "Wired magazine's section covering security, privacy, and cyber threats.", sourceType: "News Site", category: "news_site" },
    { name: "TechCrunch Security", url: "https://techcrunch.com/tag/security/", description: "Technology news site covering security incidents, startups, and trends.", sourceType: "News Site", category: "news_site" },
    { name: "Forbes Cybersecurity", url: "https://www.forbes.com/cybersecurity/", description: "Forbes section dedicated to cybersecurity news, analysis, and expert opinions.", sourceType: "News Site", category: "news_site" },
    { name: "ZDNet Security", url: "https://www.zdnet.com/topic/security/", description: "Business technology news site with extensive cybersecurity coverage.", sourceType: "News Site", category: "news_site" },
    { name: "CSO Online", url: "https://www.csoonline.com/", description: "News, analysis, and research for security and risk management professionals.", sourceType: "News Site", category: "news_site" },
    { name: "Ars Technica – Security", url: "https://arstechnica.com/information-technology/", description: "Technology news site with strong coverage of IT and security topics.", sourceType: "News Site", category: "news_site" },
    { name: "MIT Technology Review - Cyber", url: "https://www.technologyreview.com/topic/cybersecurity/", description: "Coverage of emerging cybersecurity technologies and research from MIT.", sourceType: "News Site", category: "news_site" },
    { name: "BBC Technology - Security", url: "https://www.bbc.com/news/technology", description: "BBC's technology section often covering major cybersecurity incidents.", sourceType: "News Site", category: "news_site" },
    { name: "CNN Technology – Cyber", url: "https://edition.cnn.com/business/tech", description: "CNN's tech section covering significant cybersecurity events and news.", sourceType: "News Site", category: "news_site" },
    { name: "The Register – Security", url: "https://www.theregister.com/Security/", description: "UK-based tech news site known for its security and enterprise IT reporting.", sourceType: "News Site", category: "news_site" },
    { name: "Infosecurity Magazine", url: "https://www.infosecurity-magazine.com/", description: "Magazine and website covering the latest industry news, threats, and security strategies.", sourceType: "News Site", category: "news_site" },
    { name: "Cybersecurity Dive", url: "https://www.cybersecuritydive.com/", description: "Industry news publication providing analysis on cybersecurity trends and events.", sourceType: "News Site", category: "news_site" },
    { name: "GovInfoSecurity", url: "https://www.govinfosecurity.com/", description: "News site focused on information security for government and regulated industries.", sourceType: "News Site", category: "news_site" },
    { name: "The Daily Swig (PortSwigger)", url: "https://portswigger.net/daily-swig", description: "Web security news site from the creators of Burp Suite.", sourceType: "Vendor News", category: "vendor_blog" },
    { name: "Cybercrime Magazine", url: "https://cybersecurityventures.com/cybercrime-magazine/", description: "Publication focused on the cybercrime economy, statistics, and news.", sourceType: "News Site", category: "news_site" },
    { name: "Security Boulevard", url: "https://securityboulevard.com/", description: "Community site and blog network covering various security topics.", sourceType: "Community Blog", category: "aggregator" },
    { name: "Information Security Buzz", url: "https://www.informationsecuritybuzz.com/", description: "News site covering various information security topics and expert insights.", sourceType: "News Site", category: "news_site" },
    { name: "Packet Storm Security", url: "https://packetstormsecurity.com/", description: "Resource providing security tools, exploits, and related news articles.", sourceType: "News Aggregator", category: "aggregator" },
    { name: "Zero Day – ZDNet", url: "https://www.zdnet.com/blog/security/", description: "ZDNet's blog focusing on software security vulnerabilities and threats.", sourceType: "News Site Blog", category: "news_site" },
    { name: "CISA News", url: "https://www.cisa.gov/news-events/news", description: "Official news releases and updates from the US Cybersecurity & Infrastructure Security Agency.", sourceType: "Government News", category: "government" },
    { name: "ENISA Newsroom", url: "https://www.enisa.europa.eu/news", description: "News and press releases from the European Union Agency for Cybersecurity.", sourceType: "Government News", category: "government" },
    { name: "Rapid7 Blog", url: "https://www.rapid7.com/blog/", description: "Blog covering vulnerability management, penetration testing, and security operations news.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Sophos News", url: "https://news.sophos.com/", description: "Official news and threat research updates from Sophos.", sourceType: "Vendor News", category: "vendor_blog" },
    { name: "Trend Micro Simply Security", url: "https://blog.trendmicro.com/", description: "Trend Micro's blog covering security news, research, and advice.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "ESET WeLiveSecurity", url: "https://www.welivesecurity.com/", description: "ESET's blog featuring cybersecurity news, research, and threat analysis.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Cisco Talos Blog", url: "https://blog.talosintelligence.com/", description: "Threat intelligence and research blog from Cisco Talos.", sourceType: "Vendor Blog", category: "research" },
    { name: "Google Project Zero Blog", url: "https://googleprojectzero.blogspot.com/", description: "Blog detailing zero-day vulnerability research from Google's team.", sourceType: "Vendor Research Blog", category: "research" },
    { name: "Trellix Threat Labs", url: "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs.html", description: "Threat intelligence insights and research updates from Trellix.", sourceType: "Vendor Research", category: "research" },
    { name: "CrowdStrike Blog", url: "https://www.crowdstrike.com/blog/", description: "Blog covering endpoint security, threat intelligence, and incident response news.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Proofpoint Threat Hub", url: "https://www.proofpoint.com/us/resources/threat-hub", description: "Proofpoint's center for threat reports, research, and security news.", sourceType: "Vendor Research", category: "research" },
    { name: "FireEye Blog", url: "https://www.fireeye.com/blog.html", description: "Blog archive from FireEye (now part of Mandiant/Google Cloud).", sourceType: "Vendor Blog (Archive)", category: "vendor_blog" },
    { name: "Microsoft Security Blog", url: "https://www.microsoft.com/en-us/security/blog/", description: "Microsoft's official blog for security news, research, and product updates.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Palo Alto Networks Blog", url: "https://www.paloaltonetworks.com/blog", description: "Blog covering threat research, product news, and industry insights.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Check Point Research Blog", url: "https://research.checkpoint.com/", description: "Threat intelligence and research findings from Check Point Software Technologies.", sourceType: "Vendor Research Blog", category: "research" },
    { name: "Fortinet Blog", url: "https://www.fortinet.com/blog", description: "Blog covering Fortinet product news, threat research, and security trends.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "SentinelOne Blog", url: "https://www.sentinelone.com/blog/", description: "Blog covering endpoint security, AI in cybersecurity, and threat research.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Digital Shadows Blog", url: "https://www.digitalshadows.com/blog-and-research/", description: "Blog covering digital risk protection, threat intelligence, and security news.", sourceType: "Vendor Blog", category: "vendor_blog" },
    { name: "Unit 42 by Palo Alto", url: "https://unit42.paloaltonetworks.com/", description: "Threat intelligence blog from Palo Alto Networks' Unit 42 team.", sourceType: "Vendor Research Blog", category: "research" },
    { name: "Mandiant Newsroom", url: "https://www.mandiant.com/resources", description: "News, reports, and threat intelligence from Mandiant (Google Cloud).", sourceType: "Vendor News/Research", category: "research" },
    { name: "Infosec Institute Blog", url: "https://resources.infosecinstitute.com/", description: "Blog covering security training topics, certifications, and industry news.", sourceType: "Training Provider Blog", category: "vendor_blog" },
    { name: "Security Affairs", url: "https://securityaffairs.com/", description: "Blog covering cybercrime, hacking news, and intelligence analysis.", sourceType: "Expert Blog", category: "expert_blog" },
    { name: "ITPro Security", url: "https://www.itpro.com/security", description: "Technology news site section focused on security news for IT professionals.", sourceType: "News Site", category: "news_site" }
  ];

  // Filtering logic
  const filteredNewsSources = newsSources.filter(source => 
    selectedCategory === 'all' || source.category === selectedCategory
  );
  
  const handleCategorySelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-gray-950 pt-24 pb-12">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="flex flex-col items-center text-center mb-8">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
               <Newspaper className="w-4 h-4 mr-2" />
               Cybersecurity News
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
               Cybersecurity News & Insights
             </h1>
             <p className="text-xl text-gray-400 max-w-2xl">
               Stay informed with these leading cybersecurity news sites, blogs, and research outlets.
             </p>
              <Link href="/insights" className="mt-6 text-orange-400 hover:text-orange-300 flex items-center text-sm">
                 <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Overview
              </Link>
           </div>
          </div>
        </div>

      <div className="container mx-auto px-4">
        <section className="py-10 my-8 text-center border border-dashed border-orange-800/30 bg-orange-900/10 rounded-lg">
           <div className="text-orange-500 mx-auto mb-4">
             <Construction className="w-12 h-12 inline-block" />
           </div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Live News Feed - Coming Soon!
          </h2>
          <p className="text-orange-300/80">
            We're working on integrating a live feed. Please check back later.
          </p>
        </section>
      </div>

      <div className="container mx-auto px-4 mb-4">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={handleCategorySelection} 
            accentColor="orange"
          />
      </div>

       <div className="container mx-auto px-4 py-4">
        <p className="text-gray-400 text-sm">
          Showing {filteredNewsSources.length} {filteredNewsSources.length === 1 ? 'source' : 'sources'}
          {selectedCategory !== 'all' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}
        </p>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {filteredNewsSources.length > 0 ? (
            <section>
              <h2 className="text-2xl font-semibold mb-8 text-white border-b border-orange-800/50 pb-2">
                 {selectedCategory === 'all' ? 'Recommended News Outlets' : `${categories.find(c => c.id === selectedCategory)?.name || 'Selected'} Sources`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNewsSources.map((source, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-colors flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                       <h3 className="text-lg font-semibold text-white flex-1 mr-2">{source.name}</h3>
                       <span className="text-xs bg-orange-900/30 text-orange-400 px-2 py-1 rounded whitespace-nowrap">
                           {categories.find(c => c.id === source.category)?.name || source.category}
                       </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{source.description}</p>
                    <Link 
                       href={source.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                       className="mt-auto inline-flex items-center justify-center w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded transition-colors text-sm"
                    >
                       Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                     </Link>
                </div>
            ))}
          </div>
            </section>
          ) : (
            <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
               <div className="text-orange-500 mx-auto mb-4">
                 <Search className="w-12 h-12" />
               </div>
              <h3 className="text-xl font-medium text-white mb-2">No News Sources Found</h3>
              <p className="text-gray-400 mb-6">Try selecting a different category or clear the filter.</p>
              <Button 
                variant="outline"
                onClick={() => handleCategorySelection('all')} 
                className="text-orange-400 border-orange-600 hover:bg-orange-900/30 hover:text-orange-300"
              >
                 <X className="w-4 h-4 mr-2" /> Clear Filter
               </Button>
          </div>
          )}
      </div>
    </div>
  );
}