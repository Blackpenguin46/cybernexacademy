"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Shield, BookOpen, Code, Server, Lock, Brain, HardDrive, Network, Clock } from "lucide-react"

// Interest categories with icons and descriptions
const interestCategories = [
  {
    id: "web_security",
    title: "Web Security",
    icon: Code,
    description: "Vulnerabilities, OWASP, XSS, CSRF, secure coding practices",
  },
  {
    id: "network_security",
    title: "Network Security",
    icon: Network,
    description: "Protocols, firewalls, VPNs, IDS/IPS, network monitoring",
  },
  {
    id: "malware_analysis",
    title: "Malware Analysis",
    icon: HardDrive,
    description: "Reverse engineering, malware behavior, sandboxing",
  },
  {
    id: "cloud_security",
    title: "Cloud Security",
    icon: Server,
    description: "AWS, Azure, GCP security, cloud architecture security",
  },
  {
    id: "cryptography",
    title: "Cryptography",
    icon: Lock,
    description: "Encryption, hashing, cryptographic protocols, key management",
  },
  {
    id: "threat_intelligence",
    title: "Threat Intelligence",
    icon: Brain,
    description: "Threat actors, TTPs, IOCs, intelligence sharing",
  },
  {
    id: "digital_forensics",
    title: "Digital Forensics",
    icon: Shield,
    description: "Incident response, evidence collection, memory analysis",
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: BookOpen,
    description: "CISSP, CEH, Security+, OSCP, and other certification paths",
  },
  {
    id: "career_development",
    title: "Career Development",
    icon: Clock,
    description: "Job hunting, skill development, interviews, resumes",
  },
]

// Experience levels
const experienceLevels = [
  { id: "beginner", title: "Beginner", description: "New to cybersecurity" },
  { id: "intermediate", title: "Intermediate", description: "Some hands-on experience" },
  { id: "advanced", title: "Advanced", description: "Professional experience" },
]

// Goals options
const goalOptions = [
  { id: "learn_basics", title: "Learn the basics", description: "Build foundational knowledge" },
  { id: "career_transition", title: "Career transition", description: "Move into cybersecurity" },
  { id: "certification", title: "Get certified", description: "Prepare for certifications" },
  { id: "skill_development", title: "Develop specific skills", description: "Improve in certain areas" },
  { id: "stay_updated", title: "Stay updated", description: "Keep up with latest trends" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  
  // User responses
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [experienceLevel, setExperienceLevel] = useState<string>("")
  const [goals, setGoals] = useState<string[]>([])
  const [user, setUser] = useState<any>(null)
  
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        
        // Check if user has already completed onboarding
        const { data } = await supabase
          .from("profiles")
          .select("onboarding_completed, interests")
          .eq("user_id", user.id)
          .single()
        
        if (data?.onboarding_completed) {
          // Skip onboarding if already completed
          router.push("/dashboard")
        }
      } else {
        // Redirect to login if not authenticated
        router.push("/auth/login")
      }
    }
    
    checkUser()
  }, [router])
  
  const toggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests(selectedInterests.filter(id => id !== interestId))
    } else {
      setSelectedInterests([...selectedInterests, interestId])
    }
  }
  
  const toggleGoal = (goalId: string) => {
    if (goals.includes(goalId)) {
      setGoals(goals.filter(id => id !== goalId))
    } else {
      setGoals([...goals, goalId])
    }
  }
  
  const handleNext = () => {
    if (step === 1 && selectedInterests.length > 0) {
      setStep(2)
    } else if (step === 2 && experienceLevel) {
      setStep(3)
    }
  }
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  
  const handleSubmit = async () => {
    if (!user || goals.length === 0) return
    
    setLoading(true)
    
    try {
      // Update user profile with interests and preferences
      const { error } = await supabase
        .from("profiles")
        .update({
          interests: selectedInterests,
          experience_level: experienceLevel,
          goals: goals,
          onboarding_completed: true
        })
        .eq("user_id", user.id)
      
      if (error) throw error
      
      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Error saving preferences:", error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            {/* Progress indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? "bg-blue-600" : "bg-blue-600/30"}`}>
                    <span className="text-sm font-medium text-white">1</span>
                  </div>
                  <div className={`h-1 w-10 ${step > 1 ? "bg-blue-600" : "bg-gray-700"}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? "bg-blue-600" : step > 2 ? "bg-blue-600/30" : "bg-gray-800"}`}>
                    <span className="text-sm font-medium text-white">2</span>
                  </div>
                  <div className={`h-1 w-10 ${step > 2 ? "bg-blue-600" : "bg-gray-700"}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? "bg-blue-600" : "bg-gray-800"}`}>
                    <span className="text-sm font-medium text-white">3</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">Step {step} of 3</div>
              </div>
            </div>
            
            {/* Step 1: Interests */}
            {step === 1 && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">What are you interested in?</h1>
                <p className="text-gray-400 mb-6">Select as many topics as you'd like. We'll use these to personalize your experience.</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {interestCategories.map((category) => (
                    <div 
                      key={category.id}
                      onClick={() => toggleInterest(category.id)}
                      className={`${
                        selectedInterests.includes(category.id) 
                          ? "border-blue-500 bg-blue-600/10" 
                          : "border-gray-800 bg-gray-800/50 hover:border-gray-700"
                      } border rounded-lg p-4 cursor-pointer transition-colors`}
                    >
                      <div className="flex items-center mb-2">
                        <category.icon className={`w-5 h-5 ${selectedInterests.includes(category.id) ? "text-blue-500" : "text-gray-400"}`} />
                        <h3 className="text-white font-medium ml-2">{category.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className="text-gray-400 hover:text-white" 
                    onClick={() => router.push("/dashboard")}
                  >
                    Skip for now
                  </button>
                  <button 
                    className={`px-6 py-2 rounded-md ${selectedInterests.length > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"} text-white`}
                    onClick={handleNext}
                    disabled={selectedInterests.length === 0}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Experience Level */}
            {step === 2 && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">What's your experience level?</h1>
                <p className="text-gray-400 mb-6">This helps us recommend content that matches your skill level.</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {experienceLevels.map((level) => (
                    <div 
                      key={level.id}
                      onClick={() => setExperienceLevel(level.id)}
                      className={`${
                        experienceLevel === level.id 
                          ? "border-blue-500 bg-blue-600/10" 
                          : "border-gray-800 bg-gray-800/50 hover:border-gray-700"
                      } border rounded-lg p-4 cursor-pointer transition-colors`}
                    >
                      <h3 className="text-white font-medium mb-2">{level.title}</h3>
                      <p className="text-gray-400 text-sm">{level.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className="text-gray-400 hover:text-white"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button 
                    className={`px-6 py-2 rounded-md ${experienceLevel ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"} text-white`}
                    onClick={handleNext}
                    disabled={!experienceLevel}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Goals */}
            {step === 3 && (
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">What are your goals?</h1>
                <p className="text-gray-400 mb-6">Select your primary goals for learning about cybersecurity.</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {goalOptions.map((goal) => (
                    <div 
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`${
                        goals.includes(goal.id) 
                          ? "border-blue-500 bg-blue-600/10" 
                          : "border-gray-800 bg-gray-800/50 hover:border-gray-700"
                      } border rounded-lg p-4 cursor-pointer transition-colors`}
                    >
                      <h3 className="text-white font-medium mb-2">{goal.title}</h3>
                      <p className="text-gray-400 text-sm">{goal.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button 
                    className="text-gray-400 hover:text-white"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button 
                    className={`px-6 py-2 rounded-md ${goals.length > 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 cursor-not-allowed"} text-white`}
                    onClick={handleSubmit}
                    disabled={goals.length === 0 || loading}
                  >
                    {loading ? "Saving..." : "Finish"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 