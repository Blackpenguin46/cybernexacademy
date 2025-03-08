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

      {/* Hero Section - Full Height */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white glow-text tracking-tight">
              Secure Your Digital Future with <span className="text-blue-500">CyberNex</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Create a free account to access training materials, join our security community, and stay updated with the
              latest threats and defenses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <HeroButton />
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
                Explore Academy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-500" />
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

      {/* Live Security Dashboard Preview */}
      <section className="relative z-10 min-h-screen bg-gradient-to-b from-black via-blue-950/20 to-black flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Security Dashboard</h2>
              <p className="text-xl text-gray-300 mb-8">
                Monitor your security posture in real-time with our comprehensive dashboard. Track threats,
                vulnerabilities, and security events all in one place.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="lg:w-1/2 bg-black/60 backdrop-blur-lg p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2 animate-pulse">CURRENT THREAT LEVEL: MODERATE</div>
              <TerminalDisplay
                commandText={`$ nmap scan complete
→ 3 potential vulnerabilities detected
$ initiating countermeasures
→ security protocols activated
$_`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 min-h-[50vh] bg-gradient-to-b from-black to-blue-950/30 flex items-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Cybersecurity Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your free account today and start your path toward becoming a cybersecurity expert.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            Get Started Now <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}

