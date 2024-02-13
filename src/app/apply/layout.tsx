export default function CampaignApplicationPortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: make sure to not allow further application when the user is already applied && the campaign is closed.
    <>
      <main className='bg-zinc-50'>{children}</main>
    </>
  );
}
