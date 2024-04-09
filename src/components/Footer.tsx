import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import AppLogoHeader from './AppLogoHeader';
import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className='py-10 bg-zinc-800 text-white'>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex-1 max-w-48 lg:max-w-64'>
            <AppLogoHeader url='/' color='W' />
          </div>
          <div className='flex-1 flex flex-wrap gap-8 lg:gap-16 gap-y-8'>
            <ul className='flex flex-col gap-2 pr-4'>
              <h4 className='font-bold'>Menu</h4>
              <li className='text-sm text-zinc-400'>
                <Link href='/'>Home</Link>
              </li>
              <li className='text-sm text-zinc-400'>
                <Link href='/'>About</Link>
              </li>
              <li className='text-sm text-zinc-400'>
                <Link href='/#features'>Features</Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-2 pr-4 '>
              <h4 className='font-bold'>Support</h4>
              <li className='text-sm text-zinc-400'>
                <Link href='/'>contact@hireleak.com</Link>
              </li>
              <li className='text-sm text-zinc-400'>
                <Link href='/contact-us'>Contact</Link>
              </li>
              <li className='text-sm text-zinc-400'>
                <Link href='/'>FAQ</Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-2 pr-4 '>
              <h4 className='font-bold'>Legal</h4>
              <li className='text-sm text-zinc-400'>
                <Link href='/privacy'>Privacy policy</Link>
              </li>
              <li className='text-sm text-zinc-400'>
                <Link href='/terms'>Terms and conditions</Link>
              </li>
            </ul>
            <ul className='flex gap-6 flex-1'>
              <li className='text-sm text-zinc-50'>
                <Github size={22} />
              </li>
              <li className='text-sm text-zinc-50'>
                <Twitter size={22} />
              </li>
            </ul>
          </div>
        </div>
        <p className='text-sm text-zinc-400 mt-10'>
          Copyright © {new Date().getFullYear()} {APP_NAME}. All rights
          reserved.
        </p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
