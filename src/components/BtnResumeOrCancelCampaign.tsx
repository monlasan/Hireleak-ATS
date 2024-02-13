'use client';
import { Ban, Loader, StepForward } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { type Campaign } from '@/lib/types';
import { updateCampaign } from '@/lib/actions/campaign.actions';
import { useRouter } from 'next/navigation';
import { getCampaignStatus } from '@/lib/utils';

const BtnResumeOrCancelCampaign = ({ campaign }: { campaign: Campaign }) => {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const cancelCampaign = () => {
    startTransition(async () => {
      const result = await updateCampaign(campaign.id!, {
        status: 'CANCELLED',
      });
      const { data, error } = JSON.parse(result);
      if (error?.message) {
        console.log(error);
        toast.error('Something went wrong. Please try again.');
        return;
      }
      router.push('/dashboard/campaigns');
      toast.success('Campaign cancelled successfully');
    });
  };
  const resumeCampaign = () => {
    startTransition(async () => {
      const result = await updateCampaign(campaign.id!, {
        status: 'RESUMED',
      });
      const { data, error } = JSON.parse(result);
      if (error?.message) {
        console.log(error);
        toast.error('Something went wrong. Please try again.');
        return;
      }
      toast.success('Campaign resumed successfully');
    });
  };

  return (
    <>
      {campaign.status === 'CANCELLED' ||
      getCampaignStatus(
        new Date(campaign.starting_date),
        new Date(campaign.end_date),
        campaign.status === 'CANCELLED'
      ).status === 'COMPLETED' ? (
        <Button
          disabled={
            isPending ||
            getCampaignStatus(
              new Date(campaign.starting_date),
              new Date(campaign.end_date),
              campaign.status === 'CANCELLED'
            ).status === 'COMPLETED'
          }
          onClick={resumeCampaign}
          size='sm'
        >
          {isPending ? (
            <Loader size={18} className='mr-2 animate-spin' />
          ) : (
            <StepForward size={18} className='mr-2' />
          )}
          Resume campaign
        </Button>
      ) : (
        <Button
          disabled={isPending}
          onClick={cancelCampaign}
          size='sm'
          variant='destructive'
        >
          {isPending ? (
            <Loader size={18} className='mr-2 animate-spin' />
          ) : (
            <Ban size={18} className='mr-2' />
          )}
          Cancel campaign
        </Button>
      )}
    </>
  );
};

export default BtnResumeOrCancelCampaign;
