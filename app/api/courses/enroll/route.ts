import { NextRequest, NextResponse } from 'next/server';
import { serverSupabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const supabase = serverSupabase();
    const { courseId } = await request.json();

    // Check if request has valid session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ 
        success: false, 
        message: 'Authentication required' 
      }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if user is already enrolled
    const { data: existingEnrollment, error: checkError } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .maybeSingle();

    if (checkError) {
      console.error('Error checking enrollment:', checkError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to check enrollment status'
      }, { status: 500 });
    }

    if (existingEnrollment) {
      return NextResponse.json({ 
        success: false, 
        message: 'Already enrolled in this course' 
      }, { status: 400 });
    }

    // Create enrollment record
    const { error: enrollError } = await supabase
      .from('enrollments')
      .insert({
        user_id: userId,
        course_id: courseId,
        status: 'active',
        progress: 0,
        enrolled_at: new Date().toISOString(),
      });

    if (enrollError) {
      console.error('Error enrolling in course:', enrollError);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to enroll in course' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully enrolled in course' 
    });
  } catch (error) {
    console.error('Server error during enrollment:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = serverSupabase();
    const url = new URL(request.url);
    const courseId = url.searchParams.get('courseId');

    // Check if request has valid session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return NextResponse.json({ 
        success: false, 
        message: 'Authentication required' 
      }, { status: 401 });
    }

    if (!courseId) {
      return NextResponse.json({ 
        success: false, 
        message: 'Course ID is required' 
      }, { status: 400 });
    }

    const userId = session.user.id;

    // Check enrollment status
    const { data: enrollment, error } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .maybeSingle();

    if (error) {
      console.error('Error checking enrollment status:', error);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to check enrollment status' 
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      enrolled: !!enrollment,
      enrollment: enrollment || null
    });
  } catch (error) {
    console.error('Server error checking enrollment:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
} 