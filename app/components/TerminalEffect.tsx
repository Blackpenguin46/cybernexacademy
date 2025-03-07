"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalEffectProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  cursorColor?: string;
}

const TerminalEffect: React.FC<TerminalEffectProps> = ({
  text,
  typingSpeed = 50,
  className = '',
  cursorColor = '#3B82F6'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, text, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`font-mono relative ${className}`}
    >
      <span>{displayedText}</span>
      {isTyping && (
        <span
          className="inline-block w-2 ml-1 animate-pulse"
          style={{ 
            backgroundColor: cursorColor,
            height: '1.2em',
            verticalAlign: 'middle'
          }}
        ></span>
      )}
    </motion.div>
  );
};

export default TerminalEffect;

