import React from 'react';
import CampaignGeneralInformations from '@/components/CampaignGeneralInformations';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { DataTable } from '@/components/data-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Copy, Download, Link as LinkIcon } from 'lucide-react';
import {
  columns as ApplicantsColumnDef,
  Payment,
} from '@/components/DatatableApplicantsColumnDef';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CampaignPortalClipboard from '@/components/CampaignPortalClipboard';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ];
}

const Campaign = async () => {
  const applicants = await getData();

  return (
    <MaxWidthWrapper>
      <div className='py-16 pt-8 flex flex-col gap-6'>
        <div className='flex justify-between gap-3'>
          <h1 className='text-3xl font-semibold text-foreground'>
            Senior FrontEnd Developer
          </h1>
          <div className='flex items-center gap-3'>
            <Button size='sm' variant='white'>
              Update campaign
            </Button>
            <Button size='sm' variant='destructive'>
              Cancel campaign
            </Button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
          <CampaignGeneralInformations />
          <div className='flex flex-col gap-4 flex-1'>
            <Card className='p-4'>
              <div>
                <h3 className='font-medium mb-2 text-lg text-foreground'>
                  Campaign portal
                </h3>
                <CampaignPortalClipboard url='https://embauch.io/campaigns/728ed52f/senior-frontend-software-engineer/' />
              </div>
            </Card>
            <Card className='p-4'>
              {/* <CardHeader> */}
              <div className='flex mb-4 flex-wrap items-center justify-between gap-3'>
                <h3 className='font-medium text-lg text-foreground'>
                  Applicants (20)
                </h3>
                <Button size='sm' variant='outline'>
                  <Download className='mr-2' size={21} />
                  Export to CSV
                </Button>
              </div>
              {/* </CardHeader> */}
              {/* <CardContent> */}
              <DataTable columns={ApplicantsColumnDef} data={applicants} />
              {/* </CardContent> */}
            </Card>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Campaign;
