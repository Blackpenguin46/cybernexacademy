'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, ChevronUp, Milestone, GitBranch, CheckCircle } from 'lucide-react'

interface Roadmap {
  title: string;
  description: string;
  skills: string[];
  courses: string[];
  certifications: string[];
  tools: string[];
  jobFocus: string;
  steps: string[];
}

export default function LearningRoadmaps() {
  const [openRoadmap, setOpenRoadmap] = useState<string | null>(null);

  const roadmaps: Roadmap[] = [
    {
      title: "Cybersecurity Analyst",
      description: "Learn to monitor and protect systems from cyber threats",
      skills: ["Network security", "Threat detection", "SIEM", "Incident response", "Vulnerability management"],
      courses: ["Introduction to Cybersecurity", "Network Security Basics", "Threat Analysis"],
      certifications: ["CompTIA Security+", "CISSP", "CEH"],
      tools: ["Wireshark", "Nmap", "Metasploit", "Splunk"],
      jobFocus: "Monitor and protect systems from cyber threats",
      steps: [
        "Network Security Basics",
        "Operating System Security",
        "Web Security Fundamentals",
        "Cryptography Basics"
      ]
    },
    {
      title: "Ethical Hacker",
      description: "Master the art of finding and exploiting security vulnerabilities",
      skills: ["Penetration testing", "Vulnerability assessment", "Social engineering", "Cryptography"],
      courses: ["Ethical Hacking Fundamentals", "Web Application Security", "Network Penetration Testing"],
      certifications: ["CEH", "OSCP", "GPEN"],
      tools: ["Kali Linux", "Burp Suite", "Nessus", "Metasploit"],
      jobFocus: "Identify and exploit security vulnerabilities to improve system security",
      steps: [
        "Reconnaissance Techniques",
        "Vulnerability Assessment",
        "Exploitation Basics",
        "Report Writing"
      ]
    },
    {
      title: "Information Security Manager",
      description: "Learn to oversee and implement organizational security strategies",
      skills: ["Risk management", "Security policies", "Compliance", "Leadership"],
      courses: ["Information Security Management", "Cybersecurity Governance", "Security Auditing"],
      certifications: ["CISM", "CISSP-ISSMP", "CGEIT"],
      tools: ["GRC platforms", "SIEM tools", "Risk assessment frameworks"],
      jobFocus: "Oversee organization's overall security strategy and implementation",
      steps: [
        "Risk Management",
        "Security Policies",
        "Compliance",
        "Leadership"
      ]
    },
    {
      title: "Cloud Security Specialist",
      description: "Secure cloud infrastructure and applications",
      skills: ["Cloud architecture", "Identity and access management", "Data encryption", "Compliance in cloud environments"],
      courses: ["Cloud Security Fundamentals", "AWS/Azure/GCP Security", "DevSecOps for Cloud"],
      certifications: ["CCSP", "AWS Certified Security", "Azure Security Engineer"],
      tools: ["CloudTrail", "Azure Security Center", "Google Cloud Security Command Center"],
      jobFocus: "Secure cloud infrastructure and applications",
      steps: [
        "Cloud Architecture",
        "Identity and Access Management",
        "Data Encryption",
        "Compliance"
      ]
    },
    {
      title: "Security Software Developer",
      description: "Develop secure applications and implement security features in software",
      skills: ["Secure coding practices", "Application security", "Cryptography implementation", "Code analysis"],
      courses: ["Secure Coding in Java/Python", "Application Security Design", "Cryptography for Developers"],
      certifications: ["CSSLP", "GIAC Secure Software Programmer", "CertNexus CyberSec First Responder"],
      tools: ["Static code analysis tools", "Dynamic analysis tools", "Secure SDKs"],
      jobFocus: "Develop secure applications and implement security features in software",
      steps: [
        "Secure Coding Practices",
        "Application Security Design",
        "Cryptography Implementation",
        "Code Analysis"
      ]
    },
    {
      title: "Digital Forensics Analyst",
      description: "Investigate cybercrimes and recover digital evidence",
      skills: ["Computer forensics", "Network forensics", "Mobile device forensics", "Data recovery"],
      courses: ["Digital Forensics Fundamentals", "Network Forensics", "Mobile Device Forensics"],
      certifications: ["GCFA", "CFCE", "EnCE"],
      tools: ["EnCase", "FTK", "Autopsy", "Cellebrite"],
      jobFocus: "Investigate cybercrimes and recover digital evidence",
      steps: [
        "Digital Forensics Fundamentals",
        "Network Forensics",
        "Mobile Device Forensics",
        "Data Recovery"
      ]
    },
    {
      title: "Security Architect",
      description: "Design and oversee implementation of an organization's security infrastructure",
      skills: ["System architecture", "Network design", "Risk assessment", "Security protocols"],
      courses: ["Enterprise Security Architecture", "Network Security Design", "Cloud Security Architecture"],
      certifications: ["SABSA", "TOGAF", "CISSP-ISSAP"],
      tools: ["Visio", "Enterprise architecture tools", "Threat modeling tools"],
      jobFocus: "Design and oversee implementation of an organization's security infrastructure",
      steps: [
        "System Architecture",
        "Network Design",
        "Risk Assessment",
        "Security Protocols"
      ]
    },
    {
      title: "Incident Response Analyst",
      description: "Respond to and mitigate cybersecurity incidents",
      skills: ["Incident handling", "Malware analysis", "Network forensics", "Crisis management"],
      courses: ["Incident Response Planning", "Malware Analysis Techniques", "Cyber Crisis Management"],
      certifications: ["GCIH", "GCFA", "ECIH"],
      tools: ["SIEM tools", "Volatility", "TheHive", "MISP"],
      jobFocus: "Respond to and mitigate cybersecurity incidents",
      steps: [
        "Incident Handling",
        "Malware Analysis",
        "Network Forensics",
        "Crisis Management"
      ]
    },
    {
      title: "Compliance Analyst",
      description: "Ensure organizational compliance with security regulations and standards",
      skills: ["Regulatory knowledge", "Risk assessment", "Policy development", "Auditing"],
      courses: ["IT Governance", "Regulatory Compliance in Cybersecurity", "Security Auditing"],
      certifications: ["CISA", "CRISC", "CCSK"],
      tools: ["Compliance management software", "GRC platforms", "Audit tools"],
      jobFocus: "Ensure organizational compliance with security regulations and standards",
      steps: [
        "Regulatory Knowledge",
        "Risk Assessment",
        "Policy Development",
        "Auditing"
      ]
    },
    {
      title: "Threat Intelligence Analyst",
      description: "Analyze and disseminate information about potential cyber threats",
      skills: ["Threat analysis", "OSINT", "Malware analysis", "Threat hunting"],
      courses: ["Cyber Threat Intelligence", "OSINT Techniques", "Advanced Malware Analysis"],
      certifications: ["GCTI", "CTIA", "GCIA"],
      tools: ["ThreatConnect", "Maltego", "VirusTotal", "MISP"],
      jobFocus: "Analyze and disseminate information about potential cyber threats",
      steps: [
        "Threat Analysis",
        "OSINT Techniques",
        "Advanced Malware Analysis",
        "Threat Hunting"
      ]
    },
    {
      title: "IoT Security Specialist",
      description: "Secure Internet of Things devices and networks",
      skills: ["Embedded systems security", "Network protocols", "Hardware security", "Wireless security"],
      courses: ["IoT Security Fundamentals", "Embedded Systems Security", "Wireless Network Security"],
      certifications: ["CCNA CyberOps", "IoTSF Certified IoT Security Professional", "GICSP"],
      tools: ["Wireshark", "Nmap", "Shodan", "Firmware analysis tools"],
      jobFocus: "Secure Internet of Things devices and networks",
      steps: [
        "IoT Security Fundamentals",
        "Embedded Systems Security",
        "Wireless Network Security",
        "Security Practices"
      ]
    },
    {
      title: "Application Security Engineer",
      description: "Ensure security in the software development lifecycle",
      skills: ["Secure SDLC", "Web application security", "API security", "Secure coding practices"],
      courses: ["Secure Software Development", "Web Application Security", "API Security"],
      certifications: ["CSSLP", "GWEB", "CASE"],
      tools: ["OWASP ZAP", "Burp Suite", "SonarQube", "Checkmarx"],
      jobFocus: "Ensure security in the software development lifecycle",
      steps: [
        "Secure SDLC",
        "Web Application Security",
        "API Security",
        "Secure Coding Practices"
      ]
    },
    {
      title: "Security Operations Center (SOC) Analyst",
      description: "Monitor and analyze an organization's security operations",
      skills: ["Log analysis", "SIEM", "Incident triage", "Network monitoring"],
      courses: ["SOC Fundamentals", "SIEM Administration", "Network Security Monitoring"],
      certifications: ["CompTIA CySA+", "GCIA", "SSCP"],
      tools: ["Splunk", "ELK Stack", "QRadar", "AlienVault"],
      jobFocus: "Monitor and analyze an organization's security operations",
      steps: [
        "SOC Fundamentals",
        "SIEM Administration",
        "Network Security Monitoring",
        "Log Analysis"
      ]
    },
    {
      title: "Cryptographer",
      description: "Design and analyze cryptographic systems and protocols",
      skills: ["Advanced mathematics", "Cryptographic algorithms", "Protocol design", "Cryptanalysis"],
      courses: ["Applied Cryptography", "Cryptographic Protocols", "Quantum Cryptography"],
      certifications: ["GIAC GPYC", "IACR membership", "Custom vendor certifications"],
      tools: ["OpenSSL", "CrypTool", "SageMath", "Custom cryptographic libraries"],
      jobFocus: "Design and analyze cryptographic systems and protocols",
      steps: [
        "Advanced Mathematics",
        "Cryptographic Algorithms",
        "Protocol Design",
        "Cryptanalysis"
      ]
    },
    {
      title: "Red Team Operator",
      description: "Simulate real-world attacks to test an organization's defenses",
      skills: ["Advanced penetration testing", "Social engineering", "Physical security", "Adversary emulation"],
      courses: ["Advanced Red Team Tactics", "Social Engineering for Red Teams", "Adversary Emulation"],
      certifications: ["OSCP", "OSCE", "CARTP"],
      tools: ["Cobalt Strike", "PowerShell Empire", "Metasploit", "Custom exploitation tools"],
      jobFocus: "Simulate real-world attacks to test an organization's defenses",
      steps: [
        "Advanced Penetration Testing",
        "Social Engineering for Red Teams",
        "Adversary Emulation",
        "Custom Exploitation Tools"
      ]
    },
    {
      title: "Blue Team Analyst",
      description: "Defend against and respond to cyber attacks",
      skills: ["Defensive security", "Threat hunting", "Security hardening", "Intrusion detection"],
      courses: ["Blue Team Fundamentals", "Threat Hunting Techniques", "Security Monitoring and Analysis"],
      certifications: ["Blue Team Level 1 (BTL1)", "GDAT", "GCDA"],
      tools: ["Sysmon", "OSQuery", "ELK Stack", "Snort"],
      jobFocus: "Defend against and respond to cyber attacks",
      steps: [
        "Blue Team Fundamentals",
        "Threat Hunting Techniques",
        "Security Monitoring and Analysis",
        "Defensive Security"
      ]
    },
    {
      title: "DevSecOps Engineer",
      description: "Integrate security practices into the DevOps process",
      skills: ["CI/CD security", "Container security", "Infrastructure as Code", "Automated security testing"],
      courses: ["DevSecOps Fundamentals", "Secure CI/CD Pipelines", "Container and Kubernetes Security"],
      certifications: ["DevSecOps Foundation", "CKS (Certified Kubernetes Security Specialist)", "AWS DevOps Professional"],
      tools: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      jobFocus: "Integrate security practices into the DevOps process",
      steps: [
        "DevSecOps Fundamentals",
        "Secure CI/CD Pipelines",
        "Container and Kubernetes Security",
        "Security Practices"
      ]
    },
    {
      title: "Malware Analyst",
      description: "Analyze and understand the behavior of malicious software",
      skills: ["Reverse engineering", "Assembly language", "Behavioral analysis", "Sandboxing"],
      courses: ["Malware Analysis Techniques", "Reverse Engineering Malware", "Advanced Malware Analysis"],
      certifications: ["GREM", "CREA", "CNDA"],
      tools: ["IDA Pro", "OllyDbg", "Ghidra", "Cuckoo Sandbox"],
      jobFocus: "Analyze and understand the behavior of malicious software",
      steps: [
        "Malware Analysis Techniques",
        "Reverse Engineering Malware",
        "Advanced Malware Analysis",
        "Behavioral Analysis"
      ]
    },
    {
      title: "Security Awareness Trainer",
      description: "Develop and deliver security awareness training to employees",
      skills: ["Training development", "Social engineering awareness", "Communication", "Behavioral psychology"],
      courses: ["Cybersecurity Awareness Program Development", "Social Engineering Prevention", "Effective Security Communication"],
      certifications: ["SANS MGT433", "EC-Council Certified Security Awareness Specialist", "ISACA CSX Cybersecurity Fundamentals"],
      tools: ["Learning Management Systems", "Phishing simulation platforms", "Engagement measurement tools"],
      jobFocus: "Develop and deliver security awareness training to employees",
      steps: [
        "Training Development",
        "Social Engineering Awareness",
        "Effective Security Communication",
        "Cybersecurity Awareness Program Development"
      ]
    },
    {
      title: "Cyber Insurance Analyst",
      description: "Assess cyber risks and develop appropriate insurance policies",
      skills: ["Risk assessment", "Insurance policies", "Cybersecurity frameworks", "Financial analysis"],
      courses: ["Cyber Insurance Fundamentals", "Cyber Risk Quantification", "Cybersecurity for Insurance Professionals"],
      certifications: ["CPCU", "ARM-E", "CIPP"],
      tools: ["Risk modeling software", "Actuarial tools", "Cyber risk assessment platforms"],
      jobFocus: "Assess cyber risks and develop appropriate insurance policies",
      steps: [
        "Cyber Insurance Fundamentals",
        "Cyber Risk Quantification",
        "Cybersecurity for Insurance Professionals",
        "Risk Assessment"
      ]
    }
  ];

  const toggleRoadmap = (title: string) => {
    if (openRoadmap === title) {
      setOpenRoadmap(null);
    } else {
      setOpenRoadmap(title);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Career Roadmaps in Cybersecurity</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore detailed career paths in cybersecurity. Each roadmap provides a structured progression
        of skills, certifications, and tools needed to succeed in your chosen specialization.
      </p>

      <div className="space-y-4">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out flex justify-between items-center"
              onClick={() => toggleRoadmap(roadmap.title)}
            >
              <h2 className="text-xl font-semibold">{roadmap.title}</h2>
              {openRoadmap === roadmap.title ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openRoadmap === roadmap.title && (
              <div className="p-4 bg-gray-50 dark:bg-gray-900">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{roadmap.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Required Skills</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {roadmap.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Recommended Certifications</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {roadmap.certifications.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Essential Tools</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {roadmap.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Job Focus</h3>
                    <p className="text-gray-600 dark:text-gray-400">{roadmap.jobFocus}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">Recommended Courses</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {roadmap.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <Link 
                    href={`/learning-resources/roadmaps/${roadmap.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    View detailed roadmap <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Not sure which path to choose? Take our career assessment to find the best fit for your skills and interests.
        </p>
        <Link 
          href="/career-assessment"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 inline-flex items-center"
        >
          Take Career Assessment <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

