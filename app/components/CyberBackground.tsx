"use client"

import React from 'react';

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950 opacity-90" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      
      {/* Animated cyber elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Digital particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/30 animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 5 + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* Digital circuit lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="#4F46E5" strokeWidth="0.5" />
            <path d="M30 10 L30 30 L50 30 L50 50 L70 50 L70 90" fill="none" stroke="#4F46E5" strokeWidth="0.5" />
            <path d="M10 50 L30 50 L30 70 L50 70 L50 90" fill="none" stroke="#4F46E5" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="2" fill="#4F46E5" />
            <circle cx="50" cy="50" r="2" fill="#4F46E5" />
            <circle cx="30" cy="70" r="2" fill="#4F46E5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Glowing accent elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl transform -translate-y-1/2 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl transform translate-y-1/2 animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Binary code rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-blue-500 text-xs font-mono animate-fall"
            style={{
              left: `${i * 10 + Math.random() * 5}%`,
              top: `-${Math.random() * 20}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div key={j} className="my-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberBackground; 