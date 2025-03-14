import { NextRequest, NextResponse } from 'next/server';

interface RateLimitConfig {
  limit: number;
  windowMs: number;
}

// Simple in-memory store
type IpRecord = {
  count: number;
  lastRequestTime: number;
  resetTime: number;
};

const ipRequestCounts: Map<string, IpRecord> = new Map();

export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig = { limit: 5, windowMs: 60000 }
) {
  const ip = request.ip || 'anonymous';
  const now = Date.now();
  const resetTime = now + config.windowMs;
  
  // Get existing record for this IP
  const record = ipRequestCounts.get(ip);
  
  if (!record) {
    // First time request
    ipRequestCounts.set(ip, {
      count: 1,
      lastRequestTime: now,
      resetTime
    });
    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - 1,
      resetTime,
    };
  }
  
  // Check if the window has expired
  if (now > record.resetTime) {
    // Reset window
    record.count = 1;
    record.lastRequestTime = now;
    record.resetTime = resetTime;
    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - 1,
      resetTime,
    };
  }
  
  // Check if rate limit is exceeded
  if (record.count >= config.limit) {
    console.warn(`Rate limit exceeded for IP: ${ip}`);
    return {
      success: false,
      limit: config.limit,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }
  
  // Increment the request count
  record.count += 1;
  record.lastRequestTime = now;
  
  return {
    success: true,
    limit: config.limit,
    remaining: config.limit - record.count,
    resetTime: record.resetTime,
  };
}

// Clean up old IP records every hour
setInterval(() => {
  const now = Date.now();
  // Use Array.from to convert Map entries to an array for iteration
  Array.from(ipRequestCounts.entries()).forEach(([ip, record]) => {
    if (now > record.resetTime + 3600000) { // 1 hour after reset
      ipRequestCounts.delete(ip);
    }
  });
}, 3600000); // Run every hour

// Helper function to handle rate limit responses
export async function handleRateLimit(
  request: NextRequest,
  config: RateLimitConfig = { limit: 5, windowMs: 60000 }
): Promise<{ response: NextResponse; success: boolean }> {
  const result = await rateLimit(request, config);
  
  if (!result.success) {
    const response = NextResponse.json(
      { error: 'Too many requests, please try again later.' },
      { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString(),
          'X-RateLimit-Limit': config.limit.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString(),
        }
      }
    );
    return { response, success: false };
  }
  
  // For successful cases, we still need to return a response object
  // but it will not be used (the caller should check the success flag)
  return { 
    response: new NextResponse(),  // This is a dummy response that won't be used
    success: true 
  };
}