'use client';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Globe, Menu, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser } from '@/store/user.store';
const UserInfoDropdownSmallScreen = () => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='ml-2 md:hidden' variant='ghost' size='icon'>
          <Menu size={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel asChild>
          <div className='flex items-center text-zinc-700 gap-2'>
            <div className='w-10 h-10 flex rounded border justify-center items-center bg-background'>
              <Globe className='text-zinc-500' size={21} />
            </div>
            <div className='text-sm flex flex-col font-semibold'>
              {user?.user_metadata &&
                user?.user_metadata.first_name + user?.user_metadata.last_name}
              <span className='text-sm font-normal'>
                {user?.user_metadata.organization.name}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link
            href='/dashboard'
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'w-full justify-start'
            )}
          >
            Overview
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href='/dashboard/campaigns'
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'w-full justify-start'
            )}
          >
            Campaigns
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfoDropdownSmallScreen;
