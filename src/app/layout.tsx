import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
// import { Quicksand, Poppins } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Toaster } from '@/components/ui/sonner';
import Providers from '@/components/Providers';
import { APP_NAME } from '@/lib/constants';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

/**
 * TODO: Maybe i can add iframe functionality to allow companies to host their campaign application portal page.
 */

// const quicksand = Quicksand({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
// });

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | Leverage AI to automate your recruitment process.`,
  },
  description: 'Leverage AI to automate your recruitment process.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data, error } = await supabase.auth.getUser();

  return (
    <html lang='en' suppressHydrationWarning className='relative'>
      <body className={`${poppins.className} antialiased`}>
        {/* <div className='flex text-xs overflow-hidden items-center gap-4 z-50 fixed bottom-0 left-0 right-0 bg-zinc-50/10'>
          <Link href='/'>Home</Link>
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/sign-in'>SignIn</Link>
          <Link href='/sign-up'>SignUp</Link>
          <Link href='/514'>NOT FOUND</Link>
          <Link href='/apply/mainfo/senior-backend-react-developer'>
            PORTAL
          </Link>
        </div> */}
        {/* <Providers user={data.user}> */}
        <Providers>
          {children}
          <Toaster
            toastOptions={{
              unstyled: true,
              style: {
                position: 'fixed',
                right: '2em',
                bottom: '2em',
              },
              actionButtonStyle: {
                color: 'hsl(var(--accent-foreground))',
                backgroundColor: 'hsl(var(--accent))',
              },
              cancelButtonStyle: {
                color: 'hsl(var(--destructive-foreground))',
                backgroundColor: 'hsl(var(--destructive))',
              },
              classNames: {
                toast:
                  'max-w-sm flex items-center gap-2 rounded p-2 px-3 bg-background text-foreground shadow-lg border border-border',
                title: 'text-red-400',
                actionButton: 'border border-red-500',
                error: 'border-red-300 bg-red-200 text-red-900',
                success: 'border-green-300 bg-green-100 text-green-900',
                warning: 'border-orange-300 bg-orange-100 text-orange-900',
                info: 'border-blue-300 bg-blue-200 text-blue-900',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
