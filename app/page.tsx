import Link from "next/link"
import { Shield, Book, Users, Bell, Lock, ArrowRight } from "lucide-react"
import AnimatedBackground from "./components/AnimatedBackground"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import CountUp from "./components/CountUp"
import TerminalEffect from "./components/TerminalEffect"

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white glow-text">
              Secure Your Digital Future with <span className="text-blue-500">CyberNex</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Create a free account to access training materials, join our security community, and stay updated with the
              latest threats and defenses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-950">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                <CountUp end={10} suffix="K+" />
              </div>
              <div className="text-gray-400">Trained Security Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-gray-400">Curated Learning Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Comprehensive Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Security Training</CardTitle>
                <CardDescription className="text-gray-400">Comprehensive courses for all skill levels</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Learn cybersecurity fundamentals, advanced techniques, and industry best practices from expert
                  instructors.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/training" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                  Start Training <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Threat Intelligence</CardTitle>
                <CardDescription className="text-gray-400">Real-time monitoring and alerts</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Stay informed about the latest threats, vulnerabilities, and attack vectors with our real-time
                  intelligence feeds.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/intelligence" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Penetration Testing</CardTitle>
                <CardDescription className="text-gray-400">Identify vulnerabilities before attackers</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>
                  Simulate cyber attacks to test your defense mechanisms and identify security weaknesses in your
                  systems.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/pentesting" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Dashboard Preview */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Security Dashboard</h2>
              <p className="text-gray-300 mb-8">
                Monitor your security posture in real-time with our comprehensive dashboard. Track threats,
                vulnerabilities, and security events all in one place.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Access Dashboard</Button>
            </div>
            <div className="lg:w-1/2 bg-black/60 p-6 rounded-lg border border-gray-800">
              <div className="text-sm text-gray-400 mb-2">CURRENT THREAT LEVEL: MODERATE</div>
              <TerminalEffect
                commands={[
                  "$ nmap scan complete",
                  "→ 3 potential vulnerabilities detected",
                  "$ initiating countermeasures",
                  "→ security protocols activated",
                  "$_",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Security Community</h2>
            <p className="text-gray-300">
              Connect with cybersecurity professionals and enthusiasts. Share knowledge, discuss trends, and collaborate
              on security challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Community Forum</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Engage in discussions, ask questions, and share insights with fellow security professionals.</p>
              </CardContent>
              <CardFooter>
                <Link href="/community/forum" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                  Join Forum <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Book className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-white">Learning Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Access our library of tutorials, guides, and documentation to enhance your security knowledge.</p>
              </CardContent>
              <CardFooter>
                <Link href="/resources" className="text-blue-500 hover:text-blue-400 inline-flex items-center">
                  Explore Resources <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enhance Your Cybersecurity Skills?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create your free account today and start your journey toward becoming a cybersecurity expert.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

