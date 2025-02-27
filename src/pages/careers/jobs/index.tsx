import React from 'react';
import Link from 'next/link';

export default function Jobs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Career Opportunities</h1>
      <div className="prose">
        <p>Explore cybersecurity career opportunities...</p>
      </div>
      <Link href="/" className="mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
} 