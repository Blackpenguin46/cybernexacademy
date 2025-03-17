"use client";

import { useState } from 'react';
import Link from "next/link";
import { Shield, Book, Users, Bell, Lock, ArrowRight, Rocket, Target, Brain, Code, ChevronDown, Terminal, Database } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import CyberBackground from "./components/CyberBackground";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { TerminalDisplay, HeroButton, CTAButton, StatisticsCounter } from "./components/ClientComponents";

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HomePage() {
  const features = [
    {
      title: "Comprehensive Learning Paths",
      description: "From cybersecurity fundamentals to advanced penetration testing, follow structured courses designed for your skill level.",
      icon: <Shield className="h-8 w-8 text-neon-blue" />
    },
    {
      title: "Hands-On Labs",
      description: "Practice in realistic environments with guided exercises and challenges to reinforce your learning.",
      icon: <Terminal className="h-8 w-8 text-neon-blue" />
    },
    {
      title: "Expert Community",
      description: "Connect with professionals and peers, share knowledge, and collaborate on security projects.",
      icon: <Users className="h-8 w-8 text-neon-blue" />
    },
    {
      title: "Live Security Updates",
      description: "Stay informed about the latest vulnerabilities, threats, and industry trends with our real-time feeds.",
      icon: <Bell className="h-8 w-8 text-neon-blue" />
    },
    {
      title: "Certification Preparation",
      description: "Prepare for industry-recognized certifications with targeted courses and practice exams.",
      icon: <Lock className="h-8 w-8 text-neon-blue" />
    },
    {
      title: "Career Resources",
      description: "Access job boards, resume templates, and interview preparation resources tailored for cybersecurity roles.",
      icon: <Database className="h-8 w-8 text-neon-blue" />
    }
  ];

  const stats = [
    { value: 100, label: "Courses & Tutorials", suffix: "+" },
    { value: 50, label: "Hands-on Labs", suffix: "+" },
    { value: 15000, label: "Community Members", suffix: "+" },
    { value: 24, label: "New Content", suffix: "/7" }
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
                  Master Cybersecurity Skills for the Digital Age
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Join our platform to learn, practice, and excel in the world of cybersecurity with expert-led courses, hands-on labs, and a supportive community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/signup">
                    <HeroButton />
                  </Link>
                  <Link href="/academy/courses">
                    <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                      Explore Courses
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
                <TerminalDisplay commandText="sudo apt update && sudo apt install cybersecurity-skills -y" />
                <p className="mt-4 text-green-400 font-mono text-sm">Installation complete. Ready to begin your cybersecurity journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900/50 relative border-y border-neon-blue/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <StatisticsCounter end={stat.value} suffix={stat.suffix} />
                </h2>
                <p className="text-neon-blue">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build your cybersecurity skills from the ground up, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative border-y border-neon-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Cybersecurity Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of students learning critical cybersecurity skills and advancing their careers.
          </p>
          <Link href="/auth/signup">
            <CTAButton>Get Started For Free</CTAButton>
          </Link>
        </div>
      </section>
    </>
  );
}

