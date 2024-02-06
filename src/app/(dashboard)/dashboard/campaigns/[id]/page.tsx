import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, PowerOff, Trash2 } from 'lucide-react';
import React from 'react';

const Campaign = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='py-6 pt-8 flex flex-col gap-6'>
          <div className='flex justify-between gap-3'>
            <h1 className='text-3xl font-bold text-foreground'>
              Senior FrontEnd Developer
            </h1>
            <div className='flex items-center gap-3'>
              <Button variant='white'>Update campaign</Button>
              <Button variant='destructive'>Cancel campaign</Button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4'>
            <Card className='p-4 pb-5 flex-1 md:max-w-80 flex flex-col gap-4'>
              <h3 className='font-bold text-lg text-foreground'>
                General informations
              </h3>
              <div className='flex items-center justify-between'>
                <b className='opacity-50 text-sm'>Status:</b>
                <Badge>Running</Badge>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <b className='opacity-50 text-sm'>Start date:</b>
                  <span className='font-medium text-right'>
                    Tuesday, 13th Apr 20PM
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <b className='opacity-50 text-sm'>End date:</b>
                  <span className='font-medium text-right'>
                    Friday, 21th Apr 20PM
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <b className='opacity-50 text-sm'>Limit:</b>
                  <Badge variant='secondary' className='text-base'>
                    42
                  </Badge>
                </div>
                <div className='flex items-center justify-between'>
                  <b className='opacity-50 text-sm'>Acceptance:</b>
                  <Badge variant='secondary' className='text-base'>
                    85%
                  </Badge>
                </div>
              </div>
              <Button className='text-center'>
                <Eye className='mr-2' /> See job description
              </Button>
            </Card>
            <div className='flex flex-col gap-4 flex-1'>
              <Card className='p-4'>
                <div>
                  <h3 className='font-bold mb-2 text-lg text-foreground'>
                    Campaign portal
                  </h3>
                  DATATALBE
                </div>
              </Card>
              <Card className='p-4'>
                <div>
                  <h3 className='font-bold mb-2 text-lg text-foreground'>
                    Applicants (20)
                  </h3>
                  DATATALBE
                </div>
              </Card>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Campaign;
