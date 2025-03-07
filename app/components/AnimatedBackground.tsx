"use client";

import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20 animate-pulse"
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

      {/* Gradient lines */}
      <div className="absolute inset-0">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl transform -translate-y-1/2 animate-gradient-slow" />
        <div className="absolute w-1/2 h-1/2 right-0 bottom-0 bg-gradient-to-l from-blue-500/10 via-purple-500/10 to-transparent blur-3xl transform translate-y-1/2 animate-gradient-slow" />
      </div>

      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/40 to-black/60" />
    </div>
  );
};

export default AnimatedBackground;