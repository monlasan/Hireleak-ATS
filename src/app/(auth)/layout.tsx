import AppLogoHeader from '@/components/AppLogoHeader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { readUserSession } from '@/lib/actions';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect('/dashboard');
  }
  return (
    <>
      <header className='border-b border-zinc-700/60 bg-zinc-800'>
        <MaxWidthWrapper>
          <div className='py-3 flex items-center justify-center'>
            <AppLogoHeader url='/' hideLabel={true} color='W' />
          </div>
        </MaxWidthWrapper>
      </header>
      <main className='bg-zinc-50'>{children}</main>
      <footer className='h-96 bg-primary'></footer>
    </>
  );
}
