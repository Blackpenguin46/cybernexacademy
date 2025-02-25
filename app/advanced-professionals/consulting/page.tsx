import Link from "next/link";
import { ArrowLeft, Globe, BookOpen, Shield, Users, Briefcase } from "lucide-react";

export default function ConsultingPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/advanced-professionals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Advanced Professionals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Consulting</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Cybersecurity consulting is a critical service that helps organizations protect their digital assets, comply
          with regulations, and mitigate risks. As an advanced professional, you can leverage consulting to enhance your
          expertise, solve complex challenges, and drive impactful security strategies for businesses.
        </p>
      </section>

      {/* What is Cybersecurity Consulting? */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <BookOpen className="mr-2" />
          What is Cybersecurity Consulting?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cybersecurity consulting involves providing expert advice and solutions to organizations to help them secure
          their systems, data, and networks. Consultants assess risks, design security frameworks, implement protective
          measures, and ensure compliance with industry standards.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Risk assessments and vulnerability analysis</li>
          <li>Design and implementation of security architectures</li>
          <li>Incident response and recovery planning</li>
          <li>Compliance with regulations like GDPR, HIPAA, and PCI-DSS</li>
          <li>Employee training and awareness programs</li>
        </ul>
      </section>

      {/* Key Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Shield className="mr-2" />
          Key Services Offered
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Risk Assessment",
              description: "Identify and evaluate potential risks to your organization's digital assets.",
            },
            {
              title: "Security Audits",
              description: "Conduct comprehensive audits to ensure compliance with industry standards.",
            },
            {
              title: "Incident Response",
              description: "Develop and implement plans to respond to and recover from security incidents.",
            },
            {
              title: "Penetration Testing",
              description: "Simulate cyberattacks to identify vulnerabilities in your systems.",
            },
            {
              title: "Security Training",
              description: "Train employees on best practices for cybersecurity and data protection.",
            },
            {
              title: "Compliance Consulting",
              description: "Ensure your organization meets regulatory requirements like GDPR, HIPAA, and PCI-DSS.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Resources for Cybersecurity Consultants
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="https://www.isaca.org/resources"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ISACA Resources
            </Link> - Access frameworks, tools, and best practices for cybersecurity professionals.
          </li>
          <li>
            <Link
              href="https://www.nist.gov/cyberframework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NIST Cybersecurity Framework
            </Link> - Learn about the NIST framework for improving critical infrastructure cybersecurity.
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
          Ready to Elevate Your Consulting Career?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss your cybersecurity consulting goals and strategies.
        </p>
        <Link
          href="/book-consultation"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Book a Consultation
        </Link>
      </section>
    </div>
  );
}

