import Link from "next/link"
import { Shield, Book, Users, Bell, Lock, ArrowRight, Rocket, Target, Brain, Code, ChevronDown } from "lucide-react"
import AnimatedBackground from "./components/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { TerminalDisplay, HeroButton, CTAButton, StatisticsCounter } from "./components/ClientComponents"

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

// This is now a Server Component
export default function Home() {
  return (
    <div className="bg-black relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CyberNex Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your journey into cybersecurity starts here
            </p>
            <p className="text-lg md:text-xl text-blue-400 font-medium italic mb-8">
              "Knowledge Is Security, Security Is Power"
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Comprehensive cybersecurity education platform offering structured learning paths, 
              hands-on labs, and community resources for beginners to advanced practitioners.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/academy/roadmaps" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Explore Learning Paths
              </Link>
              <Link 
                href="/auth/signup" 
                className="px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid Section */}
      <section className="relative z-10 min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Your Journey Starts Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Learning Paths */}
            <Link href="/academy/paths" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Rocket className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Learning Paths</CardTitle>
                  <CardDescription className="text-gray-400">Structured cybersecurity courses for all skill levels</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Follow guided learning paths from beginner to advanced. Master essential cybersecurity skills with hands-on labs and exercises.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Practice Labs */}
            <Link href="/academy/labs" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Code className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Practice Labs</CardTitle>
                  <CardDescription className="text-gray-400">Real-world scenarios in safe environments</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Get hands-on experience with real-world security challenges in our isolated lab environments.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Community Hub */}
            <Link href="/community" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Users className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Community Hub</CardTitle>
                  <CardDescription className="text-gray-400">Connect with security professionals</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Join discussions, share knowledge, and collaborate with fellow cybersecurity enthusiasts.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Security Tools */}
            <Link href="/tools" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Shield className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Security Tools</CardTitle>
                  <CardDescription className="text-gray-400">Essential cybersecurity tools</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Access and learn industry-standard security tools used by professionals.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Threat Intel */}
            <Link href="/insights" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Target className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Threat Intel</CardTitle>
                  <CardDescription className="text-gray-400">Stay informed about latest threats</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Get real-time updates on emerging threats, vulnerabilities, and security advisories.</p>
                </CardContent>
              </Card>
            </Link>

            {/* Certifications */}
            <Link href="/certifications" className="group">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500 hover:scale-105 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Brain className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">Certifications</CardTitle>
                  <CardDescription className="text-gray-400">Industry-recognized credentials</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Prepare for and earn professional cybersecurity certifications.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

