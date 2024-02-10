import DashboardHeader from '@/components/DashboardHeader';
import { readUserSession } from '@/lib/actions';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect('/sign-in');
  }
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
    </>
  );
}
