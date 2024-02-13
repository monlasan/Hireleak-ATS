import { Loader } from 'lucide-react';
import React from 'react';

const LoadingCampaignDetails = () => {
  return (
    <div className='h-[calc(90vh-64px)] w-full flex items-center justify-center'>
      <Loader size={40} className='text-primary animate-spin' />
    </div>
  );
};

export default LoadingCampaignDetails;
