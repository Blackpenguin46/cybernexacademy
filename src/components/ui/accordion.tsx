import React, { useState } from 'react';

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ 
  title, 
  children 
}: { 
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 border-t">{children}</div>}
    </div>
  );
} 