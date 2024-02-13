import React from 'react';
import { Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { type Campaign } from '@/lib/types';
import { cn, formatDate, getCampaignStatus } from '@/lib/utils';

const CampaignGeneralInformations = ({ campaign }: { campaign: Campaign }) => {
  return (
    <Card className='pb-5 flex-1 w-full  flex flex-col'>
      <h3 className='font-medium text-lg text-foreground p-4'>
        General informations
      </h3>
      <div className='py-3 px-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between '>
          <span className='opacity-50 whitespace-nowrap text-sm'>Status:</span>
          <Badge
            className={cn(
              getCampaignStatus(
                new Date(campaign.starting_date),
                new Date(campaign.end_date),
                campaign.status === 'CANCELLED'
              ).class
            )}
          >
            {
              getCampaignStatus(
                new Date(campaign.starting_date),
                new Date(campaign.end_date),
                campaign.status === 'CANCELLED'
              ).status
            }
          </Badge>
        </div>
        <div className='flex items-center gap-8 justify-between '>
          <span className='opacity-50 whitespace-nowrap text-sm'>
            Created at:
          </span>
          <span className='font-normal text-sm opacity-70 text-right whitespace-nowrap'>
            {formatDate(campaign.created_at!)}
          </span>
        </div>
      </div>
      <div className='py-3 px-4'>
        <div className='flex items-center gap-8 justify-between'>
          <span className='opacity-50 whitespace-nowrap text-sm'>
            Start date:
          </span>
          <span className='font-normal text-right whitespace-nowrap'>
            {formatDate(campaign.starting_date!)}
          </span>
        </div>
        <div className='flex items-center gap-8 justify-between'>
          <span className='opacity-50 whitespace-nowrap text-sm'>
            End date:
          </span>
          <span className='font-normal text-right whitespace-nowrap'>
            {formatDate(campaign.end_date!)}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-8 justify-between py-3 px-4'>
        <span className='opacity-50 whitespace-nowrap text-sm'>Limit:</span>
        <Badge variant='secondary' className='text-base'>
          {campaign.applicants_limit}
        </Badge>
      </div>
      <div className='flex items-center gap-8 justify-between py-3 px-4'>
        <span className='opacity-50 whitespace-nowrap text-sm'>
          Acceptance:
        </span>
        <Badge variant='secondary' className='text-base'>
          {campaign.acceptance_percentage}%
        </Badge>
      </div>
      <div className='pt-4 px-4 flex'>
        <Dialog>
          <DialogTrigger asChild className='flex-1'>
            <Button className='text-center w-full'>
              <Eye className='mr-2' /> See job description
            </Button>
          </DialogTrigger>
          <DialogContent className='w-full max-w-4xl'>
            <DialogHeader>
              <DialogTitle>Job description</DialogTitle>
              <DialogDescription>{campaign.name}</DialogDescription>
            </DialogHeader>
            <Card className='text-sm font-normal flex flex-col gap-3'>
              <ScrollArea className='h-[300px] p-4'>
                <div
                  dangerouslySetInnerHTML={{ __html: campaign.job_description }}
                  className='w-full h-full prose prose-h1:my-1 prose-h2:my-1 prose-h3:my-1 prose-h4::my-1 prose-h5:my-1 prose-h6:my-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-blockquote:my-1'
                />
              </ScrollArea>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default CampaignGeneralInformations;
