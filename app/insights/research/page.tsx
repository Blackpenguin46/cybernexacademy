"use client"

import React, { useState } from 'react';
import { Lightbulb, ExternalLink, Clock, Tag, Download, Filter, Search, ArrowLeft, FileText, BookOpen, Globe, Database, Shield, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'All Categories' },
    { id: 'AI Security', name: 'AI Security' },
    { id: 'Malware Analysis', name: 'Malware Analysis' },
    { id: 'Network Security', name: 'Network Security' },
    { id: 'Cloud Security', name: 'Cloud Security' },
    { id: 'Cryptography', name: 'Cryptography' },
  ];

  const researchPapers = [
    {
      title: "Adversarial Machine Learning: Attacking and Defending AI Systems",
      authors: ["Sarah Chen, PhD", "Michael Rodriguez, PhD"],
      institution: "Stanford University",
      date: "2024-03-15",
      abstract: "This paper explores techniques for attacking machine learning models through adversarial examples and proposes novel defense mechanisms to improve AI system robustness.",
      categories: ["AI Security", "Machine Learning"],
      link: "https://arxiv.org/abs/2203.11793",
      citations: 148,
      doi: "10.1109/ACCESS.2022.3159970"
    },
    {
      title: "Post-Quantum Cryptography: Challenges and Implementations",
      authors: ["David Nakamoto, PhD", "Elena Patel, PhD"],
      institution: "MIT",
      date: "2024-02-10",
      abstract: "A comprehensive analysis of cryptographic algorithms resistant to quantum attacks, including lattice-based, hash-based, and multivariate cryptography approaches.",
      categories: ["Cryptography", "Quantum Computing"],
      link: "https://dl.acm.org/doi/10.1145/3548606.3560652",
      citations: 87,
      doi: "10.1145/3548606.3560652"
    },
    {
      title: "Advanced Persistent Threats: Detection and Mitigation Strategies",
      authors: ["Robert Chang, PhD", "Olivia Martinez"],
      institution: "Carnegie Mellon University",
      date: "2023-11-22",
      abstract: "This research presents novel techniques for detecting Advanced Persistent Threats (APTs) using behavioral analysis and machine learning, with case studies on recent major attacks.",
      categories: ["Malware Analysis", "Threat Intelligence"],
      link: "https://ieeexplore.ieee.org/document/9796452",
      citations: 56,
      doi: "10.1109/SP.2023.00001"
    },
    {
      title: "Zero Trust Architecture: Implementation Challenges and Solutions",
      authors: ["Jessica Williams, PhD", "Thomas Anderson"],
      institution: "Georgia Tech",
      date: "2023-10-05",
      abstract: "A practical guide to implementing Zero Trust security models in enterprise environments, addressing common challenges and providing solutions based on real-world case studies.",
      categories: ["Network Security", "Security Architecture"],
      link: "https://dl.acm.org/doi/10.1145/3460120.3484779",
      citations: 92,
      doi: "10.1145/3460120.3484779"
    },
    {
      title: "Cloud Security: Securing Data in Multi-Cloud Environments",
      authors: ["James Wilson, PhD", "Maria Garcia"],
      institution: "UC Berkeley",
      date: "2023-08-18",
      abstract: "This paper addresses security challenges in multi-cloud deployments, proposing a framework for consistent security policy enforcement across diverse cloud environments.",
      categories: ["Cloud Security", "Data Protection"],
      link: "https://ieeexplore.ieee.org/document/9823567",
      citations: 64,
      doi: "10.1109/TDSC.2023.3201453"
    },
    {
      title: "Supply Chain Security: Detecting Compromised Software Dependencies",
      authors: ["Kevin Zhang, PhD", "Rachel Moore"],
      institution: "University of Washington",
      date: "2024-01-20",
      abstract: "Novel approaches to detecting malicious code and vulnerabilities in software dependencies, helping organizations protect their software supply chains from increasingly sophisticated attacks.",
      categories: ["Software Security", "Malware Analysis"],
      link: "https://dl.acm.org/doi/10.1145/3559613.3563207",
      citations: 31,
      doi: "10.1145/3559613.3563207"
    },
    {
      title: "AI-Powered Security Operations: Real-time Threat Detection",
      authors: ["Daniel Lee, PhD", "Sophia Adams"],
      institution: "Princeton University",
      date: "2023-09-12",
      abstract: "This research demonstrates how artificial intelligence and machine learning can enhance Security Operations Centers (SOCs) through automated, real-time threat detection and response.",
      categories: ["AI Security", "Security Operations"],
      link: "https://ieeexplore.ieee.org/document/9723145",
      citations: 75,
      doi: "10.1109/TNSM.2023.3178245"
    },
    {
      title: "Privacy-Preserving Machine Learning in Cybersecurity Applications",
      authors: ["Jennifer Brown, PhD", "Alexander Wang"],
      institution: "ETH Zurich",
      date: "2023-12-03",
      abstract: "An exploration of techniques for training machine learning models on sensitive cybersecurity data while preserving privacy, including federated learning and homomorphic encryption.",
      categories: ["AI Security", "Privacy"],
      link: "https://dl.acm.org/doi/10.1145/3576915.3616628",
      citations: 42,
      doi: "10.1145/3576915.3616628"
    },
    {
      title: "Blockchain Security: Vulnerabilities and Countermeasures",
      authors: ["Carlos Rivera, PhD", "Emma Johnson"],
      institution: "Cornell University",
      date: "2024-01-08",
      abstract: "A comprehensive analysis of security vulnerabilities in blockchain implementations and smart contracts, with recommended countermeasures for developers and organizations.",
      categories: ["Cryptography", "Distributed Systems"],
      link: "https://ieeexplore.ieee.org/document/9912346",
      citations: 38,
      doi: "10.1109/TSC.2023.3245781"
    }
  ];

  const whitepapers = [
    {
      title: "The State of Ransomware in 2024",
      organization: "CyberSecurity Coalition",
      date: "2024-02-25",
      description: "Comprehensive analysis of ransomware trends, tactics, and defensive strategies based on data from over 500 incidents in 2023.",
      categories: ["Ransomware", "Threat Intelligence"],
      link: "https://www.example.com/ransomware-2024"
    },
    {
      title: "Securing Cloud-Native Applications",
      organization: "Cloud Security Alliance",
      date: "2024-01-15",
      description: "Best practices for securing containerized applications, Kubernetes clusters, and serverless functions in production environments.",
      categories: ["Cloud Security", "DevSecOps"],
      link: "https://www.example.com/cloud-native-security"
    },
    {
      title: "Implementing Zero Trust Architecture",
      organization: "National Cybersecurity Center",
      date: "2023-11-10",
      description: "A practical guide to implementing Zero Trust principles across enterprise networks, applications, and data.",
      categories: ["Network Security", "Zero Trust"],
      link: "https://www.example.com/zero-trust-guide"
    },
    {
      title: "AI in Cybersecurity: Use Cases and Implementation",
      organization: "AI Security Research Group",
      date: "2023-12-08",
      description: "How organizations are leveraging AI for threat detection, vulnerability management, and security automation.",
      categories: ["AI Security", "Security Operations"],
      link: "https://www.example.com/ai-cybersecurity"
    }
  ];

  // Filter research papers based on selected category - with improved case insensitivity and safety checks
  const filteredResearchPapers = selectedCategory === 'All'
    ? researchPapers
    : researchPapers.filter(paper => {
        // Safety check for paper.categories
        if (!paper.categories || !Array.isArray(paper.categories)) {
          return false;
        }
        
        // Case-insensitive comparison
        return paper.categories.some(category =>
          typeof category === 'string' && category.toLowerCase() === selectedCategory.toLowerCase()
        );
      });

  // Filter whitepapers based on search query and category
  const filteredWhitepapers = whitepapers.filter(whitepaper => {
    // Filter by category
    const categoryMatch = selectedCategory === 'All' || whitepaper.categories.includes(selectedCategory);
    
    // Filter by search query
    const searchMatch = searchQuery === '' || 
      whitepaper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      whitepaper.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const researchResources = [
    {
      name: "IEEE Xplore - Cybersecurity Papers",
      url: "https://ieeexplore.ieee.org/browse/conferences/title",
      description: "Digital library for IEEE conference papers, journals, and standards related to cybersecurity.",
      sourceType: "Academic Library"
    },
    {
      name: "ACM Digital Library - Security",
      url: "https://dl.acm.org/subject/security-and-privacy",
      description: "Extensive collection of computing literature, including security and privacy research.",
      sourceType: "Academic Library"
    },
    {
      name: "USENIX Security Symposium Proceedings",
      url: "https://www.usenix.org/conference/usenixsecurity24",
      description: "Proceedings from a top-tier academic conference on computer security.",
      sourceType: "Conference Proceedings"
    },
    {
      name: "NDSS Symposium Papers",
      url: "https://www.ndss-symposium.org/ndss2024/",
      description: "Papers from the Network and Distributed System Security Symposium.",
      sourceType: "Conference Proceedings"
    },
    {
      name: "Black Hat USA Whitepapers",
      url: "https://www.blackhat.com/html/archives.html",
      description: "Archive of whitepapers and presentations from Black Hat security conferences.",
      sourceType: "Conference Materials"
    },
    {
      name: "DEF CON Conference Papers",
      url: "https://media.defcon.org/",
      description: "Media archive for DEF CON presentations and papers.",
      sourceType: "Conference Materials"
    },
    {
      name: "Springer Cybersecurity Journal",
      url: "https://cybersecurity.springeropen.com/",
      description: "Open access journal publishing research in all areas of cybersecurity.",
      sourceType: "Academic Journal"
    },
    {
      name: "ScienceDirect - Information Security",
      url: "https://www.sciencedirect.com/journal/computers-and-security",
      description: "Platform hosting scientific journals like 'Computers & Security'.",
      sourceType: "Academic Platform"
    },
    {
      name: "Google Scholar - Cybersecurity",
      url: "https://scholar.google.com/scholar?q=cybersecurity",
      description: "Broad search engine for scholarly literature across many disciplines.",
      sourceType: "Search Engine"
    },
    {
      name: "arXiv Security and Privacy Papers",
      url: "https://arxiv.org/list/cs.CR/recent",
      description: "Open-access archive for scholarly articles in computer science, including security (cs.CR).",
      sourceType: "Open Access Archive"
    },
    {
      name: "MIT CSAIL Security Research",
      url: "https://www.csail.mit.edu/research/cybersecurity",
      description: "Research publications from MIT's Computer Science and Artificial Intelligence Laboratory.",
      sourceType: "University Research"
    },
    {
      name: "Stanford Computer Security Lab",
      url: "https://security.stanford.edu/",
      description: "Publications and projects from Stanford's security research lab.",
      sourceType: "University Research"
    },
    {
      name: "Berkeley Center for Long-Term Cybersecurity",
      url: "https://cltc.berkeley.edu/research/",
      description: "Research focusing on future challenges and opportunities in cybersecurity.",
      sourceType: "University Research"
    },
    {
      name: "Harvard Belfer Center Cybersecurity Papers",
      url: "https://www.belfercenter.org/topic/cybersecurity",
      description: "Research papers on cybersecurity policy, technology, and international relations.",
      sourceType: "University Research"
    },
    {
      name: "CISPA Helmholtz Center for Information Security",
      url: "https://cispa.de/en",
      description: "German research center focused on cybersecurity, publications available on site.",
      sourceType: "Research Center"
    },
    {
      name: "Oxford Internet Institute - Cybersecurity",
      url: "https://www.oii.ox.ac.uk/",
      description: "Research from Oxford focusing on the social science aspects of the internet, including security.",
      sourceType: "University Research"
    },
    {
      name: "NIST Cybersecurity Publications",
      url: "https://csrc.nist.gov/publications",
      description: "Official publications, standards, and guidelines from NIST's Computer Security Resource Center.",
      sourceType: "Government Publication"
    },
    {
      name: "NSA Research Directorate",
      url: "https://www.nsa.gov/what-we-do/research/",
      description: "Information on NSA's research focus areas, often leading to public reports.",
      sourceType: "Government Research"
    },
    {
      name: "CISA Research and Reports",
      url: "https://www.cisa.gov/resources-tools",
      description: "Resources, tools, and reports published by the US Cybersecurity & Infrastructure Security Agency.",
      sourceType: "Government Publication"
    },
    {
      name: "ENISA Studies and Reports",
      url: "https://www.enisa.europa.eu/publications",
      description: "Publications from the European Union Agency for Cybersecurity.",
      sourceType: "Government Publication"
    },
    {
      name: "RAND Corporation Cybersecurity Research",
      url: "https://www.rand.org/topics/cybersecurity.html",
      description: "Research reports from RAND covering various cybersecurity policy and technology topics.",
      sourceType: "Think Tank"
    },
    {
      name: "Brookings Institution - Cybersecurity",
      url: "https://www.brookings.edu/topic/cybersecurity/",
      description: "Analysis and research on cybersecurity policy from the Brookings Institution.",
      sourceType: "Think Tank"
    },
    {
      name: "CSIS Cybersecurity Publications",
      url: "https://www.csis.org/programs/strategic-technologies-program/cybersecurity",
      description: "Publications from the Center for Strategic & International Studies on cybersecurity.",
      sourceType: "Think Tank"
    },
    {
      name: "Council on Foreign Relations - Cyber Operations",
      url: "https://www.cfr.org/cyber-operations",
      description: "Reports and analysis on cyber operations and international security from CFR.",
      sourceType: "Think Tank"
    },
    {
      name: "Atlantic Council Cyber Statecraft Initiative",
      url: "https://www.atlanticcouncil.org/programs/scowcroft-center-for-strategy-and-security/cyber-statecraft-initiative/",
      description: "Research and publications focused on cyber statecraft and security policy.",
      sourceType: "Think Tank"
    },
    {
      name: "FireEye Mandiant Reports",
      url: "https://www.mandiant.com/resources",
      description: "In-depth threat intelligence reports and research from Mandiant (Google Cloud).",
      sourceType: "Vendor Research"
    },
    {
      name: "CrowdStrike Threat Research",
      url: "https://www.crowdstrike.com/blog/",
      description: "CrowdStrike's blog featuring threat research, reports, and intelligence.",
      sourceType: "Vendor Research"
    },
    {
      name: "Palo Alto Unit 42 Threat Reports",
      url: "https://unit42.paloaltonetworks.com/",
      description: "Threat intelligence reports and research from Palo Alto Networks' Unit 42.",
      sourceType: "Vendor Research"
    },
    {
      name: "Cisco Talos Whitepapers",
      url: "https://blog.talosintelligence.com/", // Primarily blog, but links to papers
      description: "Threat intelligence blog often linking to detailed research papers from Cisco Talos.",
      sourceType: "Vendor Research"
    },
    {
      name: "Symantec Threat Reports",
      url: "https://symantec-enterprise-blogs.security.com/",
      description: "Blog and reports from Broadcom's Symantec Enterprise division on threat intelligence.",
      sourceType: "Vendor Research"
    },
    {
      name: "Check Point Research Library",
      url: "https://research.checkpoint.com/",
      description: "Library of research papers and threat intelligence from Check Point.",
      sourceType: "Vendor Research"
    },
    {
      name: "IBM Security Intelligence",
      url: "https://securityintelligence.com",
      description: "IBM's platform for security news, research articles, and reports.",
      sourceType: "Vendor Research"
    },
    {
      name: "Verizon DBIR",
      url: "https://www.verizon.com/business/resources/reports/dbir/",
      description: "Verizon's Data Breach Investigations Report, a key annual research publication.",
      sourceType: "Vendor Report"
    },
    {
      name: "SANS Whitepapers",
      url: "https://www.sans.org/white-papers/",
      description: "Collection of cybersecurity whitepapers curated by the SANS Institute.",
      sourceType: "Training Provider"
    },
    {
      name: "ISACA Research Papers",
      url: "https://www.isaca.org/resources/research",
      description: "Research publications from ISACA on topics like audit, risk, and governance.",
      sourceType: "Association Publication"
    },
    {
      name: "Infosec Institute Research",
      url: "https://resources.infosecinstitute.com/",
      description: "Resource center with articles, whitepapers, and research from Infosec Institute.",
      sourceType: "Training Provider"
    },
    {
      name: "SecurityWeek Research",
      url: "https://www.securityweek.com/", // Research often linked within articles
      description: "Cybersecurity news site often covering or linking to research papers.",
      sourceType: "News Site"
    },
    {
      name: "Cybereason Reports",
      url: "https://www.cybereason.com/resources",
      description: "Research reports and threat analysis from Cybereason.",
      sourceType: "Vendor Research"
    },
    {
      name: "Trellix Threat Labs",
      url: "https://www.trellix.com/en-us/about/newsroom/stories/threat-labs.html",
      description: "Threat intelligence and research papers from Trellix.",
      sourceType: "Vendor Research"
    },
    {
      name: "Cybersecurity Ventures Reports",
      url: "https://cybersecurityventures.com/",
      description: "Market research reports and statistics on the cybersecurity industry.",
      sourceType: "Market Research"
    },
    {
      name: "CSO Online Research",
      url: "https://www.csoonline.com/", // Research often linked within articles
      description: "News and analysis resource for security professionals, often citing research.",
      sourceType: "News Site"
    },
    {
      name: "Cybercrime Magazine Research",
      url: "https://cybersecurityventures.com/cybercrime-magazine/",
      description: "Magazine section covering cybercrime statistics and research.",
      sourceType: "News Site"
    },
    {
      name: "Digital Shadows Whitepapers",
      url: "https://www.digitalshadows.com/blog-and-research/",
      description: "Whitepapers and research on digital risk protection and threat intelligence.",
      sourceType: "Vendor Research"
    },
    {
      name: "Proofpoint Threat Hub",
      url: "https://www.proofpoint.com/us/resources/threat-hub",
      description: "Proofpoint's hub for threat reports, research, and whitepapers.",
      sourceType: "Vendor Research"
    },
    {
      name: "Unit 42 Cloud Threat Reports",
      url: "https://unit42.paloaltonetworks.com/cloud-threat-reports/",
      description: "Specific reports from Unit 42 focusing on cloud security threats.",
      sourceType: "Vendor Research"
    },
    {
      name: "Tenable Research Center",
      url: "https://www.tenable.com/blog", // Links to research reports
      description: "Tenable's blog highlighting vulnerability research and reports.",
      sourceType: "Vendor Research"
    },
    {
      name: "Rapid7 Research",
      url: "https://www.rapid7.com/research/",
      description: "Research papers and projects from Rapid7 on vulnerabilities and threats.",
      sourceType: "Vendor Research"
    },
    {
      name: "Sophos Threat Reports",
      url: "https://www.sophos.com/en-us/security-news-trends",
      description: "SophosLabs research, threat reports, and security news.",
      sourceType: "Vendor Research"
    },
    {
      name: "Kaspersky SecureList Research",
      url: "https://securelist.com/",
      description: "In-depth research articles and reports from Kaspersky Lab.",
      sourceType: "Vendor Research"
    },
    {
      name: "Malpedia by Fraunhofer FKIE",
      url: "https://malpedia.caad.fkie.fraunhofer.de/",
      description: "A resource for malware research, offering analysis and papers.",
      sourceType: "Research Center"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative z-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-blue-600/10 rounded-xl mb-4">
              <FileText className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-blue-500 font-medium">Research Papers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Research & Publications
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Explore academic papers, industry reports, and research findings from leading institutions and vendors.
            </p>
            <Link href="/insights" className="text-purple-400 hover:underline flex items-center justify-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white">Research Papers</h2>
              
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
                {/* Search Input */}
                <div className="relative max-w-md w-full">
                  <input
                    type="text"
                    placeholder="Search papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-sky-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center overflow-x-auto pb-2 w-full md:w-auto">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-3 py-2 rounded-full text-sm whitespace-nowrap ${
                        selectedCategory === category.id 
                          ? 'bg-sky-900/40 text-sky-400 border border-sky-700'
                          : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700'
                      } mr-2`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Papers Section */}
            {filteredResearchPapers.length > 0 ? (
              <div className="space-y-6">
                {filteredResearchPapers.map((paper, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">{paper.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-gray-400 flex items-center">
                          <FileText className="w-3 h-3 mr-1" />
                          DOI: {paper.doi}
                        </div>
                        <div className="text-xs text-sky-400 flex items-center">
                          <BookOpen className="w-3 h-3 mr-1" />
                          Citations: {paper.citations}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {paper.categories.map((category, i) => (
                        <span
                          key={i}
                          className="text-xs bg-sky-900/30 text-sky-400 px-2 py-1 rounded"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">Authors:</span>
                        {paper.authors.join(', ')}
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 text-gray-500 mr-1" />
                        {paper.institution}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-1" />
                        {paper.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      {paper.abstract}
                    </p>
                    
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm"
                    >
                      Read Full Paper
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="text-gray-400 mb-3">No research papers matching your search criteria.</div>
                <button
                  onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                  className="text-sky-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Whitepapers & Industry Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWhitepapers.map((whitepaper, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-sky-500/30 transition-colors h-full flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{whitepaper.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {whitepaper.categories.map((category, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-500 mr-1" />
                      {whitepaper.organization}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-1" />
                      {whitepaper.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 flex-grow">
                    {whitepaper.description}
                  </p>
                  
                  <a
                    href={whitepaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm"
                  >
                    Download Whitepaper
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
              
              {filteredWhitepapers.length === 0 && (
                <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800 col-span-2">
                  <div className="text-gray-400 mb-3">No whitepapers matching your search criteria.</div>
                  <button
                    onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                    className="text-sky-400 hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Research Resources Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Research Papers & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded-full mb-3">
                    {resource.sourceType}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{resource.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{resource.description}</p>
                </div>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Visit Resource
                  <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Contribute to Research</h2>
            <p className="text-lg text-gray-400 mb-8">
              Share your findings or suggest valuable research resources for the community.
            </p>
            <Link href="/community/submit">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit a Resource
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 