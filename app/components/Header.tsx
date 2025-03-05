"use client";

import Link from "next/link";
import { Shield, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-90 text-white py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Shield className="w-8 h-8 mr-2 text-blue-500" />
          <span className="text-xl font-bold">CyberNex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-500 py-2"
                onClick={() => setLearningOpen(!learningOpen)}
              >
                Learning <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {learningOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg z-50 border border-gray-800">
                  <li>
                    <Link href="/learning/paths" className="block px-4 py-2 hover:bg-gray-800">
                      Learning Paths
                    </Link>
                  </li>
                  <li>
                    <Link href="/learning/labs" className="block px-4 py-2 hover:bg-gray-800">
                      Hands-On Labs
                    </Link>
                  </li>
                  <li>
                    <Link href="/learning/certifications" className="block px-4 py-2 hover:bg-gray-800">
                      Certifications
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-500 py-2"
                onClick={() => setCommunityOpen(!communityOpen)}
              >
                Community <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {communityOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg z-50 border border-gray-800">
                  <li>
                    <Link href="/community/forum" className="block px-4 py-2 hover:bg-gray-800">
                      Discussion Forum
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/events" className="block px-4 py-2 hover:bg-gray-800">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/mentorship" className="block px-4 py-2 hover:bg-gray-800">
                      Mentorship
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-500 py-2"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {resourcesOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg z-50 border border-gray-800">
                  <li>
                    <Link href="/resources/tools" className="block px-4 py-2 hover:bg-gray-800">
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-800">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/help" className="block px-4 py-2 hover:bg-gray-800">
                      Help Center
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login" className="hover:text-blue-500">
            Log In
          </Link>
          <Link
            href="/auth/register"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              <li>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setLearningOpen(!learningOpen)}
                >
                  <span>Learning</span>
                  <ChevronDown className={`w-4 h-4 ${learningOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {learningOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/learning/paths" className="block py-1">
                        Learning Paths
                      </Link>
                    </li>
                    <li>
                      <Link href="/learning/labs" className="block py-1">
                        Hands-On Labs
                      </Link>
                    </li>
                    <li>
                      <Link href="/learning/certifications" className="block py-1">
                        Certifications
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setCommunityOpen(!communityOpen)}
                >
                  <span>Community</span>
                  <ChevronDown className={`w-4 h-4 ${communityOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {communityOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/community/forum" className="block py-1">
                        Discussion Forum
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/events" className="block py-1">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/mentorship" className="block py-1">
                        Mentorship
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 ${resourcesOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l border-gray-800">
                    <li>
                      <Link href="/resources/tools" className="block py-1">
                        Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/blog" className="block py-1">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/help" className="block py-1">
                        Help Center
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/about" className="block py-2">
                  About
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-800">
                <Link href="/auth/login" className="block py-2">
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register"
                  className="block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-center"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;