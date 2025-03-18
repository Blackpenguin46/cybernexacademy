"use client";

import { useState } from 'react';
import Link from "next/link";
import { GraduationCap, Lightbulb, Users, ArrowRight, Terminal, Cpu, Shield, Lock, ChevronRight } from "lucide-react";
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
      
      {/* Hero Section with improved layout */}
      <section className="relative pt-24 pb-32 overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          {/* Glowing accent circles */}
          <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-purple-600 leading-tight drop-shadow-lg">
              Your Cybersecurity Resource Hub
            </h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Terminal Display */}
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
            
            {/* Key Features */}
            <div className="bg-black/60 border border-neon-blue/30 rounded-xl p-6 backdrop-blur-md shadow-xl shadow-neon-blue/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="h-6 w-6 text-neon-blue mr-3" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neon-blue">Key Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neon-blue">
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

