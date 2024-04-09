import React from 'react';
import CampaignGeneralInformations from '@/components/CampaignGeneralInformations';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { DataTable } from '@/components/data-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Ban,
  Copy,
  Download,
  FileSliders,
  Link as LinkIcon,
  UserSearch,
} from 'lucide-react';

import { cn, getCampaignStatus } from '@/lib/utils';
import Link from 'next/link';
import CampaignPortalClipboard from '@/components/CampaignPortalClipboard';
import CopyClipboardButton from '@/components/CopyClipboardButton';
import DatatableCampaignApplicants from '@/components/datatables/DatatableCampaignApplicants';
import { getCampaign, updateCampaign } from '@/lib/actions/campaign.actions';
import { toast } from 'sonner';
import { type Campaign } from '@/lib/types';
import EditCampaignForm from '@/components/EditCampaignForm';
import BtnResumeOrCancelCampaign from '@/components/BtnResumeOrCancelCampaign';

const Campaign = async ({ params }: { params: { id: string } }) => {
  const result = await getCampaign(parseInt(params.id));
  const { data, error } = JSON.parse(result);
  if (error?.message) {
    toast.error(error?.message);
    return <div>Something went wrong while fetching the campaign.</div>;
  }
  const campaign: Campaign = data[0];
  const campaign_url = `${process.env.NEXT_PUBLIC_BASE_URL}/apply/${campaign.organization?.name_slug}/${campaign.id}/${campaign.slug}/`;
  /**
   * TODO: Don't forget to make this iframe text dynamic
   */
  const iframeText = `<iframe 
  name='<IFRAME_NAME>' 
  title='<IFRAME_TITLE>' 
  loading='lazy' 
  src="${campaign_url}" 
  frameborder="0" 
  allowfullscreen 
/>`;

  // const cancelCampaign = async () => {
  //   'use server';
  //   const result = await updateCampaign(campaign.id!, {
  //     ...campaign,
  //     status: 'CANCELLED',
  //   });
  //   const { data, error } = JSON.parse(result);
  //   if (error?.message) {
  //     toast.error('Something went wrong. Please try again.');
  //     return;
  //   }
  //   toast.success('Campaign updated successfully');
  // };

  return (
    <MaxWidthWrapper>
      <div className='py-16 pt-8 flex flex-col gap-4'>
        <div className='flex  flex-wrap justify-between gap-3'>
          <h1 className='text-3xl font-semibold text-foreground'>
            {campaign.name}
          </h1>
          <div className='flex items-center gap-3'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  disabled={
                    getCampaignStatus(
                      new Date(campaign.starting_date),
                      new Date(campaign.end_date),
                      campaign.status === 'CANCELLED'
                    ).status === 'RUNNING' ||
                    getCampaignStatus(
                      new Date(campaign.starting_date),
                      new Date(campaign.end_date),
                      campaign.status === 'CANCELLED'
                    ).status === 'COMPLETED'
                  }
                  size='sm'
                  variant='white'
                >
                  <FileSliders size={18} className='mr-2' />
                  Edit campaign
                </Button>
              </SheetTrigger>
              <SheetContent className='w-full sm:max-w-max'>
                <SheetHeader className='pb-4'>
                  <SheetTitle>Update campaign</SheetTitle>
                </SheetHeader>
                <EditCampaignForm campaign={campaign} />
              </SheetContent>
            </Sheet>
            {getCampaignStatus(
              new Date(campaign.starting_date),
              new Date(campaign.end_date),
              campaign.status === 'CANCELLED'
            ).status !== 'COMPLETED' && (
              <BtnResumeOrCancelCampaign campaign={campaign} />
            )}
            {/* <Link href={'/dashboard/campaigns/results/' + campaign.id}>
              <Button
                disabled={
                  getCampaignStatus(
                    new Date(campaign.starting_date),
                    new Date(campaign.end_date),
                    campaign.status === 'CANCELLED'
                  ).status === 'CANCELLED'
                }
                size='sm'
              >
                <UserSearch size={18} className='mr-2' />
                Rank candidates
              </Button>
            </Link> */}
            {/* <Button onClick={cancelCampaign} size='sm' variant='destructive'>
              <Ban size={18} className='mr-2' />
              Cancel campaign
            </Button> */}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row flex-1 gap-4'>
          <CampaignGeneralInformations campaign={campaign} />

          <Card className='p-4 w-full lg:max-w-3xl'>
            <h3 className='font-medium mb-2 text-lg text-foreground'>
              Campaign portal
            </h3>
            <div className='fl'>
              <CampaignPortalClipboard url={campaign_url} />
              {/* <div className='mt-3 w-full h-full rounded overflow-hidden'> */}
              <div className='mt-3 rounded w-full overflow-hidden'>
                <div className='p-3 text-zinc-600 py-2 border bg-zinc-50 text-sm'>
                  Embed as iframe
                </div>
                <div className='relative w-full isolate rounded-br rounded-bl overflow-hidden'>
                  <CopyClipboardButton
                    className='absolute z-10 text-white top-2 right-2'
                    text={iframeText}
                  />
                  <SyntaxHighlighter
                    customStyle={{
                      width: '100%',
                      overflow: 'auto',
                      overflowY: 'hidden',
                      padding: '0.75rem',
                    }}
                    style={dracula}
                    language='htmlbars'
                  >
                    {iframeText}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <DatatableCampaignApplicants applicants={campaign?.applicants!} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Campaign;
