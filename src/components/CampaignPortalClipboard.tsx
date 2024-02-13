'use client';

import { Check, Copy, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { toast } from 'sonner';

const CampaignPortalClipboard = ({ url }: { url: string }) => {
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        setIsCopied((c) => (c = true));
        setTimeout(() => setIsCopied((c) => (c = false)), 500);
      })
      .catch((error) => {
        toast.error('Failed to copy!');
      });
  };

  return (
    <div className='p-2 mt-4 px-3 border flex-wrap w-full flex items-center gap-2 bg-zinc-50 rounded'>
      <div>
        <LinkIcon size={18} className='text-zinc-600' />
      </div>
      {/* <div className='flex-1 overflow-hidden w-full  truncate border'> */}
      <Link
        href={url}
        target='_blank'
        className='text-primary text-sm hover:underline flex-1 w-full text-ellipsis line-clamp-1 min-w-40'
      >
        {url}
      </Link>
      {/* </div> */}
      <div className='ml-auto'>
        <button
          onClick={handleCopy(url)}
          className='w-fit mr-0.5 flex justify-center items-center h-8'
        >
          {isCopied ? (
            <Check className='opacity-75' size={20} />
          ) : (
            <Copy className='opacity-75' size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default CampaignPortalClipboard;
