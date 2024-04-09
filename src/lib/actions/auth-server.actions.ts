'use server';

import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
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
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
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
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}

export async function logout() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  redirect('/sign-in');
}

// export async function loginWithGithub() {
// const cookieStore = cookies();
// 	const supabase = createClient(cookieStore);

// 	supabase.auth.signInWithOAuth({
// 		provider: "github",
// 		options: {
// 			redirectTo: `http://localhost:3000/auth-server/callback`,
// 		},
// 	});
// }
