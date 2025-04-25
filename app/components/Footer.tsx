 "use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import Script from "next/script"

// Define link sections for better organization
const footerLinks = {
  platform: [
    { href: "/academy", label: "Academy" },
    { href: "/insights", label: "Insights" },
    { href: "/community", label: "Community" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    // Add Careers/Blog links here if they exist
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  social: [
    // Add other social links as needed
    { href: "https://cybernexacademy.substack.com/", label: "Substack", title: "CyberNex on Substack" },
    // { href: "https://twitter.com/yourhandle", label: "Twitter", title: "CyberNex on Twitter" },
    // { href: "https://linkedin.com/yourhandle", label: "LinkedIn", title: "CyberNex on LinkedIn" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cybernexacademy.com'; // Use env variable or fallback
  const logoUrl = `${siteUrl}/favicon.png`; // Assuming logo path

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative z-10" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description (spans more cols on larger screens) */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4" aria-label="CyberNex Academy home">
              <Shield className="h-8 w-8 text-blue-500 mr-2" aria-hidden="true" />
              <span className="text-xl font-bold text-white">CyberNex Academy</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md">
              Your comprehensive cybersecurity education platform. Knowledge Is Security, Security Is Power.
            </p>
          </div>

          {/* Link Sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Platform</h3>
            <nav aria-label="Platform links">
              <ul className="space-y-2">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} CyberNex Academy. All rights reserved.</p>
          
          <nav aria-label="Social media links" className="flex gap-4 mt-4 sm:mt-0">
            {footerLinks.social.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-400 hover:text-blue-400 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer" 
                title={link.title}
                aria-label={link.title} // Use title for aria-label as well
              >
                {/* Placeholder for icon - using text for now */}
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Schema.org JSON-LD for better SEO - Updated with variables */}
      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "CyberNex Academy",
            "url": "${siteUrl}",
            "logo": "${logoUrl}",
            "description": "Comprehensive cybersecurity education platform offering courses, community resources, and security insights",
            "email": "cybernexacademy@proton.me", // Keep or update email
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US" // Keep or update country
            },
            "sameAs": [
              ${footerLinks.social.map(link => `"${link.href}"`).join(',')}
            ]
          }
        `}
      </Script>
    </footer>
  )
}

export default Footer

