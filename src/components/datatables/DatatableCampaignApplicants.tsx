import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { DataTable } from '../data-table';
import { columns as ApplicantsColumnDef } from '@/components/DatatableApplicantsColumnDef';
import { Applicant } from '@/lib/types';

const DatatableCampaignApplicants = async ({
  applicants,
}: {
  applicants: Applicant[];
}) => {
  return (
    <Card className='p-4'>
      <div className='flex mb-4 flex-wrap items-center justify-between gap-3'>
        <h3 className='font-medium text-lg text-foreground'>
          Applicants ({applicants.length})
        </h3>
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
