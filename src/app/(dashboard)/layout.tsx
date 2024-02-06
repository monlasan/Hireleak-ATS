import DashboardHeader from '@/components/DashboardHeader';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader />
      <main>{children}</main>
    </>
  );
}
