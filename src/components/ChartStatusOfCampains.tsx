'use client';
// import React from 'react';
// import { Card } from './ui/card';
// import { BarList } from '@tremor/react';

// type Props = {
//   userData: any;
// };

// export const ChartStatusOfCampains = ({ userData }: Props) => {
//   // @ts-ignore
//   const userDistribution = userData.reduce((acc, user) => {
//     acc[user.role] = (acc[user.role] || 0) + 1;
//     return acc;
//   }, {});
//   const data = Object.keys(userDistribution).map((role) => ({
//     name: role,
//     // @ts-ignore
//     value: userDistribution[role],
//   }));

//   return (
//     <Card className='p-4 pb-6 flex-1'>
//       <div className='pt-1 pb-4'>
//         <h4 className='text-sm font-medium'>Campaigns status overview</h4>
//       </div>
//       <BarList color='indigo' data={data} />
//     </Card>
//   );
// };

import React from 'react';
import { Card } from './ui/card';
import { BarChart, BarList } from '@tremor/react';

type Props = {
  userData: any;
};

export const ChartStatusOfCampains = ({ userData }: Props) => {
  const chartdata = [
    {
      name: 'Pending',
      Pending: 1,
    },
    {
      name: 'Running',
      Running: 5,
    },
    {
      name: 'Canceled',
      Canceled: 3,
    },
    {
      name: 'Completed',
      Completed: 8,
    },
  ];

  // @ts-ignore
  const userDistribution = userData.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});
  const data = Object.keys(userDistribution).map((role) => ({
    name: role,
    // @ts-ignore
    value: userDistribution[role],
  }));

  return (
    <Card className='p-4 text-sm pb-6 flex-1'>
      <div className='pt-1 pb-4'>
        <h4 className='font-medium'>Campaigns status overview</h4>
      </div>
      <BarChart
        className='h-52 lg:h-80'
        data={chartdata}
        index='name'
        showXAxis={false}
        categories={['Pending', 'Running', 'Canceled', 'Completed']}
        colors={['yellow', 'indigo', 'red', 'green']}
        yAxisWidth={50}
        customTooltip={customTooltip}
      />
    </Card>
  );
};

const customTooltip = ({ payload, active }: any) => {
  if (!active || !payload) return null;
  return (
    <div className='w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border'>
      {payload.map((category: any, idx: number) => (
        <div key={idx} className='flex flex-1 space-x-2.5'>
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className='space-y-1'>
            <p className='text-tremor-content'>{category.dataKey}</p>
            <p className='font-medium text-tremor-content-emphasis'>
              {category.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
