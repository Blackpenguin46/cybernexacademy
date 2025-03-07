export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server';
import { seedDatabase } from '../../../lib/seed-data';

// This route should only be accessible in development mode
// In production, you'd want to protect this with additional authentication
export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ 
      success: false, 
      message: 'Seeding is not allowed in production environment' 
    }, { status: 403 });
  }
  
  try {
    const result = await seedDatabase();
    
    if (!result.success) {
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to seed database',
        error: result.error
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully' 
    });
  } catch (error) {
    console.error('Error in seed API route:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error during seeding',
      error
    }, { status: 500 });
  }
} 