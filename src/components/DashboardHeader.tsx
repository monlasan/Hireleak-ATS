import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import AppLogoHeader from './AppLogoHeader';
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
import { Bell, Globe, Menu, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import UserInfosDropdown from './UserInfosDropdown';
import OrganizationHeaderWidget from './OrganizationHeaderWidget';

const DashboardHeader = async () => {
  return (
    <header className='border-b border-zinc-700/60 bg-zinc-800'>
      <MaxWidthWrapper>
        <div className='py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center gap-6'>
            <AppLogoHeader url='/dashboard' color='W' />
            <OrganizationHeaderWidget />
            <nav className='hidden md:block'>
              <ul className='text-zinc-400 flex items-center'>
                <li>
                  <Link
                    href='/dashboard'
                    className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href='/dashboard/campaigns'
                    className={buttonVariants({ variant: 'ghost', size: 'sm' })}
                  >
                    Campaigns
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='text-white flex items-center gap-1'>
            <Button size='icon' variant='ghost'>
              <Settings size={21} />
            </Button>
            <Button variant='ghost' size='icon' className='relative'>
              <Bell size={21} />
              <span className='absolute top-2 right-2 animate-ping h-2.5 w-2.5 rounded-full bg-primary'></span>
              <span className='sr-only'>Notifications Icon</span>
            </Button>
            <UserInfosDropdown />
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
                      Antonio Santorini
                      <span className='text-sm font-normal'>OpenSI</span>
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
          </div>
        </div>
      </MaxWidthWrapper>
      <nav className='bg-zinc-800'>
        <MaxWidthWrapper>
          <div className='items-center justify-center flex'>
            {/* <h1 className='text-3xl font-bold'>Dashboard</h1> */}
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
};

export default DashboardHeader;
