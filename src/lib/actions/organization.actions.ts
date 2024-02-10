'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

export async function createOrganization(name: string, logo_url = '') {
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from('organizations')
    .insert([{ name, logo_url }])
    .select();
  return JSON.stringify(result);
}
