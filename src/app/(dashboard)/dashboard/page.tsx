import ChartApplicantsNumbersByCampaign from '@/components/ChartApplicantsNumbersByCampaign';
import { ChartStatusOfCampains } from '@/components/ChartStatusOfCampains';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
// import DatatablePassingApplicants from '@/components/datatables/Datatable-PassingApplicants';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download, Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import NewCampaignForm from '@/components/NewCampaignForm';
import WelcomeUser from '@/components/WelcomeUser';

const Dashboard = () => {
  const userData = [
    {
      id: 'e17c705f-ec44-4581-8c52-c48faeb1d1c0',
      reference: 'CON-f41c72ff79',
      email: 'roroguidi@gmail.com',
      first_name: 'Roselin',
      last_name: 'GBAGUIDI',
      phone_number: '58741256',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'CONSTRUCTOR',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:56:49.301Z',
      updated_at: '2024-01-31T23:56:49.301Z',
    },
    {
      id: 'a66680ee-0212-4701-bf18-53fd35499e8f',
      reference: 'CON-bb39265765',
      email: 'jennyarman@gmail.com',
      first_name: 'Jennifer',
      last_name: 'Armantrou',
      phone_number: '58222336',
      gender: 'WOMAN',
      group: 'COLLABORATORS',
      role: 'CONSTRUCTOR',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:57:39.546Z',
      updated_at: '2024-01-31T23:57:39.546Z',
    },
    {
      id: 'a5687415-d7a1-404b-bc9b-3f8b66c2d6ca',
      reference: 'CON-8c87cb4d57',
      email: 'ezioauditore@gmail.com',
      first_name: 'Ezio',
      last_name: 'AUDITORE',
      phone_number: '155664115',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'PROVIDER',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:58:16.728Z',
      updated_at: '2024-01-31T23:58:16.728Z',
    },
    {
      id: '04adcf5e-e126-4aa0-a4a7-d084e49aed4c',
      reference: 'CON-d356a5c4a9',
      email: 'kevdurant@gmail.com',
      first_name: 'Kevin',
      last_name: 'Durant',
      phone_number: '21896267',
      gender: 'MAN',
      group: 'COLLABORATORS',
      role: 'COMMERCIAL',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:58:58.279Z',
      updated_at: '2024-01-31T23:58:58.279Z',
    },
    {
      id: '22db1890-66dc-423c-86ea-e89acb0428af',
      reference: 'CON-a2fb26bf4d',
      email: 'marmonroe@yahoo.mail',
      first_name: 'Marilyn',
      last_name: 'Monroe',
      phone_number: '96325417',
      gender: 'WOMAN',
      group: 'COLLABORATORS',
      role: 'PROVIDER',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-31T23:59:35.950Z',
      updated_at: '2024-01-31T23:59:35.950Z',
    },
    {
      id: '10897dd1-4e84-4ddf-91dc-8c1788c4c4ba',
      reference: 'CON-57bfc7e584',
      email: 'khaledsannyaml@gmail.com',
      first_name: 'Khaled',
      last_name: 'SANNY',
      phone_number: '61640292',
      gender: 'MAN',
      group: 'ADMINS',
      role: 'ADMIN',
      avatar_url:
        'https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg',
      is_email_verified: false,
      created_at: '2024-01-25T23:15:02.860Z',
      updated_at: '2024-01-26T13:01:17.624Z',
    },
    {
      id: '4d353cf4-118a-4862-9a49-857880ea4799',
      reference: 'CON-c9f92e3a9c',
      email: 'antomiss@gmail.com',
      first_name: 'Antony',
      last_name: 'MINSSINHOUN',
      phone_number: '61640292',
      gender: 'MAN',
      group: 'ADMINS',
      role: 'ADMIN',
      avatar_url:
        'https://khaledsanny.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkhaled_sanny.11d7c49e.jpg&w=256&q=75',
      is_email_verified: false,
      created_at: '2024-01-25T22:53:27.363Z',
      updated_at: '2024-01-31T23:39:58.879Z',
    },
  ];

  return (
    <>
      <div className='bg-zinc-800'>
        <MaxWidthWrapper>
          <div className='pt-10 pb-24 flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 gap-5 text-white '>
              <div className=''>
                <WelcomeUser />
                <p className='text-zinc-400 mt-2'>
                  Have an insight on all the important metrics about your
                  campaigns.
                </p>
              </div>
              {/* <div className='flex flex-col md:justify-end md:items-end'> */}
              <div className='flex flex-col md:items-end md:justify-end'>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className='w-fit'>
                      <Plus className='mr-2' />
                      Create campaign
                    </Button>
                  </SheetTrigger>
                  <SheetContent className='w-full sm:max-w-max'>
                    <SheetHeader className='pb-4'>
                      <SheetTitle>New campaign</SheetTitle>
                      {/* <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription> */}
                    </SheetHeader>
                    <NewCampaignForm />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className='flex flex-col -mt-16 md:-mt-14 gap-4'>
          {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> */}
          <div className='flex flex-col w-full flex-1 lg:flex-row flex-wrap gap-4'>
            <div className='flex flex-1 flex-col sm:flex-row flex-wrap gap-4'>
              <ChartStatusOfCampains userData={userData} />
              <ChartApplicantsNumbersByCampaign />
            </div>
            {/* <Card className='px-4 pt-2.5 overflow-auto pb-6 text-sm '> */}
            {/* <div className='flex flex-wrap flex-col sm:flex-row items-center gap-3 justify-between sm:h-[40px]'>
                <h4 className='font-medium whitespace-nowrap'>
                  Passing applicants (20)
                </h4>
                <Button size='sm' variant='outline'>
                  <Download className='mr-2' size={21} />
                  Export to CSV
                </Button>
              </div> */}
            {/* <ScrollArea className='w-full flex-1 h-[300px] '> */}
            {/* <DatatablePassingApplicants /> */}
            {/* </ScrollArea> */}
            {/* </Card> */}
          </div>
          {/* <Card className='p-6'>
            <p>Lorem ipsum</p>
          </Card> */}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Dashboard;
