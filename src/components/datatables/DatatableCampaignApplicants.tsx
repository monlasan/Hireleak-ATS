import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { DataTable } from '../data-table';
import {
  columns as ApplicantsColumnDef,
  Payment,
} from '@/components/DatatableApplicantsColumnDef';

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

const DatatableCampaignApplicants = async () => {
  const applicants = await getData();
  return (
    <Card className='p-4'>
      <div className='flex mb-4 flex-wrap items-center justify-between gap-3'>
        <h3 className='font-medium text-lg text-foreground'>Applicants (20)</h3>
        <Button size='sm' variant='outline'>
          <Download className='mr-2' size={21} />
          Export to CSV
        </Button>
      </div>
      <DataTable columns={ApplicantsColumnDef} data={applicants} />
    </Card>
  );
};

export default DatatableCampaignApplicants;
