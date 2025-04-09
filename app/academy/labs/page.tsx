"use client"

import React, { useState } from 'react'
import { Terminal, Code, Network, Shield, Server, Lock, ExternalLink, Target, Flame, Brain, Wrench, Bug, Database, Flag, Play, FileText, Users, FlaskConical, Filter, X, Search, Globe, LinkIcon, GraduationCap, Layers, BarChart, DollarSign, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CategoryFilter from '../../components/CategoryFilter'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Category {
  id: string
  name: string
  icon: React.ElementType
}

interface LabResource {
  title: string
  url: string
  description: string
  category: 'Web Security' | 'Network Security' | 'Malware Analysis' | 'Digital Forensics' | 'Cloud Security' | 'Cryptography' | 'Reverse Engineering' | 'CTF Platform' | 'Pentesting Platform' | 'General'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Varies'
  isFree: boolean
  type: 'Lab' | 'Platform' | 'Challenge Set' | 'OS Distribution'
}

export default function LabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [freeOnly, setFreeOnly] = useState(false)
  const [activeFilterDimension, setActiveFilterDimension] = useState('category')

  const categories = [
    { id: 'all', name: 'All Labs', icon: Terminal },
    { id: 'web-security', name: 'Web Security', icon: Code },
    { id: 'network', name: 'Network Security', icon: Network },
    { id: 'malware', name: 'Malware Analysis', icon: Bug },
    { id: 'forensics', name: 'Digital Forensics', icon: Target },
    { id: 'cloud', name: 'Cloud Security', icon: Server },
    { id: 'cryptography', name: 'Cryptography', icon: Lock },
    { id: 'reverse', name: 'Reverse Engineering', icon: Wrench },
    { id: 'ctf-challenge', name: 'CTF & Challenges', icon: Flag },
    { id: 'pentesting-platform', name: 'Pentesting Platforms', icon: Play }
  ]

  const labResources: LabResource[] = [
    { title: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/", description: "Modern web app security training environment with real vulnerabilities.", category: "Web Security", difficulty: "Varies", isFree: true, type: 'Lab' },
    { title: "WebGoat", url: "https://owasp.org/www-project-webgoat/", description: "Deliberately insecure web application for learning web security.", category: "Web Security", difficulty: "Beginner", isFree: true, type: 'Lab' },
    { title: "Damn Vulnerable Web App (DVWA)", url: "https://dvwa.co.uk/", description: "PHP/MySQL web application that is damn vulnerable.", category: "Web Security", difficulty: "Beginner", isFree: true, type: 'Lab' },
    { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", description: "Comprehensive free online labs and tutorials for web security.", category: "Web Security", difficulty: "Varies", isFree: true, type: 'Platform' },
    { title: "PentesterLab Exercises", url: "https://pentesterlab.com/exercises", description: "Hands-on exercises teaching web penetration testing techniques (Free & Paid).", category: "Web Security", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "Security Onion", url: "https://securityonionsolutions.com/", description: "Linux distribution for intrusion detection and network security monitoring.", category: "Network Security", difficulty: "Intermediate", isFree: true, type: 'OS Distribution' },
    { title: "Packet Tracer Labs (NetAcad)", url: "https://www.netacad.com/courses/packet-tracer", description: "Network simulation tool with security scenarios.", category: "Network Security", difficulty: "Beginner", isFree: true, type: 'Lab' },
    { title: "REMnux", url: "https://remnux.org/", description: "Linux toolkit for reverse-engineering and analyzing malware.", category: "Malware Analysis", difficulty: "Intermediate", isFree: true, type: 'OS Distribution' },
    { title: "Any.Run Sandbox", url: "https://any.run/", description: "Interactive online malware analysis service (Free tier available).", category: "Malware Analysis", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "DFRWS Challenges", url: "https://www.dfrws.org/conferences/challenges", description: "Digital forensics challenges and training materials from past conferences.", category: "Digital Forensics", difficulty: "Varies", isFree: true, type: 'Challenge Set' },
    { title: "Autopsy Training Cases", url: "https://www.autopsy.com/support/training/", description: "Digital forensics platform with downloadable training case data.", category: "Digital Forensics", difficulty: "Intermediate", isFree: true, type: 'Lab' },
    { title: "Blue Team Labs Online (BTLO)", url: "https://blueteamlabs.online/", description: "Hands-on labs for defensive security, including forensics scenarios.", category: "Digital Forensics", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "CloudGoat", url: "https://github.com/RhinoSecurityLabs/cloudgoat", description: "Vulnerable by Design AWS deployment tool for practicing cloud pentesting.", category: "Cloud Security", difficulty: "Intermediate", isFree: true, type: 'Lab' },
    { title: "AWS Security Workshops", url: "https://awssecworkshops.com/", description: "Official AWS security workshops and hands-on labs.", category: "Cloud Security", difficulty: "Varies", isFree: true, type: 'Lab' },
    { title: "GCP Security Labs (Qwiklabs)", url: "https://www.cloudskillsboost.google/journeys/16", description: "Hands-on labs covering Google Cloud Platform security concepts.", category: "Cloud Security", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "CryptoHack", url: "https://cryptohack.org/", description: "Fun platform for learning modern cryptography through challenges.", category: "Cryptography", difficulty: "Varies", isFree: true, type: 'Platform' },
    { title: "Cryptopals Challenges", url: "https://cryptopals.com/", description: "Set of classic cryptography challenges from basics to advanced concepts.", category: "Cryptography", difficulty: "Advanced", isFree: true, type: 'Challenge Set' },
    { title: "Reverse Engineering Challenges (challenges.re)", url: "https://challenges.re/", description: "Collection of reverse engineering challenges of varying difficulty.", category: "Reverse Engineering", difficulty: "Varies", isFree: true, type: 'Challenge Set' },
    { title: "Ghidra Official Training", url: "https://ghidra-sre.org/courses/", description: "NSA's reverse engineering tool with official training materials.", category: "Reverse Engineering", difficulty: "Intermediate", isFree: true, type: 'Lab' },
    { title: "TryHackMe", url: "https://tryhackme.com", description: "Gamified platform for learning cybersecurity through hands-on labs and CTFs.", category: "Pentesting Platform", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "Hack The Box", url: "https://app.hackthebox.com", description: "Online platform providing virtual labs to improve penetration testing skills.", category: "Pentesting Platform", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "VulnHub", url: "https://www.vulnhub.com/", description: "Repository of vulnerable virtual machines for practice.", category: "Pentesting Platform", difficulty: "Varies", isFree: true, type: 'Lab' },
    { title: "PicoCTF", url: "https://play.picoctf.org/practice", description: "Educational CTF platform with challenges for beginners and beyond.", category: "CTF Platform", difficulty: "Beginner", isFree: true, type: 'Platform' },
    { title: "OverTheWire Wargames", url: "https://overthewire.org/wargames/", description: "Series of wargames designed to teach security concepts via terminal challenges.", category: "CTF Platform", difficulty: "Varies", isFree: true, type: 'Challenge Set' },
    { title: "Root Me", url: "https://www.root-me.org/", description: "Platform offering hacking challenges across various categories.", category: "CTF Platform", difficulty: "Varies", isFree: true, type: 'Platform' },
    { title: "Attack-Defense Labs", url: "https://attackdefense.com/", description: "Online lab environment focused on practical offensive/defensive cybersecurity skills.", category: "Pentesting Platform", difficulty: "Varies", isFree: false, type: 'Platform' },
    { title: "Immersive Labs", url: "https://www.immersivelabs.com/", description: "Platform offering gamified cyber skills development labs (Enterprise/Edu focus).", category: "Pentesting Platform", difficulty: "Varies", isFree: false, type: 'Platform' },
  ]

  const filteredLabs = labResources.filter(lab =>
    (selectedCategory === 'all' || lab.category === selectedCategory) &&
    (selectedDifficulty === 'all' || lab.difficulty === selectedDifficulty) &&
    (!freeOnly || lab.isFree)
  )

  const categoryFilters: Category[] = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'Web Security', name: 'Web Security', icon: Code },
    { id: 'Network Security', name: 'Network Security', icon: Network },
    { id: 'Malware Analysis', name: 'Malware Analysis', icon: Bug },
    { id: 'Digital Forensics', name: 'Digital Forensics', icon: Target },
    { id: 'Cloud Security', name: 'Cloud Security', icon: Server },
    { id: 'Cryptography', name: 'Cryptography', icon: Lock },
    { id: 'Reverse Engineering', name: 'Reverse Engineering', icon: Wrench },
    { id: 'CTF Platform', name: 'CTF Platforms', icon: Flag },
    { id: 'Pentesting Platform', name: 'Pentesting Platforms', icon: Play },
    { id: 'General', name: 'General Practice', icon: FlaskConical }
  ]

  const difficultyFilters: Category[] = [
    { id: 'all', name: 'All Difficulties', icon: Globe },
    { id: 'Beginner', name: 'Beginner', icon: GraduationCap },
    { id: 'Intermediate', name: 'Intermediate', icon: Layers },
    { id: 'Advanced', name: 'Advanced', icon: BarChart },
    { id: 'Varies', name: 'Varies', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      <div className="relative bg-gradient-to-b from-black via-red-900/40 to-gray-950 pt-24 pb-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_55%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4 mr-2" />
              Academy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Labs & Exercises
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Get hands-on practice in simulated environments. Explore CTFs, pentesting platforms, and topic-specific labs.
            </p>
            <Link href="/academy" className="mt-6 text-red-400 hover:text-red-300 flex items-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Academy Overview
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="sticky top-0 bg-gray-950/90 backdrop-blur-sm py-2 z-20 border-b border-gray-800 mb-4">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="w-full md:w-auto md:min-w-[160px]">
              <Select
                value={activeFilterDimension}
                onValueChange={(value: string) => setActiveFilterDimension(value)}
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white h-9 text-sm">
                  <SelectValue placeholder="Filter by..." />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="difficulty">Difficulty</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-grow w-full flex items-center gap-2">
              {activeFilterDimension === 'category' && (
            <CategoryFilter 
                  categories={categoryFilters}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
                  accentColor="red"
                />
              )}
              {activeFilterDimension === 'difficulty' && (
                <CategoryFilter
                  categories={difficultyFilters}
                  selectedCategory={selectedDifficulty}
                  setSelectedCategory={setSelectedDifficulty}
                  accentColor="red"
                />
              )}
              {(selectedCategory !== 'all' || selectedDifficulty !== 'all') && (
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => {
                     if (activeFilterDimension === 'category') setSelectedCategory('all');
                     if (activeFilterDimension === 'difficulty') setSelectedDifficulty('all');
                   }}
                   className="text-red-400 hover:text-red-300 hover:bg-red-900/20 px-2 h-9 whitespace-nowrap"
                   title={`Clear selected ${activeFilterDimension}`}
                 >
                   <X className="w-3 h-3 mr-1" /> Clear
                 </Button>
              )}
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto justify-end md:pt-0">
                <Switch
                    id="free-only-toggle"
                    checked={freeOnly}
                    onCheckedChange={setFreeOnly}
                    className="data-[state=checked]:bg-red-600"
                 />
                <Label htmlFor="free-only-toggle" className="text-sm font-medium text-gray-300 whitespace-nowrap">
                    Free Only
                </Label>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Showing {filteredLabs.length} lab resource{filteredLabs.length !== 1 ? 's' : ''}.
          {selectedCategory !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-red-900/50 text-red-300 text-xs'>
              Category: {categoryFilters.find(c => c.id === selectedCategory)?.name}
              <button onClick={() => setSelectedCategory('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
          {selectedDifficulty !== 'all' && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-red-900/50 text-red-300 text-xs'>
              Difficulty: {difficultyFilters.find(c => c.id === selectedDifficulty)?.name}
              <button onClick={() => setSelectedDifficulty('all')} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
           {freeOnly && 
            <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded bg-green-900/50 text-green-300 text-xs'>
              <CheckCircle size={12} className='mr-1'/> Free Only
               <button onClick={() => setFreeOnly(false)} className='ml-1 opacity-70 hover:opacity-100'><X size={12}/></button>
            </span>
          }
        </p>

        {filteredLabs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLabs.map((lab, index) => {
                const CategoryIcon = categoryFilters.find(c => c.id === lab.category)?.icon || FlaskConical;
                return (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-5 flex flex-col hover:border-red-500/50 transition-colors">
                        <div className="mb-3">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300">
                                {lab.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-1.5 text-xs mb-2">
                                <span className={`inline-flex items-center font-medium px-2 py-0.5 rounded ${lab.isFree ? 'bg-green-900/50 text-green-400' : 'bg-gray-700/60 text-gray-300'}`}>
                                    {lab.isFree ? <CheckCircle className="w-3 h-3 mr-1" /> : <DollarSign className="w-3 h-3 mr-1" />} {lab.isFree ? 'Free' : 'Paid/Freemium'}
                                </span>
                                <span className={`inline-flex items-center font-medium px-2 py-0.5 rounded bg-red-900/50 text-red-300`}>
                                    <DifficultyIndicator difficulty={lab.difficulty} />
                                    {lab.difficulty}
                                </span>
                                <span className="inline-flex items-center bg-gray-700/70 text-gray-300 px-2 py-0.5 rounded">
                                    <CategoryIcon className="w-3 h-3 mr-1.5 opacity-80" />
                                    {lab.category}
                              </span>
                                 <span className="inline-flex items-center bg-gray-700/70 text-gray-300 px-2 py-0.5 rounded">
                                    <FormatIcon format={lab.type} />
                                    {lab.type}
                                </span>
                            </div>
                          </div>

                        <p className="text-sm text-gray-300 mb-4 line-clamp-4 flex-grow">
                            {lab.description}
                        </p>

                        <div className="mt-auto pt-3 border-t border-gray-700/50 text-center">
                            <Button 
                               asChild
                               disabled={lab.url === '#'}
                               className={`w-full ${lab.url === '#' ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                            >
                               <Link 
                                 href={lab.url} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 title={lab.url === '#' ? 'Link unavailable' : 'Go to Lab/Platform'}
                               >
                                  {lab.url === '#' ? 'Link Unavailable' : 'Start Lab'}
                                  {lab.url !== '#' && <ExternalLink className="w-4 h-4 ml-2" />}
                              </Link>
                            </Button>
                          </div>
                        </div>
                );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/30 rounded-lg border border-gray-800 mt-8">
            <div className="text-red-500 mx-auto mb-4"><Search className="w-12 h-12" /></div>
            <h3 className="text-xl font-medium text-white mb-2">No Labs Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting the category, difficulty, or free filters.</p>
                <Button 
                  variant="outline" 
              onClick={() => { setSelectedCategory('all'); setSelectedDifficulty('all'); setFreeOnly(false); setActiveFilterDimension('category'); }}
              className="text-red-400 border-red-600 hover:bg-red-900/30 hover:text-red-300"
                >
              <X className="w-4 h-4 mr-2" /> Clear All Filters
                </Button>
          </div>
      )}
      </div>
    </div>
  )
}

const FormatIcon = ({ format }: { format: LabResource['type'] }) => {
  switch (format) {
    case 'Lab': return <FlaskConical className="w-3 h-3 mr-1.5 opacity-80" />;
    case 'Platform': return <Play className="w-3 h-3 mr-1.5 opacity-80" />;
    case 'Challenge Set': return <Flag className="w-3 h-3 mr-1.5 opacity-80" />;
    case 'OS Distribution': return <Terminal className="w-3 h-3 mr-1.5 opacity-80" />;
    default: return <LinkIcon className="w-3 h-3 mr-1.5 opacity-80" />;
  }
};

const DifficultyIndicator = ({ difficulty }: { difficulty: LabResource['difficulty'] }) => {
    let icon = GraduationCap;
    let color = "text-green-400";
    if (difficulty === 'Intermediate') { icon = Layers; color = "text-yellow-400"; }
    if (difficulty === 'Advanced') { icon = BarChart; color = "text-red-400"; }
    if (difficulty === 'Varies') { icon = Users; color = "text-blue-400"; }
    const IconComponent = icon;
    return <IconComponent className={`w-3 h-3 mr-1 ${color}`} />;
} 