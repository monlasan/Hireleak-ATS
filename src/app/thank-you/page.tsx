import { Check, CheckCircle } from 'lucide-react';
import React from 'react';

const ThankYou = () => {
  return (
    <div className='w-screen p-8 gap-6 h-screen flex justify-center flex-col items-center'>
      <div>
        <CheckCircle size={100} className='text-emerald-500' />
      </div>
      <h1 className='text-center font-bold text-3xl max-w-52'>
        Thank you for applying.
      </h1>
    </div>
  );
};

export default ThankYou;
