'use client'

import Link from 'next/link'
import { MessageCircle, Users, ExternalLink } from 'lucide-react'
import { FaDiscord, FaReddit } from 'react-icons/fa'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'

interface Community {
  name: string;
  description: string;
  platform: string;
  link: string;
}

export default function LearningCommunities() {
  const communities: Community[] = [
    // Discord Communities
    {
      name: "Cyber Security",
      description: "A community for individuals interested in cybersecurity and hacking, offering support for beginners and discussions on various topics.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "TheHiveMind",
      description: "A supportive community for both new and experienced cybersecurity enthusiasts, providing resources, study sessions, and peer collaboration.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Infosec Knowledge Sharing",
      description: "A community focused on sharing information security knowledge, including discussions, resources, and networking opportunities.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "OwlSec Cyber Security Learning Community",
      description: "A rapidly growing online community and educational platform focused on cybersecurity and information security.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "CyberSec Community",
      description: "A place for cybersecurity professionals and enthusiasts to discuss topics, share resources, and collaborate on projects.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Hackers' Lounge",
      description: "A community dedicated to ethical hacking, cybersecurity discussions, and learning resources for all skill levels.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "InfoSec Prep",
      description: "Focused on helping members prepare for various information security certifications through study groups and resource sharing.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Red Team Operations",
      description: "A community centered around red teaming, penetration testing, and offensive security strategies.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Blue Team Hub",
      description: "Dedicated to defensive security, including discussions on incident response, threat hunting, and security operations.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Malware Analysis Community",
      description: "A place for enthusiasts and professionals to discuss malware analysis techniques, tools, and case studies.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Digital Forensics Discord",
      description: "Focused on digital forensics, offering discussions, resources, and collaboration opportunities for practitioners.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Cyber Threat Intelligence Network",
      description: "A community for sharing and analyzing cyber threat intelligence, including indicators of compromise and threat actor tactics.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Ethical Hacking Community",
      description: "A supportive environment for learning and discussing ethical hacking techniques, tools, and methodologies.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "CTF Practice",
      description: "A community dedicated to Capture The Flag (CTF) competitions, providing practice challenges and collaborative learning.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Bug Bounty Hunters",
      description: "A place for bug bounty enthusiasts to share experiences, tools, and strategies for successful vulnerability hunting.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Cybersecurity Career Pathways",
      description: "Focused on career development in cybersecurity, offering guidance, mentorship, and job opportunities.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Women in Cybersecurity",
      description: "A supportive community aimed at empowering and connecting women in the cybersecurity field.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Cybersecurity News and Updates",
      description: "Stay informed with the latest cybersecurity news, vulnerabilities, and threat intelligence.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "IoT Security Community",
      description: "Discuss and learn about securing Internet of Things (IoT) devices and networks.",
      platform: "Discord",
      link: "#"
    },
    {
      name: "Cloud Security Alliance",
      description: "A community focused on cloud security best practices, compliance, and architecture.",
      platform: "Discord",
      link: "#"
    },
    // Skool Communities
    {
      name: "CyberDojo",
      description: "The largest cybersecurity community on Skool, offering free courses, mentorship, networking, and tailored support to help you secure a role in tech.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Cyber Security",
      description: "A community dedicated to sharing effective tools for cybersecurity tasks, including monitoring, defending, and analyzing, aiming to compile a comprehensive community toolkit.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Empirical Training Community",
      description: "Led by industry experts with over 30 years of experience, this community offers free hands-on project tutorials, career guidance, and a motivated cybersecurity community.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "The Cyber Community",
      description: "Designed to introduce novices to the cybersecurity industry, this community provides content on ethical hacking, adversarial emulation, OSINT, social engineering, and more.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Cyber Tech GRC",
      description: "A leadership hub for those aiming to excel in cybersecurity, technology, or GRC, offering free courses, workbooks, templates, and industry updates.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Free Versus Paid Cybersecurity Community",
      description: "A community discussing the differences between free and paid cybersecurity resources, aiming to guide members in choosing the right path for their learning journey.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Cybersecurity Sam's Community",
      description: "Offers unfiltered content from cybersecurity experts, weekly live sessions, and insights into the cybersecurity industry.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Cybersecurity Career Pathways",
      description: "Focused on career development in cybersecurity, offering guidance, mentorship, and job opportunities.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Women in Cybersecurity",
      description: "A supportive community aimed at empowering and connecting women in the cybersecurity field.",
      platform: "Skool",
      link: "#"
    },
    {
      name: "Cloud Security Alliance",
      description: "A community focused on cloud security best practices, compliance, and architecture.",
      platform: "Skool",
      link: "#"
    },
    // Reddit Communities
    {
      name: "r/cybersecurity",
      description: "A subreddit dedicated to all things cybersecurity, from news and discussion to resources and advice.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/cybersecurity"
    },
    {
      name: "r/netsec",
      description: "A community for network security professionals to discuss and share information about the latest threats, vulnerabilities, and defense strategies.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/netsec"
    },
    {
      name: "r/hacking",
      description: "A subreddit focused on the technical aspects of hacking and cybersecurity, including tools, techniques, and exploits.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/hacking"
    },
    {
      name: "r/crypto",
      description: "A subreddit for discussing cryptography, including algorithms, protocols, and implementations.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/crypto"
    },
    {
      name: "r/AskNetsec",
      description: "A place for security professionals and enthusiasts to ask and answer questions related to cybersecurity.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/AskNetsec"
    },
    {
      name: "r/Information_Security",
      description: "A subreddit for sharing news, analysis, and discussion on information security topics.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/Information_Security"
    },
    {
      name: "r/Malware",
      description: "A community focused on malware analysis, detection, and removal, with discussions on new threats, techniques, and trends.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/Malware"
    },
    {
      name: "r/ReverseEngineering",
      description: "A subreddit for those interested in reverse engineering software and hardware, including malware analysis, code analysis, and vulnerability research.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/ReverseEngineering"
    },
    {
      name: "r/ComputerSecurity",
      description: "Provides a curated list of links to IT security news, articles, and tools, as well as a place to ask cybersecurity-related questions.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/ComputerSecurity"
    },
    {
      name: "r/netsecstudents",
      description: "A community for students and beginners interested in network security, offering resources, discussions, and guidance.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/netsecstudents"
    },
    {
      name: "r/securityonlinecourse",
      description: "A subreddit dedicated to sharing and discussing online courses related to cybersecurity and information security.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/securityonlinecourse"
    },
    {
      name: "r/BlueTeamSec",
      description: "Focused on defensive security strategies, including discussions on incident response, threat hunting, and security operations.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/BlueTeamSec"
    },
    {
      name: "r/RedTeamSec",
      description: "A community centered around red teaming, penetration testing, and offensive security strategies.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/RedTeamSec"
    },
    {
      name: "r/SocialEngineering",
      description: "Dedicated to the study and application of social engineering techniques within the context of cybersecurity.",
      platform: "Reddit",
      link: "https://www.reddit.com/r/SocialEngineering"
    },
  ];

  const platforms = Array.from(new Set(communities.map(community => community.platform)));

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Skool":
        return Users;
      case "Reddit":
        return FaReddit;
      case "Discord":
        return FaDiscord;
      default:
        return MessageCircle;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Learning Communities</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore various cybersecurity learning communities across different platforms. 
        Join these communities to connect with other learners, share knowledge, and stay updated on the latest trends.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {platforms.map((platform, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold flex items-center">
              {React.createElement(getPlatformIcon(platform), { className: "w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" })}
              {platform} Communities
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {communities.filter(community => community.platform === platform).map((community, communityIndex) => (
                  <div key={communityIndex} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{community.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{community.description}</p>
                    <Link 
                      href={community.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      Join Community <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Benefits of Joining Cybersecurity Communities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Access to expert knowledge and experience</li>
          <li>Networking opportunities with industry professionals</li>
          <li>Stay updated on the latest trends and threats</li>
          <li>Collaborative learning and problem-solving</li>
          <li>Career guidance and job opportunities</li>
          <li>Access to resources, tools, and tutorials</li>
          <li>Participate in CTFs and other cybersecurity challenges</li>
        </ul>
      </section>
    </div>
  )
}

