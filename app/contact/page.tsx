import Link from 'next/link';
import { ArrowLeft, Mail, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Have questions or need assistance? Reach out to us via email or use the contact form below.
        </p>
      </header>

      {/* Back Button */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Contact Information
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-gray-900 dark:text-gray-100 mr-4" />
            <a
              href="mailto:Cybernex@proton.me"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cybernex@proton.me
            </a>
          </div>
          {/* Optional: Add social media links */}
          <div className="flex items-center">
            <Twitter className="w-6 h-6 text-gray-900 dark:text-gray-100 mr-4" />
            <a
              href="https://twitter.com/cybernex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Follow us on Twitter
            </a>
          </div>
          <div className="flex items-center">
            <Linkedin className="w-6 h-6 text-gray-900 dark:text-gray-100 mr-4" />
            <a
              href="https://linkedin.com/company/cybernex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

