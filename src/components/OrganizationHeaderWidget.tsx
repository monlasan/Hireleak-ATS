'use client';
import { useUser } from '@/store/user.store';
import { Badge } from './ui/badge';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';

const OrganizationHeaderWidget = () => {
  const { user } = useUser();
  return (
    <div className='hidden md:flex items-center gap-3'>
      {!user ? (
        <>
          <div className='w-[1px] h-8 bg-zinc-100 opacity-20 rotate-12'></div>
          <Skeleton className='h-7 w-7 rounded-full' />
          <Skeleton className='h-3 w-[90px]' />
        </>
      ) : (
        <>
          <div className='w-[1px] h-8 bg-zinc-100 opacity-20 rotate-12'></div>
          {user?.user_metadata.organization.logo_url &&
          user?.user_metadata.organization.logo_url.length > 0 ? (
            <Image
              src={user?.user_metadata.organization?.logo_url}
              alt='test'
              width={28}
              height={28}
              className=' rounded-full object-cover'
            />
          ) : (
            <div className='rounded-full w-7 h-7 bg-gradient-to-tr from-primary to-secondary'></div>
          )}
          <Badge
            variant='outline'
            className='text-xs border-white/10 text-zinc-100'
          >
            {user?.user_metadata.organization.name}
          </Badge>
        </>
      )}
    </div>
  );
};

export default OrganizationHeaderWidget;
