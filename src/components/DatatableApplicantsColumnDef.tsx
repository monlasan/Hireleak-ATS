'use client';

import { Applicant } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from './ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

export const columns: ColumnDef<Applicant>[] = [
  {
    accessorKey: 'first_name',
    header: 'Applicant name',
    cell: ({ row }) => {
      const item = row.original;
      const fullName: string = item.first_name + ' ' + item.last_name;
      const photo_url = item?.photo_url || '';
      return (
        <div className='flex items-center gap-3'>
          <Avatar>
            {photo_url.length > 0 && (
              <AvatarImage src={photo_url} alt={'@' + fullName} />
            )}
            <AvatarFallback className='text-black dark:text-zinc-200'>
              {fullName.split(' ')[0][0]}
              {fullName.split(' ')[1][0]}
            </AvatarFallback>
          </Avatar>
          {fullName}
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone_number',
    header: 'Phone',
  },
  {
    id: 'Passing',
    header: 'Phone',
    cell: ({ row }) => {
      const item = row.original;

      return (
        <Badge
          className={cn(
            Boolean(JSON.parse(item.results)?.candidate_pass)
              ? 'bg-green-500 hover:bg-green-500 text-white'
              : 'bg-red-500 hover:bg-red-500 text-white'
          )}
        >
          {Boolean(JSON.parse(item.results)?.candidate_pass)
            ? 'Favourable'
            : 'Unfavourable'}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    // header: 'Actions',
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='h-8 w-8 p-0 '>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Remove</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Modifier</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
