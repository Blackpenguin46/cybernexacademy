import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '../../../lib/supabase-server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient();
    const url = new URL(request.url);
    
    // Extract search parameters
    const query = url.searchParams.get('q') || '';
    const category = url.searchParams.get('category') || '';
    const level = url.searchParams.get('level') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    
    // Calculate pagination offset
    const offset = (page - 1) * limit;
    
    // Start building the query
    let supabaseQuery = supabase
      .from('courses')
      .select('*, content_creators!inner(name, avatar_url)', { count: 'exact' });
    
    // Apply search filters
    if (query) {
      supabaseQuery = supabaseQuery.or(
        `title.ilike.%${query}%,description.ilike.%${query}%`
      );
    }
    
    if (category && category !== 'all') {
      supabaseQuery = supabaseQuery.eq('category', category);
    }
    
    if (level && level !== 'all') {
      supabaseQuery = supabaseQuery.eq('level', level);
    }
    
    // Apply pagination
    supabaseQuery = supabaseQuery
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);
    
    // Execute the query
    const { data, error, count } = await supabaseQuery;
    
    if (error) {
      console.error('Error searching courses:', error);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to search courses' 
      }, { status: 500 });
    }
    
    // Get unique categories for filters
    const { data: categories } = await supabase
      .from('courses')
      .select('category')
      .order('category');
    
    const uniqueCategories = categories 
      ? Array.from(new Set(categories.map(item => item.category)))
      : [];
    
    // Calculate total pages
    const totalPages = count ? Math.ceil(count / limit) : 0;
    
    return NextResponse.json({
      success: true,
      data,
      meta: {
        page,
        limit,
        total: count || 0,
        totalPages,
        categories: uniqueCategories,
        levels: ['Beginner', 'Intermediate', 'Advanced']
      }
    });
  } catch (error) {
    console.error('Server error during search:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
} 