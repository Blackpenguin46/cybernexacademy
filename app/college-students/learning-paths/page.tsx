import Link from 'next/link';
import { ArrowLeft, Book, Code, Shield, Globe, Database, Lock, Cpu, Key, Network, Terminal, Bug, Eye, Server, Cloud, User, Settings } from 'lucide-react';

export default function LearningPathsPage() {
  const learningPaths = [
    {
      title: "Network Security",
      description: "Learn how to secure networks from unauthorized access, misuse, and attacks.",
      icon: Network,
      overview: "Network security involves implementing measures to protect the integrity, confidentiality, and availability of data as it is transmitted across or accessed through networks.",
      whyApplicable: "Network security is critical for preventing data breaches, ensuring secure communication, and protecting against threats like DDoS attacks and malware.",
      resources: {
        youtube: [
          { title: "Introduction to Network Security", url: "https://www.youtube.com/watch?v=example1" },
          { title: "Firewall Configuration Tutorial", url: "https://www.youtube.com/watch?v=example2" },
        ],
        roadmaps: [
          { title: "Network Security Roadmap", url: "https://roadmap.sh/network-security" },
        ],
        blogs: [
          { title: "Top 10 Network Security Best Practices", url: "https://example.com/network-security-blog" },
        ],
        research: [
          { title: "A Survey of Network Security Threats", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Network Security Fundamentals on Coursera", url: "https://www.coursera.org/learn/network-security" },
        ],
      },
    },
    {
      title: "Cryptography",
      description: "Understand the principles of encryption, decryption, and secure communication.",
      icon: Lock,
      overview: "Cryptography is the practice of securing information by transforming it into an unreadable format, ensuring only authorized parties can access it.",
      whyApplicable: "Cryptography is essential for securing data at rest and in transit, enabling secure communication, and protecting sensitive information.",
      resources: {
        youtube: [
          { title: "Cryptography Basics", url: "https://www.youtube.com/watch?v=example3" },
          { title: "Public Key Infrastructure Explained", url: "https://www.youtube.com/watch?v=example4" },
        ],
        roadmaps: [
          { title: "Cryptography Roadmap", url: "https://roadmap.sh/cryptography" },
        ],
        blogs: [
          { title: "Understanding Symmetric vs Asymmetric Encryption", url: "https://example.com/cryptography-blog" },
        ],
        research: [
          { title: "Advances in Cryptographic Algorithms", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Cryptography I on Coursera", url: "https://www.coursera.org/learn/crypto" },
        ],
      },
    },
    {
      title: "Operating Systems Security",
      description: "Explore the security features and vulnerabilities of operating systems.",
      icon: Cpu,
      overview: "Operating systems security focuses on protecting the OS from threats like malware, unauthorized access, and privilege escalation.",
      whyApplicable: "Securing the OS is crucial as it serves as the foundation for all applications and services running on a device.",
      resources: {
        youtube: [
          { title: "Linux Security Best Practices", url: "https://www.youtube.com/watch?v=example5" },
          { title: "Windows Security Features", url: "https://www.youtube.com/watch?v=example6" },
        ],
        roadmaps: [
          { title: "OS Security Roadmap", url: "https://roadmap.sh/os-security" },
        ],
        blogs: [
          { title: "Hardening Your Operating System", url: "https://example.com/os-security-blog" },
        ],
        research: [
          { title: "A Study of OS Vulnerabilities", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Operating Systems Security on Udemy", url: "https://www.udemy.com/course/os-security" },
        ],
      },
    },
    {
      title: "Forensic Computing",
      description: "Learn the techniques and tools used in digital forensics to investigate cyber incidents.",
      icon: Eye,
      overview: "Digital forensics involves collecting, analyzing, and preserving digital evidence to investigate cybercrimes and security incidents.",
      whyApplicable: "Forensic computing is essential for identifying the cause of breaches, tracking attackers, and supporting legal proceedings.",
      resources: {
        youtube: [
          { title: "Introduction to Digital Forensics", url: "https://www.youtube.com/watch?v=example7" },
          { title: "Forensic Analysis Tools", url: "https://www.youtube.com/watch?v=example8" },
        ],
        roadmaps: [
          { title: "Digital Forensics Roadmap", url: "https://roadmap.sh/digital-forensics" },
        ],
        blogs: [
          { title: "Top Tools for Digital Forensics", url: "https://example.com/forensics-blog" },
        ],
        research: [
          { title: "Challenges in Digital Forensics", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Digital Forensics Fundamentals on edX", url: "https://www.edx.org/course/digital-forensics" },
        ],
      },
    },
    {
      title: "Web Application Security",
      description: "Explore common web vulnerabilities and learn how to secure web applications.",
      icon: Code,
      overview: "Web application security focuses on protecting web apps from threats like SQL injection, XSS, and CSRF.",
      whyApplicable: "Web apps are a common target for attackers, making security essential for protecting user data and maintaining trust.",
      resources: {
        youtube: [
          { title: "OWASP Top 10 Vulnerabilities", url: "https://www.youtube.com/watch?v=example9" },
          { title: "Secure Coding Practices", url: "https://www.youtube.com/watch?v=example10" },
        ],
        roadmaps: [
          { title: "Web Security Roadmap", url: "https://roadmap.sh/web-security" },
        ],
        blogs: [
          { title: "Preventing Common Web Vulnerabilities", url: "https://example.com/web-security-blog" },
        ],
        research: [
          { title: "A Survey of Web Application Security", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Web Application Security on Pluralsight", url: "https://www.pluralsight.com/courses/web-app-security" },
        ],
      },
    },
    {
      title: "Cloud Security",
      description: "Learn how to secure cloud infrastructure and services.",
      icon: Cloud,
      overview: "Cloud security involves protecting data, applications, and services hosted in the cloud from threats and vulnerabilities.",
      whyApplicable: "As organizations migrate to the cloud, securing cloud environments is critical to prevent data breaches and ensure compliance.",
      resources: {
        youtube: [
          { title: "Introduction to Cloud Security", url: "https://www.youtube.com/watch?v=example11" },
          { title: "AWS Security Best Practices", url: "https://www.youtube.com/watch?v=example12" },
        ],
        roadmaps: [
          { title: "Cloud Security Roadmap", url: "https://roadmap.sh/cloud-security" },
        ],
        blogs: [
          { title: "Top Cloud Security Challenges", url: "https://example.com/cloud-security-blog" },
        ],
        research: [
          { title: "Security Issues in Cloud Computing", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Cloud Security Fundamentals on Coursera", url: "https://www.coursera.org/learn/cloud-security" },
        ],
      },
    },
    {
      title: "Ethical Hacking",
      description: "Learn the fundamentals of ethical hacking and penetration testing.",
      icon: Bug,
      overview: "Ethical hacking involves simulating cyberattacks to identify vulnerabilities and improve security.",
      whyApplicable: "Ethical hacking helps organizations proactively identify and fix security weaknesses before they can be exploited.",
      resources: {
        youtube: [
          { title: "Introduction to Ethical Hacking", url: "https://www.youtube.com/watch?v=example13" },
          { title: "Penetration Testing Tutorial", url: "https://www.youtube.com/watch?v=example14" },
        ],
        roadmaps: [
          { title: "Ethical Hacking Roadmap", url: "https://roadmap.sh/ethical-hacking" },
        ],
        blogs: [
          { title: "Getting Started with Ethical Hacking", url: "https://example.com/ethical-hacking-blog" },
        ],
        research: [
          { title: "Ethical Hacking Techniques", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "Certified Ethical Hacker (CEH) on EC-Council", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/" },
        ],
      },
    },
    {
      title: "Identity and Access Management (IAM)",
      description: "Understand how to manage user identities and control access to resources.",
      icon: Key,
      overview: "IAM involves defining and managing the roles and access privileges of users within a system.",
      whyApplicable: "IAM is critical for ensuring that only authorized users can access sensitive data and systems.",
      resources: {
        youtube: [
          { title: "Introduction to IAM", url: "https://www.youtube.com/watch?v=example15" },
          { title: "IAM Best Practices", url: "https://www.youtube.com/watch?v=example16" },
        ],
        roadmaps: [
          { title: "IAM Roadmap", url: "https://roadmap.sh/iam" },
        ],
        blogs: [
          { title: "Implementing IAM in Your Organization", url: "https://example.com/iam-blog" },
        ],
        research: [
          { title: "Challenges in IAM", url: "https://arxiv.org/abs/example" },
        ],
        courses: [
          { title: "IAM Fundamentals on Udemy", url: "https://www.udemy.com/course/iam-fundamentals" },
        ],
      },
    },
    // Add more topics here...
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Learning Paths</h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore our in-depth learning paths to build your cybersecurity skills. Each path includes an overview, relevance to cybersecurity, and curated resources.
      </p>

      {/* Learning Paths Section */}
      <div className="space-y-12">
        {learningPaths.map((path, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <path.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{path.title}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{path.description}</p>

            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Overview:</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{path.overview}</p>

            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why It’s Applicable:</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{path.whyApplicable}</p>

            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Resources:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">YouTube Videos:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {path.resources.youtube.map((video, videoIndex) => (
                    <li key={videoIndex}>
                      <Link href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {video.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Roadmaps:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {path.resources.roadmaps.map((roadmap, roadmapIndex) => (
                    <li key={roadmapIndex}>
                      <Link href={roadmap.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {roadmap.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Blogs and Readings:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {path.resources.blogs.map((blog, blogIndex) => (
                    <li key={blogIndex}>
                      <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Research Papers:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {path.resources.research.map((research, researchIndex) => (
                    <li key={researchIndex}>
                      <Link href={research.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {research.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Courses:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {path.resources.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>
                      <Link href={course.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back Link */}
      <div className="mt-8">
        <Link href="/college-students" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2" />
          Back to College Students
        </Link>
      </div>
    </div>
  );
}

