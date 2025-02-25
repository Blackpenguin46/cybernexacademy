import Link from 'next/link';
import { Award, ArrowLeft, BookOpen, Globe, Briefcase } from 'lucide-react';

export default function AdvancedCertificationsPage() {
  const certifications = [
    { name: "Offensive Security Certified Professional (OSCP)", description: "Hands-on penetration testing certification" },
    { name: "Certified Information Systems Security Professional (CISSP)", description: "Broad, management-focused security certification" },
    { name: "Certified Information Security Manager (CISM)", description: "Information security management certification" },
    { name: "GIAC Security Expert (GSE)", description: "Advanced, comprehensive technical security certification" },
    { name: "Certified Ethical Hacker (CEH)", description: "Ethical hacking and countermeasures certification" },
    { name: "Certified Cloud Security Professional (CCSP)", description: "Cloud security architecture and governance certification" },
    { name: "Certified Information Systems Auditor (CISA)", description: "Auditing, control, and assurance certification" },
    { name: "GIAC Penetration Tester (GPEN)", description: "Penetration testing methodologies and techniques certification" },
    { name: "Certified Red Team Operations Professional (CRTOP)", description: "Advanced red teaming and adversary simulation certification" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Advanced Certifications</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Advanced certifications are a powerful way to validate your expertise, stand out in the cybersecurity field, and
          open doors to new career opportunities. Explore these certifications to take your career to the next level.
        </p>
      </section>

      {/* Why Certifications Matter Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Award className="mr-2" />
          Why Certifications Matter
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Certifications demonstrate your commitment to professional development and validate your skills to employers. They
          can help you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Stand out in a competitive job market</li>
          <li>Gain recognition for your expertise</li>
          <li>Increase your earning potential</li>
          <li>Stay updated on the latest industry trends and best practices</li>
          <li>Build credibility with clients and stakeholders</li>
        </ul>
      </section>

      {/* Top Certifications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          Top Certifications for Advanced Professionals
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{cert.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Resources for Certification Preparation
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://www.offensive-security.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Offensive Security
            </Link> - Resources for OSCP and other penetration testing certifications.
          </li>
          <li>
            <Link
              href="https://www.isc2.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              (ISC)²
            </Link> - Official site for CISSP, CCSP, and other certifications.
          </li>
          <li>
            <Link
              href="https://www.isaca.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISACA
            </Link> - Resources for CISM, CISA, and other certifications.
          </li>
          <li>
            <Link
              href="https://www.giac.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GIAC
            </Link> - Official site for GSE, GPEN, and other certifications.
          </li>
          <li>
            <Link
              href="https://www.eccouncil.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              EC-Council
            </Link> - Resources for CEH and other ethical hacking certifications.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <Briefcase className="mr-2" />
          Ready to Advance Your Career?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss your certification goals and create a personalized plan.
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

