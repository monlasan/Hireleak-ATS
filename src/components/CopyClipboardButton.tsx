'use client';

import { Check, Copy } from 'lucide-react';
import React from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const CopyClipboardButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
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
    <button
      onClick={handleCopy(text)}
      className={cn('w-8 flex justify-center items-center h-8', className)}
    >
      {isCopied ? (
        <Check className='opacity-75' size={20} />
      ) : (
        <Copy className='opacity-75' size={20} />
      )}
    </button>
  );
};

export default CopyClipboardButton;
