"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, MessagesSquare, Globe, FileText, Instagram, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';

const CommunityPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  // Community sections data
  const communitySections = [
    {
      title: 'Discord Server',
      description: 'Join our active Discord community for discussions, help, and networking',
      icon: MessagesSquare,
      href: 'https://discord.gg/cybernex',
      color: '#5865F2',
      isExternal: true,
    },
    {
      title: 'Instagram',
      description: 'Follow us on Instagram for quick tips, news, and visual cybersecurity content',
      icon: Instagram,
      href: 'https://instagram.com/cybernexacademy',
      color: '#E1306C',
      isExternal: true,
    },
    {
      title: 'Community Hub',
      description: 'Find study groups, mentors, and collaborators for projects',
      icon: Users,
      href: '/community/hub',
      color: 'neon-green',
    },
    {
      title: 'Online Spaces',
      description: 'Virtual meeting rooms, labs, and collaboration spaces',
      icon: Globe,
      href: '/community/spaces',
      color: 'neon-blue',
    },
    {
      title: 'Events',
      description: 'Webinars, workshops, CTF competitions, and meetups',
      icon: Calendar,
      href: '/community/events',
      color: 'neon-purple',
    },
    {
      title: 'Community Leaders',
      description: 'Meet our moderators, mentors, and content creators',
      icon: User,
      href: '/community/leaders',
      color: 'neon-pink',
    },
  ];

  // Community events
  const upcomingEvents = [
    {
      title: 'Introduction to Ethical Hacking',
      type: 'Workshop',
      date: 'June 25, 2023',
      time: '3:00 PM - 5:00 PM EDT',
      host: 'Sarah Johnson',
      location: 'Discord',
      href: '/community/events/intro-ethical-hacking',
    },
    {
      title: 'Monthly CTF Competition',
      type: 'Competition',
      date: 'July 1-2, 2023',
      time: 'All Day',
      host: 'CyberNex Team',
      location: 'Virtual Lab',
      href: '/community/events/monthly-ctf',
    },
    {
      title: 'Job Hunting in Cybersecurity',
      type: 'Panel Discussion',
      date: 'July 10, 2023',
      time: '6:00 PM - 7:30 PM EDT',
      host: 'Industry Professionals',
      location: 'Zoom Webinar',
      href: '/community/events/job-hunting',
    },
  ];

  // Featured community leaders
  const communityLeaders = [
    {
      name: 'Alex Rivera',
      role: 'Discord Admin',
      specialty: 'Network Security',
      image: '/placeholders/leader1.jpg',
      href: '/community/leaders/alex-rivera',
    },
    {
      name: 'Maya Chen',
      role: 'Content Creator',
      specialty: 'Malware Analysis',
      image: '/placeholders/leader2.jpg',
      href: '/community/leaders/maya-chen',
    },
    {
      name: 'Jamal Washington',
      role: 'Mentor',
      specialty: 'Cloud Security',
      image: '/placeholders/leader3.jpg',
      href: '/community/leaders/jamal-washington',
    },
    {
      name: 'Sophia Patel',
      role: 'Event Coordinator',
      specialty: 'Web Application Security',
      image: '/placeholders/leader4.jpg',
      href: '/community/leaders/sophia-patel',
    },
  ];

  return (
    <div className="space-y-20 mb-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative overflow-hidden py-24"
      >
        {/* Background effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-neon-green/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUpVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple tracking-tight">
              CyberNex Community
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUpVariants} className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Connect with cybersecurity enthusiasts, professionals, and mentors 
            to share knowledge, collaborate on projects, and grow together.
          </motion.p>
          
          <motion.div variants={fadeInUpVariants} className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://discord.gg/cybernex" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-btn bg-[#5865F2] hover:bg-[#5865F2]/90 text-white text-base py-3 px-6 rounded-md flex items-center justify-center"
            >
              Join Discord
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <Link href="/community/events" className="cyber-btn-secondary text-base py-3 px-6 rounded-md flex items-center justify-center">
              Upcoming Events
              <Calendar className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Sections Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Connect With Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore the different ways to engage with our community and find the perfect space for your interests.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communitySections.map((section, index) => (
              <motion.div key={section.title} variants={fadeInUpVariants} className="h-full">
                {section.isExternal ? (
                  <a 
                    href={section.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cyber-card group h-full block hover:shadow-glow transition-all duration-300"
                    style={{ 
                      '--hover-shadow-color': typeof section.color === 'string' && section.color.startsWith('#') 
                        ? section.color 
                        : 'var(--color-neon-blue)' 
                    } as React.CSSProperties}
                  >
                    <div className="flex flex-col h-full">
                      <div 
                        className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5`}
                        style={{ 
                          backgroundColor: `${section.color}20`,
                          color: section.color
                        }}
                      >
                        <section.icon className="w-8 h-8" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 group-hover:text-[${section.color}] transition-colors`}>
                        {section.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{section.description}</p>
                      <div className="flex items-center text-gray-400 group-hover:text-[color:var(--hover-shadow-color)] transition-colors mt-auto">
                        <span>Visit</span>
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link 
                    href={section.href} 
                    className="cyber-card group h-full block hover:shadow-glow transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-lg bg-${section.color}/10 flex items-center justify-center text-${section.color} mb-5`}>
                      <section.icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 group-hover:text-${section.color} transition-colors`}>
                      {section.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{section.description}</p>
                    <div className="flex items-center text-gray-400 group-hover:text-neon-blue transition-colors mt-auto">
                      <span>Explore</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="border-t border-dark-border relative py-24"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Upcoming Events</h2>
              <p className="text-gray-300 max-w-2xl">
                Join us for virtual workshops, competitions, and networking opportunities
              </p>
            </div>
            <Link href="/community/events" className="text-neon-blue hover:text-neon-blue/80 flex items-center mt-6 md:mt-0 group transition-colors">
              <span>View All Events</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div 
                key={event.title} 
                variants={fadeInUpVariants}
                className="cyber-card hover:shadow-glow transition-all duration-300"
              >
                <Link href={event.href} className="block p-6 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <span className="bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-full text-xs mr-3">
                          {event.type}
                        </span>
                        <span className="text-gray-400 text-sm">{event.date} • {event.time}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">{event.title}</h3>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-400 mr-4">Host: {event.host}</span>
                        <span className="text-gray-400">Location: {event.location}</span>
                      </div>
                    </div>
                    <div className="self-start md:self-center">
                      <button className="cyber-btn-secondary py-2 px-4 rounded-md text-sm">
                        Register
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Community Leaders */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="border-t border-dark-border relative py-24"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUpVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Community Leaders</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our dedicated team of volunteers who help build and nurture the CyberNex community
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLeaders.map((leader, index) => (
              <motion.div 
                key={leader.name} 
                variants={fadeInUpVariants}
                className="cyber-card hover:shadow-glow transition-all duration-300"
              >
                <Link href={leader.href} className="block p-6 text-center group">
                  <div className="w-20 h-20 rounded-full bg-neon-blue/10 mx-auto mb-4">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full rounded-full flex items-center justify-center text-neon-blue">
                      <User className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-neon-blue transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-neon-green text-sm mb-1">{leader.role}</p>
                  <p className="text-gray-400 text-sm">{leader.specialty}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join the Community CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUpVariants}
            className="cyber-card overflow-hidden relative"
          >
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-blue/10 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center p-8 gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Ready to Join Our Community?</h2>
                <p className="text-gray-300 mb-6">
                  Connect with thousands of cybersecurity enthusiasts, share knowledge, 
                  find mentors, and collaborate on exciting projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discord.gg/cybernex" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cyber-btn bg-[#5865F2] hover:bg-[#5865F2]/90 text-white py-2.5 px-5 rounded-md inline-flex items-center"
                  >
                    Join Discord
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  <a 
                    href="https://instagram.com/cybernexacademy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cyber-btn bg-[#E1306C] hover:bg-[#E1306C]/90 text-white py-2.5 px-5 rounded-md inline-flex items-center"
                  >
                    Follow on Instagram
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="w-28 h-28 rounded-full bg-neon-green/20 flex items-center justify-center">
                  <Users className="w-16 h-16 text-neon-green" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CommunityPage; 