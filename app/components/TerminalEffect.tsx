"use client"

import React, { useState, useEffect } from 'react';

interface TerminalEffectProps {
  text: string;
  typingSpeed?: number;
}

const TerminalEffect: React.FC<TerminalEffectProps> = ({ text, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className="font-mono text-sm">
      <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-gray-300">
          {displayedText}
          <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
};

export default TerminalEffect;

