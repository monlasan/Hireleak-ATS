'use server';

import { createClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { type Campaign } from '../types';

export async function fetchCampaigns() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase.from('campaigns').select('*, applicants(*)');
  revalidatePath('/dashboard/campaigns');
  return JSON.stringify(result);
}

export async function createCampaign(campaign: Campaign) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase
    .from('campaigns')
    .insert({ ...campaign })
    .select();
  revalidatePath('/dashboard/campaigns');
  return JSON.stringify(result);
}

// export async function readTodo() {
// 	noStore();
// 	const supabase = await createClient();
// 	return await supabase.from("todo").select("*");
// }

// export async function deleteTodoById(id: string) {
// 	const supabase = await createClient();
// 	await supabase.from("todo").delete().eq("id", id);
// 	revalidatePath("/todo");
// }

// export async function updateTodoById(id: string, completed: boolean) {
// 	const supabase = await createClient();
// 	await supabase.from("todo").update({ completed }).eq("id", id);
// 	revalidatePath("/todo");
// }
