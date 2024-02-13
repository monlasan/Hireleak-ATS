import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CampaignApplicationForm from '@/components/forms/CampaignApplicationForm';
import { Skeleton } from '@/components/ui/skeleton';
import { getCampaign } from '@/lib/actions/campaign.actions';
import { getCampaignStatus } from '@/lib/utils';
import { Ban, FileX, TicketX } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

type Props = {
  params: {
    campaign: string[];
  };
};
const CampaignPortal = async ({ params }: Props) => {
  const [organizationSlug, campaignId, campaignSlug]: string[] =
    params.campaign;

  const result = await getCampaign(parseInt(campaignId));
  const { data: campaign, error } = JSON.parse(result);
  if (error?.message) {
    console.error(
      '====================error?.message====================',
      error?.message
    );
    notFound();
  }

  if (campaign.length === 0) {
    console.log(campaign);
    console.error('⛔⛔⛔⛔⛔error?.messag⛔⛔⛔⛔⛔', error?.message);
    notFound();
  }
  if (campaign[0].status === 'CANCELLED') {
    return (
      <div className='w-screen p-8 gap-6 h-screen flex justify-center flex-col items-center'>
        <div>
          <Ban size={100} className='text-destructive' />
        </div>
        <h1 className='text-center font-bold text-3xl max-w-xl'>
          Job offer has been cancelled 😖.
        </h1>
      </div>
    );
  }
  if (
    getCampaignStatus(
      new Date(campaign[0].starting_date),
      new Date(campaign[0].end_date),
      campaign[0].status === 'CANCELLED'
    ).status === 'COMPLETED'
  ) {
    return (
      <div className='w-screen p-8 gap-6 h-screen flex justify-center flex-col items-center'>
        <div>
          <TicketX size={100} className='text-destructive' />
        </div>
        <h1 className='text-center font-bold text-3xl max-w-xl'>
          Sorry! The applications for this jobs are closed 😖.
        </h1>
      </div>
    );
    // notFound();
  }
  if (
    getCampaignStatus(
      new Date(campaign[0].starting_date),
      new Date(campaign[0].end_date),
      campaign[0].status === 'CANCELLED'
    ).status === 'PENDING'
  ) {
    return (
      <div className='w-screen p-8 gap-6 h-screen flex justify-center flex-col items-center'>
        <div>
          <FileX size={100} className='text-orange-500' />
        </div>
        <h1 className='text-center font-bold text-3xl max-w-xl'>
          This job not yet open of applications.
        </h1>
      </div>
    );
    // notFound();
  }

  return (
    <MaxWidthWrapper>
      <div className='py-8 pb-16 flex justify-center gap-4'>
        <CampaignApplicationForm campaign={campaign[0]} />
      </div>
    </MaxWidthWrapper>
  );
};

export default CampaignPortal;
