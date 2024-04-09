import { type Campaign } from '@/lib/types';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { cn, formatDate, getCampaignStatus } from '@/lib/utils';
import { Button } from './ui/button';
import { AreaChart, UserSearch } from 'lucide-react';

type Props = {
  campaign: Campaign;
};
const CampaignListItem = ({ campaign }: Props) => {
  return (
    <Link className='h-full' href={'campaigns/' + campaign.id}>
      <Card className='h-full hover:border hover:shadow-xl hover:shadow-primary/5 transition-colors hover:border-primary/80 flex flex-col'>
        <div className='p-4 border-b'>
          <div className='flex justify-between items-start gap-2'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className='font-semibold text-lg leading-tight truncate'>
                    {campaign.name}
                  </h3>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{campaign.name}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          <span className='text-sm opacity-60 text-right'>
            {campaign.created_at && formatDate(campaign.created_at)}
          </span>
        </div>
        <div className='p-4 flex flex-col justify-between gap-4'>
          <div>
            <div className='flex items-center justify-between'>
              <b className='opacity-80 text-xs'>Start</b>
              <span className='font-medium opacity-70 text-right'>
                {formatDate(campaign.starting_date)}
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <b className='opacity-80 text-xs'>End</b>
              <span className='font-medium opacity-70 text-right'>
                {formatDate(campaign.end_date)}
              </span>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <div className='bg-secondary flex-1 border rounded-tl-lg rounded-bl-lg p-2'>
              <span className='font-medium opacity-90 text-xs'>Candidates</span>
              <br />
              <b className='font-bold text-xl text-primary'>
                {campaign.applicants?.length}
              </b>
            </div>
            <div className='bg-secondary flex-1 border p-2'>
              <span className='font-medium opacity-90 text-xs'>Limit</span>
              <br />
              <b className='font-bold text-xl text-primary'>
                {campaign.applicants_limit}
              </b>
            </div>
            <div className='bg-secondary flex-1 border rounded-tr-lg rounded-br-lg p-2'>
              <span className='font-medium opacity-90 text-xs'>Acceptance</span>
              <br />
              <b className='font-bold text-xl text-primary'>
                {campaign.acceptance_percentage}%
              </b>
            </div>
          </div>
          {/* <div>

          <Link href={'campaigns/results/' + campaign.id}>
            <Button className='flex items-center'>
              Show <UserSearch className='ml-2' />
            </Button>
          </Link>
        
          </div> */}
        </div>
      </Card>
    </Link>
  );
};

export default CampaignListItem;
