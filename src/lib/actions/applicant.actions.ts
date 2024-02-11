'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { type Applicants } from '../types';

export async function enlistApplicant(applicant: Applicants) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase
    .from('applicants')
    .insert({ ...applicant })
    .select();
  return JSON.stringify(result);
}

export async function getApplicant(applicant_id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.from('applicants').select('*').eq('id', applicant_id);
}
export async function fetchApplicants(campaign_id: string) {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase
    .from('applicants')
    .select('*')
    .eq('campaign_id', campaign_id);
}

// export async function deleteTodoById(id: string) {
// 	const supabase = await createSupabaseServerClient();
// 	await supabase.from("applicants").delete().eq("id", id);
// 	revalidatePath("/applicants");
// }

// export async function updateTodoById(id: string, completed: boolean) {
// 	const supabase = await createSupabaseServerClient();
// 	await supabase.from("applicants").update({ completed }).eq("id", id);
// 	revalidatePath("/applicants");
// }
