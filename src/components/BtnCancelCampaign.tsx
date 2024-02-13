'use client';
import { Ban, Loader } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { type Campaign } from '@/lib/types';
import { updateCampaign } from '@/lib/actions/campaign.actions';
import { useRouter } from 'next/navigation';

const BtnCancelCampaign = ({ campaign }: { campaign: Campaign }) => {
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

  return (
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
  );
};

export default BtnCancelCampaign;
