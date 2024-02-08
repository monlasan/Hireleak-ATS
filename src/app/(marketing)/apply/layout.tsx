export default function CampaignApplicationPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='bg-zinc-50'>{children}</main>
    </>
  );
}
