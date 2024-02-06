import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className='bg-zinc-800'>
        <MaxWidthWrapper>
          <div className='pt-10 pb-24 flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 gap-5 text-white '>
              <div className=''>
                <h1 className='text-3xl font-light'>
                  Welcome back, <span className='font-semibold'>Khaled</span>
                </h1>
                <p className='text-zinc-400 mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus aliquid esse quis qui enim deleniti molestias
                  facilis
                </p>
              </div>
              {/* <div className='flex flex-col md:justify-end md:items-end'> */}
              <div className='flex flex-col md:items-end md:justify-end'>
                <Link
                  className={buttonVariants()}
                  href='/dashboard/new/campaign'
                >
                  <Plus className='mr-2' />
                  Create new campaign
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className='flex flex-col -mt-14 gap-4'>
          {/* <div className='grid grid-cols-3 -mt-12 gap-4'> */}
          <div className='flex flex-wrap gap-4'>
            {[1, 2, 3].map((i) => (
              <Card className='p-6 h-40 min-w-[250px] flex-1' key={i}>
                <p>Lorem ipsum</p>
              </Card>
            ))}
          </div>
          <Card className='p-6'>
            <p>Lorem ipsum</p>
          </Card>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
