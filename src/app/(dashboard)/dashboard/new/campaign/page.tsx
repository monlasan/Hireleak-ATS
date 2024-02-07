import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NewCampaignForm from '@/components/NewCampaignForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';

const NewCampaign = () => {
  return (
    <MaxWidthWrapper>
      <div className='pt-10 pb-18 flex flex-col gap-4'>
        <NewCampaignForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default NewCampaign;
