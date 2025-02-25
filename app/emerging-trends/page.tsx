import Link from 'next/link';
import { Brain, Car, Cpu, Globe, Lock, User, Building, Code, Cloud, Server, Zap, ExternalLink } from 'lucide-react';

interface TrendTopic {
  title: string;
  description: string;
  icon: React.ElementType;
  generalInfo: string;
  cyberSecurityImplications: string;
  links: {
    title: string;
    url: string;
  }[];
  videoUrl: string;
  researchPaper: {
    title: string;
    url: string;
  };
  companies?: {
    name: string;
    url: string;
  }[];
}

export default function EmergingTrendsPage() {
  const trends: TrendTopic[] = [
    {
      title: "Artificial Intelligence (AI)",
      description: "AI is revolutionizing cybersecurity with advanced threat detection, automated response systems, and predictive analytics.",
      icon: Brain,
      generalInfo: "AI involves creating systems that can perform tasks requiring human-like intelligence. In cybersecurity, AI analyzes data, identifies patterns, and makes decisions faster than humans.",
      cyberSecurityImplications: "AI enhances threat detection but is also weaponized by cybercriminals for sophisticated attacks like AI-powered malware.",
      links: [
        { title: "MIT AI for Cybersecurity", url: "https://www.csail.mit.edu/research/ai-cybersecurity" },
        { title: "DARPA's AI Cyber Challenge", url: "https://www.darpa.mil/program/ai-cyber-challenge" },
      ],
      videoUrl: "https://www.youtube.com/embed/aBo1QC9vZJk",
      researchPaper: {
        title: "A Survey of Artificial Intelligence in Cyber Security",
        url: "https://arxiv.org/abs/2103.02066"
      },
      companies: [
        { name: "AWS", url: "https://aws.amazon.com/machine-learning/" },
        { name: "Google", url: "https://ai.google/" },
        { name: "IBM", url: "https://www.ibm.com/cloud/ai" },
        { name: "NVIDIA", url: "https://www.nvidia.com/en-us/ai-data-science/" }
      ]
    },
    {
      title: "Self-Driving Cars",
      description: "As vehicles become more connected and autonomous, they also become potential targets for cyberattacks.",
      icon: Car,
      generalInfo: "Self-driving cars use sensors, cameras, radar, and AI to navigate roads without human input. They are part of the IoT ecosystem.",
      cyberSecurityImplications: "Threats include remote hijacking, data theft, and sensor manipulation. Robust encryption and intrusion detection are critical.",
      links: [
        { title: "NHTSA on Automated Vehicles", url: "https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety" },
        { title: "Auto-ISAC", url: "https://automotiveisac.com/" },
      ],
      videoUrl: "https://www.youtube.com/embed/Yjg_VMBqGxw",
      researchPaper: {
        title: "Security and Privacy in Autonomous Vehicles",
        url: "https://ieeexplore.ieee.org/document/9090905"
      },
      companies: [
        { name: "Tesla", url: "https://www.tesla.com/autopilot" },
        { name: "Waymo", url: "https://waymo.com/" },
        { name: "NVIDIA", url: "https://www.nvidia.com/en-us/self-driving-cars/" }
      ]
    },
    {
      title: "Artificial General Intelligence (AGI)",
      description: "AGI represents the next frontier in AI, with the potential to outperform humans in most tasks, including cybersecurity.",
      icon: Brain,
      generalInfo: "AGI refers to highly autonomous systems that can perform any intellectual task a human can. It is still in the research phase.",
      cyberSecurityImplications: "AGI could revolutionize threat detection and response but also pose existential risks if misused.",
      links: [
        { title: "OpenAI on AGI", url: "https://www.openai.com/" },
        { title: "DeepMind", url: "https://www.deepmind.com/" },
      ],
      videoUrl: "https://www.youtube.com/embed/9hH3Z4b5g5M",
      researchPaper: {
        title: "The Road to AGI: Challenges and Opportunities",
        url: "https://arxiv.org/abs/2105.14165"
      },
      companies: [
        { name: "OpenAI", url: "https://www.openai.com/" },
        { name: "DeepMind", url: "https://www.deepmind.com/" },
        { name: "Google", url: "https://ai.google/" }
      ]
    },
    {
      title: "Quantum Computing",
      description: "Quantum computing poses both a threat and an opportunity for cybersecurity, with the potential to break current encryption methods.",
      icon: Cpu,
      generalInfo: "Quantum computers use qubits to process information exponentially faster than classical computers.",
      cyberSecurityImplications: "Quantum-resistant cryptography is essential to protect against future quantum attacks.",
      links: [
        { title: "IBM Quantum", url: "https://www.ibm.com/quantum" },
        { title: "Google Quantum AI", url: "https://quantumai.google/" },
      ],
      videoUrl: "https://www.youtube.com/embed/JhHMJCUmq28",
      researchPaper: {
        title: "Quantum-Safe Cryptography – An Introduction",
        url: "https://www.etsi.org/images/files/ETSIWhitePapers/QuantumSafeWhitepaper.pdf"
      },
      companies: [
        { name: "IBM", url: "https://www.ibm.com/quantum" },
        { name: "Google", url: "https://quantumai.google/" },
        { name: "AWS", url: "https://aws.amazon.com/braket/" }
      ]
    },
    {
      title: "Smart Technology/Infrastructure",
      description: "Smart cities and infrastructure rely on interconnected systems, creating new vulnerabilities for cyberattacks.",
      icon: Globe,
      generalInfo: "Smart technology integrates IoT, AI, and data analytics to improve urban living and infrastructure management.",
      cyberSecurityImplications: "Securing smart grids, transportation systems, and public services is critical to prevent disruptions.",
      links: [
        { title: "Smart Cities Council", url: "https://smartcitiescouncil.com/" },
        { title: "IoT Security Foundation", url: "https://www.iotsecurityfoundation.org/" },
      ],
      videoUrl: "https://www.youtube.com/embed/GEx_d0SjvS0",
      researchPaper: {
        title: "Cybersecurity for Smart Cities",
        url: "https://ieeexplore.ieee.org/document/8641128"
      },
      companies: [
        { name: "Siemens", url: "https://new.siemens.com/global/en.html" },
        { name: "Cisco", url: "https://www.cisco.com/" },
        { name: "IBM", url: "https://www.ibm.com/smart-cities" }
      ]
    },
    {
      title: "Blockchain and Cryptocurrency",
      description: "Blockchain technology offers decentralized security, but cryptocurrencies are often targeted by cybercriminals.",
      icon: Lock,
      generalInfo: "Blockchain is a distributed ledger technology that ensures transparency and immutability. Cryptocurrencies like Bitcoin and Ethereum are built on blockchain.",
      cyberSecurityImplications: "While blockchain is secure, cryptocurrency exchanges and wallets are frequent targets for hacks and fraud.",
      links: [
        { title: "Ethereum Foundation", url: "https://ethereum.org/" },
        { title: "Coinbase Security", url: "https://www.coinbase.com/security" },
      ],
      videoUrl: "https://www.youtube.com/embed/6H_9l9N3IXU",
      researchPaper: {
        title: "Blockchain Security: Challenges and Solutions",
        url: "https://arxiv.org/abs/2005.00715"
      },
      companies: [
        { name: "Coinbase", url: "https://www.coinbase.com/" },
        { name: "Binance", url: "https://www.binance.com/" },
        { name: "IBM Blockchain", url: "https://www.ibm.com/blockchain" }
      ]
    },
    {
      title: "Cybersecurity in Business/Compliance",
      description: "Businesses face increasing regulatory requirements and cyber threats, making compliance and security critical.",
      icon: Building,
      generalInfo: "Regulations like GDPR and CCPA require businesses to protect customer data and report breaches promptly.",
      cyberSecurityImplications: "Non-compliance can result in hefty fines and reputational damage. Businesses must invest in robust security measures.",
      links: [
        { title: "GDPR Compliance Guide", url: "https://gdpr-info.eu/" },
        { title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      ],
      videoUrl: "https://www.youtube.com/embed/FCWwhwKWmmk",
      researchPaper: {
        title: "Cybersecurity Compliance: A Business Perspective",
        url: "https://www.mdpi.com/2076-3417/11/17/8213"
      },
      companies: [
        { name: "AWS", url: "https://aws.amazon.com/compliance/" },
        { name: "IBM", url: "https://www.ibm.com/security/compliance" },
        { name: "Google Cloud", url: "https://cloud.google.com/security/compliance" }
      ]
    },
    {
      title: "Biometrics",
      description: "Biometric authentication is becoming more common, but it also raises privacy and security concerns.",
      icon: User,
      generalInfo: "Biometrics use unique physical characteristics like fingerprints, facial recognition, and voice patterns for authentication.",
      cyberSecurityImplications: "While biometrics are secure, they can be spoofed, and stolen biometric data cannot be changed like passwords.",
      links: [
        { title: "NIST Biometrics", url: "https://www.nist.gov/programs-projects/biometrics" },
        { title: "FIDO Alliance", url: "https://fidoalliance.org/" },
      ],
      videoUrl: "https://www.youtube.com/embed/9hH3Z4b5g5M",
      researchPaper: {
        title: "Biometric Security: Challenges and Opportunities",
        url: "https://arxiv.org/abs/2105.14165"
      },
      companies: [
        { name: "Apple", url: "https://www.apple.com/face-id/" },
        { name: "Google", url: "https://developers.google.com/identity/biometrics" },
        { name: "IBM", url: "https://www.ibm.com/security/biometrics" }
      ]
    },
    {
      title: "IoT and Hardware Hacking",
      description: "The proliferation of IoT devices has created new attack surfaces, including vulnerabilities in hardware.",
      icon: Cpu, // Replaced Chip with Cpu
      generalInfo: "IoT devices are interconnected and often lack robust security, making them easy targets for hackers.",
      cyberSecurityImplications: "Hardware hacking can compromise IoT devices, leading to data breaches and network intrusions.",
      links: [
        { title: "OWASP IoT Project", url: "https://owasp.org/www-project-internet-of-things/" },
        { title: "IoT Security Foundation", url: "https://www.iotsecurityfoundation.org/" },
      ],
      videoUrl: "https://www.youtube.com/embed/Yjg_VMBqGxw",
      researchPaper: {
        title: "IoT Security: Challenges and Solutions",
        url: "https://ieeexplore.ieee.org/document/9090905"
      },
      companies: [
        { name: "AWS IoT", url: "https://aws.amazon.com/iot/" },
        { name: "Google Cloud IoT", url: "https://cloud.google.com/iot" },
        { name: "IBM Watson IoT", url: "https://www.ibm.com/internet-of-things" }
      ]
    },
    {
      title: "Skills Gap in Cybersecurity",
      description: "The demand for cybersecurity professionals far exceeds the supply, creating a significant skills gap.",
      icon: Code,
      generalInfo: "The cybersecurity industry faces a shortage of skilled workers, with millions of unfilled positions worldwide.",
      cyberSecurityImplications: "The skills gap leaves organizations vulnerable to attacks and increases the workload for existing professionals.",
      links: [
        { title: "ISC² Cybersecurity Workforce Study", url: "https://www.isc2.org/Research/Workforce-Study" },
        { title: "Cybrary", url: "https://www.cybrary.it/" },
      ],
      videoUrl: "https://www.youtube.com/embed/6H_9l9N3IXU",
      researchPaper: {
        title: "Addressing the Cybersecurity Skills Gap",
        url: "https://arxiv.org/abs/2005.00715"
      },
      companies: [
        { name: "AWS Training", url: "https://aws.amazon.com/training/" },
        { name: "Google Career Certificates", url: "https://grow.google/certificates/" },
        { name: "IBM SkillsBuild", url: "https://skillsbuild.org/" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Emerging Trends in Cybersecurity</h1>
      
      <p className="text-xl mb-12 text-gray-600 dark:text-gray-400">
        Stay ahead of the curve with insights into bleeding-edge technologies and their implications for cybersecurity. 
        These emerging trends are shaping the future of our field and creating new challenges and opportunities for security professionals.
      </p>

      {trends.map((trend, index) => (
        <div key={index} className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <trend.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-4" />
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{trend.title}</h2>
          </div>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{trend.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">General Information</h3>
            <p className="text-gray-700 dark:text-gray-300">{trend.generalInfo}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Cybersecurity Implications</h3>
            <p className="text-gray-700 dark:text-gray-300">{trend.cyberSecurityImplications}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Learn More</h3>
            <ul className="list-disc pl-5 space-y-2">
              {trend.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                    {link.title}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {trend.companies && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Key Companies</h3>
              <ul className="list-disc pl-5 space-y-2">
                {trend.companies.map((company, companyIndex) => (
                  <li key={companyIndex}>
                    <Link href={company.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      {company.name}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Video Overview</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={trend.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Research Spotlight</h3>
            <Link href={trend.researchPaper.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
              {trend.researchPaper.title}
              <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      ))}

      <div className="mt-12 text-center">
        <Link 
          href="/learning-resources"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
        >
          <Zap className="w-5 h-5 mr-2" />
          Explore More Learning Resources
        </Link>
      </div>
    </div>
  );
}

