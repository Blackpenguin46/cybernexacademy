"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cpu, ShieldCheck, Globe, BookOpen, Users, Calendar, 
  ArrowRight, ChevronRight, Lock, Newspaper, BarChart4, Flag, 
  Terminal, Server, Shield, Eye, Code, Database, Layers, Zap
} from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading simulation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Featured products for the hero section
  const featuredProducts = [
    { name: "Security Training", description: "Comprehensive courses for all skill levels", icon: Shield },
    { name: "Threat Intelligence", description: "Real-time monitoring and alerts", icon: Eye },
    { name: "Penetration Testing", description: "Identify vulnerabilities before attackers", icon: Terminal }
  ];
  
  // Stats for the statistics section
  const stats = [
    { value: "10K+", label: "Trained Security Professionals", icon: Users },
    { value: "500+", label: "Curated Learning Resources", icon: BookOpen },
    { value: "24/7", label: "Security Monitoring", icon: ShieldCheck }
  ];

  // Security services for the services section
  const securityServices = [
    {
      title: "Vulnerability Assessment",
      description: "Identify and address security weaknesses in your systems",
      icon: Shield,
      color: "border-blue-500/30 from-blue-600/10 to-blue-400/5",
      hover: "group-hover:border-blue-500/60"
    },
    {
      title: "Penetration Testing",
      description: "Simulate cyber attacks to test your defense mechanisms",
      icon: Terminal,
      color: "border-green-500/30 from-green-600/10 to-green-400/5",
      hover: "group-hover:border-green-500/60"
    },
    {
      title: "Security Consulting",
      description: "Expert guidance on improving your security posture",
      icon: Users,
      color: "border-purple-500/30 from-purple-600/10 to-purple-400/5",
      hover: "group-hover:border-purple-500/60"
    },
    {
      title: "Incident Response",
      description: "Rapid assistance during security breaches and attacks",
      icon: Zap,
      color: "border-red-500/30 from-red-600/10 to-red-400/5",
      hover: "group-hover:border-red-500/60"
    }
  ];

  // Main navigation sections with cybersecurity styling
  const mainSections = [
    {
      title: "Training Academy",
      description: "Comprehensive cybersecurity education for all skill levels",
      icon: BookOpen,
      href: "/academy",
      color: "from-neon-blue/20 to-blue-500/5",
      borderColor: "border-neon-blue/30",
      hoverColor: "group-hover:border-neon-blue/60"
    },
    {
      title: "Security Community",
      description: "Connect with security professionals and enthusiasts",
      icon: Users,
      href: "/community",
      color: "from-purple-600/20 to-indigo-500/5",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500/60"
    },
    {
      title: "Threat Intelligence",
      description: "Latest news, research and analysis on cyber threats",
      icon: Newspaper,
      href: "/insights",
      color: "from-neon-green/20 to-emerald-500/5", 
      borderColor: "border-neon-green/30",
      hoverColor: "group-hover:border-neon-green/60"
    },
    {
      title: "Security Dashboard",
      description: "Monitor and manage your cybersecurity posture",
      icon: BarChart4,
      href: "/dashboard",
      color: "from-amber-500/20 to-orange-500/5",
      borderColor: "border-amber-500/30",
      hoverColor: "group-hover:border-amber-500/60"
    }
  ];

  // Quick access links
  const quickAccessLinks = [
    {
      title: "Security Paths",
      description: "Structured learning journeys for all skill levels",
      icon: Layers,
      href: "/academy/paths",
      color: "bg-gradient-to-br from-neon-blue/30 to-blue-900/20"
    },
    {
      title: "Threat Updates",
      description: "Fresh insights on emerging cyber threats",
      icon: Newspaper,
      href: "/insights/articles",
      color: "bg-gradient-to-br from-neon-green/30 to-green-900/20"
    },
    {
      title: "Security Discord",
      description: "Join our community of security professionals",
      icon: Globe,
      href: "/community/discord",
      color: "bg-gradient-to-br from-indigo-500/30 to-indigo-900/20"
    },
    {
      title: "Hacking Events",
      description: "CTFs, workshops and security conferences",
      icon: Calendar,
      href: "/community/events",
      color: "bg-gradient-to-br from-purple-500/30 to-purple-900/20"
    },
    {
      title: "CTF Challenges",
      description: "Test your skills with practical security challenges",
      icon: Flag,
      href: "/academy/challenges",
      color: "bg-gradient-to-br from-red-500/30 to-red-900/20"
    },
    {
      title: "Security Tools",
      description: "Essential tools for cybersecurity professionals",
      icon: ShieldCheck,
      href: "/resources/tools",
      color: "bg-gradient-to-br from-amber-500/30 to-orange-900/20"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neon-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-lg text-gray-400">Initializing Security Protocol...</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Hero Section - Full Width */}
          <section className="relative py-16 md:py-24 border-b border-neon-blue/20 overflow-hidden">
            {/* Cybersecurity-themed background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute right-0 top-1/4 w-[400px] h-[400px] blur-[120px] bg-neon-blue/10 rounded-full"></div>
              <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] blur-[120px] bg-neon-green/10 rounded-full"></div>
              
              {/* Circuit-like elements */}
              <div className="absolute left-10 top-10 w-[200px] h-[200px] border-l-2 border-t-2 border-neon-blue/20 rounded-tl-3xl"></div>
              <div className="absolute right-10 bottom-10 w-[200px] h-[200px] border-r-2 border-b-2 border-neon-green/20 rounded-br-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Hero Content */}
                <div className="lg:col-span-7 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      <span className="text-white">Secure Your Digital Future with </span>
                      <span className="bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue bg-clip-text text-transparent">CyberNex</span>
                    </h1>
                    
                    <p className="text-gray-400 max-w-2xl text-lg md:text-xl mb-8">
                      Comprehensive cybersecurity training, resources, and community to help organizations and individuals defend against evolving threats.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Link href="/academy" className="bg-gradient-to-r from-neon-blue to-neon-blue/80 hover:from-neon-blue hover:to-neon-blue text-black font-medium px-8 py-3 rounded-md transition-all duration-300 flex items-center group">
                        Start Training <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link href="/community" className="border border-neon-green text-neon-green hover:bg-neon-green/10 font-medium px-8 py-3 rounded-md transition-all duration-300 group">
                        Join Security Community <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    {/* Featured Products List */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {featuredProducts.map((product, index) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                          className="flex items-center gap-3"
                        >
                          <div className="p-2 rounded-md bg-neon-blue/10 border border-neon-blue/20">
                            <product.icon className="w-5 h-5 text-neon-blue" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{product.name}</h3>
                            <p className="text-xs text-gray-400">{product.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Hero - Security Dashboard Preview */}
                <div className="lg:col-span-5 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Cybersecurity Dashboard Mockup */}
                    <div className="bg-black/40 backdrop-blur-sm border border-neon-blue/30 rounded-lg overflow-hidden shadow-2xl shadow-neon-blue/10">
                      {/* Dashboard Header */}
                      <div className="bg-gradient-to-r from-black to-neon-blue/20 p-4 border-b border-neon-blue/20 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Shield className="w-5 h-5 text-neon-blue" />
                          <span className="text-sm font-mono text-neon-blue">SECURITY DASHBOARD</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="p-6">
                        {/* Security Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {stats.map((stat, index) => (
                            <div key={index} className="bg-neon-blue/5 border border-neon-blue/20 rounded-md p-3 text-center">
                              <stat.icon className="w-6 h-6 mx-auto mb-2 text-neon-blue" />
                              <div className="text-xl font-mono text-neon-blue">{stat.value}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Security Threat Level */}
                        <div className="bg-black/60 border border-neon-green/20 rounded-md p-4 mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-400">CURRENT THREAT LEVEL</span>
                            <span className="text-xs text-neon-green">MODERATE</span>
                          </div>
                          <div className="w-full bg-gray-900 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-neon-green to-neon-blue h-2.5 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        
                        {/* Mock Terminal */}
                        <div className="bg-black border border-neon-blue/20 rounded-md overflow-hidden font-mono text-xs">
                          <div className="bg-gray-900 px-3 py-1 text-gray-400">Terminal</div>
                          <div className="p-3 text-gray-300">
                            <div className="mb-1"><span className="text-neon-green">$</span> nmap scan complete</div>
                            <div className="mb-1"><span className="text-neon-blue">→</span> 3 potential vulnerabilities detected</div>
                            <div className="mb-1"><span className="text-neon-green">$</span> initiating countermeasures</div>
                            <div className="mb-1"><span className="text-neon-blue">→</span> security protocols activated</div>
                            <div className="flex items-center">
                              <span className="text-neon-green">$</span>
                              <span className="ml-1 animate-pulse">_</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-2 border-b-2 border-neon-green/20 rounded-br-3xl -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-40 h-40 border-l-2 border-t-2 border-neon-blue/20 rounded-tl-3xl -z-10"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services Section */}
          <section className="py-16 border-b border-neon-blue/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                    Comprehensive Security Services
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Protecting your digital assets with advanced cybersecurity solutions and expertise
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="group"
                  >
                    <div className={`h-full rounded-lg border ${service.color} backdrop-blur-sm p-6 transition-all duration-300 hover:translate-y-[-5px] ${service.hover} hover:shadow-lg`}>
                      <service.icon className="w-10 h-10 mb-4 text-white/80" />
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <Link href="#" className="inline-flex items-center text-neon-blue font-medium group">
                        Learn More <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Main Sections Grid */}
          <section className="py-16 border-b border-neon-blue/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                    Security Platform
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Explore our comprehensive cybersecurity platform designed to educate, protect, and connect
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mainSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link href={section.href} className="group block h-full">
                      <div className={`h-full rounded-lg border ${section.borderColor} bg-gradient-to-br ${section.color} backdrop-blur-sm p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/10 ${section.hoverColor}`}>
                        <section.icon className="w-12 h-12 mb-4 text-white/80" />
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        <p className="text-gray-400 mb-4">{section.description}</p>
                        <div className="flex items-center text-neon-blue font-medium">
                          Access <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Access Links Grid */}
          <section className="py-16 border-b border-neon-blue/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                    Security Resources
                  </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Quick access to essential cybersecurity tools, content, and community resources
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickAccessLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <Link href={link.href} className="group block">
                      <div className={`rounded-lg ${link.color} border border-white/10 p-5 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg hover:shadow-blue-500/10 hover:border-white/20`}>
                        <div className="flex items-start">
                          <div className="mr-4 p-2 bg-black/30 rounded-lg">
                            <link.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-1 group-hover:text-neon-blue transition-colors">{link.title}</h3>
                            <p className="text-sm text-gray-400">{link.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-neon-blue/20 to-black"></div>
                
                {/* Cyber security pattern overlay */}
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] opacity-[0.15]"></div>
                
                {/* HUD-like corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-neon-blue"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-neon-green"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-green"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-neon-blue"></div>
                
                <div className="relative p-8 md:p-12 text-center">
                  <Lock className="w-12 h-12 text-neon-blue mx-auto mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Ready to enhance your cybersecurity posture?
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Create a free account to access training materials, join our security community, and stay updated with the latest threats and defenses.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/auth/login" className="text-neon-blue border-2 border-neon-blue hover:bg-neon-blue/10 px-8 py-3 rounded-md transition-colors duration-300 font-medium">
                      Sign In
                    </Link>
                    <Link href="/auth/register" className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-green hover:to-neon-blue text-black px-8 py-3 rounded-md transition-all duration-300 font-medium">
                      Create Secure Account
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}