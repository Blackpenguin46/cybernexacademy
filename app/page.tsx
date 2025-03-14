"use client";

import { useEffect, useRef, useState } from 'react';

export default function LandingPage() {
  // Reference to features section for smooth scrolling
  const featuresRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  
  // Function to handle scroll to features section
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Hide arrow when user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      const scrollArrow = document.querySelector('.scroll-arrow');
      if (scrollArrow) {
        if (window.scrollY > 200) {
          scrollArrow.classList.add('opacity-0');
        } else {
          scrollArrow.classList.remove('opacity-0');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus('success');
      setMessage('Successfully joined the waitlist! We\'ll keep you updated.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 cyber-grid binary-accent">
          {/* Top circuit line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(var(--primary))] to-transparent opacity-50"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto pt-8 md:pt-12">
              {/* Title with glitch effect */}
              <div className="title-container">
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 cyber-glitch neon-text" 
                  data-text="CyberNex Academy">
                  CyberNex Academy
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-10 text-[rgb(var(--secondary))]">
                  Your Ultimate <span className="text-[rgb(var(--primary))]">Cybersecurity</span> Resource Hub
                </h2>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                CyberNex Academy is revolutionizing how you discover and access cybersecurity resources. 
                We're building the most comprehensive platform to guide your cybersecurity journey, 
                from beginner to expert.
              </p>

              {/* Email Signup Form */}
              <div className="max-w-md mx-auto mb-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2 bg-[rgba(var(--dark-surface),0.7)] border border-[rgba(var(--primary),0.3)] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[rgb(var(--primary))] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                  {message && (
                    <p className={`text-sm ${status === 'success' ? 'text-[rgb(var(--primary))]' : 'text-[rgb(var(--accent))]'}`}>
                      {message}
                    </p>
                  )}
                </form>
              </div>

              {/* Coming Soon Message in a terminal box */}
              <div className="max-w-md mx-auto mb-8 terminal-box p-4">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-xs text-gray-400 ml-2">cybernex@terminal:~</span>
                </div>
                <p className="text-lg font-mono text-[rgb(var(--primary))]">
                  <span className="text-[rgb(var(--secondary))]">$</span> <span className="typing-animation">Launch status: Preparing deployment...</span>
                </p>
                <p className="text-sm font-mono text-gray-300 mt-2">
                  <span className="text-[rgb(var(--accent))]">&gt;</span> We're working hard to bring you the best cybersecurity resource platform.
                </p>
                <p className="text-sm font-mono text-gray-300 mt-1">
                  <span className="text-[rgb(var(--accent))]">&gt;</span> Check back soon for updates!
                </p>
              </div>
            </div>
          </div>
          
          {/* Scroll down arrow */}
          <div className="scroll-arrow transition-opacity duration-500" onClick={scrollToFeatures}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"></path>
              <path d="M19 12l-7 7-7-7"></path>
            </svg>
          </div>
          
          {/* Angled separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 text-[rgb(var(--dark-surface))] fill-current">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} id="features" className="pt-16 pb-12 bg-[rgb(var(--dark-surface))]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text cyber-font">
                &lt;Key_Resources&gt;
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Access the best cybersecurity learning materials to accelerate your career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-12 h-12 bg-[rgba(var(--primary),0.1)] rounded-full flex items-center justify-center mb-4 mx-auto border border-[rgba(var(--primary),0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center cyber-font text-[rgb(var(--secondary))]">Curated Resources</h3>
                <p className="text-gray-400 text-center">Hand-picked courses, training materials, and certification guides from trusted providers</p>
              </div>
              
              <div className="cyber-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-12 h-12 bg-[rgba(var(--primary),0.1)] rounded-full flex items-center justify-center mb-4 mx-auto border border-[rgba(var(--primary),0.3)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[rgb(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center cyber-font text-[rgb(var(--secondary))]">Resource Comparison</h3>
                <p className="text-gray-400 text-center">Compare different learning options, certifications, and career paths to make informed decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section id="why-us" className="py-16 bg-[rgb(var(--dark-bg))] binary-accent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font neon-text">
                &lt;Why_Choose_CyberNex/&gt;
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're building the resource hub we wish existed when we started our cybersecurity journeys.
              </p>
            </div>
            
            <div className="terminal-box overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-[rgb(var(--primary))] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200"><span className="text-[rgb(var(--secondary))]">Comprehensive</span> database of cybersecurity courses, certifications, and training programs</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-[rgb(var(--primary))] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200"><span className="text-[rgb(var(--secondary))]">Resource comparison</span> tools to find the right learning options</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-[rgb(var(--primary))] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200"><span className="text-[rgb(var(--secondary))]">Trusted information</span> curated by industry experts</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-[rgb(var(--primary))] mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200"><span className="text-[rgb(var(--secondary))]">Regular updates</span> on new resources and industry trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-[rgba(var(--primary),0.2)] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold cyber-font neon-text">
                CyberNex_
              </span>
              <p className="text-gray-400 mt-2">Your cybersecurity journey starts here.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-500 text-sm cyber-font">&copy; 2025 CyberNex Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


