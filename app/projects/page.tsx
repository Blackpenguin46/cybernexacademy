import Link from 'next/link'
import { Code, Shield, Globe, Lock, Database, Cpu, Cloud, Wifi, Server, Smartphone, Users, Eye, Terminal, FileText, Bug, Video, BookOpen, PenToolIcon as Tool, Flag } from 'lucide-react'
import React from 'react'

interface Project {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  link: string;
}

interface ExternalResource {
  title: string;
  description: string;
  link: string;
  type: 'Lab' | 'Tutorial';
}

const projects: Project[] = [
  {
    title: "Build a Simple Firewall",
    description: "Create a basic firewall using Python to filter network traffic.",
    difficulty: "Beginner",
    category: "Network Security",
    link: "/projects/simple-firewall",
  },
  {
    title: "Develop a Password Manager",
    description: "Build a secure password manager application with encryption.",
    difficulty: "Intermediate",
    category: "Application Security",
    link: "/projects/password-manager",
  },
  {
    title: "Create a Network Intrusion Detection System",
    description: "Implement a basic NIDS using machine learning algorithms.",
    difficulty: "Advanced",
    category: "Network Security",
    link: "/projects/network-ids",
  },
  {
    title: "Web Vulnerability Scanner",
    description: "Develop a tool to scan websites for common security vulnerabilities.",
    difficulty: "Intermediate",
    category: "Web Security",
    link: "/projects/web-vulnerability-scanner",
  },
  {
    title: "Secure File Encryption Tool",
    description: "Build a tool to encrypt and decrypt files using strong encryption algorithms.",
    difficulty: "Beginner",
    category: "Cryptography",
    link: "/projects/file-encryption-tool",
  },
  {
    title: "Secure Chat Application",
    description: "Develop an end-to-end encrypted chat application.",
    difficulty: "Advanced",
    category: "Application Security",
    link: "/projects/secure-chat-app",
  },
  {
    title: "Wi-Fi Security Auditor",
    description: "Build a tool to audit Wi-Fi networks for vulnerabilities.",
    difficulty: "Intermediate",
    category: "Network Security",
    link: "/projects/wifi-security-auditor",
  },
  {
    title: "Malware Analysis Sandbox",
    description: "Create a sandboxed environment for safely analyzing malware.",
    difficulty: "Advanced",
    category: "Malware Analysis",
    link: "/projects/malware-analysis-sandbox",
  },
  {
    title: "IoT Device Security Scanner",
    description: "Develop a tool to scan and assess the security of IoT devices on a network.",
    difficulty: "Intermediate",
    category: "IoT Security",
    link: "/projects/iot-security-scanner",
  },
];

const externalResources: ExternalResource[] = [
  {
    title: "Building a Home Lab for Cybersecurity",
    description: "Step-by-step guide to setting up a home lab for cybersecurity practice.",
    link: "https://www.cybrary.it/blog/building-cybersecurity-home-lab/",
    type: "Lab",
  },
  {
    title: "Setting Up pfSense Firewall",
    description: "Comprehensive tutorial on installing and configuring pfSense firewall.",
    link: "https://www.youtube.com/watch?v=fsdm5uc_LsU",
    type: "Tutorial",
  },
  {
    title: "Web Application Penetration Testing",
    description: "Hands-on lab for learning web application penetration testing techniques.",
    link: "https://www.pentesterlab.com/",
    type: "Lab",
  },
  {
    title: "CTF Field Guide",
    description: "A guide to getting started with Capture The Flag competitions.",
    link: "https://trailofbits.github.io/ctf/",
    type: "Tutorial",
  },
  {
    title: "Building a SOC Lab with ELK Stack",
    description: "Tutorial on setting up a Security Operations Center lab using ELK Stack.",
    link: "https://www.youtube.com/watch?v=f5GYZs8vM2s",
    type: "Tutorial",
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Network Security":
      return Globe;
    case "Application Security":
      return Shield;
    case "Web Security":
      return Code;
    case "Cryptography":
      return Lock;
    case "Machine Learning Security":
      return Cpu;
    case "IoT Security":
      return Wifi;
    case "Malware Analysis":
      return Bug;
    default:
      return Shield;
  }
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Projects</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore hands-on cybersecurity projects to enhance your skills and build your portfolio. 
        These projects range from beginner to advanced levels and cover various aspects of cybersecurity.
      </p>

      {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
        <div key={level} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{level} Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(project => project.difficulty === level).map((project, index) => (
              <Link key={index} href={project.link} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {React.createElement(getCategoryIcon(project.category), { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Specialized Project Areas</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {[
          { title: "Home Lab Setup", icon: Server, link: "#home-lab" },
          { title: "Firewall Configuration", icon: Shield, link: "#firewall" },
          { title: "Penetration Testing", icon: Tool, link: "#pentest" },
          { title: "CTF Challenges", icon: Flag, link: "#ctf" },
        ].map((area, index) => (
          <Link key={index} href={area.link} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              {React.createElement(area.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{area.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">External Resources</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {externalResources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              {React.createElement(resource.type === 'Lab' ? BookOpen : Video, { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{resource.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{resource.type}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

