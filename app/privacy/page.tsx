import React from 'react'
import Link from 'next/link'
import { Shield, Lock } from 'lucide-react'

export default function PrivacyPolicyPage() {
  // Last updated date
  const lastUpdated = "May 15, 2023"
  
  // Privacy policy sections
  const policySections = [
    {
      title: "Information We Collect",
      content: [
        "We collect several types of information from and about users of our platform, including:",
        "Personal information such as name, email address, and contact details when you register for an account.",
        "Profile information including your username, password, educational background, and professional interests.",
        "Usage data such as courses accessed, completion status, quiz results, and interaction with learning materials.",
        "Technical data including IP address, browser type, device information, and cookies.",
        "Payment information when you purchase premium courses or subscriptions (processed securely through our payment processors)."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "Provide, maintain, and improve our educational platform and services.",
        "Process transactions and send related information including confirmations and receipts.",
        "Personalize your experience and deliver content relevant to your interests and learning goals.",
        "Communicate with you about your account, respond to inquiries, and provide customer support.",
        "Send updates, security alerts, and administrative messages.",
        "Analyze usage patterns to improve our platform's functionality and user experience.",
        "Protect against unauthorized access and ensure the security of our platform."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We may share your information in the following circumstances:",
        "With service providers who perform services on our behalf (e.g., payment processing, data analysis, email delivery).",
        "With educational partners when necessary to provide specific courses or certifications.",
        "To comply with legal obligations, enforce our terms of service, or respond to legal process.",
        "In connection with a merger, sale, or acquisition of all or a portion of our company.",
        "With your consent or at your direction.",
        "We do not sell your personal information to third parties for marketing purposes."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information, including:",
        "Encryption of sensitive data both in transit and at rest.",
        "Regular security assessments and penetration testing.",
        "Access controls and authentication mechanisms to prevent unauthorized access.",
        "Employee training on data protection and security practices.",
        "Regular backups and disaster recovery procedures.",
        "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information:",
        "Access and review the personal information we hold about you.",
        "Correct inaccurate or incomplete information.",
        "Request deletion of your personal information in certain circumstances.",
        "Object to or restrict certain processing activities.",
        "Data portability rights to obtain and reuse your personal information.",
        "Withdraw consent where processing is based on consent.",
        "To exercise these rights, please contact us using the information provided at the end of this policy."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our platform:",
        "Essential cookies necessary for the platform to function properly.",
        "Analytical cookies to understand how users interact with our platform.",
        "Functional cookies to remember your preferences and settings.",
        "Marketing cookies to deliver relevant advertisements.",
        "You can manage your cookie preferences through your browser settings, although disabling certain cookies may limit functionality."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our platform is not intended for children under 16 years of age.",
        "We do not knowingly collect personal information from children under 16.",
        "If we learn we have collected personal information from a child under 16, we will delete that information promptly.",
        "If you believe we might have any information from or about a child under 16, please contact us immediately."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "We may transfer, store, and process your information in countries other than your own.",
        "When we transfer information internationally, we implement appropriate safeguards to ensure your information receives an adequate level of protection.",
        "By using our platform, you consent to the transfer of your information to countries that may have different data protection laws than your country of residence."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We will notify you of any material changes by posting the new policy on this page and updating the \"Last Updated\" date.",
        "We encourage you to review this privacy policy periodically for any changes."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this privacy policy or our privacy practices, please contact us at:",
        "Email: privacy@cybernex.academy",
        "Postal Address: 123 Security Street, Cyber City, CS 12345",
        "We will respond to your inquiry as soon as possible and within the timeframe required by applicable law."
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
                <Lock className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-4">
              Your privacy is important to us
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
              <p className="text-gray-300 mb-4">
                At CyberNex Academy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our educational platform.
              </p>
              <p className="text-gray-300 mb-4">
                By accessing or using our platform, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p className="text-gray-300">
                We may change our Privacy Policy from time to time. We encourage you to review the Privacy Policy whenever you access our platform to stay informed about our information practices and your options.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Policy Sections */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {policySections.map((section, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className={pIndex === 0 ? "text-gray-300" : "text-gray-400 pl-6"}>
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
            <h2 className="text-3xl font-bold text-white mb-6">Have Questions About Our Privacy Practices?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our Privacy Policy or data practices, we're here to help.
            </p>
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Contact Our Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 