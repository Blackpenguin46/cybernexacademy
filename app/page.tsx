"use client";

import { useState } from 'react';
import Link from "next/link";
import { GraduationCap, Lightbulb, Users, ArrowRight, Terminal, Cpu, Shield, 
  Lock, ChevronRight, Newspaper, Globe, MessageSquare, BadgeCheck, BarChart, 
  Star, Heart, ArrowUpRight, ExternalLink, Book, Zap, PieChart, User, Bookmark, Youtube, BookOpen, AlertTriangle } from "lucide-react";
import CyberBackground from "./components/CyberBackground";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CTAButton, TerminalDisplay } from "./components/ClientComponents";

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {
  const mainSections = [
    {
      title: "Community",
      description: "Connect with cybersecurity professionals through forums, Discord servers, Reddit communities, and more.",
      icon: <Users className="h-16 w-16 text-neon-blue" aria-hidden="true" />,
      link: "/community",
      color: "from-cyan-600/20 to-cyan-600/5"
    },
    {
      title: "Insights",
      description: "Stay informed with the latest cybersecurity news, threat intelligence, tools, and industry trends.",
      icon: <Lightbulb className="h-16 w-16 text-neon-blue" aria-hidden="true" />,
      link: "/insights",
      color: "from-purple-600/20 to-purple-600/5"
    },
    {
      title: "Academy",
      description: "Educational resources, learning paths, courses, and certification guides to build your cybersecurity knowledge.",
      icon: <GraduationCap className="h-16 w-16 text-neon-blue" aria-hidden="true" />,
      link: "/academy",
      color: "from-blue-600/20 to-blue-600/5"
    }
  ];

  const features = [
    { title: "Interactive Learning", icon: <Terminal className="h-5 w-5" />, description: "Engage with hands-on cybersecurity labs and exercises" },
    { title: "Expert Community", icon: <Users className="h-5 w-5" />, description: "Learn from industry professionals and fellow enthusiasts" },
    { title: "Latest Insights", icon: <Lightbulb className="h-5 w-5" />, description: "Stay updated with current cybersecurity trends and news" },
    { title: "Cutting-edge Tools", icon: <Cpu className="h-5 w-5" />, description: "Discover modern tools and technologies for security" }
  ];

  return (
    <>
      <CyberBackground />

      {/* Hero Section with improved layout - Keeping dark for impact */}
      <section className="relative pt-28 pb-32 overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          {/* Glowing accent circles */}
          <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            {/* Enhanced hero heading */}
            <h2 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-8 leading-tight relative">
              <span className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-70 rounded-full blur-sm"></span>
              <span className="absolute -right-4 top-0 h-full w-1 bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-70 rounded-full blur-sm"></span>
              <span className="text-white drop-shadow-[0_0_30px_rgba(0,157,255,0.3)]">Your Cybersecurity Resource Hub</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive repository of cybersecurity resources for beginners and professionals, all in one place.
            </p>
            
            <div className="flex justify-center mb-16">
              <Link href="#main-sections" aria-label="Explore available resources">
                <Button variant="outline" size="lg" className="dark-theme-button">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Terminal and Features in grid layout */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {/* Key Features - horizontal layout - still dark-themed for contrast */}
            <div className="bg-black/60 border border-neon-blue/30 rounded-xl p-6 backdrop-blur-md shadow-xl shadow-neon-blue/10">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-neon-blue mr-3" />
                <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-neon-blue">
                  Key Features
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-800 hover:border-neon-blue/30 rounded-lg p-4 transition-all duration-300 hover:bg-neon-blue/5 group">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-neon-blue/10 rounded-lg text-neon-blue mr-3 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-neon-blue transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 pl-10 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-gray-800 pt-5">
                <Link href="/about" className="flex items-center justify-center text-neon-blue hover:underline">
                  <span>Learn about our platform</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Sections with white background and dark text - REMOVE TRANSITION */}
      <section id="main-sections" className="white-section py-20 relative" aria-labelledby="main-sections-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="main-sections-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-700">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500 px-2">
                Main Resources
              </span>
        </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our three core sections designed to help you learn, stay informed, and connect with the cybersecurity community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainSections.map((section, index) => (
              <Link href={section.link} key={index} className="block h-full" aria-label={`Explore ${section.title} resources`}>
                <div className="white-section-card group">
                  <div className="flex justify-center mb-4">
                    <div className={`white-section-icon ${
                      section.title === "Community" ? "accent" : 
                      section.title === "Insights" ? "primary" : ""
                    }`}>
                      {section.title === "Community" && <Users size={30} strokeWidth={1.5} color="white" />}
                      {section.title === "Insights" && <Lightbulb size={28} strokeWidth={2} />}
                      {section.title === "Academy" && <GraduationCap size={28} strokeWidth={2} />}
                    </div>
                  </div>
                  <h3 className="white-section-card-title text-center">{section.title}</h3>
                  <p className="white-section-card-description text-center">{section.description}</p>
                  <div className="flex justify-center mt-auto">
                    <div className={`white-section-card-button ${
                      section.title === "Community" ? "accent" : 
                      section.title === "Insights" ? "primary" : ""
                    }`}>
                      Explore {section.title}
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Links Section - NEW SECTION */}
      <section className="py-16 bg-gray-100" aria-labelledby="quick-links-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="quick-links-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jump directly to specific resources and community hubs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Academy Links */}
            <Link href="/academy/youtube">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-red-200 hover:bg-red-50 hover:border-red-400">
                <div className="flex items-center">
                  <Youtube className="w-5 h-5 mr-3 text-red-600" />
                  <div>
                    <span className="font-semibold text-gray-700">YouTube Channels</span>
                    <p className="text-sm text-gray-500">Curated cybersecurity video resources.</p>
                  </div>
                </div>
              </Button>
            </Link>
            <Link href="/academy/labs">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-blue-200 hover:bg-blue-50 hover:border-blue-400">
                <div className="flex items-center">
                  <Terminal className="w-5 h-5 mr-3 text-blue-600" />
                  <div>
                    <span className="font-semibold text-gray-700">Hands-on Labs</span>
                    <p className="text-sm text-gray-500">Practice skills in simulated environments.</p>
                  </div>
                </div>
              </Button>
            </Link>
             <Link href="/academy/docs">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-400">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-3 text-indigo-600" /> 
                  <div>
                    <span className="font-semibold text-gray-700">Documentation</span>
                    <p className="text-sm text-gray-500">Key framework & tool references.</p>
                  </div>
                </div>
              </Button>
            </Link>
            {/* Community Links */}
            <Link href="/community/discord">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-cyan-200 hover:bg-cyan-50 hover:border-cyan-400">
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-3 text-cyan-600" />
                  <div>
                    <span className="font-semibold text-gray-700">Discord Community</span>
                    <p className="text-sm text-gray-500">Join real-time chat & discussions.</p>
                  </div>
                </div>
              </Button>
            </Link>
            {/* Insights Links */}
            <Link href="/insights/threats">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-orange-200 hover:bg-orange-50 hover:border-orange-400">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <span className="font-semibold text-gray-700">Threat Intelligence</span>
                    <p className="text-sm text-gray-500">Latest threats and attack vectors.</p>
                  </div>
                </div>
              </Button>
            </Link>
            <Link href="/insights/news">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-3 px-4 border-purple-200 hover:bg-purple-50 hover:border-purple-400">
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 mr-3 text-purple-600" />
                  <div>
                    <span className="font-semibold text-gray-700">Cybersecurity News</span>
                    <p className="text-sm text-gray-500">Stay updated on industry news.</p>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Favorite Resources Section - Back to dark theme - REMOVE TRANSITION */}
      <section className="py-20 relative bg-gray-900" aria-labelledby="favorite-resources-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="favorite-resources-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white px-2">
                Favorite Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our top recommended platforms and websites for cybersecurity learning and staying informed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Resource cards with balanced colors */}
            
            {/* HackTheBox */}
            <Link href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-green-600/20 to-green-600/5 hover:shadow-xl hover:shadow-green-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-500/20 rounded-full">
                      <Lock className="h-8 w-8 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-green-400 transition-colors">HackTheBox</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Hands-on cybersecurity training platform with real-world penetration testing labs and challenges.
                </p>
                <div className="mt-4 flex items-center justify-center text-green-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Network Chuck */}
            <Link href="https://www.youtube.com/@NetworkChuck" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-red-600/20 to-red-600/5 hover:shadow-xl hover:shadow-red-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-red-500/20 rounded-full">
                      <Terminal className="h-8 w-8 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-red-400 transition-colors">Network Chuck</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Engaging YouTube channel with tutorials on networking, cybersecurity, and IT concepts for all levels.
                </p>
                <div className="mt-4 flex items-center justify-center text-red-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Dark Reading - Replace with The Record by Recorded Future */}
            <Link href="https://therecord.media/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-purple-600/20 to-purple-600/5 hover:shadow-xl hover:shadow-purple-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 rounded-full">
                      <Newspaper className="h-8 w-8 text-purple-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-purple-400 transition-colors">The Record</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Trusted cybersecurity news source with in-depth reporting on cyber threats, policy, and industry trends.
                </p>
                <div className="mt-4 flex items-center justify-center text-purple-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* TCM Security */}
            <Link href="https://tcm-sec.com/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-blue-600/20 to-blue-600/5 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full">
                      <Shield className="h-8 w-8 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-blue-400 transition-colors">TCM Security</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Comprehensive cybersecurity training courses and certifications taught by industry professionals.
                </p>
                <div className="mt-4 flex items-center justify-center text-blue-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* daily.dev */}
            <Link href="https://daily.dev/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 hover:shadow-xl hover:shadow-cyan-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-cyan-500/20 rounded-full">
                      <Globe className="h-8 w-8 text-cyan-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-cyan-400 transition-colors">daily.dev</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  All-in-one developer news reader featuring the latest articles, blogs and discussions for tech professionals.
                </p>
                <div className="mt-4 flex items-center justify-center text-cyan-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* OwlSec Discord */}
            <Link href="https://discord.gg/owlsec" target="_blank" rel="noopener noreferrer" className="group">
              <div className="resource-card h-full p-6 transition-all duration-300 bg-gradient-to-br from-indigo-600/20 to-indigo-600/5 hover:shadow-xl hover:shadow-indigo-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-indigo-500/20 rounded-full">
                      <MessageSquare className="h-8 w-8 text-indigo-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-indigo-400 transition-colors">OwlSec Discord</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Active cybersecurity community with mentoring, CTF teams, learning resources, and networking opportunities.
                </p>
                <div className="mt-4 flex items-center justify-center text-indigo-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/resources">
              <Button className="secondary-button">
                View All Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

