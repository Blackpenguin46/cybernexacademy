'use client'

import Link from 'next/link'
import { ArrowLeft, Award } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Certification {
  name: string;
  description: string;
  level: string;
  link: string;
}

interface CertificationCategory {
  name: string;
  certifications: Certification[];
}

export default function CertificationsPage() {
  const certificationCategories: CertificationCategory[] = [
    {
      name: "General Cybersecurity Certifications",
      certifications: [
        { name: "CompTIA Security+", description: "Broad foundational cybersecurity knowledge.", level: "Beginner", link: "#" },
        { name: "Certified Cybersecurity Technician (CCT)", description: "Entry-level hands-on skills.", level: "Beginner", link: "#" },
        { name: "Cisco CyberOps Associate", description: "Basics of cybersecurity operations.", level: "Beginner", link: "#" },
        { name: "Microsoft Cybersecurity Fundamentals", description: "Introduction to Microsoft security.", level: "Beginner", link: "#" },
        { name: "ISC2 CC Certification", description: "Entry-level cybersecurity certification.", level: "Beginner", link: "#" },
        { name: "Certified Information Systems Auditor (CISA)", description: "Audit, control, and security practices.", level: "Intermediate", link: "#" },
        { name: "Certified Ethical Hacker (CEH)", description: "Offensive security basics.", level: "Intermediate", link: "#" },
        { name: "CompTIA Cybersecurity Analyst (CySA+)", description: "Cybersecurity analytics and defense.", level: "Intermediate", link: "#" },
        { name: "GIAC Security Essentials (GSEC)", description: "Broad technical skills.", level: "Intermediate", link: "#" },
        { name: "Certified Information Systems Security Professional (CISSP)", description: "Comprehensive management and strategy.", level: "Advanced", link: "#" },
        { name: "GIAC Security Leadership (GSLC)", description: "Leadership in security policies and programs.", level: "Advanced", link: "#" },
        { name: "Certified Information Security Manager (CISM)", description: "Advanced management skills.", level: "Advanced", link: "#" },
        { name: "ISACA Certified in Risk and Information Systems Control (CRISC)", description: "Risk and controls certification.", level: "Advanced", link: "#" },
      ]
    },
    {
      name: "Penetration Testing and Offensive Security",
      certifications: [
        { name: "eLearnSecurity Junior Penetration Tester (eJPT)", description: "Basics of penetration testing.", level: "Beginner", link: "#" },
        { name: "CompTIA PenTest+", description: "Entry-level penetration testing.", level: "Beginner", link: "#" },
        { name: "Offensive Security Wireless Professional (OSWP)", description: "Wi-Fi penetration testing.", level: "Beginner", link: "#" },
        { name: "Certified Red Team Operator (CRTO)", description: "Red teaming fundamentals.", level: "Intermediate", link: "#" },
        { name: "GIAC Penetration Tester (GPEN)", description: "Intermediate penetration testing.", level: "Intermediate", link: "#" },
        { name: "Offensive Security Certified Professional (OSCP)", description: "Practical pentesting certification.", level: "Intermediate", link: "#" },
        { name: "eLearnSecurity Web Application Penetration Tester (eWPT)", description: "Web-focused pentesting.", level: "Intermediate", link: "#" },
        { name: "Offensive Security Experienced Penetration Tester (OSEP)", description: "Advanced pentesting.", level: "Advanced", link: "#" },
        { name: "Certified Exploit Developer (OSED)", description: "Exploit development expertise.", level: "Advanced", link: "#" },
        { name: "Certified Red Team Professional (CRTP)", description: "Advanced red teaming.", level: "Advanced", link: "#" },
        { name: "GIAC Exploit Researcher and Advanced Penetration Tester (GXPN)", description: "Advanced exploitation techniques.", level: "Advanced", link: "#" },
      ]
    },
    {
      name: "Defensive and Threat Intelligence",
      certifications: [
        { name: "CompTIA Cloud Essentials+", description: "Basic cloud security.", level: "Beginner", link: "#" },
        { name: "ISC2 Certified in Cybersecurity (CC)", description: "Entry-level defense skills.", level: "Beginner", link: "#" },
        { name: "Blue Team Level 1 (BTL1)", description: "Basics of defensive cybersecurity.", level: "Beginner", link: "#" },
        { name: "GIAC Certified Detection Analyst (GCDA)", description: "Intrusion detection skills.", level: "Intermediate", link: "#" },
        { name: "Cyber Threat Intelligence Certified Professional (CTICP)", description: "CTI-focused certification.", level: "Intermediate", link: "#" },
        { name: "Certified SOC Analyst (CSA)", description: "SOC operations training.", level: "Intermediate", link: "#" },
        { name: "Microsoft Certified: Security Operations Analyst", description: "Defensive skills for Microsoft tools.", level: "Intermediate", link: "#" },
        { name: "GIAC Continuous Monitoring Certification (GMON)", description: "Advanced monitoring techniques.", level: "Advanced", link: "#" },
        { name: "Certified Threat Intelligence Analyst (CTIA)", description: "Deep dive into threat intelligence.", level: "Advanced", link: "#" },
        { name: "GIAC Cyber Threat Intelligence (GCTI)", description: "Advanced threat intelligence skills.", level: "Advanced", link: "#" },
      ]
    },
    {
      name: "Cloud Security",
      certifications: [
        { name: "AWS Certified Cloud Practitioner", description: "Basic AWS cloud skills.", level: "Beginner", link: "#" },
        { name: "Google Associate Cloud Engineer", description: "Entry-level Google cloud certification.", level: "Beginner", link: "#" },
        { name: "Microsoft Azure Fundamentals (AZ-900)", description: "Intro to Azure security.", level: "Beginner", link: "#" },
        { name: "AWS Certified Security – Specialty", description: "Intermediate AWS security.", level: "Intermediate", link: "#" },
        { name: "Microsoft Certified: Azure Security Engineer Associate", description: "Intermediate Azure security.", level: "Intermediate", link: "#" },
        { name: "Certified Cloud Security Professional (CCSP)", description: "Cloud-specific security practices.", level: "Intermediate", link: "#" },
        { name: "Google Professional Cloud Security Engineer", description: "Advanced Google cloud security.", level: "Advanced", link: "#" },
        { name: "GIAC Cloud Security Essentials (GCLD)", description: "Advanced cloud security skills.", level: "Advanced", link: "#" },
      ]
    },
    {
      name: "Specialized Areas (Forensics, IoT, GRC, etc.)",
      certifications: [
        { name: "GIAC Information Security Fundamentals (GISF)", description: "Foundational skills for forensics and governance.", level: "Beginner", link: "#" },
        { name: "Certified Digital Forensics Examiner (CDFE)", description: "Entry-level forensics.", level: "Beginner", link: "#" },
        { name: "CompTIA Project+", description: "Basic project management for GRC.", level: "Beginner", link: "#" },
        { name: "GIAC Certified Forensic Examiner (GCFE)", description: "Intermediate forensic skills.", level: "Intermediate", link: "#" },
        { name: "ISO 27001 Lead Auditor", description: "Standards-based GRC auditing.", level: "Intermediate", link: "#" },
        { name: "CIPP/US (Certified Information Privacy Professional)", description: "Privacy law and GRC.", level: "Intermediate", link: "#" },
        { name: "GIAC Advanced Incident Response (GCFA)", description: "Advanced incident handling.", level: "Advanced", link: "#" },
        { name: "GIAC Certified Forensic Analyst (GCFA)", description: "Expert forensic techniques.", level: "Advanced", link: "#" },
        { name: "ISACA Certified Data Privacy Solutions Engineer (CDPSE)", description: "Advanced privacy engineering for GRC.", level: "Advanced", link: "#" },
      ]
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Cybersecurity Certifications</h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore a wide range of cybersecurity certifications across various specializations and experience levels. 
        Click on each category to view detailed information about specific certifications.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {certificationCategories.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-xl font-semibold flex items-center">
              <Award className="w-6 h-6 mr-2" />
              {category.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {category.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.description}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">Level: {cert.level}</p>
                    <Link 
                      href={cert.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="text-gray-600 dark:text-gray-400 mt-8">
        These certifications can significantly boost your cybersecurity career. Remember to choose certifications that align with your career goals and current experience level.
      </p>

      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center mt-8">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
    </div>
  )
}

