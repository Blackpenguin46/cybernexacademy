// app/components/TerminalLoader.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react'; // Added useMemo
import { cn } from '@/lib/utils'; // Assuming you have this utility for class names

interface TerminalLoaderProps {
  accentColor?: string; // e.g., 'teal', 'yellow', 'blue', 'cyan'
  resourceType?: string; // e.g., 'Tools', 'Cheatsheets', 'Forums'
  onComplete?: () => void; // Optional callback when animation finishes
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({
  accentColor = 'teal', // Default accent color
  resourceType = 'Resources',
  onComplete,
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0); // Renamed state
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // useMemo to prevent lines array from being recreated on every render
  const lines = useMemo(() => [
    `Initializing connection... OK`,
    `Authenticating user... OK`,
    `Querying ${resourceType} database...`,
    `Filtering by category...`,
    `Applying user preferences...`,
    `Fetching ${resourceType}...`,
    `[INFO] ${Math.floor(Math.random() * 50) + 10} ${resourceType.toLowerCase()} found.`, // Random number for effect
    `Rendering UI components...`,
    `Status: Complete. ${resourceType} loaded.`, // Updated completion message
  ], [resourceType]); // Dependency: resourceType

  const typingSpeed = 50; // ms per character
  const lineDelay = 200; // ms between lines

  useEffect(() => {
    // Only run if not complete and index is valid
    if (!isComplete && currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      let charIndex = 0;

      // Initialize the current line in displayedLines if it doesn't exist
      setDisplayedLines((prev) => {
        const newLines = [...prev];
        if (newLines.length <= currentLineIndex) {
          newLines[currentLineIndex] = '';
        }
        return newLines;
      });

      const typingInterval = setInterval(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          // Make sure the line exists before trying to update
          if (newLines.length > currentLineIndex) {
             newLines[currentLineIndex] = line.substring(0, charIndex + 1);
          }
          return newLines;
        });

        charIndex++;

        if (charIndex === line.length) {
          clearInterval(typingInterval);
          // Only schedule next line if we are not on the last line yet
          if (currentLineIndex < lines.length - 1) {
             setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
             }, lineDelay);
          } else {
            // We just finished typing the last line
            setIsComplete(true);
            if (onComplete) {
              setTimeout(onComplete, 500); // Delay before calling completion callback
            }
          }
        }
      }, typingSpeed);

      // Cleanup function for the interval
      return () => clearInterval(typingInterval);
    }
  // Effect dependencies
  }, [currentLineIndex, lines, onComplete, isComplete, lineDelay, typingSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    if (isComplete) {
      setShowCursor(false); // Hide cursor when done
      return;
    }
    // Start blinking immediately
    setShowCursor(true);
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink speed

    return () => clearInterval(cursorInterval);
  }, [isComplete]);

  // Dynamic color classes using Tailwind JIT
  // Note: For Tailwind JIT to reliably pick these up, ensure these specific color
  // combinations (e.g., text-teal-400, bg-teal-900/60) appear somewhere in your
  // project files OR configure Tailwind safelisting.
  const accentTextClass = `text-${accentColor}-400`;
  const accentBgClass = `bg-${accentColor}-900/60`;
  const accentBorderClass = `border-${accentColor}-700/50`;

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto p-4 md:p-6 rounded-lg font-mono text-sm border shadow-lg", // Added shadow
      accentBgClass,
      accentBorderClass
    )}>
      <div className="flex items-center pb-2 mb-2 border-b border-gray-700">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-auto text-xs text-gray-500">bash</span>
      </div>
      <div className="text-gray-300 min-h-[180px]"> {/* Added min-height */}
        {lines.slice(0, currentLineIndex + 1).map((lineContent, index) => (
          <div key={index} className="whitespace-pre-wrap break-words leading-relaxed"> {/* Added leading-relaxed */}
            <span className={cn("mr-1", accentTextClass)}>$</span> {/* Prompt */}
            {/* Render typed characters for the current line, full line for previous lines */}
            <span dangerouslySetInnerHTML={{
              __html: (index === currentLineIndex ? displayedLines[index] || '' : lineContent)
                .replace(/OK/g, `<span class="text-green-400">OK</span>`)
                .replace(/\[INFO\]/g, `<span class="text-blue-400">[INFO]</span>`) // Corrected regex
            }} />
            {/* Show cursor only at the end of the currently typing line */}
            {index === currentLineIndex && !isComplete && showCursor && (
              <>
                <span className="inline-block w-2 h-4 ml-0.5 bg-gray-300 animate-pulse align-middle"></span> {/* Blinking cursor */}
              </>
            )}
          </div>
        ))}
        {/* Handle initial state before any lines are shown */}
        {currentLineIndex === 0 && (!displayedLines[0] || displayedLines[0].length === 0) && !isComplete && showCursor && (
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