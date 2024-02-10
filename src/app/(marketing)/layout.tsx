import { readUserSession } from '@/lib/actions';
import { redirect } from 'next/navigation';

export default async function MarketingPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect('/dashboard');
  }
  return <>{children}</>;
}
