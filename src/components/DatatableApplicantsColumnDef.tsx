'use client';

import { Applicant } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Applicant>[] = [
  {
    accessorKey: 'first_name',
    header: 'First name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
