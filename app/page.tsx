"use client";

import { useState } from 'react';
import Link from "next/link";
import { Shield, Book, Users, Bell, Lock, ArrowRight, Rocket, Target, Brain, Code, ChevronDown, Terminal, Database } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import CyberBackground from "./components/CyberBackground";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { TerminalDisplay, HeroButton, CTAButton } from "./components/ClientComponents";

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {
  const features = [
    {
      title: "Comprehensive Resources",
      description: "Access a curated collection of cybersecurity resources, from beginner fundamentals to advanced techniques.",
      icon: <Shield className="h-8 w-8 text-neon-blue" />,
      link: "/academy/foundational"
    },
    {
      title: "Practical Guides",
      description: "Find guides to practical tools and techniques used by professionals in the field.",
      icon: <Terminal className="h-8 w-8 text-neon-blue" />,
      link: "/insights/tools"
    },
    {
      title: "Community Links",
      description: "Connect with cybersecurity communities, forums, and discussion groups to expand your network.",
      icon: <Users className="h-8 w-8 text-neon-blue" />,
      link: "/community"
    },
    {
      title: "Security Updates",
      description: "Stay informed with links to the latest vulnerabilities, threats, and industry trends.",
      icon: <Bell className="h-8 w-8 text-neon-blue" />,
      link: "/insights/threats"
    },
    {
      title: "Certification Resources",
      description: "Find study materials and resources to help prepare for industry-recognized certifications.",
      icon: <Lock className="h-8 w-8 text-neon-blue" />,
      link: "/academy/certifications"
    },
    {
      title: "Career Information",
      description: "Access resources for cybersecurity career paths, job requirements, and industry insights.",
      icon: <Database className="h-8 w-8 text-neon-blue" />,
      link: "/insights/jobs"
    }
  ];

  return (
    <>
      <CyberBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-purple-600 leading-tight">
                  Your Cybersecurity Resource Hub
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  A comprehensive repository of cybersecurity resources for beginners and professionals, all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/signup">
                    <HeroButton />
                  </Link>
                  <Link href="/academy/courses">
                    <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                      Explore Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg border border-neon-blue/20 bg-black/50 p-6 backdrop-blur-sm">
                <h3 className="text-neon-blue font-mono mb-3 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  <span>cybernex@academy:~$</span>
                </h3>
                <TerminalDisplay commandText="find /resources -type f -name 'cybersecurity*' | sort" />
                <p className="mt-4 text-green-400 font-mono text-sm">Resource discovery complete. Ready to begin your cybersecurity journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Resource Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A carefully curated collection of cybersecurity resources to help you learn, grow, and excel in the field.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link href={feature.link} key={index}>
                <Card className="bg-gray-900/50 border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 h-full cursor-pointer">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative border-y border-neon-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Explore Cybersecurity Resources?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community and gain access to a comprehensive collection of cybersecurity resources in one place.
          </p>
          <Link href="/auth/signup">
            <CTAButton>Get Started For Free</CTAButton>
          </Link>
        </div>
      </section>
    </>
  );
}

