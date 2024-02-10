'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
  metadata: {
    organization: any;
    first_name: string;
    last_name: string;
  };
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        organization: data.metadata.organization,
        first_name: data.metadata.first_name,
        last_name: data.metadata.last_name,
      },
    },
  });
  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/sign-in');
}

// export async function loginWithGithub() {
// 	const supabase = await createSupabaseServerClient();

// 	supabase.auth.signInWithOAuth({
// 		provider: "github",
// 		options: {
// 			redirectTo: `http://localhost:3000/auth-server/callback`,
// 		},
// 	});
// }
