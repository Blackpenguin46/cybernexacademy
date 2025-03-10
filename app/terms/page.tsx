import React from 'react'
import Link from 'next/link'
import { FileText, AlertTriangle } from 'lucide-react'

export default function TermsOfServicePage() {
  // Last updated date
  const lastUpdated = "May 15, 2023"
  
  // Terms sections
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using CyberNex Academy's website, platform, or services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting on our website. Your continued use of our services constitutes your agreement to be bound by the modified terms."
      ]
    },
    {
      title: "User Accounts",
      content: [
        "To access certain features of our platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
        "You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
        "We reserve the right to terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason."
      ]
    },
    {
      title: "Educational Content and Services",
      content: [
        "CyberNex Academy provides educational content and services related to cybersecurity. We strive to ensure the accuracy and quality of our content, but we do not guarantee that our content is error-free, complete, or up-to-date.",
        "Our platform may include courses, tutorials, quizzes, assessments, and other educational materials. We reserve the right to modify, update, or remove content at any time without notice.",
        "Completion of courses or earning of certificates does not guarantee employment, specific job skills, or professional certifications unless explicitly stated."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content on our platform, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of CyberNex Academy or its content suppliers and is protected by international copyright laws.",
        "We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial educational purposes only.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from our platform without our express written permission.",
        "Any unauthorized use of our content may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties."
      ]
    },
    {
      title: "User Conduct",
      content: [
        "You agree not to use our platform or services to:",
        "Violate any applicable law or regulation.",
        "Infringe upon the rights of others, including intellectual property rights.",
        "Transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.",
        "Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.",
        "Interfere with or disrupt our services or servers or networks connected to our services.",
        "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services.",
        "Collect or store personal data about other users without their consent."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Some of our courses and services may require payment. By purchasing a course or service, you agree to pay the specified fees.",
        "All fees are quoted in US dollars unless otherwise specified and are subject to change without notice.",
        "Payments are processed through secure third-party payment processors. We do not store your full credit card information on our servers.",
        "Refunds may be available for certain courses or services within a specified timeframe, as detailed in our Refund Policy.",
        "Subscription-based services will automatically renew until canceled. You can cancel your subscription at any time through your account settings."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, CyberNex Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from:",
        "Your use or inability to use our services.",
        "Any unauthorized access to or use of our servers and/or any personal information stored therein.",
        "Any interruption or cessation of transmission to or from our services.",
        "Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services.",
        "Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through our services."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless CyberNex Academy, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:",
        "Your use of and access to our services.",
        "Your violation of any term of these Terms of Service.",
        "Your violation of any third-party right, including without limitation any copyright, property, or privacy right.",
        "Any claim that your content caused damage to a third party."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions.",
        "Any dispute arising under or relating in any way to these Terms of Service shall be resolved exclusively by the state or federal courts located in Delaware, and you hereby consent to the jurisdiction of such courts."
      ]
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.",
        "Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion."
      ]
    },
    {
      title: "Severability",
      content: [
        "If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms of Service shall otherwise remain in full force and effect and enforceable."
      ]
    },
    {
      title: "Entire Agreement",
      content: [
        "These Terms of Service constitute the entire agreement between you and CyberNex Academy regarding our services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning our services."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: legal@cybernex.academy",
        "Postal Address: 123 Security Street, Cyber City, CS 12345"
      ]
    }
  ]
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-4">
              Please read these terms carefully before using our platform
            </p>
            <p className="text-gray-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <div className="flex items-start mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  These Terms of Service ("Terms") govern your access to and use of the CyberNex Academy website, platform, and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.
                </p>
              </div>
              <p className="text-gray-300">
                CyberNex Academy provides an educational platform focused on cybersecurity training and resources. Our mission is to make cybersecurity education accessible, practical, and engaging for everyone. These Terms outline your rights and responsibilities when using our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms Sections */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {termsSections.map((section, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">{index + 1}. {section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex === 0 || section.content.length === 1 ? "text-gray-300" : "text-gray-400 pl-6"}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Terms?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our Terms of Service, please don't hesitate to reach out to our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy" 
                className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-colors"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 