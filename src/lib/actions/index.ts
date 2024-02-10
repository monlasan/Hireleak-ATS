'use server';

import { createSupabaseServerClient } from '../supabase/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function readUserSession() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.auth.getSession();
}
