import React from 'react';
import Link from 'next/link';

export default function AboutFundamentals() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">About Fundamentals</h1>
      <div className="prose">
        <p>Learn about cybersecurity fundamentals...</p>
      </div>
      <Link href="/" className="mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
} 