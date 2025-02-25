import Link from "next/link";
import { ArrowLeft, TrendingUp, Globe, Briefcase } from "lucide-react";

export default function ResearchAndTrendsPage() {
  const trends = [
    { name: "Zero Trust Architecture", description: "Adopting a zero-trust model to enhance security" },
    { name: "AI and Machine Learning in Cybersecurity", description: "Leveraging AI for threat detection and response" },
    { name: "Quantum Computing and Cryptography", description: "Preparing for the impact of quantum computing on encryption" },
    { name: "Ransomware Defense Strategies", description: "Developing proactive measures to combat ransomware attacks" },
    { name: "Cloud Security Posture Management", description: "Ensuring robust security in cloud environments" },
    { name: "IoT Security Challenges", description: "Addressing vulnerabilities in IoT devices and networks" },
    { name: "Supply Chain Security", description: "Securing the software supply chain against attacks" },
    { name: "Privacy-Enhancing Technologies", description: "Implementing technologies to protect user privacy" },
    { name: "Cybersecurity Workforce Development", description: "Bridging the skills gap in the cybersecurity industry" },
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

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Research and Industry Trends</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Staying informed about the latest research and industry trends is crucial for cybersecurity professionals. It
          helps you anticipate emerging threats, adopt innovative solutions, and maintain a competitive edge in the field.
        </p>
      </section>

      {/* Why Research and Trends Matter Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <TrendingUp className="mr-2" />
          Why Research and Trends Matter
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Keeping up with research and trends can help you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Stay ahead of emerging threats and vulnerabilities</li>
          <li>Adopt cutting-edge technologies and methodologies</li>
          <li>Make informed decisions about security strategies</li>
          <li>Enhance your organization's resilience to cyberattacks</li>
          <li>Contribute to the advancement of the cybersecurity field</li>
        </ul>
      </section>

      {/* Latest Trends Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <TrendingUp className="mr-2" />
          Latest Trends in Cybersecurity
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trends.map((trend, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{trend.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Research Resources
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://www.sans.org/white-papers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS White Papers
            </Link> - Access in-depth research and analysis on cybersecurity topics.
          </li>
          <li>
            <Link
              href="https://www.csoonline.com/research"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CSO Online Research
            </Link> - Explore the latest cybersecurity research and reports.
          </li>
          <li>
            <Link
              href="https://www.nist.gov/cyberframework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Cybersecurity Framework
            </Link> - Learn about the framework for improving critical infrastructure cybersecurity.
          </li>
          <li>
            <Link
              href="https://www.isc2.org/research"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              (ISC)² Research
            </Link> - Access research and insights from the International Information System Security Certification Consortium.
          </li>
          <li>
            <Link
              href="https://www.cisa.gov/cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CISA Cybersecurity Resources
            </Link> - Explore tools and guidelines from the Cybersecurity and Infrastructure Security Agency.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <Briefcase className="mr-2" />
          Ready to Stay Ahead?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss the latest research and trends in cybersecurity.
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

