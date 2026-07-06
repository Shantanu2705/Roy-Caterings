import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize a simple in-memory cache as a graceful fallback for local development or if Redis is not configured
const memoryCache = new Map<string, number>();

// Initialize Upstash Redis if credentials exist
const getRateLimiter = () => {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });
      // Allow 5 requests per IP per 60 seconds
      return new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(5, '60 s'),
      });
    } catch (e) {
      console.warn("Failed to initialize Upstash Redis, falling back to memory rate limiter");
      return null;
    }
  }
  return null;
};

const ratelimit = getRateLimiter();

export async function proxy(request: NextRequest) {
  // Only apply rate limiting to the contact API route
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    // Get IP address from headers or fallback to generic
    const ip = request.headers.get('x-forwarded-for') ?? 
               request.headers.get('x-real-ip') ?? 
               'anonymous';

    if (ratelimit) {
      // Use Upstash Redis for distributed edge rate limiting
      const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
      
      if (!success) {
        return NextResponse.json(
          { success: false, message: 'Too many requests. Please try again later.' },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString()
            }
          }
        );
      }
    } else {
      // Fallback: Extremely basic in-memory rate limiter (cleared on edge cold starts)
      const now = Date.now();
      const windowStart = now - 60000; // 60 seconds window
      
      // Clean up old entries
      for (const [key, timestamp] of memoryCache.entries()) {
        if (timestamp < windowStart) {
          memoryCache.delete(key);
        }
      }

      // Check current IP
      let requestsInWindow = 0;
      for (const [key, timestamp] of memoryCache.entries()) {
        if (key.startsWith(ip) && timestamp >= windowStart) {
          requestsInWindow++;
        }
      }

      if (requestsInWindow >= 5) {
        return NextResponse.json(
          { success: false, message: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      
      // Record new request
      memoryCache.set(`${ip}-${now}`, now);
    }
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
