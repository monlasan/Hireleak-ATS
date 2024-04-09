'use client';
import { useUser } from '@/store/user.store';
import React from 'react';
import { Skeleton } from './ui/skeleton';

const WelcomeUser = () => {
  const { user } = useUser();
  return (
    <>
      {!user ? (
        <Skeleton className='h-[36px] w-[270px]' />
      ) : (
        <h1 className='text-3xl font-light'>
          Welcome back, <span className='font-semibold'>Khaled</span>
        </h1>
      )}
    </>
  );
};

export default WelcomeUser;
