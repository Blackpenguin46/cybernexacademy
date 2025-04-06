// app/components/TerminalLoader.tsx
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils';

// Define types for the different phases
type TerminalPhase = 'typing' | 'hashing' | 'splashing' | 'done';

interface TerminalLoaderProps {
  accentColor?: string; // Primarily for border now
  resourceType?: string;
  onComplete?: () => void;
}

// Function to generate a random hash-like string
const generateHash = (length = 64) => {
  const characters = 'abcdef0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const TerminalLoader: React.FC<TerminalLoaderProps> = ({
  accentColor = 'green', // Default to green for border/prompt
  resourceType = 'Resources',
  onComplete,
}) => {
  const [phase, setPhase] = useState<TerminalPhase>('typing');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedContent, setDisplayedContent] = useState<string[]>([]); // Unified content state
  const [showCursor, setShowCursor] = useState(true);

  // Memoized initial command lines
  const commandLines = useMemo(() => [
    `Initializing connection... OK`,
    `Authenticating user... OK`,
    `Querying ${resourceType} database...`,
    `Filtering results...`,
    `Applying preferences...`,
    `Fetching ${resourceType}...`,
    `[INFO] ${Math.floor(Math.random() * 50) + 10} ${resourceType.toLowerCase()} found.`, // Random number
    `Rendering UI components...`,
    `Status: Complete. ${resourceType} loaded.`, // Final command line
  ], [resourceType]);

  const typingSpeed = 40;
  const lineDelay = 150;
  const hashDuration = 1500; // ms
  const splashDuration = 2000; // ms
  const hashLinesCount = 10; // How many hash lines to show at once

  // --- Typing Effect ---
  useEffect(() => {
    if (phase !== 'typing') return;

    if (currentLineIndex < commandLines.length) {
      const line = commandLines[currentLineIndex];
      let charIndex = 0;

      setDisplayedContent((prev) => {
        const newContent = [...prev];
        if (newContent.length <= currentLineIndex) newContent[currentLineIndex] = '';
        return newContent;
      });

      const typingInterval = setInterval(() => {
        setDisplayedContent((prev) => {
          const newContent = [...prev];
          if (newContent.length > currentLineIndex) {
            newContent[currentLineIndex] = line.substring(0, charIndex + 1);
          }
          return newContent;
        });
        charIndex++;
        if (charIndex === line.length) {
          clearInterval(typingInterval);
          if (currentLineIndex < commandLines.length - 1) {
            setTimeout(() => setCurrentLineIndex((prev) => prev + 1), lineDelay);
          } else {
            // Finished typing commands, start hashing
            setTimeout(() => setPhase('hashing'), lineDelay * 2);
          }
        }
      }, typingSpeed);
      return () => clearInterval(typingInterval);
    }
  }, [phase, currentLineIndex, commandLines, lineDelay, typingSpeed]);

  // --- Hashing Effect ---
  useEffect(() => {
    if (phase !== 'hashing') return;

    let hashInterval: NodeJS.Timeout;
    const startTime = Date.now();

    const updateHashes = () => {
      const hashes = Array.from({ length: hashLinesCount }, () => `$ ${generateHash()}`);
      setDisplayedContent(hashes);
      if (Date.now() - startTime < hashDuration) {
        hashInterval = setTimeout(updateHashes, 50); // Update rapidly
      } else {
        // Finished hashing, start splashing
        setPhase('splashing');
      }
    };

    updateHashes(); // Start the hash updates

    return () => clearTimeout(hashInterval);
  }, [phase, hashDuration]);

  // --- Splashing Effect ---
  useEffect(() => {
    if (phase !== 'splashing') return;

    // Clear content and prepare for splash text
    setDisplayedContent([]);
    setShowCursor(false); // Hide cursor during splash

    const splashTimeout = setTimeout(() => {
      setPhase('done');
      if (onComplete) {
        onComplete(); // Call the original completion callback
      }
    }, splashDuration);

    return () => clearTimeout(splashTimeout);
  }, [phase, splashDuration, onComplete]);

  // --- Cursor Blinking ---
  useEffect(() => {
    // Blink only during typing and hashing phases
    if (phase !== 'typing' && phase !== 'hashing') {
      setShowCursor(false);
      return;
    }

    setShowCursor(true);
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [phase]);

  // Dynamic classes
  const accentTextClass = `text-${accentColor}-400`;
  // Use black background, accent border
  const accentBorderClass = `border-${accentColor}-700/50`;

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto p-4 md:p-6 rounded-lg font-mono text-sm border shadow-lg",
      "bg-black", // Black background
      accentBorderClass
    )}>
      {/* Terminal Header */}
      <div className="flex items-center pb-2 mb-2 border-b border-gray-700">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-auto text-xs text-gray-500">zsh</span>
      </div>

      {/* Terminal Content Area */}
      <div className="text-green-400 min-h-[200px] relative"> {/* Changed text-gray-300 to text-green-400 */}
        {phase === 'typing' && (
          commandLines.slice(0, currentLineIndex + 1).map((lineContent, index) => (
            <div key={`cmd-${index}`} className="whitespace-pre-wrap break-words leading-relaxed">
              <span className={cn("mr-1", accentTextClass)}>$</span>
              <span dangerouslySetInnerHTML={{
                __html: (index === currentLineIndex ? displayedContent[index] || '' : lineContent)
                  .replace(/OK/g, `<span class="text-green-400">OK</span>`)
                  .replace(/\[INFO\]/g, `<span class="text-blue-400">[INFO]</span>`)
              }} />
              {index === currentLineIndex && showCursor && (
                <span className="inline-block w-2 h-4 ml-0.5 bg-gray-300 animate-pulse align-middle"></span>
              )}
            </div>
          ))
        )}

        {phase === 'hashing' && (
          displayedContent.map((hashLine, index) => (
            <div key={`hash-${index}`} className="whitespace-nowrap overflow-hidden break-keep leading-relaxed">
              <span className={cn("mr-1 text-gray-600")}>#</span> {/* Keep hash prompt gray */}
              <span className="text-green-400">{hashLine.substring(2)}</span> {/* Changed text-gray-500 to text-green-400 */}
              {index === hashLinesCount - 1 && showCursor && (
                <span className="inline-block w-2 h-4 ml-0.5 bg-gray-300 animate-pulse align-middle"></span>
              )}
            </div>
          ))
        )}

        {phase === 'splashing' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className={cn("text-3xl font-bold animate-pulse", accentTextClass)}>
              Welcome to CyberNex Academy
            </h2>
          </div>
        )}

        {/* Initial Cursor */}
        {phase === 'typing' && currentLineIndex === 0 && (!displayedContent[0] || displayedContent[0].length === 0) && showCursor && (
          <div className="whitespace-pre-wrap break-words leading-relaxed">
            <span className={cn("mr-1", accentTextClass)}>$</span>
            <span className="inline-block w-2 h-4 ml-0.5 bg-gray-300 animate-pulse align-middle"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalLoader;