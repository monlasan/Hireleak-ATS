import CampaignsList from '@/components/CampaignsList';
import CampaignsListSearch from '@/components/CampaignsListSearch';
import CampaignsListStatusFilter from '@/components/CampaignsListStatusFilter';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import NewCampaignForm from '@/components/NewCampaignForm';

const Campaigns = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='py-16 pt-8 flex flex-col gap-6'>
          <div className='flex flex-wrap items-center gap-3'>
            <CampaignsListSearch />
            <div className='flex  items-center gap-3'>
              <CampaignsListStatusFilter />
              <Sheet>
                <SheetTrigger asChild>
                  <Button>
                    <Plus className='mr-2' />
                    Create campaign
                  </Button>
                </SheetTrigger>
                <SheetContent className='w-full sm:max-w-max'>
                  <SheetHeader className='pb-4'>
                    <SheetTitle>New campaign</SheetTitle>
                  </SheetHeader>
                  <NewCampaignForm />
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <CampaignsList />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Campaigns;
