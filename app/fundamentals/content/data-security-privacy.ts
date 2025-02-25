import type { DomainContent } from "../[domain]/page"

const domainContent: DomainContent = {
  title: "Data Security and Privacy",
  description:
    "Data Security and Privacy focuses on protecting sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction. It encompasses the practices, policies, and technologies used to ensure data confidentiality, integrity, and availability while respecting individuals' privacy rights.",
  importance:
    "In our increasingly digital world, data has become one of the most valuable assets for individuals and organizations. Protecting this data is crucial for maintaining trust, complying with regulations, and safeguarding against financial and reputational damage. As cyber threats evolve and data breaches become more common, robust data security and privacy measures are essential for protecting personal information, intellectual property, and critical business data.",
  useCases: [
    "Implementing encryption for sensitive data storage and transmission",
    "Designing and enforcing data access controls and user authentication",
    "Conducting regular data security audits and risk assessments",
    "Developing and implementing data retention and destruction policies",
    "Ensuring compliance with data protection regulations (e.g., GDPR, CCPA)",
    "Implementing data loss prevention (DLP) solutions",
    "Managing and securing personal data in customer relationship management (CRM) systems",
  ],
  keyTopics: [
    "Data classification and handling",
    "Encryption techniques for data at rest and in transit",
    "Access control models and implementation",
    "Data privacy regulations and compliance",
    "Data backup and recovery strategies",
    "Privacy-enhancing technologies (PETs)",
    "Data anonymization and pseudonymization techniques",
  ],
  resources: [
    {
      title: "NIST Privacy Framework",
      url: "https://www.nist.gov/privacy-framework",
      description: "A voluntary tool to help organizations identify and manage privacy risk.",
    },
    {
      title: "OWASP Top 10 Privacy Risks",
      url: "https://owasp.org/www-project-top-10-privacy-risks/",
      description: "A list of the top 10 most critical privacy risks in web applications.",
    },
    {
      title: "Data Protection: Data In transit vs. Data At Rest",
      url: "https://www.digitalguardian.com/blog/data-protection-data-in-transit-vs-data-at-rest",
      description: "An article explaining the differences between protecting data in transit and at rest.",
    },
    {
      title: "Privacy by Design",
      url: "https://iapp.org/resources/article/privacy-by-design-the-7-foundational-principles/",
      description: "The 7 foundational principles of Privacy by Design.",
    },
    {
      title: "Coursera: Data Privacy Fundamentals",
      url: "https://www.coursera.org/learn/northeastern-data-privacy",
      description: "A course covering the fundamental concepts of data privacy and protection.",
    },
  ],
}

export default domainContent

