import Link from "next/link";
import { ArrowLeft, Shield, Users, BookOpen, Globe, Briefcase } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Link
        href="/advanced-professionals"
        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mb-6"
      >
        <ArrowLeft className="mr-2" />
        Back to Advanced Professionals
      </Link>

      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Leadership in Cybersecurity</h1>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Leadership in cybersecurity is about more than just technical expertise. It requires the ability to inspire
          teams, manage risks, and drive strategic initiatives that protect organizations from evolving threats. As an
          advanced professional, developing leadership skills is key to advancing your career and making a lasting impact
          in the field.
        </p>
      </section>

      {/* What is Cybersecurity Leadership? */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Shield className="mr-2" />
          What is Cybersecurity Leadership?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Cybersecurity leadership involves guiding teams and organizations to secure their digital assets, manage risks,
          and respond effectively to threats. Leaders in this field must balance technical knowledge with strategic
          thinking, communication, and decision-making skills.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Developing and implementing security strategies</li>
          <li>Building and managing high-performing teams</li>
          <li>Communicating risks and solutions to stakeholders</li>
          <li>Driving organizational change and security culture</li>
          <li>Staying ahead of emerging threats and technologies</li>
        </ul>
      </section>

      {/* Key Leadership Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Users className="mr-2" />
          Key Leadership Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Strategic Thinking",
              description: "Ability to align cybersecurity initiatives with business goals.",
            },
            {
              title: "Communication",
              description: "Effectively convey complex security concepts to non-technical stakeholders.",
            },
            {
              title: "Team Building",
              description: "Recruit, mentor, and lead high-performing cybersecurity teams.",
            },
            {
              title: "Risk Management",
              description: "Identify, assess, and mitigate risks to the organization.",
            },
            {
              title: "Decision-Making",
              description: "Make informed decisions under pressure during security incidents.",
            },
            {
              title: "Adaptability",
              description: "Stay ahead of evolving threats and technologies in the cybersecurity landscape.",
            },
          ].map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
          <Globe className="mr-2" />
          Resources for Cybersecurity Leaders
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
            </Link> - Access frameworks, tools, and best practices for cybersecurity leaders.
          </li>
          <li>
            <Link
              href="https://www.sans.org/cyber-security-leadership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              SANS Cybersecurity Leadership
            </Link> - Explore training and certifications for cybersecurity leaders.
          </li>
          <li>
            <Link
              href="https://www.csoonline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              CSO Online
            </Link> - Stay updated on the latest trends and insights in cybersecurity leadership.
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
              href="https://www.cyberleadershipinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cyber Leadership Institute
            </Link> - Access leadership programs and resources for cybersecurity professionals.
          </li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center justify-center">
          <Briefcase className="mr-2" />
          Ready to Lead in Cybersecurity?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Book a consultation with our experts to discuss your leadership goals and strategies in cybersecurity.
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

