import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import AppLogoHeader from './AppLogoHeader';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, CircleDashed, Settings } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className='border-b border-zinc-700/60 bg-zinc-800'>
      <MaxWidthWrapper>
        <div className='py-3 flex items-center justify-between'>
          <div className='flex items-center justify-center gap-6'>
            <AppLogoHeader />
            <div className='flex items-center gap-4'>
              <div className='w-[1px] h-8 bg-zinc-50 opacity-20 rotate-12'></div>
              <div className='rounded-full w-8 h-8 bg-gradient-to-tr from-primary to-secondary'></div>
              <span className='text-sm text-zinc-100'>Vercel</span>
            </div>
            <nav>
              <ul className='text-zinc-400 flex items-center'>
                <li>
                  <Link
                    href='/dashboard'
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href='/dashboard/campaigns'
                    className={buttonVariants({ variant: 'ghost' })}
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
            <div className='flex items-center gap-2 ml-2'>
              <Avatar>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback className='text-zinc-800'>CN</AvatarFallback>
              </Avatar>
              <div className='leading-tight'>
                <b>Khaled Sanny</b> <br />
                <span className='text-sm opacity-60'>Vercel</span>
              </div>
            </div>
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
