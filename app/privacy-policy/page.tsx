import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Privacy Policy</h1>
      <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-4">
        <p>
          At CyberNex, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and other contact details when you voluntarily provide them to us through forms or other interactions on our website.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">How We Use Your Information</h2>
        <p>
          Your information is used to provide and improve our services, communicate with you, and personalize your experience. We do not share your personal information with third parties without your consent, except as required by law.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but this may affect the functionality of the site.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Ownership</h2>
        <p>
          All entities, content, and intellectual property associated with this website are owned by Samuel Oakes.
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@cybernex.com" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@cybernex.com</a>.
        </p>
      </div>
      <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
}

