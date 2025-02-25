import type { DomainContent } from "../[domain]/page"

const domainContent: DomainContent = {
  title: "Cryptology",
  description:
    "Cryptology is the science of secure communication, encompassing both cryptography (the practice of creating secure communication systems) and cryptanalysis (the study of breaking those systems). It involves the use of mathematical algorithms to encrypt and decrypt information, ensuring confidentiality, integrity, and authenticity of data.",
  importance:
    "Cryptology is fundamental to cybersecurity as it provides the backbone for secure communication and data protection. It enables secure online transactions, protects sensitive information from unauthorized access, and ensures the privacy of digital communications. As cyber threats evolve, robust cryptographic systems are essential for maintaining the security of digital infrastructure and protecting against data breaches and cyber attacks.",
  useCases: [
    "Securing communication channels in messaging apps and email systems",
    "Protecting sensitive data in transit and at rest in cloud storage",
    "Implementing secure authentication mechanisms for user logins",
    "Ensuring the integrity of software updates and digital signatures",
    "Enabling secure financial transactions in e-commerce and online banking",
    "Protecting intellectual property and trade secrets in business communications",
  ],
  keyTopics: [
    "Symmetric and asymmetric encryption algorithms",
    "Hash functions and digital signatures",
    "Key management and distribution",
    "Public Key Infrastructure (PKI)",
    "Quantum cryptography and post-quantum cryptography",
    "Cryptanalysis techniques and attacks",
  ],
  resources: [
    {
      title: "Cryptography I - Stanford University (Coursera)",
      url: "https://www.coursera.org/learn/crypto",
      description: "A comprehensive introduction to modern cryptography by Dan Boneh.",
    },
    {
      title: "Practical Cryptography for Developers",
      url: "https://cryptobook.nakov.com/",
      description: "Free online book covering cryptography concepts with code examples.",
    },
    {
      title: "CrypTool",
      url: "https://www.cryptool.org/en/",
      description: "Free e-learning software for cryptography and cryptanalysis.",
    },
    {
      title: "NIST Cryptographic Standards and Guidelines",
      url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines",
      description: "Official cryptographic standards and guidelines from NIST.",
    },
    {
      title: "Crypto 101",
      url: "https://www.crypto101.io/",
      description: "Free introductory course on cryptography for programmers.",
    },
  ],
}

export default domainContent

