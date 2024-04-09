import React from 'react';
import CampaignGeneralInformations from '@/components/CampaignGeneralInformations';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { DataTable } from '@/components/data-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Ban,
  Copy,
  Download,
  FileSliders,
  Link as LinkIcon,
  UserSearch,
} from 'lucide-react';

import { cn, getCampaignStatus } from '@/lib/utils';
import Link from 'next/link';
import CampaignPortalClipboard from '@/components/CampaignPortalClipboard';
import CopyClipboardButton from '@/components/CopyClipboardButton';
import DatatableCampaignApplicants from '@/components/datatables/DatatableCampaignApplicants';
import { getCampaign, updateCampaign } from '@/lib/actions/campaign.actions';
import { processCampaignResumes } from '@/lib/actions/resume-processing.actions';
import { toast } from 'sonner';
import { type Campaign } from '@/lib/types';
import EditCampaignForm from '@/components/EditCampaignForm';
import BtnResumeOrCancelCampaign from '@/components/BtnResumeOrCancelCampaign';

const Campaign = async ({ params }: { params: { id: string } }) => {
  const fetchedCampaign = await getCampaign(parseInt(params.id));
  const { data, error } = JSON.parse(fetchedCampaign);
  if (error?.message) {
    toast.error(error?.message);
    return <div>Something went wrong while fetching the campaign.</div>;
  }
  const campaign: Campaign = data[0];
  console.log(
    '== APPLICANTS 🟡 ==============================================='
  );
  console.log(campaign?.applicants);

  // const processedCampaign = await processCampaignResumes();
  // @ts-ignore;
  // const { data: processingResults, error: errorProcessing } = processedCampaign;
  // if (errorProcessing?.message) {
  //   toast.error(errorProcessing?.message);
  //   return <div>Something went wrong while processing the campaign.</div>;
  // }
  // const results = processingResults;
  // console.log('== RESULTS ✅ ===============================================');
  // console.log(processedCampaign);

  // Process the campaign application

  return (
    <MaxWidthWrapper>
      <div className='py-16 pt-8 flex flex-col gap-4'>
        <div className='flex  flex-wrap justify-between gap-3'>
          <h1 className='text-3xl font-semibold text-foreground'>
            {campaign.name}
          </h1>
        </div>
        <DatatableCampaignApplicants applicants={campaign?.applicants!} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Campaign;
