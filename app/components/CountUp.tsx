"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
}

const easeOutQuad = (t: number): number => t * (2 - t);

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const startValue = countRef.current;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeProgress = easeOutQuad(progress);
      const currentCount = startValue + (end - startValue) * easeProgress;

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, inView]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const [whole, decimal] = fixed.split('.');
    const parts = whole.split('').reverse();
    const formatted = [];
    
    for (let i = 0; i < parts.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formatted.push(separator);
      }
      formatted.push(parts[i]);
    }
    
    const result = formatted.reverse().join('');
    return decimal ? `${result}.${decimal}` : result;
  };

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default CountUp; 