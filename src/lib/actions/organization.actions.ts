'use server';

import { createClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function createOrganization(
  name: string,
  logo_url = '',
  name_slug: string
) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase
    .from('organizations')
    .insert([{ name, logo_url, name_slug }])
    .select();
  return JSON.stringify(result);
}
