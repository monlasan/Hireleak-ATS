'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

// export async function applyToCampaign(title: string) {
// /storage/v1/object/public/
// const supabase = await createSupabaseServerClient();
// const result = await supabase.from("todo").insert({ title }).single();
// revalidatePath("/todo");
// return JSON.stringify(result);
// }

// export async function readTodo() {
// 	noStore();
// 	const supabase = await createSupabaseServerClient();
// 	return await supabase.from("todo").select("*");
// }

// export async function deleteTodoById(id: string) {
// 	const supabase = await createSupabaseServerClient();
// 	await supabase.from("todo").delete().eq("id", id);
// 	revalidatePath("/todo");
// }

// export async function updateTodoById(id: string, completed: boolean) {
// 	const supabase = await createSupabaseServerClient();
// 	await supabase.from("todo").update({ completed }).eq("id", id);
// 	revalidatePath("/todo");
// }
