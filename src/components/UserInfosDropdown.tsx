'use client';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ChevronDown, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Button } from './ui/button';
import { logout } from '@/lib/actions/auth-server.actions';
import { useUser } from '@/store/user.store';

const UserInfosDropdown = () => {
  const { user } = useUser();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='hidden group rounded-full md:flex items-center text-left gap-2 ml-2'>
          <Avatar>
            {user?.user_metadata && (
              <AvatarImage src={user?.user_metadata?.photo_url} alt='@shadcn' />
            )}
            <AvatarFallback className='text-zinc-800'>
              {user?.user_metadata &&
                user?.user_metadata.first_name[0] +
                  user?.user_metadata.last_name[0]}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm'>Khaled Sanny</span>
            <span className='text-xs opacity-40'>khaledsannyaml@gmail.com</span>
          </div>
          <div className=' h-8 flex items-center justify-center'>
            <ChevronDown
              size={20}
              className='opacity-40 group-hover:opacity-100 transition-colors'
            />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent align='end' className='p-2 max-w-40'>
        <form className='w-full' action={logout}>
          <Button
            variant='ghost'
            className='w-full flex justify-start text-destructive'
          >
            <LogOut size={20} className='mr-2' /> Sign out
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default UserInfosDropdown;
