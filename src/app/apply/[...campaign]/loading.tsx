import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const LoadingApplicationPage = () => {
  return (
    <div className='py-8 pb-16 flex flex-col items-center w-full mx-auto opacity-50 max-w-xl justify-center gap-4'>
      <Skeleton className='rounded-full w-[110px] h-[110px]' />
      <Skeleton className='rounded-md w-1/3 h-4' />
      <Skeleton className='rounded-md w-1/2 h-6' />
      <div className='flex flex-col w-full gap-6'>
        <div className='flex w-full gap-4'>
          <div className='w-full'>
            <Skeleton className='rounded-md w-16 h-4 mb-3' />
            <Skeleton className='rounded-md w-full h-6' />
          </div>
          <div className='w-full'>
            <Skeleton className='rounded-md w-16 h-4 mb-3' />
            <Skeleton className='rounded-md w-full h-6' />
          </div>
        </div>
        <div className='flex w-full gap-4'>
          <div className='w-full'>
            <Skeleton className='rounded-md w-16 h-4 mb-3' />
            <Skeleton className='rounded-md w-full h-6' />
          </div>
          <div className='w-full'>
            <Skeleton className='rounded-md w-16 h-4 mb-3' />
            <Skeleton className='rounded-md w-full h-6' />
          </div>
        </div>
        <div className='w-full'>
          <Skeleton className='rounded-md w-16 h-4 mb-3' />
          <Skeleton className='rounded-md w-full h-32' />
        </div>
        <div className='w-full'>
          <Skeleton className='rounded-md w-16 h-4 mb-3' />
          <Skeleton className='rounded-md w-full h-32' />
        </div>
        <div>
          <Skeleton className='rounded-md w-full h-6' />
        </div>
      </div>
    </div>
  );
};

export default LoadingApplicationPage;
