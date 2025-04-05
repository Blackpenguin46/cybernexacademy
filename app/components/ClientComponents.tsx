"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import { motion } from 'framer-motion';

// Hero Button - Removed since we now use a local version in page.tsx

// Terminal Display
export function TerminalDisplay({ commandText }: { commandText: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [resultsText, setResultsText] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [matrixRain, setMatrixRain] = useState<Array<string>>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  // Sequence of commands to execute
  const commands = [
    {
      cmd: "cybernex --version",
      output: `CyberNex CLI v2.5.1
Copyright (c) 2023-2024 CyberNex Academy
License: MIT`
    },
    {
      cmd: "cybernex resource --list",
      output: `┌─────────────────────────────────────────────────┐
│ Available Cybersecurity Resources                │
├─────────────────────────────────────────────────┤
│ 1. Academy - Educational materials and courses   │
│ 2. Community - Forums and discussion platforms   │
│ 3. Insights - News, trends, and threat intel     │
│ 4. Tools - Security utilities and applications   │
│ 5. Labs - Hands-on practice environments         │
└─────────────────────────────────────────────────┘`
    },
    {
      cmd: "cybernex scan --security-check",
      output: `Scanning environment for security vulnerabilities...
[✓] Network protection: Strong
[✓] Encryption: Enabled (AES-256)
[✓] Firewall: Active
[✓] Authentication: Multi-factor enabled
[✓] Session security: HTTP-only cookies

Security Status: SECURE`
    },
    {
      cmd: "cybernex init --load-resources",
      output: `Initializing CyberNex learning environment...
[████████████████████] 100% complete

All cybersecurity resources loaded successfully!
Your cybersecurity learning resources are ready.
Type 'cybernex help' for a list of available commands.

Welcome to CyberNex Academy - Your cybersecurity learning journey begins now!`
    }
  ];

  // Initialize Matrix Rain
  useEffect(() => {
    // Create Matrix rain effect
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const rainColumns = 50;
    const rainLength = 20;
    let rainData: string[] = [];
    
    for (let i = 0; i < rainColumns; i++) {
      let column = '';
      for (let j = 0; j < rainLength; j++) {
        column += chars[Math.floor(Math.random() * chars.length)];
      }
      rainData.push(column);
    }
    
    setMatrixRain(rainData);
    
    // Start the animation of the rain
    const rainInterval = setInterval(() => {
      setMatrixRain(prev => 
        prev.map(col => col.substring(1) + col.charAt(0))
      );
    }, 100);
    
    return () => clearInterval(rainInterval);
  }, []);

  // Handle command execution
  useEffect(() => {
    if (currentCommandIndex >= commands.length) return;
    
    try {
      setError(null);
      const currentCommand = commands[currentCommandIndex];
      
      // Reset states
      setDisplayedText('');
      setIsTyping(true);
      setShowResults(false);
      setShowStatus(false);
      
      // Type the command
      let charIndex = 0;
      const typeSpeed = 50; // ms between characters
      
      const typeCommand = () => {
        if (charIndex < currentCommand.cmd.length) {
          setDisplayedText(currentCommand.cmd.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeCommand, Math.random() * 50 + 20); // Random delay for realistic typing
        } else {
          // Command typing finished
          setTimeout(() => {
            setIsTyping(false);
            
            // Show "executing"
            setShowResults(true);
            setResultsText("Executing command...");
            
            // Show results after a delay
            setTimeout(() => {
              // Type out the results
              let resultIndex = 0;
              const typeResult = () => {
                if (resultIndex < currentCommand.output.length) {
                  setResultsText(currentCommand.output.slice(0, resultIndex + 1));
                  resultIndex++;
                  setTimeout(typeResult, Math.random() * 5 + 1); // Fast typing for results
                } else {
                  // Results complete, show status
                  setTimeout(() => {
                    setShowStatus(true);
                    
                    // Move to next command
                    if (currentCommandIndex < commands.length - 1) {
                      setTimeout(() => {
                        setCurrentCommandIndex(prev => prev + 1);
                      }, 1500);
                    }
                  }, 500);
                }
              };
              
              typeResult();
            }, 800);
          }, 500);
        }
      };
      
      // Start typing after a small delay
      setTimeout(typeCommand, 300);
      
    } catch (err) {
      console.error("Terminal effect error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }, [currentCommandIndex, commands]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 600);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Immediate start
  useEffect(() => {
    // Force start the first command
    setCurrentCommandIndex(0);
  }, []);

  return (
    <div className="terminal-container font-mono text-sm bg-black p-4 rounded-md relative overflow-hidden border border-green-500/20 h-full w-full">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/90">
          <div className="text-red-500 p-4 text-center">
            <p>Terminal error: {error}</p>
            <p className="mt-2 text-gray-400 text-xs">Please refresh the page to try again</p>
          </div>
        </div>
      )}
      
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 text-green-500/5 overflow-hidden opacity-20 select-none pointer-events-none z-0">
        <div className="flex justify-between h-full">
          {matrixRain.map((column, i) => (
            <div key={i} className="text-xs leading-3 tracking-tight overflow-hidden whitespace-pre">
              {column}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/[0.02] to-transparent bg-[length:100%_3px] z-[1] pointer-events-none"></div>
      
      {/* Terminal content */}
      <div className="relative z-10 overflow-y-auto h-full flex flex-col">
        {/* Show command history for previous commands */}
        {currentCommandIndex > 0 && (
          <div className="space-y-1 mb-3 opacity-70">
            {commands.slice(0, currentCommandIndex).map((cmd, index) => (
              <div key={index} className="text-xs">
                <div className="flex">
                  <span className="text-blue-500 mr-2 font-bold">$</span>
                  <span className="text-green-400">{cmd.cmd}</span>
                </div>
                <div className="text-gray-400 ml-4 text-xs whitespace-pre-wrap">{cmd.output.length > 120 ? cmd.output.substring(0, 120) + '...' : cmd.output}</div>
              </div>
            ))}
            <div className="border-t border-gray-800 my-2"></div>
          </div>
        )}
        
        {/* Current command */}
        <div className="flex">
          <span className="text-blue-500 mr-2 font-bold">$</span>
          <div>
            <span className="text-green-400 [text-shadow:0_0_5px_rgba(74,222,128,0.3)]">{displayedText}</span>
            {isTyping && cursorVisible && (
              <span className="inline-block w-2.5 h-5 bg-green-400 ml-1"></span>
            )}
          </div>
        </div>
        
        {showResults && (
          <div className="mt-2 text-green-400 [text-shadow:0_0_3px_rgba(74,222,128,0.2)]">
            {resultsText === "Executing command..." ? (
              <div>
                {resultsText}
                <span className="inline-block ml-1">
                  <span className="inline-block w-1 h-1 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="inline-block w-1 h-1 bg-green-400 rounded-full ml-1 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                  <span className="inline-block w-1 h-1 bg-green-400 rounded-full ml-1 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                </span>
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-xs">{resultsText}</div>
            )}
          </div>
        )}
        
        {showStatus && (
          <div className="mt-4 flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <p className="font-mono text-xs [text-shadow:0_0_5px_rgba(74,222,128,0.3)]">
              {currentCommandIndex < commands.length - 1 ? 'Command completed. Executing next command...' : 'Resources are ready. System initialized successfully!'}
            </p>
          </div>
        )}
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-[2] pointer-events-none"></div>
      
      {/* CRT screen effect - subtle curved edges */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-br from-black/0 via-black/0 to-green-900/10 z-[3] pointer-events-none"></div>
    </div>
  );
}

// Statistics Counter
export function StatisticsCounter({ end, prefix, suffix }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simple counter animation
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(progress * end);
      
      if (frame === totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix || ''}{count}{suffix || ''}
    </motion.span>
  );
}

// CTA Button
export function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
      {children}
    </Button>
  );
} 