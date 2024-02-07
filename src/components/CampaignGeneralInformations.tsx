import React from 'react';
import { Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const CampaignGeneralInformations = () => {
  return (
    <Card className='pb-5 flex-1 md:max-w-80 divide-y flex flex-col'>
      <h3 className='font-medium text-lg text-foreground p-4'>
        General informations
      </h3>
      <div className='py-3 px-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between '>
          <span className='opacity-50 text-sm'>Status:</span>
          <Badge>Running</Badge>
        </div>
        <div className='flex items-center justify-between '>
          <span className='opacity-50 text-sm'>Created at:</span>
          <span className='font-normal text-sm opacity-70 text-right'>
            Tuesday, 13th Apr 20PM
          </span>
        </div>
      </div>
      <div className='py-3 px-4'>
        <div className='flex items-center justify-between'>
          <span className='opacity-50 text-sm'>Start date:</span>
          <span className='font-normal text-right'>Tuesday, 13th Apr 20PM</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='opacity-50 text-sm'>End date:</span>
          <span className='font-normal text-right'>Friday, 21th Apr 20PM</span>
        </div>
      </div>
      <div className='flex items-center justify-between py-3 px-4'>
        <span className='opacity-50 text-sm'>Limit:</span>
        <Badge variant='secondary' className='text-base'>
          42
        </Badge>
      </div>
      <div className='flex items-center justify-between py-3 px-4'>
        <span className='opacity-50 text-sm'>Acceptance:</span>
        <Badge variant='secondary' className='text-base'>
          85%
        </Badge>
      </div>
      <div className='pt-4 px-4 flex'>
        <Dialog>
          <DialogTrigger asChild className='flex-1'>
            <Button className='text-center w-full'>
              <Eye className='mr-2' /> See job description
            </Button>
          </DialogTrigger>
          <DialogContent className='w-full max-w-4xl'>
            <DialogHeader>
              <DialogTitle>Job description</DialogTitle>
              <DialogDescription>Senior software engineer</DialogDescription>
            </DialogHeader>
            <Card className='p-4 text-sm font-normal flex flex-col gap-3'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                eius doloribus molestiae voluptas exercitationem quibusdam quo,
                similique dolore dolor ex? Molestiae dolor ad nisi molestias
                exercitationem! Quas odio porro expedita. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit.
              </p>
              <p>
                Magni eius doloribus molestiae voluptas exercitationem quibusdam
                quo, similique dolore dolor ex? Molestiae dolor ad nisi
                molestias exercitationem! Quas odio porro expedita. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Magni eius
                doloribus molestiae voluptas exercitationem quibusdam quo,
                similique dolore dolor ex? Molestiae dolor ad nisi molestias
                exercitationem! Quas odio porro expedita.
              </p>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default CampaignGeneralInformations;
