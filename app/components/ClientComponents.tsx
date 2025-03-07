"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import TerminalEffect from "./TerminalEffect";

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
  return <TerminalEffect text={commandText} />;
}

// Statistics Counter
export function StatisticsCounter({ end, prefix, suffix }: { end: number; prefix?: string; suffix?: string }) {
  return <CountUp end={end} prefix={prefix} suffix={suffix} />;
}

// CTA Button
export function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
      {children}
    </Button>
  );
} 