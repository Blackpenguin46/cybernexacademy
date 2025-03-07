"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import { motion } from 'framer-motion';

// Hero Button
export function HeroButton() {
  return (
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
      Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}

// Terminal Display
export function TerminalDisplay({ commandText }: { commandText: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    // Start with empty text
    setDisplayedText('');
    setIsTyping(true);
    
    // Type out the text character by character
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < commandText.length) {
        setDisplayedText(commandText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, [commandText]);

  return (
    <div className="font-mono text-sm bg-black p-3 rounded-md text-green-500 whitespace-pre-wrap">
      {displayedText}
      {cursorVisible && isTyping && <span className="inline-block w-2 h-4 bg-green-500 ml-1"></span>}
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