import { DonutChart } from '@tremor/react';
import React from 'react';
import { Card } from './ui/card';

const ChartApplicantsNumbersByCampaign = () => {
  const cities = [
    {
      name: 'New York',
      sales: 9800,
    },
    {
      name: 'London',
      sales: 4567,
    },
    {
      name: 'Hong Kong',
      sales: 3908,
    },
    {
      name: 'San Francisco',
      sales: 2400,
    },
    {
      name: 'Singapore',
      sales: 1908,
    },
    {
      name: 'Zurich',
      sales: 1398,
    },
  ];

  return (
    <Card className='p-4 pb-6 flex flex-col flex-1'>
      <div className='pt-1 pb-4'>
        <h4 className='text-sm font-medium'>Applicants count by campaign</h4>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <DonutChart
          data={cities}
          category='sales'
          index='name'
          // valueFormatter={valueFormatter}
          colors={['emerald', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </div>
    </Card>
  );
};

export default ChartApplicantsNumbersByCampaign;
