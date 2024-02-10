import React from 'react';
import CampaignGeneralInformations from '@/components/CampaignGeneralInformations';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { DataTable } from '@/components/data-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Copy, Download, Link as LinkIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import CampaignPortalClipboard from '@/components/CampaignPortalClipboard';
import CopyClipboardButton from '@/components/CopyClipboardButton';
import DatatableCampaignApplicants from '@/components/datatables/DatatableCampaignApplicants';

const Campaign = async () => {
  const campaign_url =
    'https://embauch.io/apply/opensi/senior-frontend-software-engineer/';
  /**
   * TODO: Don't forget to make this iframe text dynamic
   */
  const iframeText = `<iframe 
  name='<IFRAME_NAME>' 
  title='<IFRAME_TITLE>' 
  loading='lazy' 
  src="${campaign_url}" 
  frameborder="0" 
  allowfullscreen 
/>`;

  return (
    <MaxWidthWrapper>
      <div className='py-16 pt-8 flex flex-col gap-4'>
        <div className='flex  flex-wrap justify-between gap-3'>
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
        <div className='flex flex-col lg:flex-row flex-1 gap-4'>
          <Card className='p-4 w-full lg:max-w-3xl'>
            <h3 className='font-medium mb-2 text-lg text-foreground'>
              Campaign portal
            </h3>
            <div className='fl'>
              <CampaignPortalClipboard url={campaign_url} />
              {/* <div className='mt-3 w-full h-full rounded overflow-hidden'> */}
              <div className='mt-3 rounded w-full overflow-hidden'>
                <div className='p-3 text-zinc-600 py-2 border bg-zinc-50 text-sm'>
                  Embed as iframe
                </div>
                <div className='relative w-full isolate rounded-br rounded-bl overflow-hidden'>
                  <CopyClipboardButton
                    className='absolute z-10 text-white top-2 right-2'
                    text={iframeText}
                  />
                  <SyntaxHighlighter
                    customStyle={{
                      width: '100%',
                      overflow: 'auto',
                      overflowY: 'hidden',
                      padding: '0.75rem',
                    }}
                    style={dracula}
                    language='htmlbars'
                  >
                    {iframeText}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </Card>
          <CampaignGeneralInformations />
        </div>
        <Card className='p-4'>
          <div className='flex mb-4 flex-wrap items-center justify-between gap-3'>
            <h3 className='font-medium text-lg text-foreground'>
              Applicants (20)
            </h3>
            <Button size='sm' variant='outline'>
              <Download className='mr-2' size={21} />
              Export to CSV
            </Button>
          </div>
          <DatatableCampaignApplicants />
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default Campaign;
