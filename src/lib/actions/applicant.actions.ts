'use server';

import { createClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { type Applicant } from '../types';
import { cookies } from 'next/headers';

export async function enlistApplicant(applicant: Applicant) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase
    .from('applicants')
    .insert({ ...applicant })
    .select();
  return JSON.stringify(result);
}

export async function getApplicant(applicant_id: string) {
  noStore();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  return await supabase.from('applicants').select('*').eq('id', applicant_id);
}
export async function updateApplicantResults(
  applicant_id: string,
  results: any
) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase
    .from('applicants')
    .update({ results: JSON.parse(results) })
    .eq('id', applicant_id);
  return JSON.stringify(result);
}
export async function fetchApplicants(campaign_id: string) {
  noStore();
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  return await supabase
    .from('applicants')
    .select('*')
    .eq('campaign_id', campaign_id);
}

// export async function deleteTodoById(id: string) {
// const cookieStore = cookies();
// 	const supabase = createClient(cookieStore);
// 	await supabase.from("applicants").delete().eq("id", id);
// 	revalidatePath("/applicants");
// }

// export async function updateTodoById(id: string, completed: boolean) {
// const cookieStore = cookies();
// 	const supabase = createClient(cookieStore);
// 	await supabase.from("applicants").update({ completed }).eq("id", id);
// 	revalidatePath("/applicants");
// }
