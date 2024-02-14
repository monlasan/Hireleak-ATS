import AppLogoHeader from '@/components/AppLogoHeader';
import Footer from '@/components/Footer';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (!error && data.user) {
    redirect('/dashboard');
  }

  return (
    <div className='flex flex-col min-h-screen bg-zinc-800'>
      <header className='border-b border-zinc-700/60 bg-zinc-800'>
        <MaxWidthWrapper>
          <div className='py-3 flex items-center justify-center'>
            <AppLogoHeader url='/' hideLabel={true} color='W' />
          </div>
        </MaxWidthWrapper>
      </header>
      <main className='bg-zinc-50 flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
