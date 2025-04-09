"use client";

import React from 'react';
import Link from 'next/link'
import {
  Building2, // Main Icon
  ExternalLink,
  Heart, // Healthcare
  DollarSign, // Finance
  Landmark, // Government
  Factory, // Manufacturing
  Zap, // Energy
  ShoppingCart, // Retail
  GraduationCap, // Education
  Cpu, // Technology
  Truck, // Transportation
  Signal, // Telecom
  ArrowLeft // Back link
} from 'lucide-react'

// Define structure for Top Industry Focus
interface TopIndustryFocus {
    id: string;
    name: string;
    icon: React.ElementType;
    landscape: string;
    vulnsThreats: string[];
    focusAreas: string[];
    resourceLink: { title: string; href: string; };
    colorClass: string; // For theming the card accent
}

// Data for Top 10 Industries
const topIndustries: TopIndustryFocus[] = [
    {
        id: "healthcare",
      name: "Healthcare",
        icon: Heart,
        landscape: "High-value target due to sensitive patient data (ePHI) and critical service delivery. Increasingly interconnected medical devices (IoMT) expand the attack surface.",
        vulnsThreats: ["Ransomware targeting patient care disruption", "Data breaches exposing ePHI", "Insider threats (accidental & malicious)", "IoMT vulnerabilities", "Phishing campaigns"],
        focusAreas: ["HIPAA/HITECH Compliance", "Endpoint Detection & Response (EDR)", "Medical device security programs", "Security awareness training", "Incident response planning"],
        resourceLink: { title: "HHS Health Sector Cybersecurity (HC3)", href: "https://www.hhs.gov/hc3/index.html" },
        colorClass: "border-red-500/40 hover:border-red-500/70"
    },
    {
        id: "financial",
      name: "Financial Services",
        icon: DollarSign,
        landscape: "Constant target for monetary gain and disruption. Focus on protecting financial assets, customer data, and maintaining trust. Highly regulated environment.",
        vulnsThreats: ["Credential stuffing & account takeover", "Banking trojans & malware", "ATM/PoS attacks", "Web application vulnerabilities (APIs)", "Supply chain risks"],
        focusAreas: ["Fraud detection & prevention (AI/ML)", "Multi-factor Authentication (MFA)", "API Security", "Threat intelligence sharing (FS-ISAC)", "Regulatory compliance (PCI DSS, NYDFS, etc.)"],
        resourceLink: { title: "Financial Services ISAC (FS-ISAC)", href: "https://www.fsisac.com/" },
        colorClass: "border-green-500/40 hover:border-green-500/70"
    },
     {
        id: "government",
        name: "Government / Public Sector",
        icon: Landmark,
        landscape: "Targeted by nation-states for espionage, disruption, and theft of sensitive citizen/national security data. Includes federal, state, local, tribal, and territorial (SLTT) levels.",
        vulnsThreats: ["Advanced Persistent Threats (APTs)", "Phishing & spear phishing", "Insider threats", "Legacy system vulnerabilities", "Supply chain attacks on contractors"],
        focusAreas: ["Zero Trust Architecture adoption", "Continuous monitoring & diagnostics (CDM)", "Supply chain risk management (SCRM)", "Information sharing (CISA, MS-ISAC)", "Election security"],
        resourceLink: { title: "CISA.gov (Cybersecurity & Infrastructure Security Agency)", href: "https://www.cisa.gov/" },
        colorClass: "border-blue-500/40 hover:border-blue-500/70"
    },
    {
        id: "manufacturing",
        name: "Manufacturing (ICS/OT)",
        icon: Factory,
        landscape: "Convergence of IT and Operational Technology (OT) creates new risks. Disruption of production processes can have significant physical and economic impact.",
        vulnsThreats: ["OT/ICS vulnerabilities (often unpatched)", "Ransomware impacting production", "Industrial espionage & IP theft", "Insecure remote access", "Lack of network segmentation"],
        focusAreas: ["IT/OT security convergence strategies", "Network segmentation & visibility", "Asset inventory & vulnerability management (OT specific)", "Secure remote access solutions", "Incident response for OT environments"],
        resourceLink: { title: "CISA ICS Advisories", href: "https://www.cisa.gov/ics/advisories" },
        colorClass: "border-gray-500/40 hover:border-gray-500/70"
    },
    {
        id: "energy",
        name: "Energy & Utilities",
        icon: Zap,
        landscape: "Critical infrastructure sector facing threats from nation-states and cybercriminals aiming for disruption or ransom. OT security is paramount.",
        vulnsThreats: ["Attacks on SCADA/ICS systems", "Grid disruption threats", "Physical security convergence challenges", "Supply chain vulnerabilities (hardware/software)", "Ransomware"],
        focusAreas: ["NERC CIP compliance", "OT monitoring & threat detection", "Physical & cybersecurity integration", "Supply chain security standards", "Incident response & recovery drills"],
        resourceLink: { title: "Energy ISAC (E-ISAC)", href: "https://www.eisac.com/" },
        colorClass: "border-yellow-500/40 hover:border-yellow-500/70"
    },
    {
        id: "retail",
        name: "Retail & E-commerce",
        icon: ShoppingCart,
        landscape: "Focus on protecting large volumes of customer PII and payment card data. E-commerce platforms are frequent targets.",
        vulnsThreats: ["Point-of-Sale (POS) malware", "Card-not-present fraud (e-commerce)", "Web skimming (Magecart)", "Account takeover", "DDoS attacks"],
        focusAreas: ["PCI DSS Compliance", "Secure SDLC for e-commerce platforms", "Web Application Firewalls (WAF)", "Bot mitigation", "Customer data protection & privacy"],
        resourceLink: { title: "PCI Security Standards Council", href: "https://www.pcisecuritystandards.org/" },
        colorClass: "border-orange-500/40 hover:border-orange-500/70"
    },
    {
        id: "education",
        name: "Education (K-12 & Higher Ed)",
        icon: GraduationCap,
        landscape: "Often under-resourced, managing diverse user bases (students, faculty, staff) and valuable research data. Ransomware is a significant threat.",
        vulnsThreats: ["Ransomware targeting operations & data", "Data breaches (student/staff PII, research)", "Phishing & social engineering", "DDoS attacks against online learning platforms", "Insider threats"],
        focusAreas: ["Security awareness training", "Endpoint security", "Network segmentation", "Data backup & recovery planning", "Multi-factor Authentication (MFA)"],
        resourceLink: { title: "EDUCAUSE Cybersecurity Program", href: "https://www.educause.edu/focus-areas-and-initiatives/policy-and-security/cybersecurity-program" },
        colorClass: "border-teal-500/40 hover:border-teal-500/70"
    },
     {
        id: "technology",
        name: "Technology",
        icon: Cpu,
        landscape: "Includes software developers, hardware manufacturers, and service providers. Often targeted for IP theft and supply chain attacks to reach downstream customers.",
        vulnsThreats: ["Software supply chain attacks", "IP theft", "Cloud service vulnerabilities/misconfigurations", "Zero-day exploits targeting products", "Insider threats"],
        focusAreas: ["Secure Software Development Lifecycle (SSDLC)", "Supply chain risk management (SBOMs)", "Cloud Security Posture Management (CSPM)", "Vulnerability disclosure programs", "Red teaming & penetration testing"],
        resourceLink: { title: "IT-ISAC (Technology Sector)", href: "https://www.it-isac.org/" },
        colorClass: "border-sky-500/40 hover:border-sky-500/70"
    },
    {
        id: "transportation",
        name: "Transportation & Logistics",
        icon: Truck,
        landscape: "Increasingly connected systems (vehicles, tracking, scheduling) create new vectors. Disruption can have major economic and safety implications.",
        vulnsThreats: ["Ransomware impacting logistics & scheduling", "GPS spoofing/jamming", "Vehicle network vulnerabilities (CAN bus)", "Data breaches (customer/cargo info)", "Attacks on operational control systems"],
        focusAreas: ["Securing connected vehicle ecosystems", "OT security for logistics systems", "Supply chain visibility & security", "Data protection for cargo/passenger info", "Incident response for operational disruption"],
        resourceLink: { title: "Surface Transportation ISAC (ST-ISAC)", href: "https://www.st-isac.org/" }, // Note: Multiple ISACs exist
        colorClass: "border-lime-500/40 hover:border-lime-500/70"
    },
    {
        id: "telecom",
        name: "Telecommunications",
        icon: Signal,
        landscape: "Critical infrastructure providing connectivity. Targeted for espionage, disruption (DDoS), and access to downstream customer data/communications.",
        vulnsThreats: ["DDoS attacks against network infrastructure", "Signaling protocol vulnerabilities (SS7, Diameter)", "Network equipment vulnerabilities", "Insider threats", "Customer data breaches"],
        focusAreas: ["Network infrastructure security (routing, DNS)", "5G security implementation", "DDoS mitigation at scale", "Subscriber privacy protection", "Regulatory compliance (FCC, etc.)"],
        resourceLink: { title: "Communications ISAC (Comm-ISAC)", href: "https://www.commsisac.org/" },
        colorClass: "border-indigo-500/40 hover:border-indigo-500/70"
    }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section - Updated */}
      <div className="relative bg-gradient-to-b from-black via-pink-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.15),transparent_55%)] opacity-70"></div> 
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            {/* Pink Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              Industry Focus
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cybersecurity Across Industries
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore the unique cybersecurity landscape, common threats, vulnerabilities, and key focus areas for top targeted and developing industries.
            </p>
             {/* Back to Insights Link */}
             <Link href="/insights" className="mt-6 text-pink-400 hover:text-pink-300 flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Insights Hub
             </Link>
          </div>
        </div>
      </div>
      
      {/* Removed Jump Links Section */}
      
      {/* Main Content Grid - Top 10 Industries */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {topIndustries.map((industry) => (
            <IndustryFocusCard key={industry.id} {...industry} />
                        ))}
                      </div>
                    </div>

      {/* Removed other sections (Solutions, Compliance, Trends, Reports, CTA) */} 
                      </div>
  );
}

// New Helper component for Top Industry Focus Cards
const IndustryFocusCard: React.FC<TopIndustryFocus> = ({ id, name, icon: Icon, landscape, vulnsThreats, focusAreas, resourceLink, colorClass }) => {
  return (
     <div className={`bg-gray-900 border ${colorClass} rounded-lg p-6 shadow-lg h-full flex flex-col`}> 
       {/* Header */}
       <div className="flex items-center mb-4">
         <Icon className="w-8 h-8 text-pink-400 mr-4 flex-shrink-0" />
         <h3 className="text-2xl font-bold text-white">{name}</h3>
        </div>
       
       {/* Content Sections */}
       <div className="space-y-4 text-sm flex-grow">
                          <div>
             <h4 className="font-semibold text-pink-300 mb-1">Landscape Overview:</h4>
             <p className="text-gray-300">{landscape}</p>
                        </div>
                          <div>
             <h4 className="font-semibold text-pink-300 mb-1">Vulnerabilities & Threats:</h4>
             <ul className="list-disc list-inside space-y-1 text-gray-400">
               {vulnsThreats.map((item, index) => <li key={index}>{item}</li>)}
             </ul>
                        </div>
                        <div>
             <h4 className="font-semibold text-pink-300 mb-1">Security Focus Areas:</h4>
             <ul className="list-disc list-inside space-y-1 text-gray-400">
               {focusAreas.map((item, index) => <li key={index}>{item}</li>)}
             </ul>
          </div>
        </div>
       
       {/* Resource Link */}
       {resourceLink && (
         <a 
           href={resourceLink.href} 
           target="_blank" 
           rel="noopener noreferrer"
           className="mt-4 pt-3 border-t border-gray-700/50 inline-flex items-center text-sm text-pink-400 hover:text-pink-200 hover:underline"
         >
            {resourceLink.title} <ExternalLink className="w-3 h-3 ml-1.5" />
         </a>
       )}
                          </div>
  );
}; 