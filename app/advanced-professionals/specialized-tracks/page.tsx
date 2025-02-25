import Link from 'next/link';
import { Book, ArrowLeft, Globe, Briefcase } from 'lucide-react';

export default function SpecializedTracksPage() {
  const tracks = [
    { name: "Cloud Security", description: "Advanced security strategies for cloud environments" },
    { name: "IoT Security", description: "Securing the Internet of Things devices and networks" },
    { name: "AI in Cybersecurity", description: "Leveraging artificial intelligence for advanced threat detection and response" },
    { name: "Quantum Cryptography", description: "Exploring the future of secure communication with quantum principles" },
    { name: "Blockchain Security", description: "Securing distributed ledger technologies and smart contracts" },
    { name: "Zero Trust Architecture", description: "Implementing a zero-trust security model for modern networks" },
    { name: "Threat Intelligence", description: "Developing and applying threat intelligence to proactively defend against cyberattacks" },
    { name: "Digital Forensics", description: "Investigating cyber incidents and analyzing digital evidence" },
    { name: "Red Teaming and Adversary Simulation", description: "Simulating real-world attacks to test and improve defenses" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Specialized Learning Tracks</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Specialized learning tracks allow you to dive deep into cutting-edge areas of cybersecurity, equipping you with
          the skills and knowledge to tackle the most complex challenges in the field. Explore these tracks to stay ahead
          in the rapidly evolving world of cybersecurity.
        </p>
      </section>

      {/* Why Specialized Tracks Matter Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Book className="mr-2" />
          Why Specialized Tracks Matter
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Specializing in a specific area of cybersecurity can help you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Develop expertise in high-demand areas</li>
          <li>Stand out in a competitive job market</li>
          <li>Solve complex, real-world security challenges</li>
          <li>Stay ahead of emerging threats and technologies</li>
          <li>Contribute to innovative solutions in the field</li>
        </ul>
      </section>

      {/* Top Specialized Tracks Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Book className="mr-2" />
          Top Specialized Tracks
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{track.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{track.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Resources for Further Learning
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://cloudsecurityalliance.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cloud Security Alliance (CSA)
            </Link> - Resources and best practices for cloud security.
          </li>
          <li>
            <Link
              href="https://www.iotsecurityfoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              IoT Security Foundation
            </Link> - Guidance and resources for securing IoT devices.
          </li>
          <li>
            <Link
              href="https://www.ibm.com/security/artificial-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              IBM AI in Cybersecurity
            </Link> - Insights and tools for leveraging AI in cybersecurity.
          </li>
          <li>
            <Link
              href="https://quantumcomputingreport.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Quantum Computing Report
            </Link> - Updates and resources on quantum cryptography.
          </li>
          <li>
            <Link
              href="https://www.blockchain-council.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Blockchain Council
            </Link> - Resources and certifications for blockchain security.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <Briefcase className="mr-2" />
          Ready to Specialize?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss your learning goals and create a personalized plan for
          specializing in cybersecurity.
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

