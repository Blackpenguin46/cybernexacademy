'use server';

import { createClient } from '@/lib/supabase/server'; // Use server client
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function deleteBrokenLink(linkId: string) {
  const cookieStore = cookies();
  const supabase = await createClient(); // Remove cookieStore argument

  // 1. Verify User is Admin
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error('Authentication required.');
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.error("Error fetching user profile:", profileError);
    throw new Error('Could not verify user role.');
  }

  if (profile?.role !== 'admin') {
    throw new Error('Admin privileges required.');
  }

  // 2. Delete the link
  const { error: deleteError } = await supabase
    .from('monitored_links')
    .delete()
    .eq('id', linkId);

  if (deleteError) {
    console.error("Error deleting link:", deleteError);
    throw new Error(`Failed to delete link: ${deleteError.message}`);
  }

  // 3. Revalidate the path
  revalidatePath('/admin/broken-links');

  console.log(`Successfully deleted link ID: ${linkId}`);
  // Optionally return success status
  return { success: true };
} 