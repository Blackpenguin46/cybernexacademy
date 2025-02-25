import Link from "next/link";
import { ArrowLeft, Wrench, Globe, Briefcase, PlayCircle } from "lucide-react";

export default function AdvancedToolsPage() {
  const tools = [
    {
      name: "Metasploit",
      description: "A penetration testing framework for developing and executing exploit code.",
      useCase: "Used for vulnerability assessment, exploit development, and post-exploitation tasks.",
      videoLink: "https://www.youtube.com/watch?v=example1",
    },
    {
      name: "Burp Suite",
      description: "A web application security testing tool for identifying vulnerabilities.",
      useCase: "Ideal for scanning, crawling, and exploiting web application vulnerabilities.",
      videoLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      name: "Wireshark",
      description: "A network protocol analyzer for troubleshooting and analysis.",
      useCase: "Used for capturing and analyzing network traffic in real-time.",
      videoLink: "https://www.youtube.com/watch?v=example3",
    },
    {
      name: "Nmap",
      description: "A network scanning tool for discovering hosts and services.",
      useCase: "Perfect for network inventory, vulnerability scanning, and security auditing.",
      videoLink: "https://www.youtube.com/watch?v=example4",
    },
    {
      name: "Splunk",
      description: "A SIEM tool for monitoring, searching, and analyzing machine-generated data.",
      useCase: "Used for log analysis, threat detection, and incident response.",
      videoLink: "https://www.youtube.com/watch?v=example5",
    },
    {
      name: "Kali Linux",
      description: "A penetration testing platform with a suite of security tools.",
      useCase: "Ideal for ethical hacking, penetration testing, and security research.",
      videoLink: "https://www.youtube.com/watch?v=example6",
    },
    {
      name: "Cuckoo Sandbox",
      description: "An automated malware analysis system.",
      useCase: "Used for analyzing suspicious files and URLs in a controlled environment.",
      videoLink: "https://www.youtube.com/watch?v=example7",
    },
    {
      name: "Snort",
      description: "An open-source intrusion detection and prevention system.",
      useCase: "Perfect for real-time traffic analysis and packet logging.",
      videoLink: "https://www.youtube.com/watch?v=example8",
    },
    {
      name: "Ghidra",
      description: "A reverse engineering tool developed by the NSA.",
      useCase: "Used for analyzing compiled code and understanding software behavior.",
      videoLink: "https://www.youtube.com/watch?v=example9",
    },
    {
      name: "Zeek (formerly Bro)",
      description: "A network analysis framework for monitoring and detecting threats.",
      useCase: "Ideal for network security monitoring and forensic analysis.",
      videoLink: "https://www.youtube.com/watch?v=example10",
    },
    {
      name: "OpenVAS",
      description: "A vulnerability scanner for identifying security issues in systems.",
      useCase: "Used for vulnerability management and compliance auditing.",
      videoLink: "https://www.youtube.com/watch?v=example11",
    },
    {
      name: "OSSEC",
      description: "An open-source host-based intrusion detection system.",
      useCase: "Perfect for log analysis, file integrity checking, and rootkit detection.",
      videoLink: "https://www.youtube.com/watch?v=example12",
    },
  ];

  const enterpriseTools = [
    {
      name: "Palo Alto Networks Cortex XDR",
      description: "An extended detection and response platform for advanced threat prevention.",
      useCase: "Used for endpoint protection, threat detection, and automated response.",
      videoLink: "https://www.youtube.com/watch?v=example13",
    },
    {
      name: "CrowdStrike Falcon",
      description: "A cloud-native endpoint protection platform for enterprise security.",
      useCase: "Ideal for real-time threat detection, response, and threat intelligence.",
      videoLink: "https://www.youtube.com/watch?v=example14",
    },
    {
      name: "FireEye Helix",
      description: "A security operations platform for threat detection and response.",
      useCase: "Used for SIEM, SOAR, and threat intelligence integration.",
      videoLink: "https://www.youtube.com/watch?v=example15",
    },
    {
      name: "Darktrace",
      description: "An AI-powered cyber defense platform for autonomous threat detection.",
      useCase: "Ideal for detecting and responding to advanced threats in real-time.",
      videoLink: "https://www.youtube.com/watch?v=example16",
    },
    {
      name: "Tenable.io",
      description: "A vulnerability management platform for identifying and mitigating risks.",
      useCase: "Used for asset discovery, vulnerability assessment, and compliance monitoring.",
      videoLink: "https://www.youtube.com/watch?v=example17",
    },
    {
      name: "Qualys Cloud Platform",
      description: "A cloud-based security and compliance platform.",
      useCase: "Ideal for vulnerability management, policy compliance, and web application scanning.",
      videoLink: "https://www.youtube.com/watch?v=example18",
    },
    {
      name: "Symantec Endpoint Protection",
      description: "An endpoint security solution for advanced threat prevention.",
      useCase: "Used for malware protection, intrusion prevention, and device control.",
      videoLink: "https://www.youtube.com/watch?v=example19",
    },
    {
      name: "McAfee MVISION",
      description: "A cloud-native security platform for data protection and threat prevention.",
      useCase: "Ideal for cloud security posture management and data loss prevention.",
      videoLink: "https://www.youtube.com/watch?v=example20",
    },
    {
      name: "Trend Micro Apex One",
      description: "An endpoint security solution for advanced threat detection and response.",
      useCase: "Used for malware protection, ransomware defense, and endpoint detection and response (EDR).",
      videoLink: "https://www.youtube.com/watch?v=example21",
    },
    {
      name: "IBM QRadar",
      description: "A SIEM platform for threat detection and incident response.",
      useCase: "Ideal for log management, threat intelligence, and security analytics.",
      videoLink: "https://www.youtube.com/watch?v=example22",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/advanced-professionals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Advanced Professionals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Advanced Tools and Techniques</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Advanced tools and techniques are essential for cybersecurity professionals to identify vulnerabilities, analyze
          threats, and protect systems. Explore these tools and resources to enhance your skills and stay ahead in the
          ever-evolving cybersecurity landscape.
        </p>
      </section>

      {/* Why Advanced Tools Matter Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Wrench className="mr-2" />
          Why Advanced Tools Matter
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Using advanced tools and techniques can help you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Identify and mitigate vulnerabilities effectively</li>
          <li>Automate repetitive tasks to save time</li>
          <li>Analyze and respond to threats in real-time</li>
          <li>Stay ahead of attackers with cutting-edge technology</li>
          <li>Enhance your ability to secure complex systems</li>
        </ul>
      </section>

      {/* Tools Showcase Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Wrench className="mr-2" />
          Tools Showcase
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Use Case:</strong> {tool.useCase}
              </p>
              <Link
                href={tool.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                <PlayCircle className="mr-2" />
                Watch Tutorial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Tools Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Wrench className="mr-2" />
          Enterprise Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enterpriseTools.map((tool, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{tool.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Use Case:</strong> {tool.useCase}
              </p>
              <Link
                href={tool.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                <PlayCircle className="mr-2" />
                Watch Tutorial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Resources for Learning
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://www.metasploit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Metasploit Official Site
            </Link> - Access frameworks, tools, and best practices for cybersecurity professionals.
          </li>
          <li>
            <Link
              href="https://www.sans.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS Institute
            </Link> - Explore training and certifications for cybersecurity professionals.
          </li>
          <li>
            <Link
              href="https://www.owasp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              OWASP
            </Link> - Discover resources for securing web applications.
          </li>
          <li>
            <Link
              href="https://www.cisa.gov/cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CISA Cybersecurity Resources
            </Link> - Access tools and guidelines from the Cybersecurity and Infrastructure Security Agency.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <Briefcase className="mr-2" />
          Ready to Master Advanced Tools?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss how to effectively use advanced tools and techniques in your
          cybersecurity practice.
        </p>
        <Link
          href="/book-consultation"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Book a Consultation
        </Link>
      </section>

      {/* Back Link */}
      <div className="mt-12">
        <Link href="/advanced-professionals" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2" />
          Back to Advanced Professionals
        </Link>
      </div>
    </div>
  );
}

