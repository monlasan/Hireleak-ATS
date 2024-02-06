import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const Dashboard = () => {
  return (
    <div>
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
              <div className='flex flex-col'>
                <Badge
                  variant='outline'
                  className='mr-auto md:ml-auto md:mr-0 text-zinc-100  text-sm'
                >
                  {new Date().toLocaleDateString('en-us', {
                    day: '2-digit',
                    year: 'numeric',
                    month: 'long',
                  })}
                </Badge>
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
    </div>
  );
};

export default Dashboard;
