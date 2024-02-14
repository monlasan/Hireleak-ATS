// import { Button } from '../ui/button';
// import { Download } from 'lucide-react';
// import { DataTable } from '../data-table';

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

// import {
//   columns as ApplicantsColumnDef,
//   Payment,
// } from '@/components/DatatableApplicantsColumnDef';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: '728ed52f',
//       amount: 100,
//       status: 'pending',
//       email: 'm@example.com',
//     },
//     // ...
//   ];
// }

// const DatatablePassingApplicants = async () => {
//   const applicants = await getData();
//   return (
//     <div className='mt-2 overflow-hidden'>
//       <Table className='w-96 overflow-hidden'>
//         <TableCaption>A lisst of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Invoice</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Method</TableHead>
//             <TableHead className='text-right'>Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow>
//             <TableCell className='font-medium'>INV001</TableCell>
//             <TableCell>Paid</TableCell>
//             <TableCell>Credit Card</TableCell>
//             <TableCell className='text-right'>$250.00</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       {/* <DataTable columns={ApplicantsColumnDef} data={applicants} /> */}
//     </div>
//   );
// };

// export default DatatablePassingApplicants;
