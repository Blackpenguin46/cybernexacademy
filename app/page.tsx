"use client";

import { useState } from 'react';
import Link from "next/link";
import { GraduationCap, Lightbulb, Users, ArrowRight, Terminal, Cpu, Shield, Lock, ChevronRight, Newspaper, Globe } from "lucide-react";
import CyberBackground from "./components/CyberBackground";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { TerminalDisplay, HeroButton, CTAButton } from "./components/ClientComponents";

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

      {/* CYBERNEX ACADEMY title - positioned below navbar */}
      <div className="relative z-10 pt-28 pb-8 bg-gradient-to-b from-black/90 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-indigo-800/30 to-purple-900/30 blur-xl -z-10 transform scale-150 rounded-full opacity-70"></div>
            
            {/* Enhanced CYBERNEXACADEMY header */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-none text-center mb-2">
              <span className="text-neon-blue">CYBERNEX</span>
              <span className="text-neon-blue">ACADEMY</span>
            </h1>
            
            {/* Simplified separator */}
            <div className="h-0.5 w-48 bg-neon-blue mx-auto mb-6 mt-4"></div>
            
            {/* Enhanced tagline */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-white mb-8 uppercase relative inline-block">
              <span className="text-gray-200">Knowledge Is Security</span>
              <span className="mx-2 text-neon-blue">•</span>
              <span className="text-gray-200">Security Is Power</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Section with improved layout */}
      <section className="relative pt-6 pb-32 overflow-hidden" aria-labelledby="hero-heading">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/auth/signup" aria-label="Sign up to CyberNex Academy">
                <HeroButton />
              </Link>
              <Link href="#main-sections" aria-label="Explore available resources">
                <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Terminal and Features in grid layout */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {/* Terminal Display - full width */}
            <div className="bg-black/60 border border-neon-blue/30 rounded-xl p-6 backdrop-blur-md shadow-xl shadow-neon-blue/10" aria-label="Terminal display demonstration">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-neon-blue font-mono flex items-center">
                  <Terminal className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>cybernex@academy:~$</span>
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <TerminalDisplay commandText="find /resources -type f -name 'cybersecurity*' | sort" />
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-green-400 font-mono text-sm">Resource discovery complete. Ready to begin your cybersecurity journey.</p>
              </div>
            </div>
            
            {/* Key Features - horizontal layout */}
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

      {/* Main Sections with improved styling */}
      <section id="main-sections" className="py-20 relative" aria-labelledby="main-sections-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="main-sections-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white px-2">
                Main Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our three core sections designed to help you learn, stay informed, and connect with the cybersecurity community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainSections.map((section, index) => (
              <Link href={section.link} key={index} className="block h-full" aria-label={`Explore ${section.title} resources`}>
                <Card className={`bg-gray-900/50 border-neon-blue/20 hover:border-neon-blue/50 hover:scale-105 transition-all duration-300 h-full bg-gradient-to-br ${section.color} shadow-lg hover:shadow-xl hover:shadow-neon-blue/20 group cursor-pointer`}>
                  <CardHeader className="pb-2 pt-8">
                    <div className="mb-6 flex justify-center">
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                        <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                      </div>
                    </div>
                    <CardTitle className="text-white text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 group-hover:from-neon-blue group-hover:to-blue-400 transition-all duration-300">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-4">
                    <p className="text-gray-300 text-center group-hover:text-white transition-all duration-300">{section.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center pt-2 pb-8">
                    <Button variant="outline" size="lg" className="text-neon-blue hover:bg-neon-blue/10 group-hover:bg-neon-blue/20 group-hover:border-neon-blue mt-2 border-neon-blue/50 hover:border-neon-blue transition-all duration-300">
                      Explore {section.title}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Favorite Resources Section */}
      <section className="py-20 relative" aria-labelledby="favorite-resources-heading">
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
            {/* HackTheBox */}
            <Link href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full bg-gray-900/50 border border-green-500/30 hover:border-green-500/70 rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-green-600/20 to-green-600/5 hover:shadow-xl hover:shadow-green-500/20 group cursor-pointer">
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
              <div className="h-full bg-gray-900/50 border border-red-500/30 hover:border-red-500/70 rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-red-600/20 to-red-600/5 hover:shadow-xl hover:shadow-red-500/20 group cursor-pointer">
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

            {/* Dark Reading */}
            <Link href="https://www.darkreading.com/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full bg-gray-900/50 border border-purple-500/30 hover:border-purple-500/70 rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-purple-600/20 to-purple-600/5 hover:shadow-xl hover:shadow-purple-500/20 group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 rounded-full">
                      <Newspaper className="h-8 w-8 text-purple-400" aria-hidden="true" />
                    </div>
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-white text-xl text-center font-bold mb-2 group-hover:text-purple-400 transition-colors">Dark Reading</h3>
                <p className="text-gray-300 text-center text-sm group-hover:text-white transition-all duration-300">
                  Leading news source for information security professionals with analysis on emerging threats and trends.
                </p>
                <div className="mt-4 flex items-center justify-center text-purple-400 text-sm group-hover:underline">
                  Visit Resource <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* TCM Security */}
            <Link href="https://tcm-sec.com/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full bg-gray-900/50 border border-blue-500/30 hover:border-blue-500/70 rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-blue-600/20 to-blue-600/5 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer">
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
              <div className="h-full bg-gray-900/50 border border-cyan-500/30 hover:border-cyan-500/70 rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 hover:shadow-xl hover:shadow-cyan-500/20 group cursor-pointer">
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
          </div>
        </div>
      </section>
      
      {/* CTA Section with enhanced visual appeal */}
      <section className="py-20 relative border-y border-neon-blue/20" aria-labelledby="cta-heading">
        {/* Background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 z-0"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] z-0"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-black/30 backdrop-blur-md border border-neon-blue/20 rounded-xl p-8 max-w-4xl mx-auto shadow-xl shadow-neon-blue/5">
            <div className="inline-block mb-3 p-2 bg-neon-blue/10 rounded-full">
              <Lock className="h-8 w-8 text-neon-blue" />
            </div>
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Explore <span className="text-neon-blue">Cybersecurity Resources?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community and gain access to a comprehensive collection of cybersecurity resources in one place.
            </p>
            <Link href="/auth/signup" aria-label="Sign up for free access">
              <CTAButton>Get Started For Free</CTAButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

