import CampaignsList from '@/components/CampaignsList';
import CampaignsListSearch from '@/components/CampaignsListSearch';
import CampaignsListStatusFilter from '@/components/CampaignsListStatusFilter';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Campaigns = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='py-16 pt-8 flex flex-col gap-6'>
          <div className='flex flex-wrap items-center gap-3'>
            <CampaignsListSearch />
            <div className='flex  items-center gap-3'>
              <CampaignsListStatusFilter />
              <Link className={buttonVariants()} href='/dashboard/new/campaign'>
                <Plus className='mr-2' />
                Create campaign
              </Link>
            </div>
          </div>
          <CampaignsList />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Campaigns;
