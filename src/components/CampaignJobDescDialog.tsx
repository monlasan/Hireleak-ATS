'use client';
import { Card } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Eye } from 'lucide-react';

const CampaignJobDescDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className='flex-1'>
        <Button className='text-center w-full'>
          <Eye className='mr-2' /> See job description
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-w-4xl'>
        <DialogHeader>
          <DialogTitle>Job description</DialogTitle>
          <DialogDescription>Senior software engineer</DialogDescription>
        </DialogHeader>
        <Card className='p-4 text-sm font-medium flex flex-col gap-3'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eius
            doloribus molestiae voluptas exercitationem quibusdam quo, similique
            dolore dolor ex? Molestiae dolor ad nisi molestias exercitationem!
            Quas odio porro expedita. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <p>
            Magni eius doloribus molestiae voluptas exercitationem quibusdam
            quo, similique dolore dolor ex? Molestiae dolor ad nisi molestias
            exercitationem! Quas odio porro expedita. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Magni eius doloribus molestiae
            voluptas exercitationem quibusdam quo, similique dolore dolor ex?
            Molestiae dolor ad nisi molestias exercitationem! Quas odio porro
            expedita.
          </p>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignJobDescDialog;
