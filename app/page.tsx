"use client";

import { useState } from 'react';
import Link from "next/link";
import { GraduationCap, Lightbulb, Users, ArrowRight, Terminal } from "lucide-react";
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
      icon: <Users className="h-12 w-12 text-neon-blue" aria-hidden="true" />,
      link: "/community",
      color: "from-cyan-600/20 to-cyan-600/5"
    },
    {
      title: "Insights",
      description: "Stay informed with the latest cybersecurity news, threat intelligence, tools, and industry trends.",
      icon: <Lightbulb className="h-12 w-12 text-neon-blue" aria-hidden="true" />,
      link: "/insights",
      color: "from-purple-600/20 to-purple-600/5"
    },
    {
      title: "Academy",
      description: "Educational resources, learning paths, courses, and certification guides to build your cybersecurity knowledge.",
      icon: <GraduationCap className="h-12 w-12 text-neon-blue" aria-hidden="true" />,
      link: "/academy",
      color: "from-blue-600/20 to-blue-600/5"
    }
  ];

  return (
    <>
      <CyberBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="relative z-10">
                <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-purple-600 leading-tight">
                  Your Cybersecurity Resource Hub
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  A comprehensive repository of cybersecurity resources for beginners and professionals, all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg border border-neon-blue/20 bg-black/50 p-6 backdrop-blur-sm" aria-label="Terminal display demonstration">
                <h3 className="text-neon-blue font-mono mb-3 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>cybernex@academy:~$</span>
                </h3>
                <TerminalDisplay commandText="find /resources -type f -name 'cybersecurity*' | sort" />
                <p className="mt-4 text-green-400 font-mono text-sm">Resource discovery complete. Ready to begin your cybersecurity journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section id="main-sections" className="py-20 relative" aria-labelledby="main-sections-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="main-sections-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">Main Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our three core sections designed to help you learn, stay informed, and connect with the cybersecurity community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainSections.map((section, index) => (
              <Link href={section.link} key={index} className="block h-full" aria-label={`Explore ${section.title} resources`}>
                <Card className={`bg-gray-900/50 border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 h-full bg-gradient-to-br ${section.color}`}>
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">{section.icon}</div>
                    <CardTitle className="text-white text-2xl text-center">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-center">{section.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center pt-2">
                    <Button variant="ghost" className="text-neon-blue hover:bg-neon-blue/10 group mt-2">
                      Explore {section.title}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative border-y border-neon-blue/10" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Explore Cybersecurity Resources?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community and gain access to a comprehensive collection of cybersecurity resources in one place.
          </p>
          <Link href="/auth/signup" aria-label="Sign up for free access">
            <CTAButton>Get Started For Free</CTAButton>
          </Link>
        </div>
      </section>
    </>
  );
}

