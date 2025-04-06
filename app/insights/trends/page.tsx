"use client"

import React, { useState } from 'react';
import {
  TrendingUp, ExternalLink, Clock, Tag, ChevronRight, ArrowUpRight, Globe, AlertTriangle,
  Shield, Filter, X, Code, Server, Lock, Database, Zap, Cloud, Brain, Cpu, ArrowLeft,
  Scale, FileText, Lightbulb, User, Search, LinkIcon // Add LinkIcon back
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CategoryFilter from '@/app/components/CategoryFilter';

// Define interface for Category
interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Updated Interface for Emerging Trend Analysis
interface EmergingTrend {
  title: string;
  icon: React.ElementType;
  category: string;
  description: string; // Short summary
  keyDevelopments: string[]; // What's happening now
  potentialImpact: string[]; // Why it matters
  challenges: string[]; // Obstacles or risks
  futureOutlook: string[]; // Predictions/Where it's heading
  resources?: { title: string; url: string; type: 'web' | 'pdf' }[]; // Add resources array
}

// Interface for Regulatory Trend
interface RegulatoryTrend {
    area: string;
    trend: string;
    implications: string[];
    status: string;
}

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories for filtering
  const categories: Category[] = [
    { id: 'all', name: 'All Trends', icon: TrendingUp },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'architecture', name: 'Security Architecture', icon: Shield },
    { id: 'cloud', name: 'Cloud Security', icon: Cloud },
    { id: 'data', name: 'Data Protection & Privacy', icon: Database },
    { id: 'threat', name: 'Threat Landscape Evolution', icon: AlertTriangle },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu },
    { id: 'identity', name: 'Identity & Access', icon: User }, // Added User Icon
    { id: 'operations', name: 'Security Operations', icon: Zap },
    // Removed cryptography as separate, often part of others now
  ];

  // --- Updated Emerging Trends Data ---
  const emergingTrends: EmergingTrend[] = [
    {
      title: "AI/ML in Security Operations",
      icon: Brain,
      category: 'ai-ml',
      description: "Leveraging AI and Machine Learning to enhance threat detection, automate response, and predict attacks.",
      keyDevelopments: [
        "Increased adoption of AI-powered SIEM/SOAR platforms.",
        "Development of AI for anomaly detection in network traffic and user behavior.",
        "Use of ML for malware analysis and classification.",
        "AI-driven phishing detection and prevention."
      ],
      potentialImpact: [
        "Faster incident response times.",
        "Improved accuracy in threat detection, reducing false positives.",
        "Ability to handle increasing volume and sophistication of attacks.",
        "Potential for proactive threat hunting and prediction."
      ],
      challenges: [
        "Adversarial AI attacks designed to fool security models.",
        "Need for large, high-quality datasets for training.",
        "Explainability of AI decisions (black box problem).",
        "Skills gap in managing and interpreting AI security tools."
      ],
      futureOutlook: [
        "Greater integration of AI across all security domains.",
        "Emergence of autonomous security systems.",
        "Increased focus on securing AI models themselves."
      ],
      resources: [
        { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", type: 'web' },
        { title: "ENISA Report: AI & Cybersecurity (PDF)", url: "#", type: 'pdf' }, // Placeholder PDF
        { title: "Gartner: AI in Security Operations", url: "#", type: 'web' } // Placeholder Web Link
      ]
    },
    {
      title: "Zero Trust Architecture Adoption",
      icon: Shield,
      category: 'architecture',
      description: "Shifting from perimeter-based security to a model verifying every access request, regardless of location.",
      keyDevelopments: [
        "Increased vendor offerings covering different pillars of Zero Trust (Identity, Endpoint, Network).",
        "Integration of ZT principles into SASE and SSE frameworks.",
        "Focus on micro-segmentation and granular access controls.",
        "Emphasis on continuous monitoring and validation."
      ],
      potentialImpact: [
        "Reduced attack surface and lateral movement.",
        "Improved security for remote workforces and cloud environments.",
        "Better compliance with data protection regulations.",
        "Enhanced user experience through conditional access policies."
      ],
      challenges: [
        "Complexity in implementation, especially in legacy environments.",
        "Requires significant changes in organizational culture and processes.",
        "Potential for misconfiguration leading to security gaps or access issues.",
        "Integrating diverse vendor solutions into a cohesive architecture."
      ],
      futureOutlook: [
        "Zero Trust becomes the default security model for new deployments.",
        "Maturation of ZT orchestration and automation tools.",
        "Increased focus on data-centric Zero Trust."
      ],
      resources: [
        { title: "NIST SP 800-207: Zero Trust Architecture (PDF)", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf", type: 'pdf' },
        { title: "CISA Zero Trust Maturity Model", url: "https://www.cisa.gov/zero-trust-maturity-model", type: 'web' },
      ]
    },
    {
      title: "Post-Quantum Cryptography (PQC)",
      icon: Cpu,
      category: 'quantum',
      description: "Preparing cryptographic systems to withstand attacks from future large-scale quantum computers.",
      keyDevelopments: [
        "NIST standardization process selecting PQC algorithms.",
        "Research into hybrid approaches combining classical and PQC algorithms.",
        "Development of crypto-agility strategies for easier migration.",
        "Initial testing and pilots by government agencies and large enterprises."
      ],
      potentialImpact: [
        "Ensuring long-term confidentiality of sensitive data.",
        "Protecting critical infrastructure and communication systems.",
        "Maintaining the integrity of digital signatures and secure transactions."
      ],
      challenges: [
        "Performance overhead of some PQC algorithms.",
        "Complexity of migrating existing systems and infrastructure.",
        "Uncertainty about the exact timeline for fault-tolerant quantum computers.",
        "Need for widespread adoption and interoperability."
      ],
      futureOutlook: [
        "Gradual migration to PQC standards over the next 5-15 years.",
        "Emergence of quantum-resistant hardware security modules (HSMs).",
        "Development of quantum key distribution (QKD) as a complementary technology."
      ],
      resources: [
        { title: "NIST PQC Standardization Project", url: "https://csrc.nist.gov/Projects/post-quantum-cryptography", type: 'web' },
        { title: "ETSI Quantum-Safe Cryptography (QSC)", url: "https://www.etsi.org/technologies/quantum-safe-cryptography", type: 'web' },
         { title: "Cloud Security Alliance: Quantum Risk (PDF)", url: "#", type: 'pdf' } // Placeholder PDF
      ]
    },
     {
      title: "Cloud Security Posture Management (CSPM) Evolution",
      icon: Cloud,
      category: 'cloud',
      description: "Automating the identification and remediation of misconfigurations and risks in multi-cloud environments.",
      keyDevelopments: [
        "Integration of CSPM with CIEM (Cloud Infrastructure Entitlement Management) and CWPP (Cloud Workload Protection Platforms).",
        "Shift towards proactive risk prevention and automated remediation.",
        "Increased focus on compliance monitoring and reporting within CSPM tools.",
        "AI/ML being used for anomaly detection and risk prioritization."
      ],
      potentialImpact: [
        "Reduced risk of data breaches due to cloud misconfigurations.",
        "Improved compliance adherence (e.g., CIS benchmarks, PCI-DSS, HIPAA).",
        "Better visibility and control over complex cloud estates.",
        "Streamlined security operations for cloud environments."
      ],
      challenges: [
        "Keeping up with the rapid pace of cloud service provider changes.",
        "Managing alert fatigue from numerous findings.",
        "Integrating CSPM across multiple cloud providers consistently.",
        "Ensuring remediation actions don't disrupt business operations."
      ],
      futureOutlook: [
        "CSPM converging into broader Cloud-Native Application Protection Platforms (CNAPP).",
        "Deeper integration with Infrastructure as Code (IaC) security scanning.",
        "More sophisticated risk scoring and prioritization based on business context."
      ],
      resources: [
        { title: "Gartner Market Guide for CSPM", url: "#", type: 'web' }, // Placeholder
        { title: "OWASP Cloud Security Project", url: "https://owasp.org/www-project-cloud-security/", type: 'web' }
      ]
    },
    {
      title: "Cyber Resilience and Incident Preparedness",
      icon: Zap, // Using Zap, maybe ShieldCheck better?
      category: 'operations',
      description: "Focus shifting beyond prevention to ensuring business continuity and rapid recovery during and after attacks.",
      keyDevelopments: [
        "Increased adoption of comprehensive Incident Response (IR) retainers and playbooks.",
        "Emphasis on regular tabletop exercises and attack simulations.",
        "Focus on robust backup and disaster recovery strategies, including immutable backups.",
        "Growing importance of cyber insurance and risk transfer mechanisms."
      ],
      potentialImpact: [
        "Minimized downtime and financial losses from incidents.",
        "Improved stakeholder confidence and regulatory compliance.",
        "Faster recovery of critical systems and data.",
        "Learning from incidents to continuously improve defenses."
      ],
      challenges: [
        "Complexity of simulating realistic, large-scale attacks.",
        "Ensuring backups are secure and recoverable (testing is key).",
        "Cost and availability of comprehensive cyber insurance.",
        "Maintaining up-to-date IR plans in rapidly changing environments."
      ],
      futureOutlook: [
        "Greater board-level focus on cyber resilience metrics.",
        "Increased use of automation in incident response and recovery.",
        "Tighter integration between cybersecurity and business continuity planning."
      ],
      resources: [
        { title: "NIST SP 800-61: Incident Handling Guide (PDF)", url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf", type: 'pdf' },
        { title: "ISO 22301: Business Continuity Management", url: "https://www.iso.org/standard/75106.html", type: 'web' }
      ]
    },
  ];

  // --- NEW Regulatory Trends Data ---
  const regulatoryTrends: RegulatoryTrend[] = [
    {
        area: "Data Privacy",
        trend: "Global Proliferation & Stricter Enforcement",
        implications: [
            "Need for robust data mapping, consent management, and DSAR processes.",
            "Increased fines and reputational damage for non-compliance (e.g., GDPR, CCPA/CPRA).",
            "Focus on Privacy Enhancing Technologies (PETs).",
            "Requirements for cross-border data transfer mechanisms."
        ],
        status: "Ongoing Evolution"
    },
    {
        area: "AI Governance & Ethics",
        trend: "Emergence of AI-Specific Regulations",
        implications: [
            "Requirements for transparency, fairness, and accountability in AI systems.",
            "Need for AI risk assessments and impact analyses.",
            "Focus on data bias mitigation and secure AI development practices.",
            "Potential restrictions on high-risk AI applications."
        ],
        status: "Developing / Early Stages"
    },
    {
        area: "Critical Infrastructure Security",
        trend: "Increased Mandates & Reporting Requirements",
        implications: [
            "Stricter security standards for OT/ICS environments (e.g., NERC CIP, NIS2 Directive).",
            "Mandatory incident reporting timelines (e.g., CIRCIA in US).",
            "Emphasis on supply chain security for critical components.",
            "Requirements for regular risk assessments and security audits."
        ],
        status: "Actively Increasing"
    },
    {
        area: "Software Supply Chain Security",
        trend: "Focus on Transparency & Integrity",
        implications: [
            "Requirements for Software Bill of Materials (SBOMs).",
            "Emphasis on secure software development lifecycle (SSDLC) practices.",
            "Increased scrutiny of open-source software dependencies.",
            "Potential liability shifts for software vulnerabilities."
        ],
        status: "Rapidly Developing"
    }
  ];

  // Filter trends based on selected category
  const filteredTrends = emergingTrends.filter(trend =>
    selectedCategory === 'all' || trend.category === selectedCategory
  );

  // Check if any content matches the filter
  const hasTrends = filteredTrends.length > 0;

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Updated */}
      <div className="relative bg-gradient-to-b from-black via-indigo-900/40 to-gray-950 pt-24 pb-16">
         {/* Using Indigo for Trends theme */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Emerging Cybersecurity Trends
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              Explore the future directions of cybersecurity, including new technologies, evolving methodologies, potential impacts, and regulatory shifts.
            </p>
            <Link href="/insights" className="text-indigo-400 hover:text-indigo-300 flex items-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Overview
            </Link>
          </div>
        </div>
      </div>

      {/* --- Main Emerging Trends Section --- */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-semibold text-white mb-2 flex items-center">
          <Lightbulb className="w-7 h-7 mr-3 text-indigo-400" />
          Key Emerging Trends Analysis
        </h2>
        <p className="text-gray-400 mb-6">Analysis of significant trends shaping the cybersecurity landscape.</p>

        {/* Category Filter (Keep this) */}
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-3 z-20 border-b border-gray-800 mb-6">
           <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              accentColor="indigo"
            />
        </div>

        {/* Trend Count */}
        <p className="text-gray-400 text-sm mb-6">
            Showing {filteredTrends.length} trend analysis report{filteredTrends.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' ? ` in category: ${categories.find(c => c.id === selectedCategory)?.name || selectedCategory}` : ''}.
        </p>

        {/* Trend List - Updated Card Structure */}
        {filteredTrends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTrends.map((trend, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-indigo-500/50 transition-colors">
                {/* Card Header */}
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-indigo-900/30 rounded-md mr-3">
                    <trend.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 flex-grow">
                    {trend.title}
                  </h3>
                </div>

                 {/* Card Body - Analysis */}
                <div className="text-sm text-gray-300 space-y-4 mb-4 flex-grow">
                    <p className="italic">{trend.description}</p>
                    <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Key Developments:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                            {trend.keyDevelopments.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Potential Impact:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                             {trend.potentialImpact.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Challenges:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                             {trend.challenges.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-indigo-300 mb-1">Future Outlook:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5">
                            {trend.futureOutlook.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                {/* NEW Resources Section */} 
                {trend.resources && trend.resources.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-gray-700/50">
                        <h4 className="font-semibold text-indigo-300 mb-1 text-sm">Further Reading / Resources:</h4>
                        <ul className="space-y-1">
                            {trend.resources.map((res, i) => (
                            <li key={i}>
                                <a 
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-indigo-400 hover:text-indigo-200 hover:underline flex items-center"
                                >
                                {res.type === 'pdf' ? (
                                    <FileText className="w-3 h-3 mr-1.5 flex-shrink-0" />
                                ) : (
                                    <LinkIcon className="w-3 h-3 mr-1.5 flex-shrink-0" />
                                )}
                                {res.title}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}

                 {/* Category Footer */}
                 <div className="mt-auto pt-2 border-t border-gray-700/50">
                     <span className="text-xs bg-indigo-900/40 text-indigo-400 px-2 py-1 rounded">
                        Category: {categories.find(c => c.id === trend.category)?.name || trend.category}
                     </span>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
            <div className="text-indigo-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No Trends Found</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category.</p>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('all')}
              className="text-indigo-400 border-indigo-600 hover:bg-indigo-900/30 hover:text-indigo-300"
            >
              <X className="w-4 h-4 mr-2" /> Clear Filter
            </Button>
          </div>
        )}
      </div>

      {/* --- NEW Regulatory Landscape Section --- */}
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-semibold text-white mb-2 flex items-center">
          <Scale className="w-7 h-7 mr-3 text-indigo-400" />
          Regulatory Landscape & Impact
        </h2>
        <p className="text-gray-400 mb-6">Key regulatory developments influencing cybersecurity practices.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulatoryTrends.map((reg, index) => (
                 <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-indigo-500/50 transition-colors">
                     <h3 className="text-lg font-semibold text-white mb-1">
                         {reg.area}
                     </h3>
                     <p className="text-sm font-medium text-indigo-300 mb-2">{reg.trend}</p>
                     <div>
                        <h4 className="font-semibold text-gray-300 mb-1 text-xs uppercase tracking-wider">Implications:</h4>
                        <ul className="list-disc list-inside pl-2 text-gray-400 text-xs space-y-0.5 mb-3">
                           {reg.implications.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                     <div className="mt-auto pt-2">
                         <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                            Status: {reg.status}
                         </span>
                     </div>
                 </div>
            ))}
        </div>
      </div>

    </div>
  );
}

// PlayIcon component for video resources
function PlayIcon({ className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`w-5 h-5 ${className}`}
    >
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
    </svg>
  );
} 