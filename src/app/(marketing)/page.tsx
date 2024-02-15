// import Image from "next/image";
// import { Poppins } from 'next/font/google';

import AppLogoHeader from '@/components/AppLogoHeader';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import Image from 'next/image';
import HeaderBackground from '@/components/HeaderBackground';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';

// const poppins = Poppins({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// });

export default function Home() {
  return (
    <>
      <header className='h-20 fixed inset-x-0 top-0 z-30 w-full'>
        <HeaderBackground />
        <MaxWidthWrapper className='h-full max-w-6xl'>
          <div className='flex flex-1 h-full items-center justify-between'>
            <div className='flex items-center gap-16'>
              <AppLogoHeader url='/' hideLabel={true} />
              <nav>
                <ul className='flex items-center gap-8'>
                  {/* <li>
                    <Link href='/'>About</Link>
                  </li>
                  <li>
                    <Link href='/'>Pricing</Link>
                  </li> */}
                  <li>
                    <Link href='/#features'>Features</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='/sign-in'>
                <Button className='bg-transparent hover:underline hover:bg-zinc-50/10 text-zinc-800'>
                  Sign In
                </Button>
              </Link>
              <Link href='/sign-up'>
                <Button className='bg-zinc-800 hover:bg-zinc-900 text-white group'>
                  Get started{' '}
                  <ArrowRight
                    className='ml-2 group-hover:translate-x-1 transition-transform'
                    size={20}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
      <main className='overflow-x-hidden r bg-white'>
        {/* <section className='flex h-screen gap-6 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-700 via-blue-500 to-white bg'> */}
        <section className='flex isolate h-screen relative gap-6'>
          <div className='my-radial-bg -mx-48 inset-0'></div>
          <div className='noise-bg '></div>
          <MaxWidthWrapper className={cn('flex justify-center z-10 w-full')}>
            {/* <MaxWidthWrapper className=''> */}
            <div className='max-w-3xl gap-4 pt-8 sm:pt-0 sm:pb-16 sm:gap-6 flex flex-col text-center justify-center text-white'>
              <h1 className='text-4xl md:text-6xl font-bold '>
                Automate your recruitment process.
              </h1>
              <p className='text-lg md:text-xl font-semibold'>
                Take data-driven hiring decisions by creating recruitment
                campaigns and leveraging AI to streamline resume processing.
              </p>
              <div className='flex mx-auto flex-col sm:flex-row justify-center items-center gap-4 gap-y-2'>
                <Link className=' w-full' href='/sign-up'>
                  <Button
                    size='lg'
                    className='bg-zinc-800 w-full hover:bg-zinc-900 text-white group'
                  >
                    Get started{' '}
                    <ArrowRight
                      className='ml-2 group-hover:translate-x-1 transition-transform'
                      size={20}
                    />
                  </Button>
                </Link>
                <Link className=' w-full' href='/sign-in'>
                  <Button
                    size='lg'
                    className='bg-white w-full hover:bg-zinc-100 text-zinc-800'
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            {/* <div></div> */}
          </MaxWidthWrapper>
        </section>
        <section className=''>
          <MaxWidthWrapper>
            <img
              src='/hireleak-gitHub-banner.jpg'
              alt='Software dashboard'
              className='shadow rounded relative w-full -mt-16 sm:-mt-36 '
            />
          </MaxWidthWrapper>
        </section>
        <Features />
        {/* <HowItWorks /> */}
        {/* <section>
          <MaxWidthWrapper>
            <h2>
              How <span>Hireleak</span> work ?
            </h2>
            <div className='flex items-center'>
              <div className='relative overflow-hidden w-40 h-40 flex items-center justify-center bg-blue-300 rounded-xl'>
                <Image
                  src='/landing-hero-image.jpeg'
                  alt='Software dashboard'
                  fill
                  className='object-cover m-3'
                />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deleniti ipsam quia minus saepe dolorem illum. Maxime
                  architecto labore fuga deleniti minus modi, magnam, error hic
                  ab, nam sapiente non nostrum.
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </section> */}
      </main>
      <section className='py-24 bg-primary'>
        <MaxWidthWrapper className='justify-center gap-6 flex flex-col'>
          <h2 className='text-3xl font-bold text-white text-center'>
            Start your recruitment campaign now.
          </h2>
          <div className='flex mx-auto flex-col sm:flex-row justify-center items-center gap-4 gap-y-2'>
            <Link className=' w-full' href='/sign-up'>
              <Button
                size='lg'
                className='bg-zinc-800 w-full hover:bg-zinc-900 text-white group'
              >
                Get started{' '}
                <ArrowRight
                  className='ml-2 group-hover:translate-x-1 transition-transform'
                  size={20}
                />
              </Button>
            </Link>
            <Link className=' w-full' href='/sign-in'>
              <Button
                size='lg'
                className='bg-white w-full hover:bg-zinc-100 text-zinc-800'
              >
                Sign In
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  );
}
