import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CampaignApplicationForm from '@/components/forms/CampaignApplicationForm';
import React from 'react';

type Props = {
  params: {
    campaign: string[];
  };
};
const CampaignPortal = ({ params }: Props) => {
  const [organizationSlug, campaignId, campaignSlug]: string[] =
    params.campaign;

  return (
    <MaxWidthWrapper>
      <div className='py-8 pb-16 flex justify-center gap-4'>
        <CampaignApplicationForm
          campaignInfos={{ organizationSlug, campaignId, campaignSlug }}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default CampaignPortal;
