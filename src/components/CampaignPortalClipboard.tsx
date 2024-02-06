'use client';

import { Check, Copy, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { useCopyToClipboard } from 'usehooks-ts';

const CampaignPortalClipboard = ({ url }: { url: string }) => {
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        setIsCopied((c) => (c = true));
      })
      .catch((error) => {
        // toast.error('Failed to copy!')
      });
  };

  return (
    <div className='p-2 px-3 border flex items-center gap-2 bg-zinc-50 rounded'>
      <LinkIcon size={18} className='text-zinc-600' />
      <Link
        href='/'
        target='_blank'
        className='text-primary hover:underline max-w-sm overflow-hidden truncate'
      >
        {url}
      </Link>
      <div className='ml-auto'>
        <Button
          onClick={handleCopy(url)}
          size='icon'
          className='w-8 h-8'
          variant='outline'
        >
          {isCopied ? (
            <Check className='opacity-75' size={16} />
          ) : (
            <Copy className='opacity-75' size={16} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default CampaignPortalClipboard;
